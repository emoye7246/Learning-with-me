export const lessonScopeLifetime = {
  id: "scope-lifetime",
  title: "Scope & Lifetime",

  article: `
## Scope & Lifetime

## Introduction

A variable error is often a visibility error.

The name exists,
but not where you are trying to use it.

That is scope.

And sometimes a value existed earlier,
but is gone now.

That is lifetime.

Understanding both removes a lot of "random" bugs.

---

## Mental Model

Use two questions:

1. Scope: where can this name be accessed?
2. Lifetime: how long does this value stay available?

Function variables are local.

Module-level variables are broader.

Broader visibility can be useful,
but also creates coupling and hidden dependencies.

Default mindset:

keep values local unless they must be shared.

---

## Small Code Examples

### Example 1: Local scope inside a function

\`\`\`python
def greet():
    message = "hello"
    print(message)

greet()
# print(message)
\`\`\`

\`message\` exists only inside \`greet\`.

Outside the function,
the name is out of scope.

---

### Example 2: Parameters are also local

\`\`\`python
def square(n):
    return n * n

print(square(4))
# print(n)
\`\`\`

\`n\` is created for the function call.

After the call,
that local name is not available globally.

---

### Example 3: Shadowing names

\`\`\`python
value = 10

def show():
    value = 3
    print(value)

show()
print(value)
\`\`\`

Inside function: prints \`3\`

Outside function: prints \`10\`

Same name.

Different scopes.

Different values.

---

## Common Mistakes

- Expecting function-local variables to be available globally.
- Reusing the same name across scopes without intention.
- Using globals to "fix" scope problems quickly.
- Mixing business logic with hidden global state.
- Forgetting that parameter values are local to each call.

---

## Practice Prompts

- Write one function with a local variable and intentionally try to access it outside.
- Create a global variable and a local variable with the same name. Trace both outputs.
- Refactor a short script to pass values as parameters instead of reading globals.
- Add one helper function to old code and decide which values should be local vs returned.

No full solutions.

Focus on visibility and lifetime decisions.

---

## Reflection Questions

- Where do you currently rely on global state?
- Which variable names in your scripts are ambiguous across scopes?
- Do your functions receive explicit inputs, or depend on hidden outer values?

---

## What This Unlocks

You can place data intentionally,
which makes behavior easier to reason about and test.

Scope clarity is a major step toward clean architecture.

---

## What You Can Now Do

You can predict where variables are visible, when they disappear, and how to pass data safely.

---

## Next Lesson

Next, you will apply tracing, state, and scope to real failures.

You will debug errors with a repeatable method.
`,
};
