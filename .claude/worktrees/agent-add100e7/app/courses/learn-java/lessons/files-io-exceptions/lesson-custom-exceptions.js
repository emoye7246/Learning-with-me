export const lessonCustomExceptions = {
  id: "custom-exceptions",
  title: "Creating Custom Exceptions",
  hasChallenge: false,
  article: `
## Creating Custom Exceptions

Java's built-in exceptions cover common error conditions, but real applications have domain-specific errors. Creating your own exception types makes your code more readable and gives callers precise information about what went wrong.

---

## Why Custom Exceptions?

Compare these two methods:

\`\`\`java
// Generic — tells you nothing about the domain
throw new IllegalArgumentException("Bad value");

// Specific — tells you exactly what failed
throw new InsufficientFundsException(amount, balance);
\`\`\`

Custom exceptions make error handling self-documenting.

---

## Creating an Unchecked Exception

Extend \`RuntimeException\`:

\`\`\`java
public class InsufficientFundsException extends RuntimeException {

    private final double amount;
    private final double balance;

    public InsufficientFundsException(double amount, double balance) {
        super("Cannot withdraw " + amount + " — balance is only " + balance);
        this.amount = amount;
        this.balance = balance;
    }

    public double getAmount()  { return amount; }
    public double getBalance() { return balance; }
}
\`\`\`

Usage:

\`\`\`java
public class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    public void withdraw(double amount) {
        if (amount > balance) {
            throw new InsufficientFundsException(amount, balance);
        }
        balance -= amount;
    }
}
\`\`\`

\`\`\`java
BankAccount account = new BankAccount(100.0);
try {
    account.withdraw(200.0);
} catch (InsufficientFundsException e) {
    System.err.println(e.getMessage());
    System.err.println("Tried: " + e.getAmount() + ", Had: " + e.getBalance());
}
\`\`\`

---

## Creating a Checked Exception

Extend \`Exception\` to force callers to handle it:

\`\`\`java
public class UserNotFoundException extends Exception {

    private final String username;

    public UserNotFoundException(String username) {
        super("User not found: " + username);
        this.username = username;
    }

    public String getUsername() {
        return username;
    }
}
\`\`\`

Usage:

\`\`\`java
public User findUser(String username) throws UserNotFoundException {
    User user = database.lookup(username);
    if (user == null) {
        throw new UserNotFoundException(username);
    }
    return user;
}
\`\`\`

---

## Preserving the Original Cause

When wrapping another exception, pass it as the **cause**:

\`\`\`java
public class DataLoadException extends RuntimeException {

    public DataLoadException(String message, Throwable cause) {
        super(message, cause);
    }
}
\`\`\`

\`\`\`java
try {
    Files.readAllLines(Path.of("data.csv"));
} catch (IOException e) {
    throw new DataLoadException("Failed to load student data", e);
}
\`\`\`

The original \`IOException\` is now accessible via \`e.getCause()\` and shows up in the stack trace.

---

## Exception Hierarchy for a Domain

Organise related exceptions under a common base:

\`\`\`java
// Base for all bank errors
public class BankException extends RuntimeException {
    public BankException(String message) { super(message); }
}

// Specific subtypes
public class InsufficientFundsException extends BankException {
    public InsufficientFundsException(double amount) {
        super("Insufficient funds: need " + amount);
    }
}

public class AccountFrozenException extends BankException {
    public AccountFrozenException() {
        super("Account is frozen");
    }
}
\`\`\`

Callers can catch \`BankException\` to handle any bank error, or catch specific subtypes for precise handling.

---

## Naming Convention

Always end exception class names with \`Exception\`:

- \`InsufficientFundsException\` ✓
- \`UserNotFound\` ✗
- \`DataLoadException\` ✓

---

## What You Learned

- Extend \`RuntimeException\` for unchecked exceptions (most common)
- Extend \`Exception\` for checked exceptions (force callers to handle)
- Add domain-specific fields to give callers precise information
- Always pass the original cause when wrapping another exception
- Group related exceptions under a common base class

## What Comes Next

Now you'll learn the proper way to handle closeable resources automatically.

Continue to: **7.9 try-with-resources — the right way to handle closeable resources**
`,
};
