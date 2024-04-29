from sqlalchemy.orm import Session
from app.models.blog_post import BlogPost
from app.models.author import Author
from fastapi import HTTPException


def create_blog_post(
    db: Session,
    headline: str,
    introduction: str,
    body: str,
    conclusion: str,
    author_id: int,
):
    # Check if the author exists
    author = db.query(Author).filter(Author.id == author_id).first()
    if not author:
        raise HTTPException(status_code=404, detail="Author not found")

    new_blog_post = BlogPost(
        headline=headline,
        introduction=introduction,
        body=body,
        conclusion=conclusion,
        author=author,
    )

    db.add(new_blog_post)
    db.commit()
    db.refresh(new_blog_post)

    return new_blog_post


def get_blog_post(db: Session, blog_id: int):
    blog_post = db.query(BlogPost).filter(BlogPost.id == blog_id).first()
    if not blog_post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return blog_post


def get_blog_posts(db: Session):
    return db.query(BlogPost).all()


def update_blog_post(
    db: Session,
    blog_id: int,
    headline: str = None,
    introduction: str = None,
    body: str = None,
    conclusion: str = None,
):
    blog_post = get_blog_post(db, blog_id)

    if headline:
        blog_post.headline = headline

    if introduction:
        blog_post.introduction = introduction

    if body:
        blog_post.body = body

    if conclusion:
        blog_post.conclusion = conclusion

    db.commit()
    db.refresh(blog_post)

    return blog_post


def delete_blog_post(db: Session, blog_id: int):
    blog_post = get_blog_post(db, blog_id)
    db.delete(blog_post)
    db.commit()
