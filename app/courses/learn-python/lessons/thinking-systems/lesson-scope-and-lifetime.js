export const lessonScopeAndLifetime = {
    id: "thinking-systems-scope-and-lifetime",
    title: "Scope & Lifetime",
  
    // ✅ Article markdown
    article: `
  ## Scope & Lifetime
  
  Sometimes Python errors feel confusing:
  
  - “Why can’t this variable be found?”
  - “It worked earlier — what changed?”
  - “Why does this exist here, but not there?”
  
  The answer is almost always the same:
  
  > **Scope and lifetime.**
  
  Variables don’t exist everywhere.
  And they don’t exist forever.
  
  ---
  
  ## What Is Scope?
  
  **Scope** describes *where* a variable can be accessed.
  
  The most important scopes to understand right now are:
  
  - **Global scope** — variables defined at the top level of a program
  - **Local scope** — variables defined inside a function
  
  ---
  
  ## Local Scope (Most Common)
  
  Variables created inside a function **belong to that function**.
  
  \`\`\`python
  def greet():
      message = "Hello"
      print(message)
  
  greet()
  \`\`\`
  
  Here, \`message\` exists only while \`greet()\` is running.
  
  Once the function finishes, \`message\` is gone.
  
  Trying to access it outside the function will fail.
  
  ---
  
  ## Lifetime: When Variables Exist
  
  A variable’s **lifetime** is how long it exists during execution.
  
  For local variables:
  - created when the function runs
  - destroyed when the function finishes
  
  This is not a bug.
  This is intentional design.
  
  ---
  
  ## Why This Matters
  
  Scope prevents chaos.
  
  If every variable existed everywhere:
  - programs would be unpredictable
  - bugs would be harder to track
  - large projects would break constantly
  
  Scope creates boundaries.
  Boundaries create clarity.
  
  ---
  
  ## The Bug We’ll Fix
  
  In this lesson, you’ll trace a scope issue that looks simple —
  but trips up many beginners.
  
  You’ll learn to spot *where* the variable lives,
  and fix the problem correctly.
  
  This is a real-world debugging skill.
  `,
  };
  