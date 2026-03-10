export const lessonIntroToVerification = {
  id: "intro-to-verification",
  title: "Intro to Verification: How Do You Know It Works?",

  article: `
## Intro to Verification

Building a program is only half the job.

The other half is proving it behaves the way you think it does.

That is verification.

It starts before formal testing.

---

## The Core Question

When you finish a CLI tool, ask:

"How do I know this works beyond the one happy-path demo I just tried?"

If you cannot answer that, the program is not finished.

---

## A Simple Verification Stack

Use these layers:

1. Manual checks for the normal user flow
2. Edge-case checks for empty, invalid, or unexpected input
3. Repeatable examples you can rerun after every change
4. Small helper functions that are easy to inspect and test later

This is the bridge into formal testing.

---

## Example

\`\`\`python
def add_task(tasks, text):
    if not text.strip():
        raise ValueError("Task cannot be empty")
    tasks.append(text)


tasks = []
add_task(tasks, "Buy milk")
assert tasks == ["Buy milk"]
\`\`\`

That \`assert\` is not a full test suite.

But it is still verification.

It checks a concrete expectation.

---

## What to Verify in a CLI App

- Correct output for valid input
- Clear handling of invalid input
- Data changes happen when expected
- Program does not crash on common mistakes
- Re-running the same flow gives predictable results

---

## Design Implication

Programs that are easy to verify usually have:

- smaller functions
- less hidden state
- clearer inputs and outputs

Verification pushes you toward better design.

That is why it belongs here, before the full testing course.

---

## What comes next

From this point on, every project should include a short verification checklist even if it does not yet have automated tests.
`,
};
