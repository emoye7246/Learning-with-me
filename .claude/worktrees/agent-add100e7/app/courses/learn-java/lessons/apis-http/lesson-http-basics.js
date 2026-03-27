export const lessonHttpBasics = {
  id: "http-basics",
  title: "HTTP Basics — GET, POST, Headers, Status Codes",
  hasChallenge: false,
  article: `
## HTTP Basics — GET, POST, Headers, Status Codes

HTTP (HyperText Transfer Protocol) is the protocol of the web. Every time your Java program calls an API, it's sending and receiving HTTP messages. Understanding HTTP is essential for debugging API issues.

---

## HTTP Methods

| Method | Purpose | Has Body? |
|---|---|---|
| \`GET\` | Retrieve data | No |
| \`POST\` | Create new data | Yes |
| \`PUT\` | Replace existing data | Yes |
| \`PATCH\` | Partially update data | Yes |
| \`DELETE\` | Delete data | No |

---

## A GET Request

\`\`\`
GET /users/42 HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer eyJhbGci...
\`\`\`

- **Method + Path**: \`GET /users/42\`
- **Host**: the server
- **Headers**: metadata about the request

---

## A POST Request

\`\`\`
POST /users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer eyJhbGci...

{
  "name": "Alice",
  "email": "alice@example.com"
}
\`\`\`

POST includes a **body** — typically JSON for modern APIs.

---

## HTTP Status Codes

The response always includes a status code that tells you what happened:

| Range | Meaning | Common Codes |
|---|---|---|
| 2xx | Success | 200 OK, 201 Created, 204 No Content |
| 3xx | Redirect | 301 Moved Permanently, 302 Found |
| 4xx | Client error | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found |
| 5xx | Server error | 500 Internal Server Error, 503 Service Unavailable |

---

## Key Status Codes

\`\`\`
200 OK              — request succeeded, response body has data
201 Created         — resource was created (often after POST)
204 No Content      — success, but no body (often after DELETE)
400 Bad Request     — your request was malformed
401 Unauthorized    — you need to authenticate
403 Forbidden       — you're authenticated but don't have permission
404 Not Found       — the resource doesn't exist
429 Too Many Requests — you've hit the rate limit
500 Internal Server Error — the server crashed
503 Service Unavailable — server is down or overloaded
\`\`\`

---

## HTTP Headers

Headers are key-value pairs that carry metadata:

\`\`\`
// Request headers you'll send
Content-Type: application/json   ← the format of your request body
Accept: application/json          ← what format you want back
Authorization: Bearer <token>     ← your authentication credential
User-Agent: MyJavaApp/1.0         ← who you are

// Response headers you'll receive
Content-Type: application/json    ← the format of the response body
Cache-Control: max-age=3600       ← caching instructions
X-RateLimit-Remaining: 59         ← API rate limit info
\`\`\`

---

## Query Parameters

GET requests pass data in the URL:

\`\`\`
GET /weather?city=London&units=metric&lang=en
\`\`\`

Parameters are key=value pairs, separated by \`&\`, appended after \`?\`.

In Java:
\`\`\`java
String url = "https://api.example.com/weather?city=" +
    URLEncoder.encode(city, StandardCharsets.UTF_8) +
    "&units=metric";
\`\`\`

Always URL-encode parameter values that may contain special characters.

---

## A Full HTTP Exchange

Request:
\`\`\`
GET /repos/octocat/Hello-World HTTP/1.1
Host: api.github.com
Accept: application/vnd.github.v3+json
\`\`\`

Response:
\`\`\`
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "id": 1296269,
  "name": "Hello-World",
  "full_name": "octocat/Hello-World",
  "stargazers_count": 2000,
  ...
}
\`\`\`

---

## What You Learned

- HTTP methods define what operation to perform (GET reads, POST creates, DELETE removes)
- Status codes tell you if the request succeeded and why it might have failed
- Headers carry metadata about the request and response
- Query parameters pass data in GET requests via the URL
- Always check the status code before trusting the response body

## What Comes Next

Now you'll use Java's built-in HttpClient to make these requests.

Continue to: **11.3 Java's Built-in HttpClient (Java 11+)**
`,
};
