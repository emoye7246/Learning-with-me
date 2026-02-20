export const lessonInputOutput = {
    id: "input-output",
    title: "Input & Output",
  
    article: `
  
  ## Introduction
  
  So far,
  your programs use fixed values.
  
  Numbers you typed.
  Strings you wrote.
  Lists you created.
  
  But real programs interact with users.
  
  They ask questions.
  They receive answers.
  They respond.
  
  That’s where input and output come in.
  
  ---
  
  # Part 1: Output with print()
  
  You’ve already used print().
  
  \`\`\`python
  print("Hello world")
  \`\`\`
  
  print() sends information to the screen.
  
  This is called output.
  
  Output is how your program communicates outward.
  
  ---
  
  # Part 2: Getting Input from the User
  
  To receive information from a user,
  use input().
  
  Try this:
  
  \`\`\`python
  name = input("What is your name? ")
  print("Hello " + name)
  \`\`\`
  
  Save.
  Run it.
  
  Your program will pause.
  It will wait for you to type something.
  
  After you press Enter,
  it continues.
  
  That’s input.
  
  ---
  
  ## Important: input() Always Returns a String
  
  Even if the user types a number,
  input() treats it as text.
  
  Example:
  
  \`\`\`python
  age = input("How old are you? ")
  print(age)
  \`\`\`
  
  If you type 25,
  it is stored as "25" (a string).
  
  ---
  
  # Part 3: Converting Input to Numbers
  
  If you want to use input as a number,
  you must convert it.
  
  Use int() for whole numbers.
  
  \`\`\`python
  age = int(input("How old are you? "))
  print(age + 5)
  \`\`\`
  
  Now Python treats it as a number.
  
  ---
  
  ## What Happens If You Don’t Convert?
  
  \`\`\`python
  number = input("Enter a number: ")
  print(number + 5)
  \`\`\`
  
  This causes an error.
  
  Because you can’t add a number
  to a string.
  
  Always convert when needed.
  
  ---
  
  # Part 4: Combining Input, Logic, and Output
  
  Now let’s combine everything you’ve learned.
  
  \`\`\`python
  age = int(input("How old are you? "))
  
  if age >= 18:
      print("You are an adult.")
  else:
      print("You are under 18.")
  \`\`\`
  
  This is how interactive programs work.
  
  Input.
  Process.
  Output.
  
  ---
  
  # Part 5: Formatting Output
  
  You can format output cleanly using f-strings.
  
  \`\`\`python
  name = input("What is your name? ")
  age = int(input("How old are you? "))
  
  print(f"Hello {name}, you are {age} years old.")
  \`\`\`
  
  f-strings make output cleaner and easier to read.
  
  ---
  
  # Try This
  
  1. Ask the user for two numbers.
     Convert them to integers.
     Print their sum.
  
  2. Ask the user for their favorite color.
     Print a sentence using that color.
  
  3. Ask the user for a number.
     Print whether it is even or odd.
  
  ---
  
  # What You Learned
  
  You now understand:
  
  - What output is
  - How print() works
  - How to receive user input
  - Why input returns a string
  - How to convert input to integers
  - How to combine input with logic
  - How to format output cleanly
  
  Before this lesson,
  your programs were static.
  
  Now,
  they can interact.
  
  ---
  
  # What Comes Next
  
  Right now,
  all your code lives in one file.
  
  Next,
  you’ll learn how Python files can work together.
  
  You’ll learn about importing tools.
  
  **Intro to Modules & Imports**
  
  `
  }