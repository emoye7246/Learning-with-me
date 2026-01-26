export const lessonHelloWorld = {
  id: "basics-hello-world",
  title: "Hello, World!",

  // ✅ Article markdown
  article: `
## Hello, World (and why it matters)

Most programming languages start with **Hello, World** because it's the smallest win:
you write code → the computer responds.

### Printing text in Python
To display text, Python uses \`print()\`:

\`\`\`python
print("Hello, world!")
\`\`\`

### Strings
Text wrapped in quotes is called a **string**:

- \`"Hello"\`
- \`"Python"\`

### Common mistakes
- Quotes are required for text: \`print(Hello)\` ❌
- Capitalization matters: \`True\` / \`False\` in Python

---

When you're ready, hit **Start Challenge** and we'll make your first function.
`,

  // recommended additions
  type: "function",
  entry: "hello",

  objectives: [
    "Understand what print() does in Python",
    "Learn what a string is (text in quotes)",
    "Complete your first Python win"
  ],

  content: `## Your Task
Write a function called \`hello()\` that **returns** the exact string:

\`"Hello, world!"\`

Returning is easier to auto-check with tests (LeetCode style).`,

  examples: [
    `print("Hello, world!")`,
    `def hello():
    return "Hello, world!"

print(hello())`
  ],

  tasks: 'Write a function called `hello()` that returns the exact string `"Hello, world!"`.',

  starterCode: `def hello():
    # Return the exact string: "Hello, world!"
    pass
`,

  tests: [
    { input: [], expected: "Hello, world!" },
    { input: [], expected: "Hello, world!" }
  ],

  successMessage: "Nice! You just printed your first message (and passed tests) 🎉"
};
