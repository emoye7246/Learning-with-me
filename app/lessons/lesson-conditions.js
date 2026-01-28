export const lessonConditions = {
    id: "basics-conditions",
    title: "Conditions (if / else)",
  
    // ✅ Article markdown
    article: `
  ## Conditions in Python
  
  Conditions allow your program to **make decisions**.
  Instead of running the same code every time, Python can choose a path based on logic.
  
  ### The if statement
  Use \`if\` to check a condition:
  
  \`\`\`python
  age = 18
  if age >= 18:
      print("You are an adult")
  \`\`\`
  
  ### else
  Use \`else\` to handle the opposite case:
  
  \`\`\`python
  if age >= 18:
      print("You are an adult")
  else:
      print("You are under 18")
  \`\`\`
  
  ### Comparison operators
  - \`==\` equal to  
  - \`!=\` not equal to  
  - \`>\` greater than  
  - \`<\` less than  
  - \`>=\` greater than or equal to  
  - \`<=\` less than or equal to  
  
  ### Indentation matters
  Python uses **indentation** instead of braces.
  Wrong indentation = broken logic ❌
  
  ---
  
  Scroll down and hit **Start Challenge** to write your first condition.
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
  