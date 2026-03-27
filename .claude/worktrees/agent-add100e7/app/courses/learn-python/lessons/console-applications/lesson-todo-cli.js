export const projectTodoCli = {
  id: "project-todo-cli",
  title: "Project: Todo CLI",

  article: `
## Overview

Build a command-line task manager that feels real, not disposable.

The program should let users add tasks, list tasks, mark tasks complete, and remove tasks.

This project is about reliability and structure.

Not clever shortcuts.

---

## Functional Requirements

Your tool must:

- [ ] Start with a clear welcome message
- [ ] Show a main menu on every loop cycle
- [ ] Add new tasks
- [ ] List all tasks with status (todo/done)
- [ ] Mark a task as completed
- [ ] Delete a task
- [ ] Exit cleanly on command
- [ ] Handle invalid menu options without crashing
- [ ] Handle invalid task numbers safely

Every requirement should have observable behavior.

If behavior is ambiguous, define it before coding.

---

## User Flow Description

1. User starts the program.
2. Program shows menu options.
3. User chooses an action.
4. Program validates input.
5. Program performs action and confirms result.
6. Program returns to menu until user quits.

This loop is your product experience.

Treat each step intentionally.

---

## Suggested File Structure

You can begin in one file.

Split when the flow is stable.

\`\`\`text
todo_cli/
  main.py
  tasks.py
  ui.py
\`\`\`

- \`main.py\`: app loop + entry point
- \`tasks.py\`: task operations (add, complete, delete)
- \`ui.py\`: menu + display helpers

Even in a small project, boundaries improve clarity.

---

## Implementation Milestones

1. Build a loop with a static menu.
2. Add in-memory task storage (list of dictionaries).
3. Implement add and list.
4. Implement complete and delete.
5. Add input validation and confirmation messages.
6. Refactor into functions/modules.

Do one milestone at a time.

Verify before moving forward.

---

## Testing Checklist

- [ ] Add multiple tasks and verify list order
- [ ] Mark valid task complete
- [ ] Try completing an invalid task index
- [ ] Delete valid task
- [ ] Try deleting from empty list
- [ ] Enter invalid menu options
- [ ] Confirm no crashes in normal usage

Test as a user who makes mistakes.

That is where quality appears.

---

## Optional Extensions

- [ ] Save tasks to a file and reload on startup
- [ ] Add task priority (low/medium/high)
- [ ] Add due dates as plain text
- [ ] Add a filter view (all, open, completed)

Choose one extension only after core behavior is stable.

---

## Submission Requirements

Name the entry file:

\`main.py\`

Run it with:

\`\`\`bash
python main.py
\`\`\`

---

## What This Project Proves

You can build a stateful CLI tool with clear user flow, safe input handling, and maintainable structure.
`,

  support: {
    intro: `
Use this support in order.

Start with Level 1.
Then use Level 2 if needed.
Use the Blueprint to unblock implementation.
Read the example only after you attempt your own version.
    `.trim(),

    level1Nudges: [
      "How will each task be represented in memory?",
      "Which menu choice updates a task's completion state?",
      "Where should input validation happen: before or after state updates?",
      "How will you display task numbers so users can select reliably?",
      "What should happen if the task list is empty?",
      "How will you keep your main loop readable as features grow?",
    ],

    level2Hints: [
      "A practical structure is a list of dicts like {title: ..., done: ...}.",
      "Use helper functions such as add_task(), list_tasks(), complete_task(), delete_task().",
      "When user selects a task number, convert to int and check range before modifying list.",
      "Keep UI prompts in one place and task logic in another for easier refactoring.",
      "Use continue after invalid input to return to menu safely.",
    ],

    blueprint: [
      "Create an empty tasks list.",
      "Build show_menu() that prints actions.",
      "Start a while loop for the app runtime.",
      "Read user choice and branch with if/elif/else.",
      "Add action: prompt title and append task object.",
      "List action: print numbered tasks with done/todo label.",
      "Complete action: read task number, validate, set done=True.",
      "Delete action: read task number, validate, remove task.",
      "Quit action: print goodbye and break loop.",
    ],

    debuggingGuide: [
      {
        problem: "My complete/delete actions edit the wrong task.",
        hint: "Your display index (1-based) and list index (0-based) are likely mismatched.",
      },
      {
        problem: "Program crashes when I type letters for task number.",
        hint: "Wrap int conversion in try/except and re-prompt on ValueError.",
      },
      {
        problem: "Changes disappear after restart.",
        hint: "Your current version is in-memory only. Add file persistence as an extension.",
      },
    ],

    revealSolutionWarning: `
This is one reference implementation.

If your version meets the checklist and behaves correctly, it is valid.
Use this to compare structure, not to copy blindly.
    `.trim(),

    exampleSolution: `def main():
    tasks = []

    while True:
        print("\\n1) Add 2) List 3) Complete 4) Delete 0) Quit")
        choice = input("Choose: ").strip()

        if choice == "1":
            title = input("Task title: ").strip()
            if title:
                tasks.append({"title": title, "done": False})
                print("Added.")
        elif choice == "2":
            if not tasks:
                print("No tasks.")
            for i, task in enumerate(tasks, start=1):
                status = "done" if task["done"] else "todo"
                print(f"{i}. [{status}] {task['title']}")
        elif choice == "3":
            # validate index, then set done=True
            pass
        elif choice == "4":
            # validate index, then delete
            pass
        elif choice == "0":
            print("Goodbye.")
            break
        else:
            print("Invalid option.")


if __name__ == "__main__":
    main()`,

    upgrades: {
      persistenceBlueprint: [
        "Store tasks in a JSON file.",
        "Load tasks on startup.",
        "Write tasks after every mutating action.",
      ],
      priorityBlueprint: [
        "Add priority field to task model.",
        "Validate priority input.",
        "Show priority in list output.",
      ],
    },
  },
};
