export const lessonMiniProjectBankAccount = {
  id: "mini-project-bank-account",
  title: "Mini-Project: Bank Account",
  hasChallenge: false,
  article: `
## Overview

Build a \`BankAccount\` class that models a real bank account with proper encapsulation.

Then write a simple program that demonstrates it working.

This project tests whether you can design and implement an OOP class from scratch — not just define fields, but protect them correctly and provide meaningful behavior.

---

## What You're Building

A \`BankAccount\` class with:
- Owner name and account number
- A balance that can only change through controlled operations
- Deposit and withdrawal methods with validation
- Transaction history
- A summary method

And a \`Main\` class that creates accounts and exercises the functionality.

---

## Requirements Checklist (Core)

**BankAccount class:**
- [ ] Private fields: owner name, account number, balance
- [ ] Constructor that sets owner name and account number (balance starts at 0)
- [ ] \`deposit(double amount)\` — adds to balance; rejects amounts ≤ 0
- [ ] \`withdraw(double amount)\` — subtracts from balance; rejects insufficient funds and amounts ≤ 0
- [ ] \`getBalance()\` — returns current balance
- [ ] \`toString()\` — returns a readable summary of the account

**Main class:**
- [ ] Create at least two BankAccount objects
- [ ] Perform deposits, withdrawals, and print balances
- [ ] Attempt an invalid withdrawal (overdraft) and confirm it's rejected
- [ ] Print each account's toString()

---

## User Experience Checklist (Recommended)

- [ ] Methods print feedback: "Deposited $100.00 — new balance: $1100.00"
- [ ] Invalid operations print a clear error: "Withdrawal failed: insufficient funds."
- [ ] Transaction history: keep a list of all transactions (optional but recommended)

---

## Rules

- Balance must never go negative
- Deposit and withdrawal amounts must be positive
- All fields must be private
- Balance can only change through deposit() and withdraw()

---

## Suggested Build Plan

1. Create \`BankAccount.java\`
2. Declare private fields
3. Write the constructor
4. Write \`deposit()\` with validation
5. Write \`withdraw()\` with validation
6. Write \`getBalance()\` getter
7. Write \`toString()\`
8. Create \`Main.java\`, create BankAccount instances, test all operations

---

## Testing Checklist

- [ ] Deposit a positive amount — balance increases correctly
- [ ] Withdraw a positive amount — balance decreases correctly
- [ ] Withdraw more than the balance — rejected, balance unchanged
- [ ] Deposit a negative amount — rejected
- [ ] toString() shows owner name, account number, and balance

---

## Extension Challenges

### Upgrade 1 — Transaction History
Store a list of all deposits and withdrawals. Add a \`printHistory()\` method.

### Upgrade 2 — Account Types
Create a \`SavingsAccount\` subclass with a minimum balance requirement (preview of inheritance).

### Upgrade 3 — Transfer
Add a \`transfer(BankAccount target, double amount)\` method that withdraws from this account and deposits into another.

### Upgrade 4 — Interest
Add an \`applyInterest(double rate)\` method that multiplies the balance by (1 + rate).

---

## Submission Requirements

Files: \`BankAccount.java\` and \`Main.java\`

Run with:
\`\`\`bash
javac BankAccount.java Main.java && java Main
\`\`\`
`,
  support: {
    intro: `
Use support in order: Level 1 → Level 2 → Blueprint → Example Solution.

Always attempt your own implementation first. The design decisions you make while struggling are the ones that stick.
    `.trim(),

    level1Nudges: [
      "What should happen if someone tries to deposit -50? Where do you check?",
      "What should happen if someone tries to withdraw more than the balance? Where do you check?",
      "If balance is private, what's the only way for outside code to know the balance?",
      "What information do you want toString() to show?",
    ],

    level2Hints: [
      "Inside deposit(): if (amount <= 0) return early or throw — don't change balance.",
      "Inside withdraw(): check both amount > 0 AND amount <= balance.",
      "getBalance() is a getter — it just returns this.balance.",
      "toString() format: 'Account #12345 | Owner: Alice | Balance: $1000.00'",
    ],

    blueprint: [
      "Declare private fields: String ownerName, int accountNumber, double balance.",
      "Constructor: BankAccount(String ownerName, int accountNumber) — sets name and number, balance = 0.",
      "deposit(double amount): if amount <= 0, print error and return. Else: balance += amount.",
      "withdraw(double amount): if amount <= 0 or amount > balance, print error and return. Else: balance -= amount.",
      "getBalance(): return balance;",
      "toString(): return formatted string with account number, owner, balance.",
      "In Main: create 2 BankAccounts, deposit, withdraw, try invalid ops, print toString().",
    ],

    debuggingGuide: [
      {
        problem: "My withdraw method allows the balance to go negative.",
        hint: "Check your condition. You need: if (amount > balance) — reject. If amount <= 0 — also reject. Both conditions must be checked.",
      },
      {
        problem: "toString() prints the memory address instead of account info.",
        hint: "Make sure you annotated the method with @Override and the signature is exactly: public String toString()",
      },
    ],

    revealSolutionWarning: `
This is one implementation. Yours may differ in style — both can be correct.

Read every line. Understand every decision before moving on.
    `.trim(),

    exampleSolution: `public class BankAccount {
    private String ownerName;
    private int accountNumber;
    private double balance;

    public BankAccount(String ownerName, int accountNumber) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = 0.0;
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Deposit failed: amount must be positive.");
            return;
        }
        balance += amount;
        System.out.printf("Deposited $%.2f. New balance: $%.2f%n", amount, balance);
    }

    public void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("Withdrawal failed: amount must be positive.");
            return;
        }
        if (amount > balance) {
            System.out.println("Withdrawal failed: insufficient funds.");
            return;
        }
        balance -= amount;
        System.out.printf("Withdrew $%.2f. New balance: $%.2f%n", amount, balance);
    }

    public double getBalance() {
        return balance;
    }

    @Override
    public String toString() {
        return String.format("Account #%d | Owner: %s | Balance: $%.2f",
                accountNumber, ownerName, balance);
    }
}`,
  },
};
