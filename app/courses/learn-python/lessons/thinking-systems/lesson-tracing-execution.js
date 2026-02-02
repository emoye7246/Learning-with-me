export const lessonTracingExecution = {
    id: "thinking-systems-tracing-execution",
    title: "Tracing Execution",
  
    // ✅ Article markdown
    article: `
  ## Tracing Execution — The Skill That Makes Everything Easier
  
  Stage 1 taught you how to write Python.
  
  Stage 2 is different.
  
  Now we’re learning how to **think through code** — the way developers do when they debug, refactor, and build bigger systems.
  
  The first skill you need is simple, but powerful:
  
  > **Tracing execution — understanding what the program does line by line.**
  
  ---
  
  ## Code is a timeline
  
  Python runs your program from top to bottom, one instruction at a time.
  
  That means every line updates the program’s *state*.
  
  So instead of reading code like a paragraph,
  you learn to read it like a timeline:
  
  - What is the value *right now*?
  - What changes after this line runs?
  - Why did it change?
  
  ---
  
  ## Why tracing matters
  
  When a program surprises you, Python isn’t being random.
  
  It’s doing exactly what you told it to do —
  you just didn’t realize what you told it.
  
  Tracing is how you fix that.
  
  If you can trace execution:
  - bugs feel solvable
  - code becomes predictable
  - complex projects stop feeling intimidating
  
  ---
  
  ## The program we will trace
  
  We’re going to trace this code:
  
  \`\`\`python
  count = 0
  count = count + 1
  count = count + 1
  count = count * 2
  \`\`\`
  
  Your job is to return the value of \`count\` after each line runs.
  
  That means you should return:
  
  - After line 1: 0
  - After line 2: 1
  - After line 3: 2
  - After line 4: 4
  
  ---
  
  ## Your interactive challenge
  
  You will write a function called \`trace_count()\`.
  
  It should return a list of integers showing what \`count\` equals after each line executes.
  
  This is not about tricks or advanced syntax.
  This is about proving you understand execution order.
  
  Scroll down and trace like a developer.
  `,
  
    // ✅ Challenge format (matches your engine)
    type: "function",
    entry: "trace_count",
  
    objectives: [
      "Understand that Python runs line-by-line",
      "Track variable state across multiple lines",
      "Practice tracing execution like a developer"
    ],
  
    content: `## Your Task
  Write a function called \`trace_count()\` that returns a list of values showing the state of \`count\` after each line runs.
  
  Trace this program:
  
  \`\`\`python
  count = 0
  count = count + 1
  count = count + 1
  count = count * 2
  \`\`\`
  
  Your function should return:
  \`[0, 1, 2, 4]\``,
  
    examples: [
      `# After each line runs:
  # count = 0           -> 0
  # count = count + 1   -> 1
  # count = count + 1   -> 2
  # count = count * 2   -> 4
  #
  # So the trace is:
  # [0, 1, 2, 4]`,
  
      `def trace_count():
      return [0, 1, 2, 4]`
    ],
  
    tasks:
      "Write a function called `trace_count()` that returns the value of `count` after each line executes.",
  
    starterCode: `def trace_count():
      # Return the value of count after each line executes:
      # count = 0
      # count = count + 1
      # count = count + 1
      # count = count * 2
      #
      # Expected: [0, 1, 2, 4]
      pass
  `,
  
    tests: [
      { input: [], expected: [0, 1, 2, 4] }
    ],
  
    successMessage:
      "Trace complete 🧠✅ You just practiced the #1 skill behind debugging: execution tracing."
  };
  