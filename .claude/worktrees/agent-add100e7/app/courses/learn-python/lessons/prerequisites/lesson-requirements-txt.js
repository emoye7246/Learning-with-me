export const lessonRequirementsTxt = {
  id: "requirements-txt",
  title: "requirements.txt & pyproject.toml",
  hasChallenge: false,

  article: `
## requirements.txt & pyproject.toml

You've installed packages. Now someone else needs to run your project.

How do they know what to install?

You tell them with a dependency file.

---

## requirements.txt

The classic approach. A plain text file listing packages and versions.

\`\`\`text
requests==2.31.0
rich==13.7.0
click==8.1.7
\`\`\`

Anyone with this file runs:

\`\`\`bash
pip install -r requirements.txt
\`\`\`

They get exactly the same packages you had.

---

## Generating requirements.txt

After installing your packages:

\`\`\`bash
pip freeze > requirements.txt
\`\`\`

\`pip freeze\` outputs everything in the current environment with exact versions. The \`>\` writes it to the file.

Check what it generated:

\`\`\`bash
cat requirements.txt
\`\`\`

---

## The Problem with pip freeze

\`pip freeze\` captures everything — including dependencies of dependencies.

You might only directly use 3 packages, but freeze might list 20.

That's fine for reproducibility. Less fine for readability.

The solution: maintain requirements.txt manually, or use a tool like \`pip-tools\`.

---

## Two-File Pattern

Many projects split it:

\`\`\`text
requirements.txt       ← production deps (manually maintained)
requirements-dev.txt   ← dev tools: pytest, black, ruff
\`\`\`

Install dev deps with:

\`\`\`bash
pip install -r requirements-dev.txt
\`\`\`

---

## pyproject.toml

The modern standard. Defined in PEP 517/518 and used by tools like Poetry, Hatch, and pip itself.

\`\`\`toml
[project]
name = "my-tool"
version = "0.1.0"
requires-python = ">=3.11"
dependencies = [
    "requests>=2.28",
    "rich>=13.0",
]

[project.optional-dependencies]
dev = [
    "pytest",
    "ruff",
]
\`\`\`

You don't need pyproject.toml for simple scripts. But once you're packaging or collaborating, it's the right choice.

---

## When to Use What

| Situation | Use |
|---|---|
| Simple script, one dev | requirements.txt |
| Team project, reproducibility | requirements.txt with pinned versions |
| Distributable package | pyproject.toml |
| Modern tooling (Poetry, Hatch) | pyproject.toml |

---

## The Setup Ritual

Every time someone clones your project:

\`\`\`bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python main.py
\`\`\`

That's the full path from zero to running.

---

## Common Mistakes

- Forgetting to update requirements.txt after installing new packages.
- Committing \`.venv\` instead of \`requirements.txt\`.
- Using \`pip freeze\` on a polluted global environment.
- Sharing a project without any dependency file at all.

---

## Try this

1. Create a new project folder with a virtual environment.
2. Activate it.
3. Install \`requests\` and \`rich\`.
4. Run \`pip freeze > requirements.txt\`.
5. Open the file and look at what's in it.
6. Create a new empty environment.
7. Run \`pip install -r requirements.txt\`.
8. Verify both packages are present.

---

## What you just learned

- What \`requirements.txt\` is and how to create it
- How \`pip freeze\` works and its limitations
- What \`pyproject.toml\` is and when to use it
- The standard project setup ritual

---

## What comes next

Next lesson: **Common Setup Issues (and How to Fix Them)**
`,
};
