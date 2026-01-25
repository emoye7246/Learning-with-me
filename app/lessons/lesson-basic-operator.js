export const lessonBasicOperators = {
    id: "basics-operators",
    title: "Basic Operators",
  
    type: "function",
    entry: "use_operators",
  
    objectives: [
      "Understand basic math operators in Python",
      "Learn comparison operators",
      "Practice returning results from expressions"
    ],
  
    content: `## Operators in Python
  Operators are symbols that let you **perform actions on values**.
  
  Python supports math, comparison, and logical operators.
  
  ---
  
  ## Math Operators
  - \`+\` addition  
  - \`-\` subtraction  
  - \`*\` multiplication  
  - \`/\` division  
  - \`%\` modulus (remainder)
  
  \`\`\`python
  a = 10 + 5
  b = 10 * 2
  c = 7 % 3
  \`\`\`
  
  ---
  
  ## Comparison Operators
  Comparison operators return **booleans** (\`True\` or \`False\`).
  
  - \`==\` equal to  
  - \`!=\` not equal to  
  - \`>\` greater than  
  - \`<\` less than  
  
  \`\`\`python
  10 > 5     # True
  3 == 4    # False
  \`\`\`
  
  ---
  
  ## Your Task
  Write a function called \`use_operators()\` that:
  
  - creates two numbers
  - calculates:
    - their **sum**
    - their **product**
    - whether the first number is **greater than** the second
  - returns the results as a list in this order:
  
  \`\`\`python
  [sum, product, is_greater]
  \`\`\`
  
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
  