export const lessonHowPythonRuns = {

    id: "intro-how-python-runs",

    title: "How Python Code Runs",

    hasChallenge: false,
    
    article: `
  ## How Python Code Runs
  
  When people first start programming, it often feels like code is doing something magical.
  
  You write words.
  You press “run.”
  Something happens.
  
  In reality, Python is doing something very simple:
  it is **reading and executing instructions**, one line at a time.
  
  Understanding this removes a lot of fear early on.
  
  ---
  
  ## Programs Are Just Instructions
  
  A Python program is a list of instructions written in a file.
  
  Nothing more.
  
  When you write Python code, you are not describing what you *want* in abstract terms.
  You are telling the computer **exactly what to do**, step by step.
  
  The computer does not guess.
  It does not assume intent.
  It only follows instructions in the order they are given.
  
  ---
  
  ## The Python Interpreter
  
  Python code is executed by something called the **Python interpreter**.
  
  The interpreter:
  - Reads your code from top to bottom
  - Executes each line in order
  - Stops if it encounters an error
  
  You can think of the interpreter as a very literal reader.
  
  If a line does not make sense, Python will not continue.
  
  ---
  
  ## Line by Line Execution
  
  Python runs code **sequentially**.
  
  This means:
  - Line 1 runs first
  - Then line 2
  - Then line 3
  - And so on
  
  Later lessons will introduce ways to control this flow,
  but at its core, Python always follows a clear execution order.
  
  This is why:
  - The order of your code matters
  - Missing or misplaced lines cause errors
  - Understanding flow is more important than memorizing syntax
  
  ---
  
  ## What “Running” a Program Means
  
  When you run a Python program, you are asking the interpreter to:
  1. Read your file
  2. Execute each instruction
  3. Produce output (if instructed to do so)
  
  That output might be:
  - Text printed to the screen
  - A file being created
  - Data being processed
  - Or nothing at all
  
  Not all programs visibly “do” something.
  Some exist only to prepare or organize information.
  
  ---
  
  ## Errors Are Part of the Process
  
  Errors are not signs of failure.
  They are **feedback**.
  
  An error means:
  - Python reached a line it could not understand
  - Or an instruction that could not be completed
  
  The interpreter stops to protect you from incorrect behavior.
  
  Learning to read and understand errors is a skill —
  one you’ll develop naturally as you continue.
  
  ---
  
  ## Why This Matters
  
  Once you understand how Python runs code:
  - Programs feel predictable
  - Bugs feel solvable
  - New concepts feel less intimidating
  
  You stop asking:
  “Why is this happening?”
  
  And start asking:
  “What instruction caused this?”
  
  That shift is the foundation of real programming skill.
  
  ---
  
  ## What’s Next
  
  Now that you understand how Python executes instructions,
  you’re ready to begin writing your own.
  
  In the next lesson, you’ll write your first Python program and see this process in action.
  
  Welcome to the point where thinking turns into code.
    `
  };
  