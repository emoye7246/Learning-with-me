export const lessonTasksCs = {
  id: "tasks-cs",
  title: "Tasks — What They Are and How They Work",
  hasChallenge: false,
  article: `
## Tasks — What They Are and How They Work

Before async/await became the standard pattern, .NET developers worked directly with \`Task\` objects. Understanding what a \`Task\` is under the hood makes you a much better async programmer — because async/await is built directly on top of tasks.

## What Is a Task?

A \`Task\` represents an asynchronous operation that will complete in the future. Think of it as a promise: "I don't have the result yet, but I will." You can attach handlers to it, wait for it, or combine it with other tasks.

There are two main types:

- **\`Task\`** — represents an operation that completes but produces no value (like \`void\`)
- **\`Task<T>\`** — represents an operation that completes and produces a value of type \`T\`

\`\`\`csharp
Task doSomething = SomeAsyncMethod();       // no return value
Task<string> fetchData = GetStringAsync();  // returns a string when done
\`\`\`

## Task.Run — Offloading CPU Work

\`Task.Run\` queues work to run on the thread pool. Use this for CPU-bound operations you want to run in the background without blocking the calling thread.

\`\`\`csharp
Task<int> task = Task.Run(() =>
{
    // This runs on a thread pool thread
    return HeavyCalculation(1_000_000);
});

int result = await task; // wait for it and get the value
Console.WriteLine($"Result: {result}");
\`\`\`

Do not use \`Task.Run\` for I/O-bound work — use truly async APIs (like \`HttpClient.GetAsync\`) instead. \`Task.Run\` for I/O just wastes a thread pool thread.

## Task.FromResult — Already-Completed Tasks

Sometimes you need to return a \`Task<T>\` from a method but you already have the result synchronously. \`Task.FromResult\` wraps a value in an already-completed task.

\`\`\`csharp
public Task<string> GetCachedNameAsync(int id)
{
    if (_cache.TryGetValue(id, out string name))
    {
        return Task.FromResult(name); // synchronous path, no async needed
    }

    return FetchFromDatabaseAsync(id); // truly async path
}
\`\`\`

Related helpers: \`Task.CompletedTask\` (for \`Task\` methods that have nothing to do) and \`Task.FromException\` (for returning a faulted task).

## Task States

A \`Task\` moves through several states during its lifetime:

- **Created** — constructed but not started (rare; usually tasks start immediately)
- **WaitingToRun** — scheduled, waiting for a thread pool thread
- **Running** — actively executing
- **RanToCompletion** — finished successfully
- **Faulted** — threw an unhandled exception
- **Canceled** — was cancelled via a \`CancellationToken\`

\`\`\`csharp
var task = Task.Run(() => DoWork());
Console.WriteLine(task.Status); // Running or WaitingToRun

await task;
Console.WriteLine(task.Status); // RanToCompletion
\`\`\`

You can check \`task.IsCompleted\`, \`task.IsFaulted\`, and \`task.IsCanceled\` as boolean shortcuts.

## ContinueWith — Continuations Without Await

Before \`await\`, developers used \`.ContinueWith()\` to chain work after a task completes. It's worth knowing, though \`await\` is almost always cleaner.

\`\`\`csharp
Task<string> fetchTask = httpClient.GetStringAsync("https://example.com");

Task printTask = fetchTask.ContinueWith(completedTask =>
{
    if (completedTask.IsFaulted)
        Console.WriteLine("Error: " + completedTask.Exception?.Message);
    else
        Console.WriteLine("Got: " + completedTask.Result);
});

await printTask;
\`\`\`

The equivalent with \`await\` is far more readable:

\`\`\`csharp
try
{
    string content = await httpClient.GetStringAsync("https://example.com");
    Console.WriteLine("Got: " + content);
}
catch (Exception ex)
{
    Console.WriteLine("Error: " + ex.Message);
}
\`\`\`

## The Task Lifecycle in Practice

\`\`\`csharp
public async Task DemoTaskLifecycle()
{
    // Task starts running immediately when created by an async method
    Task<int> task = Task.Run(() =>
    {
        Thread.Sleep(500); // simulate work
        return 42;
    });

    Console.WriteLine($"Before await: {task.Status}"); // Running

    int value = await task;

    Console.WriteLine($"After await: {task.Status}");  // RanToCompletion
    Console.WriteLine($"Value: {value}");              // 42
}
\`\`\`

## Key Takeaways

- \`Task\` and \`Task<T>\` represent future operations — the building blocks of async .NET
- \`Task.Run\` offloads CPU-bound work to the thread pool
- \`Task.FromResult\` wraps synchronous values in a completed task
- Tasks have a lifecycle: running, completed, faulted, or canceled
- \`ContinueWith\` is the low-level callback API; \`await\` is the clean modern alternative
`,
};
