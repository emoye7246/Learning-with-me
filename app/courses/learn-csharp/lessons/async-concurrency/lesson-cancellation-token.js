export const lessonCancellationToken = {
  id: "cancellation-token",
  title: "CancellationToken — Cooperative Cancellation",
  hasChallenge: false,
  article: `
## CancellationToken — Cooperative Cancellation

Long-running async operations need a way to be stopped. A user navigates away from a page, a request times out, or a service is shutting down — in all these cases, you want to cleanly cancel work in progress rather than letting it run to completion uselessly.

.NET uses a cooperative cancellation model, built around \`CancellationTokenSource\` and \`CancellationToken\`.

## CancellationTokenSource

\`CancellationTokenSource\` is the control side — it's what you use to signal that cancellation is requested. It creates and holds a token that you pass into your async operations.

\`\`\`csharp
var cts = new CancellationTokenSource();

// Cancel after 5 seconds automatically
cts.CancelAfter(TimeSpan.FromSeconds(5));

// Or cancel manually
cts.Cancel();

// Dispose when done
cts.Dispose();
\`\`\`

## CancellationToken

\`CancellationToken\` is the read-only side — it's what you pass into methods that should support cancellation. Methods that accept a token check it periodically and stop work when cancellation is requested.

\`\`\`csharp
CancellationToken token = cts.Token;

// The token carries the cancellation signal
await DoWorkAsync(token);
\`\`\`

Most built-in .NET async methods already accept a \`CancellationToken\`:

\`\`\`csharp
// HTTP request that can be cancelled
string content = await _httpClient.GetStringAsync(url, token);

// Database query that can be cancelled
var users = await _db.Users.ToListAsync(token);

// File read that can be cancelled
string text = await File.ReadAllTextAsync("data.txt", token);
\`\`\`

## Passing Tokens Through Async Methods

The convention is to accept \`CancellationToken\` as the last parameter and pass it down to every async call you make inside:

\`\`\`csharp
public async Task<Report> GenerateReportAsync(
    int reportId,
    CancellationToken cancellationToken = default)
{
    var data = await _db.GetReportDataAsync(reportId, cancellationToken);
    var processed = await ProcessDataAsync(data, cancellationToken);
    return await BuildReportAsync(processed, cancellationToken);
}
\`\`\`

Using \`default\` as the parameter default means callers can omit the token entirely (equivalent to \`CancellationToken.None\`), making the method backward-compatible.

## Checking Cancellation Manually

For CPU-bound loops or code that doesn't call awaitable methods, you check the token manually using \`ThrowIfCancellationRequested()\`:

\`\`\`csharp
public async Task ProcessItemsAsync(
    IEnumerable<Item> items,
    CancellationToken cancellationToken)
{
    foreach (var item in items)
    {
        // Check before processing each item
        cancellationToken.ThrowIfCancellationRequested();

        await ProcessItemAsync(item);
    }
}
\`\`\`

\`ThrowIfCancellationRequested()\` throws an \`OperationCanceledException\` if cancellation has been signalled — nothing else.

## OperationCanceledException

When cancellation occurs, the async operation throws \`OperationCanceledException\` (or its subclass \`TaskCanceledException\`). You should handle this separately from other exceptions:

\`\`\`csharp
var cts = new CancellationTokenSource();
cts.CancelAfter(TimeSpan.FromSeconds(3));

try
{
    await DoLongWorkAsync(cts.Token);
}
catch (OperationCanceledException)
{
    Console.WriteLine("Operation was cancelled — cleaning up.");
}
catch (Exception ex)
{
    Console.WriteLine($"Unexpected error: {ex.Message}");
}
finally
{
    cts.Dispose();
}
\`\`\`

## A Complete Example

\`\`\`csharp
public async Task RunWithTimeoutAsync()
{
    using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));

    try
    {
        string result = await FetchDataWithRetryAsync(cts.Token);
        Console.WriteLine($"Success: {result}");
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("Timed out after 10 seconds.");
    }
}

private async Task<string> FetchDataWithRetryAsync(CancellationToken ct)
{
    for (int attempt = 1; attempt <= 3; attempt++)
    {
        ct.ThrowIfCancellationRequested();

        try
        {
            return await _httpClient.GetStringAsync("/data", ct);
        }
        catch (HttpRequestException) when (attempt < 3)
        {
            await Task.Delay(TimeSpan.FromSeconds(attempt), ct);
        }
    }

    throw new Exception("All retries failed.");
}
\`\`\`

## Key Takeaways

- \`CancellationTokenSource\` triggers cancellation; \`CancellationToken\` signals it to consumers
- Pass \`CancellationToken\` as the last parameter (defaulting to \`default\`) through all async methods
- Most .NET async APIs already accept and respect a \`CancellationToken\`
- For CPU-bound loops, call \`token.ThrowIfCancellationRequested()\` manually at safe checkpoints
- Cancelled operations throw \`OperationCanceledException\` — catch it separately from general errors
- Use \`using\` on \`CancellationTokenSource\` to ensure it's disposed properly
`,
};
