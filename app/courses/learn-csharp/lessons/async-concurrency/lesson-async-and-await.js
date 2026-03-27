export const lessonAsyncAndAwait = {
  id: "async-and-await",
  title: "async and await — The Pattern in Depth",
  hasChallenge: false,
  article: `
## async and await — The Pattern in Depth

The \`async\` and \`await\` keywords transform how you write asynchronous code in C#. Rather than managing callbacks, continuations, or thread synchronization manually, you write code that reads like synchronous logic — and the compiler does the heavy lifting.

## The async Method Signature

Adding the \`async\` modifier to a method tells the compiler to transform it into a state machine. On its own, \`async\` does nothing visible — it's \`await\` inside the method that triggers the actual asynchronous behavior.

\`\`\`csharp
public async Task DoWorkAsync()
{
    await Task.Delay(1000); // non-blocking wait
    Console.WriteLine("Done!");
}
\`\`\`

The method signature must change to reflect the asynchronous return type. There are three valid return types for async methods:

## Return Types: void, Task, and Task\<T\>

**\`async Task\`** — the standard return type for async methods with no return value. Callers can await it and catch exceptions.

\`\`\`csharp
public async Task SendEmailAsync(string to, string body)
{
    await _emailService.SendAsync(to, body);
}
\`\`\`

**\`async Task<T>\`** — for async methods that produce a value. You return \`T\` directly; the compiler wraps it in a \`Task<T>\`.

\`\`\`csharp
public async Task<string> FetchPageAsync(string url)
{
    string content = await _httpClient.GetStringAsync(url);
    return content; // compiler wraps this in Task<string>
}
\`\`\`

**\`async void\`** — avoid this except for event handlers. Exceptions from \`async void\` methods cannot be caught by callers and will crash the application.

\`\`\`csharp
// Only acceptable pattern for async void
private async void Button_Click(object sender, EventArgs e)
{
    await LoadDataAsync();
}
\`\`\`

## The await Keyword

\`await\` suspends execution of the current method until the awaited task completes — but crucially, it does not block the thread. The thread is released back to the pool (or returns to the UI message loop) and is free to do other work.

\`\`\`csharp
public async Task<int> GetUserCountAsync()
{
    // Execution suspends here; thread is released
    var users = await _db.Users.ToListAsync();

    // Execution resumes here when the DB query completes
    return users.Count;
}
\`\`\`

You can await any type that implements the "awaitable" pattern — most commonly \`Task\`, \`Task<T>\`, \`ValueTask<T>\`, and in .NET 8+, many more types.

## Async All the Way Up

One of the most important rules of async programming: once you go async, the whole call chain should be async. Mixing synchronous blocking calls with async code leads to deadlocks and defeats the purpose.

\`\`\`csharp
// WRONG: calling .Result blocks the thread and can deadlock
public string GetName()
{
    return FetchNameAsync().Result; // dangerous!
}

// RIGHT: propagate async all the way up
public async Task<string> GetNameAsync()
{
    return await FetchNameAsync();
}
\`\`\`

The pattern is: if a method awaits something, it must be \`async\`. Its callers should also await it, and be \`async\`. This propagates up to the entry point (e.g., \`Main\` or a controller action), which .NET supports natively.

\`\`\`csharp
// Top-level async entry point — fully supported
static async Task Main(string[] args)
{
    await RunApplicationAsync();
}
\`\`\`

## Common Mistakes

**Forgetting to await** — calling an async method without \`await\` returns the task but doesn't wait for it. Errors are silently swallowed.

\`\`\`csharp
// BUG: fire-and-forget, exceptions lost
SendEmailAsync(email, body);

// CORRECT: await the result
await SendEmailAsync(email, body);
\`\`\`

**Async over sync** — wrapping synchronous code in \`async\` and \`await Task.Run\` unnecessarily.

\`\`\`csharp
// Unnecessary — just call it synchronously
public async Task<int> AddAsync(int a, int b) => await Task.Run(() => a + b);

// Just do this
public int Add(int a, int b) => a + b;
\`\`\`

**Using \`async void\` outside event handlers** — as noted above, this makes exceptions uncatchable.

## A Full Example

\`\`\`csharp
public async Task<string> GetWeatherSummaryAsync(string city)
{
    // Fetch data from API — non-blocking
    string json = await _httpClient.GetStringAsync($"/weather?city={city}");

    // Parse (synchronous — no await needed here)
    var weather = JsonSerializer.Deserialize<WeatherData>(json);

    // Return value — compiler wraps in Task<string>
    return $"{city}: {weather.Description}, {weather.TempC}°C";
}
\`\`\`

## Key Takeaways

- \`async\` marks a method for transformation by the compiler into a state machine
- \`await\` suspends the method without blocking the thread
- Use \`Task\` for no return value, \`Task<T>\` for a return value, and avoid \`async void\`
- Propagate async all the way up the call chain — never mix .Result/.Wait() with await
- Not awaiting a task is a common silent bug — always await unless you have a deliberate reason not to
`,
};
