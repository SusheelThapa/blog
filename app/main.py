from fastapi import FastAPI
from app.api.routes.blog import blog_router
from app.api.routes.author import author_router
from app.db.database import Base, engine
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


origins = [
    "http://localhost:5173",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(blog_router, prefix="/api")
app.include_router(author_router, prefix="/api")
