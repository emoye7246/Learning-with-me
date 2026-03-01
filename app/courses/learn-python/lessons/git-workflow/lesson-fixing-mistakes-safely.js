export const lessonFixingMistakesSafely = {
  id: "fixing-mistakes-safely",
  title: "Fixing Mistakes Safely",

  article: `
## Fixing Mistakes Safely

Everyone makes mistakes in Git. The key is knowing how to fix them without making things worse.

---

## Undo Unstaged Changes

\`\`\`bash
git restore main.py
\`\`\`

Reverts the file to the last committed state. Changes are gone permanently.

---

## Undo Staging

\`\`\`bash
git restore --staged main.py
\`\`\`

Moves the file back to unstaged. Your changes are still in the file.

---

## Fix the Last Commit Message

\`\`\`bash
git commit --amend -m "Correct message"
\`\`\`

Only do this before pushing. After pushing, it rewrites history and causes problems for collaborators.

---

## Add a File to the Last Commit

\`\`\`bash
git add forgotten.py
git commit --amend --no-edit
\`\`\`

Adds the file to the last commit without changing the message.

---

## Undo the Last Commit (Keep Changes)

\`\`\`bash
git reset --soft HEAD~1
\`\`\`

Moves the commit back to staging. Your changes are still there, ready to re-commit.

---

## Undo the Last Commit (Discard Changes)

\`\`\`bash
git reset --hard HEAD~1
\`\`\`

Removes the commit and discards all changes. Permanent.

Use with caution. Verify what you're discarding with \`git diff HEAD~1\` first.

---

## Safely Undo a Past Commit

\`\`\`bash
git revert abc1234
\`\`\`

Creates a new commit that undoes \`abc1234\`. History is preserved. Safe to use on pushed commits.

Use \`git revert\` for shared commits. Use \`git reset\` only for local commits.

---

## Recover a Deleted Branch

\`\`\`bash
git reflog
\`\`\`

Shows all recent HEAD movements, including deleted branches. Find the commit hash.

\`\`\`bash
git checkout -b recovered-branch abc1234
\`\`\`

Git keeps everything for 30 days by default. You can usually recover.

---

## The Rules

| Situation | Command | Safe after push? |
|---|---|---|
| Undo unstaged change | git restore file | Yes |
| Unstage a file | git restore --staged file | Yes |
| Fix last commit message | git commit --amend | No |
| Undo last commit, keep changes | git reset --soft HEAD~1 | No |
| Undo last commit, discard | git reset --hard HEAD~1 | No |
| Undo any commit safely | git revert HASH | Yes |

---

## Never Force Push to Shared Branches

\`\`\`bash
git push --force   # DANGER on shared branches
\`\`\`

Force push rewrites remote history. Anyone who has pulled will have conflicting history. Only use on your own unshared branches.

---

## What you just learned

- How to undo unstaged changes, staged changes, and commits
- The difference between reset and revert
- When each approach is safe to use
- How to recover from deleted branches

---

## What comes next

Next lesson: **Committing Your Course Project to GitHub**
`,
};
