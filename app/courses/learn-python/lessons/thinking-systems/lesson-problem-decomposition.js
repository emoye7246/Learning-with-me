export const lessonProblemDecomposition = {
    id: "thinking-systems-problem-decomposition",
    title: "Problem Decomposition",
  
    // ✅ Article markdown
    article: `  
  ## Problem Decomposition
  
  At some point, tutorials stop helping.
  
  You’re given a goal —
  but no steps.
  
  This is where many people get stuck.
  
  The solution isn’t more syntax.
  The solution is learning how to **break problems down**.
  
  ---
  
  ## Big Problems Are Made of Small Ones
  
  Every program — no matter how complex — is built from simple ideas:
  - inputs
  - decisions
  - repetition
  - outputs
  
  The mistake beginners make is trying to solve everything at once.
  
  Experienced developers do the opposite:
  they break problems into pieces they already know how to solve.
  
  ---
  
  ## Think Before You Code
  
  Before writing code, ask:
  - What is the input?
  - What is the output?
  - What steps connect them?
  
  You can answer these questions in plain language.
  
  Code comes *after* understanding.
  
  ---
  
  ## A Simple Decomposition Example
  
  Goal:
  > Add all numbers in a list.
  
  Steps:
  1. Start with a total of 0
  2. Loop through each number
  3. Add the number to the total
  4. Return the total
  
  That’s the program.
  
  The code just follows the plan.
  
  ---
  
  ## Why This Skill Matters
  
  Problem decomposition is how you:
  - start projects without panic
  - avoid rewriting everything
  - debug complex behavior
  - scale from small scripts to real systems
  
  This is the skill that lets you build **without a tutorial open**.
  
  ---
  
  ## Your interactive challenge
  
  You will be given a goal.
  No step-by-step instructions.
  No hidden tricks.
  
  Your job is to:
  - think through the problem
  - break it into steps
  - implement the solution
  
  This is the final step in Stage 2.
  `,
  
    // ✅ Challenge format
    type: "function",
    entry: "count_evens",
  
    objectives: [
      "Break a problem into logical steps",
      "Design a solution before coding",
      "Solve an open-ended problem confidently"
    ],
  
    content: `## Your Task
  Write a function called \`count_evens(nums)\`.
  
  It should:
  - take a list of numbers
  - count how many numbers are even
  - return that count
  
  You decide how to solve it.
  Focus on clarity, not cleverness.`,
  
    examples: [
      `# Example:
  count_evens([1, 2, 3, 4, 6])
  # returns 3`,
  
      `# One possible approach:
  # 1. Start a counter at 0
  # 2. Loop through the list
  # 3. If a number is even, increment the counter
  # 4. Return the counter`
    ],
  
    tasks:
      "Write a function called `count_evens(nums)` that returns how many even numbers are in the list.",
  
    starterCode: `def count_evens(nums):
      # Break the problem into steps before coding
      pass
  `,
  
    tests: [
      { input: [[1, 2, 3, 4, 6]], expected: 3 },
      { input: [[2, 2, 2]], expected: 3 },
      { input: [[1, 3, 5]], expected: 0 },
      { input: [[]], expected: 0 }
    ],
  
    successMessage:
      "Stage 2 complete 🧠🔥 You just solved a problem without a recipe — that’s real developer thinking."
  };
  