export const lessonVenv = {
  id: "venv",
  title: "Virtual Environments & venv",

  article: `
## Virtual Environments & venv

Every Python project needs its own isolated world.

Without isolation, packages from one project bleed into another. Versions conflict. Things break in ways that are hard to debug.

Virtual environments fix this.

---

## The Problem Without venv

Imagine you install \`requests 2.28\` globally for Project A.

Then Project B needs \`requests 2.20\`.

You can't have both globally. One of them breaks.

Virtual environments give each project its own Python interpreter and package directory.

---

## Creating a Virtual Environment

Navigate into your project folder first.

\`\`\`bash
python -m venv .venv
\`\`\`

This creates a \`.venv\` folder. It contains a local Python interpreter and a place for packages.

Name it \`.venv\` by convention. The dot prefix hides it from file listings.

---

## Activating

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

Your prompt changes to \`(.venv)\` when active. That confirms isolation.

---

## Verifying

\`\`\`bash
which python   # Mac/Linux
where python   # Windows
\`\`\`

Should point to \`.venv/bin/python\`, not system Python.

---

## Installing into the Environment

When active, \`pip install\` goes into the environment only.

\`\`\`bash
pip install requests
\`\`\`

Other projects don't see that package.

---

## Deactivating

\`\`\`bash
deactivate
\`\`\`

Returns you to system Python.

---

## .gitignore

Never commit \`.venv\`. It's local infrastructure.

\`\`\`text
.venv/
\`\`\`

Other developers recreate it with \`pip install -r requirements.txt\`.

---

## The Daily Workflow

1. Open your project folder.
2. Activate the environment.
3. Work. Install as needed.
4. Deactivate when done.

It becomes muscle memory.

---

## Common Mistakes

- Installing packages without activating first.
- Committing \`.venv\` to Git.
- Using the wrong Python path in scripts.

---

## Try this

1. Create a folder called \`practice-env\`.
2. Inside it, run \`python -m venv .venv\`.
3. Activate it.
4. Install \`rich\` with pip.
5. Run \`pip list\` to confirm.
6. Deactivate.

---

## What you just learned

- Why virtual environments exist
- How to create, activate, and deactivate \`.venv\`
- Where pip installs packages when active
- Why \`.venv\` stays out of Git

---

## What comes next

Next lesson: **Managing Packages with pip**
`,
};
