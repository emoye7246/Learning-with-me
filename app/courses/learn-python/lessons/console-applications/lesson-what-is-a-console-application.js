export const lessonWhatIsAConsoleApplication = {
  id: "what-is-a-console-application",
  title: "What Is a Console Application?",

  article: `
## What Is a Console Application?

## Concept Introduction

A console application is a real program that runs in the terminal.

It does not use buttons, windows, or visual screens.

It uses text.

The user types commands.

The program responds with output.

This is still software engineering.

Only the interface layer is different.

---

## Why This Matters in Real Software

Many production tools are CLI-first.

Especially in engineering teams.

Common examples:

- deployment scripts
- data migration tools
- log analysis utilities
- internal admin tools
- setup and build automation

CLI tools are fast to build and fast to run.

If your flow is clear, they can be extremely reliable.

---

## Example

\`\`\`python

def run_calculator():
    print("Simple calculator")
    left = float(input("First number: "))
    op = input("Operator (+, -, *, /): ")
    right = float(input("Second number: "))

    if op == "+":
        print("Result:", left + right)
    elif op == "-":
        print("Result:", left - right)
    elif op == "*":
        print("Result:", left * right)
    elif op == "/":
        print("Result:", left / right)
    else:
        print("Unknown operator")


if __name__ == "__main__":
    run_calculator()
\`\`\`

Notice the structure:

- one clear entry point
- predictable input prompts
- explicit branching for operations
- immediate feedback for user actions

This is already a usable utility pattern.

---

## Common Mistakes in CLI Programs

- Treating a CLI app like a one-off script with no clear flow.
- Not showing the user what to do next.
- Skipping input validation and crashing on bad input.
- Mixing unrelated behavior in one large block.

---

## Design Thinking

Before coding, define the contract:

1. Problem: what friction does the tool remove?
2. Input: what data must the user provide?
3. Output: what result should the tool return?
4. Failure paths: what can go wrong and how should that be handled?

If this contract is vague, implementation drifts quickly.

---

## Implementation Checklist

- Define one clear program purpose.
- Write the expected user flow in 3-6 steps.
- Keep one entry function that controls the flow.
- Print clear prompts and clear output labels.
- Handle at least one invalid input case.

Build for predictability first.

Then optimize.

---

## What This Enables

You can build software that solves real workflow problems without UI overhead.

That is the entry point to practical developer tooling.
`,
};
