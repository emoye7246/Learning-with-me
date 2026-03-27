export const lessonJavaProjectStructure = {
  id: "java-project-structure",
  title: "Java Project Structure — src/main/java, src/test/java, resources",
  hasChallenge: false,
  article: `
## Java Project Structure

Professional Java projects follow a standardized directory layout. Once you know it, you can navigate any Maven or Gradle project immediately.

---

## The Standard Layout

\`\`\`
my-project/
├── pom.xml                          ← Maven config (or build.gradle for Gradle)
├── src/
│   ├── main/
│   │   ├── java/                    ← production source code
│   │   │   └── com/example/app/
│   │   │       ├── Main.java
│   │   │       ├── service/
│   │   │       └── model/
│   │   └── resources/               ← config files, templates, images
│   │       ├── application.properties
│   │       └── data/
│   └── test/
│       ├── java/                    ← test source code (mirrors main structure)
│       │   └── com/example/app/
│       │       └── service/
│       │           └── UserServiceTest.java
│       └── resources/               ← test-only resources
│           └── test-data.csv
└── target/                          ← generated output (never commit this)
    ├── classes/                     ← compiled .class files
    └── my-project-1.0.jar           ← packaged application
\`\`\`

---

## Why This Layout?

**\`src/main/java\`** — All production code lives here. The build tool compiles this into the application.

**\`src/test/java\`** — Test code lives here. It mirrors the main package structure. Tests are compiled separately and never end up in the final JAR.

**\`src/main/resources\`** — Non-Java files needed by the application: configuration files, SQL scripts, templates, images. These are copied to the classpath as-is.

**\`target/\`** (Maven) or \`build/\`  (Gradle) — Build output. Generated automatically. Never commit this to git (it goes in \`.gitignore\`).

---

## Package Naming Convention

Java packages follow a reversed domain name convention:

\`\`\`
com.mycompany.myapp.service
\`\`\`

This maps to a directory structure:

\`\`\`
src/main/java/com/mycompany/myapp/service/
\`\`\`

For personal projects, use something like:
\`\`\`
dev.yourname.projectname
\`\`\`

---

## Reading Resources from the Classpath

Files in \`src/main/resources/\` are available at runtime via the classpath:

\`\`\`java
// Reads config.properties from src/main/resources/
InputStream in = getClass().getClassLoader()
    .getResourceAsStream("config.properties");

// Or using Path (Java 11+):
URI uri = getClass().getClassLoader().getResource("config.properties").toURI();
Path path = Path.of(uri);
\`\`\`

---

## Mirroring the Package Structure in Tests

A test for \`com.example.UserService\` should live at:

\`\`\`
src/test/java/com/example/UserServiceTest.java
\`\`\`

This keeps tests next to the code they test conceptually, and gives tests access to package-private members.

---

## The .gitignore for Java Projects

\`\`\`gitignore
# Build output
target/
build/
*.class
*.jar

# IDE files
.idea/
*.iml
.vscode/
*.classpath
*.project

# macOS
.DS_Store
\`\`\`

---

## What You Learned

- The standard Maven project layout: \`src/main/java\`, \`src/test/java\`, \`resources\`
- Test code mirrors the production package structure
- Resources are non-Java files on the classpath
- The \`target/\` directory is generated and should never be committed
- Java packages follow reverse-domain naming conventions

## What Comes Next

Now let's understand packages and the module system more deeply.

Continue to: **8.3 Packages and the Module System**
`,
};
