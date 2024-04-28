from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from datetime import datetime
from sqlalchemy.orm import relationship
from app.db.database import Base


class BlogPost(Base):
    __tablename__ = "blog_posts"

    id = Column(Integer, primary_key=True, index=True)
    headline = Column(String(100), nullable=False)
    introduction = Column(Text, nullable=True)
    body = Column(Text, nullable=False)
    conclusion = Column(Text, nullable=True)
    date = Column(DateTime, default=datetime.utcnow)
    author_id = Column(Integer, ForeignKey("authors.id"), nullable=False)
    author = relationship("Author", back_populates="blog_posts")
