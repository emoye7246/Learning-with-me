export const projectBankAccountSimulator = {
  id: "project-bank-account-simulator",
  title: "Project: Bank Account Simulator",

  article: `
## Overview

Build a bank account simulator using OOP.

The program should let users create accounts, deposit, withdraw, and view transaction history.

This project is about applying classes correctly — modeling real entities with real state and behavior.

---

## Functional Requirements

Your simulator must:

- [ ] Create a \`BankAccount\` class with an owner name and starting balance
- [ ] Implement a \`deposit(amount)\` method with validation
- [ ] Implement a \`withdraw(amount)\` method with validation
- [ ] Track a transaction history (list of records)
- [ ] Implement a \`get_statement()\` method that prints all transactions
- [ ] Reject deposits of zero or negative amounts
- [ ] Reject withdrawals exceeding the current balance
- [ ] Display a running balance after each transaction

---

## User Flow

1. Create an account with owner name and starting balance.
2. Make several deposits and withdrawals.
3. Print a statement showing all transactions and final balance.
4. Handle invalid operations gracefully (no crashes).

---

## Suggested Class Structure

\`\`\`text
BankAccount
  - owner: str
  - balance: float
  - transactions: list

  + deposit(amount) → None
  + withdraw(amount) → None
  + get_balance() → float
  + get_statement() → None
\`\`\`

---

## Implementation Milestones

1. Define the class with \`__init__\` setting owner, balance, and empty transactions list.
2. Implement \`deposit\` with validation and history logging.
3. Implement \`withdraw\` with balance check and history logging.
4. Implement \`get_statement\` that prints each transaction.
5. Add \`__str__\` or \`__repr__\` for useful account display.
6. Add a simple CLI loop (optional: test via function calls in \`main.py\`).

---

## Testing Checklist

- [ ] Deposit a valid amount and confirm balance updates
- [ ] Attempt to deposit 0 — should fail with a message
- [ ] Attempt to deposit a negative number — should fail
- [ ] Withdraw a valid amount and confirm balance updates
- [ ] Attempt to overdraw — should fail with a message
- [ ] Print a full statement after 5+ transactions
- [ ] Create two accounts and confirm they have independent state

---

## Optional Extensions

- [ ] Add account types (Checking, Savings with interest rate)
- [ ] Add a transfer method between two accounts
- [ ] Save/load account data to/from JSON
- [ ] Add a minimum balance requirement for Savings

---

## Submission Requirements

Entry file: \`main.py\`

Run with:

\`\`\`bash
python main.py
\`\`\`

---

## What This Project Proves

You can model a real-world entity with proper state management, validation, and history tracking using OOP.
`,

  support: {
    intro: `
Use this support in order.

Start with Level 1 nudges.
Move to Level 2 hints if still stuck.
Use the blueprint to unblock implementation.
Read the example solution only after you've built your own.
    `.trim(),

    level1Nudges: [
      "What data does a single bank account need to store?",
      "How will you record each transaction — what fields does a record need?",
      "What should happen if someone tries to deposit a negative amount?",
      "How will you check if there's enough balance before withdrawing?",
      "How will get_statement() loop through and display transactions?",
      "What should __str__ return to make the account printable?",
    ],

    level2Hints: [
      "Store transactions as a list of dicts: {'type': 'deposit', 'amount': 100, 'balance': 600}.",
      "In deposit(), check if amount > 0 before proceeding. Raise ValueError or print an error message.",
      "In withdraw(), check if amount <= self.balance before subtracting.",
      "Append to self.transactions after every successful operation.",
      "get_statement() loops through self.transactions and prints each one formatted.",
    ],

    blueprint: [
      "Define class BankAccount with __init__(self, owner, initial_balance=0).",
      "Set self.owner, self.balance, and self.transactions = [].",
      "Define deposit(self, amount): validate > 0, add to balance, append to transactions.",
      "Define withdraw(self, amount): validate > 0 and <= balance, subtract, append.",
      "Define get_statement(self): loop transactions, print each with type, amount, balance.",
      "Define __str__(self): return a readable summary of owner and current balance.",
      "In main.py: create an account, make deposits and withdrawals, print statement.",
    ],

    debuggingGuide: [
      {
        problem: "Balance goes negative despite my check.",
        hint: "Check that you're comparing amount <= self.balance, not amount < self.balance. Also confirm the check happens before subtraction.",
      },
      {
        problem: "Two accounts share the same transaction list.",
        hint: "You likely defined transactions = [] as a class attribute. Move it to __init__ as self.transactions = [].",
      },
      {
        problem: "get_statement() prints nothing.",
        hint: "Check that deposit() and withdraw() are actually appending to self.transactions. Add a print statement inside them temporarily.",
      },
    ],

    revealSolutionWarning: `
This is one reference implementation.

If your version meets all checklist items and handles errors correctly, it's valid.
Read this to compare structure — not to copy blindly.
    `.trim(),

    exampleSolution: `class BankAccount:
    def __init__(self, owner, initial_balance=0):
        self.owner = owner
        self.balance = initial_balance
        self.transactions = []
        if initial_balance > 0:
            self.transactions.append({
                "type": "initial deposit",
                "amount": initial_balance,
                "balance": self.balance,
            })

    def deposit(self, amount):
        if amount <= 0:
            print("Deposit amount must be positive.")
            return
        self.balance += amount
        self.transactions.append({"type": "deposit", "amount": amount, "balance": self.balance})
        print(f"Deposited \${amount:.2f}. Balance: \${self.balance:.2f}")

    def withdraw(self, amount):
        if amount <= 0:
            print("Withdrawal amount must be positive.")
            return
        if amount > self.balance:
            print("Insufficient funds.")
            return
        self.balance -= amount
        self.transactions.append({"type": "withdrawal", "amount": amount, "balance": self.balance})
        print(f"Withdrew \${amount:.2f}. Balance: \${self.balance:.2f}")

    def get_statement(self):
        print(f"\\n--- Statement for {self.owner} ---")
        for t in self.transactions:
            print(f"  {t['type'].capitalize():<20} \${t['amount']:>8.2f}   Balance: \${t['balance']:.2f}")
        print(f"Current balance: \${self.balance:.2f}\\n")

    def __str__(self):
        return f"BankAccount(owner={self.owner!r}, balance=\${self.balance:.2f})"


if __name__ == "__main__":
    account = BankAccount("Alice", 500)
    account.deposit(200)
    account.withdraw(50)
    account.withdraw(1000)
    account.deposit(-10)
    account.get_statement()`,

    upgrades: {
      transferBlueprint: [
        "Add transfer(self, other, amount) method.",
        "Call self.withdraw(amount) and other.deposit(amount).",
        "Only transfer if withdrawal succeeds.",
      ],
      savingsBlueprint: [
        "Create SavingsAccount(BankAccount) with interest_rate attribute.",
        "Add apply_interest() method that deposits interest amount.",
        "Override withdraw() to enforce minimum balance.",
      ],
    },
  },
};
