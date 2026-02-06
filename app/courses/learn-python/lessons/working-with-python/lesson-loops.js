export const lessonLoops = {
    id: "basics-loops",
    title: "Loops (for & while)",
    hasChallenge: false,

  
    // ✅ Article markdown (tone and structure aligned with lesson-hello-world)
    article: `
  ## Loops — Repeating Actions in Python
  
  So far you have written code that runs once, step by step, sometimes with branches.
  The next step is to **repeat a block of code** — to run the same instructions multiple times without writing them over and over.
  
  In this lesson, your objective is clear:
  > **Use a \`for\` loop and \`range()\` to build a string of numbers from 0 up to \`n - 1\`, separated by spaces.**
  
  This is how programs scale: one loop, many iterations. You give Python exact instructions; it repeats the block until the sequence is done.
  
  ---
  
  ## What is Python doing when it runs a loop?
  
  Python is still read and executed **line by line** by the interpreter.
  
  When you write a \`for\` loop, you are not describing “do this a bunch.” You are giving **exact instructions**: “For each value in this sequence, run this block. Then move on.”
  
  Python takes the first value, runs the block. Takes the next value, runs the block. Repeats until the sequence has no more values.
  There is no guessing.
  There is no skipping steps.
  Python does exactly what you tell it to do.
  
  ---
  
  ## The code you are working toward
  
  By the end of this lesson, you will write a function that takes a number \`n\` and returns a single string: the numbers from \`0\` to \`n - 1\`, separated by spaces.
  
  Here is the shape of what you are aiming for:
  
  \`\`\`python
  def count_up(n):
      result = ""
      for i in range(n):
          result += str(i) + " "
      return result.strip()
  \`\`\`
  
  When called with \`3\`, it returns \`"0 1 2"\`. When called with \`5\`, it returns \`"0 1 2 3 4"\`.
  
  Let’s break down the pieces.
  
  ---
  
  ## Understanding \`for\` and \`range()\`
  
  A \`for\` loop runs a block of code **once for each item** in a sequence.
  
  \`range(n)\` is a built-in that produces a sequence of integers: \`0\`, \`1\`, \`2\`, … up to but **not including** \`n\`.
  
  So \`range(3)\` gives you 0, 1, 2. \`range(5)\` gives you 0, 1, 2, 3, 4.
  
  \`\`\`python
  for i in range(3):
      print(i)   # prints 0, then 1, then 2
  \`\`\`
  
  The variable \`i\` (or whatever you name it) takes each value in the sequence, one at a time. The indented block runs once per value.
  
  ---
  
  ## Why “up to n - 1”?
  
  \`range(n)\` starts at 0 and stops **before** \`n\`. So you get \`0, 1, 2, ..., n - 1\`.
  
  That keeps the count of values equal to \`n\`: for \`n = 3\`, you get three numbers: 0, 1, 2.
  
  If you need different bounds, you can use \`range(start, stop)\` — for example, \`range(1, 4)\` gives 1, 2, 3. For this lesson, \`range(n)\` is what you need.
  
  ---
  
  ## Building the string inside the loop
  
  You want to return **one string** like \`"0 1 2"\`. So you start with an empty string and, each time through the loop, add the current number (as text) plus a space.
  
  \`\`\`python
  result = ""
  for i in range(n):
      result += str(i) + " "
  \`\`\`
  
  \`result += x\` is shorthand for \`result = result + x\`. You are building the string step by step.
  
  \`str(i)\` converts the integer \`i\` to a string so you can concatenate it. Without \`str()\`, you cannot use \`+\` to add a number to a string.
  
  ---
  
  ## Why \`strip()\`?
  
  After the loop, \`result\` will have an extra space at the end (e.g. \`"0 1 2 "\`). The challenge expects no trailing space: \`"0 1 2"\`.
  
  \`result.strip()\` returns a new string with leading and trailing whitespace removed. So \`result.strip()\` gives you the final form to return.
  
  ---
  
  ## How Python evaluates your loop
  
  When Python runs your function with a given \`n\`, it:
  
  1. Creates \`result = ""\`
  2. Enters the loop. For each \`i\` in \`range(n)\` (0, 1, 2, …), it appends \`str(i) + " "\` to \`result\`
  3. Exits the loop when the sequence is done
  4. Returns \`result.strip()\`
  
  Once that happens, the challenge can check your string.
  
  ---
  
  ## Your interactive challenge
  
  Your task is to write a function \`count_up(n)\` that:
  
  - Takes one argument: \`n\` (an integer)
  - Returns a string of numbers from \`0\` to \`n - 1\`, separated by single spaces — e.g. \`"0 1 2"\` for \`n = 3\`
  
  Use a \`for\` loop with \`range(n)\`, build the string inside the loop, and return it (using \`strip()\` to remove any trailing space if needed).
  
  If your function returns the correct string for the given \`n\`, the challenge is complete.
  
  Small details matter — the range (0 to n - 1), the spaces between numbers, and no extra space at the end are all part of writing correct Python.
  
  ---
  
  ## Why this lesson matters
  
  This lesson introduces ideas you will use constantly:
  - Loops and repetition
  - \`range()\` for sequences of numbers
  - Building a result (e.g. a string) step by step inside a loop
  
  Later you will combine loops with conditions, lists, and more complex data. The same pattern applies; the context gets richer.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - How \`for i in range(n)\` runs the block once per number from 0 to n - 1
  - How to build a string inside a loop with \`+= \` and \`str()\`
  - Why \`strip()\` can remove an unwanted trailing space
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and loop like a programmer.
  `,
  
  };
  