export const lessonCapstoneCliTool = {
  id: "capstone-cli-tool",
  title: "Capstone: Full-Featured CLI Tool",
  hasChallenge: false,
  article: `
## Capstone: Full-Featured CLI Tool

This is your capstone project for the Developer Tooling track.

You will build a real, usable command-line tool from scratch — one that solves a genuine problem, has a polished user experience, is tested, and is distributed in a way that others can actually run it.

This is not a practice exercise. When you're done, this belongs on your GitHub profile and in your portfolio.

---

## Project Brief

Build a CLI tool of your choosing that meets all the requirements below. The tool should solve a real problem — something you or your team would actually use.

The scope should be meaningful but achievable in a few weeks of focused work. Think: a tool that automates a repetitive task, generates boilerplate, validates configuration, or processes files.

---

## Requirements

Your project must meet every requirement in this list before it can be considered complete.

### Functionality
- [ ] The tool has at least **3 distinct subcommands** (e.g., \`new\`, \`check\`, \`version\`)
- [ ] All subcommands handle **invalid input gracefully** — no stack traces printed to the user
- [ ] The tool prints **helpful error messages** that tell the user what went wrong and how to fix it
- [ ] The tool has a \`--help\` flag that explains every command and option
- [ ] The tool has a \`--version\` flag

### Code Quality
- [ ] The project is built with **Maven** (pom.xml at the root)
- [ ] Business logic is separated from CLI parsing (no logic directly in your \`Callable\` classes)
- [ ] The code compiles without warnings at standard lint settings
- [ ] There are no hardcoded file paths that only work on your machine

### Testing
- [ ] The project has **JUnit 5** tests
- [ ] Tests cover at least **3 non-trivial behaviors** (not just "it doesn't crash")
- [ ] Tests run with \`mvn test\` and all pass
- [ ] Edge cases are tested: empty input, missing files, invalid arguments

### Distribution
- [ ] The project builds to a **runnable fat JAR** with \`mvn package\`
- [ ] There is a shell wrapper script (e.g., \`forge\`) so users don't have to type \`java -jar\`
- [ ] The README explains exactly how to install and run the tool

### GitHub History
- [ ] The repository has **at least 10 commits** with meaningful messages
- [ ] Commits are atomic — each one represents a coherent unit of work
- [ ] There are no large binary files committed to the repo
- [ ] The commit history tells the story of the project's development

---

## Example Ideas

If you're unsure what to build, here are some ideas that fit the scope well:

**\`envcheck\`** — validates that all required environment variables are present before a service starts. Reads a \`.env.required\` file, checks current environment, reports what's missing with clear messages.

**\`scaffold\`** — generates boilerplate for new Java classes: controller, service, repository, test — all wired up and ready to go.

**\`logparse\`** — reads structured JSON logs from a file or stdin, filters by level/time/field, and formats output for readability.

**\`depcheck\`** — reads your \`pom.xml\`, calls the Maven Central API, and reports which dependencies have newer versions available.

**\`gitflow\`** — a wrapper around git commands that enforces your team's branching conventions (feature/, hotfix/, etc.) and validates commit message format.

---

## Tips for Success

**Start with the CLI skeleton first.** Get all your subcommands wired up with Picocli before writing any real logic. Run \`--help\` and make sure the output looks good. This gives you a clear framework to build inside.

**Test your logic, not your CLI.** Don't try to test by calling your \`main\` method. Extract your business logic into plain Java classes that are easy to unit test. Your \`Callable\` classes should be thin wrappers.

\`\`\`java
// Hard to test
public class CheckCommand implements Callable<Integer> {
    public Integer call() {
        // 50 lines of logic directly here
    }
}

// Easy to test
public class CheckCommand implements Callable<Integer> {
    public Integer call() {
        EnvChecker checker = new EnvChecker(configFile);
        CheckResult result = checker.run(); // This is what you test
        result.print(System.out);
        return result.hasErrors() ? 1 : 0;
    }
}
\`\`\`

**Handle errors at the boundary.** Catch exceptions at the outermost layer — the \`call()\` method — and convert them to user-friendly messages. Never let a stack trace reach the user.

**Write the README before you're done.** This forces you to think about what the tool does and how to explain it. If you can't explain it clearly in text, the UX probably needs work.

**Commit as you go.** Don't make one giant commit at the end. Commit every meaningful working state: "add scaffold command skeleton", "implement file generation for controllers", "add tests for package naming logic".

---

## Completion Checklist

Before submitting or sharing your project, verify:

- [ ] \`mvn package\` produces a working fat JAR
- [ ] \`mvn test\` runs with all tests passing
- [ ] Every subcommand works as described in the README
- [ ] \`--help\` output is accurate and clear
- [ ] Edge cases don't produce stack traces
- [ ] Git history is clean and readable
- [ ] README has: description, installation steps, usage examples, and example output

---

## What You Learned

Completing this project means you can:

- Design and implement a polished CLI interface
- Structure a Java project for testability and maintainability
- Distribute Java software so others can run it
- Write automated tests for logic-heavy code
- Maintain a clear git history that demonstrates professional practice

These are skills you will use on every project for the rest of your career.

Put this on GitHub. Link to it in your portfolio. It demonstrates more than any certification.
`,
};
