from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.db.database import Base
from app.models.blog_post import BlogPost


class Author(Base):

    __tablename__ = "authors"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True)
    bio = Column(String(255), nullable=True)
    blog_posts = relationship("BlogPost", back_populates="author")
