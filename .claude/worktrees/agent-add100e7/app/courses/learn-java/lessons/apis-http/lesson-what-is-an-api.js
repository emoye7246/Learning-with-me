export const lessonWhatIsAnApi = {
  id: "what-is-an-api",
  title: "What Is an API?",
  hasChallenge: false,
  article: `
## What Is an API?

Modern Java applications rarely work in isolation. They connect to weather services, payment processors, databases, authentication providers, and countless other services. **APIs** are how they communicate.

---

## API — Application Programming Interface

An API is a defined contract for how software components communicate. When you call \`List.add()\`, you're using the List API. When your Java program fetches data from a weather service, it's using that service's HTTP API.

This course focuses on **HTTP APIs** (also called REST APIs) — the dominant way web services communicate.

---

## How an HTTP API Works

\`\`\`
Your Java App                    Weather API Server
      │                                   │
      │  GET /weather?city=London         │
      │ ──────────────────────────────► │
      │                                   │
      │  200 OK                           │
      │  {"temperature": 12, "desc": ...} │
      │ ◄────────────────────────────── │
\`\`\`

1. Your app sends an **HTTP request** to a URL (the endpoint)
2. The server processes it
3. The server returns an **HTTP response** with data (usually JSON)

---

## REST APIs

**REST** (Representational State Transfer) is the architectural style most HTTP APIs follow:

- Resources are identified by URLs (\`/users/42\`, \`/products/123\`)
- Operations use HTTP methods (\`GET\`, \`POST\`, \`PUT\`, \`DELETE\`)
- Data is transferred in JSON (most commonly)

\`\`\`
GET    /users        → list all users
GET    /users/42     → get user 42
POST   /users        → create a new user
PUT    /users/42     → update user 42
DELETE /users/42     → delete user 42
\`\`\`

---

## What You Need to Use an API

1. **The base URL** — e.g., \`https://api.openweathermap.org\`
2. **The endpoint** — e.g., \`/data/2.5/weather\`
3. **The parameters** — query params, headers, request body
4. **Authentication** — API key, token, or OAuth
5. **The response format** — usually JSON

All of this is documented in the API's documentation.

---

## Example: A Public API Request

This is what calling the GitHub API looks like conceptually:

\`\`\`
Request:
  GET https://api.github.com/users/octocat
  Header: Accept: application/vnd.github.v3+json

Response (JSON):
  {
    "login": "octocat",
    "name": "The Octocat",
    "public_repos": 8,
    "followers": 9001
  }
\`\`\`

Your Java code sends the request and parses the JSON response — that's what this course teaches you to do.

---

## What You Learned

- An API defines how software components communicate
- HTTP APIs use URLs, HTTP methods, and JSON to exchange data
- REST is the dominant architectural style for HTTP APIs
- To use an API you need: the URL, endpoint, parameters, and authentication
- Java can call any HTTP API using the built-in \`HttpClient\`

## What Comes Next

You'll need to understand HTTP before writing code that uses it.

Continue to: **11.2 HTTP Basics — GET, POST, Headers, Status Codes**
`,
};
