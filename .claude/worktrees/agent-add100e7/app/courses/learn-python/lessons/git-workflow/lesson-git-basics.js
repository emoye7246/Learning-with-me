export const lessonGitBasics = {
  id: "git-basics",
  title: "Git Basics",

  article: `
## Git Basics

Git runs in the terminal. These are the commands you'll use every day.

---

## Initialize a Repository

\`\`\`bash
git init
\`\`\`

Run this in your project folder. Creates a hidden \`.git\` folder. Your project is now a Git repository.

---

## Check Status

\`\`\`bash
git status
\`\`\`

Shows which files are modified, staged, or untracked. Run this constantly.

---

## Stage Changes

\`\`\`bash
git add main.py          # stage one file
git add .                # stage all changed files
git add src/             # stage an entire folder
\`\`\`

Staging tells Git: "include this in the next commit."

---

## Commit

\`\`\`bash
git commit -m "Add user login function"
\`\`\`

Creates a snapshot of your staged changes. The message describes what you did.

Write messages in the imperative: "Add", "Fix", "Update", "Remove" — not "Added" or "Adding".

---

## View Commit History

\`\`\`bash
git log
git log --oneline         # compact view
git log --oneline -10     # last 10 commits
\`\`\`

---

## See What Changed

\`\`\`bash
git diff              # unstaged changes
git diff --staged     # staged changes not yet committed
\`\`\`

---

## Undo Unstaged Changes

\`\`\`bash
git restore main.py   # discard changes to one file
git restore .         # discard all unstaged changes
\`\`\`

**Caution:** This permanently discards your changes. There's no undo.

---

## Undo Staging

\`\`\`bash
git restore --staged main.py
\`\`\`

Moves the file back to unstaged. Your changes are preserved.

---

## .gitignore

Create a \`.gitignore\` file to tell Git which files to ignore.

\`\`\`text
.venv/
__pycache__/
*.pyc
.env
.DS_Store
\`\`\`

Files listed here won't appear in \`git status\` and won't be tracked.

---

## The Daily Workflow

\`\`\`bash
# 1. Check what's changed
git status

# 2. Review changes
git diff

# 3. Stage changes
git add .

# 4. Commit with a clear message
git commit -m "Add feature X"

# 5. Repeat
\`\`\`

---

## Common Mistakes

- Committing sensitive data (\`.env\` files with API keys).
- Writing vague commit messages: "fix stuff", "changes", "update".
- Not committing often enough.
- Staging everything with \`git add .\` without checking what changed first.

---

## Try this

1. Create a new folder and run \`git init\`.
2. Create \`main.py\` with some code.
3. Run \`git status\` — see the untracked file.
4. Stage and commit it.
5. Make a change. Run \`git diff\`.
6. Stage and commit the change.
7. Run \`git log --oneline\` to see both commits.

---

## What you just learned

- How to initialize a repository and track files
- The stage → commit workflow
- How to view history and changes
- How to undo unstaged and staged changes

---

## What comes next

Next lesson: **GitHub Fundamentals**
`,
};
