export const lessonWhatIsOop = {
  id: "what-is-oop",
  title: "What Is OOP?",
  hasChallenge: false,
  article: `
## What Is OOP?

Object-Oriented Programming (OOP) is a way of organizing code around **objects** — things that have both data and behavior.

Java was designed from the beginning to be an OOP language. Understanding OOP is not optional — it's central to writing any meaningful Java program.

---

## The Problem OOP Solves

Imagine writing a banking program with procedural code:

\`\`\`java
String ownerName = "Alice";
double balance = 1000.0;
int accountNumber = 12345;

// Functions that operate on those variables
double getBalance() { return balance; }
void deposit(double amount) { balance += amount; }
void withdraw(double amount) { ... }
\`\`\`

This works for one account. But what if you have 1000 accounts?

You'd need arrays, parallel data structures, and functions that take account IDs as parameters. The data and the functions that operate on it are separate. It becomes tangled quickly.

OOP solves this by bundling related data and behavior together into a single unit: an **object**.

---

## The Core Idea: Objects

An object has:
- **State** (fields/attributes): what it knows — e.g., owner name, balance, account number
- **Behavior** (methods): what it can do — e.g., deposit, withdraw, check balance

In Java, you define an object's structure using a **class**:

\`\`\`java
public class BankAccount {
    String ownerName;
    double balance;
    int accountNumber;

    void deposit(double amount) {
        balance += amount;
    }

    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        }
    }
}
\`\`\`

Then you create as many instances (actual objects) as you need:

\`\`\`java
BankAccount alice = new BankAccount();
BankAccount bob = new BankAccount();
\`\`\`

Each object has its own copy of the data.

---

## The Four Pillars of OOP

Most introductions present four core OOP concepts. You'll learn each in depth:

1. **Encapsulation** — Bundle data and behavior; hide internal details
2. **Inheritance** — Build new classes on top of existing ones
3. **Polymorphism** — Same interface, different implementations
4. **Abstraction** — Focus on what something does, not how

These aren't just vocabulary words — they're design principles that shape how you structure programs.

---

## Why Java Is OOP-First

Java requires every piece of code to live inside a class. There are no standalone functions.

This is a deliberate choice. Java was designed for large team codebases where structure and predictability matter more than conciseness.

When you have 1 million lines of code and 50 developers, OOP's structure — defined contracts, controlled access, clear responsibilities — is what keeps the system manageable.

---

## What You Learned

- OOP bundles related data and behavior into objects
- A class is a blueprint; an object is an instance of that blueprint
- Java is OOP-first: all code lives inside classes
- The four pillars: encapsulation, inheritance, polymorphism, abstraction

## What Comes Next

You understand the concept. Now let's look at how to design and create classes.

Continue to:
**4.2 Classes and Objects**
`,
};
