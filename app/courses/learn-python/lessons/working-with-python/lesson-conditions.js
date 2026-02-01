export const lessonConditions = {
    id: "basics-conditions",
    title: "Conditions (if / else)",
  
    // ✅ Article markdown (tone and structure aligned with lesson-hello-world)
    article: `
  ## Conditions — Making Decisions in Python
  
  So far you have written code that runs the same steps every time.
  The next step is to **make decisions**: run different code depending on whether a condition is true or false.
  
  In this lesson, your objective is clear:
  > **Use \`if\`, \`elif\`, and \`else\` to return \`"Positive"\`, \`"Negative"\`, or \`"Zero"\` based on whether a number is greater than, less than, or equal to zero.**
  
  This is how programs branch: one value in, one of several paths taken. You give Python exact rules; it follows them in order.
  
  ---
  
  ## What is Python doing when it runs a condition?
  
  Python is still read and executed **line by line** by the interpreter.
  
  When you write an \`if\` block, you are not describing a feeling. You are giving **exact instructions**: “Evaluate this condition. If it is true, run this block. Otherwise, consider the next condition or run the \`else\` block.”
  
  Python evaluates each condition in order. As soon as one is true, it runs that block and skips the rest. If none is true, it runs the \`else\` block (if there is one).
  There is no guessing.
  There is no skipping steps.
  Python does exactly what you tell it to do.
  
  ---
  
  ## The code you are working toward
  
  By the end of this lesson, you will write a function that takes a number and returns one of three strings: \`"Positive"\`, \`"Negative"\`, or \`"Zero"\`.
  
  Here is the shape of what you are aiming for:
  
  \`\`\`python
  def check_number(num):
      if num > 0:
          return "Positive"
      elif num < 0:
          return "Negative"
      else:
          return "Zero"
  \`\`\`
  
  When called with \`5\`, it returns \`"Positive"\`. When called with \`-2\`, it returns \`"Negative"\`. When called with \`0\`, it returns \`"Zero"\`.
  
  Let’s break down the pieces.
  
  ---
  
  ## Understanding \`if\`
  
  \`if\` is a **statement** that runs a block of code only when a condition is true.
  
  You write a condition (an expression that evaluates to \`True\` or \`False\`), then a colon, then an **indented block**:
  
  \`\`\`python
  if num > 0:
      return "Positive"
  \`\`\`
  
  If \`num > 0\` is true, Python runs the indented block. If it is false, Python skips that block and continues.
  
  The indentation is required. It tells Python which lines belong to the \`if\`.
  
  ---
  
  ## Understanding \`elif\` and \`else\`
  
  \`elif\` means “else if.” You use it when you have multiple conditions to check in order.
  
  \`else\` means “if none of the previous conditions were true, run this block.”
  
  \`\`\`python
  if num > 0:
      return "Positive"
  elif num < 0:
      return "Negative"
  else:
      return "Zero"
  \`\`\`
  
  Python checks \`num > 0\` first. If true, it returns and stops. If false, it checks \`num < 0\`. If true, it returns and stops. If both are false, \`num\` must be \`0\`, so it runs the \`else\` block.
  
  You can have many \`elif\` branches; you can have at most one \`else\`, and it comes last.
  
  ---
  
  ## Comparison operators
  
  Conditions use **comparison operators** that produce booleans (\`True\` or \`False\`):
  
  - \`==\` equal to
  - \`!=\` not equal to
  - \`>\` greater than
  - \`<\` less than
  - \`>=\` greater than or equal to
  - \`<=\` less than or equal to
  
  So \`num > 0\` is true when the number is positive, and \`num < 0\` is true when the number is negative.
  
  ---
  
  ## Why indentation matters
  
  In Python, **indentation** defines which lines belong to which block. There are no curly braces like in some other languages.
  
  Everything that runs when the condition is true must be indented under the \`if\`, \`elif\`, or \`else\` line. Use the same number of spaces (or tabs) consistently.
  
  Wrong indentation changes which code runs when — or causes an error. Small details matter.
  
  ---
  
  ## How Python evaluates your function
  
  When Python runs your function with a given \`num\`, it:
  
  1. Evaluates \`num > 0\`. If true, returns \`"Positive"\` and stops.
  2. Otherwise, evaluates \`num < 0\`. If true, returns \`"Negative"\` and stops.
  3. Otherwise, runs the \`else\` block and returns \`"Zero"\`.
  
  Only one of the branches runs. Once a \`return\` executes, the function exits.
  
  ---
  
  ## Your interactive challenge
  
  Your task is to write a function \`check_number(num)\` that:
  
  - Takes one argument: \`num\` (a number)
  - Returns \`"Positive"\` if the number is greater than 0
  - Returns \`"Negative"\` if the number is less than 0
  - Returns \`"Zero"\` if the number is equal to 0
  
  Use \`if\`, \`elif\`, and \`else\` with the comparison operators \`>\` and \`<\`.
  
  If your function returns the correct string for the given number, the challenge is complete.
  
  Small details matter — the exact strings and the order of your conditions are all part of writing correct Python.
  
  ---
  
  ## Why this lesson matters
  
  This lesson introduces ideas you will use constantly:
  - Conditions and branching
  - Comparison operators and booleans
  - Indentation and block structure
  
  Later you will combine conditions with loops, user input, and more complex logic. The same rules apply; the context gets richer.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - How \`if\`, \`elif\`, and \`else\` work together
  - What comparison operators like \`>\` and \`<\` return
  - Why indentation defines which code runs in each branch
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and write your first condition.
  `,
  
    // recommended additions
    type: "function",
    entry: "check_number",
  
    objectives: [
      "Understand if and else statements",
      "Use comparison operators",
      "Write conditional logic with proper indentation"
    ],
  
    content: `## Your Task
  Write a function called \`check_number(num)\` that returns:
  
  - \`"Positive"\` if the number is greater than 0
  - \`"Negative"\` if the number is less than 0
  - \`"Zero"\` if the number is equal to 0`,
  
    examples: [
      `num = 5
  if num > 0:
      print("Positive")
  else:
      print("Not positive")`,
  
      `def check_number(num):
      if num > 0:
          return "Positive"
      elif num < 0:
          return "Negative"
      else:
          return "Zero"
  
  print(check_number(-3))`
    ],
  
    tasks: 'Write a function called `check_number(num)` that returns "Positive", "Negative", or "Zero".',
  
    starterCode: `def check_number(num):
      # Use if / elif / else to determine the number type
      pass
  `,
  
    tests: [
      { input: [5], expected: "Positive" },
      { input: [-2], expected: "Negative" },
      { input: [0], expected: "Zero" }
    ],
  
    successMessage: "Logic unlocked! Your code can now make decisions 🧠⚡"
  };
  