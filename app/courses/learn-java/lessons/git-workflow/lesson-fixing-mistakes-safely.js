export const lessonFixingMistakesSafely = {
  id: "fixing-mistakes-safely",
  title: "Fixing Mistakes Safely",
  hasChallenge: false,
  article: `
## Fixing Mistakes Safely

Git makes most mistakes recoverable. Knowing the right command for each situation prevents panic and data loss.

---

## Undo Last Commit (Keep Changes)

You committed too early. Keep the changes, just undo the commit:

\`\`\`bash
git reset --soft HEAD~1
# The commit is gone, but changes are still staged
\`\`\`

---

## Undo Last Commit (Discard Changes)

You committed something you don't want at all:

\`\`\`bash
git reset --hard HEAD~1
# WARNING: this permanently discards the changes
\`\`\`

Only use \`--hard\` on commits you haven't pushed yet.

---

## Fix the Last Commit Message

\`\`\`bash
git commit --amend -m "Corrected commit message"
\`\`\`

Also use \`--amend\` to add a forgotten file to the last commit:

\`\`\`bash
git add ForgottenFile.java
git commit --amend --no-edit
\`\`\`

**Only amend commits you haven't pushed.** Amending rewrites history — if others pulled the original, you'll create conflicts.

---

## Unstage a File

You ran \`git add\` on the wrong file:

\`\`\`bash
git restore --staged ShouldNotBeHere.java
# The file stays modified on disk, just removed from staging
\`\`\`

---

## Discard Local Changes to a File

You edited a file and want to throw away those changes:

\`\`\`bash
git restore Main.java
# WARNING: local changes to Main.java are permanently lost
\`\`\`

---

## Recover a Deleted File

You deleted a file and didn't commit:

\`\`\`bash
git restore DeletedFile.java
\`\`\`

You deleted and committed, but want it back:

\`\`\`bash
git log -- DeletedFile.java    # find the last commit that had it
git checkout abc123 -- DeletedFile.java
\`\`\`

---

## git revert (Safe Undo for Shared Branches)

\`git reset\` rewrites history — don't use it on commits others have pulled.

Instead, use \`git revert\` to create a new commit that undoes a previous one:

\`\`\`bash
git revert abc123
# Creates a new commit that undoes the changes from abc123
\`\`\`

This is safe because it doesn't rewrite history.

---

## git stash (Temporary Shelf)

You need to switch branches but have uncommitted changes you're not ready to commit:

\`\`\`bash
git stash           # shelve all uncommitted changes
git checkout main   # switch freely

# Come back later:
git checkout feature/my-work
git stash pop       # restore the stashed changes
\`\`\`

List all stashes:

\`\`\`bash
git stash list
# stash@{0}: WIP on feature: abc1234 Add login form
# stash@{1}: WIP on main: def5678 Fix null check
\`\`\`

---

## The Reflog: Your Safety Net

Git keeps a log of every HEAD movement in the reflog. Even "lost" commits are recoverable within 90 days:

\`\`\`bash
git reflog
# abc1234 HEAD@{0}: commit: Add login
# def5678 HEAD@{1}: reset: moving to HEAD~1
# ghi9012 HEAD@{2}: commit: WIP changes
\`\`\`

To recover a commit you thought you lost:

\`\`\`bash
git checkout ghi9012
# or
git reset --hard ghi9012
\`\`\`

---

## Decision Tree

| Situation | Command |
|---|---|
| Undo last commit, keep changes staged | \`git reset --soft HEAD~1\` |
| Undo last commit, keep changes unstaged | \`git reset HEAD~1\` |
| Fix last commit message | \`git commit --amend\` |
| Unstage a file | \`git restore --staged <file>\` |
| Discard local edits to a file | \`git restore <file>\` |
| Undo a pushed commit safely | \`git revert <hash>\` |
| Temporarily save uncommitted changes | \`git stash\` |

---

## What You Learned

- \`git reset --soft\` undoes a commit but keeps changes; \`--hard\` discards them
- \`git revert\` is the safe way to undo already-pushed commits
- \`git stash\` shelves work in progress so you can switch contexts
- The reflog is your safety net — almost nothing is truly lost

Continue to: **Committing Your Project to GitHub**
`,
};
