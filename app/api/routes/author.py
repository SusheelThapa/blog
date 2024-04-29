from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.services.author_service import (
    create_author,
    get_authors,
    get_author,
    update_author,
    delete_author,
)

author_router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@author_router.get("/authors/")
def read_authors(db: Session = Depends(get_db)):
    return get_authors(db)

@author_router.get("/authors/{author_id}/")
def read_author(author_id: int, db: Session = Depends(get_db)):
    return get_author(db, author_id)

@author_router.post("/authors/")
def create_new_author(name: str, bio: str = None, db: Session = Depends(get_db)):
    return create_author(db, name, bio)

@author_router.put("/authors/{author_id}/")
def update_existing_author(author_id: int, name: str = None, bio: str = None, db: Session = Depends(get_db)):
    return update_author(db, author_id, name, bio)

@author_router.delete("/authors/{author_id}/")
def delete_existing_author(author_id: int, db: Session = Depends(get_db)):
    delete_author(db, author_id)
    return {"message": "Author deleted"}