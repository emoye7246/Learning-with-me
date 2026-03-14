export const lessonIntroToGradle = {
  id: "intro-to-gradle",
  title: "Introduction to Gradle as an Alternative",
  hasChallenge: false,
  article: `
## Introduction to Gradle as an Alternative

Gradle is the other major Java build tool. It's the default for Android projects and is gaining ground in enterprise Java. You'll encounter it often enough that you should understand the basics.

---

## Gradle vs Maven

| | Maven | Gradle |
|---|---|---|
| Config format | XML (\`pom.xml\`) | Kotlin or Groovy DSL |
| Build speed | Slower (no caching) | Faster (incremental builds, caching) |
| Flexibility | Convention-heavy | Highly configurable |
| Android | Not used | Default |
| Learning curve | Gentler | Steeper |
| Industry prevalence | Very common | Common (especially Android) |

---

## The build.gradle.kts File (Kotlin DSL)

Modern Gradle uses Kotlin DSL (\`.kts\`). Here's the Gradle equivalent of a basic Maven POM:

\`\`\`kotlin
// build.gradle.kts
plugins {
    application
}

group = "com.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.google.code.gson:gson:2.10.1")
    testImplementation("org.junit.jupiter:junit-jupiter:5.10.2")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

application {
    mainClass = "com.example.Main"
}

tasks.test {
    useJUnitPlatform()
}
\`\`\`

---

## Common Gradle Commands

\`\`\`bash
./gradlew build           # compile, test, and package
./gradlew test            # run tests
./gradlew run             # run the application
./gradlew clean           # delete build output
./gradlew clean build     # clean then build
./gradlew dependencies    # show dependency tree
\`\`\`

The \`gradlew\` (Gradle wrapper) ensures everyone uses the same Gradle version regardless of what's installed locally.

---

## Adding Dependencies

\`\`\`kotlin
dependencies {
    // Available everywhere
    implementation("com.google.code.gson:gson:2.10.1")

    // Only for tests
    testImplementation("org.junit.jupiter:junit-jupiter:5.10.2")

    // Available at compile time only (like Maven's "provided")
    compileOnly("org.projectlombok:lombok:1.18.30")
}
\`\`\`

---

## The settings.gradle.kts File

Every Gradle project has a \`settings.gradle.kts\` that defines the project name:

\`\`\`kotlin
// settings.gradle.kts
rootProject.name = "my-app"
\`\`\`

For multi-project builds:
\`\`\`kotlin
rootProject.name = "my-app"
include("core", "api", "web")
\`\`\`

---

## Directory Structure

Gradle uses the same standard layout as Maven:

\`\`\`
my-project/
├── build.gradle.kts
├── settings.gradle.kts
├── gradlew
├── gradlew.bat
├── gradle/wrapper/
└── src/
    ├── main/java/
    ├── main/resources/
    └── test/java/
\`\`\`

---

## When to Use Gradle vs Maven

**Use Maven when:**
- Starting a new Spring Boot project (it's the default)
- Your team already uses Maven
- You prefer explicit, familiar XML configuration

**Use Gradle when:**
- Building Android apps (required)
- You need faster builds with complex customisation
- Your team already uses Gradle

In practice, knowing both at a basic level is sufficient. The concepts are the same.

---

## What You Learned

- Gradle uses Kotlin or Groovy DSL instead of XML
- Gradle is faster than Maven due to incremental builds and build caching
- \`./gradlew\` is the Gradle wrapper — use it instead of the global \`gradle\` command
- Dependency scopes in Gradle: \`implementation\`, \`testImplementation\`, \`compileOnly\`
- Both tools use the same standard \`src/main/java\` project layout

## What Comes Next

Now you'll learn how to structure code within your project — separating concerns cleanly.

Continue to: **8.7 Separating Concerns — layered architecture basics**
`,
};
