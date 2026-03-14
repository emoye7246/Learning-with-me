export const lessonWhyTestingMatters = {
  id: "why-testing-matters",
  title: "Why Testing Matters in Java",
  hasChallenge: false,
  article: `
## Why Testing Matters in Java

Java has one of the strongest testing cultures of any programming ecosystem. Professional Java developers write tests — not as an afterthought, but as part of the development process itself.

---

## The Problem with Manual Testing

Without automated tests, you verify your code by running it and checking the output manually. This has serious problems:

- **Slow** — you have to run the whole program for every change
- **Incomplete** — you only check what you happen to test manually
- **Forgettable** — you don't re-test old functionality after changes
- **Not reproducible** — someone else can't repeat your exact tests

---

## What Automated Tests Give You

**Confidence to change code.** When tests cover your logic, you can refactor or add features without fear of breaking something silently.

**Documentation.** A good test suite shows exactly how your code is supposed to behave. It's executable documentation that never gets out of date.

**Faster feedback.** Running 50 unit tests takes a fraction of a second. That's faster than clicking through a UI.

**Regression protection.** A bug fixed with a test can never silently return.

---

## The Types of Tests

| Type | What it tests | Speed | Amount |
|---|---|---|---|
| Unit test | A single class or method in isolation | Milliseconds | Most |
| Integration test | Multiple components working together | Seconds | Some |
| End-to-end test | The whole system from input to output | Minutes | Few |

This course focuses on **unit tests** — the foundation of a healthy test suite.

---

## What a Unit Test Looks Like

\`\`\`java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    @Test
    void addsTwoNumbers() {
        Calculator calc = new Calculator();
        int result = calc.add(3, 4);
        assertEquals(7, result);
    }

    @Test
    void dividesCorrectly() {
        Calculator calc = new Calculator();
        assertEquals(2.5, calc.divide(5, 2));
    }

    @Test
    void throwsWhenDividingByZero() {
        Calculator calc = new Calculator();
        assertThrows(ArithmeticException.class, () -> calc.divide(10, 0));
    }
}
\`\`\`

Each test is a small, focused scenario. You can read it like a spec: "adds two numbers → expects 7."

---

## The Testing Mindset

Good developers think about testing while writing code, not after:

- "What are the edge cases for this method?"
- "What should happen if the input is null?"
- "What if the list is empty?"
- "What if the file is missing?"

Code written with tests in mind tends to be cleaner — smaller methods, clearer responsibilities, fewer hidden dependencies.

---

## Java's Testing Ecosystem

- **JUnit 5** — the standard testing framework for Java
- **Mockito** — for mocking dependencies in unit tests
- **AssertJ** — fluent assertions (optional but popular)
- **Maven Surefire Plugin** — runs tests during \`mvn test\`

All of these are used in professional Java development.

---

## What You Learned

- Manual testing is slow, incomplete, and not reproducible
- Automated tests give you confidence, documentation, and regression protection
- Unit tests test one class or method in isolation
- Java's testing ecosystem centers on JUnit 5 and Mockito
- Good developers think about tests while writing code

## What Comes Next

Let's write your first JUnit 5 test.

Continue to: **9.2 Writing Your First Test with JUnit 5**
`,
};
