export const lessonReadingApiDocumentation = {
  id: "reading-api-documentation",
  title: "Reading API Documentation",

  article: `
## Reading API Documentation

Every API has docs. Some are great. Many are just okay.

Learning to read them quickly is a skill that saves hours.

---

## What Good API Docs Tell You

- **Base URL** — where all requests start
- **Endpoints** — the specific paths and what they do
- **Parameters** — what you can send (required vs optional)
- **Authentication** — how to identify yourself
- **Response format** — what you'll get back
- **Rate limits** — how many requests you can make
- **Error codes** — what went wrong and why

---

## Finding the Base URL

Usually at the top.

\`\`\`
Base URL: https://api.openweathermap.org/data/2.5
\`\`\`

Every endpoint appends to this.

\`\`\`
https://api.openweathermap.org/data/2.5/weather
https://api.openweathermap.org/data/2.5/forecast
\`\`\`

---

## Reading an Endpoint Entry

A typical endpoint doc looks like this:

\`\`\`
GET /weather

Description: Returns current weather for a location.

Parameters:
  q        (required) City name, e.g. "London"
  appid    (required) Your API key
  units    (optional) "metric" | "imperial" | "standard". Default: standard

Example request:
  GET /weather?q=London&appid=YOUR_KEY&units=metric

Response:
  {
    "name": "London",
    "main": {
      "temp": 15.2,
      "humidity": 72
    },
    ...
  }
\`\`\`

Read each section. Don't skim the parameters — missing a required one gives you a 400 error.

---

## Required vs Optional

Required params cause errors if missing.
Optional params change behavior.

When first using an API, call with just required params. Verify it works. Then add optional ones.

---

## Reading the Response Schema

Focus on the fields you actually need.

\`\`\`json
{
  "main": {
    "temp": 15.2,       ← this
    "humidity": 72      ← and this
  },
  "wind": {
    "speed": 4.1
  }
}
\`\`\`

Map it to Python access:

\`\`\`python
temp = data["main"]["temp"]
humidity = data["main"]["humidity"]
\`\`\`

---

## Rate Limits

APIs limit how many requests you can make.

Common limits:
- 60 requests/hour (GitHub without auth)
- 1000 requests/day (many free tiers)
- 1 request/second (some strict APIs)

Hitting the limit returns 429. Add delays (\`time.sleep\`) or cache results.

---

## Authentication Section

Usually one of:
- API key in query param: \`?api_key=YOUR_KEY\`
- API key in header: \`Authorization: Bearer YOUR_KEY\`
- OAuth flow (more complex — skip for now)

---

## Practical Approach

1. Find the endpoint you need.
2. Identify required parameters.
3. Find an example request in the docs.
4. Copy it and modify with your values.
5. Test it.
6. Check the response format.
7. Extract the fields you need.

---

## Good Docs to Practice On

- **GitHub API**: https://docs.github.com/en/rest
- **OpenWeatherMap**: https://openweathermap.org/api
- **JSONPlaceholder**: https://jsonplaceholder.typicode.com
- **Rest Countries**: https://restcountries.com

---

## What you just learned

- What API documentation contains and how to read it
- How to identify required vs optional parameters
- How to map response JSON to Python access
- How to find and respect rate limits

---

## What comes next

Next lesson: **Authentication & API Keys**
`,
};
