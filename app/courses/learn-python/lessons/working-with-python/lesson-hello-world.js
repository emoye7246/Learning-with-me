export const lessonHelloWorld = {
  id: "basics-hello-world",
  title: "Hello, World!",

  // ✅ Article markdown
  article: `
  ## Hello, World — Your First Step in Python
  
  Welcome to your first Python lesson.
  
  Every programming journey starts with a simple goal:
  **make the computer respond to you.**
  
  In this lesson, your objective is straightforward:
  > **Successfully output the message \`Hello, World\` using Python.**
  
  This may look small, but it represents a major shift — you are writing instructions that a computer understands and executes.
  
  ---
  
  ## What is Python doing when you run code?
  
  Python is a programming language that is read and executed **line by line** by something called the *Python interpreter*.
  
  When you write Python code, you are not describing what you want in general terms.
  You are giving **exact instructions** that Python follows in order.
  
  There is no guessing.
  There is no skipping steps.
  Python does exactly what you tell it to do.
  
  ---
  
  ## Your first Python instruction
  
  Here is the code you are working toward in this lesson:
  
  \`\`\`python
  print("Hello, World")
  \`\`\`
  
  This single line is a complete Python program.
  
  Let’s break it down carefully.
  
  ---
  
  ## Understanding \`print()\`
  
  \`print\` is a **built-in Python function**.
  
  A *function* is a reusable piece of code designed to perform a specific task.
  The task of \`print()\` is simple:
  > Display information to the output screen.
  
  During this course, \`print()\` will help you:
  - See results
  - Debug your code
  - Understand how Python evaluates values
  
  ---
  
  ## Why parentheses matter
  
  In Python, functions are *called* using parentheses:
  
  \`\`\`python
  function_name(arguments)
  \`\`\`
  
  So when you write:
  
  \`\`\`python
  print("Hello, World")
  \`\`\`
  
  You are telling Python:
  > “Call the \`print\` function and give it this value.”
  
  Without the parentheses, Python would not know you are trying to execute the function.
  
  ---
  
  ## What is \`"Hello, World"\`?
  
  \`"Hello, World"\` is a **string**.
  
  A string is a sequence of characters wrapped in quotes.
  Strings are how Python represents text.
  
  Examples of valid strings:
  \`\`\`python
  "Hello"
  "123"
  "This is a sentence"
  \`\`\`
  
  The quotes are required.  
  Without them, Python would assume you are referring to something else, like a variable or command.
  
  ---
  
  ## How Python executes this line
  
  When Python runs this program, it follows these steps:
  
  1. Reads the line from left to right
  2. Recognizes the \`print\` function
  3. Evaluates the string \`"Hello, World"\`
  4. Sends the result to the output
  
  Once this happens, the program finishes.
  
  This is the core execution model you will build on throughout the course.
  
  ---
  
  ## Your interactive challenge
  
  Your task is to write Python code that produces the following output:
  
  \`\`\`
  Hello, World
  \`\`\`
  
  Nothing more.
  Nothing less.
  
  If the output matches exactly, the challenge is complete.
  
  Small details matter — spelling, quotes, and parentheses are all part of writing correct Python.
  
  ---
  
  ## Why this lesson matters
  
  This lesson introduces concepts you will use constantly:
  - Functions
  - Arguments
  - Strings
  - Execution order
  - Output
  
  Later, you’ll replace \`"Hello, World"\` with:
  - Variables
  - Calculations
  - User input
  - Data from real programs
  
  But the structure stays the same.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - What \`print()\` does
  - Why strings need quotes
  - How Python reads and executes code
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and make Python speak.
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
