export const lessonSeparatingConcerns = {
  id: "separating-concerns",
  title: "Separating Concerns",

  article: `
## Separating Concerns

When code feels hard to change, the cause is often not Python syntax.

It is mixed responsibility.

A **concern** means one type of job your code performs.

Common concerns include:

- user input/output
- business rules
- data storage

If one function handles all three, your app becomes fragile quickly.

---

## Layered Thinking for Beginners

Use simple layers:

1. Interface layer: input/output
2. Logic layer: decisions and rules
3. Data layer: reading/writing files or databases

Each layer should do one primary job.

When these layers are separated, changing one part causes less damage elsewhere.

---

## Before: Mixed Concerns in One Function

\`\`\`python
def add_task():
    title = input("Task: ").strip()
    if not title:
        print("Empty task.")
        return
    with open("tasks.txt", "a", encoding="utf-8") as f:
        f.write(title + "\\n")
    print("Saved.")
\`\`\`

This works, but it is doing too much:

- collecting user input
- validating business rules
- writing to storage
- printing UI feedback

Hard to test.

Hard to reuse.

---

## After: Same Behavior, Better Boundaries

\`\`\`python
def validate_task_title(title):
    return bool(title.strip())


def save_task(path, title):
    with open(path, "a", encoding="utf-8") as file:
        file.write(title + "\\n")


def add_task_flow():
    title = input("Task: ").strip()
    if not validate_task_title(title):
        print("Empty task.")
        return
    save_task("tasks.txt", title)
    print("Saved.")
\`\`\`

Behavior is the same.

Structure is stronger.

Now:

- validation can be reused
- storage can be swapped
- flow logic stays readable

That is what makes features safer to add.

---

## How to Separate Concerns in Practice

When writing a new feature, ask:

1. What is user interaction?
2. What is business logic?
3. What is persistence or external I/O?

Then place each part in its own function or module.

Do not over-engineer.

Just avoid mixing responsibilities that change for different reasons.

---

## Common Mistakes

- One mega-function handling input, logic, and storage.
- Putting print/input calls inside pure logic helpers.
- Repeating validation logic across files.
- Splitting files without clear boundaries.

---

## Practice Exercise

Choose one existing command flow and refactor:

1. Extract validation into dedicated helpers.
2. Isolate file operations in a storage module.
3. Keep orchestration in a flow function or \`main()\`.

Then verify behavior did not change.

A good refactor improves structure while preserving outcomes.

---

## What You Can Now Do

You can now separate interface, logic, and data concerns so your Python projects can scale without turning into tangled code.
`,
};
