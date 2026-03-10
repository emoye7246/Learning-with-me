export const lessonCollectionsCoreTools = {
  id: "collections-core-tools",
  title: "collections: Counter, defaultdict, and namedtuple",

  article: `
## collections

The \`collections\` module gives you specialized containers for common problems.

You do not need them every day.

But when you do need them, they simplify code immediately.

---

## Counter

Count repeated values without manual bookkeeping.

\`\`\`python
from collections import Counter

votes = ["red", "blue", "red", "green", "red"]
print(Counter(votes))
\`\`\`

---

## defaultdict

Provide a default value automatically when a key is missing.

\`\`\`python
from collections import defaultdict

grouped = defaultdict(list)
grouped["python"].append("loops")
\`\`\`

---

## namedtuple

Create lightweight record-like objects with named fields.

\`\`\`python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
point = Point(3, 4)
\`\`\`

---

## When to Reach for This Module

- counting items
- grouping data
- creating small structured records

These tools reduce noise and make intent obvious.
`,
};
