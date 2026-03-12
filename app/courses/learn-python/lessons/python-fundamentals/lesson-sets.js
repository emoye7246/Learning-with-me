export const lessonSets = {
  id: "sets",
  title: "Sets",

  article: `
## Introduction

Lists keep items in order.
Tuples keep items fixed.

Sets do something different.

A set keeps only **unique** values.

No duplicates allowed.

---

## What Is a Set?

A set is an unordered collection of unique items.

Sets use curly braces \`{}\`.

Try this:

\`\`\`python
numbers = {1, 2, 3, 3, 4, 4, 5}
print(numbers)
\`\`\`

Save.
Run it.

Notice something.

The duplicate values disappeared.

Sets remove them automatically.

---

## Sets Have No Order

Lists have positions.
Tuples have positions.
Sets do not.

\`\`\`python
tags = {"python", "code", "beginner"}
print(tags)
\`\`\`

The output may appear in any order.

That's by design.

Because sets are built for fast membership checking, not for ordered access.

---

## Adding to a Set

\`\`\`python
fruits = {"apple", "banana"}
fruits.add("cherry")
print(fruits)
\`\`\`

If you add something that already exists, nothing changes.

\`\`\`python
fruits.add("apple")
print(fruits)   # still just apple, banana, cherry
\`\`\`

---

## Removing from a Set

\`\`\`python
fruits = {"apple", "banana", "cherry"}
fruits.remove("banana")
print(fruits)
\`\`\`

If the item doesn't exist, \`remove()\` raises an error.

Use \`discard()\` instead to remove safely:

\`\`\`python
fruits.discard("grape")   # No error if it doesn't exist
\`\`\`

---

## Checking Membership

Sets are extremely fast at checking if something exists.

\`\`\`python
allowed_users = {"alice", "bob", "charlie"}

print("alice" in allowed_users)    # True
print("eve" in allowed_users)      # False
\`\`\`

This is one of the main reasons to use a set over a list.

---

## Set Operations

Sets support mathematical operations you may recognize.

\`\`\`python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a & b)   # Intersection: {3, 4}  — what both share
print(a | b)   # Union: {1, 2, 3, 4, 5, 6}  — everything combined
print(a - b)   # Difference: {1, 2}  — what's in a but not b
\`\`\`

Try this:

\`\`\`python
team_a = {"Alice", "Bob", "Carlos"}
team_b = {"Bob", "Diana", "Carlos"}

print(team_a & team_b)   # Who is on both teams?
\`\`\`

---

## When to Use a Set

Use a set when:

- You only care about unique values
- You want to remove duplicates from a list
- You need fast membership checking
- You're comparing groups of items

\`\`\`python
# Remove duplicates from a list
emails = ["a@test.com", "b@test.com", "a@test.com"]
unique_emails = set(emails)
print(unique_emails)
\`\`\`

---

## Try This

- Create a set of five numbers, including some duplicates.
  Print it and observe what gets kept.

- Create two sets of names.
  Find who appears in both.

- Start with a list of repeated items.
  Convert it to a set to remove duplicates.

---

## What You Learned

You now understand:

- What a set is
- That sets only hold unique values
- That sets are unordered
- How to add and remove items
- How to check membership
- How to use intersection, union, and difference

Sets are not for storing ordered data.

They're for answering questions: "Is this value here? What do these two groups share?"

---

## What Comes Next

You've seen how to organize data by position, immutability, and uniqueness.

Now the most powerful collection type.

**Dictionaries**
`,
};
