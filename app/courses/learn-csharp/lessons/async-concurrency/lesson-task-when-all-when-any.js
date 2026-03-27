export const lessonTaskWhenAllWhenAny = {
  id: "task-when-all-when-any",
  title: "Task.WhenAll and Task.WhenAny",
  hasChallenge: false,
  article: `
## Task.WhenAll and Task.WhenAny

One of the biggest wins of async programming is the ability to run multiple operations in parallel rather than sequentially. \`Task.WhenAll\` and \`Task.WhenAny\` are the primary tools for orchestrating parallel async work.

## Sequential vs Parallel Async

When you await tasks one after another, they run sequentially — each one waits for the previous to finish. If each call takes 1 second and you have three of them, you wait 3 seconds total.

\`\`\`csharp
// Sequential — total time: 3 seconds
var user    = await GetUserAsync(userId);
var orders  = await GetOrdersAsync(userId);
var profile = await GetProfileAsync(userId);
\`\`\`

These three calls are independent — there's no reason to wait for user data before fetching orders. You can start all three simultaneously.

\`\`\`csharp
// Parallel — total time: ~1 second (whichever is slowest)
var userTask    = GetUserAsync(userId);
var ordersTask  = GetOrdersAsync(userId);
var profileTask = GetProfileAsync(userId);

await Task.WhenAll(userTask, ordersTask, profileTask);

var user    = userTask.Result;   // Result is safe after WhenAll completes
var orders  = ordersTask.Result;
var profile = profileTask.Result;
\`\`\`

Notice: calling \`.Result\` is safe here *after* \`await Task.WhenAll\` because we know the tasks are already complete.

## Task.WhenAll — Fan-Out Pattern

\`Task.WhenAll\` takes a collection of tasks and returns a single task that completes when **all** of them have completed.

\`\`\`csharp
IEnumerable<string> urls = new[]
{
    "https://api.example.com/data/1",
    "https://api.example.com/data/2",
    "https://api.example.com/data/3",
};

// Start all requests simultaneously
IEnumerable<Task<string>> tasks = urls.Select(url => _httpClient.GetStringAsync(url));

// Wait for all to finish and get results as an array
string[] results = await Task.WhenAll(tasks);

foreach (string result in results)
{
    Console.WriteLine(result.Length + " chars received");
}
\`\`\`

When all tasks return the same type \`T\`, \`Task.WhenAll\` returns a \`Task<T[]>\` — a single array of all results in the same order as the input tasks.

## Error Handling With WhenAll

If any task throws an exception, \`Task.WhenAll\` still waits for all remaining tasks to finish, then throws an \`AggregateException\` containing all exceptions that occurred.

\`\`\`csharp
var tasks = new[]
{
    Task.FromResult("ok"),
    Task.FromException<string>(new Exception("task 2 failed")),
    Task.FromException<string>(new Exception("task 3 failed")),
};

try
{
    string[] results = await Task.WhenAll(tasks);
}
catch (Exception ex)
{
    // await unwraps the first exception; others may be lost
    Console.WriteLine($"Caught: {ex.Message}");
}
\`\`\`

To see all errors, inspect the task directly after the catch:

\`\`\`csharp
var whenAllTask = Task.WhenAll(tasks);

try
{
    await whenAllTask;
}
catch
{
    foreach (var ex in whenAllTask.Exception?.InnerExceptions ?? [])
    {
        Console.WriteLine($"Error: {ex.Message}");
    }
}
\`\`\`

## Task.WhenAny — First-to-Complete

\`Task.WhenAny\` returns a task that completes as soon as **any one** of the provided tasks completes. The result is the winning task itself.

\`\`\`csharp
var task1 = FetchFromPrimaryAsync();
var task2 = FetchFromBackupAsync();

// Whichever responds first wins
Task<string> winner = await Task.WhenAny(task1, task2);
string result = await winner; // await the winning task to get its value or rethrow exceptions
Console.WriteLine($"Got result: {result}");
\`\`\`

Common use cases for \`WhenAny\`:
- **Redundant requests** — send the same request to multiple sources, take the fastest
- **Timeouts** — race an operation against \`Task.Delay\`

\`\`\`csharp
var workTask = DoLongWorkAsync();
var timeoutTask = Task.Delay(TimeSpan.FromSeconds(5));

var completed = await Task.WhenAny(workTask, timeoutTask);

if (completed == timeoutTask)
{
    Console.WriteLine("Timed out!");
}
else
{
    string result = await workTask;
    Console.WriteLine($"Result: {result}");
}
\`\`\`

## Key Takeaways

- Sequential awaits run one after another; parallel tasks run simultaneously
- \`Task.WhenAll\` starts all tasks at once and waits for every one to finish
- When all tasks return the same type, \`Task.WhenAll\` gives you a typed results array in input order
- If any task faults, \`WhenAll\` still waits for the rest, then throws; inspect \`task.Exception.InnerExceptions\` for all errors
- \`Task.WhenAny\` returns when the first task completes — great for timeouts and fallbacks
- After \`WhenAny\`, await the returned task to get its value or propagate its exception
`,
};
