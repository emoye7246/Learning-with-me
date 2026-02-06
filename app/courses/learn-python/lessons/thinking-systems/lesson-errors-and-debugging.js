export const lessonErrorsAndDebugging = {
    id: "thinking-systems-errors-and-debugging",
    title: "Errors & Debugging",
  
    // ✅ Article markdown
    article: `
  ## Errors & Debugging
  
  At some point, every programmer hits an error and thinks:
  
  “Why is this broken?”
  
  Here’s the truth:
  
  > **Errors are Python telling you exactly what went wrong.**
  
  The skill is not avoiding errors.
  The skill is learning how to *read them*.
  
  ---
  
  ## What an Error Actually Is
  
  An error means Python encountered an instruction it could not complete.
  
  When that happens, Python:
  1. Stops execution
  2. Tells you what type of error occurred
  3. Tells you where it happened
  
  That message is not noise.
  It’s guidance.
  
  ---
  
  ## Common Error Types You’ll See Early
  
  ### NameError
  Happens when Python doesn’t recognize a name.
  
  \`\`\`python
  print(value)
  \`\`\`
  
  If \`value\` was never defined, Python can’t guess what you meant.
  
  ---
  
  ### TypeError
  Happens when an operation doesn’t make sense for the data type.
  
  \`\`\`python
  "5" + 2
  \`\`\`
  
  Python won’t guess how to combine a string and a number.
  
  ---
  
  ### ValueError
  Happens when a value is the right type, but the wrong form.
  
  \`\`\`python
  int("hello")
  \`\`\`
  
  ---
  
  ## Reading an Error Message
  
  A Python error message tells you:
  - **what** went wrong (error type)
  - **where** it went wrong (line number)
  - **why** it went wrong (description)
  
  The most important line is usually the **last one**.
  
  Start there.
  
  ---
  
  ## Debugging Is a Process
  
  Good debugging follows a pattern:
  
  1. Read the error
  2. Identify the line that failed
  3. Ask: “What was Python expecting here?”
  4. Check variable values at that moment
  5. Fix the root cause — not the symptom
  
  Guessing slows you down.
  Understanding speeds you up.
  
  ---
  
  ## The Bug You’ll Fix
  
  In this lesson, you’ll fix a program that crashes due to a simple but common mistake.
  
  Your job is to:
  - read the error
  - understand why it happens
  - correct the logic
  
  This is real debugging — not trial and error.
  `,
  
  };
  