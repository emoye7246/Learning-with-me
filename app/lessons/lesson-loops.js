export const lessonLoops = {
    id: "basics-loops",
    title: "Loops (for & while)",
  
    // ✅ Article markdown
    article: `
  ## Loops in Python
  
  Loops let your program **repeat actions** without writing the same code over and over.
  
  Instead of printing something 5 times manually, you tell Python **how many times** to do it.
  
  ### for loops
  Use a \`for\` loop when you know how many times to repeat:
  
  \`\`\`python
  for i in range(3):
      print("Hello")
  \`\`\`
  
  This prints "Hello" three times.
  
  ### while loops
  Use a \`while\` loop when you want to repeat **until a condition becomes false**:
  
  \`\`\`python
  count = 0
  while count < 3:
      print(count)
      count += 1
  \`\`\`
  
  ### range()
  \`range()\` generates a sequence of numbers:
  - \`range(3)\` → 0, 1, 2
  - \`range(1, 4)\` → 1, 2, 3
  
  ### Common mistakes
  - Infinite loops (condition never changes) ❌
  - Forgetting indentation ❌
  - Off-by-one errors ❌
  
  ---
  
  Scroll down and hit **Start Challenge** to loop like a programmer.
  `,
  
    // recommended additions
    type: "function",
    entry: "count_up",
  
    objectives: [
      "Understand for loops",
      "Use range() correctly",
      "Repeat actions with loops"
    ],
  
    content: `## Your Task
  Write a function called \`count_up(n)\` that **returns** a string of numbers from 0 up to \`n - 1\`,
  separated by spaces.
  
  Example:
  \`"0 1 2"\` for \`n = 3\``,
  
    examples: [
      `for i in range(5):
      print(i)`,
  
      `def count_up(n):
      result = ""
      for i in range(n):
          result += str(i) + " "
      return result.strip()
  
  print(count_up(4))`
    ],
  
    tasks: 'Write a function called `count_up(n)` that returns numbers from 0 to n-1 as a string.',
  
    starterCode: `def count_up(n):
      # Use a loop to build a string of numbers from 0 to n-1
      pass
  `,
  
    tests: [
      { input: [3], expected: "0 1 2" },
      { input: [5], expected: "0 1 2 3 4" }
    ],
  
    successMessage: "Loop complete! You just automated repetition 🔁🔥"
  };
  