export const lessonWhatIsAnApi = {
  id: "what-is-an-api",
  title: "What Is an API?",

  article: `
## What Is an API?

API stands for Application Programming Interface.

It's a way for programs to talk to each other.

When you open a weather app, your phone isn't checking the sky. It's calling a weather API that returns current conditions as data. Your app displays that data.

---

## The Core Idea

An API is a contract.

"Send me a request in this format. I'll send back a response in this format."

You don't need to know how the server works internally. You just need to know:

- Where to send the request (the URL)
- What to send (parameters, body)
- What you'll get back (the response format)

---

## APIs Are Everywhere

- **GitHub API** — get repo data, create issues, list commits
- **OpenWeatherMap** — get current weather by city
- **Stripe API** — charge customers, create subscriptions
- **Twitter/X API** — post tweets, read timelines
- **Google Maps API** — geocode addresses, get directions

Every major platform has an API. Learning to use them opens up enormous capability.

---

## REST APIs

The most common type of API you'll use as a Python developer.

REST = Representational State Transfer. A style of API design using HTTP.

You send HTTP requests to URLs. You get back responses — usually JSON.

\`\`\`
GET https://api.example.com/users/42
→ {"id": 42, "name": "Alice", "email": "alice@example.com"}
\`\`\`

---

## What an API Request Looks Like

Every API request has:

- **Method**: GET, POST, PUT, DELETE
- **URL**: the endpoint address
- **Headers**: metadata (auth tokens, content type)
- **Body**: data you're sending (for POST/PUT)

Every response has:

- **Status code**: 200 OK, 404 Not Found, 401 Unauthorized
- **Headers**: metadata about the response
- **Body**: the actual data (usually JSON)

---

## Free APIs to Practice With

- \`https://api.github.com\` — no key required for public data
- \`https://jsonplaceholder.typicode.com\` — fake API for testing
- \`https://open-meteo.com\` — weather, no key required
- \`https://restcountries.com\` — country info, no key required

---

## What you just learned

- What an API is and why it exists
- How REST APIs work conceptually
- What makes up a request and response
- Where to find free APIs to practice with

---

## What comes next

Next lesson: **HTTP Basics (GET, POST, Headers)**
`,
};
