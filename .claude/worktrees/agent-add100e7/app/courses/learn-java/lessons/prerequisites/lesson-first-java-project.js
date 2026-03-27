export const lessonFirstJavaProject = {
  id: "first-java-project",
  title: "Your First Java Project",
  hasChallenge: false,
  article: `
## Your First Java Project

This is the moment you've been setting up for. Let's create and run a Java program.

We will write Hello World, but we'll understand every single part of it.

---

## Creating a New Project in IntelliJ

1. Open IntelliJ IDEA
2. Click **New Project** on the Welcome Screen
3. Select **Java** in the left panel
4. Select your JDK (should show Java 21)
5. Name the project \`HelloJava\`
6. Leave the project location as the default (or choose a folder you like)
7. Click **Create**

IntelliJ creates a project with this structure:

\`\`\`
HelloJava/
  src/
    Main.java   (IntelliJ creates this automatically)
  HelloJava.iml
\`\`\`

---

## Your First Java File

IntelliJ may have created a \`Main.java\` file with some starter code. Replace its contents entirely with:

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

---

## Running the Program

1. Click the green play button in the gutter next to \`public static void main\`
2. Or right-click in the editor → **Run 'Main.main()'**
3. Or press **Shift+F10** (Windows/Linux) / **Ctrl+R** (macOS)

You should see this output in the Run tab at the bottom:

\`\`\`
Hello, World!

Process finished with exit code 0
\`\`\`

**Exit code 0 means success.** Exit code 1 or any other non-zero value means the program ended with an error.

---

## What Each Part Means

Let's read the program line by line:

\`\`\`java
public class Main {
\`\`\`
Every Java program lives inside a **class**. The class name (\`Main\`) must match the file name (\`Main.java\`). \`public\` means this class is accessible from anywhere. The \`{\` opens the class body.

\`\`\`java
    public static void main(String[] args) {
\`\`\`
This is the **entry point** — where the JVM starts executing your program.
- \`public\` — accessible from outside this class
- \`static\` — belongs to the class, not an instance
- \`void\` — this method doesn't return a value
- \`main\` — the special name the JVM looks for
- \`String[] args\` — command-line arguments passed to the program

\`\`\`java
        System.out.println("Hello, World!");
\`\`\`
- \`System\` — a built-in Java class
- \`out\` — the standard output stream (your terminal)
- \`println\` — prints the string and adds a newline
- \`"Hello, World!"\` — a String literal

\`\`\`java
    }
}
\`\`\`
The \`}\` characters close the method body and the class body.

---

## Modifying the Program

Try changing the message and re-running:

\`\`\`java
System.out.println("Java is running on my machine.");
\`\`\`

Try printing multiple lines:

\`\`\`java
System.out.println("Line one");
System.out.println("Line two");
System.out.println("Line three");
\`\`\`

Each call to \`println\` outputs one line.

---

## What You Learned

- A Java program requires a class with a \`main\` method
- The class name must match the filename
- \`System.out.println\` outputs a line to the terminal
- Exit code 0 means the program ran successfully
- IntelliJ's green play button compiles and runs your program

## What Comes Next

If your setup didn't work, the next lesson covers the most common setup problems and how to fix them.

If everything worked, you can skip ahead to Module 2.

Continue to:
**1.7 Common Setup Errors**
`,
};
