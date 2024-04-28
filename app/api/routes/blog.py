from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.services.blog_service import create_blog_post, get_blog_posts, get_blog_post, update_blog_post, delete_blog_post

blog_router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@blog_router.get("/blogs/")
def read_blog_posts(db: Session = Depends(get_db)):
    return get_blog_posts(db)


@blog_router.get("/blogs/{blog_id}/")
def read_blog_post(blog_id: int, db: Session = Depends(get_db)):
    return get_blog_post(db, blog_id)


@blog_router.post("/blogs/")
def create_blog(title: str, content: str, db: Session = Depends(get_db)):
    return create_blog_post(db, title, content)


@blog_router.put("/blogs/{blog_id}/")
def update_blog(blog_id: int, title: str = None, content: str = None, db: Session = Depends(get_db)):
    return update_blog_post(db, blog_id, title, content)


@blog_router.delete("/blogs/{blog_id}/")
def delete_blog(blog_id: int, db: Session = Depends(get_db)):
    delete_blog_post(db, blog_id)
    return {"message": "Blog post deleted"}
