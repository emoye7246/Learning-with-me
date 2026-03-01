export const lessonWhyTestingMatters = {
  id: "why-testing-matters",
  title: "Why Testing Matters",

  article: `
## Why Testing Matters

Every program you've written has bugs. Some you found. Some shipped.

Automated tests are how professionals find bugs before users do.

---

## What is a Test?

A test is code that checks whether other code behaves correctly.

\`\`\`python
def add(a, b):
    return a + b

# A test
result = add(2, 3)
assert result == 5, f"Expected 5, got {result}"
\`\`\`

If \`add\` is broken, the assertion fails and you know immediately.

---

## Why Not Just Run the Program?

Manual testing:
- Takes time every time you change something
- Misses edge cases
- Has no memory — you have to re-test everything
- Doesn't scale with codebase size

Automated tests:
- Run in seconds
- Run every time you change anything
- Cover the same cases every time
- Catch regressions before they reach users

---

## What a Regression Is

You fix a bug. A week later, you change something unrelated. The bug comes back.

That's a regression. Without tests, you won't know until a user reports it.

With tests, it fails immediately when the old bug reappears.

---

## Real Cost of No Tests

- More time debugging production issues
- Fear of refactoring (what if I break something?)
- Slower development as the codebase grows
- Lower confidence in every release

Tests aren't slowing you down. The bugs they prevent are what slows you down.

---

## Types of Tests

**Unit tests** — test one function or class in isolation.
**Integration tests** — test how components work together.
**End-to-end tests** — test the full system from user perspective.

Start with unit tests. They're fast, focused, and easy to write.

---

## What Good Tests Look Like

- Test one thing per test function.
- Test the normal case and the edge cases.
- Test what happens when things go wrong.
- Tests should be readable — they document expected behavior.

---

## The Testing Mindset

When you write a function, also ask:

- What inputs could break this?
- What should it return when inputs are invalid?
- Does it behave correctly at boundaries (empty list, zero, very large number)?

Writing tests forces you to think about these questions.

---

## What you just learned

- What automated tests are and why they matter
- What a regression is
- The real cost of skipping tests
- The types of tests and where to start

---

## What comes next

Next lesson: **Writing Your First Test with pytest**
`,
};
