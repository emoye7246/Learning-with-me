export const lessonGithubFundamentals = {
  id: "github-fundamentals",
  title: "GitHub Fundamentals",
  hasChallenge: false,
  article: `
## GitHub Fundamentals

GitHub is where developers share, review, and collaborate on code. Understanding GitHub is as important as understanding Git.

---

## Creating a Repository on GitHub

1. Go to github.com → click **New repository**
2. Fill in:
   - **Repository name**: \`my-java-project\`
   - **Description**: optional but helpful
   - **Public** or **Private**
   - Check **Add a README file** for new projects
3. Click **Create repository**

---

## Cloning vs Initializing

**Clone** an existing repo (most common when joining a project):

\`\`\`bash
git clone https://github.com/username/repo-name.git
cd repo-name
\`\`\`

This downloads the full history and sets up the remote automatically.

**Init + remote** for a project you started locally:

\`\`\`bash
git init
git remote add origin https://github.com/you/repo-name.git
git push -u origin main
\`\`\`

---

## The README

A \`README.md\` is the first thing visitors see on GitHub. A good README includes:

\`\`\`markdown
# Project Name

One-sentence description of what this does.

## How to Run

\`\`\`bash
mvn compile exec:java -Dexec.mainClass="Main"
\`\`\`

## Requirements

- Java 17+
- Maven 3.8+
\`\`\`

---

## Issues

GitHub Issues are lightweight task tracking built into every repository.

- **Bug reports**: describe what happened vs what should happen
- **Feature requests**: suggest new behavior
- **Tasks**: track work to be done

Reference an issue in a commit to auto-close it:

\`\`\`bash
git commit -m "Fix null pointer in UserService — closes #42"
\`\`\`

---

## Forking

A fork is your personal copy of someone else's repository on GitHub.

Use it to:
- Contribute to open source projects
- Experiment without affecting the original
- Use someone's project as a starting point

\`\`\`
original repo (upstream) → fork (your GitHub) → clone (your machine)
\`\`\`

To contribute back: fork → clone → branch → push → pull request.

---

## Stars and Watching

- **Star** a repo: bookmark it, signal appreciation
- **Watch** a repo: get notifications for issues, PRs, releases
- **Fork** a repo: get your own copy to modify

---

## GitHub Profile

Your GitHub profile is your developer portfolio. Employers look at:

- Repositories you've created and contributed to
- Your contribution graph (green squares)
- README on your profile (create \`username/username\` repo with a README.md)

---

## What You Learned

- Create repos on GitHub and clone them locally
- README.md is your project's front page — keep it clear and useful
- Issues track bugs and tasks; reference them in commits to auto-close
- Forking creates your own copy of a repo for contribution or experimentation

Continue to: **Commits, History, and .gitignore**
`,
};
