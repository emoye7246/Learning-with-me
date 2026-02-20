export const lessonFunctions = {
    id: "functions",
    title: "Functions",
  
    article: `
  
  ## Introduction
  
  So far,
  you’ve written code that runs from top to bottom.
  
  You’ve used:
  
  - Variables
  - Lists
  - Dictionaries
  - Loops
  
  But what happens when your program gets bigger?
  
  What if you need to repeat the same logic
  in multiple places?
  
  Copying and pasting code is not efficient.
  
  That’s where functions come in.
  
  Functions allow you to organize,
  reuse,
  and simplify your code.
  
  ---
  
  # Part 1: What Is a Function?
  
  A function is a reusable block of code.
  
  It performs a specific task.
  
  You define it once.
  You can use it many times.
  
  ---
  
  ## Creating Your First Function
  
  Try this:
  
  \`\`\`python
  def greet():
      print("Hello!")
  \`\`\`
  
  Save.
  Run it.
  
  You may notice…
  
  Nothing happens.
  
  That’s because defining a function
  does not run it.
  
  ---
  
  ## Calling a Function
  
  To use the function,
  you must call it.
  
  \`\`\`python
  def greet():
      print("Hello!")
  
  greet()
  \`\`\`
  
  Now it runs.
  
  You should see:
  
  Hello!
  
  ---
  
  ## Why Use Functions?
  
  Instead of writing:
  
  \`\`\`python
  print("Hello!")
  print("Hello!")
  print("Hello!")
  \`\`\`
  
  You can write:
  
  \`\`\`python
  def greet():
      print("Hello!")
  
  greet()
  greet()
  greet()
  \`\`\`
  
  Much cleaner.
  Much more powerful.
  
  ---
  
  # Part 2: Functions with Parameters
  
  So far,
  our function doesn’t accept input.
  
  Let’s change that.
  
  ---
  
  ## Adding a Parameter
  
  \`\`\`python
  def greet(name):
      print("Hello " + name)
  
  greet("Elijah")
  \`\`\`
  
  Output:
  
  Hello Elijah
  
  "name" is called a parameter.
  
  It acts like a variable
  inside the function.
  
  ---
  
  ## Multiple Parameters
  
  \`\`\`python
  def add(a, b):
      print(a + b)
  
  add(5, 3)
  \`\`\`
  
  Output:
  
  8
  
  You can pass multiple values.
  
  ---
  
  # Part 3: Returning Values
  
  So far,
  our functions only print.
  
  But what if we want the function
  to give us something back?
  
  That’s where return comes in.
  
  ---
  
  ## Using return
  
  \`\`\`python
  def add(a, b):
      return a + b
  
  result = add(5, 3)
  print(result)
  \`\`\`
  
  Now the function sends a value back.
  
  This is extremely important.
  
  Most real-world functions return data.
  
  ---
  
  ## Print vs Return
  
  print() shows something on the screen.
  
  return sends a value back to be used later.
  
  Example:
  
  \`\`\`python
  def multiply(a, b):
      return a * b
  
  answer = multiply(4, 2)
  print(answer)
  \`\`\`
  
  The function calculates.
  The variable stores.
  Then we print.
  
  ---
  
  # Part 4: Why Functions Matter
  
  Functions allow you to:
  
  - Break large programs into smaller parts
  - Avoid repeating code
  - Make programs easier to read
  - Build reusable logic
  
  Almost every serious program
  is built from functions.
  
  ---
  
  # Try This
  
  1. Create a function called square that:
     - Takes one number
     - Returns the number squared
  
  2. Create a function called introduce that:
     - Takes a name and age
     - Prints a sentence introducing the person
  
  3. Create a function that:
     - Takes a list of numbers
     - Returns the total
  
  ---
  
  # What You Learned
  
  You now understand:
  
  - How to define a function
  - How to call a function
  - What parameters are
  - How return works
  - The difference between print and return
  - Why functions are essential
  
  Before this lesson,
  your code ran in one long sequence.
  
  Now,
  you can organize your logic.
  
  ---
  
  # What Comes Next
  
  Right now,
  your programs still use fixed values.
  
  Next,
  you’ll learn how to receive input from the user.
  
  **Input & Output**
  
  `
  }