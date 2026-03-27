export const lessonAuthentication = {
  id: "authentication-cs",
  title: "Authentication — API Keys and Bearer Tokens",
  hasChallenge: false,
  article: `
## Authentication — API Keys and Bearer Tokens

Most APIs require you to identify yourself before they'll respond with data. This prevents abuse, enables rate limiting, and lets the API provider track usage. This lesson covers the two most common authentication patterns you'll encounter: API keys and Bearer tokens.

---

## API Keys

An API key is a secret string you include with your requests to prove who you are. They're simple and stateless — no login flow required.

**API Key in the Query String**

Some APIs expect the key directly in the URL:

\`\`\`csharp
string apiKey = "your-api-key-here";
string city = "London";
string url = $"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}";

string response = await _client.GetStringAsync(url);
\`\`\`

This is convenient but less secure — the key appears in server logs and browser history.

**API Key in a Request Header**

Preferred approach — the key travels in a header, not the URL:

\`\`\`csharp
_client.DefaultRequestHeaders.Add("X-Api-Key", apiKey);
// or sometimes:
_client.DefaultRequestHeaders.Add("api-key", apiKey);
\`\`\`

Always check the docs — every API names its header differently.

---

## Bearer Tokens

Bearer tokens are used in OAuth 2.0 flows and many modern APIs (GitHub, Stripe, etc.). The token is passed in the \`Authorization\` header with the prefix \`Bearer\`:

\`\`\`csharp
string token = "ghp_yourPersonalAccessTokenHere";
_client.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}");
\`\`\`

Or using the typed API, which validates the format:

\`\`\`csharp
using System.Net.Http.Headers;

_client.DefaultRequestHeaders.Authorization =
    new AuthenticationHeaderValue("Bearer", token);
\`\`\`

The typed \`AuthenticationHeaderValue\` approach is preferred because it handles the format correctly and is more readable.

---

## Setting Headers Per-Request vs. Per-Client

\`DefaultRequestHeaders\` applies to every request the client makes. If you're making requests to multiple APIs from the same \`HttpClient\`, set headers per-request instead:

\`\`\`csharp
var request = new HttpRequestMessage(HttpMethod.Get, url);
request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
request.Headers.Add("User-Agent", "MyApp/1.0");

HttpResponseMessage response = await _client.SendAsync(request);
\`\`\`

---

## Storing Secrets Safely

This is the most important part of this lesson: **never hardcode secrets in your source code**.

\`\`\`csharp
// NEVER do this:
string apiKey = "sk-abc123realkey456"; // committed to git = exposed forever
\`\`\`

Once a secret is committed to a public (or even private) git repo, treat it as compromised.

**Use environment variables instead:**

\`\`\`csharp
string? apiKey = Environment.GetEnvironmentVariable("OPENWEATHER_API_KEY");

if (string.IsNullOrEmpty(apiKey))
{
    Console.Error.WriteLine("Error: OPENWEATHER_API_KEY environment variable is not set.");
    return;
}
\`\`\`

Set the variable in your shell before running:

\`\`\`bash
# On macOS / Linux
export OPENWEATHER_API_KEY="your-real-key-here"
dotnet run

# On Windows (Command Prompt)
set OPENWEATHER_API_KEY=your-real-key-here
dotnet run
\`\`\`

**Use a .env file with DotNetEnv (for development)**

Install the NuGet package:

\`\`\`bash
dotnet add package DotNetEnv
\`\`\`

Create a \`.env\` file (add it to \`.gitignore\` immediately!):

\`\`\`bash
OPENWEATHER_API_KEY=your-real-key-here
GITHUB_TOKEN=ghp_yourtokenhere
\`\`\`

Load it in your app:

\`\`\`csharp
DotNetEnv.Env.Load();
string? apiKey = Environment.GetEnvironmentVariable("OPENWEATHER_API_KEY");
\`\`\`

---

## Add .env to .gitignore

Before creating a \`.env\` file, add it to \`.gitignore\`:

\`\`\`bash
# .gitignore
.env
*.env
secrets.json
\`\`\`

Check this is in place before \`git add\`. The moment you push a key, rotate it.

---

## GitHub Personal Access Tokens

GitHub requires a User-Agent header along with the token:

\`\`\`csharp
_client.DefaultRequestHeaders.Add("User-Agent", "MyGitHubApp/1.0");
_client.DefaultRequestHeaders.Authorization =
    new AuthenticationHeaderValue("Bearer", githubToken);
\`\`\`

Without User-Agent, GitHub returns a 403. This is documented but easy to miss.

---

## Summary

| Pattern | Where it goes | Example |
|---|---|---|
| API Key in URL | Query string | \`?appid=yourkey\` |
| API Key in header | Request header | \`X-Api-Key: yourkey\` |
| Bearer token | Authorization header | \`Bearer yourtoken\` |

Always load keys from environment variables, never from source code.
`,
};
