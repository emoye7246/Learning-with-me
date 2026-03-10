export const projectRefactorTodoCliClasses = {
  id: "project-refactor-todo-cli-classes",
  title: "Project: Refactor Your Todo CLI with Classes",

  article: `
## Overview

Take the Todo CLI you already built procedurally and refactor it using classes.

This is the point of OOP in the course.

You already felt the friction of managing growing state and behavior in one script.

Now classes solve a problem you actually have.

---

## Project Goal

Turn a script that works into a design that is easier to extend, read, and test.

---

## Requirements

- Create a \`TodoItem\` class or a clear task representation
- Create a \`TodoApp\` or \`TodoList\` class that manages tasks
- Support adding, listing, completing, and deleting tasks
- Keep methods focused on one responsibility each
- Separate display logic from task-management logic where possible
- Handle invalid task indexes safely

---

## Suggested Structure

\`\`\`python
class TodoItem:
    def __init__(self, text):
        self.text = text
        self.completed = False


class TodoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, text):
        ...

    def complete_task(self, index):
        ...
\`\`\`

You do not have to follow this exact design.

You do need a design that makes responsibility obvious.

---

## Refactor Questions

- Which values belong on an object?
- Which functions should become methods?
- Where is state currently scattered?
- What got easier after the refactor?
- What stayed simpler as plain functions?

---

## Completion Standard

Your refactor is complete when the code is easier to extend than the original version and the CLI still behaves correctly for the same user flows.
`,
};
