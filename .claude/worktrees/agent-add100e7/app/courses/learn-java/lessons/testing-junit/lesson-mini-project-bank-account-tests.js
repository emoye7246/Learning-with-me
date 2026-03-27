export const lessonMiniProjectBankAccountTests = {
  id: "mini-project-bank-account-tests",
  title: "Mini Project: Write a Full Test Suite for the Bank Account Class",
  hasChallenge: false,
  article: `
## Mini Project: Write a Full Test Suite for the Bank Account Class

In this project, you'll write a complete, professional test suite for the \`BankAccount\` class from Course 4. This is how real Java developers work: tests cover the happy path, edge cases, and all exception scenarios.

---

## The Class Under Test

\`\`\`java
// src/main/java/com/example/bank/BankAccount.java
package com.example.bank;

public class BankAccount {
    private final String accountId;
    private double balance;
    private boolean frozen;

    public BankAccount(String accountId, double initialBalance) {
        if (accountId == null || accountId.isBlank()) {
            throw new IllegalArgumentException("Account ID cannot be blank");
        }
        if (initialBalance < 0) {
            throw new IllegalArgumentException("Initial balance cannot be negative");
        }
        this.accountId = accountId;
        this.balance   = initialBalance;
        this.frozen    = false;
    }

    public void deposit(double amount) {
        if (frozen) throw new IllegalStateException("Account is frozen");
        if (amount <= 0) throw new IllegalArgumentException("Deposit amount must be positive");
        balance += amount;
    }

    public void withdraw(double amount) {
        if (frozen) throw new IllegalStateException("Account is frozen");
        if (amount <= 0) throw new IllegalArgumentException("Withdrawal amount must be positive");
        if (amount > balance) throw new InsufficientFundsException(amount, balance);
        balance -= amount;
    }

    public void freeze() { this.frozen = true; }
    public void unfreeze() { this.frozen = false; }

    public double getBalance() { return balance; }
    public String getAccountId() { return accountId; }
    public boolean isFrozen() { return frozen; }
}
\`\`\`

\`\`\`java
// src/main/java/com/example/bank/InsufficientFundsException.java
package com.example.bank;

public class InsufficientFundsException extends RuntimeException {
    private final double amount;
    private final double balance;

    public InsufficientFundsException(double amount, double balance) {
        super(String.format("Cannot withdraw %.2f — balance is %.2f", amount, balance));
        this.amount  = amount;
        this.balance = balance;
    }

    public double getAmount()  { return amount; }
    public double getBalance() { return balance; }
}
\`\`\`

---

## The Full Test Suite

\`\`\`java
// src/test/java/com/example/bank/BankAccountTest.java
package com.example.bank;

import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import static org.junit.jupiter.api.Assertions.*;

@DisplayName("BankAccount")
class BankAccountTest {

    private BankAccount account;

    @BeforeEach
    void setUp() {
        account = new BankAccount("ACC-001", 500.0);
    }

    // ── Constructor ──────────────────────────────────────────────────────

    @Nested
    @DisplayName("Constructor")
    class ConstructorTests {

        @Test
        @DisplayName("creates account with correct ID and balance")
        void createsWithCorrectFields() {
            BankAccount acc = new BankAccount("ACC-999", 1000.0);
            assertAll(
                () -> assertEquals("ACC-999", acc.getAccountId()),
                () -> assertEquals(1000.0, acc.getBalance()),
                () -> assertFalse(acc.isFrozen())
            );
        }

        @Test
        @DisplayName("allows zero initial balance")
        void allowsZeroBalance() {
            assertDoesNotThrow(() -> new BankAccount("ACC-000", 0.0));
        }

        @Test
        @DisplayName("throws on blank account ID")
        void throwsOnBlankId() {
            assertThrows(IllegalArgumentException.class,
                () -> new BankAccount("", 100.0));
        }

        @Test
        @DisplayName("throws on negative initial balance")
        void throwsOnNegativeBalance() {
            assertThrows(IllegalArgumentException.class,
                () -> new BankAccount("ACC-001", -1.0));
        }
    }

    // ── Deposit ──────────────────────────────────────────────────────────

    @Nested
    @DisplayName("deposit()")
    class DepositTests {

        @Test
        @DisplayName("increases balance by the deposit amount")
        void increasesBalance() {
            account.deposit(200.0);
            assertEquals(700.0, account.getBalance());
        }

        @ParameterizedTest
        @ValueSource(doubles = {0.01, 1.0, 1000.0, 999999.99})
        @DisplayName("accepts any positive amount")
        void acceptsPositiveAmounts(double amount) {
            assertDoesNotThrow(() -> account.deposit(amount));
        }

        @ParameterizedTest
        @ValueSource(doubles = {0.0, -0.01, -100.0})
        @DisplayName("throws on non-positive amount")
        void throwsOnNonPositiveAmount(double amount) {
            assertThrows(IllegalArgumentException.class, () -> account.deposit(amount));
        }

        @Test
        @DisplayName("throws when account is frozen")
        void throwsWhenFrozen() {
            account.freeze();
            assertThrows(IllegalStateException.class, () -> account.deposit(100.0));
        }
    }

    // ── Withdraw ─────────────────────────────────────────────────────────

    @Nested
    @DisplayName("withdraw()")
    class WithdrawTests {

        @Test
        @DisplayName("decreases balance by the withdrawal amount")
        void decreasesBalance() {
            account.withdraw(200.0);
            assertEquals(300.0, account.getBalance());
        }

        @Test
        @DisplayName("allows withdrawal of entire balance")
        void allowsFullWithdrawal() {
            assertDoesNotThrow(() -> account.withdraw(500.0));
            assertEquals(0.0, account.getBalance());
        }

        @Test
        @DisplayName("throws InsufficientFundsException when amount exceeds balance")
        void throwsOnInsufficientFunds() {
            InsufficientFundsException ex = assertThrows(
                InsufficientFundsException.class,
                () -> account.withdraw(600.0)
            );
            assertEquals(600.0, ex.getAmount());
            assertEquals(500.0, ex.getBalance());
        }

        @Test
        @DisplayName("throws when account is frozen")
        void throwsWhenFrozen() {
            account.freeze();
            assertThrows(IllegalStateException.class, () -> account.withdraw(100.0));
        }
    }

    // ── Freeze/Unfreeze ──────────────────────────────────────────────────

    @Nested
    @DisplayName("freeze() and unfreeze()")
    class FreezeTests {

        @Test
        @DisplayName("freeze prevents deposits and withdrawals")
        void freezePreventOperations() {
            account.freeze();
            assertTrue(account.isFrozen());
            assertThrows(IllegalStateException.class, () -> account.deposit(10.0));
            assertThrows(IllegalStateException.class, () -> account.withdraw(10.0));
        }

        @Test
        @DisplayName("unfreeze allows operations again")
        void unfreezeAllowsOperations() {
            account.freeze();
            account.unfreeze();
            assertFalse(account.isFrozen());
            assertDoesNotThrow(() -> account.deposit(10.0));
        }
    }
}
\`\`\`

---

## Running the Suite

\`\`\`bash
mvn test
\`\`\`

All tests should pass. Try breaking a method in \`BankAccount\` — watch the tests catch it.

---

## What You Practiced

- Writing tests for a complete class with multiple methods
- Organising tests with \`@Nested\` and \`@DisplayName\`
- Using \`@BeforeEach\` to reset state
- Testing both happy paths and all exception scenarios
- Using \`@ParameterizedTest\` to cover multiple values cleanly
- Asserting on the exception object itself

Continue to: **Mini Project: Test-Driven Development Exercise**
`,
};
