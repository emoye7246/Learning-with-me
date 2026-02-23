export const lessonDesigningUserInteractionTerminal = {
  id: "designing-user-interaction-terminal",
  title: "Designing User Interaction in the Terminal",

  article: `
## Designing User Interaction in the Terminal

## Concept Introduction

CLI usability depends on flow clarity.

Users should always know:

- what the program expects
- what options they have
- what happened after each action

If any of those are unclear,
the user will guess.

Guessing causes mistakes.

---

## Why This Matters in Real Software

A confusing prompt is a broken interface.

Even if the logic is correct, poor interaction design causes errors and support overhead.

Good terminal UX makes tools faster and safer to use.

---

## Example

\`\`\`python

def show_menu():
    print("\\nTask CLI")
    print("1) Add task")
    print("2) List tasks")
    print("3) Exit")


def main():
    tasks = []

    while True:
        show_menu()
        choice = input("Choose 1-3: ").strip()

        if choice == "1":
            title = input("Task title: ").strip()
            if title:
                tasks.append(title)
                print("Saved.")
            else:
                print("Task title cannot be empty.")
        elif choice == "2":
            print(tasks if tasks else "No tasks yet.")
        elif choice == "3":
            print("Goodbye.")
            break
        else:
            print("Invalid option. Choose 1, 2, or 3.")


if __name__ == "__main__":
    main()
\`\`\`

Prompts, choices, and feedback are explicit.

The user never has to wonder:

- what to enter
- what happened
- what to do next

---

## Common Mistakes in CLI Programs

- Using vague prompts like \`Enter:\`.
- Accepting empty input when input is required.
- Giving no confirmation after an action.
- Exiting silently without status messages.

---

## Design Thinking

Model the interaction like a conversation:

1. Program asks clearly.
2. User responds.
3. Program confirms or corrects.
4. Program shows next step.

Each cycle should reduce ambiguity.

A useful standard:

every user action should receive clear feedback.

---

## Implementation Checklist

- Write prompts that include expected format.
- Validate user input immediately.
- Print confirmation for successful actions.
- Print actionable error messages for invalid input.
- Keep menu options stable and consistently numbered.

Aim for consistency over cleverness.

Consistent flow feels professional.

---

## What This Enables

You can design CLI tools that people can use quickly without guessing.

That is a direct quality signal in real software.
`,
};
