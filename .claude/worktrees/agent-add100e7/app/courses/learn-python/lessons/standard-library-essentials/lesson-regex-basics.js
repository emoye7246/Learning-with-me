export const lessonRegexBasics = {
  id: "regex-basics",
  title: "re: Regular Expressions Basics",

  article: `
## Regular Expressions Basics

The \`re\` module lets you search, match, and extract text patterns.

It is powerful.

It is also easy to overuse.

---

## Good Use Cases

- finding emails in text
- validating simple formats
- extracting IDs from logs
- cleaning repeated text patterns

---

## Example

\`\`\`python
import re

text = "Order ID: 48291"
match = re.search(r"\\d+", text)

if match:
    print(match.group())
\`\`\`

---

## Practical Rule

Use regular expressions when the pattern is genuinely pattern-shaped.

If a simple string method solves it more clearly, use the string method.

The goal is readable code, not clever code.
`,
};
