export const lessonHttpBasics = {
  id: "http-basics",
  title: "HTTP Basics (GET, POST, Headers)",

  article: `
## HTTP Basics

HTTP is the protocol that powers the web. Every API call you make is an HTTP request.

Understanding HTTP makes API work feel natural instead of magic.

---

## HTTP Methods

**GET** — fetch data. No body.

\`\`\`
GET /users/42
\`\`\`

**POST** — create something new. Sends a body.

\`\`\`
POST /users
Body: {"name": "Alice", "email": "alice@example.com"}
\`\`\`

**PUT** — replace an existing resource.

**PATCH** — update part of a resource.

**DELETE** — remove a resource.

For 90% of API work, you'll use GET and POST.

---

## URLs and Endpoints

An endpoint is a specific URL that does something.

\`\`\`
https://api.github.com/users/torvalds
https://api.github.com/repos/torvalds/linux
\`\`\`

Different paths = different data.

---

## Query Parameters

Pass extra data via the URL for GET requests.

\`\`\`
https://api.example.com/search?query=python&limit=10
\`\`\`

- \`?\` starts query params
- \`key=value\` pairs
- \`&\` separates multiple params

In Python, you pass them as a dict and the library handles encoding.

---

## Headers

Key-value pairs sent with every request. They provide metadata.

Common headers:

- \`Content-Type: application/json\` — body is JSON
- \`Authorization: Bearer <token>\` — API key authentication
- \`Accept: application/json\` — you want JSON back
- \`User-Agent: my-app/1.0\` — who's making the request

---

## Status Codes

The server's response always includes a status code.

| Code | Meaning |
|---|---|
| 200 | OK — success |
| 201 | Created — POST succeeded |
| 400 | Bad Request — your data is invalid |
| 401 | Unauthorized — missing/bad credentials |
| 403 | Forbidden — not allowed |
| 404 | Not Found — wrong URL |
| 429 | Too Many Requests — you're being rate-limited |
| 500 | Server Error — their problem |

Always check the status code before trusting the response body.

---

## Request / Response Cycle

\`\`\`text
Client (your Python script)
        |
        |  HTTP Request (method + URL + headers + body)
        ↓
API Server
        |
        |  HTTP Response (status code + headers + body)
        ↓
Client processes the response
\`\`\`

That's the full flow. Every API call follows this pattern.

---

## What you just learned

- The main HTTP methods and when to use each
- How URLs and query parameters work
- What headers are and why they matter
- How to read status codes

---

## What comes next

Next lesson: **The requests Library**
`,
};
