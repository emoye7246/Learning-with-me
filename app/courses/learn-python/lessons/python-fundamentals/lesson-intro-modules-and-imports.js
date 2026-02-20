export const lessonModulesImports = {
    id: "modules-imports",
    title: "Intro to Modules & Imports",
  
    article: `
  
  ## Introduction
  
  So far,
  all your code has lived in one file.
  
  You’ve written:
  
  - Variables
  - Lists
  - Dictionaries
  - Loops
  - Functions
  - Input logic
  
  But real programs don’t live in one file.
  
  They are organized.
  
  They are separated.
  
  They reuse existing tools.
  
  That’s where modules and imports come in.
  
  ---
  
  # Part 1: What Is a Module?
  
  A module is simply a Python file.
  
  If you create a file called:
  
  math_tools.py
  
  That file is a module.
  
  Any Python file can become a module.
  
  ---
  
  # Part 2: Why Modules Matter
  
  Modules help you:
  
  - Organize code
  - Avoid giant messy files
  - Reuse logic
  - Share functionality between programs
  
  Professional software is built using modules.
  
  ---
  
  # Part 3: Using Built-In Modules
  
  Python comes with built-in modules.
  
  You don’t need to install them.
  
  One example is the math module.
  
  Try this:
  
  \`\`\`python
  import math
  
  print(math.sqrt(16))
  \`\`\`
  
  Save.
  Run it.
  
  You should see:
  
  4.0
  
  You just used a built-in module.
  
  ---
  
  ## How It Works
  
  - import math gives you access to the module
  - math.sqrt() calls a function inside it
  
  The dot connects the module to its function.
  
  ---
  
  # Part 4: Importing Specific Parts
  
  Instead of importing everything:
  
  \`\`\`python
  import math
  \`\`\`
  
  You can import just what you need:
  
  \`\`\`python
  from math import sqrt
  
  print(sqrt(25))
  \`\`\`
  
  This makes your code cleaner.
  
  ---
  
  # Part 5: Creating Your Own Module
  
  Now let’s create one.
  
  Step 1:
  Create a new file called:
  
  utilities.py
  
  Inside it, write:
  
  \`\`\`python
  def greet(name):
      return f"Hello {name}"
  \`\`\`
  
  Step 2:
  Go back to your main file.
  
  Write:
  
  \`\`\`python
  import utilities
  
  print(utilities.greet("Elijah"))
  \`\`\`
  
  Save.
  Run it.
  
  You just imported your own module.
  
  That’s how large programs are structured.
  
  ---
  
  # Part 6: Why This Is Important
  
  Modules allow you to:
  
  - Separate logic
  - Build reusable systems
  - Create clean architecture
  - Scale projects
  
  Almost every real-world Python project
  uses modules.
  
  Web apps.
  Data tools.
  AI systems.
  Games.
  
  All modular.
  
  ---
  
  # Try This
  
  1. Create a module called calculator.py.
     Add two functions:
     - add(a, b)
     - subtract(a, b)
  
  2. Import it into another file.
     Call both functions.
  
  3. Try importing only one function
     using from ... import ...
  
  ---
  
  # What You Learned
  
  You now understand:
  
  - What a module is
  - How import works
  - How to use built-in modules
  - How to import specific functions
  - How to create your own modules
  - Why modular code matters
  
  Before this lesson,
  your code was small.
  
  Now,
  you can build real structure.
  
  ---
  
  # Course 2 Complete
  
  You now know:
  
  - Variables & Types
  - Numbers & Math
  - Strings
  - Booleans & Conditions
  - Lists
  - Dictionaries & Sets
  - Loops
  - Functions
  - Input & Output
  - Modules & Imports
  
  You are no longer writing basic scripts.
  
  You are writing structured programs.
  
  ---
  
  # What Comes Next?
  
  Course 3 is where things shift.
  
  We move from fundamentals
  into building small real-world projects.
  
  This is where programming starts to feel real.
  
  `
  }