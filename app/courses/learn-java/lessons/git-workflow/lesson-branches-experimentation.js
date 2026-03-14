export const lessonBranchesExperimentation = {
  id: "branches-experimentation",
  title: "Branches and Experimentation",
  hasChallenge: false,
  article: `
## Branches and Experimentation

Branches let you work on features or fixes in isolation without affecting the main codebase. They're the foundation of team collaboration.

---

## What Is a Branch?

A branch is a lightweight, movable pointer to a commit. When you create a branch, you get your own line of development that diverges from main.

\`\`\`
main:    A → B → C
                  \\
feature:           D → E
\`\`\`

Changes on \`feature\` don't affect \`main\` until you merge.

---

## Creating and Switching Branches

\`\`\`bash
# Create a new branch
git branch feature/user-login

# Switch to it
git checkout feature/user-login

# Create and switch in one command (preferred)
git checkout -b feature/user-login

# Modern syntax (Git 2.23+)
git switch -c feature/user-login
\`\`\`

---

## Listing Branches

\`\`\`bash
git branch           # local branches
git branch -r        # remote branches
git branch -a        # all branches
\`\`\`

The current branch has a \`*\` next to it.

---

## Merging

Merge a feature branch back into main when the work is done:

\`\`\`bash
git checkout main
git merge feature/user-login
\`\`\`

**Fast-forward merge** (no new commits on main since branching):
\`\`\`
Before: main → C, feature → E (C → D → E)
After:  main → E
\`\`\`

**Merge commit** (main has moved forward too):
\`\`\`
main:    A → B → C → F (merge commit)
feature: A → B → D → E ↗
\`\`\`

---

## Resolving Merge Conflicts

When the same lines are changed on both branches, Git can't auto-merge:

\`\`\`
<<<<<<< HEAD
    return "Hello, " + name;
=======
    return "Hi, " + name.trim();
>>>>>>> feature/greeting
\`\`\`

To resolve:
1. Edit the file to the correct final state (remove the conflict markers)
2. \`git add <file>\`
3. \`git commit\`

---

## Deleting a Branch

After merging, delete the branch to keep things tidy:

\`\`\`bash
git branch -d feature/user-login      # safe delete (fails if unmerged)
git push origin --delete feature/user-login  # delete remote branch too
\`\`\`

---

## Branch Naming Conventions

| Pattern | Use |
|---|---|
| \`feature/description\` | New features |
| \`fix/description\` | Bug fixes |
| \`refactor/description\` | Code cleanup |
| \`docs/description\` | Documentation only |
| \`release/1.2.0\` | Release branches |

---

## The Golden Rule

**Never commit directly to main.**

Always work on a branch. This keeps main always deployable and lets teammates review your work before it merges.

---

## What You Learned

- Branches isolate work so features don't break main
- \`git checkout -b\` creates and switches to a new branch
- \`git merge\` integrates completed work back; conflicts require manual resolution
- Delete merged branches to keep the repo tidy
- Never commit directly to main

Continue to: **Pull Requests and Code Review**
`,
};
