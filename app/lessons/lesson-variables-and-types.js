export const lessonVariablesTypes = {
  id: "basics-variables-types",
  title: "Variables and Types",

  // ✅ Article markdown
  article: `
  ## Variables and Types — Teaching Python to Remember
  
  Welcome to your next Python lesson.
  
  You already learned how to make Python speak.
  Now you’re going to learn how to make Python **remember**.
  
  In this lesson, your objective is clear:
  > **Store information in variables and understand the type of data being stored.**
  
  This is where your code stops being a single action and starts becoming a real program.
  
  ---
  
  ## What is a variable?
  
  A **variable** is a name that refers to a value stored in memory.
  
  Think of it like a labeled container.
  You put a value inside, and you can use it later by calling its name.
  
  ---
  
  ## Creating a variable
  
  Here is a simple example:
  
  \`\`\`python
  message = "Learning Python"
  \`\`\`
  
  This line does three things:
  
  1. Creates a variable named \`message\`
  2. Stores the string \`"Learning Python"\` in memory
  3. Connects the name \`message\` to that value
  
  Once this happens, Python remembers that value for the rest of the program.
  
  ---
  
  ## Using a variable
  
  After a variable is created, you can use it anywhere in your code.
  
  \`\`\`python
  print(message)
  \`\`\`
  
  Notice what’s missing:
  
  There are no quotes around \`message\`.
  
  That’s because you are not printing text.
  You are telling Python:
  
  > “Look up the value stored under this name and print it.”
  
  ---
  
  ## Assignment is not equality
  
  In Python, the equals sign \`=\` means **assignment**, not comparison.
  
  \`\`\`python
  x = 5
  \`\`\`
  
  This does not ask a question.
  It gives an instruction.
  
  Python reads assignment from right to left:
  
  1. Evaluate the value \`5\`
  2. Store it in memory
  3. Attach the name \`x\` to it
  
  ---
  
  ## What are types?
  
  Every value in Python has a **type**.
  
  A type tells Python:
  - What kind of data a value is
  - What operations can be performed on it
  
  Python is **dynamically typed**, which means you don’t need to declare types.
  Python figures them out automatically.
  
  ---
  
  ## Common Python data types
  
  Here are the most common types you’ll work with.
  
  ### Strings (text)
  
  \`\`\`python
  name = "Alex"
  \`\`\`
  
  Strings store text and must be wrapped in quotes.
  
  ---
  
  ### Integers (whole numbers)
  
  \`\`\`python
  age = 25
  \`\`\`
  
  Integers store whole numbers with no decimal point.
  
  ---
  
  ### Floats (decimal numbers)
  
  \`\`\`python
  price = 19.99
  \`\`\`
  
  Floats store numbers that contain decimals.
  
  ---
  
  ### Booleans (true or false)
  
  \`\`\`python
  is_logged_in = True
  \`\`\`
  
  Booleans represent truth values:
  - \`True\`
  - \`False\`
  
  These are special values — not strings.
  
  ---
  
  ## Why types matter
  
  Types determine what Python allows you to do.
  
  \`\`\`python
  print(10 + 5)
  \`\`\`
  
  This works because Python knows how to add numbers.
  
  But:
  
  \`\`\`python
  print("10" + "5")
  \`\`\`
  
  This combines strings instead and produces:
  
  \`\`\`
  105
  \`\`\`
  
  Same characters.
  Different types.
  Different behavior.
  
  ---
  
  ## Checking a value’s type
  
  You can ask Python what type a value is using \`type()\`.
  
  \`\`\`python
  x = 10
  print(type(x))
  \`\`\`
  
  Python responds with:
  
  \`\`\`
  <class 'int'>
  \`\`\`
  
  This is a useful tool when learning or debugging.
  
  ---
  
  ## How Python executes variable code
  
  When Python runs a variable assignment, it follows these steps:
  
  1. Reads the line from left to right
  2. Evaluates the value on the right
  3. Determines the value’s type
  4. Stores the value in memory
  5. Links the variable name to that value
  
  This process happens instantly.
  
  ---
  
  ## Your interactive challenge
  
  Your task is to write a function that **returns** the exact string stored in a variable.
  
  The expected output is:
  
  \`\`\`
  Learning Python
  \`\`\`
  
  Nothing more.
  Nothing less.
  
  Small details matter — spelling, quotes, and variable names are all part of writing correct Python.
  
  ---
  
  ## Why this lesson matters
  
  This lesson introduces concepts you will use constantly:
  - Variables
  - Assignment
  - Strings vs numbers
  - Basic data types
  - Debugging with \`type()\`
  
  Later, you’ll use variables for:
  - Calculations
  - User input
  - Conditions
  - Loops
  - Functions that do real work
  
  But the structure stays the same.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - How variables store values
  - Why variables don’t use quotes
  - The difference between \`=\` and comparison
  - What types are and why they matter
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and make Python remember.
  `,

  // recommended additions
  type: "variables",
  entry: "variables-types",

  objectives: [
    "Understand what a variable is and how it stores a value",
    "Learn the difference between assignment (=) and comparison",
    "Recognize common Python data types (str, int, float, bool)",
    "Return a string from a function for auto-checking"
  ],

  content: `## Your Task
Write a function called \`get_message()\` that **creates a variable** named \`message\` and **returns** it.

The variable must store the exact string:

\`"Learning Python"\`

Returning is easier to auto-check with tests (LeetCode style).`,

  examples: [
    `message = "Learning Python"
print(message)`,
    `def get_message():
    message = "Learning Python"
    return message

print(get_message())`
  ],

  tasks: 'Write a function called `get_message()` that stores `"Learning Python"` in a variable named `message` and returns it.',

  starterCode: `def get_message():
    # Create a variable named message that stores "Learning Python"
    # Then return the variable
    pass
`,

  tests: [
    { input: [], expected: "Learning Python" },
    { input: [], expected: "Learning Python" }
  ],

  successMessage: "Nice! You just stored data in a variable (and passed tests) 🎉"
};
