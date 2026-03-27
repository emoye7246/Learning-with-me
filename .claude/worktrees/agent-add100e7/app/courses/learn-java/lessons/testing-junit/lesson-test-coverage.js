export const lessonTestCoverage = {
  id: "test-coverage",
  title: "Test Coverage — what it tells you and what it doesn't",
  hasChallenge: false,
  article: `
## Test Coverage — what it tells you and what it doesn't

Test coverage measures how much of your code is executed by your tests. It's a useful metric — but it's not the whole story.

---

## What Is Code Coverage?

Coverage is measured as a percentage:

\`\`\`
Lines covered: 80 / 100 = 80% line coverage
\`\`\`

Java's most common coverage types:

| Type | What's counted |
|---|---|
| **Line coverage** | Which lines were executed |
| **Branch coverage** | Which if/else branches were taken |
| **Method coverage** | Which methods were called |

---

## Adding JaCoCo to Maven

JaCoCo is the standard Java coverage tool:

\`\`\`xml
<build>
    <plugins>
        <plugin>
            <groupId>org.jacoco</groupId>
            <artifactId>jacoco-maven-plugin</artifactId>
            <version>0.8.11</version>
            <executions>
                <execution>
                    <goals>
                        <goal>prepare-agent</goal>
                    </goals>
                </execution>
                <execution>
                    <id>report</id>
                    <phase>verify</phase>
                    <goals>
                        <goal>report</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
\`\`\`

Run:
\`\`\`bash
mvn clean verify
\`\`\`

Open the report:
\`\`\`
target/site/jacoco/index.html
\`\`\`

---

## What High Coverage Tells You

High coverage means the code was **executed** by tests. A method at 90% coverage was called and its paths were traversed.

This is genuinely useful:
- It finds dead code (methods never called by any test or the application)
- It shows which edge cases have no test at all
- It gives confidence that refactoring didn't skip any code paths

---

## What Coverage Does NOT Tell You

**Coverage does not measure test quality.**

\`\`\`java
@Test
void add_doesSomething() {
    Calculator calc = new Calculator();
    calc.add(3, 4);  // called — but no assertion!
    // 100% method coverage, 0% useful testing
}
\`\`\`

This test achieves 100% coverage of \`add()\` but tests nothing. A bug in \`add()\` would pass this test.

---

## The Right Way to Think About Coverage

Think of coverage as a **floor**, not a ceiling.

- Low coverage (< 50%) → you definitely have undertested code
- High coverage (> 80%) → good sign, but still check for meaningful assertions
- 100% coverage → possible, but not a realistic target for most projects

A well-tested codebase has:
1. High coverage on business logic
2. Lower coverage on glue code, configuration, and generated code
3. Tests that make meaningful assertions, not just method calls

---

## Coverage Thresholds

You can fail the build if coverage drops below a threshold:

\`\`\`xml
<execution>
    <id>check</id>
    <goals>
        <goal>check</goal>
    </goals>
    <configuration>
        <rules>
            <rule>
                <element>BUNDLE</element>
                <limits>
                    <limit>
                        <counter>LINE</counter>
                        <value>COVEREDRATIO</value>
                        <minimum>0.80</minimum>
                    </limit>
                </limits>
            </rule>
        </rules>
    </configuration>
</execution>
\`\`\`

80% is a common threshold for professional projects.

---

## Coverage in IntelliJ

Run tests with coverage in IntelliJ:
- Right-click test class → **Run with Coverage**
- Lines are highlighted green (covered) or red (not covered)
- Method and branch stats appear in the Coverage panel

---

## What You Learned

- Coverage measures which code was executed by tests, not whether tests are correct
- JaCoCo is the standard Maven coverage tool
- Line, branch, and method coverage each tell you something different
- High coverage is necessary but not sufficient for a quality test suite
- 80% line coverage is a common professional benchmark
- Coverage is most valuable for finding untested code paths

## What Comes Next

Let's put everything together with a full test suite for the bank account class.

Continue to: **Mini Project: Write a Full Test Suite for the Bank Account Class**
`,
};
