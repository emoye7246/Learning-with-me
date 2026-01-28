export const lessonBasicStringOperations = {
    id: "basics-string-operations",
    title: "Basic String Operations",
  
    // ✅ Article markdown
    article: `
  ## Basic String Operations in Python
  
  Strings aren’t just text — you can **combine**, **repeat**, and **measure** them.
  
  Python gives you simple operators that work naturally with strings.
  
  ### Concatenation (joining strings)
  Use the \`+\` operator to join strings together:
  
  \`\`\`python
  first = "Hello"
  second = "World"
  print(first + " " + second)
  \`\`\`
  
  ### Repetition
  You can repeat a string using the \`*\` operator:
  
  \`\`\`python
  print("Hi! " * 3)
  \`\`\`
  
  ### Length of a string
  Use \`len()\` to find how many characters are in a string:
  
  \`\`\`python
  word = "Python"
  print(len(word))
  \`\`\`
  
  ### Common mistakes
  - Trying to add strings and numbers directly ❌
  - Forgetting spaces when concatenating ❌
  - Assuming strings change automatically (they don’t)
  
  ---
  
  When you’re ready, hit **Start Challenge** and put strings to work.
  `,
  
    // recommended additions
    type: "function",
    entry: "string_ops",
  
    objectives: [
      "Concatenate strings using +",
      "Repeat strings using *",
      "Measure string length with len()"
    ],
  
    content: `## Your Task
  Write a function called \`string_ops(text)\` that **returns** a string in the format:
  
  \`"<text> <text> <length>"\`
  
  Where:
  - \`<text>\` is repeated **twice** with a space between
  - \`<length>\` is the length of the original string`,
  
    examples: [
      `text = "Hi"
  print(text + " " + text + " " + str(len(text)))`,
  
      `def string_ops(text):
      return text + " " + text + " " + str(len(text))
  
  print(string_ops("Python"))`
    ],
  
    tasks: 'Write a function called `string_ops(text)` that repeats the string twice and appends its length.',
  
    starterCode: `def string_ops(text):
      # Repeat the string twice with a space
      # Append the length of the original string
      pass
  `,
  
    tests: [
      { input: ["Hi"], expected: "Hi Hi 2" },
      { input: ["Python"], expected: "Python Python 6" }
    ],
  
    successMessage: "Nice work! You're officially manipulating strings like a pro 🧩🔥"
  };
  