export const lessonErrorHandlingNetwork = {
  id: "error-handling-network-cs",
  title: "Error Handling for Network Requests",
  hasChallenge: false,
  article: `
## Error Handling for Network Requests

Network calls fail. Servers go down, timeouts happen, rate limits get hit, and payloads are malformed. Robust code handles all of these gracefully instead of crashing. This lesson covers the practical patterns for error handling in C# HTTP code.

---

## HttpRequestException

\`HttpRequestException\` is thrown when the underlying connection fails — DNS lookup failure, connection refused, network unavailable, etc. It does NOT get thrown for HTTP error status codes (400, 500, etc.) by default.

\`\`\`csharp
try
{
    string data = await _client.GetStringAsync("https://api.example.com/data");
    Console.WriteLine(data);
}
catch (HttpRequestException ex)
{
    Console.Error.WriteLine($"Network error: {ex.Message}");
    Console.Error.WriteLine($"Status code: {ex.StatusCode}"); // null if no response received
}
\`\`\`

---

## Handling Non-Success Status Codes

By default, \`GetStringAsync\` and \`GetAsync\` don't throw on 4xx or 5xx responses. You need to check:

\`\`\`csharp
HttpResponseMessage response = await _client.GetAsync(url);

if (!response.IsSuccessStatusCode)
{
    string body = await response.Content.ReadAsStringAsync();
    Console.Error.WriteLine($"API error {(int)response.StatusCode}: {body}");
    return;
}

string data = await response.Content.ReadAsStringAsync();
\`\`\`

Or use \`EnsureSuccessStatusCode()\` which throws \`HttpRequestException\` on non-2xx:

\`\`\`csharp
try
{
    HttpResponseMessage response = await _client.GetAsync(url);
    response.EnsureSuccessStatusCode(); // throws on 4xx/5xx

    string data = await response.Content.ReadAsStringAsync();
}
catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
{
    Console.Error.WriteLine("Resource not found.");
}
catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.Unauthorized)
{
    Console.Error.WriteLine("Invalid API key or token.");
}
catch (HttpRequestException ex)
{
    Console.Error.WriteLine($"Request failed: {ex.Message}");
}
\`\`\`

The \`when\` clause lets you catch specific status codes separately — clean and readable.

---

## Timeout Handling

By default, \`HttpClient\` waits 100 seconds for a response. That's often too long. Configure a sensible timeout:

\`\`\`csharp
var client = new HttpClient
{
    Timeout = TimeSpan.FromSeconds(10)
};
\`\`\`

When the timeout is exceeded, a \`TaskCanceledException\` is thrown (which wraps a \`TimeoutException\`):

\`\`\`csharp
try
{
    string data = await _client.GetStringAsync(url);
}
catch (TaskCanceledException ex) when (!ex.CancellationToken.IsCancellationRequested)
{
    Console.Error.WriteLine("Request timed out.");
}
catch (TaskCanceledException)
{
    Console.Error.WriteLine("Request was cancelled.");
}
\`\`\`

The \`when\` clause distinguishes a timeout (not user-cancelled) from a deliberate cancellation.

---

## Using CancellationToken

For user-facing apps, pass a \`CancellationToken\` so users can cancel long operations:

\`\`\`csharp
using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));

try
{
    HttpResponseMessage response = await _client.GetAsync(url, cts.Token);
    response.EnsureSuccessStatusCode();
    string data = await response.Content.ReadAsStringAsync(cts.Token);
}
catch (OperationCanceledException)
{
    Console.Error.WriteLine("Request timed out or was cancelled.");
}
\`\`\`

---

## Retry Logic

Transient failures (brief network blips, 503 Service Unavailable) can often be resolved by retrying. A simple retry loop:

\`\`\`csharp
public async Task<string> GetWithRetryAsync(string url, int maxRetries = 3)
{
    int attempts = 0;
    while (true)
    {
        try
        {
            HttpResponseMessage response = await _client.GetAsync(url);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsStringAsync();
        }
        catch (HttpRequestException) when (attempts < maxRetries)
        {
            attempts++;
            int delayMs = (int)Math.Pow(2, attempts) * 500; // exponential backoff
            Console.WriteLine($"Attempt {attempts} failed. Retrying in {delayMs}ms...");
            await Task.Delay(delayMs);
        }
    }
}
\`\`\`

**Exponential backoff** — waiting longer between each retry — prevents hammering a struggling server.

---

## The Circuit Breaker Pattern

For production applications, retrying indefinitely can make things worse. The **Circuit Breaker** pattern tracks failure rates and temporarily stops sending requests to a failing service.

Think of it like a fuse box. When too many failures happen:
1. The circuit "opens" — requests fail immediately without even trying
2. After a timeout, the circuit enters "half-open" — one test request is allowed
3. If that succeeds, the circuit "closes" — normal operation resumes

In .NET, the **Microsoft.Extensions.Http.Resilience** NuGet package (or **Polly**) implements this pattern:

\`\`\`bash
dotnet add package Microsoft.Extensions.Http.Resilience
\`\`\`

\`\`\`csharp
// In Program.cs with IHttpClientFactory
builder.Services.AddHttpClient("weather")
    .AddStandardResilienceHandler(); // includes retry, timeout, circuit breaker
\`\`\`

For console apps and learning projects, a simple retry loop is sufficient. Circuit breakers matter in microservices and long-running services.

---

## Summary: Error Handling Checklist

| Scenario | Handle with |
|---|---|
| Connection failure | \`catch (HttpRequestException)\` |
| HTTP 4xx/5xx | Check \`IsSuccessStatusCode\` or \`EnsureSuccessStatusCode\` |
| Specific status codes | \`catch ... when (ex.StatusCode == ...)\` |
| Timeout | \`catch (TaskCanceledException)\` |
| Transient failures | Retry with exponential backoff |
| Production resilience | Polly or Microsoft.Extensions.Http.Resilience |
`,
};
