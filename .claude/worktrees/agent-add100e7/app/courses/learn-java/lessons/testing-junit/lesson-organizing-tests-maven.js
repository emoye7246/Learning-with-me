export const lessonOrganizingTestsMaven = {
  id: "organizing-tests-maven",
  title: "Organising Tests in a Maven Project",
  hasChallenge: false,
  article: `
## Organising Tests in a Maven Project

Well-organised tests are as important as well-organised production code. This lesson covers conventions for test structure, naming, and Maven integration.

---

## The Directory Convention

Tests mirror the production source tree:

\`\`\`
src/
├── main/
│   └── java/
│       └── com/example/bank/
│           ├── model/Account.java
│           ├── service/AccountService.java
│           └── util/CurrencyUtils.java
└── test/
    └── java/
        └── com/example/bank/
            ├── model/AccountTest.java
            ├── service/AccountServiceTest.java
            └── util/CurrencyUtilsTest.java
\`\`\`

Rule: one test class per production class, in the same package, in \`src/test/java\`.

---

## Why Same Package?

Placing tests in the same package (but different directory) gives them access to **package-private** members without making them public:

\`\`\`java
// Account.java — package-private helper method
class Account {
    int calculateInterest() { return balance * rate; }  // not public
}

// AccountTest.java — same package, can access it
class AccountTest {
    @Test void interest_calculatedCorrectly() {
        Account acc = new Account(1000, 0.05);
        assertEquals(50, acc.calculateInterest());  // accessible
    }
}
\`\`\`

---

## Running Tests with Maven

\`\`\`bash
mvn test                         # run all tests
mvn test -pl module-name         # run tests in one module
mvn -Dtest=AccountTest test      # run one test class
mvn -Dtest=AccountTest#deposit test  # run one test method
\`\`\`

Maven runs tests during the \`test\` phase automatically. Failures stop the build.

---

## Skipping Tests

\`\`\`bash
mvn package -DskipTests          # skip running tests (but compile them)
mvn package -Dmaven.test.skip=true  # skip compiling and running tests
\`\`\`

Use \`-DskipTests\` only when you need a fast build for deployment. Don't make it a habit.

---

## Test Reports

Maven generates test reports in \`target/surefire-reports/\`:

\`\`\`
target/surefire-reports/
├── TEST-com.example.AccountTest.xml
├── TEST-com.example.AccountServiceTest.xml
└── com.example.AccountTest.txt
\`\`\`

The XML files can be read by CI/CD systems (Jenkins, GitHub Actions) to show test results.

---

## Integration Tests vs Unit Tests

Maven conventionally separates unit and integration tests:

- **Unit tests** — run during \`mvn test\` phase. Fast, no external dependencies.
- **Integration tests** — run during \`mvn verify\` phase using the Failsafe plugin.

By convention, integration test class names end in \`IT\`:

\`\`\`java
class AccountServiceIT {  // Integration test — runs against a real database
    @Test void deposit_persistsToDatabase() { ... }
}
\`\`\`

\`\`\`xml
<!-- Failsafe plugin for integration tests -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-failsafe-plugin</artifactId>
    <version>3.2.5</version>
    <executions>
        <execution>
            <goals>
                <goal>integration-test</goal>
                <goal>verify</goal>
            </goals>
        </execution>
    </executions>
</plugin>
\`\`\`

---

## Test Resource Files

Put test-only data files in \`src/test/resources/\`:

\`\`\`
src/test/resources/
├── test-students.csv
└── test-config.json
\`\`\`

Access them in tests:

\`\`\`java
Path path = Path.of(getClass().getClassLoader()
    .getResource("test-students.csv").toURI());
List<Student> students = studentRepository.loadAll(path.toString());
\`\`\`

---

## What You Learned

- Test classes mirror the production package structure in \`src/test/java\`
- Same package placement gives tests access to package-private members
- \`mvn test\` runs all unit tests; \`mvn verify\` includes integration tests
- Maven generates reports in \`target/surefire-reports/\`
- Integration tests end in \`IT\` and run with the Failsafe plugin
- Test resources go in \`src/test/resources/\`

## What Comes Next

Now you'll learn how to test classes that have external dependencies.

Continue to: **9.6 Introduction to Mockito — mocking dependencies**
`,
};
