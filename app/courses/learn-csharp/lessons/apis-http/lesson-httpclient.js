export const lessonHttpClient = {
  id: "httpclient",
  title: "HttpClient — The Right Way to Use It",
  hasChallenge: false,
  article: `
## HttpClient — The Right Way to Use It

\`HttpClient\` is the primary class for making HTTP requests in C#. It looks simple, but there's a famous trap that catches almost every developer at some point: mismanaging its lifetime. This lesson covers the right patterns so you don't hit that trap.

---

## The Lifetime Problem

Your first instinct might be to create a new \`HttpClient\` for every request. Don't.

\`\`\`csharp
// BAD: Do not do this in a loop or on every request
public async Task<string> FetchDataAsync(string url)
{
    using var client = new HttpClient(); // new instance every time!
    return await client.GetStringAsync(url);
}
\`\`\`

The problem: \`HttpClient\` holds an underlying \`HttpClientHandler\` that keeps sockets open. When you dispose it, the socket doesn't close immediately — it enters a TIME_WAIT state. Create enough of these and you'll exhaust your machine's available ports. This is called **socket exhaustion**.

The opposite mistake is also bad:

\`\`\`csharp
// ALSO BAD: static instance ignores DNS changes
private static readonly HttpClient _client = new HttpClient();
\`\`\`

A static instance will ignore DNS updates (important in cloud environments where IPs change).

---

## The Right Way: IHttpClientFactory

In modern .NET applications using dependency injection (ASP.NET Core, Worker Services, etc.), use \`IHttpClientFactory\`:

\`\`\`csharp
// In Program.cs or Startup.cs
builder.Services.AddHttpClient();

// In your service class
public class WeatherService
{
    private readonly HttpClient _client;

    public WeatherService(IHttpClientFactory factory)
    {
        _client = factory.CreateClient();
    }

    public async Task<string> GetWeatherAsync(string city)
    {
        return await _client.GetStringAsync($"https://wttr.in/{city}?format=j1");
    }
}
\`\`\`

\`IHttpClientFactory\` manages the underlying handler pool for you — rotating connections after two minutes, so DNS changes are picked up, while still reusing sockets intelligently.

---

## For Console Apps: A Single Shared Instance

In console apps or simple programs without DI, use a single static instance with a configured \`SocketsHttpHandler\`:

\`\`\`csharp
private static readonly HttpClient _client = new HttpClient(new SocketsHttpHandler
{
    PooledConnectionLifetime = TimeSpan.FromMinutes(2)
});
\`\`\`

This gives you connection reuse with automatic DNS refresh.

---

## Making a GET Request

\`\`\`csharp
// Simplest form — returns the body as a string
string body = await _client.GetStringAsync("https://api.github.com/users/octocat");

// Full form — gives you access to the response object
HttpResponseMessage response = await _client.GetAsync("https://api.github.com/users/octocat");
response.EnsureSuccessStatusCode(); // throws if not 2xx
string body = await response.Content.ReadAsStringAsync();
\`\`\`

Use the full form when you need to inspect status codes, headers, or handle errors explicitly.

---

## Making a POST Request

\`\`\`csharp
var payload = new { title = "Test Issue", body = "Created from C#" };
string json = JsonSerializer.Serialize(payload);
var content = new StringContent(json, Encoding.UTF8, "application/json");

HttpResponseMessage response = await _client.PostAsync(url, content);
response.EnsureSuccessStatusCode();

string responseBody = await response.Content.ReadAsStringAsync();
\`\`\`

---

## Using SendAsync for Full Control

\`SendAsync\` lets you build a request manually, giving you control over method, headers, and body in one place:

\`\`\`csharp
var request = new HttpRequestMessage(HttpMethod.Get, "https://api.github.com/user");
request.Headers.Add("Authorization", "Bearer ghp_yourtoken");
request.Headers.Add("User-Agent", "MyApp/1.0");

HttpResponseMessage response = await _client.SendAsync(request);
response.EnsureSuccessStatusCode();

string body = await response.Content.ReadAsStringAsync();
\`\`\`

\`SendAsync\` is especially useful when you need to set per-request headers or use less common HTTP methods like PATCH or DELETE.

---

## Reading the HttpResponseMessage

\`\`\`csharp
HttpResponseMessage response = await _client.GetAsync(url);

Console.WriteLine(response.StatusCode);         // OK, NotFound, etc.
Console.WriteLine((int)response.StatusCode);    // 200, 404, etc.
Console.WriteLine(response.IsSuccessStatusCode); // true if 2xx

string body = await response.Content.ReadAsStringAsync();
\`\`\`

---

## Summary: The Rules

1. Never create a new \`HttpClient\` per request
2. Use \`IHttpClientFactory\` in DI-based apps
3. Use a single static instance with \`SocketsHttpHandler\` in console apps
4. Always \`await\` the async methods
5. Use \`EnsureSuccessStatusCode()\` or check \`IsSuccessStatusCode\` to catch errors
`,
};
