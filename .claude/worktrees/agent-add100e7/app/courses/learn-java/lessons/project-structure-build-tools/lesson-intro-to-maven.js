export const lessonIntroToMaven = {
  id: "intro-to-maven",
  title: "Introduction to Maven — pom.xml, lifecycle, and goals",
  hasChallenge: false,
  article: `
## Introduction to Maven — pom.xml, lifecycle, and goals

Maven is the most widely used Java build tool. It standardises how Java projects are built, tested, and packaged. Once you understand Maven, you can work in virtually any Java codebase.

---

## Creating a Maven Project in IntelliJ

1. File → New → Project
2. Select **Maven Archetype**
3. Choose **maven-archetype-quickstart**
4. Fill in Group ID and Artifact ID
5. Click Create

Or from the command line:
\`\`\`bash
mvn archetype:generate \\
  -DgroupId=com.example \\
  -DartifactId=my-app \\
  -DarchetypeArtifactId=maven-archetype-quickstart \\
  -DinteractiveMode=false
\`\`\`

---

## The pom.xml File

POM stands for **Project Object Model**. It's the central config file for every Maven project:

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <!-- Project identity -->
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <!-- Java version -->
    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <!-- Dependencies -->
    <dependencies>
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.10.1</version>
        </dependency>
    </dependencies>

</project>
\`\`\`

---

## The Maven Coordinates

Every Maven artifact is identified by three coordinates:

- **groupId** — your organisation (e.g., \`com.example\`)
- **artifactId** — the project name (e.g., \`my-app\`)
- **version** — semantic version (e.g., \`1.0.0\` or \`1.0-SNAPSHOT\`)

**SNAPSHOT** means a version still in development. Release versions have no suffix.

---

## The Build Lifecycle

Maven has a standard sequence of **phases**:

\`\`\`
validate → compile → test → package → verify → install → deploy
\`\`\`

Each phase builds on the previous. Running a phase also runs all phases before it:

| Command | What It Does |
|---|---|
| \`mvn compile\` | Compiles production source code |
| \`mvn test\` | Compiles and runs tests |
| \`mvn package\` | Creates the JAR in \`target/\` |
| \`mvn install\` | Installs JAR to local repo (~/.m2) |
| \`mvn clean\` | Deletes the \`target/\` directory |
| \`mvn clean package\` | Clean then build — the most common command |

---

## Running Maven Commands

From the project root (where \`pom.xml\` is):

\`\`\`bash
mvn clean package          # clean build and create JAR
mvn test                   # run all tests
mvn compile                # compile only
mvn clean                  # wipe build output
\`\`\`

In IntelliJ, the Maven panel (right side) lets you run these with a click.

---

## The Local Repository

Maven downloads dependencies to \`~/.m2/repository/\`. Once downloaded, builds work offline. The local repo is shared across all your projects — so each library is only downloaded once.

---

## Maven Wrapper (mvnw)

Many projects include a **Maven wrapper** (\`mvnw\` / \`mvnw.cmd\`). It bundles Maven so the project builds even if Maven isn't installed globally:

\`\`\`bash
./mvnw clean package    # Linux/Mac
mvnw.cmd clean package  # Windows
\`\`\`

---

## What You Learned

- \`pom.xml\` defines project identity, Java version, and dependencies
- Maven coordinates (groupId, artifactId, version) uniquely identify any artifact
- The build lifecycle: validate → compile → test → package → install → deploy
- \`mvn clean package\` is the most common build command
- Maven downloads dependencies to \`~/.m2/repository/\`

## What Comes Next

Now you'll add real external libraries to your project using Maven Central.

Continue to: **8.5 Managing Dependencies with Maven Central**
`,
};
