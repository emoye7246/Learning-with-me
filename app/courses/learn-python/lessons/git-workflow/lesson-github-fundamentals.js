export const lessonGithubFundamentals = {
  id: "github-fundamentals",
  title: "GitHub Fundamentals",

  article: `
## GitHub Fundamentals

Git is local. GitHub is where you store it remotely.

GitHub hosts your repository online. It's a backup, a collaboration platform, and a portfolio.

---

## Creating a Repository on GitHub

1. Go to github.com. Sign in.
2. Click the \`+\` icon → "New repository".
3. Give it a name. Keep it lowercase with hyphens.
4. Choose Public or Private.
5. Don't initialize with README if you have local code already.
6. Click "Create repository".

---

## Connecting Local to Remote

GitHub shows you the exact commands after creation.

\`\`\`bash
git remote add origin https://github.com/username/repo-name.git
git branch -M main
git push -u origin main
\`\`\`

- \`remote add origin\` — registers GitHub as a remote called "origin"
- \`branch -M main\` — rename current branch to main
- \`push -u origin main\` — push your commits and set upstream tracking

---

## Pushing Changes

After setup, pushing is simpler:

\`\`\`bash
git push
\`\`\`

That sends your new commits to GitHub.

---

## Pulling Changes

If someone else (or you from another machine) has pushed changes:

\`\`\`bash
git pull
\`\`\`

Fetches and merges remote changes into your local branch.

---

## Cloning a Repository

Start with someone else's (or your own) GitHub repo:

\`\`\`bash
git clone https://github.com/username/repo-name.git
\`\`\`

This downloads the entire repository with all history.

---

## The Remote Workflow

\`\`\`bash
# Make changes
git add .
git commit -m "Fix bug in parser"
git push

# Get others' changes
git pull
\`\`\`

---

## Authentication

GitHub requires authentication for push.

**Recommended: Personal Access Token (PAT)**

1. GitHub Settings → Developer Settings → Personal Access Tokens
2. Generate token with "repo" scope
3. Use it as your password when git prompts

Or set up SSH keys for seamless authentication.

---

## GitHub as Portfolio

Every public repository is visible to potential employers.

- Good repos have a \`README.md\`
- They have a clear description
- The commit history is clean and meaningful
- They include a \`.gitignore\`

Your GitHub profile is a professional artifact. Treat it that way.

---

## What you just learned

- How to create a GitHub repo and connect it to local Git
- How to push and pull changes
- How to clone an existing repo
- How authentication works
- Why GitHub serves as a portfolio

---

## What comes next

Next lesson: **Commits & History**
`,
};
