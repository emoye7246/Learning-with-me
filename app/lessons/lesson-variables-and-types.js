export const lessonVariablesTypes = {
    id: "basics-variables-types",
    title: "Variables & Types",
  
    type: "function",
    entry: "get_values",
  
    objectives: [
      "Understand what variables are in Python",
      "Learn common data types: int, float, str, bool",
      "Practice assigning and returning values"
    ],
  
    content: `## Variables in Python
  A **variable** is a name that stores a value.
  
  In Python, you don’t need to declare a variable’s type.
  Python figures it out automatically.
  
  \`\`\`python
  x = 10
  name = "Skye"
  is_ready = True
  \`\`\`
  
  ---
  
  ## Common Data Types
  
  ### Numbers
  - **int** → whole numbers  
  - **float** → decimal numbers
  
  \`\`\`python
  age = 25        # int
  price = 9.99    # float
  \`\`\`
  
  ### Strings
  Text wrapped in quotes.
  
  \`\`\`python
  message = "Hello"
  \`\`\`
  
  ### Booleans
  True or False values.
  
  \`\`\`python
  is_active = True
  \`\`\`
  
  ---
  
  ## Your Task
  Write a function called \`get_values()\` that:
  
  - creates:
    - a number
    - a decimal
    - a string
    - a boolean
  - **returns them in a list** in this exact order:
  
  \`\`\`python
  [number, decimal, string, boolean]
  \`\`\`
  
  Returning values lets us automatically check your answer.`,
  
    examples: [
      `x = 10
  y = 3.14
  name = "Python"
  is_fun = True`,
      
      `def get_values():
      age = 25
      height = 5.9
      language = "Python"
      learning = True
      return [age, height, language, learning]`
    ],
  
    tasks: `Create variables for:
  - a number
  - a decimal
  - a string
  - a boolean
  
  Then return them as a list in this order:
  [number, decimal, string, boolean]`,
  
    starterCode: `def get_values():
      # Create your variables below
      # number =
      # decimal =
      # string =
      # boolean =
  
      # Return them as a list
      pass
  `,
  
    tests: [
      {
        input: [],
        expected: [10, 3.5, "Python", true]
      }
    ],
  
    successMessage: "Nice! You just learned variables and data types 🎉"
  };
  