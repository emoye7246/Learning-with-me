export const lessonWorkingWithJson = {
  id: "working-with-json",
  title: "Working with JSON",

  article: `
## Working with JSON

JSON is the universal language of data transfer.

APIs send it. Config files use it. Databases export it. If you work with data in Python, you'll work with JSON constantly.

---

## What is JSON?

JSON stands for JavaScript Object Notation. Despite the name, it's language-agnostic.

It looks like Python dictionaries and lists — with minor differences.

\`\`\`json
{
  "name": "Alice",
  "age": 30,
  "skills": ["Python", "SQL"],
  "active": true
}
\`\`\`

- Strings use double quotes only
- \`true\`/\`false\` lowercase (not \`True\`/\`False\`)
- \`null\` instead of \`None\`

---

## Reading JSON from a String

\`\`\`python
import json

raw = '{"name": "Alice", "age": 30}'
data = json.loads(raw)

print(data["name"])   # Alice
print(type(data))     # <class 'dict'>
\`\`\`

\`json.loads()\` parses a string into Python objects. "loads" = load from string.

---

## Writing Python Data to a JSON String

\`\`\`python
import json

user = {"name": "Bob", "score": 95, "active": True}
output = json.dumps(user)

print(output)
# {"name": "Bob", "score": 95, "active": true}
\`\`\`

\`json.dumps()\` converts Python objects to a JSON string.

---

## Pretty Printing

\`\`\`python
print(json.dumps(user, indent=2))
# {
#   "name": "Bob",
#   "score": 95,
#   "active": true
# }
\`\`\`

Use \`indent=2\` or \`indent=4\` when saving files or debugging.

---

## Reading JSON from a File

\`\`\`python
import json

with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(data)
\`\`\`

\`json.load()\` reads directly from a file object.

---

## Writing JSON to a File

\`\`\`python
import json

records = [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
]

with open("records.json", "w", encoding="utf-8") as f:
    json.dump(records, f, indent=2)
\`\`\`

\`json.dump()\` writes to a file object.

---

## Type Mapping

| Python | JSON |
|---|---|
| dict | object |
| list | array |
| str | string |
| int/float | number |
| True/False | true/false |
| None | null |

---

## Handling Missing Keys Safely

\`\`\`python
data = {"name": "Alice"}

name = data.get("name", "Unknown")
age = data.get("age", 0)   # doesn't crash if key is missing

print(name, age)  # Alice 0
\`\`\`

Always use \`.get()\` for keys that might not exist in API responses.

---

## Common Mistakes

- Using \`json.load()\` on a string (use \`json.loads()\` for strings).
- Trying to serialize objects Python's JSON module doesn't support (like \`datetime\`).
- Not handling \`json.JSONDecodeError\` when parsing untrusted input.

\`\`\`python
try:
    data = json.loads(raw_input)
except json.JSONDecodeError as e:
    print(f"Invalid JSON: {e}")
\`\`\`

---

## Real-World Pattern: Load, Process, Save

\`\`\`python
import json

# Load
with open("users.json", "r", encoding="utf-8") as f:
    users = json.load(f)

# Process
for user in users:
    user["email"] = user["email"].lower()

# Save
with open("users_clean.json", "w", encoding="utf-8") as f:
    json.dump(users, f, indent=2)
\`\`\`

This pattern appears constantly in data processing scripts.

---

## Try this

1. Write a Python dict to a JSON file with \`json.dump\`.
2. Read it back with \`json.load\` and print a specific field.
3. Simulate an API response string and parse it with \`json.loads\`.
4. Add error handling for invalid JSON.

---

## What you just learned

- The difference between \`load\`/\`loads\` and \`dump\`/\`dumps\`
- How Python types map to JSON
- How to read and write JSON files
- How to handle missing keys and parse errors

---

## What comes next

Next lesson: **Project: CSV Report Generator**
`,
};
