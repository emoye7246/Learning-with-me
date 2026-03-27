export const lessonItertoolsWorkingWithSequences = {
  id: "itertools-working-with-sequences",
  title: "itertools: Working with Sequences",

  article: `
## itertools

\`itertools\` helps you build clean loops over data without hand-writing repetitive control flow.

It is especially useful when processing sequences.

---

## High-Value Tools

- \`count()\` for endless counting
- \`cycle()\` for repeating values
- \`chain()\` for joining iterables
- \`zip_longest()\` for uneven lists
- \`combinations()\` for pairings and subsets

---

## Example

\`\`\`python
from itertools import combinations

players = ["Ana", "Bo", "Cam"]

for pair in combinations(players, 2):
    print(pair)
\`\`\`

---

## Why It Matters

Many beginners write bulky nested loops when the standard library already has a precise tool for the job.

\`itertools\` often makes data-processing code shorter and easier to trust.

Use it when the intent becomes clearer, not just because it looks advanced.
`,
};
