export const lessonCommitsHistoryGitignore = {
  id: "commits-history-gitignore",
  title: "Commits, History, and .gitignore",
  hasChallenge: false,
  article: `
## Commits, History, and .gitignore

Good commit hygiene and a proper .gitignore keep your repository clean and your history readable.

---

## What Makes a Good Commit

A commit should represent one logical change — not a dump of everything you did today.

**Bad:**
\`\`\`
"lots of changes"
"fix stuff"
"WIP"
\`\`\`

**Good:**
\`\`\`
"Add input validation to UserService.register()"
"Fix ArrayIndexOutOfBoundsException in CsvParser"
"Refactor: extract buildUrl() method from WeatherClient"
\`\`\`

The rule: if you can't summarize the commit in one line, it probably should be multiple commits.

---

## Viewing History

\`\`\`bash
# Full log
git log

# Compact one-liner per commit
git log --oneline

# With graph (great for branches)
git log --oneline --graph --all

# Changes introduced by each commit
git log -p

# Only last 5 commits
git log -5 --oneline
\`\`\`

---

## git diff

See what changed before committing:

\`\`\`bash
# Changes in working directory (not yet staged)
git diff

# Changes in staging area (what will be committed)
git diff --staged

# Between two commits
git diff abc123 def456
\`\`\`

---

## git show

Inspect a specific commit:

\`\`\`bash
git show abc123
# Shows commit message, author, date, and full diff
\`\`\`

---

## .gitignore

The \`.gitignore\` file tells Git which files to never track. Place it in the root of your repository.

**Java / Maven .gitignore:**

\`\`\`
# Compiled output
target/
*.class
*.jar

# IDE files
.idea/
*.iml
.vscode/
.classpath
.project
.settings/

# OS files
.DS_Store
Thumbs.db

# Environment / secrets
.env
*.key
config/secrets.properties
\`\`\`

---

## Why .gitignore Matters

- **Build artifacts** (\`target/\`, \`*.class\`) are generated — never commit them
- **IDE files** (\`.idea/\`, \`.vscode/\`) vary per developer — don't force your settings on others
- **Secrets** (\`.env\`, API keys) must never be committed — once in history, they're exposed forever

---

## Generating a .gitignore

GitHub provides templates at github.com/github/gitignore. When creating a repo, select "Java" from the .gitignore template dropdown.

Or use gitignore.io to generate one customized for your tools.

---

## Accidentally Committed a File?

Remove a tracked file from Git without deleting it:

\`\`\`bash
# Remove from Git tracking but keep on disk
git rm --cached secret.properties

# Then add it to .gitignore
echo "secret.properties" >> .gitignore

git commit -m "Remove accidentally committed secrets file"
\`\`\`

If you committed an API key, consider it compromised — rotate it immediately.

---

## What You Learned

- Good commits are small, focused, and clearly described
- \`git log\`, \`git diff\`, and \`git show\` let you explore history
- \`.gitignore\` prevents build artifacts, IDE config, and secrets from entering version control
- Once a file is in Git history, it stays there — never commit secrets

Continue to: **Branches and Experimentation**
`,
};
