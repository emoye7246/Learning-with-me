export const lessonLists = {
    id: "basics-lists",
    title: "Lists",
  
    type: "function",
    entry: "build_list",
  
    objectives: [
      "Understand what lists are in Python",
      "Learn how to create and access list items",
      "Practice returning lists from a function"
    ],
  
    content: `## Lists in Python
  A **list** is a collection of values stored in a single variable.
  
  Lists are similar to arrays in other languages.
  They can store:
  - numbers
  - strings
  - booleans
  - or a mix of all types
  
  \`\`\`python
  numbers = [1, 2, 3]
  words = ["hello", "world"]
  mixed = [1, "Python", True]
  \`\`\`
  
  ---
  
  ## Accessing List Items
  Each item in a list has an **index**.
  Indexes start at **0**.
  
  \`\`\`python
  languages = ["Python", "JavaScript", "C++"]
  
  languages[0]  # "Python"
  languages[1]  # "JavaScript"
  \`\`\`
  
  ---
  
  ## Your Task
  Write a function called \`build_list()\` that:
  
  - creates a list containing:
    - a number
    - a string
    - a boolean
  - returns the list in this exact order:
  
  \`\`\`python
  [number, string, boolean]
  \`\`\`
  
  Returning values lets us automatically check your answer.`,
  
    examples: [
      `items = [10, "Python", True]`,
      
      `def build_list():
      my_list = [10, "Python", True]
      return my_list`
    ],
  
    tasks: `Create a list that contains:
  - a number
  - a string
  - a boolean
  
  Return the list in this exact order:
  [number, string, boolean]`,
  
    starterCode: `def build_list():
      # Create a list with:
      # - a number
      # - a string
      # - a boolean
  
      pass
  `,
  
    tests: [
      {
        input: [],
        expected: [10, "Python", true]
      }
    ],
  
    successMessage: "Nice! You just created and returned a list 🎉"
  };
  