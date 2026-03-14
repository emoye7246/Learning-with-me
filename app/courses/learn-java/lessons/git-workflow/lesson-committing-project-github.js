export const lessonCommittingProjectGithub = {
  id: "committing-project-github",
  title: "Committing Your Project to GitHub",
  hasChallenge: false,
  article: `
## Committing Your Project to GitHub

Put everything together: take your Maven project and publish it properly to GitHub.

---

## Step 1: Create .gitignore

In the root of your Maven project:

\`\`\`
# Maven build output
target/

# IDE files
.idea/
*.iml
.vscode/
.classpath
.project
.settings/

# OS
.DS_Store
Thumbs.db

# Secrets
.env
*.properties.local
\`\`\`

Verify it works:

\`\`\`bash
git status
# target/ should NOT appear in untracked files
\`\`\`

---

## Step 2: Initialize and Make First Commit

\`\`\`bash
cd my-java-project
git init
git add .
git status            # review what's staged — no target/, no .idea/
git commit -m "Initial commit: currency converter CLI"
\`\`\`

---

## Step 3: Create the GitHub Repository

1. Go to github.com → New repository
2. Name it (match your project name)
3. Leave it empty — no README, no .gitignore (you already have them)
4. Copy the remote URL

---

## Step 4: Push to GitHub

\`\`\`bash
git remote add origin https://github.com/you/my-java-project.git
git branch -M main
git push -u origin main
\`\`\`

---

## Step 5: Write a README

Create \`README.md\` in the project root:

\`\`\`markdown
# Currency Converter

A CLI tool that converts between currencies using live exchange rates from open.er-api.com.

## Requirements

- Java 17+
- Maven 3.8+

## How to Run

\`\`\`bash
mvn package -q
java -jar target/currency-converter.jar 100 USD EUR
\`\`\`

## Example Output

\`\`\`
100.00 USD = 92.01 EUR
(Rate: 1 USD = 0.9201 EUR)
(Source: open.er-api.com, updated: 2024-03-15)
\`\`\`

## What I Learned

- Java HttpClient for REST API calls
- Gson for JSON parsing
- In-memory caching with ConcurrentHashMap
\`\`\`

\`\`\`bash
git add README.md
git commit -m "Add README with setup and usage instructions"
git push
\`\`\`

---

## Step 6: Tag Your Release (Optional but Professional)

\`\`\`bash
git tag -a v1.0.0 -m "Version 1.0.0 — initial release"
git push origin v1.0.0
\`\`\`

On GitHub, this creates a Release that others can download.

---

## Ongoing Workflow

From now on, every new feature:

\`\`\`bash
git checkout -b feature/add-forecast
# ... write code ...
git add -p                    # stage thoughtfully
git commit -m "Add 5-day forecast support"
git push origin feature/add-forecast
# Open a pull request on GitHub
\`\`\`

---

## What Your GitHub Profile Now Shows

- A real project with clean history
- A README that explains what the project does and how to run it
- Commits with meaningful messages
- No build artifacts, secrets, or IDE files

This is what professional Java repositories look like.

---

## What You Learned

- A proper .gitignore keeps target/ and IDE files out of version control
- The init → add → commit → remote → push sequence gets a local project onto GitHub
- A clear README is the difference between a project people understand and one they skip
- Tagging releases lets others reference stable versions of your code

This completes Course 12 — Git Workflow for Java Developers.
`,
};
