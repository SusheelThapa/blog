from sqlalchemy.orm import Session
from app.models.blog_post import BlogPost
from fastapi import HTTPException


def get_blog_posts(db: Session):
    return db.query(BlogPost).all()


def get_blog_post(db: Session, blog_id: int):
    blog_post = db.query(BlogPost).filter(BlogPost.id == blog_id).first()
    if not blog_post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return blog_post


def create_blog_post(db: Session, title: str, content: str):
    new_blog_post = BlogPost(title=title, content=content)
    db.add(new_blog_post)
    db.commit()
    db.refresh(new_blog_post)
    return new_blog_post


def update_blog_post(db: Session, blog_id: int, title: str = None, content: str = None):
    blog_post = get_blog_post(db, blog_id)
    if title:
        blog_post.title = title
    if content:
        blog_post.content = content
    db.commit()
    db.refresh(blog_post)
    return blog_post


def delete_blog_post(db: Session, blog_id: int):
    blog_post = get_blog_post(db, blog_id)
    db.delete(blog_post)
    db.commit()
