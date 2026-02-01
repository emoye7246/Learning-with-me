export const lessonDictionaries = {
    id: "basics-dictionaries",
    title: "Dictionaries",
  
    // ✅ Article markdown (tone and structure aligned with lesson-hello-world)
    article: `
  ## Dictionaries — Storing and Accessing Data by Key in Python
  
  So far you have worked with strings, numbers, lists, and objects that you access by position (index) or by attribute name.
  The next step is to **store and look up values by a key** — a name or label you choose — using a **dictionary**.
  
  In this lesson, your objective is clear:
  > **Write a function \`get_age(person)\` that takes a dictionary and returns the value associated with the key \`"age"\`.**
  
  Dictionaries are how Python (and many real systems) represent structured data: one key, one value. You give Python the key; it gives you the value.
  
  ---
  
  ## What is Python doing when you use a dictionary?
  
  Python is still read and executed **line by line** by the interpreter.
  
  When you write \`person["age"]\`, you are not describing “something about age.” You are giving **one specific instruction**: “Look up the value in this dictionary under the key \`"age"\` and give it to me.”
  
  Python looks up the key in the dictionary and returns the associated value. If the key is missing, Python raises an error (unless you use a method like \`.get()\`).
  There is no guessing.
  There is no skipping steps.
  Python does exactly what you tell it to do.
  
  ---
  
  ## The code you are working toward
  
  By the end of this lesson, you will write a function that takes a dictionary (e.g. \`{"name": "Alex", "age": 21}\`) and returns the value for the key \`"age"\`.
  
  Here is the shape of what you are aiming for:
  
  \`\`\`python
  def get_age(person):
      return person["age"]
  \`\`\`
  
  When called with \`{"name": "Alex", "age": 21}\`, it returns \`21\`. When called with \`{"name": "Jordan", "age": 30}\`, it returns \`30\`.
  
  Let’s break down the pieces.
  
  ---
  
  ## Understanding dictionaries
  
  A **dictionary** is a collection of **key → value** pairs. You create one with curly braces \`{}\` and commas between pairs:
  
  \`\`\`python
  person = {
      "name": "Alex",
      "age": 21
  }
  \`\`\`
  
  Each pair has a **key** (e.g. \`"name"\`, \`"age"\`) and a **value** (e.g. \`"Alex"\`, \`21\`). Keys are often strings; values can be any type.
  
  Unlike a list, you do not access values by position (0, 1, 2). You access them by **key**.
  
  ---
  
  ## Accessing a value by key
  
  You use **square brackets** with the key to get the value:
  
  \`\`\`python
  person["name"]   # "Alex"
  person["age"]    # 21
  \`\`\`
  
  So \`person["age"]\` means: “In the dictionary \`person\`, give me the value for the key \`"age"\`.”
  
  The key must exist in the dictionary. If you use a key that is not there (e.g. \`person["city"]\` when \`"city"\` was never set), Python raises a \`KeyError\`. For this lesson, the \`person\` dictionary will always have an \`"age"\` key.
  
  ---
  
  ## Why dictionaries?
  
  Dictionaries are ideal when you have **labeled** data: a name, an age, a city, and so on. You do not care about the order of the keys; you care about “what is the value for this key?”
  
  They are extremely common in real programs: JSON data, API responses, configuration, and more. Learning to read from a dictionary by key is a core skill.
  
  ---
  
  ## How Python evaluates \`person["age"]\`
  
  When Python runs \`person["age"]\`, it:
  
  1. Looks at the dictionary \`person\`
  2. Searches for the key \`"age"\`
  3. Returns the value associated with that key (\`21\` in the example)
  
  Your function \`get_age(person)\` receives a dictionary as \`person\` and returns \`person["age"]\`, so the caller gets the age value.
  
  ---
  
  ## Your interactive challenge
  
  Your task is to write a function \`get_age(person)\` that:
  
  - Takes one argument: \`person\` (a dictionary that has an \`"age"\` key)
  - Returns the value associated with the key \`"age"\` (e.g. \`21\`, \`30\`)
  
  Use \`person["age"]\` to look up and return the age.
  
  If your function returns the correct value for the given dictionary, the challenge is complete.
  
  Small details matter — the key must be exactly \`"age"\` (a string) and you must return the value, not the key.
  
  ---
  
  ## Why this lesson matters
  
  This lesson introduces ideas you will use constantly:
  - Dictionaries as key → value collections
  - Accessing values by key with \`d[key]\`
  - Using dictionaries to pass or receive structured data
  
  Later you will add and update keys, loop over dictionaries, and work with nested structures. The same model applies; the context gets richer.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - What a dictionary is (key → value pairs)
  - How to access a value with \`person["age"]\`
  - Why the key must exist (or you must handle missing keys)
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and work with dictionaries.
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
  