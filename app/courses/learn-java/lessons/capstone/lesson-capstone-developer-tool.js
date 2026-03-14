export const lessonCapstoneDeveloperTool = {
  id: "capstone-developer-tool",
  title: "Capstone: Developer Tool",
  hasChallenge: false,
  article: `
## Capstone: Developer Tool

This is your capstone project for the Developer Tooling track — and it carries the highest standard of any capstone in this course.

The requirement isn't just to build a tool. It's to build a tool that **at least one other person actually uses**.

That distinction matters. Code that sits on your hard drive is a hobby project. Code that someone else relies on is software engineering. This capstone bridges that gap.

---

## Project Brief

Build a developer tool that solves a real problem for a real audience. The audience can be small — your team, your class, the open-source community, or even a single colleague. But the tool must be used, not just built.

The scope can be modest. A tool that saves a developer five minutes a day, used by ten people, is more valuable than an ambitious project that nobody runs.

---

## Requirements

### Functionality
- [ ] The tool solves a **clearly stated problem** — documented in the README with a before/after comparison
- [ ] The tool has at least **2 commands or modes of operation**
- [ ] The tool handles all errors gracefully — no unhandled exceptions reaching the user
- [ ] The tool has a \`--help\` option that explains how to use it
- [ ] The tool has a \`--version\` option

### Real Usage
- [ ] The tool has been **used by at least one other person** who is not you
- [ ] The README contains a brief quote or note from that person about how they used it
- [ ] You can describe a specific task that person performed with the tool

This requirement is not optional. If you build a tool nobody uses, the capstone is not complete. Find a user before you finish — not after.

### Documentation
- [ ] The README includes:
  - A clear description of what the tool does and why it exists
  - Step-by-step installation instructions
  - At least 3 usage examples with real commands and real output
  - A "Known Limitations" section (honest acknowledgment of what the tool doesn't handle)
- [ ] Inline code comments explain any non-obvious logic
- [ ] A \`CHANGELOG.md\` or tagged releases in GitHub track version history

### Versioning and Distribution
- [ ] The tool is **versioned** — follows semantic versioning (1.0.0, 1.1.0, etc.)
- [ ] There is at least one **GitHub Release** (using git tags and GitHub's release feature)
- [ ] The release includes an **attached artifact** that users can download and run:
  - A fat JAR, or
  - A shell script + JAR bundle, or
  - A GraalVM native binary
- [ ] The installation process is documented and works on a machine that isn't yours

### Testing
- [ ] There are **unit tests** for at least 3 meaningful behaviors
- [ ] Tests cover at least one **edge case** per tested behavior
- [ ] All tests pass with \`mvn test\`
- [ ] The test suite would catch a regression if the code were changed

### Code Quality
- [ ] Business logic is separated from CLI parsing
- [ ] There are no hardcoded paths or values that only work on your machine
- [ ] The project builds and tests pass on a clean checkout with \`mvn clean test\`

### GitHub History
- [ ] At least **15 meaningful commits** (this is a larger project)
- [ ] At least one commit that responds to feedback from your user
- [ ] Commit messages follow a consistent format

---

## The Real-Usage Requirement: How to Meet It

This is where most students get stuck. Here are practical ways to find a user:

**Use it yourself at work.** If you have a day job, build a tool for a task you actually do. Share it with a colleague. That's one user.

**Post it in a community.** Share it in a Slack group, Discord server, or forum relevant to the problem it solves. Even one person trying it counts.

**Ask a classmate or friend.** If you're learning with others, trade tools. You use theirs; they use yours. Give genuine feedback.

**Open source it and respond to issues.** Even a single GitHub issue where someone tried your tool and reported a bug — and you fixed it — counts as real usage.

The key is that the person actually runs the tool and has an opinion about it. "I showed it to my friend and they said it looked cool" does not count. "My colleague ran \`envcheck\` before deploying and it caught a missing API key" does.

---

## Sample Tools That Meet These Requirements

**\`envcheck\`** — validates required environment variables before a service starts. A teammate runs it in their deploy script and catches a misconfigured staging environment.

**\`gitmsg\`** — validates commit message format against a configurable pattern. A small team adds it as a pre-commit hook. Two team members use it regularly.

**\`jsonlint\`** — validates JSON files and prints structured error messages with line numbers. A colleague uses it to debug a malformed config file.

**\`dbdump\`** — a thin wrapper around pg_dump that adds timestamped output files and a simple restore command. Used by one other developer on a side project.

**\`apidoc\`** — reads a Spring Boot project and generates a markdown API reference from \`@RestController\` annotations. One other developer uses it to document an internal API.

---

## Versioning with Git Tags and GitHub Releases

\`\`\`bash
# Tag a release
git tag -a v1.0.0 -m "Initial release: basic env validation"
git push origin v1.0.0
\`\`\`

Then go to GitHub → Releases → Create a release from tag. Attach your fat JAR as a binary asset.

For your changelog, keep it honest and simple:

\`\`\`
# Changelog

## [1.1.0] - 2025-04-15
### Added
- --strict mode that exits 1 on any warning (requested by @colleague)
- Support for .env.required files in parent directories

## [1.0.0] - 2025-04-01
### Added
- Initial release
- Reads .env.required file
- Validates against current environment
- Reports missing and extra variables
\`\`\`

---

## Completion Checklist

- [ ] Tool has at least 2 commands/modes and handles errors gracefully
- [ ] At least one other person has used the tool for a real task
- [ ] README documents the problem, installation, usage, and known limitations
- [ ] At least one GitHub Release with an attached runnable artifact
- [ ] Semantic versioning applied (v1.x.x)
- [ ] CHANGELOG or release notes document version history
- [ ] Tests cover at least 3 behaviors and all pass
- [ ] \`mvn clean test\` succeeds on a clean checkout
- [ ] 15+ commits with the story of the tool's development
- [ ] At least one commit reflecting feedback from your user

---

## What You Learned

Completing this capstone means you can:

- Design software for a real audience, not just to satisfy a requirement
- Write documentation that enables someone else to install and use your tool
- Release software using semantic versioning and GitHub Releases
- Respond to real user feedback and iterate on a design
- Maintain a professional git history that reflects collaborative development

This is the hardest capstone in the course, and the most valuable. The skills you practiced here — shipping, documenting, versioning, and responding to users — are the skills that separate engineers who build software from engineers who write code.

Put this project on your resume. Link to the GitHub release. It's proof that you can ship.
`,
};
