export const lessonRefactoringAndClarity = {
    id: "thinking-systems-refactoring-and-clarity",
    title: "Refactoring & Code Clarity",
  
    // ✅ Article markdown
    article: `
  ## Refactoring & Code Clarity
  
  Sometimes code works — but feels wrong.
  
  It’s hard to read.
  Hard to reason about.
  Hard to change.
  
  That doesn’t mean you failed.
  It means the code is ready to be **refactored**.
  
  Refactoring is the process of improving code **without changing what it does**.
  
  ---
  
  ## Working Code Is Not the Finish Line
  
  Beginners often think:
  “If it works, don’t touch it.”
  
  Experienced developers know:
  “If it’s unclear, it will cause problems later.”
  
  Clear code:
  - reduces bugs
  - makes debugging easier
  - helps future you (and others)
  
  ---
  
  ## What Refactoring Is (and Isn’t)
  
  Refactoring **is**:
  - simplifying logic
  - improving names
  - removing duplication
  - making intent obvious
  
  Refactoring is **not**:
  - adding new features
  - changing behavior
  - rewriting everything
  
  The goal is clarity — not cleverness.
  
  ---
  
  ## A Common Refactoring Smell
  
  Look at this code:
  
  \`\`\`python
  def calculate(x):
      if x > 0:
          return True
      else:
          return False
  \`\`\`
  
  It works.
  But it’s more complex than it needs to be.
  
  Python already knows how to evaluate conditions.
  
  ---
  
  ## Why This Matters
  
  As projects grow:
  - unclear code slows you down
  - small changes become risky
  - bugs hide in complexity
  
  Refactoring keeps systems healthy.
  
  In this lesson, you’ll refactor working code to make it clearer —
  without changing the result.
  
  That’s a professional skill.
  
  ---
  
  ## Your interactive challenge
  
  You’ll be given a function that works correctly,
  but is written in a confusing way.
  
  Your job is to refactor it so it is:
  - simpler
  - clearer
  - easier to read
  
  The behavior must stay the same.
  `,
  
    // ✅ Challenge format
    type: "function",
    entry: "is_positive",
  
    objectives: [
      "Recognize unnecessarily complex logic",
      "Refactor code without changing behavior",
      "Value clarity over cleverness"
    ],
  
    content: `## Your Task
  Refactor the function below so it returns the same result,
  but with clearer and simpler logic.
  
  The function should return \`True\` if \`n\` is greater than 0,
  and \`False\` otherwise.`,
  
    examples: [
      `# ❌ Works, but overly complex
  def is_positive(n):
      if n > 0:
          return True
      else:
          return False`,
  
      `# ✅ Clear and simple
  def is_positive(n):
      return n > 0`
    ],
  
    tasks:
      "Refactor the function to make it clearer without changing its behavior.",
  
    starterCode: `def is_positive(n):
      if n > 0:
          return True
      else:
          return False
  `,
  
    tests: [
      { input: [5], expected: true },
      { input: [-3], expected: false },
      { input: [0], expected: false }
    ],
  
    successMessage:
      "Refactor complete ✨ You improved the code without changing what it does."
  };
  