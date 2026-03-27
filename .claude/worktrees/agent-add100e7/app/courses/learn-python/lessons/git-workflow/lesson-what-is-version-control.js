export const lessonWhatIsVersionControl = {
  id: "what-is-version-control",
  title: "What Version Control Is",

  article: `
## What Version Control Is

Every change you make to code is a risk. Version control is the safety net.

It records every change. It lets you go back. It lets multiple people work on the same codebase without stepping on each other.

---

## The Problem Without It

Imagine you're working on a project. You make a change. It breaks everything.

Without version control, your options are:
- Undo manually (hope you remember what you changed)
- Keep a folder called \`project-final\`, \`project-final-v2\`, \`project-ACTUAL-final\`

This doesn't scale. It fails constantly.

---

## What Version Control Does

- Records snapshots of your code over time (commits)
- Lets you revert any file to any previous state
- Shows exactly what changed and when
- Supports branching: experiment without touching working code
- Enables collaboration: merge changes from multiple developers

---

## Git is the Standard

There are other version control systems. Git won. It's used by effectively every professional software project.

GitHub, GitLab, and Bitbucket are hosting services that store your Git repositories online.

---

## The Core Mental Model

\`\`\`text
Working directory   →  Staging area  →  Repository (history)
  (your files)          (git add)        (git commit)
\`\`\`

- **Working directory**: your code files as you edit them
- **Staging area**: changes you've selected to include in the next commit
- **Repository**: the permanent record of all commits

---

## What a Commit Is

A commit is a snapshot of your staged changes at a point in time.

Each commit has:
- A unique ID (hash)
- A message describing what changed
- The author and timestamp
- A pointer to the previous commit

Together, commits form a complete history of your project.

---

## What you just learned

- Why version control exists and what problem it solves
- What Git is and why it's the standard
- The three areas: working directory, staging, repository
- What a commit represents

---

## What comes next

Next lesson: **Git Basics**
`,
};
