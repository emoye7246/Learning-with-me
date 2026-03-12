export const lessonDictionaries = {
  id: "dictionaries",
  title: "Dictionaries",

  article: `
## Introduction

Lists organize data by position.

Index 0.
Index 1.
Index 2.

That works — but it's limiting.

What if you want to access data by a meaningful label?

Not position \`0\`, but \`"name"\`.
Not position \`1\`, but \`"age"\`.

That's what dictionaries are for.

---

## What Is a Dictionary?

A dictionary stores data as **key-value pairs**.

Think of it like a real dictionary:
a word (the key) maps to its definition (the value).

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

You should see all three pairs printed.

---

## Accessing Values

To get a value, use its key.

\`\`\`python
print(person["name"])
print(person["age"])
\`\`\`

You're not using a number.
You're using a label.

That's the power of dictionaries.
Your data becomes self-describing.

---

## Modifying Values

Dictionaries are mutable.
You can change any value.

\`\`\`python
person["age"] = 26
print(person["age"])
\`\`\`

---

## Adding New Keys

You can add new data at any time.

\`\`\`python
person["profession"] = "Developer"
print(person)
\`\`\`

A new key-value pair is added.

---

## Removing a Key

\`\`\`python
del person["city"]
print(person)
\`\`\`

The \`"city"\` key and its value are gone.

---

## Safe Access with .get()

What happens if you ask for a key that doesn't exist?

\`\`\`python
print(person["email"])
\`\`\`

You'll get a \`KeyError\`.

Use \`.get()\` to access safely:

\`\`\`python
print(person.get("email"))          # None
print(person.get("email", "N/A"))   # N/A
\`\`\`

The second argument is the default value if the key isn't found.

---

## Looping Through a Dictionary

\`\`\`python
person = {"name": "Elijah", "age": 25}

for key in person:
    print(key, ":", person[key])
\`\`\`

Or use \`.items()\` to get both at once:

\`\`\`python
for key, value in person.items():
    print(key, ":", value)
\`\`\`

---

## Checking If a Key Exists

\`\`\`python
if "name" in person:
    print("Name is available.")
\`\`\`

---

## Dictionary Length

\`\`\`python
print(len(person))   # Number of key-value pairs
\`\`\`

---

## Nested Dictionaries

Dictionaries can hold other dictionaries.

\`\`\`python
users = {
    "alice": {"age": 30, "role": "admin"},
    "bob":   {"age": 25, "role": "viewer"},
}

print(users["alice"]["role"])   # admin
\`\`\`

This becomes very useful when working with real data.

---

## Try This

Create a dictionary for a book:

\`\`\`python
book = {
    "title": "Atomic Habits",
    "author": "James Clear",
    "pages": 320
}
\`\`\`

- Print just the title.
- Add a \`"year"\` key with a value.
- Loop through all keys and values and print them.
- Use \`.get()\` to safely access a key that doesn't exist.

---

## What You Learned

You now understand:

- What a dictionary is
- How to create, access, modify, and delete key-value pairs
- How to use \`.get()\` for safe access
- How to loop through dictionary data
- How to nest dictionaries

Lists for ordered sequences.
Dictionaries for labeled data.

---

## What Comes Next

You can store data in many forms now.

Next, you'll learn how to repeat actions — efficiently.

**Loops (for / while)**
`,
};
