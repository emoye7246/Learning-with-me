export const lessonVenv = {
  id: "venv",
  title: "Virtual Environments & venv",
  hasChallenge: false,

  article: `
## Virtual Environments & venv

This might seem like an odd thing to learn before you've written any Python code.

Bear with it. This lesson will save you real frustration later — and once you understand why, you'll always do it.

---

## First: What Is a Package?

When you build things with Python, you'll often use code that other developers have already written and shared.

These shared pieces of code are called **packages**.

For example:
- \`requests\` — a package that lets Python talk to websites
- \`rich\` — a package that makes terminal output look nice
- \`pandas\` — a package for working with data

You install packages with a tool called \`pip\` (covered next lesson).

The key thing to understand now: **packages get installed somewhere on your computer.** Where they get installed matters a lot.

---

## The Problem: Global Installations

By default, when you install a package, it gets installed **globally** — meaning it's available to every Python project on your computer.

This sounds convenient. It quickly becomes a problem.

Imagine this situation:

- You start learning Python. You install version 1.0 of a package.
- Six months later, you start a second project that needs version 2.0 of the same package.
- But version 2.0 has changes that break how you used it in your first project.

You can only have one global version. Updating breaks the old project. Not updating means the new project doesn't work.

This is called a **dependency conflict**, and it happens constantly if you install everything globally.

---

## The Solution: Virtual Environments

A **virtual environment** is a self-contained folder that holds:
- its own copy of Python
- its own set of installed packages

When you activate a virtual environment, Python uses *that* folder's packages — not the global ones.

Think of it like this: instead of one shared toolbox for every project, each project gets its own private toolbox. Tools in one toolbox don't affect the others.

**The result:** every project has exactly what it needs, and nothing it doesn't. No conflicts. No surprises.

---

## Why Do This Now, Before Writing Any Code?

Because the best time to start a habit is before you have bad habits to undo.

If you start every project with a virtual environment from the beginning:
- You'll never hit dependency conflicts
- Your projects will be easy to share with others
- Your setup will match how professional developers actually work

It takes about 10 seconds per project. You'll do it without thinking before long.

---

## How to Create a Virtual Environment

Open your terminal. Navigate into your project folder.

Then run:

\`\`\`bash
python -m venv .venv
\`\`\`

Breaking this down:
- \`python -m\` — run Python's built-in module runner
- \`venv\` — the module that creates virtual environments
- \`.venv\` — the name of the folder it creates (the dot makes it hidden from file listings)

After running this, you'll see a \`.venv\` folder inside your project. Don't edit or delete it manually — it's managed by Python.

---

## How to Activate It

You have to **activate** the environment before using it. Activation tells your terminal to use this environment's Python and packages.

**Mac / Linux:**

\`\`\`bash
source .venv/bin/activate
\`\`\`

**Windows (Command Prompt):**

\`\`\`bash
.venv\\Scripts\\activate
\`\`\`

**Windows (PowerShell):**

\`\`\`bash
.venv\\Scripts\\Activate.ps1
\`\`\`

When it's active, your terminal prompt will change to show \`(.venv)\` at the start. That's your confirmation that you're inside the environment.

---

## How to Confirm It's Working

\`\`\`bash
which python   # Mac / Linux
where python   # Windows
\`\`\`

The path shown should point inside your \`.venv\` folder, not to a system-wide Python location. If it does, you're good.

---

## Installing Packages Into the Environment

Once activated, any package you install with \`pip\` goes into *this* environment only — not globally.

\`\`\`bash
pip install requests
\`\`\`

Other projects won't see \`requests\`. Your global Python won't see it either. It's completely contained.

---

## How to Deactivate

When you're done working on a project:

\`\`\`bash
deactivate
\`\`\`

This returns your terminal to normal. You're back to system Python.

---

## Keep .venv Out of Git

When you eventually use Git to track your code (covered in Course 10), you should **never commit the \`.venv\` folder**.

It's large, it's local infrastructure, and it doesn't belong in version control. Other developers create their own copy using the project's dependency file.

Add this to a \`.gitignore\` file in your project:

\`\`\`text
.venv/
\`\`\`

You'll learn more about Git and \`.gitignore\` later. For now, just know: \`.venv\` stays local.

---

## The Pattern You'll Use Every Time

Every time you start a new Python project:

1. Create a folder for the project
2. Open your terminal in that folder
3. Run \`python -m venv .venv\`
4. Run the activation command for your OS
5. Install what you need with \`pip\`
6. Work

That's it. After a few times, it becomes automatic.

---

## Try This

Practice the full flow now:

1. Create a folder called \`practice-env\` somewhere on your computer
2. Open your terminal and navigate into it
3. Run \`python -m venv .venv\`
4. Activate the environment
5. Run \`pip install rich\`
6. Run \`pip list\` — you should see \`rich\` in the list
7. Run \`deactivate\`
8. Run \`pip list\` again — \`rich\` is no longer visible (it's only in the environment)

---

## What you just learned

- What packages are and why where they're installed matters
- Why installing everything globally causes problems
- What a virtual environment is and what problem it solves
- How to create, activate, verify, and deactivate a \`.venv\`
- Why \`.venv\` doesn't go into Git

---

## What comes next

Next lesson: **Managing Packages with pip**
`,
};
