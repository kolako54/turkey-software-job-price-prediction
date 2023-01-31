import sys
sys.path
sys.executable
import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:15001",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
model = pickle.load(open("../model/jobsprice.pkl", "rb"))


class Candidate(BaseModel):
    level: str
    position: str
    tech_stack: str
    experience: str
    work_type: str
    city: str


@app.get("/")
def read_root():
    return {"data": "Welcome to online employee hireability prediction model"}


@app.post("/prediction/")
async def get_predict(data: Candidate):
    print('jelllo')
    sample = [data.level, data.position, data.tech_stack, data.experience, data.work_type, data.city]
    price = model.predict(sample)
    return {
        "data": {
            "prediction": price,
        }
    }


# Configuring the server host and port
uvicorn.run(app, port=15555, host="0.0.0.0")
