export const lessonLoops = {
    id: "loops",
    title: "Loops (for / while)",
  
    article: `
  
  ## Introduction
  
  So far,
  your programs run from top to bottom.
  
  One line.
  Then the next.
  Then the next.
  
  But what if you want something to happen multiple times?
  
  Print something 10 times.
  Go through every item in a list.
  Repeat something until a condition changes.
  
  That’s where loops come in.
  
  Loops allow your program to repeat.
  
  ---
  
  # Part 1: The for Loop
  
  ## What Is a for Loop?
  
  A for loop repeats code
  for each item in a collection.
  
  It is commonly used with:
  
  - Lists
  - Strings
  - Ranges of numbers
  
  ---
  
  ## Looping Through a List
  
  Try this:
  
  \`\`\`python
  fruits = ["apple", "banana", "cherry"]
  
  for fruit in fruits:
      print(fruit)
  \`\`\`
  
  Save.
  Run it.
  
  You should see:
  
  apple  
  banana  
  cherry  
  
  The loop runs once for each item.
  
  ---
  
  ## Understanding What’s Happening
  
  - "fruit" is a temporary variable.
  - Each time the loop runs,
    it becomes the next item in the list.
  
  First:
  fruit = "apple"
  
  Second:
  fruit = "banana"
  
  Third:
  fruit = "cherry"
  
  Then the loop ends.
  
  ---
  
  ## Looping Through Numbers with range()
  
  Sometimes you don’t have a list.
  
  You just want to repeat something a certain number of times.
  
  Use range().
  
  Try this:
  
  \`\`\`python
  for number in range(5):
      print(number)
  \`\`\`
  
  Output:
  
  0  
  1  
  2  
  3  
  4  
  
  Notice:
  
  range(5) starts at 0
  and stops before 5.
  
  ---
  
  ## Why Does range Start at 0?
  
  Just like list indexing,
  Python starts counting at 0.
  
  This is normal in programming.
  
  ---
  
  ## Looping a Specific Number of Times
  
  If you want to start somewhere else:
  
  \`\`\`python
  for number in range(1, 6):
      print(number)
  \`\`\`
  
  Now it prints:
  
  1  
  2  
  3  
  4  
  5  
  
  range(start, stop)
  
  Stop is not included.
  
  ---
  
  ## Using Loops With Conditions
  
  You can combine loops and if statements.
  
  \`\`\`python
  numbers = [1, 2, 3, 4, 5]
  
  for number in numbers:
      if number % 2 == 0:
          print(number)
  \`\`\`
  
  This prints only even numbers.
  
  ---
  
  # Part 2: The while Loop
  
  ## What Is a while Loop?
  
  A while loop repeats
  as long as a condition is True.
  
  It does not loop over a list.
  
  It loops based on a condition.
  
  ---
  
  ## Basic while Example
  
  Try this:
  
  \`\`\`python
  count = 0
  
  while count < 5:
      print(count)
      count += 1
  \`\`\`
  
  Save.
  Run it.
  
  You should see:
  
  0  
  1  
  2  
  3  
  4  
  
  ---
  
  ## Understanding What’s Happening
  
  - count starts at 0
  - The loop runs because 0 < 5
  - count increases each time
  - When count reaches 5,
    the condition becomes False
  - The loop stops
  
  ---
  
  ## Important: Avoid Infinite Loops
  
  If you forget to update the variable:
  
  \`\`\`python
  count = 0
  
  while count < 5:
      print(count)
  \`\`\`
  
  This never stops.
  
  The condition never changes.
  
  That’s called an infinite loop.
  
  Be careful.
  
  ---
  
  # for vs while
  
  Use a for loop when:
  
  - You are looping through a list
  - You know how many times to repeat
  
  Use a while loop when:
  
  - You want to repeat until something changes
  - You don’t know exactly how many repetitions will happen
  
  ---
  
  # Try This
  
  1. Create a list of 5 numbers.
     Print each number using a for loop.
  
  2. Use range() to print numbers from 10 to 15.
  
  3. Create a while loop that counts down from 5 to 1.
  
  ---
  
  # What You Learned
  
  You now understand:
  
  - What a loop is
  - How a for loop works
  - How to use range()
  - How to combine loops and conditions
  - How a while loop works
  - How to avoid infinite loops
  
  Before this lesson,
  you could store data.
  
  Now,
  you can process data.
  
  ---
  
  # What Comes Next
  
  Right now,
  your programs still use hardcoded values.
  
  Next,
  you’ll learn how to create reusable blocks of code.
  
  **Functions**
  
  `
  }