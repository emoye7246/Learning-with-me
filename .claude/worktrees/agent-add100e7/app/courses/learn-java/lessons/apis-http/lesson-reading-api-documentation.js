export const lessonReadingApiDocumentation = {
  id: "reading-api-documentation",
  title: "Reading API Documentation",
  hasChallenge: false,
  article: `
## Reading API Documentation

Every API comes with documentation. Being able to read it quickly and extract what you need is a core developer skill — one you'll use constantly.

---

## What API Docs Contain

Good API documentation always tells you:

1. **The base URL** — where all requests go
2. **Authentication** — how to prove who you are
3. **Endpoints** — the available resources and operations
4. **Parameters** — what inputs each endpoint accepts
5. **Response format** — what JSON you'll get back
6. **Status codes** — what errors mean
7. **Rate limits** — how many requests you can make

---

## Reading an Endpoint Definition

Here's how a typical endpoint is documented:

\`\`\`
GET /users/{username}

Description: Get a GitHub user's public profile.

Parameters:
  username  (path)    required  string  The user's GitHub login

Headers:
  Accept    application/vnd.github.v3+json

Response: 200 OK
{
  "login":        "octocat",
  "name":         "The Octocat",
  "public_repos": 8,
  "followers":    9001
}

Errors:
  404 — user not found
\`\`\`

---

## Path Parameters vs Query Parameters

**Path parameters** — part of the URL, usually required:
\`\`\`
GET /users/{username}   → GET /users/octocat
GET /repos/{owner}/{repo} → GET /repos/octocat/Hello-World
\`\`\`

**Query parameters** — appended after \`?\`, often optional:
\`\`\`
GET /search/repositories?q=java&sort=stars&order=desc
\`\`\`

---

## Reading the Response Schema

Documentation shows you the JSON fields and their types:

\`\`\`
Field            Type     Description
login            string   The user's login name
name             string   The user's display name (may be null)
public_repos     integer  Number of public repositories
followers        integer  Number of followers
created_at       string   ISO 8601 datetime
\`\`\`

This tells you exactly what fields to add to your Java class.

---

## Identifying Required vs Optional

Good docs mark which parameters are required:

\`\`\`
q         string   required   The search query
sort      string   optional   Sort by: stars, forks, updated
order     string   optional   asc or desc (default: desc)
per_page  integer  optional   Results per page (1-100, default: 30)
page      integer  optional   Page number for pagination
\`\`\`

In Java, omit optional parameters you don't need.

---

## Rate Limits

Almost all public APIs rate-limit requests to prevent abuse:

\`\`\`
GitHub API: 60 requests/hour (unauthenticated), 5000/hour (authenticated)
OpenWeatherMap: 60 calls/minute on free tier
\`\`\`

Response headers often tell you your current limit:
\`\`\`
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1615960000
\`\`\`

In Java, check these headers:
\`\`\`java
int remaining = Integer.parseInt(
    response.headers().firstValue("X-RateLimit-Remaining").orElse("0")
);
\`\`\`

---

## Authentication Schemes

| Scheme | How It Appears |
|---|---|
| API Key (query) | \`?api_key=abc123\` |
| API Key (header) | \`X-API-Key: abc123\` |
| Bearer token | \`Authorization: Bearer eyJ...\` |
| Basic auth | \`Authorization: Basic base64(user:pass)\` |
| OAuth 2.0 | \`Authorization: Bearer <oauth_token>\` |

The docs always tell you which scheme to use.

---

## Trying the API First

Before writing code, test the API with a tool:
- **curl** — command-line HTTP client
- **Postman** — GUI tool for testing APIs
- **Insomnia** — Postman alternative

\`\`\`bash
curl -H "Accept: application/vnd.github.v3+json" \\
     https://api.github.com/users/octocat
\`\`\`

If it works in curl, it will work in Java.

---

## What You Learned

- API docs always contain: base URL, auth, endpoints, parameters, response schema, status codes
- Path parameters are part of the URL; query parameters come after \`?\`
- Required vs optional parameters matter — only omit optional ones
- Rate limits are enforced and documented — check the response headers
- Test APIs manually before writing code

## What Comes Next

Now you'll learn how to authenticate with APIs.

Continue to: **11.6 Authentication — API Keys and Bearer Tokens**
`,
};
