export const lessonGitBasics = {
  id: "git-basics",
  title: "Git Basics: init, add, commit, push",
  hasChallenge: false,
  article: `
## Git Basics: init, add, commit, push

These four commands form the core Git workflow. Everything else builds on them.

---

## Installing Git

\`\`\`bash
# macOS (comes with Xcode tools, or via Homebrew)
brew install git

# Check version
git --version
\`\`\`

---

## Configuring Git (one time)

\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
\`\`\`

This identity appears in every commit you make.

---

## The Three Areas

Understanding Git requires knowing where files live:

\`\`\`
Working Directory  →  Staging Area (Index)  →  Repository (History)
   (your files)         (git add)               (git commit)
\`\`\`

- **Working Directory**: files on disk, edited freely
- **Staging Area**: files you've marked as "ready to commit"
- **Repository**: permanent history of all commits

---

## git init

Create a new Git repository in the current directory:

\`\`\`bash
mkdir my-project
cd my-project
git init
# Initialized empty Git repository in .git/
\`\`\`

This creates a hidden \`.git/\` folder that stores all history.

---

## git status

Always check status before doing anything:

\`\`\`bash
git status
# On branch main
# Untracked files:
#   Main.java
\`\`\`

---

## git add

Move files from working directory to staging area:

\`\`\`bash
# Stage a specific file
git add Main.java

# Stage all changed files
git add .

# Stage part of a file (interactive)
git add -p Main.java
\`\`\`

---

## git commit

Save a snapshot of the staging area to history:

\`\`\`bash
git commit -m "Add initial calculator implementation"
\`\`\`

Good commit message rules:
- Use imperative mood: "Add feature" not "Added feature"
- Keep the first line under 72 characters
- Describe *what* and *why*, not *how*

---

## git log

See commit history:

\`\`\`bash
git log
# commit a1b2c3d (HEAD -> main)
# Author: You <you@example.com>
# Date:   Mon Mar 10 14:22:01 2025
#
#     Add initial calculator implementation

git log --oneline  # compact view
\`\`\`

---

## Connecting to GitHub

\`\`\`bash
# After creating a repo on GitHub:
git remote add origin https://github.com/you/my-project.git
git branch -M main
git push -u origin main
\`\`\`

After the first push, just use:

\`\`\`bash
git push
\`\`\`

---

## git pull

Fetch and merge changes from the remote:

\`\`\`bash
git pull
\`\`\`

Do this before you start working each day to get the latest changes.

---

## The Daily Loop

\`\`\`bash
git pull                    # get latest
# ... edit files ...
git status                  # see what changed
git add src/MyClass.java    # stage changes
git commit -m "Fix null check in parse()"
git push                    # share changes
\`\`\`

---

## What You Learned

- \`git init\` creates a repository; \`git status\` shows the current state
- \`git add\` stages files; \`git commit\` saves them to history
- \`git push\` shares commits to GitHub; \`git pull\` gets others' commits
- Files flow: Working Directory → Staging Area → Repository

Continue to: **GitHub Fundamentals**
`,
};
