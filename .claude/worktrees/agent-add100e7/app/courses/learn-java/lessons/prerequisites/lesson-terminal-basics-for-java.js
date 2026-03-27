export const lessonTerminalBasicsForJava = {
  id: "terminal-basics-for-java",
  title: "Terminal Basics for Java",
  hasChallenge: false,
  article: `
## Terminal Basics for Java

You don't need to be a terminal expert to write Java. But you do need to know a handful of commands that you'll use regularly.

This lesson covers exactly those commands — no more, no less.

---

## Opening a Terminal

- **macOS:** Open Spotlight (Cmd+Space), type "Terminal", press Enter. Or use iTerm2.
- **Windows:** Search for "Command Prompt" or "Windows Terminal". PowerShell also works.
- **Linux:** Your distribution's terminal application. Usually Ctrl+Alt+T.

You can also use IntelliJ's built-in terminal (Alt+F12).

---

## Navigation Commands

\`\`\`bash
pwd          # Print Working Directory — shows where you are
ls           # List files in current directory (macOS/Linux)
dir          # Same as ls, but for Windows Command Prompt
cd folder    # Change directory into "folder"
cd ..        # Go up one directory
cd ~         # Go to your home directory
\`\`\`

Example:
\`\`\`bash
pwd
# /Users/yourname

cd Documents
pwd
# /Users/yourname/Documents

ls
# MyProject  Downloads  notes.txt
\`\`\`

---

## File and Folder Commands

\`\`\`bash
mkdir MyProject          # Create a new directory
mkdir -p src/main/java   # Create nested directories at once
touch Hello.java         # Create an empty file (macOS/Linux)
rm Hello.java            # Delete a file
rm -r MyFolder           # Delete a folder and its contents (careful!)
\`\`\`

---

## Running Java from the Terminal

Once you understand the basics, you can compile and run Java from the command line:

\`\`\`bash
# Step 1: Compile your source file
javac Hello.java

# This creates Hello.class in the same directory

# Step 2: Run the compiled class
java Hello

# Note: no .class extension when running
\`\`\`

For a file in a package (e.g., \`com.example.Hello\`):
\`\`\`bash
javac com/example/Hello.java
java com.example.Hello
\`\`\`

---

## Environment Variables

You've already seen \`JAVA_HOME\`. Here's how to check environment variables:

\`\`\`bash
echo $JAVA_HOME      # macOS/Linux
echo %JAVA_HOME%     # Windows Command Prompt
\`\`\`

To see your current PATH (where the system looks for commands):
\`\`\`bash
echo $PATH           # macOS/Linux
echo %PATH%          # Windows
\`\`\`

---

## Tab Completion

Type the first few letters of a file or directory and press **Tab** — the terminal will complete it.

If there are multiple matches, press Tab twice to see all options.

This is one of the most useful terminal habits. Use it constantly.

---

## Command History

- Press **Up Arrow** to cycle through previous commands
- Press **Ctrl+R** (macOS/Linux) to search command history
- Type \`history\` to see a numbered list of recent commands

---

## Stopping a Running Program

If your Java program is running and you need to stop it:

Press **Ctrl+C**

This sends an interrupt signal and terminates the program. Essential when you accidentally write an infinite loop.

---

## What You Learned

- \`pwd\`, \`ls\`, \`cd\` for navigation
- \`mkdir\`, \`touch\`, \`rm\` for file management
- \`javac\` compiles \`.java\` files; \`java\` runs the compiled \`.class\`
- Tab completion and command history save time
- Ctrl+C stops a running program

## What Comes Next

You have the JDK and IntelliJ installed and you know the terminal basics. Now it's time to create and run your first Java project.

Continue to:
**1.6 Your First Java Project**
`,
};
