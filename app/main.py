from fastapi import FastAPI
from app.api.routes.blog import blog_router
from app.api.routes.author import author_router
from app.db.database import Base, engine


app = FastAPI()
Base.metadata.create_all(bind=engine)

app.include_router(blog_router, prefix="/api")
app.include_router(author_router, prefix="/api")
