export const lessonConfigureAwait = {
  id: "configure-await",
  title: "ConfigureAwait and Context",
  hasChallenge: false,
  article: `
## ConfigureAwait and Context

One of the more nuanced topics in async C# is \`ConfigureAwait\`. You'll see it everywhere in library code — \`await something.ConfigureAwait(false)\` — and understanding *why* it exists can save you from hard-to-diagnose deadlocks.

## SynchronizationContext

When you \`await\` a task, the runtime needs to decide: which thread (or context) should continue executing after the awaited operation completes?

In many application frameworks, there is a \`SynchronizationContext\` that controls this. The context ensures continuations run in the right place:

- **WinForms / WPF** — the UI thread has a \`SynchronizationContext\`. Continuations are posted back to the UI thread so you can safely update controls.
- **ASP.NET (classic)** — had a request context that continuations returned to.
- **ASP.NET Core** — has no \`SynchronizationContext\` by default (this is important).
- **Console apps** — no \`SynchronizationContext\` by default.

\`\`\`csharp
// In a WPF button click handler:
private async void Button_Click(object sender, EventArgs e)
{
    string data = await FetchDataAsync();
    // After await, execution is back on the UI thread
    // because of SynchronizationContext capture
    Label.Content = data; // safe to update UI here
}
\`\`\`

## ConfigureAwait(false) — Opting Out of Context

By default, \`await\` captures the current \`SynchronizationContext\` and uses it to schedule the continuation. \`ConfigureAwait(false)\` tells the runtime: "I don't need to resume on the original context — any thread is fine."

\`\`\`csharp
// Without ConfigureAwait(false) — resumes on captured context
string data = await FetchDataAsync();

// With ConfigureAwait(false) — resumes on any available thread
string data = await FetchDataAsync().ConfigureAwait(false);
\`\`\`

## Why It Matters in Library Code

Library code should use \`ConfigureAwait(false)\` on every internal \`await\`. Here's why:

1. Libraries don't know what application type will call them (WPF, ASP.NET, console, etc.)
2. Unnecessarily capturing a \`SynchronizationContext\` adds overhead
3. It can cause deadlocks when the caller blocks synchronously on the task

If a library method does not use \`ConfigureAwait(false)\`, it will try to resume on whatever context the caller had. If the caller is already blocking on that context (see below), you get a deadlock.

## The Classic Deadlock Scenario

This pattern causes a deadlock in frameworks with a \`SynchronizationContext\`:

\`\`\`csharp
// DON'T DO THIS in a context-aware framework
public string GetData()
{
    // Blocks the UI/request thread while waiting for the task
    return FetchDataAsync().Result; // DEADLOCK
}

public async Task<string> FetchDataAsync()
{
    await Task.Delay(100); // tries to resume on the captured context
    return "data";         // but the context thread is blocked above!
}
\`\`\`

Thread A (UI thread) calls \`.Result\`, blocking itself while waiting for \`FetchDataAsync\` to complete. \`FetchDataAsync\` tries to post its continuation back to the UI thread. The UI thread is blocked waiting for the task. Neither can proceed — deadlock.

The fix: use \`ConfigureAwait(false)\` in \`FetchDataAsync\` so it doesn't need the captured context:

\`\`\`csharp
public async Task<string> FetchDataAsync()
{
    await Task.Delay(100).ConfigureAwait(false);
    return "data"; // resumes on a thread pool thread — no deadlock
}
\`\`\`

The *real* fix is to not block on async code synchronously. But that's not always under your control (especially in library code).

## App Code vs Library Code

The convention is:

| Code Type | ConfigureAwait(false)? |
|-----------|----------------------|
| Library / NuGet package | Yes — on every await |
| Application code (top-level, controllers, UI handlers) | Not needed |

Application code usually *wants* to resume on the original context — that's how you update UI or access request-scoped services safely. Library code should be context-agnostic.

\`\`\`csharp
// Library method — always ConfigureAwait(false)
public async Task<byte[]> DownloadAsync(string url)
{
    using var client = new HttpClient();
    return await client.GetByteArrayAsync(url).ConfigureAwait(false);
}

// Application controller — no ConfigureAwait needed
public async Task<IActionResult> Index()
{
    var data = await _service.GetDataAsync(); // resumes on request context
    return View(data);
}
\`\`\`

## Key Takeaways

- \`SynchronizationContext\` controls where continuations run after \`await\`
- UI frameworks use it to ensure continuations run on the UI thread
- \`ConfigureAwait(false)\` opts out of context capture — continuation runs on any thread
- Always use \`ConfigureAwait(false)\` in library/NuGet code to avoid deadlocks and overhead
- The classic deadlock: blocking on async code (.Result/.Wait()) while that code tries to resume on your blocked thread
- In ASP.NET Core, there's no \`SynchronizationContext\`, so \`ConfigureAwait(false)\` is less critical — but still good practice for libraries
`,
};
