export const lessonRefactoringCodeClarity = {
  id: "refactoring-code-clarity",
  title: "Refactoring for Code Clarity",
  hasChallenge: false,
  article: `
## Refactoring for Code Clarity

Refactoring means changing the structure of code without changing what it does.

The goal is code that is easier to read, understand, and maintain.

---

## Why Refactoring Matters

Code is read far more often than it is written.

You will re-read your own code days, weeks, and months after writing it. Teammates will read it. Future you will read it.

Code that is easy to read:
- Is faster to debug
- Is easier to extend
- Is harder to introduce bugs into
- Requires less documentation

---

## Naming

The most impactful refactoring is renaming things to be more descriptive.

\`\`\`java
// Before
int d = 24;
int h = d * 24;
int m = h * 60;

// After
int daysInMonth = 24;
int hoursInMonth = daysInMonth * 24;
int minutesInMonth = hoursInMonth * 60;
\`\`\`

Good names make comments unnecessary.

---

## Extract Method

When a method does too much, extract parts into smaller methods:

\`\`\`java
// Before — one long method
public static void processOrder(Order order) {
    // validate
    if (order.getQuantity() <= 0) throw new IllegalArgumentException("...");
    if (order.getPrice() <= 0) throw new IllegalArgumentException("...");

    // calculate total
    double subtotal = order.getQuantity() * order.getPrice();
    double tax = subtotal * 0.08;
    double total = subtotal + tax;

    // print receipt
    System.out.println("Order: " + order.getItem());
    System.out.println("Total: " + total);
}

// After — each step is named
public static void processOrder(Order order) {
    validate(order);
    double total = calculateTotal(order);
    printReceipt(order, total);
}
\`\`\`

The refactored version reads like a sentence. You understand what it does without reading the implementation.

---

## Introduce Explaining Variables

When an expression is complex, extract it into a named variable:

\`\`\`java
// Before
if (user.getAge() >= 18 && user.hasAccount() && !user.isBanned()) {
    // allow access
}

// After
boolean isEligible = user.getAge() >= 18 && user.hasAccount() && !user.isBanned();
if (isEligible) {
    // allow access
}
\`\`\`

---

## Remove Magic Numbers

Magic numbers are unexplained numeric literals. Replace them with named constants:

\`\`\`java
// Before
double tax = price * 0.08;
if (score >= 90) grade = "A";

// After
final double TAX_RATE = 0.08;
final int A_GRADE_THRESHOLD = 90;

double tax = price * TAX_RATE;
if (score >= A_GRADE_THRESHOLD) grade = "A";
\`\`\`

---

## Flatten Nested Conditionals with Guard Clauses

\`\`\`java
// Before — deep nesting
public static void processUser(User user) {
    if (user != null) {
        if (user.isActive()) {
            if (user.hasPermission()) {
                // do the actual work
                doWork(user);
            }
        }
    }
}

// After — guard clauses exit early
public static void processUser(User user) {
    if (user == null) return;
    if (!user.isActive()) return;
    if (!user.hasPermission()) return;

    // now do the actual work
    doWork(user);
}
\`\`\`

Guard clauses reduce indentation and make the happy path obvious.

---

## IntelliJ Refactoring Tools

IntelliJ has built-in refactoring tools:

- **Rename**: Shift+F6 — renames a variable/method/class and updates all references
- **Extract Method**: Ctrl+Alt+M (Cmd+Option+M) — extracts selected code into a new method
- **Extract Variable**: Ctrl+Alt+V (Cmd+Option+V) — wraps an expression in a named variable
- **Inline**: Ctrl+Alt+N — replaces a variable with its value

These are safer than manual refactoring — IntelliJ updates all references automatically.

---

## What You Learned

- Refactoring improves code structure without changing behavior
- Descriptive naming is the highest-impact refactoring
- Extract Method: split large methods into named, single-purpose parts
- Introduce explaining variables for complex expressions
- Replace magic numbers with named constants
- Guard clauses flatten nested conditionals

## What Comes Next

Clear code is easier to write when you've broken down the problem first. The final lesson in this module covers problem decomposition.

Continue to:
**3.8 Problem Decomposition**
`,
};
