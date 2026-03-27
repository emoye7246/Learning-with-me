export const lessonReadingApiDocs = {
  id: "reading-api-docs-cs",
  title: "Reading API Documentation",
  hasChallenge: false,
  article: `
## Reading API Documentation

API documentation is the manual for a service's interface. Being able to read it quickly and extract what you need is a skill in itself. This lesson shows you what to look for and how to go from docs to working code.

---

## The Anatomy of API Docs

Most REST API documentation is organized around **endpoints**. Each endpoint entry typically includes:

- **HTTP method** — GET, POST, PUT, DELETE
- **URL pattern** — often with path parameters like \`/users/{username}\`
- **Description** — what the endpoint does
- **Parameters** — query params, path params, request body fields
- **Authentication requirements** — does this need a token?
- **Example request** — what a real call looks like
- **Example response** — what the JSON response looks like
- **Error codes** — what can go wrong

---

## Understanding Endpoint Specs

Here's how to read a typical endpoint spec:

\`\`\`bash
GET /repos/{owner}/{repo}
\`\`\`

Curly braces \`{owner}\` and \`{repo}\` are **path parameters** — values you substitute into the URL:

\`\`\`csharp
string owner = "microsoft";
string repo = "vscode";
string url = $"https://api.github.com/repos/{owner}/{repo}";
\`\`\`

**Query parameters** are appended after a \`?\`:

\`\`\`bash
GET /users/{username}/repos?sort=stars&per_page=10&page=1
\`\`\`

\`\`\`csharp
string url = $"https://api.github.com/users/octocat/repos?sort=stars&per_page=10";
\`\`\`

---

## The Authentication Section

Always read the authentication section first. APIs use several patterns:

**API Key in query string:**
\`\`\`csharp
string url = $"https://api.openweathermap.org/data/2.5/weather?q=London&appid={apiKey}";
\`\`\`

**API Key in header:**
\`\`\`csharp
client.DefaultRequestHeaders.Add("X-Api-Key", apiKey);
\`\`\`

**Bearer token:**
\`\`\`csharp
client.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}");
\`\`\`

The docs will specify exactly which header name and format to use — don't guess.

---

## Trying Endpoints Before You Code

Before writing any C# code, test the endpoint manually. Two great tools for this:

**curl (command line):**
\`\`\`bash
curl -H "Authorization: Bearer your-token" \\
     https://api.github.com/users/octocat
\`\`\`

**Postman / Insomnia (GUI apps):**
These let you send requests, inspect responses, and save your work. They're invaluable for understanding an API before you integrate it.

Once you can see a successful response in curl or Postman, you know the API is working and what the JSON looks like — then you write C# to do the same thing.

---

## Reading Response Schemas

API docs usually show you the response shape. Read this carefully to build your DTOs:

\`\`\`bash
# Typical docs might show:
# Response body:
# {
#   "id": integer,
#   "name": string,
#   "full_name": string,
#   "private": boolean,
#   "description": string | null,
#   "stargazers_count": integer,
#   "language": string | null
# }
\`\`\`

Fields marked as nullable (\`string | null\`) should be \`string?\` in your C# DTO.

---

## Rate Limits

Most public APIs have rate limits — a cap on how many requests you can make per minute or hour. The docs will tell you:

- How many requests per time window (e.g., 60/hour for unauthenticated GitHub requests)
- Which headers tell you your current limit (\`X-RateLimit-Remaining\`)
- What happens when you exceed the limit (usually a 429 status code)

\`\`\`csharp
HttpResponseMessage response = await client.GetAsync(url);

if (response.Headers.TryGetValues("X-RateLimit-Remaining", out var values))
{
    Console.WriteLine($"Requests remaining: {values.First()}");
}
\`\`\`

---

## Common Documentation Sites

| API | Docs URL |
|---|---|
| GitHub | docs.github.com/en/rest |
| OpenWeatherMap | openweathermap.org/api |
| ExchangeRate API | exchangeratesapi.io/documentation |
| wttr.in | github.com/chubin/wttr.in |
| JSONPlaceholder | jsonplaceholder.typicode.com |

JSONPlaceholder is especially useful — it's a free fake REST API for learning, no account required.

---

## A Workflow That Works

1. Find the endpoint you need in the docs
2. Check what auth is required
3. Test with curl or Postman — confirm you get the expected response
4. Look at the response JSON — sketch out your DTO
5. Write the C# code to replicate what you did manually
6. Handle edge cases (nulls, errors, rate limits)

Following this order prevents you from writing code that doesn't work because you misread the docs.
`,
};
