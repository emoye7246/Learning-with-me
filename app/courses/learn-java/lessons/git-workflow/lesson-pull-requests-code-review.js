export const lessonPullRequestsCodeReview = {
  id: "pull-requests-code-review",
  title: "Pull Requests and Code Review",
  hasChallenge: false,
  article: `
## Pull Requests and Code Review

A pull request (PR) is a request to merge your branch into another branch. It's the standard mechanism for code review on GitHub.

---

## Why Code Review?

- Catches bugs before they reach production
- Shares knowledge across the team — everyone learns from every review
- Enforces coding standards consistently
- Documents *why* code was written a certain way

---

## Creating a Pull Request

1. Push your branch to GitHub:
   \`\`\`bash
   git push origin feature/user-login
   \`\`\`

2. Go to your repository on GitHub — you'll see a **"Compare & pull request"** banner

3. Fill in:
   - **Title**: clear summary of what the PR does
   - **Description**: why the change is needed, how it was tested, anything reviewers should know
   - **Reviewers**: assign specific teammates

4. Click **Create pull request**

---

## A Good PR Description

\`\`\`markdown
## What
Add email validation to UserService.register()

## Why
Users were registering with malformed emails, causing downstream failures
when sending confirmation messages.

## How
- Added EmailValidator utility class using regex + null check
- Updated UserService.register() to throw InvalidEmailException
- Added unit tests covering 6 edge cases

## Testing
- All existing tests pass (mvn test)
- Manually tested with valid/invalid inputs via Main.java
\`\`\`

---

## Reviewing a PR

As a reviewer, you look at the **Files changed** tab and:

- Leave inline comments on specific lines
- Ask questions: *"Why is this necessary?"*
- Suggest improvements: *"Could this be a single stream pipeline?"*
- Approve when satisfied, or request changes

Be constructive: review the code, not the person.

---

## Responding to Review Feedback

- Reply to each comment
- Push new commits to address feedback — the PR updates automatically
- When all issues are resolved, the reviewer approves
- Then merge (usually the PR author merges after approval)

---

## Merge Strategies

| Strategy | What It Does | When to Use |
|---|---|---|
| **Merge commit** | Creates a merge commit preserving branch history | Default; full history |
| **Squash and merge** | Combines all commits into one | Clean main history, messy branch commits |
| **Rebase and merge** | Replays commits onto main, no merge commit | Linear history preference |

Many teams squash for small features, merge commit for large ones.

---

## Keeping Your PR Up To Date

If main has moved forward while you worked, update your branch:

\`\`\`bash
git checkout main
git pull
git checkout feature/user-login
git merge main   # or: git rebase main
git push
\`\`\`

---

## Draft Pull Requests

Open a PR as a **Draft** when:
- You want early feedback before the work is complete
- You want CI checks to run on incomplete code
- You're sharing context with the team

Mark it "Ready for review" when done.

---

## What You Learned

- Pull requests are the standard way to propose and review code changes
- Good PR descriptions explain the what, why, and how
- Reviewers leave inline comments; authors address them and push updates
- Merge strategies (merge commit, squash, rebase) trade off history legibility vs completeness

Continue to: **Fixing Mistakes Safely**
`,
};
