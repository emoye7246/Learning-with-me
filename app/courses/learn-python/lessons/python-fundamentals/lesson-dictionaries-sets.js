export const lessonDictionariesSets = {
    id: "dictionaries-sets",
    title: "Dictionaries & Sets",
    hasChallenge: false,

    article: `

## Introduction

So far, you've stored data by position — lists and tuples.

But real-world data often makes more sense with labels.

A person isn't \`[0]\`, \`[1]\`, \`[2]\`.

A person is \`"name"\`, \`"age"\`, \`"city"\`.

This lesson covers two new structures:

- **Dictionaries** — store data by label (key-value pairs)
- **Sets** — store unique values with no duplicates

---

# Part 1: Dictionaries

---

## What Is a Dictionary?

A dictionary stores data as **key-value pairs**.

Every piece of data has a label (the key) and a value.

Think of it like a real dictionary:
- word → definition
- name → phone number
- product → price

---

## Creating a Dictionary

Dictionaries use curly braces \`{}\` with \`key: value\` pairs separated by commas.

\`\`\`python
person = {
    "name": "Elijah",
    "age": 25,
    "city": "New York"
}

print(person)
\`\`\`

---

## Accessing Values

To get a value, use its key inside square brackets.

\`\`\`python
print(person["name"])  # Elijah
print(person["age"])   # 25
\`\`\`

You're not using numbers — you're using labels.

That's what makes dictionaries more readable than lists for structured data.

---

## Why Use Dictionaries Instead of Lists?

With a list:

\`\`\`python
person = ["Elijah", 25, "New York"]
print(person[1])  # 25 — but what does index 1 mean?
\`\`\`

You have to remember what each position represents.

With a dictionary:

\`\`\`python
person = {"name": "Elijah", "age": 25, "city": "New York"}
print(person["age"])  # 25 — obvious
\`\`\`

Much clearer. Much more maintainable.

---

## Safe Access with .get()

If you access a key that doesn't exist, Python raises an error.

\`\`\`python
print(person["email"])  # KeyError: 'email'
\`\`\`

Use \`.get()\` instead — it returns \`None\` if the key is missing.

\`\`\`python
print(person.get("email"))           # None
print(person.get("email", "N/A"))    # N/A
\`\`\`

The second argument is a default value.

Use \`.get()\` whenever the key might not exist.

---

## Checking If a Key Exists

Use the \`in\` keyword to check before accessing.

\`\`\`python
if "name" in person:
    print("Name found:", person["name"])

if "email" not in person:
    print("No email on file")
\`\`\`

---

## Changing Values

Dictionaries are mutable — assign a new value to an existing key.

\`\`\`python
person["age"] = 26
print(person["age"])  # 26
\`\`\`

---

## Adding New Keys

Assign to a key that doesn't exist yet.

\`\`\`python
person["profession"] = "Developer"
print(person)
\`\`\`

The new key-value pair is added.

---

## Removing Keys

**\`del\`** removes a key permanently:

\`\`\`python
del person["city"]
print(person)
\`\`\`

**\`.pop()\`** removes a key and returns its value:

\`\`\`python
age = person.pop("age")
print(age)     # 25
print(person)  # age is gone
\`\`\`

\`.pop()\` also accepts a default to avoid errors if the key doesn't exist:

\`\`\`python
result = person.pop("email", "not found")
print(result)  # not found
\`\`\`

---

## Updating a Dictionary

\`.update()\` merges another dictionary in — overwriting existing keys.

\`\`\`python
person = {"name": "Elijah", "age": 25}

person.update({"age": 26, "city": "London"})

print(person)  # {"name": "Elijah", "age": 26, "city": "London"}
\`\`\`

Useful for applying a batch of changes at once.

---

## Looping Over a Dictionary

Looping over a dictionary gives you the **keys** by default.

\`\`\`python
person = {"name": "Elijah", "age": 25, "city": "New York"}

for key in person:
    print(key)
\`\`\`

To loop over **values**:

\`\`\`python
for value in person.values():
    print(value)
\`\`\`

To loop over **both** at the same time:

\`\`\`python
for key, value in person.items():
    print(key, "→", value)
\`\`\`

\`.items()\` is the most common loop pattern for dictionaries.

---

## Nested Dictionaries

Dictionary values can be other dictionaries.

This is how real data often looks.

\`\`\`python
users = {
    "alice": {"age": 30, "city": "Paris"},
    "bob":   {"age": 24, "city": "Berlin"},
}

print(users["alice"]["city"])  # Paris
print(users["bob"]["age"])     # 24
\`\`\`

Access nested values by chaining keys.

---

## Dictionary Methods at a Glance

| Method | What it does |
|---|---|
| \`dict[key]\` | Access a value (errors if missing) |
| \`.get(key, default)\` | Safe access with optional default |
| \`.update(other)\` | Merge another dict in |
| \`.pop(key, default)\` | Remove and return a value |
| \`.keys()\` | All keys |
| \`.values()\` | All values |
| \`.items()\` | All key-value pairs |
| \`len(dict)\` | Number of key-value pairs |
| \`key in dict\` | Check if a key exists |

---

## Try This (Dictionaries)

\`\`\`python
book = {
    "title": "Atomic Habits",
    "author": "James Clear",
    "pages": 320
}

print(book["title"])
print(book.get("rating", "No rating yet"))

book["rating"] = 4.8
book["pages"] = 350

for key, value in book.items():
    print(f"{key}: {value}")
\`\`\`

Then try:
- Remove a key with \`del\` and print the result
- Add a nested dictionary as a value, like \`"publisher": {"name": "Avery", "year": 2018}\`
- Access a value inside your nested dictionary

---

# Part 2: Sets

---

## What Is a Set?

A set is a collection of **unique** values.

No duplicates. No guaranteed order.

\`\`\`python
numbers = {1, 2, 3, 3, 4}
print(numbers)  # {1, 2, 3, 4}
\`\`\`

The duplicate \`3\` is removed automatically.

---

## The Empty Set Gotcha

This is important.

\`\`\`python
empty_dict = {}      # This is a dict, NOT a set
empty_set  = set()   # This is a set
\`\`\`

\`{}\` creates an empty dictionary.

To create an empty set, you must use \`set()\`.

---

## Creating a Set from a List

The most common real-world use of sets is **removing duplicates**.

\`\`\`python
names = ["alice", "bob", "alice", "charlie", "bob"]
unique = set(names)

print(unique)  # {"alice", "bob", "charlie"}
\`\`\`

Convert a list to a set to get unique values, then back to a list if needed.

\`\`\`python
unique_list = list(set(names))
\`\`\`

---

## Sets Are Unordered

Sets don't preserve the order items were added.

\`\`\`python
tags = {"python", "coding", "beginner"}
print(tags)  # order is not guaranteed
\`\`\`

If order matters, use a list.
If uniqueness matters, use a set.

---

## Adding and Removing Items

**Add** one item:

\`\`\`python
numbers = {1, 2, 3}
numbers.add(4)
print(numbers)  # {1, 2, 3, 4}
\`\`\`

**Remove** an item — raises an error if it doesn't exist:

\`\`\`python
numbers.remove(2)
\`\`\`

**Discard** — removes silently if the item is missing:

\`\`\`python
numbers.discard(99)  # no error, even though 99 isn't there
\`\`\`

Use \`.discard()\` when you're not sure if the item exists.

---

## Checking Membership

Sets are very fast at checking if a value exists.

\`\`\`python
allowed = {"admin", "editor", "viewer"}

role = "admin"

if role in allowed:
    print("Access granted")
else:
    print("Access denied")
\`\`\`

This is faster than checking inside a list, especially with large data.

---

## Set Operations

Sets support mathematical operations — the kind you may have seen in school.

\`\`\`python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
\`\`\`

**Union** — everything in either set:

\`\`\`python
print(a | b)  # {1, 2, 3, 4, 5, 6}
\`\`\`

**Intersection** — only what both sets share:

\`\`\`python
print(a & b)  # {3, 4}
\`\`\`

**Difference** — what's in \`a\` but not in \`b\`:

\`\`\`python
print(a - b)  # {1, 2}
\`\`\`

**Symmetric difference** — what's in one but not both:

\`\`\`python
print(a ^ b)  # {1, 2, 5, 6}
\`\`\`

| Operation | Symbol | Meaning |
|---|---|---|
| Union | \`a \| b\` | Everything in either |
| Intersection | \`a & b\` | Only what both share |
| Difference | \`a - b\` | In \`a\` but not \`b\` |
| Symmetric diff | \`a ^ b\` | In one but not both |

---

## Set Methods at a Glance

| Method | What it does |
|---|---|
| \`.add(x)\` | Add item \`x\` |
| \`.remove(x)\` | Remove \`x\` (error if missing) |
| \`.discard(x)\` | Remove \`x\` (silent if missing) |
| \`.union(other)\` | All items from both sets |
| \`.intersection(other)\` | Items in both sets |
| \`.difference(other)\` | Items only in this set |
| \`len(set)\` | Number of items |
| \`x in set\` | Check membership |

---

## Try This (Sets)

\`\`\`python
team_a = {"Elijah", "Sarah", "James"}
team_b = {"Sarah", "Michael", "James"}

print("On both teams:", team_a & team_b)
print("Only on team A:", team_a - team_b)
print("Everyone:", team_a | team_b)

votes = ["yes", "no", "yes", "yes", "no", "maybe"]
unique_votes = set(votes)
print("Unique votes:", unique_votes)
\`\`\`

Then try:
- Use \`.discard()\` to remove a name that isn't in the set — notice no error
- Convert a list with lots of repeated values into a set to see deduplication in action

---

## What You Learned

**Dictionaries:**
- Store data as key-value pairs using \`{key: value}\`
- Access values by key, safely with \`.get()\`
- Check keys with \`in\`
- Add, change, and delete keys
- Loop with \`.keys()\`, \`.values()\`, \`.items()\`
- Merge with \`.update()\`
- Nest dictionaries for structured data

**Sets:**
- Store only unique values
- \`{}\` is an empty dict — use \`set()\` for an empty set
- Convert a list to a set to remove duplicates
- Sets are unordered — no index access
- Use \`.discard()\` for safe removal
- Combine sets with \`|\`, \`&\`, \`-\`, \`^\`

| Structure | Ordered | Unique | Key access | Use when... |
|---|---|---|---|---|
| List | Yes | No | By index | Order matters, duplicates OK |
| Tuple | Yes | No | By index | Fixed, unchangeable data |
| Dictionary | Yes* | Keys unique | By label | Labelled, structured data |
| Set | No | Yes | No index | Uniqueness matters |

*Dictionaries preserve insertion order in Python 3.7+.

---

## What Comes Next

You can now store any kind of data — by position, by label, or by uniqueness.

Next, you'll learn how to repeat actions without repeating code.

**Loops (for / while)**

`
}
