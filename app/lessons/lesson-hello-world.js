export const lessonHelloWorld = {
  id: "basics-hello-world",
  title: "Hello, World!",

  // recommended additions
  type: "function",
  entry: "hello",

  objectives: [
    "Understand what print() does in Python",
    "Learn what a string is (text in quotes)",
    "Complete your first Python win"
  ],

  content: `
Python is simple and readable. The most basic way to show output is:

\`\`\`python
print("Hello, world!")
\`\`\`

### Your Task
Write a function called \`hello()\` that **returns** the exact string:
\`"Hello, world!"\`


### Bonus
After you pass, try:
\`\`\`python
print(hello())
\`\`\`
`,

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
