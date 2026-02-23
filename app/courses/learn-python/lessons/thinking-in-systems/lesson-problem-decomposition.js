export const lessonProblemDecomposition = {
  id: "problem-decomposition",
  title: "Problem Decomposition",

  article: `
## Problem Decomposition

## Introduction

"This feels too big" is a design signal.

Usually the problem is not coding skill.

The problem is that the task is still one large block in your head.

Decomposition turns ambiguity into steps.

Steps can be tested.

Tested steps can be shipped.

---

## Mental Model

Break work into layers:

1. Input: what data enters the system?
2. Process: what transformations happen?
3. Output: what result should be produced?

Then split process into functions,
where each function has one responsibility.

Think "small contracts" between parts.

Each part should be understandable on its own.

---

## Small Code Examples

### Example 1: Split parsing from calculation

\`\`\`python
def parse_price(text):
    return float(text)

def add_tax(amount):
    return amount * 1.08

price = parse_price("10.0")
final = add_tax(price)
print(final)
\`\`\`

Two responsibilities:

- convert input
- apply business rule

---

### Example 2: Separate rule from iteration

\`\`\`python
def is_passing(score):
    return score >= 70

scores = [55, 72, 88]
passing = [s for s in scores if is_passing(s)]
print(passing)
\`\`\`

When rules change,
you edit one function,
not every loop.

---

### Example 3: Plan first, then implement

\`\`\`python
# goal: summarize expenses
# step 1: validate input list
# step 2: compute total
# step 3: compute average
# step 4: print summary
\`\`\`

A short written plan prevents tangled code.

Design first.

Then type.

---

## Common Mistakes

- Starting to code before defining input/output clearly.
- Putting validation, computation, and printing in one long function.
- Decomposing too late (after code becomes tangled).
- Creating many functions with unclear responsibilities.
- Skipping a milestone plan and trying to build everything at once.

---

## Practice Prompts

- Choose a small tool idea and write only input/process/output first.
- Take a long function and split it into 2-3 focused functions.
- For an old script, label each block as validation, processing, or output.
- Create a milestone list for a new script before writing any Python.

No full solutions.

Build in phases.

---

## Reflection Questions

- Which part do you skip most: clarifying inputs, defining outputs, or planning milestones?
- Where does your current code mix too many responsibilities?
- How does writing a plan affect your speed and confidence?

---

## What This Unlocks

You can approach larger problems without overwhelm.

You can create structure before implementation,
which makes progress steady and testable.

---

## What You Can Now Do

You can break ambiguous programming tasks into small, explicit, buildable steps.

---

## Next Lesson

Next course, you will use this system mindset to build larger console applications.

You now have the reasoning habits required to do that well.
`,
};
