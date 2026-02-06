export const lessonModulesAndPackages = {
    id: "basics-modules-packages",
    title: "Modules & Packages",
  
    // ✅ Article markdown (tone and structure aligned with lesson-hello-world)
    article: `
  ## Modules & Packages — Organizing and Reusing Code in Python
  
  So far you have written code in a single place: one file, one set of definitions.
  The next step is to **use code that lives elsewhere** — in another file (a **module**) or in Python’s built-in library — by **importing** it.
  
  In this lesson, your objective is clear:
  > **Write a function \`use_math()\` that imports Python’s built-in \`math\` module and returns the square root of 16 using \`math.sqrt(16)\`.**
  
  This is how programs grow without becoming one giant file: one module, many uses. You give Python the name of the module; it loads the code and gives you access to its functions and values.
  
  ---
  
  ## What is Python doing when you import a module?
  
  Python is still read and executed **line by line** by the interpreter.
  
  When you write \`import math\`, you are not describing “something about math.” You are giving **one specific instruction**: “Load the module named \`math\` (or find it if already loaded) and make it available under the name \`math\`.”
  
  Python looks up the module, runs its code once (if needed), and attaches the module’s names (e.g. \`sqrt\`) to the \`math\` object. You then call \`math.sqrt(16)\` to use the function.
  There is no guessing.
  There is no skipping steps.
  Python does exactly what you tell it to do.
  
  ---
  
  ## The code you are working toward
  
  By the end of this lesson, you will write a function that imports \`math\` and returns \`math.sqrt(16)\` (which is \`4.0\`).
  
  Here is the shape of what you are aiming for:
  
  \`\`\`python
  def use_math():
      import math
      return math.sqrt(16)
  \`\`\`
  
  When called, it returns \`4.0\`.
  
  Let’s break down the pieces.
  
  ---
  
  ## Understanding modules
  
  A **module** is a Python file (or a built-in unit) that contains definitions: functions, variables, classes. Instead of copying that code into every file, you **import** the module and use its names.
  
  Python comes with many **built-in modules**, including \`math\`. The \`math\` module provides functions like \`sqrt\`, \`sin\`, \`ceil\`, and constants like \`pi\`.
  
  You do not write the \`math\` module yourself; it is part of Python. You only import and use it.
  
  ---
  
  ## Understanding \`import\`
  
  \`import math\` loads the \`math\` module and makes it available under the name \`math\`. You then access its contents with a dot:
  
  \`\`\`python
  import math
  math.sqrt(16)   # 4.0
  \`\`\`
  
  So \`math.sqrt(16)\` means: “In the module \`math\`, call the function \`sqrt\` with the argument \`16\`.”
  
  You can put \`import math\` at the top of your file or inside a function. For this lesson, importing inside \`use_math()\` is fine. The first time Python runs that line, it loads the module; later calls reuse the same module.
  
  ---
  
  ## Why \`math.sqrt(16)\`?
  
  \`sqrt\` is a function defined inside the \`math\` module. It takes one number and returns its square root. So \`math.sqrt(16)\` returns \`4.0\` (a float).
  
  You must use \`math.\` in front of \`sqrt\` because you imported the module with \`import math\`. If you had written \`from math import sqrt\`, you could call \`sqrt(16)\` directly; for this lesson, \`import math\` and \`math.sqrt(16)\` is the pattern to use.
  
  ---
  
  ## What is a package?
  
  A **package** is a folder that contains one or more modules (and often an \`__init__.py\` file). Packages help organize large projects into many files and folders. For this lesson, you only need to import the built-in \`math\` module; the idea of packages is to know for later.
  
  ---
  
  ## How Python evaluates \`use_math()\`
  
  When Python runs \`use_math()\`, it:
  
  1. Runs \`import math\` (loads the \`math\` module if needed)
  2. Evaluates \`math.sqrt(16)\` → \`4.0\`
  3. Returns \`4.0\` to the caller
  
  Once that happens, the challenge can check that your function returns \`4.0\`.
  
  ---
  
  ## Your interactive challenge
  
  Your task is to write a function \`use_math()\` that:
  
  - Imports the built-in \`math\` module (e.g. \`import math\`)
  - Returns the result of \`math.sqrt(16)\` (which is \`4.0\`)
  
  Use \`import math\` and \`return math.sqrt(16)\`.
  
  If your function returns \`4.0\`, the challenge is complete.
  
  Small details matter — the module name \`math\`, the function name \`sqrt\`, and the argument \`16\` are all part of writing correct Python.
  
  ---
  
  ## Why this lesson matters
  
  This lesson introduces ideas you will use constantly:
  - Modules as units of reusable code
  - Importing with \`import module_name\`
  - Using a module’s functions with \`module_name.function_name()\`
  
  Later you will import your own modules, use \`from ... import ...\`, and organize code into packages. The same model applies; the context gets richer.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - What a module is and how \`import math\` works
  - How to call a function from a module with \`math.sqrt(16)\`
  - Why \`math\` is built in and does not need to be created by you
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and practice importing.
  `,
 
  };
  