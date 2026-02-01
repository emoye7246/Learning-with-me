export const lessonBasicStringOperations = {
    id: "basics-string-operations",
    title: "Basic String Operations",
  
    // ✅ Article markdown (tone and structure aligned with lesson-hello-world)
    article: `
  ## Basic String Operations — Combining, Repeating, and Measuring Text in Python
  
  You have already worked with strings as fixed text and with formatting.
  The next step is to **combine strings, repeat them, and measure their length** using simple operations.
  
  In this lesson, your objective is clear:
  > **Use concatenation, repetition, and \`len()\` to build a single string that shows the text twice (with a space between) and its length.**
  
  This builds directly on what you know: you give Python exact instructions; it evaluates each operation and produces one result string.
  
  ---
  
  ## What is Python doing when you operate on strings?
  
  Python is still read and executed **line by line** by the interpreter.
  
  When you write an expression like \`text + " " + text\`, you are not describing text in general.
  You are giving **one specific instruction**: “Evaluate this expression and produce a new string.”
  
  Python evaluates it, produces a value, and moves on.
  There is no guessing.
  There is no skipping steps.
  Python does exactly what you tell it to do.
  
  ---
  
  ## The code you are working toward
  
  By the end of this lesson, you will write a function that takes a string and returns a single string containing: the text twice (with a space between), then a space, then the length of the original string.
  
  Here is the shape of what you are aiming for:
  
  \`\`\`python
  def string_ops(text):
      return text + " " + text + " " + str(len(text))
  \`\`\`
  
  When called with \`"Hi"\`, it returns: \`"Hi Hi 2"\`.
  
  Let’s break down the pieces.
  
  ---
  
  ## Understanding concatenation (\`+\`)
  
  **Concatenation** means joining strings end to end.
  
  In Python, the \`+\` operator between two strings produces a **new string** that is the first string followed by the second.
  
  \`\`\`python
  "Hello" + " " + "World"   # "Hello World"
  \`\`\`
  
  The original strings are not changed. The result is a new string.
  
  When you want a space between two pieces of text, you must include that space yourself — for example, \`text + " " + text\`.
  
  ---
  
  ## Understanding repetition (\`*\`)
  
  The \`*\` operator between a string and an **integer** repeats that string that many times.
  
  \`\`\`python
  "Hi! " * 3   # "Hi! Hi! Hi! "
  \`\`\`
  
  The result is a new string. The original string is not modified.
  
  For this lesson’s challenge, you will use concatenation rather than \`*\`, but repetition is a useful tool to have.
  
  ---
  
  ## Understanding \`len()\`
  
  \`len()\` is a **built-in Python function** that returns the number of characters in a string.
  
  \`\`\`python
  len("Python")   # 6
  len("Hi")       # 2
  \`\`\`
  
  \`len()\` returns an **integer**. To include it in a string (e.g. \`"Hi Hi 2"\`), you must convert it with \`str(len(text))\`.
  
  Without \`str()\`, Python would not let you concatenate a string and a number with \`+\`.
  
  ---
  
  ## Why \`str()\` for the length?
  
  You are building one **string** to return: \`text + " " + text + " " + ???\`.
  
  The last part must be the length as **text**, not as a number. So you write \`str(len(text))\`.
  
  \`str()\` converts a value to its string form. \`str(2)\` is \`"2"\`.
  
  So the full expression \`text + " " + text + " " + str(len(text))\` produces a single string like \`"Hi Hi 2"\`.
  
  ---
  
  ## How Python evaluates your expression
  
  When Python runs your expression, it:
  
  1. Evaluates \`text\` (the original string)
  2. Evaluates \`text + " "\` — a new string
  3. Evaluates \`... + text\` — another new string (text twice with a space)
  4. Evaluates \`len(text)\` — an integer
  5. Evaluates \`str(len(text))\` — the length as a string
  6. Concatenates everything and returns the final string
  
  Once that happens, your function can return that string.
  
  ---
  
  ## Your interactive challenge
  
  Your task is to write a function \`string_ops(text)\` that:
  
  - Takes one argument: \`text\` (a string)
  - Returns a string in the form: \`"<text> <text> <length>"\` — the text repeated twice with a space between, then a space, then the length of the original string
  
  Use concatenation (\`+\`), and use \`str(len(text))\` for the length.
  
  If your function returns the correct string for the given input, the challenge is complete.
  
  Small details matter — the space between the two copies of the text and converting the length to a string are all part of writing correct Python.
  
  ---
  
  ## Why this lesson matters
  
  This lesson reinforces concepts you will use constantly:
  - Concatenation and building strings from parts
  - \`len()\` and \`str()\` for working with text and numbers together
  
  Later you will combine these with loops, conditions, and user input. The same operations apply; the context gets richer.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - How \`+\` concatenates strings
  - How \`len()\` gives you the number of characters
  - Why you need \`str()\` to put the length into a string
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and put strings to work.
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
  