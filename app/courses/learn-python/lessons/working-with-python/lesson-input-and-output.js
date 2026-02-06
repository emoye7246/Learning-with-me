export const lessonInputAndOutput = {
    id: "basics-input-output",
    title: "Input & Output",
  
    // ✅ Article markdown (tone and structure aligned with lesson-hello-world)
    article: `
  ## Input & Output — Connecting Your Program to the User in Python
  
  So far your programs have used **fixed values** and parameters: the data was decided in code or passed in by the caller.
  The next step is to **treat a value as if it came from the user**: in real programs, \`input()\` reads from the user and \`print()\` writes to the screen; here you will write a function that **returns** a greeting string so it can be tested — the same shape as when \`name\` would come from \`input()\`.
  
  In this lesson, your objective is clear:
  > **Write a function \`greet_user(name)\` that returns the string \`"Hello, &lt;name&gt;!"\` — the same message you would show a user after reading their name.**
  
  This is how programs become interactive: one value in (from the user or, for tests, as a parameter), one message out. You give Python exact instructions; it builds and returns the string.
  
  ---
  
  ## What is Python doing when you use input and output?
  
  Python is still read and executed **line by line** by the interpreter.
  
  When you write \`input("Enter your name: ")\`, you are giving **one specific instruction**: “Display this prompt, wait for the user to type a line, and return that line as a string.”
  
  When you write \`print("Hello, " + name)\`, you are giving **another instruction**: “Evaluate this string and send it to the output (e.g. the screen).”
  
  For this lesson, you do not call \`input()\` or \`print()\` in the challenge; you write a function that **returns** the greeting string. That way the tests can call \`greet_user("Alex")\` and check the return value. In a real program, you would often get \`name\` from \`input()\` and then call \`greet_user(name)\` or \`print(greet_user(name))\`.
  There is no guessing.
  There is no skipping steps.
  Python does exactly what you tell it to do.
  
  ---
  
  ## The code you are working toward
  
  By the end of this lesson, you will write a function that takes a name and returns a single greeting string: \`"Hello, " + name + "!"\`.
  
  Here is the shape of what you are aiming for:
  
  \`\`\`python
  def greet_user(name):
      return "Hello, " + name + "!"
  \`\`\`
  
  When called with \`"Alex"\`, it returns \`"Hello, Alex!"\`. When called with \`"Jordan"\`, it returns \`"Hello, Jordan!"\`.
  
  Let’s break down the pieces.
  
  ---
  
  ## Understanding output with \`print()\`
  
  You have already seen \`print()\`: it takes a value (or several) and **displays** it to the output (e.g. the terminal). It does not return a value for your code to use; it is for **side effects** (showing something to the user).
  
  In this lesson, your function **returns** the greeting string instead of printing it. That keeps the logic testable: the tests call \`greet_user("Alex")\` and check that the return value is \`"Hello, Alex!"\`. In a full program, you could then \`print(greet_user(name))\` when \`name\` comes from \`input()\`.
  
  ---
  
  ## Understanding input with \`input()\`
  
  \`input(prompt)\` displays the prompt (a string), waits for the user to type a line and press Enter, and **returns** that line as a **string**.
  
  So \`name = input("Enter your name: ")\` stores whatever the user typed in \`name\`. If you need a number, you must convert it: \`age = int(input("Enter your age: "))\`.
  
  For this lesson, \`name\` is passed in as a parameter (as if it had come from \`input()\`). You do not call \`input()\` inside \`greet_user\`; you just use \`name\` to build the return string.
  
  ---
  
  ## Why return instead of print?
  
  Returning the string makes the function **reusable** and **testable**: the caller can store the result, print it, send it over a network, or compare it in a test. If the function only printed, the tests could not check the exact string.
  
  So the pattern is: **compute the message (return it); let the caller decide whether to print it or use it elsewhere.** In this lesson, the tests are the caller and they check the return value.
  
  ---
  
  ## How Python evaluates \`greet_user("Alex")\`
  
  When Python runs \`greet_user("Alex")\`, it:
  
  1. Binds \`name = "Alex"\`
  2. Evaluates \`"Hello, " + name + "!"\` → \`"Hello, " + "Alex" + "!"\` → \`"Hello, Alex!"\`
  3. Returns \`"Hello, Alex!"\` to the caller
  
  Once that happens, the tests can compare the return value to the expected string.
  
  ---
  
  ## Your interactive challenge
  
  Your task is to write a function \`greet_user(name)\` that:
  
  - Takes one argument: \`name\` (a string)
  - Returns the string \`"Hello, " + name + "!"\` (e.g. \`"Hello, Alex!"\` for \`name = "Alex"\`)
  
  Use string concatenation to build the greeting. Do not use \`input()\` or \`print()\` inside the function; just return the string.
  
  If your function returns the correct string for the given name, the challenge is complete.
  
  Small details matter — the comma and space after “Hello,” the exclamation mark at the end, and the exact spelling are all part of writing correct Python.
  
  ---
  
  ## Why this lesson matters
  
  This lesson reinforces ideas you will use constantly:
  - Building a message from fixed text and a value (the name)
  - Returning that message so it can be printed or tested
  - The same shape as real input/output: one value in, one message out
  
  Later you will call \`input()\` to get the name, use \`print()\` to show the result, and build more complex interactions. The same pattern applies; the context gets richer.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - How \`input()\` returns a string and how \`print()\` displays output
  - Why this function returns the string instead of printing it (so it can be tested)
  - How to build \`"Hello, &lt;name&gt;!"\` with concatenation
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and connect input and output.
  `,
  
  };
  