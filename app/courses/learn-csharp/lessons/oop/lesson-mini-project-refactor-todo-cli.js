export const lessonMiniProjectRefactorTodoCli = {
  id: "mini-project-refactor-todo-cli-cs",
  title: "Mini-Project: Refactor Your Todo CLI Using Classes",
  hasChallenge: false,
  article: `
## Mini-Project: Refactor Your Todo CLI Using Classes

In an earlier module you built a procedural Todo CLI — a program that used a list of strings and standalone functions. In this project you'll refactor that program to use two well-designed classes: \`Todo\` and \`TodoList\`. The end result should have identical behavior from the user's perspective, but dramatically better internal structure.

### What You're Building

A command-line Todo application where the user can:
- Add new todos
- Mark todos as complete
- Remove todos
- List all todos
- Quit the application

The difference from before: all state and behavior will live inside proper classes.

### Step 1: The Todo Class

Start by modeling a single todo item. A todo has a title, a completion status, and a creation date:

\`\`\`csharp
class Todo
{
    public int Id { get; }
    public string Title { get; private set; }
    public bool IsComplete { get; private set; }
    public DateTime CreatedAt { get; }

    private static int _nextId = 1;

    public Todo(string title)
    {
        if (string.IsNullOrWhiteSpace(title))
            throw new ArgumentException("Todo title cannot be empty.");

        Id = _nextId++;
        Title = title.Trim();
        IsComplete = false;
        CreatedAt = DateTime.Now;
    }

    public void MarkComplete() => IsComplete = true;

    public void Rename(string newTitle)
    {
        if (string.IsNullOrWhiteSpace(newTitle))
            throw new ArgumentException("Title cannot be empty.");
        Title = newTitle.Trim();
    }

    public override string ToString()
    {
        string status = IsComplete ? "[x]" : "[ ]";
        return $"{Id}. {status} {Title}";
    }
}
\`\`\`

Notice how all the rules about a todo are enforced *inside* the class. The title can't be blank, \`IsComplete\` can only be changed via \`MarkComplete()\`, and the id is auto-assigned.

### Step 2: The TodoList Class

Now build a container that manages a collection of \`Todo\` objects:

\`\`\`csharp
class TodoList
{
    private readonly List<Todo> _todos = new();

    public void Add(string title)
    {
        _todos.Add(new Todo(title));
        Console.WriteLine("Todo added.");
    }

    public void Complete(int id)
    {
        Todo? todo = Find(id);
        if (todo is null)
        {
            Console.WriteLine($"No todo found with id {id}.");
            return;
        }
        todo.MarkComplete();
        Console.WriteLine($"Marked complete: {todo.Title}");
    }

    public void Remove(int id)
    {
        Todo? todo = Find(id);
        if (todo is null)
        {
            Console.WriteLine($"No todo found with id {id}.");
            return;
        }
        _todos.Remove(todo);
        Console.WriteLine($"Removed: {todo.Title}");
    }

    public void Display()
    {
        if (_todos.Count == 0)
        {
            Console.WriteLine("No todos yet.");
            return;
        }

        Console.WriteLine("\\n--- Your Todos ---");
        foreach (Todo todo in _todos)
            Console.WriteLine(todo);
        Console.WriteLine();
    }

    private Todo? Find(int id) => _todos.FirstOrDefault(t => t.Id == id);

    public int Count => _todos.Count;
    public int CompletedCount => _todos.Count(t => t.IsComplete);
}
\`\`\`

The \`Find\` method is \`private\` — it's an internal helper. External code interacts only through \`Add\`, \`Complete\`, \`Remove\`, and \`Display\`.

### Step 3: The Main Loop

With the classes in place, the main program becomes a thin loop that reads commands and delegates to \`TodoList\`:

\`\`\`csharp
TodoList list = new();

Console.WriteLine("=== Todo CLI ===");
Console.WriteLine("Commands: add, list, complete <id>, remove <id>, quit\\n");

while (true)
{
    Console.Write("> ");
    string? input = Console.ReadLine()?.Trim();
    if (string.IsNullOrEmpty(input)) continue;

    string[] parts = input.Split(' ', 2);
    string command = parts[0].ToLower();
    string argument = parts.Length > 1 ? parts[1] : "";

    switch (command)
    {
        case "add":
            if (string.IsNullOrWhiteSpace(argument))
                Console.WriteLine("Usage: add <title>");
            else
                list.Add(argument);
            break;

        case "list":
            list.Display();
            break;

        case "complete":
            if (int.TryParse(argument, out int completeId))
                list.Complete(completeId);
            else
                Console.WriteLine("Usage: complete <id>");
            break;

        case "remove":
            if (int.TryParse(argument, out int removeId))
                list.Remove(removeId);
            else
                Console.WriteLine("Usage: remove <id>");
            break;

        case "quit":
        case "exit":
            Console.WriteLine($"Goodbye! You had {list.CompletedCount}/{list.Count} todos completed.");
            return;

        default:
            Console.WriteLine($"Unknown command: {command}");
            break;
    }
}
\`\`\`

### What You Gained from Refactoring

Compare this to the procedural version:

- **Encapsulation**: Nobody can accidentally set \`IsComplete = true\` by directly modifying the todo — they must call \`MarkComplete()\`
- **Validation**: Invalid input is caught inside the classes, not scattered through the main loop
- **Reusability**: \`Todo\` and \`TodoList\` can be used from any UI — CLI, web API, GUI — without modification
- **Testability**: You can write unit tests for \`Todo\` and \`TodoList\` independently
- **Single responsibility**: The main loop only handles I/O; the classes handle all business logic

### Extensions to Try

- Add a \`DueDate\` property to \`Todo\` and a command to set it
- Add a \`Filter(bool completed)\` method to \`TodoList\` that returns only complete or incomplete todos
- Persist todos to a JSON file so they survive between runs
- Add a \`Stats()\` method that prints a summary of completion progress

### Summary

Refactoring this procedural program into classes didn't change what the program *does* — it changed how it's *organized*. That organization pays off as soon as you need to extend, test, or maintain the code. This is OOP's core value proposition.
`,
};
