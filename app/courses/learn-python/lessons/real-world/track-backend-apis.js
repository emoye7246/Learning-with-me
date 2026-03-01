export const trackBackendApis = {
  id: "track-backend-apis",
  title: "Track: Backend APIs",

  article: `
## Backend APIs

This track is about building the server side of software.

Every app you use — mobile or web — talks to a backend. The backend receives requests, applies logic, reads or writes data, and sends responses. In Python, you build that backend.

This track focuses on building REST APIs: the kind that return JSON, power mobile apps, and let services talk to each other.

---

## What You'll Build

- REST APIs with multiple endpoints
- APIs that read and write to a database or file
- Authenticated endpoints that check API keys or tokens
- Services that call other APIs and return processed results
- Full CRUD applications (Create, Read, Update, Delete)

---

## The Core Tools

\`\`\`text
FastAPI      — Modern, fast, type-checked Python web framework (recommended)
Flask        — Older, simpler framework — still widely used
Uvicorn      — ASGI server that runs FastAPI apps
Pydantic     — Data validation using Python type hints
httpx        — HTTP client for calling other APIs from your backend
sqlite3      — Built-in database (no server required)
SQLAlchemy   — Database ORM for larger projects
\`\`\`

---

## A Taste of the Work

A minimal FastAPI application with two endpoints:

\`\`\`python
from fastapi import FastAPI

app = FastAPI()

tasks = []

@app.get("/tasks")
def get_tasks():
    return tasks

@app.post("/tasks")
def add_task(task: str):
    tasks.append(task)
    return {"message": "Task added", "task": task}
\`\`\`

Run it with:

\`\`\`bash
uvicorn main:app --reload
\`\`\`

Then visit \`http://localhost:8000/docs\` — FastAPI generates interactive documentation automatically.

---

## Why This Track Is Valuable

Backend development is one of the highest-demand Python skills. Python powers the backends of Instagram, Dropbox, Spotify, and many others.

Understanding how APIs work — from the inside — changes how you read documentation, debug network issues, and design software. Once you build your own API, consuming other people's APIs becomes trivial.

---

## Where to Start

1. Install FastAPI and Uvicorn: \`pip install fastapi uvicorn\`
2. Create a \`main.py\` with one endpoint.
3. Run it and explore the auto-generated docs at \`/docs\`.
4. Add a second endpoint that accepts POST data.
5. Gradually add persistence (start with a JSON file, then SQLite).

---

## Recommended Path

1. Learn FastAPI basics: routes, request/response models, path parameters, query parameters.
2. Add Pydantic models for typed request/response validation.
3. Add a simple data store (JSON file → SQLite).
4. Implement authentication (API keys to start).
5. Deploy to a free host like Render or Railway.

---

## What you just learned

- What the Backend APIs track covers
- Which tools you'll use and why FastAPI is the recommended starting point
- What a minimal API looks like in Python
- Where to start

---

## What comes next

Choose your first API project. The capstone section includes a backend service brief.
`,
};
