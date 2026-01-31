export const lessonBasicOperators = {
    id: "basics-operators",
    title: "Basic Operators",

    // ✅ Article markdown (tone and structure aligned with lesson-hello-world)
    article: `
  ## Basic Operators — Doing Math and Comparisons in Python
  
  You have already made Python output text.
  The next step is to make it **work with numbers and comparisons**.
  
  In this lesson, your objective is clear:
  > **Use Python’s math and comparison operators to compute a sum, a product, and a comparison, then return the results.**
  
  This builds directly on what you know: you will still write exact instructions that Python executes — only now those instructions involve arithmetic and comparisons.
  
  ---
  
  ## What is Python doing when you use operators?
  
  Python is still read and executed **line by line** by the interpreter.
  
  When you write an expression like \`10 + 5\`, you are not describing math in general.
  You are giving **one specific instruction**: “Evaluate this expression.”
  
  Python evaluates it, produces a value, and moves on.
  There is no guessing.
  There is no skipping steps.
  Python does exactly what you tell it to do.
  
  ---
  
  ## The code you are working toward
  
  By the end of this lesson, you will write a function that:
  
  - Uses two numbers
  - Computes their **sum**, their **product**, and whether the first is **greater than** the second
  - Returns those three results in a list
  
  Here is the shape of what you are aiming for:
  
  \`\`\`python
  def use_operators():
      x = 10
      y = 5
      return [x + y, x * y, x > y]
  \`\`\`
  
  Let’s break down the pieces.
  
  ---
  
  ## Understanding math operators
  
  **Operators** are symbols that perform an action on one or two values.
  
  Python’s basic math operators are:
  
  - \`+\` addition
  - \`-\` subtraction
  - \`*\` multiplication
  - \`/\` division
  - \`%\` modulus (remainder after division)
  
  When you write \`x + y\`, Python evaluates that expression and produces a single value.
  The same is true for \`x * y\`, \`x - y\`, and so on.
  
  Examples:
  \`\`\`python
  10 + 5   # 15
  10 * 2   # 20
  7 % 3    # 1 (remainder)
  \`\`\`
  
  ---
  
  ## Understanding comparison operators
  
  **Comparison operators** compare two values and produce a **boolean**: \`True\` or \`False\`.
  
  The ones you need here:
  
  - \`==\` equal to
  - \`!=\` not equal to
  - \`>\` greater than
  - \`<\` less than
  
  So when you write \`x > y\`, Python evaluates it and returns \`True\` or \`False\`.
  
  Examples:
  \`\`\`python
  10 > 5   # True
  3 == 4   # False
  \`\`\`
  
  ---
  
  ## Why return a list?
  
  Your function must return **three** values: the sum, the product, and the comparison result.
  
  A function can only return **one** object. So you pack those three values into a **list** and return that list:
  
  \`\`\`python
  return [sum, product, is_greater]
  \`\`\`
  
  The order matters: \`[sum, product, is_greater]\` is what the lesson expects.
  
  ---
  
  ## How Python evaluates your function
  
  When Python runs your code, it will:
  
  1. Define the function \`use_operators\`
  2. When the function is called, create \`x\` and \`y\`
  3. Evaluate \`x + y\`, \`x * y\`, and \`x > y\`
  4. Build the list \`[sum, product, is_greater]\`
  5. Return that list
  
  Once that happens, the challenge can check your answer automatically.
  
  ---
  
  ## Your interactive challenge
  
  Your task is to write a function \`use_operators()\` that:
  
  - Creates two numbers (you choose the values)
  - Computes their **sum**, their **product**, and whether the first number is **greater than** the second
  - Returns the results as a list in this exact order: \`[sum, product, is_greater]\`
  
  If your function returns the correct list for the values used in the tests, the challenge is complete.
  
  Small details matter — order of the list and the types (numbers and boolean) are part of writing correct Python.
  
  ---
  
  ## Why this lesson matters
  
  This lesson reinforces concepts you will use constantly:
  - Expressions and evaluation
  - Math and comparison operators
  - Booleans
  - Returning structured data (a list)
  
  Later you will use the same operators with variables, user input, and conditions.
  The rules stay the same; the context gets richer.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - What math operators like \`+\` and \`*\` do
  - What comparison operators like \`>\` and \`==\` return (booleans)
  - How to return multiple values as a single list
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and put the operators to work.
  `,

    type: "function",
    entry: "use_operators",

    objectives: [
      "Understand basic math operators in Python",
      "Learn comparison operators",
      "Practice returning results from expressions"
    ],

    content: `## Your Task
  Write a function called \`use_operators()\` that:
  
  - creates two numbers
  - calculates their **sum**, their **product**, and whether the first number is **greater than** the second
  - returns the results as a list in this order: \`[sum, product, is_greater]\`
  
  Returning values lets us automatically check your answer.`,
  
    examples: [
      `x = 10
  y = 5
  
  total = x + y
  product = x * y
  is_greater = x > y`,
      
      `def use_operators():
      x = 10
      y = 5
      return [x + y, x * y, x > y]`
    ],
  
    tasks: `Create two numbers and return:
  - their sum
  - their product
  - whether the first number is greater than the second
  
  Return the values as a list in this order:
  [sum, product, is_greater]`,
  
    starterCode: `def use_operators():
      # Create two numbers
      x =
      y =
  
      # Perform operations
      # sum =
      # product =
      # is_greater =
  
      # Return results as a list
      pass
  `,
  
    tests: [
      {
        input: [],
        expected: [15, 50, true]
      }
    ],
  
    successMessage: "Nice! You just used math and comparison operators 🎉"
  };
  