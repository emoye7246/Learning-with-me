export const lessonNoneType = {
    id: "none-type",
    title: "None",
    hasChallenge: false,

    article: `
## None

Python has a special value called \`None\`.

It represents the absence of a value.

Not zero.
Not an empty string.
Not False.

Nothing.

---

## What None Looks Like

\`\`\`python
result = None
print(result)        # None
print(type(result))  # <class 'NoneType'>
\`\`\`

\`None\` has its own type: \`NoneType\`.

---

## When None Appears

### 1. Functions that return nothing

\`\`\`python
def greet(name):
    print("Hello, " + name)

result = greet("Elijah")
print(result)  # None
\`\`\`

If a function doesn't explicitly return a value,
Python returns \`None\` automatically.

---

### 2. Uninitialized variables

\`\`\`python
winner = None  # We don't know the winner yet

# ... some logic ...

if winner is None:
    print("No winner yet.")
\`\`\`

Using \`None\` as an initial placeholder is a common pattern.

---

### 3. Failed lookups

Some dictionary and list methods return \`None\`
when something isn't found.

\`\`\`python
my_dict = {"name": "Elijah"}
result = my_dict.get("age")  # key doesn't exist
print(result)  # None
\`\`\`

---

## Checking for None

Always use \`is\` to check for \`None\`, not \`==\`.

\`\`\`python
value = None

# Correct
if value is None:
    print("No value")

# Also correct
if value is not None:
    print("Has value")
\`\`\`

The reason: \`is\` checks identity (is this the exact None object?).
\`==\` checks equality (is this equal to None?).

For \`None\`, \`is\` is the right choice.

---

## None Is Falsy

\`None\` evaluates to \`False\` in a boolean context.

\`\`\`python
value = None

if not value:
    print("No value")  # This runs
\`\`\`

Be careful though.
An empty string or \`0\` would also trigger this.

When you specifically mean "is this None?", use \`is None\`.

---

## None vs Other Empty Values

\`\`\`python
print(None == 0)      # False
print(None == "")     # False
print(None == False)  # False
print(None == [])     # False
print(None is None)   # True
\`\`\`

\`None\` is not equivalent to any other empty value.

---

## Try This

\`\`\`python
def find_item(items, target):
    for item in items:
        if item == target:
            return item
    return None  # Explicitly return None if not found

result = find_item(["apple", "banana", "cherry"], "grape")

if result is None:
    print("Item not found.")
else:
    print("Found:", result)
\`\`\`

---

## What You Learned

- \`None\` represents the intentional absence of a value
- Functions return \`None\` by default
- Use \`is None\` / \`is not None\` for checks
- \`None\` is falsy but not equal to other falsy values

---

## What Comes Next

You've covered the core data types.

Now it's time to learn how to repeat actions in your programs.

**Loops**

`
}
