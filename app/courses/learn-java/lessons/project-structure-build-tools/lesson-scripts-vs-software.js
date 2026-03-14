export const lessonScriptsVsSoftware = {
  id: "scripts-vs-software",
  title: "Scripts vs Software — when a single file isn't enough",
  hasChallenge: false,
  article: `
## Scripts vs Software — when a single file isn't enough

Up to now, every Java program you've written has been a single file or a small handful of files compiled manually. That works for learning. It doesn't work for production.

---

## The Single-File Approach

Early in your Java journey, a program looks like this:

\`\`\`
MyProject/
  Main.java
\`\`\`

You compile with:
\`\`\`
javac Main.java
\`\`\`

And run with:
\`\`\`
java Main
\`\`\`

This is fine for scripts and exercises. The moment you need an external library, multiple classes, tests, or another developer to work on the same codebase — it collapses.

---

## What Real Projects Need

A professional Java project requires:

1. **Structured source layout** — tests separated from production code, resources organised
2. **Dependency management** — external libraries fetched automatically, versioned
3. **Automated builds** — compile, test, and package with a single command
4. **Reproducible builds** — anyone on the team can build the project identically

A **build tool** handles all of this.

---

## What a Build Tool Does

| Task | Without Build Tool | With Maven/Gradle |
|---|---|---|
| Add a library | Download JAR manually, add to classpath | Add one line to config |
| Compile project | \`javac *.java\` | \`mvn compile\` |
| Run tests | Manually run each test | \`mvn test\` |
| Package as JAR | \`jar cf ...\` | \`mvn package\` |
| Share with team | "Copy these JARs..." | Everyone runs \`mvn install\` |

---

## The Two Dominant Java Build Tools

**Maven** — Convention over configuration. Uses XML (\`pom.xml\`). The industry standard for decades. Most tutorials and documentation assume Maven.

**Gradle** — More flexible and faster, uses Groovy or Kotlin DSL. Dominant in Android development. Growing in enterprise Java.

This course covers Maven first, then introduces Gradle. In practice, learning one makes the other easy.

---

## The Mental Shift

A script solves a problem you have right now.
Software solves a problem repeatedly, reliably, and maintainably.

When you add a build tool, you're not adding complexity for its own sake. You're building something that:
- other developers can run without your instructions
- a CI/CD pipeline can verify automatically
- you can return to in six months and still understand

---

## What You Learned

- Single-file Java works for learning but not for real projects
- Build tools handle dependencies, compilation, testing, and packaging
- Maven and Gradle are the two standard Java build tools
- The shift from script to software is a shift in how you think about your code

## What Comes Next

Let's look at how professional Java projects are structured.

Continue to: **8.2 Java Project Structure — src/main/java, src/test/java, resources**
`,
};
