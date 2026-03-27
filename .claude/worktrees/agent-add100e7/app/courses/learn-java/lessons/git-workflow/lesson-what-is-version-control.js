export const lessonWhatIsVersionControl = {
  id: "what-is-version-control",
  title: "What Is Version Control?",
  hasChallenge: false,
  article: `
## What Is Version Control?

Version control is a system that records changes to files over time so you can recall specific versions later, collaborate with others, and understand how a project evolved.

---

## The Problem Without Version Control

Without version control, developers tend to:

- Save files as \`Main_v2.java\`, \`Main_final.java\`, \`Main_final_FINAL.java\`
- Email zip files back and forth
- Overwrite each other's changes
- Have no idea what changed or why

This approach breaks down immediately once more than one person touches the code.

---

## What Version Control Gives You

| Capability | What It Means |
|---|---|
| History | Every change is recorded with who made it and why |
| Revert | Undo any change — even months later |
| Branches | Work on features in isolation without affecting others |
| Collaboration | Multiple people work on the same codebase simultaneously |
| Blame | Find out exactly when and why a specific line was changed |

---

## Types of Version Control

**Centralized (old approach)**
- Single server holds all history
- Everyone checks out files from that server
- Examples: SVN, CVS
- Problem: if the server goes down, no one can work

**Distributed (modern approach)**
- Every developer has a complete copy of the entire history
- Work offline; sync when ready
- Examples: **Git**, Mercurial
- Git won — it's what everyone uses

---

## Git vs GitHub

These are not the same thing:

| | Git | GitHub |
|---|---|---|
| What | Version control software | Website that hosts Git repositories |
| Where | Runs on your computer | Cloud service |
| Without the other | Git works without GitHub | GitHub is built on Git |

Git is the tool. GitHub is a hosting service for Git repositories (GitLab and Bitbucket are alternatives).

---

## Why Java Developers Need Git

Every Java job requires Git. You will:

- Track changes to your code as you build features
- Collaborate with teammates without overwriting each other's work
- Submit code for review via pull requests
- Deploy code through CI/CD pipelines triggered by Git events
- Trace production bugs back to the commit that introduced them

---

## What You Learned

- Version control records changes over time so you can revert, collaborate, and understand history
- Git is the distributed version control system everyone uses
- GitHub is a cloud hosting service for Git repositories — not the same as Git itself

Continue to: **Git Basics: init, add, commit, push**
`,
};
