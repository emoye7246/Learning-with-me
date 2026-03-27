export const lessonInstallingIntelliJ = {
  id: "installing-intellij",
  title: "Installing IntelliJ IDEA",
  hasChallenge: false,
  article: `
## Installing IntelliJ IDEA

IntelliJ IDEA is the industry-standard IDE for Java development. Most professional Java developers use it.

You will use the **Community Edition** — it's free, open-source, and has everything you need to learn Java.

---

## Why IntelliJ?

You could write Java in a plain text editor. You could use VS Code. You could use Eclipse.

But IntelliJ is the right choice because:

- **Intelligent autocomplete** — It understands your code, not just file contents
- **Inline error checking** — Errors are highlighted as you type, not just at compile time
- **Integrated debugger** — Set breakpoints and inspect variables with a UI
- **Built-in terminal** — Run your code without leaving the IDE
- **Refactoring tools** — Rename a class and every reference updates automatically
- **Maven/Gradle integration** — Manages dependencies automatically

Most companies that use Java professionally use IntelliJ. Learning on it now means you won't need to relearn your tools.

---

## Community vs Ultimate

IntelliJ comes in two editions:

| Feature | Community | Ultimate |
|---|---|---|
| Java development | Yes | Yes |
| Spring Boot support | No | Yes |
| Database tools | No | Yes |
| Web frameworks | No | Yes |
| Price | Free | Paid |

**Start with Community Edition.** It is sufficient for everything in this course through Module 11. When you get to Spring Boot (real-world track), you may want Ultimate — but students can get it free at jetbrains.com/student.

---

## Installation Steps

1. Go to [jetbrains.com/idea/download](https://www.jetbrains.com/idea/download)
2. Scroll down to **IntelliJ IDEA Community Edition**
3. Download the installer for your operating system
4. Run the installer

**On macOS:** Drag the app to your Applications folder.

**On Windows:** Run the \`.exe\` installer. Check "Add launchers dir to the PATH" and "Create desktop shortcut".

**On Linux:** Extract the \`.tar.gz\` file and run \`bin/idea.sh\`.

---

## First Launch Setup

When you first launch IntelliJ:

1. Accept the user agreement
2. Choose a UI theme (Dark or Light — your preference)
3. Skip the plugin install screen for now (click "Skip Remaining and Set Defaults")

You'll land on the **Welcome screen**, which shows recent projects and options to create new ones.

---

## Setting the JDK in IntelliJ

IntelliJ needs to know where your JDK is.

When you create your first project, IntelliJ will ask you to select an SDK. You can:

1. Click "Add SDK" → "Download JDK" to let IntelliJ download one automatically
2. Or point to your existing JDK installation

If IntelliJ can't find your JDK:
1. Go to **File → Project Structure → SDKs**
2. Click the **+** button
3. Select **Add JDK** and navigate to your JDK installation directory

---

## What You Learned

- IntelliJ IDEA Community Edition is free and sufficient for this course
- IntelliJ provides autocomplete, error checking, debugging, and refactoring tools
- The first time you launch, you set up your theme and JDK
- Most professional Java teams use IntelliJ

## What Comes Next

Now that IntelliJ is installed, the next lesson takes you on a tour of the IDE — what each part does and how to navigate it.

Continue to:
**1.4 IntelliJ Tour**
`,
};
