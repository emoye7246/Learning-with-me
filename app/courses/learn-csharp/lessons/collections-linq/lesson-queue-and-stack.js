export const lessonQueueAndStack = {
  id: "queue-and-stack-cs",
  title: "Queue<T> and Stack<T>",
  hasChallenge: false,
  article: `
## Queue<T> and Stack<T>

\`Queue<T>\` and \`Stack<T>\` are specialized collections defined by how items are added and removed. They don't offer random access or sorting — their strength lies in enforcing a specific order of processing.

### Queue<T> — First In, First Out (FIFO)

A queue works exactly like a line at a coffee shop: the first person to arrive is the first person served. In programming terms, the first item added is the first item removed. This ordering is called **FIFO** — First In, First Out.

\`\`\`csharp
Queue<string> printJobs = new Queue<string>();

// Enqueue — add to the back of the line
printJobs.Enqueue("Report.pdf");
printJobs.Enqueue("Invoice.pdf");
printJobs.Enqueue("Photo.png");

Console.WriteLine(printJobs.Count); // 3

// Peek — see what's next without removing it
string next = printJobs.Peek(); // "Report.pdf"

// Dequeue — remove and return the front item
string job = printJobs.Dequeue(); // "Report.pdf"
Console.WriteLine(printJobs.Count); // 2

// TryDequeue — safe version that won't throw if empty
if (printJobs.TryDequeue(out string result))
{
    Console.WriteLine($"Processing: {result}"); // "Invoice.pdf"
}
\`\`\`

**Real-world use cases for queues:**
- Print spoolers — jobs are printed in the order they were submitted
- Task queues — background workers process tasks in submission order
- Breadth-first search — graph traversal visits nodes level by level
- Message buffers — events are processed in arrival order

### Stack<T> — Last In, First Out (LIFO)

A stack works like a pile of plates: you add to the top and take from the top. The last item placed on the stack is the first one removed. This ordering is called **LIFO** — Last In, First Out.

\`\`\`csharp
Stack<string> browserHistory = new Stack<string>();

// Push — add to the top
browserHistory.Push("google.com");
browserHistory.Push("docs.microsoft.com");
browserHistory.Push("github.com");

Console.WriteLine(browserHistory.Count); // 3

// Peek — see what's on top without removing
string current = browserHistory.Peek(); // "github.com"

// Pop — remove and return the top item
string last = browserHistory.Pop(); // "github.com" — go back
Console.WriteLine(browserHistory.Peek()); // "docs.microsoft.com"

// TryPop — safe version
if (browserHistory.TryPop(out string page))
{
    Console.WriteLine($"Going back to: {page}");
}
\`\`\`

**Real-world use cases for stacks:**
- Undo/redo systems — most recent action is undone first
- Browser back button — navigates in reverse chronological order
- Call stack — functions return in reverse order of how they were called
- Expression parsers — matching parentheses, evaluating postfix notation
- Depth-first search — graph traversal explores as deep as possible first

### Undo System Example

\`\`\`csharp
Stack<string> undoStack = new Stack<string>();
Stack<string> redoStack = new Stack<string>();

void DoAction(string action)
{
    undoStack.Push(action);
    redoStack.Clear(); // New action clears redo history
    Console.WriteLine($"Did: {action}");
}

void Undo()
{
    if (undoStack.TryPop(out string action))
    {
        redoStack.Push(action);
        Console.WriteLine($"Undid: {action}");
    }
}

void Redo()
{
    if (redoStack.TryPop(out string action))
    {
        undoStack.Push(action);
        Console.WriteLine($"Redid: {action}");
    }
}

DoAction("Type 'Hello'");
DoAction("Bold text");
Undo(); // Undid: Bold text
Undo(); // Undid: Type 'Hello'
Redo(); // Redid: Type 'Hello'
\`\`\`

### Iterating Without Removing

Both types support \`foreach\` iteration. Note that iterating a \`Stack<T>\` yields items from top to bottom (LIFO order):

\`\`\`csharp
Stack<int> stack = new Stack<int>(new[] { 1, 2, 3 });
foreach (int item in stack)
    Console.Write(item + " "); // 3 2 1

Queue<int> queue = new Queue<int>(new[] { 1, 2, 3 });
foreach (int item in queue)
    Console.Write(item + " "); // 1 2 3
\`\`\`

### Summary

- \`Queue<T>\` is FIFO — first added is first removed; use \`Enqueue\` and \`Dequeue\`
- \`Stack<T>\` is LIFO — last added is first removed; use \`Push\` and \`Pop\`
- Both support \`Peek\` to inspect the next item without removing it
- Both support safe \`TryDequeue\` / \`TryPop\` methods that return \`false\` instead of throwing when empty
- Choose the type that matches the natural processing order of your problem
`,
};
