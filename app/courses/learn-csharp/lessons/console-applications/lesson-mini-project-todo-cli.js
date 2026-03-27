export const lessonMiniProjectTodoCli = {
  id: "mini-project-todo-cli-cs",
  title: "Mini-Project: Todo CLI",
  hasChallenge: false,
  article: `
## Mini-Project: Todo CLI

Build a complete command-line Todo application that lets you manage tasks from the terminal. This project ties together everything in this module: menu loops, input validation, exception handling, file persistence, and organized code structure.

---

## What You're Building

A terminal app where users can:
- Add new tasks with a title
- List all tasks with their status (pending / done)
- Mark a task as complete
- Delete a task
- Have all tasks persist to a text file between runs

\`\`\`
=== Todo CLI ===
1. Add task
2. List tasks
3. Complete task
4. Delete task
0. Exit

Choice: 2

Tasks:
  [1] [DONE] Buy groceries
  [2] [ ]    Write project report
  [3] [ ]    Call the dentist

Choice: 3
Enter task number to complete: 2
Task marked as complete.
\`\`\`

---

## Getting Started

Create a new console project:

\`\`\`bash
dotnet new console -n TodoCli
cd TodoCli
\`\`\`

Plan your files before writing code:

\`\`\`
TodoCli/
├── Program.cs          ← entry point
├── MenuRunner.cs       ← menu loop and user interaction
├── TaskManager.cs      ← add/list/complete/delete logic
└── TaskStorage.cs      ← read/write tasks.txt
\`\`\`

---

## Data Model

Represent a task as a simple struct or record. Using a record keeps it concise:

\`\`\`csharp
record TodoTask(string Title, bool IsComplete);
\`\`\`

Or as a plain class if you prefer:

\`\`\`csharp
class TodoTask
{
    public string Title { get; set; } = "";
    public bool IsComplete { get; set; }
}
\`\`\`

---

## File Storage Format

Store tasks as plain text, one task per line. Use a separator to encode the completion status:

\`\`\`
false|Buy groceries
true|Write project report
false|Call the dentist
\`\`\`

Loading and saving:

\`\`\`csharp
static class TaskStorage
{
    private const string FilePath = "tasks.txt";

    public static List<TodoTask> Load()
    {
        if (!File.Exists(FilePath)) return [];

        return File.ReadAllLines(FilePath)
            .Select(line =>
            {
                var parts = line.Split('|', 2);
                return new TodoTask(
                    Title: parts[1],
                    IsComplete: parts[0] == "true"
                );
            })
            .ToList();
    }

    public static void Save(List<TodoTask> tasks)
    {
        var lines = tasks.Select(t => $"{t.IsComplete}|{t.Title}");
        File.WriteAllLines(FilePath, lines);
    }
}
\`\`\`

---

## Key Requirements

Use this as your checklist before calling the project done:

- [ ] **Add task** — prompts for a title, rejects blank input
- [ ] **List tasks** — shows numbered list with [ ] or [DONE] status; shows "No tasks" if empty
- [ ] **Complete task** — prompts for task number, validates the number is in range
- [ ] **Delete task** — prompts for task number, asks for confirmation before deleting
- [ ] **Persistence** — tasks are saved to a file and loaded on startup
- [ ] **Menu loop** — runs until the user chooses to exit
- [ ] **Input validation** — handles non-numeric input, out-of-range selections, empty titles
- [ ] **Error handling** — file errors are caught and reported, program does not crash

---

## Stretch Goals

Once the core works, try extending it:

- Add a **priority level** (high / medium / low) to each task
- Add a **due date** field using \`DateTime\`
- Add a **filter** option: show only pending tasks or only completed tasks
- Add a **clear completed** option that removes all done tasks at once
- Use **JSON** instead of plain text for the storage format (using \`System.Text.Json\`)

---

## Tips

**Start small.** Get the add and list functions working before touching storage. Verify manually at each step.

**Test the unhappy path.** What happens if someone enters "abc" as a task number? What if the tasks file is deleted between runs?

**Keep Program.cs thin.** It should load tasks, run the menu, and save tasks — nothing else.

This project is a complete, real program. When it works, you'll have something to show, extend, and be proud of.
`,
};
