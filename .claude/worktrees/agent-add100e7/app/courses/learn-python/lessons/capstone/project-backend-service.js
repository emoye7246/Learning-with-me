export const projectBackendService = {
  id: "capstone-backend-service",
  title: "Capstone: Backend Service",

  article: `
## Overview

Build a REST API with multiple endpoints, data persistence, and proper error handling.

This is the kind of service that powers real applications. A mobile app, a frontend, or another script will call your API. Your job is to build the backend that responds correctly, stores data reliably, and handles failure gracefully.

---

## What Makes This Different

A backend service is designed to be consumed by other code — not by humans typing into a terminal. That changes how you think about responses, errors, and data validation.

Every response must be predictable. Every error must be informative. Every endpoint must handle bad input without crashing.

---

## Project Options

Choose a domain for your service:

- **Task API** — create, read, update, delete tasks with tags and completion status
- **Book library API** — manage a collection of books with search, checkout, and return
- **Personal budget API** — log income/expenses, query by category, return summaries
- **Recipe API** — store recipes, search by ingredient, return scaled versions
- **Simple user + notes API** — create users, attach notes to users, list notes by user

---

## Functional Requirements

Your service must:

- [ ] Have at least 4 endpoints covering at minimum Create, Read, and Delete operations
- [ ] Accept and return JSON for all requests and responses
- [ ] Validate incoming data and return a 422 or 400 response with a helpful message if invalid
- [ ] Persist data between server restarts (JSON file or SQLite)
- [ ] Return correct HTTP status codes (200, 201, 404, 400/422)
- [ ] Return a 404 response with a message when a requested resource doesn't exist
- [ ] Have an auto-generated \`/docs\` page (FastAPI) or equivalent documentation

---

## Non-Functional Requirements

- [ ] No crashes on bad input — every route handles errors explicitly
- [ ] Secrets and config are in environment variables, not in source code
- [ ] Has a \`requirements.txt\` and a \`README.md\` with setup and usage instructions
- [ ] Endpoints are tested manually (using curl, httpie, or the built-in \`/docs\` UI)

---

## Suggested Project Structure

\`\`\`text
backend-service/
  main.py            ← FastAPI app and route definitions
  models.py          ← Pydantic models for request/response bodies
  storage.py         ← data load/save logic
  routers/
    items.py         ← grouped route handlers (optional for larger APIs)
  data/
    db.json          ← persisted data
  requirements.txt
  README.md
\`\`\`

---

## Implementation Milestones

1. Install FastAPI and Uvicorn. Create a \`main.py\` with one endpoint that returns \`{"status": "ok"}\`.
2. Define your Pydantic models for request and response bodies.
3. Implement the storage layer: load from and save to a JSON file (or SQLite).
4. Implement the Create endpoint: validate input, save, return 201 with the created item.
5. Implement the Read endpoints: list all items, get one by ID (404 if not found).
6. Implement the Delete endpoint: remove by ID, 404 if not found, 200 on success.
7. Add Update (PUT or PATCH) if applicable to your domain.
8. Test every endpoint. Write the README.

---

## Testing Checklist

- [ ] \`GET /items\` returns an empty list on first run, then returns items as they're added
- [ ] \`POST /items\` with valid data returns 201 and the created item
- [ ] \`POST /items\` with missing required fields returns 422 with an error explanation
- [ ] \`GET /items/{id}\` returns the correct item
- [ ] \`GET /items/{id}\` for a nonexistent ID returns 404
- [ ] \`DELETE /items/{id}\` removes the item; subsequent \`GET\` returns 404
- [ ] Restart the server and confirm data is still present
- [ ] Send completely malformed JSON — the server should return an error, not crash

---

## Optional Extensions

- [ ] Add a search/filter endpoint (\`GET /items?tag=urgent\`)
- [ ] Add basic API key authentication (check a header value)
- [ ] Switch storage from JSON file to SQLite using \`sqlite3\` or SQLAlchemy
- [ ] Write automated tests using \`httpx\` and \`pytest\`
- [ ] Deploy to a free host (Render, Railway, or Fly.io)

---

## Submission Requirements

Entry file: \`main.py\`

Run with:

\`\`\`bash
uvicorn main:app --reload
\`\`\`

Test with:

\`\`\`bash
curl http://localhost:8000/items
curl -X POST http://localhost:8000/items -H "Content-Type: application/json" -d '{"title": "Test item"}'
\`\`\`

Repository must include \`requirements.txt\` and \`README.md\`.

---

## What This Project Proves

You can build a functional REST API — the kind that real applications consume. You understand HTTP semantics, data validation, persistence, and error handling from the server side.
`,

  support: {
    intro: `
Use this support in order.

Start with Level 1 nudges.
Move to Level 2 hints if still stuck.
Use the blueprint to unblock your approach.
    `.trim(),

    level1Nudges: [
      "What is your resource? A task, a book, a recipe? What fields does one item have?",
      "What are the four operations your API needs to support? Write out the endpoint paths and methods.",
      "What should happen when someone requests an item that doesn't exist?",
      "What makes a POST request invalid? What fields are required?",
      "How will data survive a server restart — where will it be stored?",
      "What does a successful Create response look like? What does an error response look like?",
    ],

    level2Hints: [
      "Define a Pydantic model: class Item(BaseModel): title: str; priority: int = 1. FastAPI validates automatically.",
      "Return HTTP status codes with: return JSONResponse(content={...}, status_code=201) or use Response in the function signature.",
      "Raise 404 with: from fastapi import HTTPException; raise HTTPException(status_code=404, detail='Item not found').",
      "For JSON storage: load items from a file in a startup event, or load on every request. Save after every mutation.",
      "Generate IDs with: import uuid; id = str(uuid.uuid4()). Store items as a dict keyed by ID for O(1) lookup.",
      "Test endpoints at http://localhost:8000/docs — FastAPI generates a full interactive UI automatically.",
    ],

    blueprint: [
      "pip install fastapi uvicorn. Create main.py. Add one route: GET / returns {'status': 'ok'}. Run and confirm.",
      "Define your Pydantic model in models.py with all required and optional fields.",
      "Create storage.py with load() and save(). load() returns a dict of id → item. save() writes to data/db.json.",
      "Implement GET /items: load items, return as a list.",
      "Implement POST /items: validate via Pydantic, generate ID, save, return 201 with created item.",
      "Implement GET /items/{id}: load, look up by ID, raise 404 if not found, return item.",
      "Implement DELETE /items/{id}: load, remove by ID, save, return 200 (or raise 404).",
      "Test all endpoints via /docs. Write README with setup and curl examples.",
    ],

    debuggingGuide: [
      {
        problem: "POST returns 422 even with what looks like valid data.",
        hint: "Check the Pydantic model field names and types. The JSON keys must match exactly. Visit /docs to see the expected schema.",
      },
      {
        problem: "Data is lost on every restart.",
        hint: "Confirm save() is actually writing to disk after every mutation. Check that the file path is correct and the directory exists.",
      },
      {
        problem: "GET /items/{id} always returns 404.",
        hint: "Print the IDs in your storage to confirm the format. If IDs are integers in storage but strings in the URL, the lookup will fail.",
      },
      {
        problem: "Server crashes with an unhandled exception.",
        hint: "FastAPI doesn't automatically catch all exceptions. Add a try/except inside your route function and raise HTTPException instead of letting errors propagate.",
      },
    ],

    revealSolutionWarning: `
This capstone has no example solution.

The right implementation depends on your domain. Use the blueprint to guide your structure, but make your own design decisions.
    `.trim(),
  },
};
