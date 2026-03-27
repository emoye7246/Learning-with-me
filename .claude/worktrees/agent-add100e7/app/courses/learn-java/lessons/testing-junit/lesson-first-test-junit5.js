export const lessonFirstTestJunit5 = {
  id: "first-test-junit5",
  title: "Writing Your First Test with JUnit 5",
  hasChallenge: false,
  article: `
## Writing Your First Test with JUnit 5

JUnit 5 is the standard testing framework for Java. This lesson walks through setting it up and writing your first tests.

---

## Setup: Add JUnit 5 to pom.xml

\`\`\`xml
<dependencies>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.10.2</version>
        <scope>test</scope>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.2.5</version>
        </plugin>
    </plugins>
</build>
\`\`\`

---

## The Class Under Test

\`\`\`java
// src/main/java/com/example/Calculator.java
package com.example;

public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public double divide(int a, int b) {
        if (b == 0) throw new ArithmeticException("Cannot divide by zero");
        return (double) a / b;
    }
}
\`\`\`

---

## The Test Class

\`\`\`java
// src/test/java/com/example/CalculatorTest.java
package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    private final Calculator calc = new Calculator();

    @Test
    void add_returnsSumOfTwoIntegers() {
        int result = calc.add(3, 4);
        assertEquals(7, result);
    }

    @Test
    void subtract_returnsDifference() {
        assertEquals(5, calc.subtract(10, 5));
    }

    @Test
    void divide_returnsDoubleResult() {
        assertEquals(2.5, calc.divide(5, 2));
    }

    @Test
    void divide_throwsWhenDivisorIsZero() {
        assertThrows(ArithmeticException.class, () -> calc.divide(10, 0));
    }
}
\`\`\`

---

## The Anatomy of a Test

\`\`\`java
@Test                         // marks this as a test method
void add_returnsSumOfTwoIntegers() {
    // Arrange — set up the input
    int a = 3, b = 4;

    // Act — call the code being tested
    int result = calc.add(a, b);

    // Assert — verify the result
    assertEquals(7, result);
}
\`\`\`

This **Arrange → Act → Assert** (AAA) pattern makes tests easy to read and maintain.

---

## Running Tests

From the terminal:
\`\`\`bash
mvn test
\`\`\`

In IntelliJ: right-click the test class or method → **Run**

Output for passing tests:
\`\`\`
[INFO] Tests run: 4, Failures: 0, Errors: 0, Skipped: 0
\`\`\`

For a failing test:
\`\`\`
expected: <7> but was: <8>
at CalculatorTest.add_returnsSumOfTwoIntegers(CalculatorTest.java:15)
\`\`\`

---

## Test Naming Conventions

JUnit 5 allows any naming style. Common conventions:

\`\`\`java
// Method_Scenario_Expected (clear for larger codebases)
void divide_byZero_throwsArithmeticException()

// Should pattern
void shouldReturnSumOfTwoIntegers()

// Plain English (requires spaces — works in JUnit 5)
@Test
@DisplayName("dividing by zero throws ArithmeticException")
void dividingByZeroThrowsException() { ... }
\`\`\`

Pick one style and use it consistently.

---

## @DisplayName

Make test names readable in the output:

\`\`\`java
import org.junit.jupiter.api.DisplayName;

@Test
@DisplayName("add() returns correct sum for positive integers")
void addPositiveIntegers() {
    assertEquals(7, calc.add(3, 4));
}
\`\`\`

---

## Test Class Conventions

- One test class per production class (\`Calculator\` → \`CalculatorTest\`)
- Place in \`src/test/java\` mirroring the production package
- Test class does not need to be \`public\` in JUnit 5
- Each \`@Test\` method is independent — tests must not rely on each other's order

---

## What You Learned

- Add JUnit 5 via \`junit-jupiter\` dependency with \`scope=test\`
- Annotate test methods with \`@Test\`
- Use \`assertEquals\`, \`assertThrows\` to verify behavior
- Follow the Arrange → Act → Assert pattern
- Run tests with \`mvn test\` or directly in IntelliJ

## What Comes Next

Now you'll learn about all the assertion methods JUnit 5 provides.

Continue to: **9.3 Assertions and Test Structure**
`,
};
