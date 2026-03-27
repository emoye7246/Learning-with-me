export const lessonAssertionsTestStructure = {
  id: "assertions-test-structure",
  title: "Assertions and Test Structure",
  hasChallenge: false,
  article: `
## Assertions and Test Structure

JUnit 5's \`Assertions\` class provides all the tools you need to verify behavior. This lesson covers the full set of assertions and how to structure tests for clarity and maintainability.

---

## Core Assertions

\`\`\`java
import static org.junit.jupiter.api.Assertions.*;

// Equality
assertEquals(expected, actual);
assertEquals(3.14, result, 0.001);  // with delta for doubles

// Null checks
assertNull(value);
assertNotNull(value);

// Boolean
assertTrue(condition);
assertFalse(condition);

// Same object reference
assertSame(expected, actual);

// Array equality
assertArrayEquals(new int[]{1, 2, 3}, result);

// Always fail (useful for marking incomplete tests)
fail("Not implemented yet");
\`\`\`

---

## assertThrows

Verify that a method throws an exception:

\`\`\`java
@Test
void withdraw_throwsWhenAmountExceedsBalance() {
    BankAccount account = new BankAccount(100.0);

    InsufficientFundsException ex = assertThrows(
        InsufficientFundsException.class,
        () -> account.withdraw(200.0)
    );

    assertEquals("Insufficient funds", ex.getMessage());
}
\`\`\`

\`assertThrows\` returns the exception so you can make additional assertions on it.

---

## assertAll — Group Multiple Assertions

When a test has multiple assertions, \`assertAll\` reports all failures at once instead of stopping at the first:

\`\`\`java
@Test
void studentRecord_hasCorrectFields() {
    Student student = new Student("Alice", 92, "A");

    assertAll("student fields",
        () -> assertEquals("Alice", student.name()),
        () -> assertEquals(92, student.score()),
        () -> assertEquals("A", student.grade())
    );
}
\`\`\`

Without \`assertAll\`, a failure on the first assertion hides any failures on the others.

---

## Custom Failure Messages

Add a message as the first argument to explain what failed:

\`\`\`java
assertEquals(7, result, "add(3,4) should return 7");
assertTrue(list.isEmpty(), "List should be empty after clear()");
assertNotNull(user, "User should not be null after successful login");
\`\`\`

---

## @BeforeEach and @AfterEach

Set up and tear down shared state before/after each test:

\`\`\`java
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;

class BankAccountTest {
    private BankAccount account;

    @BeforeEach
    void setUp() {
        account = new BankAccount(500.0);  // fresh account for each test
    }

    @AfterEach
    void tearDown() {
        // cleanup if needed (closing files, resetting state)
    }

    @Test
    void deposit_increasesBalance() {
        account.deposit(100.0);
        assertEquals(600.0, account.getBalance());
    }

    @Test
    void withdraw_decreasesBalance() {
        account.withdraw(200.0);
        assertEquals(300.0, account.getBalance());
    }
}
\`\`\`

---

## @BeforeAll and @AfterAll

Run once for the entire test class. Must be \`static\`:

\`\`\`java
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.AfterAll;

class DatabaseTest {
    private static Connection connection;

    @BeforeAll
    static void setUpDatabase() {
        connection = DriverManager.getConnection("jdbc:h2:mem:test");
    }

    @AfterAll
    static void closeDatabase() throws SQLException {
        connection.close();
    }
}
\`\`\`

---

## Nested Test Classes

Group related tests into nested classes for better organisation:

\`\`\`java
import org.junit.jupiter.api.Nested;

class BankAccountTest {

    @Nested
    class DepositTests {
        @Test void deposit_increasesBalance() { ... }
        @Test void deposit_rejectsNegativeAmount() { ... }
    }

    @Nested
    class WithdrawTests {
        @Test void withdraw_decreasesBalance() { ... }
        @Test void withdraw_throwsOnInsufficientFunds() { ... }
    }
}
\`\`\`

---

## @Disabled — Skip a Test

\`\`\`java
@Test
@Disabled("Waiting for payment API to be available")
void processPayment_chargesCorrectAmount() {
    // ...
}
\`\`\`

---

## What You Learned

- \`assertEquals\`, \`assertTrue\`, \`assertNull\`, \`assertThrows\`, \`assertAll\` are the core assertions
- \`assertAll\` reports all failures in one run
- Custom failure messages make test output meaningful
- \`@BeforeEach\` creates a fresh instance for each test
- \`@BeforeAll\` / \`@AfterAll\` run once per class (must be static)
- \`@Nested\` groups related tests
- \`@Disabled\` skips a test with a reason

## What Comes Next

Good tests cover more than the happy path. Let's look at edge cases.

Continue to: **9.4 Testing Edge Cases and Failures**
`,
};
