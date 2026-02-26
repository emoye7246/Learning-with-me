export const lessonScriptsVsSoftware = {
  id: "scripts-vs-software",
  title: "Scripts vs Software",

  article: `
## Scripts vs Software

When beginners hear "script" and "software," they often assume one is correct and the other is wrong.

That is not true.

Both are useful.

The real skill is knowing **when your code has outgrown a script mindset** and needs stronger software structure.

This lesson will help you make that decision clearly.

---

## What Is a Script?

A script is usually a short program built to do one focused job:

- rename files
- clean text
- generate one report
- automate a repetitive task

Scripts are often:

- fast to write
- easy to run
- temporary or single-purpose

That is a strength, not a weakness.

If you only need one small result, a script is exactly the right tool.

---

## What Is Software?

Software is code that is expected to **live longer and change over time**.

It may start small, but it grows:

- more features are added
- more users rely on it
- bugs must be fixed safely
- new developers may need to understand it

At that point, "just make it work" is no longer enough.

Now you need clear structure, predictable behavior, and code boundaries that make change safer.

---

## The Real Difference

The difference is not file size.

The difference is **lifespan and change pressure**.

A quick way to think about it:

- Script: built for one task, low change pressure.
- Software: built for ongoing change, higher reliability needs.

So the question is not:
"Is this code small?"

The better question is:
"Will this code need to change again and again?"

If yes, treat it like software early.

---

## Example 1: A Script Mindset

\`\`\`python
name = input("Name: ").strip()
email = input("Email: ").strip()

if "@" not in email:
    print("Invalid email")
else:
    print(f"Saving user: {name} ({email})")
\`\`\`

This is totally valid for a quick one-off workflow.

It is direct and short.

But notice what is mixed together:

- user input
- validation rules
- output behavior

When features increase, this style becomes hard to extend safely.

---

## Example 2: The Same Behavior, Structured as Software

\`\`\`python
def get_user_input():
    name = input("Name: ").strip()
    email = input("Email: ").strip()
    return name, email


def is_valid_email(email):
    return "@" in email


def save_user(name, email):
    print(f"Saving user: {name} ({email})")


def main():
    name, email = get_user_input()
    if not is_valid_email(email):
        print("Invalid email")
        return
    save_user(name, email)


if __name__ == "__main__":
    main()
\`\`\`

This version still performs the same task.

The difference is **separation of responsibility**:

- \`get_user_input()\` handles input collection
- \`is_valid_email()\` handles one business rule
- \`save_user()\` handles persistence behavior
- \`main()\` coordinates the flow

Now each part is easier to test, change, and debug.

This is the foundation of maintainable software.

---

## When to Promote a Script into Software Structure

Use this practical trigger list.

If two or more are true, refactor:

- repeated logic
- multiple input/output paths
- new features added every week
- fear of breaking old behavior

- someone else needs to read or modify the code

If the code keeps growing, organize earlier than feels necessary.

Early structure usually saves time later.

---

## Common Mistakes

- Keeping everything in one file because refactoring feels like "extra work."
- Mixing input, logic, and file operations inside one function.
- Delaying structure until the code is already painful to change.
- Thinking "working now" means "safe to evolve."

Working code is not always maintainable code.

---

## Practice Exercise

Take any script you already wrote and do this:

1. Split it into \`main()\` plus at least 3 focused functions.
2. Move validation into its own function.
3. Add one new feature and observe what changed.

Then reflect:

- Did the new feature require editing many lines?
- Could you identify where each concern belongs?
- Is the code easier to explain to someone else?

That reflection is part of becoming a strong engineer.

---

## Final Perspective

You do not need enterprise architecture for every small script.

You do need the judgment to recognize when code is becoming real software.

That shift in thinking is what allows Python projects to scale without collapsing.

---

## What You Can Now Do

You can now decide when to keep code as a script and when to restructure it as maintainable software.
`,
};
