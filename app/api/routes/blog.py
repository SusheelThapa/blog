from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.services.blog_service import (
    create_blog_post,
    get_blog_posts,
    get_blog_post,
    update_blog_post,
    delete_blog_post,
)

blog_router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Get all blog posts
@blog_router.get("/blogs/")
def read_blog_posts(db: Session = Depends(get_db)):
    return get_blog_posts(db)

# Get a specific blog post
@blog_router.get("/blogs/{blog_id}/")
def read_blog_post(blog_id: int, db: Session = Depends(get_db)):
    return get_blog_post(db, blog_id)

# Create a new blog post
@blog_router.post("/blogs/")
def create_blog(
    headline: str,
    introduction: str,
    body: str,
    conclusion: str,
    author_id: int,
    db: Session = Depends(get_db),
):
    return create_blog_post(db, headline, introduction, body, conclusion, author_id)

# Update an existing blog post
@blog_router.put("/blogs/{blog_id}/")
def update_blog(
    blog_id: int,
    headline: str = None,
    introduction: str = None,
    body: str = None,
    conclusion: str = None,
    db: Session = Depends(get_db),
):
    return update_blog_post(db, blog_id, headline, introduction, body, conclusion)

# Delete a blog post
@blog_router.delete("/blogs/{blog_id}/")
def delete_blog(blog_id: int, db: Session = Depends(get_db)):
    delete_blog_post(db, blog_id)
    return {"message": "Blog post deleted"}