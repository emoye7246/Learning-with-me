export const lessonBranchesExperimentation = {
  id: "branches-experimentation",
  title: "Branches & Experimentation",

  article: `
## Branches & Experimentation

A branch is an independent line of development.

You experiment on a branch. Working code on \`main\` stays untouched. When your experiment succeeds, you merge it in.

---

## Creating a Branch

\`\`\`bash
git branch feature-login     # create a new branch
git checkout feature-login   # switch to it
\`\`\`

Or combined:

\`\`\`bash
git checkout -b feature-login
\`\`\`

Or with newer Git:

\`\`\`bash
git switch -c feature-login
\`\`\`

---

## Working on a Branch

Everything works the same. Stage, commit, repeat.

Changes on \`feature-login\` don't affect \`main\`.

\`\`\`bash
git add login.py
git commit -m "Add login function"
\`\`\`

---

## Switching Branches

\`\`\`bash
git checkout main       # switch back to main
git checkout feature-login   # back to your branch
\`\`\`

Your working directory changes to match the branch.

---

## Merging

When the feature is ready:

\`\`\`bash
git checkout main
git merge feature-login
\`\`\`

Integrates the branch changes into main.

---

## Deleting a Branch

After merging:

\`\`\`bash
git branch -d feature-login
\`\`\`

Keeps history clean.

---

## Viewing Branches

\`\`\`bash
git branch            # local branches
git branch -a         # all branches including remote
\`\`\`

---

## Merge Conflicts

When two branches change the same line, Git can't decide automatically.

\`\`\`
<<<<<<< HEAD
def greet():
    return "Hello"
=======
def greet():
    return "Hi there"
>>>>>>> feature-greeting
\`\`\`

Edit the file to keep the version you want. Remove the conflict markers. Then:

\`\`\`bash
git add greeting.py
git commit
\`\`\`

---

## The Branching Workflow

\`\`\`bash
git checkout -b fix-calculator-bug   # create branch
# ... make changes ...
git add .
git commit -m "Fix off-by-one error"
git checkout main
git merge fix-calculator-bug
git branch -d fix-calculator-bug
\`\`\`

---

## Why This Matters

- Main branch always has working code.
- Features and experiments live in isolation.
- Bad experiments are abandoned by deleting the branch.
- Teams work in parallel without stepping on each other.

---

## Try this

1. Create a branch called \`experiment\`.
2. Add a function to a Python file.
3. Commit on the branch.
4. Switch back to main and verify the function isn't there.
5. Merge the branch into main.

---

## What you just learned

- How to create, switch, and delete branches
- How to merge branches into main
- How to resolve merge conflicts
- The branch-based workflow

---

## What comes next

Next lesson: **Fixing Mistakes Safely**
`,
};
