export const lessonFunctions = {
    id: "basics-functions",
    title: "Functions",
  
    // ✅ Article markdown (tone and structure aligned with lesson-hello-world)
    article: `
  ## Functions — Grouping Code into Reusable Blocks in Python
  
  So far you have written expressions, conditions, and loops that run in place.
  The next step is to **wrap a piece of logic in a named block** so you can run it whenever you need it — with different inputs each time.
  
  In this lesson, your objective is clear:
  > **Define a function \`add_numbers(a, b)\` that takes two numbers and returns their sum.**
  
  This is how programs stay organized: one definition, many calls. You give Python exact instructions; it runs the same logic with the values you pass in.
  
  ---
  
  ## What is Python doing when you define and call a function?
  
  Python is still read and executed **line by line** by the interpreter.
  
  When you write \`def add_numbers(a, b):\`, you are not running code yet. You are giving **one specific instruction**: “Remember this block under this name and these parameters.”
  
  When you later write \`add_numbers(3, 5)\`, you are giving **another instruction**: “Run the block named \`add_numbers\` with \`a = 3\` and \`b = 5\`, and give me the result.”
  
  Python looks up the function, binds the arguments to the parameters, runs the block, and returns the value.
  There is no guessing.
  There is no skipping steps.
  Python does exactly what you tell it to do.
  
  ---
  
  ## The code you are working toward
  
  By the end of this lesson, you will write a function that takes two numbers and returns their sum.
  
  Here is the shape of what you are aiming for:
  
  \`\`\`python
  def add_numbers(a, b):
      return a + b
  \`\`\`
  
  When called with \`3\` and \`5\`, it returns \`8\`. When called with \`10\` and \`2\`, it returns \`12\`.
  
  Let’s break down the pieces.
  
  ---
  
  ## Understanding \`def\`
  
  \`def\` is the keyword that **defines** a function.
  
  You write the function name, then parentheses with **parameters** (the names that will receive the values you pass in), then a colon, then an **indented block**:
  
  \`\`\`python
  def add_numbers(a, b):
      return a + b
  \`\`\`
  
  \`a\` and \`b\` are **parameters**. When someone calls \`add_numbers(3, 5)\`, \`a\` becomes \`3\` and \`b\` becomes \`5\` for that call.
  
  The indentation defines which lines belong to the function. Everything that runs when the function is called must be indented under the \`def\` line.
  
  ---
  
  ## Understanding \`return\`
  
  \`return\` does two things: it computes a value, and it **exits the function** and sends that value back to the caller.
  
  So \`return a + b\` means: “Evaluate \`a + b\`, then exit this function and give that value to whoever called it.”
  
  A function can have multiple \`return\` statements (e.g. in different branches). As soon as one runs, the function exits. A function that doesn’t hit a \`return\` implicitly returns \`None\`.
  
  ---
  
  ## Why parameters?
  
  Parameters are how you pass **input** into a function. Without them, the function would always do the same thing with the same values.
  
  With \`add_numbers(a, b)\`, you can add any two numbers: \`add_numbers(3, 5)\`, \`add_numbers(10, 2)\`, and so on. The logic is written once; the data changes each time you call.
  
  The number and order of arguments in the call must match the parameters. \`add_numbers(3, 5)\` gives \`a = 3\` and \`b = 5\`.
  
  ---
  
  ## How Python evaluates a function call
  
  When Python runs \`add_numbers(3, 5)\`, it:
  
  1. Looks up the function \`add_numbers\`
  2. Binds \`a = 3\` and \`b = 5\`
  3. Runs the function body (the indented block)
  4. Evaluates \`a + b\` → \`8\`
  5. Returns \`8\` to the caller
  
  Once that happens, the caller can use the result (e.g. store it, print it, or pass it to another function).
  
  ---
  
  ## Your interactive challenge
  
  Your task is to write a function \`add_numbers(a, b)\` that:
  
  - Takes two arguments: \`a\` and \`b\` (numbers)
  - Returns the sum \`a + b\`
  
  Use \`def\`, parameters \`a\` and \`b\`, and \`return a + b\`.
  
  If your function returns the correct sum for the given arguments, the challenge is complete.
  
  Small details matter — the function name, the parameter names, and the \`return\` statement are all part of writing correct Python.
  
  ---
  
  ## Why this lesson matters
  
  This lesson introduces ideas you will use constantly:
  - Defining functions with \`def\` and parameters
  - Returning values with \`return\`
  - Calling functions and passing arguments
  
  Later you will write functions that call other functions, use loops and conditions, and work with more complex data. The same model applies; the context gets richer.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - How \`def\` defines a function and how parameters receive arguments
  - What \`return\` does (compute a value and exit the function)
  - How to call a function and use its return value
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and write your own function.
  `,
  
  };
  