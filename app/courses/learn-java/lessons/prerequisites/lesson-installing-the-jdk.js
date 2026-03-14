export const lessonInstallingTheJdk = {
  id: "installing-the-jdk",
  title: "Installing the JDK",
  hasChallenge: false,
  article: `
## Installing the JDK

Before you write a single line of Java, you need the Java Development Kit installed on your machine.

This lesson walks you through installing the JDK on Windows, macOS, and Linux.

---

## What Is the JDK?

The JDK (Java Development Kit) is the complete toolkit for Java development. It includes:

- The Java compiler (\`javac\`) — translates your source code to bytecode
- The Java runtime (\`java\`) — runs your compiled programs
- Standard library classes — the built-in tools Java provides
- Development tools — debugger, documentation generator, and more

**You need the JDK to develop Java programs.** If you only had the JRE (Java Runtime Environment), you could run Java programs but not compile them.

---

## Which Version?

Use **Java 21 (LTS)**.

LTS stands for Long-Term Support. Oracle provides security updates and patches for LTS versions for years. Java 21 is the most recent LTS as of 2024.

Avoid Java 8 (outdated), Java 11 (previous LTS — acceptable but missing modern features), and non-LTS releases like Java 22 or 23 for learning purposes.

---

## Installing on macOS

The easiest way is with **Homebrew**:

\`\`\`bash
brew install openjdk@21
\`\`\`

After installation, follow the instructions Homebrew prints to add Java to your PATH. It typically looks like:

\`\`\`bash
echo 'export PATH="/opt/homebrew/opt/openjdk@21/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
\`\`\`

Verify the installation:

\`\`\`bash
java -version
javac -version
\`\`\`

Both should show version 21.

**Alternative:** Download the installer directly from [adoptium.net](https://adoptium.net) — the Eclipse Temurin build is the community standard.

---

## Installing on Windows

1. Go to [adoptium.net](https://adoptium.net)
2. Download the **Temurin 21 (LTS)** installer for Windows x64
3. Run the installer
4. During installation, check "Add to PATH" and "Set JAVA_HOME"
5. Finish the installation

Open a new Command Prompt and verify:

\`\`\`cmd
java -version
javac -version
\`\`\`

Both should show version 21.

---

## Installing on Linux (Ubuntu/Debian)

\`\`\`bash
sudo apt update
sudo apt install openjdk-21-jdk
\`\`\`

Verify:

\`\`\`bash
java -version
javac -version
\`\`\`

For other Linux distributions, use your package manager or download from adoptium.net.

---

## Verifying the Installation

After installation on any platform, open a terminal and run:

\`\`\`bash
java -version
\`\`\`

You should see output like:

\`\`\`
openjdk version "21.0.2" 2024-01-16
OpenJDK Runtime Environment Temurin-21.0.2+13 (build 21.0.2+13)
OpenJDK 64-Bit Server VM Temurin-21.0.2+13 (build 21.0.2+13, mixed mode, sharing)
\`\`\`

If you see an error, check the troubleshooting lesson later in this module.

---

## What You Learned

- The JDK includes the compiler, runtime, standard library, and tools
- Use Java 21 LTS for new development
- adoptium.net (Eclipse Temurin) is the recommended open-source JDK distribution
- Verify installation with \`java -version\` and \`javac -version\`

## What Comes Next

Now that you have the JDK installed, the next lesson clarifies the difference between the JDK and JRE — and why it matters.

Continue to:
**1.2 JDK vs JRE**
`,
};
