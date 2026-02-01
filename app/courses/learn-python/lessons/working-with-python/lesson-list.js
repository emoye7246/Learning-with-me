export const lessonLists = {
  id: "basics-lists",
  title: "Lists",

  // ✅ Article markdown
  article: `
  ## Lists — Storing Many Values in One Place
  
  Welcome to your next Python lesson.
  
  You already know how to store **one value** in a variable.
  
  But real programs usually deal with **many values** at once:
  - multiple names
  - multiple scores
  - multiple tasks
  - multiple items in a cart
  
  In this lesson, your objective is clear:
  > **Create a list, access values inside it, and return the correct item.**
  
  This is where your code starts handling real collections of data.
  
  ---
  
  ## What is a list?
  
  A **list** is a collection of values stored in a single variable.
  
  Instead of creating a separate variable for every value, you can store them together:
  
  \`\`\`python
  fruits = ["apple", "banana", "orange"]
  \`\`\`
  
  A list is wrapped in square brackets:
  - \`[\` and \`]\`
  
  And each item is separated by commas.
  
  ---
  
  ## Why lists matter
  
  Lists allow you to:
  - store a group of related values
  - keep your code clean
  - work with data in an organized way
  
  Once you learn lists, you unlock:
  - loops
  - searching
  - sorting
  - real data structures
  
  ---
  
  ## Accessing items in a list (indexing)
  
  Every item in a list has a position number called an **index**.
  
  Important rule:
  > **Python starts counting at 0.**
  
  That means:
  - the first item is index \`0\`
  - the second item is index \`1\`
  - the third item is index \`2\`
  
  Example:
  
  \`\`\`python
  fruits = ["apple", "banana", "orange"]
  print(fruits[0])
  \`\`\`
  
  Output:
  
  \`\`\`
  apple
  \`\`\`
  
  This is one of the biggest beginner mistakes — forgetting that indexing starts at 0.
  
  ---
  
  ## Getting the last item
  
  Python has a clean trick for the last item:
  
  \`\`\`python
  fruits = ["apple", "banana", "orange"]
  print(fruits[-1])
  \`\`\`
  
  Output:
  
  \`\`\`
  orange
  \`\`\`
  
  An index of \`-1\` means:
  > “Start from the end and give me the last item.”
  
  ---
  
  ## Changing a list item
  
  Lists are **mutable**, which means you can change them.
  
  \`\`\`python
  fruits = ["apple", "banana", "orange"]
  fruits[1] = "grape"
  print(fruits)
  \`\`\`
  
  Output:
  
  \`\`\`
  ['apple', 'grape', 'orange']
  \`\`\`
  
  You replaced the value at index \`1\`.
  
  ---
  
  ## Adding items to a list
  
  You can add items using \`.append()\`.
  
  \`\`\`python
  fruits = ["apple", "banana"]
  fruits.append("orange")
  print(fruits)
  \`\`\`
  
  Output:
  
  \`\`\`
  ['apple', 'banana', 'orange']
  \`\`\`
  
  \`.append()\` always adds to the end.
  
  ---
  
  ## How Python executes list indexing
  
  When Python sees this:
  
  \`\`\`python
  fruits[0]
  \`\`\`
  
  It does the following:
  
  1. Finds the list named \`fruits\`
  2. Looks up index \`0\`
  3. Retrieves the value stored at that position
  4. Returns that value
  
  If the index does not exist, Python raises an error.
  
  ---
  
  ## Your interactive challenge
  
  Your task is to:
  
  1. Create a list named \`items\`
  2. Store these strings inside it (in this exact order):
     - \`"pen"\`
     - \`"pencil"\`
     - \`"eraser"\`
  3. Return the **second** item in the list
  
  Remember:
  > The second item is index \`1\`
  
  The output must be:
  
  \`\`\`
  pencil
  \`\`\`
  
  Nothing more.
  Nothing less.
  
  ---
  
  ## Why this lesson matters
  
  Lists are a foundation for everything ahead:
  - loops (repeat over items)
  - algorithms (searching and sorting)
  - working with real data (multiple values)
  
  If you understand lists, you’re ready to start thinking like a programmer.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - what a list is
  - why indexes start at 0
  - how to access items using brackets \`[ ]\`
  - how to return an item correctly
  
  Scroll down when you’re ready and lock it in.
  `,

  // recommended additions
  type: "lists",
  entry: "lists",

  objectives: [
    "Understand what a list is and why it is useful",
    "Learn that list indexes start at 0",
    "Access an item from a list using bracket indexing",
    "Return a specific list item from a function"
  ],

  content: `## Your Task
Write a function called \`get_second_item()\` that creates a list named \`items\` containing:

- \`"pen"\`
- \`"pencil"\`
- \`"eraser"\`

Then **return** the second item in the list.

Returning is easier to auto-check with tests (LeetCode style).`,

  examples: [
    `items = ["pen", "pencil", "eraser"]
print(items[1])`,
    `def get_second_item():
    items = ["pen", "pencil", "eraser"]
    return items[1]

print(get_second_item())`
  ],

  tasks: 'Write a function called `get_second_item()` that returns the second item from the list `["pen", "pencil", "eraser"]`.',

  starterCode: `def get_second_item():
    # Create a list named items with: "pen", "pencil", "eraser"
    # Return the second item
    pass
`,

  tests: [
    { input: [], expected: "pencil" },
    { input: [], expected: "pencil" }
  ],

  successMessage: "Nice! You just pulled a value out of a list (and passed tests) 🎉"
};
