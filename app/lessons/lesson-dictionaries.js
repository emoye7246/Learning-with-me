export const lessonDictionaries = {
    id: "basics-dictionaries",
    title: "Dictionaries",
  
    // ✅ Article markdown
    article: `
  ## Dictionaries in Python
  
  Dictionaries store data in **key → value** pairs.
  Instead of accessing values by position (like lists), you access them by **name**.
  
  ### Creating a dictionary
  Use curly braces \`{}\`:
  
  \`\`\`python
  person = {
      "name": "Alex",
      "age": 21
  }
  \`\`\`
  
  ### Accessing values
  Use the key inside square brackets:
  
  \`\`\`python
  print(person["name"])
  \`\`\`
  
  ### Updating and adding values
  You can change or add values at any time:
  
  \`\`\`python
  person["age"] = 22
  person["city"] = "New York"
  \`\`\`
  
  ### Why dictionaries matter
  - Perfect for structured data
  - Fast lookups
  - Extremely common in real apps (JSON, APIs, configs)
  
  ### Common mistakes
  - Using a key that doesn’t exist ❌
  - Forgetting quotes around string keys ❌
  - Confusing lists and dictionaries ❌
  
  ---
  
  Scroll down and hit **Start Challenge** to work with dictionaries.
  `,
  
    // recommended additions
    type: "function",
    entry: "get_age",
  
    objectives: [
      "Understand key-value pairs",
      "Access values using keys",
      "Work with dictionaries safely"
    ],
  
    content: `## Your Task
  Write a function called \`get_age(person)\` that returns the value associated with the key \`"age"\`.
  
  The \`person\` parameter will always be a dictionary.`,
  
    examples: [
      `person = {"name": "Alex", "age": 21}
  print(person["age"])`,
  
      `def get_age(person):
      return person["age"]
  
  print(get_age({"name": "Jordan", "age": 30}))`
    ],
  
    tasks: 'Write a function called `get_age(person)` that returns the age from the dictionary.',
  
    starterCode: `def get_age(person):
      # Return the value for the key "age"
      pass
  `,
  
    tests: [
      { input: [{"name": "Alex", "age": 21}], expected: 21 },
      { input: [{"name": "Jordan", "age": 30}], expected: 30 }
    ],
  
    successMessage: "Dictionary unlocked! You’re officially working with real-world data 🗂️🔥"
  };
  