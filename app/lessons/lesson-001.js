export const lesson001 = {
  id: "functions-add",
  title: "Functions: Add Two Numbers",
  
  objectives: [
    'Learn how to define functions in Python',
    'Understand function parameters and return values',
    'Practice writing your first function'
  ],

  content: `### Your Task
Write a function called \`add(a, b)\` that returns the sum of two numbers.

Functions in Python are defined using the \`def\` keyword. They can take parameters and return values using the \`return\` statement.

Example structure:
\`\`\`python
def function_name(parameter1, parameter2):
    # your code here
    return result
\`\`\``,

  examples: [
    `# Function definition\n\ndef add(a, b):\n    return a + b\n\n# Function call\nresult = add(3, 5)\nprint(result)  # Output: 8`
  ],

  tasks: 'Write a function called `add(a, b)` that takes two numbers and returns their sum.',

  starterCode: `def add(a, b):
    # your code here
    pass
`,

  tests: [
    { input: [1, 2], expected: 3 },
    { input: [-1, 1], expected: 0 },
    { input: [10, 5], expected: 15 },
  ],

  successMessage: "Nice! You just wrote your first function 🎉",
};


