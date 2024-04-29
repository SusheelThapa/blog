from sqlalchemy.orm import Session
from app.models.author import Author
from fastapi import HTTPException

def create_author(db: Session, name: str, bio: str = None):
    author = Author(name=name, bio=bio)
    db.add(author)
    db.commit()
    db.refresh(author)
    return author

def get_authors(db: Session):
    return db.query(Author).all()

def get_author(db: Session, author_id: int):
    author = db.query(Author).filter(Author.id == author_id).first()
    if not author:
        raise HTTPException(status_code=404, detail="Author not found")
    return author

def update_author(db: Session, author_id: int, name: str = None, bio: str = None):
    author = get_author(db, author_id)
    if name:
        author.name = name
    if bio:
        author.bio = bio
    db.commit()
    db.refresh(author)
    return author

def delete_author(db: Session, author_id: int):
    author = get_author(db, author_id)
    db.delete(author)
    db.commit()