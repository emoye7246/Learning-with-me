export const lessonJdkVsJre = {
  id: "jdk-vs-jre",
  title: "JDK vs JRE",
  hasChallenge: false,
  article: `
## JDK vs JRE

You will see both terms in documentation and installation guides. Here is the exact difference and why you always need the JDK.

---

## The JRE: Java Runtime Environment

The JRE is the minimum needed to **run** a Java program.

It contains:
- The JVM (Java Virtual Machine) — executes bytecode
- The core Java class libraries — the standard APIs your programs use

If you only have the JRE, you can run compiled Java programs (\`.class\` and \`.jar\` files). You cannot compile Java source code (\`.java\` files).

**Who needs just the JRE?** End users who want to run Java applications but not develop them. In the past, browsers had a Java plugin that required the JRE.

---

## The JDK: Java Development Kit

The JDK is the complete development toolkit. It includes everything in the JRE, plus:

- **\`javac\`** — the Java compiler
- **\`javadoc\`** — generates HTML documentation from code comments
- **\`jar\`** — packages class files into JAR archives
- **\`jdb\`** — command-line debugger
- **\`jshell\`** — interactive Java REPL (Java 9+)
- Header files and source code for the standard library

As a developer, **you always need the JDK**. The JRE alone is not enough.

---

## The Modern Situation

In recent Java versions (Java 11+), Oracle and the OpenJDK project distribute the JDK with the JRE embedded.

When you install the JDK, you automatically get the JRE as part of it.

Separate JRE downloads are increasingly rare — some distributions no longer offer them.

**Bottom line:** Install the JDK. You get the JRE for free.

---

## A Quick Summary Table

| | JRE | JDK |
|---|---|---|
| Run Java programs | Yes | Yes |
| Compile Java source | No | Yes |
| Includes \`javac\` | No | Yes |
| Includes \`jshell\` | No | Yes |
| Who needs it? | End users | Developers |

---

## JAVA_HOME

Many tools (Maven, Gradle, IntelliJ) look for an environment variable called \`JAVA_HOME\` to find the JDK.

\`JAVA_HOME\` should point to the root directory of your JDK installation, not the \`bin\` folder.

On macOS (if installed via Homebrew):
\`\`\`bash
export JAVA_HOME=/opt/homebrew/opt/openjdk@21
\`\`\`

On Windows, the installer typically sets this automatically if you check the option.

You can verify:
\`\`\`bash
echo $JAVA_HOME   # macOS/Linux
\`\`\`

\`\`\`cmd
echo %JAVA_HOME%  # Windows
\`\`\`

---

## What You Learned

- The JRE runs Java programs; the JDK compiles and develops them
- Developers always need the JDK
- Modern JDK distributions include the JRE
- \`JAVA_HOME\` is an environment variable that points build tools to your JDK

## What Comes Next

Now you know what you've installed and why. Next: setting up IntelliJ IDEA, the IDE that will dramatically speed up your Java development.

Continue to:
**1.3 Installing IntelliJ IDEA**
`,
};
