export const lessonHttpBasics = {
  id: "http-basics-cs",
  title: "HTTP Basics — GET, POST, Headers, Status Codes",
  hasChallenge: false,
  article: `
## HTTP Basics — GET, POST, Headers, Status Codes

HTTP (HyperText Transfer Protocol) is the language of the web. Every time you talk to an API, you're using HTTP. Understanding it deeply will save you hours of debugging and confusion.

---

## HTTP Verbs

HTTP defines several **methods** (also called verbs) that describe the intent of a request:

| Method | Purpose | Has Body? |
|---|---|---|
| \`GET\` | Retrieve data — read only, no side effects | No |
| \`POST\` | Create a new resource or submit data | Yes |
| \`PUT\` | Replace an entire resource | Yes |
| \`PATCH\` | Partially update a resource | Yes |
| \`DELETE\` | Remove a resource | No |

The most common ones you'll use are GET and POST. GET fetches data, POST sends data.

\`\`\`csharp
// GET: fetch the list of repos for a user
// GET https://api.github.com/users/octocat/repos

// POST: create a new issue
// POST https://api.github.com/repos/owner/repo/issues
// Body: { "title": "Bug report", "body": "Something broke" }
\`\`\`

---

## Request Headers

Headers are key-value pairs sent with every request. They provide metadata about the request — who you are, what format you're sending, what you'll accept back.

Common request headers:

| Header | Purpose | Example |
|---|---|---|
| \`Authorization\` | Authentication | \`Bearer my-token-here\` |
| \`Content-Type\` | Format of the request body | \`application/json\` |
| \`Accept\` | Format you want in the response | \`application/json\` |
| \`User-Agent\` | Identifies your app | \`MyWeatherApp/1.0\` |

\`\`\`csharp
using var client = new HttpClient();
client.DefaultRequestHeaders.Add("Authorization", "Bearer my-token");
client.DefaultRequestHeaders.Add("Accept", "application/json");
\`\`\`

---

## Response Headers

The server also sends headers back with its response:

| Header | What it tells you |
|---|---|
| \`Content-Type\` | Format of the response body |
| \`X-RateLimit-Remaining\` | How many API calls you have left |
| \`Retry-After\` | How long to wait after hitting a rate limit |
| \`Location\` | URL of newly created resource (on 201) |

---

## Status Codes

Status codes are three-digit numbers that summarize the outcome of your request. They're grouped by the first digit:

**2xx — Success**

| Code | Meaning |
|---|---|
| \`200 OK\` | Request succeeded, response body has the data |
| \`201 Created\` | Resource was created (usually after POST) |
| \`204 No Content\` | Success but no response body (common for DELETE) |

**3xx — Redirects**

| Code | Meaning |
|---|---|
| \`301 Moved Permanently\` | Resource moved to a new URL |
| \`302 Found\` | Temporary redirect |

**4xx — Client Errors** (your fault)

| Code | Meaning |
|---|---|
| \`400 Bad Request\` | Your request was malformed |
| \`401 Unauthorized\` | You need to authenticate |
| \`403 Forbidden\` | Authenticated but not allowed |
| \`404 Not Found\` | Resource doesn't exist |
| \`429 Too Many Requests\` | You hit a rate limit |

**5xx — Server Errors** (their fault)

| Code | Meaning |
|---|---|
| \`500 Internal Server Error\` | Something broke on the server |
| \`502 Bad Gateway\` | Upstream server error |
| \`503 Service Unavailable\` | Server is down or overloaded |

---

## The Request Body

For POST, PUT, and PATCH requests, you include a **body** — the data you're sending. In REST APIs, this is almost always JSON:

\`\`\`csharp
var payload = new
{
    title = "My New Issue",
    body = "This is the issue description",
    labels = new[] { "bug" }
};

string json = JsonSerializer.Serialize(payload);
var content = new StringContent(json, Encoding.UTF8, "application/json");

var response = await client.PostAsync(url, content);
\`\`\`

---

## Putting It Together

A complete HTTP exchange looks like this:

\`\`\`csharp
// You send:
// GET /users/octocat HTTP/1.1
// Host: api.github.com
// Accept: application/json
// Authorization: Bearer ghp_yourtokenhere

// Server responds:
// HTTP/1.1 200 OK
// Content-Type: application/json
//
// { "login": "octocat", "id": 583231, "public_repos": 8, ... }
\`\`\`

Understanding this exchange — method, URL, headers, body, status code — is the foundation for working with any API.
`,
};
