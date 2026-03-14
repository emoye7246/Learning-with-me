export const lessonTrackDeveloperTooling = {
  id: "track-developer-tooling",
  title: "Track: Developer Tooling and CLI Tools",
  hasChallenge: false,
  article: `
## Track: Developer Tooling and CLI Tools

The most impactful tools you'll ever write might never be seen by an end user.

Developer tooling is the craft of building software for software developers — CLIs, automation scripts, code generators, linters, build plugins, deployment utilities. These tools make teams faster. They eliminate toil. They turn hours of manual work into a single command.

Java is excellent for this. The JVM's startup performance has improved dramatically with GraalVM native compilation, and libraries like Picocli make building polished CLIs straightforward.

---

## What You Will Build

A sample project: **a project scaffolding CLI tool** called \`forge\`:

\`\`\`
$ forge new my-api --template spring-boot --package com.example.myapi
Creating project: my-api
  Generating Maven structure...
  Creating package: com.example.myapi
  Writing Application.java...
  Writing application.yml...
  Writing Dockerfile...
  Writing .gitignore...
  Initializing git repository...
Done. To start:
  cd my-api && mvn spring-boot:run
\`\`\`

Other features:
- \`forge add endpoint --name UserController\` — generates a controller file
- \`forge check\` — validates your project structure
- \`forge version\` — prints the tool version

This is exactly the kind of tool that engineering teams use internally. It demonstrates argument parsing, file generation, subprocess execution, and distribution.

---

## Key Concepts You Will Learn

### The Picocli Framework
Picocli is the standard Java library for building CLI applications. It handles argument parsing, help text, subcommands, validation, and shell autocompletion:

\`\`\`java
@Command(
    name = "forge",
    description = "Project scaffolding tool for Java developers",
    version = "forge 1.0.0",
    mixinStandardHelpOptions = true,
    subcommands = {
        NewCommand.class,
        AddCommand.class,
        CheckCommand.class
    }
)
public class ForgeCommand implements Runnable {

    public static void main(String[] args) {
        int exitCode = new CommandLine(new ForgeCommand()).execute(args);
        System.exit(exitCode);
    }

    @Override
    public void run() {
        // When called with no subcommand, show help
        CommandLine.usage(this, System.out);
    }
}
\`\`\`

### Defining Subcommands
\`\`\`java
@Command(
    name = "new",
    description = "Create a new project from a template"
)
public class NewCommand implements Callable<Integer> {

    @Parameters(index = "0", description = "Project name")
    private String projectName;

    @Option(names = "--template", description = "Template to use", defaultValue = "spring-boot")
    private String template;

    @Option(names = "--package", description = "Base package name")
    private String packageName;

    @Override
    public Integer call() {
        if (packageName == null) {
            packageName = "com.example." + projectName.toLowerCase().replace("-", "");
        }

        System.out.printf("Creating project: %s%n", projectName);

        ProjectGenerator generator = new ProjectGenerator(projectName, template, packageName);
        generator.generate();

        System.out.printf("Done. To start:%n  cd %s && mvn spring-boot:run%n", projectName);
        return 0;
    }
}
\`\`\`

### File System Operations
CLIs often need to create, copy, move, and manipulate files:

\`\`\`java
public class ProjectGenerator {

    private final String projectName;
    private final String template;
    private final String packageName;

    public void generate() {
        Path projectRoot = Path.of(projectName);

        try {
            // Create directory structure
            Files.createDirectories(projectRoot.resolve("src/main/java/" + packageToPath()));
            Files.createDirectories(projectRoot.resolve("src/main/resources"));
            Files.createDirectories(projectRoot.resolve("src/test/java/" + packageToPath()));

            // Write files from templates
            writeFile(projectRoot.resolve("pom.xml"), renderTemplate("pom.xml.template"));
            writeFile(projectRoot.resolve("src/main/java/" + packageToPath() + "/Application.java"),
                      renderTemplate("Application.java.template"));
            writeFile(projectRoot.resolve("src/main/resources/application.yml"),
                      renderTemplate("application.yml.template"));
            writeFile(projectRoot.resolve(".gitignore"),
                      renderTemplate("gitignore.template"));

        } catch (IOException e) {
            throw new RuntimeException("Failed to generate project: " + e.getMessage(), e);
        }
    }

    private String packageToPath() {
        return packageName.replace(".", "/");
    }

    private void writeFile(Path path, String content) throws IOException {
        Files.writeString(path, content, StandardOpenOption.CREATE_NEW);
    }
}
\`\`\`

### Template Rendering
Tools that generate code need templates:

\`\`\`java
public class TemplateEngine {

    public String render(String templateName, Map<String, String> variables) {
        String template = loadTemplate(templateName);
        for (Map.Entry<String, String> entry : variables.entrySet()) {
            template = template.replace("{{" + entry.getKey() + "}}", entry.getValue());
        }
        return template;
    }

    private String loadTemplate(String name) {
        try (InputStream is = getClass().getResourceAsStream("/templates/" + name)) {
            if (is == null) throw new RuntimeException("Template not found: " + name);
            return new String(is.readAllBytes(), StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load template: " + name, e);
        }
    }
}
\`\`\`

### Running Subprocesses
CLI tools often need to run other tools (git, mvn, docker):

\`\`\`java
public class ProcessRunner {

    public void run(String... command) {
        try {
            Process process = new ProcessBuilder(command)
                .directory(new File(workingDir))
                .redirectOutput(ProcessBuilder.Redirect.INHERIT)
                .redirectError(ProcessBuilder.Redirect.INHERIT)
                .start();

            int exitCode = process.waitFor();
            if (exitCode != 0) {
                throw new RuntimeException(
                    "Command failed with exit code " + exitCode + ": " + String.join(" ", command)
                );
            }
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException("Failed to run command: " + String.join(" ", command), e);
        }
    }
}

// Usage: initialize a git repo after creating the project
runner.run("git", "init");
runner.run("git", "add", ".");
runner.run("git", "commit", "-m", "Initial project scaffold");
\`\`\`

### Packaging and Distribution
A CLI tool is only useful if people can run it. There are several distribution strategies:

**Fat JAR (simplest):**
\`\`\`xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-shade-plugin</artifactId>
  <configuration>
    <createExecutableJar>true</createExecutableJar>
    <mainClass>com.example.forge.ForgeCommand</mainClass>
  </configuration>
</plugin>
\`\`\`

Users run: \`java -jar forge.jar new my-project\`

**Shell wrapper script:**
\`\`\`bash
#!/bin/bash
exec java -jar "/usr/local/lib/forge/forge.jar" "$@"
\`\`\`

**GraalVM Native Image (best UX):**
Compiles your Java app to a native binary with near-instant startup. No JVM required to run it:
\`\`\`
$ forge new my-project  # starts in ~20ms instead of ~500ms
\`\`\`

**Homebrew formula** — allows macOS users to install with \`brew install forge\`

---

## Sample Tool Ideas

- **\`env-check\`** — validates that required environment variables are set before running an app
- **\`db-migrate\`** — a custom schema migration runner
- **\`api-mock\`** — reads an OpenAPI spec and serves a mock server
- **\`log-tail\`** — formats and filters structured JSON logs from a file or stdin
- **\`dep-check\`** — scans your pom.xml for outdated or vulnerable dependencies

---

## Where to Continue Learning

- **picocli.info** — Picocli's excellent documentation and tutorials
- **GraalVM docs** (graalvm.org) — for native image compilation
- **"The Art of Unix Programming" by Eric S. Raymond** — philosophy of good CLI design
- **Command Line Interface Guidelines** (clig.dev) — practical standards for CLI UX

---

## What Comes Next

After building your first tool:
- Publish it on GitHub with a proper README and release
- Add autocompletion scripts (Picocli can generate these automatically)
- Experiment with GraalVM native compilation for fast startup
- Look at open-source Java CLI tools for inspiration: Maven, Gradle, and the Quarkus CLI are all instructive

Developer tooling is underrated. Teams that invest in their own tools move faster than those that don't. Be the engineer who makes your whole team more productive.
`,
};
