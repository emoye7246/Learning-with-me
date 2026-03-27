export const lessonCommitsHistory = {
  id: "commits-history",
  title: "Commits & History",

  article: `
## Commits & History

Your commit history is a record of every decision you made. Good history is a superpower.

---

## What Makes a Good Commit

**Small and focused.** One commit = one logical change.

\`\`\`
# Bad
"Changed everything"

# Good
"Add email validation to signup form"
"Fix division by zero in calculate_average"
"Remove deprecated send_email function"
\`\`\`

**Descriptive message.** Anyone should understand what changed and why.

**Often.** Commit when something works. Not at the end of the day.

---

## Reading the Log

\`\`\`bash
git log
\`\`\`

Shows full history with hash, author, date, message.

\`\`\`bash
git log --oneline
\`\`\`

Compact view. Just hash and message.

\`\`\`bash
git log --oneline --graph
\`\`\`

Shows branch and merge history as ASCII art.

---

## Inspecting a Commit

\`\`\`bash
git show abc1234
\`\`\`

Shows exactly what changed in that commit.

---

## Going Back in Time (Read Only)

\`\`\`bash
git checkout abc1234
\`\`\`

Your working directory becomes the state at that commit. You're in "detached HEAD" state.

To get back:

\`\`\`bash
git checkout main
\`\`\`

This is for exploring, not editing.

---

## Reverting a Commit

\`\`\`bash
git revert abc1234
\`\`\`

Creates a new commit that undoes the changes from \`abc1234\`. Safe — history is preserved.

Use this to undo a specific past commit without rewriting history.

---

## Amending the Last Commit

You just committed. You realize you forgot a file or made a typo in the message.

\`\`\`bash
git add forgotten_file.py
git commit --amend -m "Better commit message"
\`\`\`

Replaces the last commit. Only do this before pushing — amending shared history causes problems.

---

## Viewing File History

\`\`\`bash
git log main.py            # commits that touched this file
git log -p main.py         # diffs included
\`\`\`

---

## Finding When a Bug Was Introduced

\`\`\`bash
git bisect start
git bisect bad             # current commit is broken
git bisect good abc1234    # this commit was good
\`\`\`

Git walks through history and helps you binary-search for the breaking commit.

---

## What you just learned

- What makes a good commit message
- How to read and navigate commit history
- How to inspect, revert, and amend commits
- How to trace changes to a specific file

---

## What comes next

Next lesson: **Branches & Experimentation**
`,
};
