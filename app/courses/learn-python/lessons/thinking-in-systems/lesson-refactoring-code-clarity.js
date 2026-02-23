export const lessonRefactoringCodeClarity = {
  id: "refactoring-code-clarity",
  title: "Refactoring & Code Clarity",

  article: `
## Refactoring & Code Clarity

## Introduction

Passing tests is important.

But "works" is not the final quality bar.

If code is hard to read,
it will be hard to debug,
change,
and trust later.

Refactoring improves structure
without changing behavior.

---

## Mental Model

Refactoring is controlled cleanup.

You keep outputs the same.

You reduce cognitive load by improving:

- names
- duplication
- function boundaries
- branch clarity

Rule:

small change,
then verify,
then next change.

---

## Small Code Examples

### Example 1: Better names improve reasoning

\`\`\`python
# before
x = 0
for n in [5, 8, 2]:
    x = x + n

# after
total = 0
for score in [5, 8, 2]:
    total = total + score
\`\`\`

Behavior is identical.

Understanding is faster.

---

### Example 2: Remove duplication with a function

\`\`\`python
# before
print("Hello, Maya")
print("Hello, Luis")

# after
def greet(name):
    print(f"Hello, {name}")

greet("Maya")
greet("Luis")
\`\`\`

One logic path is easier to maintain than two copies.

---

### Example 3: Simplify condition style

\`\`\`python
# before
if is_admin == True:
    print("allowed")

# after
if is_admin:
    print("allowed")
\`\`\`

Cleaner condition.

Same behavior.

Less visual noise.

---

## Common Mistakes

- Refactoring and changing behavior in the same edit.
- Renaming incompletely across a file.
- Splitting code into too many tiny functions too early.
- Refactoring without re-running checks.
- Optimizing style before fixing logic correctness.

---

## Practice Prompts

- Choose a 15-line script and rename unclear variables for intent.
- Find duplicated print or calculation blocks and extract one helper function.
- Simplify two boolean conditions without changing outcomes.
- Refactor one file in small commits: name cleanup, then duplication cleanup, then branch cleanup.

No full solutions.

Preserve behavior.

---

## Reflection Questions

- Which recent script became hard to read after a few days?
- Do your names describe purpose, or just type?
- How do you verify behavior stayed the same after each refactor?

---

## What This Unlocks

Clearer code reduces future bugs.

It also makes collaboration easier,
including with your future self.

---

## What You Can Now Do

You can improve readability and maintainability while keeping program behavior stable.

---

## Next Lesson

Next, you will decompose bigger problems into small buildable parts.

That is how developers ship complex tools without chaos.
`,
};
