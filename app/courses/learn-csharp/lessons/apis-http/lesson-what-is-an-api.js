export const lessonWhatIsAnApi = {
  id: "what-is-an-api-cs",
  title: "What Is an API?",
  hasChallenge: false,
  article: `
## What Is an API?

An **API** (Application Programming Interface) is a contract between two pieces of software. It defines what requests you can make, what data you need to send, and what response you'll get back. You don't need to know how the other side works internally — you just need to know the contract.

Think of it like ordering at a restaurant. You don't walk into the kitchen and cook your own food. You look at the menu (the API docs), tell the waiter what you want (make a request), and food arrives at your table (the response). The kitchen's internals are hidden from you.

---

## REST APIs

The most common type of API you'll work with as a developer is a **REST API** (Representational State Transfer). REST is a set of conventions for building web APIs using HTTP.

Key characteristics of REST APIs:

- They use standard HTTP methods (GET, POST, PUT, DELETE)
- Resources are identified by URLs called **endpoints**
- Responses are typically formatted as **JSON**
- They are **stateless** — each request contains all the information needed

---

## Endpoints

An endpoint is a specific URL that represents a resource or action. For example:

\`\`\`bash
GET  https://api.github.com/users/octocat
GET  https://api.github.com/users/octocat/repos
GET  https://api.openweathermap.org/data/2.5/weather?q=London
POST https://api.example.com/users
\`\`\`

Each endpoint maps to a specific resource. \`/users/octocat\` represents a single GitHub user. \`/users/octocat/repos\` represents that user's list of repositories.

---

## Requests and Responses

Every API interaction has two sides:

**Request** — what you send:
- The HTTP method (GET, POST, etc.)
- The URL (which endpoint)
- Optional headers (authentication, content type)
- Optional body (data you're sending, usually JSON)

**Response** — what you get back:
- A status code (200 OK, 404 Not Found, etc.)
- Headers (content type, rate limit info, etc.)
- A body (usually JSON data)

---

## JSON: The Lingua Franca of APIs

**JSON** (JavaScript Object Notation) is the standard format for API data exchange. Even though it has "JavaScript" in the name, every modern language can read and write it — including C#.

A typical JSON response looks like this:

\`\`\`csharp
// This is what you might receive from a weather API
// {
//   "city": "London",
//   "temperature": 15.2,
//   "condition": "Cloudy",
//   "humidity": 78,
//   "wind": {
//     "speed": 12.5,
//     "direction": "NW"
//   }
// }
\`\`\`

JSON supports strings, numbers, booleans, arrays, and nested objects — everything you need to represent structured data.

---

## Real-World Examples

APIs are everywhere. Here are some you may have already used indirectly:

| Service | What its API does |
|---|---|
| GitHub API | Fetch repos, users, issues, create gists |
| OpenWeatherMap | Get current weather and forecasts |
| Stripe | Accept payments, manage subscriptions |
| Twilio | Send SMS and make phone calls |
| Google Maps | Geocoding, directions, places search |
| Exchange Rate API | Get live currency conversion rates |

As a C# developer, you'll consume APIs regularly — pulling data, sending data, and integrating with third-party services. The skills in this module will make that feel natural.

---

## The Mental Model

Whenever you work with an API, think in three steps:

1. **What endpoint do I need?** — Read the docs
2. **What do I send?** — Method, headers, body
3. **What do I get back?** — Status code, JSON response

That loop — read docs, make request, parse response — is 90% of API work.
`,
};
