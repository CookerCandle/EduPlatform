from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.ai import router as ai_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

app.include_router(ai_router)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/test")
def test():
    return {"status": "ok", "message": "FastAPI is working!"}


