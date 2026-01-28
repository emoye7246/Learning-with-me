export const lessonStringFormatting = {
    id: "basics-string-formatting",
    title: "String Formatting",
  
    // ✅ Article markdown
    article: `
  ## String Formatting in Python
  
  Often, you don’t want to print **fixed text** — you want to combine text with
  variables like names, numbers, or values that change.
  
  Python lets us do this using **C-style string formatting** with the \`%\` operator.
  
  ### Basic idea
  You write a **format string** with placeholders:
  - \`%s\` → string
  - \`%d\` → integer
  - \`%f\` → floating-point number
  
  Then you provide values inside a **tuple**.
  
  \`\`\`python
  name = "Alex"
  age = 21
  print("My name is %s and I am %d years old." % (name, age))
  \`\`\`
  
  ### Why tuples?
  The values after \`%\` must be grouped together.
  A **tuple** is a fixed-size list used for this purpose:
  
  \`\`\`python
  ("Alex", 21)
  \`\`\`
  
  ### Common mistakes
  - Forgetting the tuple parentheses ❌
  - Mismatching format specifiers and values ❌
  - Using the wrong specifier (\`%d\` for strings, etc.)
  
  ---
  
  Scroll down and hit **Start Challenge** to format your first string.
  `,
  
    // recommended additions
    type: "function",
    entry: "format_message",
  
    objectives: [
      "Understand C-style string formatting in Python",
      "Learn how %s and %d work",
      "Practice combining text with variables"
    ],
  
    content: `## Your Task
  Write a function called \`format_message(name, age)\` that **returns** the formatted string:
  
  \`"My name is %s and I am %d years old."\`
  
  Use **C-style string formatting** with the \`%\` operator.`,
  
    examples: [
      `name = "Alex"
  age = 21
  print("My name is %s and I am %d years old." % (name, age))`,
  
      `def format_message(name, age):
      return "My name is %s and I am %d years old." % (name, age)
  
  print(format_message("Jordan", 30))`
    ],
  
    tasks: 'Write a function called `format_message(name, age)` that returns a formatted string using `%s` and `%d`.',
  
    starterCode: `def format_message(name, age):
      # Use C-style string formatting to return:
      # "My name is %s and I am %d years old."
      pass
  `,
  
    tests: [
      { input: ["Alex", 21], expected: "My name is Alex and I am 21 years old." },
      { input: ["Jordan", 30], expected: "My name is Jordan and I am 30 years old." }
    ],
  
    successMessage: "Clean formatting! You're officially combining data with text 🧠✨"
  };
  