export const lessonManagingDependenciesMaven = {
  id: "managing-dependencies-maven",
  title: "Managing Dependencies with Maven Central",
  hasChallenge: false,
  article: `
## Managing Dependencies with Maven Central

One of Maven's most powerful features is automatic dependency management. Instead of hunting down JAR files, you declare what you need and Maven fetches it.

---

## Maven Central

**Maven Central** is the default public repository for Java libraries. Nearly every open-source Java library publishes there. When you add a dependency to \`pom.xml\`, Maven downloads it from Maven Central automatically.

You can search for libraries at: search.maven.org

---

## Adding a Dependency

Find the library on Maven Central, copy the XML snippet, paste it into your \`<dependencies>\` block:

\`\`\`xml
<dependencies>
    <!-- JSON parsing -->
    <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>2.10.1</version>
    </dependency>

    <!-- HTTP client utility -->
    <dependency>
        <groupId>org.apache.httpcomponents.client5</groupId>
        <artifactId>httpclient5</artifactId>
        <version>5.3.1</version>
    </dependency>

    <!-- JUnit 5 for testing -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.10.2</version>
        <scope>test</scope>
    </dependency>
</dependencies>
\`\`\`

Run \`mvn compile\` and Maven downloads everything automatically.

---

## Dependency Scopes

The \`<scope>\` element controls when a dependency is available:

| Scope | Available at | Included in JAR? |
|---|---|---|
| \`compile\` (default) | compile + runtime + test | Yes |
| \`test\` | test only | No |
| \`provided\` | compile + test (runtime provided by container) | No |
| \`runtime\` | runtime + test, not compile | Yes |

\`\`\`xml
<!-- Only needed for tests — not shipped in production JAR -->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
</dependency>
\`\`\`

---

## Transitive Dependencies

When you add Gson, Maven also fetches any libraries *Gson* depends on. You don't have to manage this manually. Run \`mvn dependency:tree\` to see the full tree:

\`\`\`bash
mvn dependency:tree
\`\`\`

\`\`\`
[INFO] com.example:my-app:jar:1.0-SNAPSHOT
[INFO] +- com.google.code.gson:gson:jar:2.10.1:compile
[INFO] \- org.junit.jupiter:junit-jupiter:jar:5.10.2:test
[INFO]    +- org.junit.jupiter:junit-jupiter-api:jar:5.10.2:test
[INFO]    \- org.junit.jupiter:junit-jupiter-engine:jar:5.10.2:test
\`\`\`

---

## Excluding a Transitive Dependency

Sometimes a transitive dependency conflicts with your own:

\`\`\`xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>6.1.0</version>
    <exclusions>
        <exclusion>
            <groupId>commons-logging</groupId>
            <artifactId>commons-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>
\`\`\`

---

## Managing Versions in One Place

Use \`<properties>\` to define versions centrally:

\`\`\`xml
<properties>
    <gson.version>2.10.1</gson.version>
    <junit.version>5.10.2</junit.version>
</properties>

<dependencies>
    <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>\${gson.version}</version>
    </dependency>
</dependencies>
\`\`\`

---

## The dependencyManagement Block

In multi-module projects, a parent POM defines versions for child modules:

\`\`\`xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.10.1</version>
        </dependency>
    </dependencies>
</dependencyManagement>
\`\`\`

Child modules declare the dependency without a version — the parent defines it.

---

## What You Learned

- Maven Central is the default public repository for Java libraries
- Add dependencies to the \`<dependencies>\` block in \`pom.xml\`
- Use \`<scope>test</scope>\` for test-only dependencies
- Maven resolves transitive dependencies automatically
- Use \`<properties>\` to manage versions in one place
- \`mvn dependency:tree\` shows the full dependency graph

## What Comes Next

Now you'll get an introduction to Gradle — Maven's main alternative.

Continue to: **8.6 Introduction to Gradle as an Alternative**
`,
};
