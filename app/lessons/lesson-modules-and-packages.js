export const lessonModulesAndPackages = {
    id: "basics-modules-packages",
    title: "Modules & Packages",
  
    // ✅ Article markdown
    article: `
  ## Modules & Packages in Python
  
  As programs grow, putting everything in one file becomes messy.
  Python solves this with **modules** and **packages**.
  
  ### What is a module?
  A **module** is just a Python file.
  
  Example: \`math_utils.py\`
  
  \`\`\`python
  def add(a, b):
      return a + b
  \`\`\`
  
  You can use it in another file with \`import\`.
  
  ### Importing a module
  \`\`\`python
  import math_utils
  print(math_utils.add(2, 3))
  \`\`\`
  
  ### Importing specific functions
  \`\`\`python
  from math_utils import add
  print(add(2, 3))
  \`\`\`
  
  ### Built-in modules
  Python comes with many built-in modules:
  
  \`\`\`python
  import math
  print(math.sqrt(16))
  \`\`\`
  
  ### What is a package?
  A **package** is a folder that contains multiple modules.
  Packages help organize large projects.
  
  ---
  
  Scroll down and hit **Start Challenge** to practice importing.
  `,
  
    // recommended additions
    type: "function",
    entry: "use_math",
  
    objectives: [
      "Understand what modules are",
      "Import functions using import and from",
      "Recognize packages as folders of modules"
    ],
  
    content: `## Your Task
  Write a function called \`use_math()\` that returns the **square root of 16** using Python’s built-in \`math\` module.
  
  Use \`math.sqrt()\`.`,
  
    examples: [
      `import math
  print(math.sqrt(16))`,
  
      `def use_math():
      import math
      return math.sqrt(16)
  
  print(use_math())`
    ],
  
    tasks: 'Write a function called `use_math()` that returns the square root of 16 using the math module.',
  
    starterCode: `def use_math():
      # Import the math module and return math.sqrt(16)
      pass
  `,
  
    tests: [
      { input: [], expected: 4.0 },
      { input: [], expected: 4.0 }
    ],
  
    successMessage: "Nice! You’re officially organizing and reusing code like a pro 📦🔥"
  };
  