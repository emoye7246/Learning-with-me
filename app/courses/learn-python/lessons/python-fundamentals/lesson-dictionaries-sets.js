export const lessonDictionariesSets = {
    id: "dictionaries-sets",
    title: "Dictionaries & Sets",
  
    article: `
  
  ## Introduction
  
  So far, we’ve worked with lists.
  
  Lists store multiple values.
  
  But lists organize data by position.
  
  What if we want to organize data by label?
  
  Instead of:
  
  0  
  1  
  2  
  
  What if we want:
  
  "name"  
  "age"  
  "email"  
  
  That’s where dictionaries come in.
  
  And after that,
  we’ll explore sets.
  
  ---
  
  # Part 1: Dictionaries
  
  ## What Is a Dictionary?
  
  A dictionary stores data in **key-value pairs**.
  
  Think of it like this:
  
  A word → its definition  
  A name → a phone number  
  A product → its price  
  
  Each piece of data has a label.
  
  ---
  
  ## Creating a Dictionary
  
  Dictionaries use curly braces \`{}\`.
  
  Try this:
  
  \`\`\`python
  person = {
      "name": "Elijah",
      "age": 25,
      "city": "New York"
  }
  
  print(person)
  \`\`\`
  
  Save.  
  Run it.
  
  You should see all the data printed.
  
  ---
  
  ## Accessing Values
  
  To get a value,
  use its key.
  
  \`\`\`python
  print(person["name"])
  print(person["age"])
  \`\`\`
  
  Notice:
  
  You are not using numbers.
  
  You are using labels.
  
  That’s the power of dictionaries.
  
  ---
  
  ## Why Use Dictionaries Instead of Lists?
  
  With a list:
  
  \`\`\`python
  person = ["Elijah", 25, "New York"]
  \`\`\`
  
  What does index 1 mean?
  
  You have to remember.
  
  With a dictionary:
  
  \`\`\`python
  person["age"]
  \`\`\`
  
  It’s clear.
  
  Much more readable.
  Much more practical.
  
  ---
  
  ## Changing Values
  
  Dictionaries are mutable.
  
  That means you can change them.
  
  \`\`\`python
  person["age"] = 26
  print(person)
  \`\`\`
  
  The value updates.
  
  ---
  
  ## Adding New Keys
  
  You can add new information easily.
  
  \`\`\`python
  person["profession"] = "Developer"
  print(person)
  \`\`\`
  
  A new key-value pair appears.
  
  ---
  
  ## Safe Access with .get()
  
  What if you try to access something that doesn’t exist?
  
  \`\`\`python
  print(person["email"])
  \`\`\`
  
  This causes an error.
  
  Instead, use:
  
  \`\`\`python
  print(person.get("email"))
  \`\`\`
  
  This safely returns None.
  
  You can even provide a default value:
  
  \`\`\`python
  print(person.get("email", "Not found"))
  \`\`\`
  
  ---
  
  ## Dictionary Length
  
  To count how many key-value pairs exist:
  
  \`\`\`python
  print(len(person))
  \`\`\`
  
  ---
  
  ## Try This
  
  Create your own dictionary:
  
  \`\`\`python
  book = {
      "title": "Atomic Habits",
      "author": "James Clear",
      "pages": 320
  }
  
  print(book["title"])
  \`\`\`
  
  Add a new key.
  Change a value.
  Run it again.
  
  ---
  
  # Part 2: Sets
  
  Now let’s talk about sets.
  
  ---
  
  ## What Is a Set?
  
  A set is a collection of unique values.
  
  No duplicates allowed.
  
  Sets also use curly braces.
  
  Try this:
  
  \`\`\`python
  numbers = {1, 2, 3, 3, 4}
  print(numbers)
  \`\`\`
  
  Notice something.
  
  The duplicate 3 disappears.
  
  Sets automatically remove duplicates.
  
  ---
  
  ## When Would You Use a Set?
  
  Use a set when:
  
  - You only care about unique values
  - You want to remove duplicates
  - You want fast checking
  
  For example:
  
  Unique usernames  
  Unique product IDs  
  Unique tags  
  
  ---
  
  ## Adding to a Set
  
  \`\`\`python
  numbers.add(5)
  print(numbers)
  \`\`\`
  
  ---
  
  ## Removing from a Set
  
  \`\`\`python
  numbers.remove(2)
  print(numbers)
  \`\`\`
  
  ---
  
  ## Checking If Something Exists
  
  \`\`\`python
  if 3 in numbers:
      print("It exists")
  \`\`\`
  
  Sets are very fast at checking membership.
  
  ---
  
  ## Comparing Sets
  
  Sets can compare groups.
  
  Try this:
  
  \`\`\`python
  a = {1, 2, 3}
  b = {3, 4, 5}
  
  print(a & b)
  \`\`\`
  
  This shows what both sets have in common.
  
  You’ll see:
  
  3
  
  ---
  
  ## Try This
  
  Create two sets:
  
  \`\`\`python
  team_a = {"Elijah", "Sarah", "James"}
  team_b = {"Sarah", "Michael"}
  \`\`\`
  
  Find:
  
  - Who is on both teams
  - Who is only on team_a
  
  ---
  
  # What You Learned
  
  You now understand:
  
  - What a dictionary is
  - How to create key-value pairs
  - How to access and modify dictionary data
  - What a set is
  - How sets remove duplicates
  - How to check membership
  - How to compare groups
  
  Lists organize by position.
  
  Dictionaries organize by label.
  
  Sets organize by uniqueness.
  
  Each has its purpose.
  
  ---
  
  # What Comes Next
  
  Right now,
  you can store data.
  
  Next,
  you’ll learn how to repeat actions.
  
  **Loops (for / while)**
  
  `
  }