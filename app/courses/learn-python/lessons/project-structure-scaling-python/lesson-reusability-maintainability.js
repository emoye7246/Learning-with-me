export const lessonReusabilityMaintainability = {
  id: "reusability-maintainability",
  title: "Reusability & Maintainability",

  article: `
## Reusability & Maintainability

These two words are often used together, but they are not the same thing.

- **Reusable** code can be used in multiple places.
- **Maintainable** code can be changed safely over time.

You want both.

If code is reusable but hard to understand, it will still cause pain.

If code is maintainable but tied to one narrow workflow, reuse will be limited.

The goal is balanced design.

---

## Practical Rule Set

Write functions that are:

- small and focused
- explicit in inputs/outputs
- light on side effects
- named by responsibility

This increases both reuse and safety.

---

## Example: Hard to Reuse

\`\`\`python
def process():
    file_path = input("File: ").strip()
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()
    print(text.upper())
\`\`\`

Tied to terminal input and printing.

This makes it difficult to use the logic in:

- tests
- batch jobs
- web routes
- other scripts

---

## Example: Reusable Core + Thin Interface

\`\`\`python
def to_upper(text):
    return text.upper()


def read_text(path):
    with open(path, "r", encoding="utf-8") as file:
        return file.read()


def run():
    file_path = input("File: ").strip()
    text = read_text(file_path)
    print(to_upper(text))
\`\`\`

\`to_upper()\` and \`read_text()\` can be reused anywhere.

The interface (\`run()\`) stays thin.

The core logic stays portable.

This pattern is used in real production systems.

---

## Maintainability Is About Future Change

A helpful mindset:

"How hard will this be to modify six months from now?"

You are improving maintainability when future changes require less risk and less guesswork.

---

## Maintainability Signals

You are improving maintainability when:

- new features touch fewer files
- bugs are easier to isolate
- teammates understand modules quickly
- refactors require fewer risky edits

---

## Common Mistakes

- DRY obsession that creates unclear abstractions.
- Reusing code too early before patterns are stable.
- "Utility" modules that become dumping grounds.

Reuse stable patterns, not random similarities.

---

## Practice Exercise

Take a small project and run this upgrade pass:

1. Find duplicated logic and extract one pure helper.
2. Rename vague functions with responsibility-based names.
3. Add one new feature and track how many files you touched.
4. Remove one hidden side effect from a helper function.

Then reflect:

- Is the core logic more reusable now?
- Did maintainability improve without over-abstracting?

---

## What You Can Now Do

You can now design code that is both reusable and maintainable, so growth and refactoring feel controlled instead of chaotic.
`,
};
