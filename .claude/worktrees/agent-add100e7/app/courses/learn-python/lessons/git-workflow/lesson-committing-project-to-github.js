export const lessonCommittingProjectToGithub = {
  id: "committing-project-to-github",
  title: "Committing Your Course Project to GitHub",

  article: `
## Committing Your Course Project to GitHub

You've built projects throughout this course. Now put them on GitHub.

This is how you build a portfolio. A working project on GitHub is evidence that you can ship.

---

## Step 1: Prepare Your Project

Before pushing, clean things up.

**Add a \`.gitignore\`:**

\`\`\`text
.venv/
__pycache__/
*.pyc
.env
.DS_Store
\`\`\`

**Verify nothing sensitive is tracked:**

\`\`\`bash
git status
git diff HEAD
\`\`\`

If \`.env\` is already tracked, remove it:

\`\`\`bash
git rm --cached .env
git commit -m "Remove .env from tracking"
\`\`\`

---

## Step 2: Create a README.md

A README is the front page of your repo. It's the first thing anyone reads.

A minimal good README:

\`\`\`markdown
# Project Name

One sentence description of what this does.

## How to Run

\`\`\`bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python main.py
\`\`\`

## Features

- Feature one
- Feature two

## What I learned

What skills or concepts this project demonstrates.
\`\`\`

---

## Step 3: Create the GitHub Repository

1. github.com → New Repository
2. Name it to match your project folder
3. Keep it public (makes it visible to employers)
4. Don't add README or .gitignore (you already have them)

---

## Step 4: Initialize and Push

If your project doesn't have Git yet:

\`\`\`bash
git init
git add .
git commit -m "Initial commit: [project name]"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
\`\`\`

If it already has commits:

\`\`\`bash
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
\`\`\`

---

## Step 5: Verify on GitHub

Open the repo in your browser.

- Files are present
- README renders correctly
- \`.env\` and \`.venv\` are NOT present
- Commit messages are readable and meaningful

---

## Making Future Updates

\`\`\`bash
git add .
git commit -m "Fix bug in task deletion"
git push
\`\`\`

Keep the commit history clean. Every commit is part of your professional record.

---

## What Good Project Repos Have

- Clear, descriptive README
- Requirements file (\`requirements.txt\`)
- Meaningful commit history (not just "fix", "wip", "stuff")
- No secrets in the repo
- Code that actually runs with clear instructions

---

## Pinning Repos on GitHub

On your GitHub profile, you can pin up to 6 repos.

Pin your best projects. These are what employers and collaborators see first.

---

## What you just learned

- How to prepare a project for GitHub (gitignore, README, no secrets)
- How to initialize Git and push an existing project
- What a professional repo looks like
- How to maintain clean commit history going forward

---

## Congratulations

You've built real projects. You've tested them. You've put them on GitHub.

That's the foundation of a Python developer's career.

Keep building. Keep shipping.
`,
};
