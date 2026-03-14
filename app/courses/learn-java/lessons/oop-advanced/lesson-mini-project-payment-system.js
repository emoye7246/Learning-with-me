export const lessonMiniProjectPaymentSystem = {
  id: "mini-project-payment-system",
  title: "Mini-Project: Payment System",
  hasChallenge: false,
  article: `
## Overview

Design a payment processing system using interfaces and polymorphism.

Different payment methods (credit card, PayPal, bank transfer) all process payments, but they do so differently. Model this with an interface.

---

## What You're Building

A \`PaymentMethod\` interface implemented by at least three concrete classes. A \`PaymentProcessor\` class that accepts any \`PaymentMethod\` and processes it.

---

## Requirements Checklist (Core)

**PaymentMethod interface:**
- [ ] \`processPayment(double amount)\` — returns boolean (true = success)
- [ ] \`getPaymentType()\` — returns a String like "Credit Card"

**CreditCardPayment class:**
- [ ] Fields: cardNumber (last 4 digits displayed), cardHolder, expiryYear
- [ ] Validates that the card isn't expired (year >= current year)
- [ ] processPayment: simulates success with 90% probability

**PayPalPayment class:**
- [ ] Field: email
- [ ] processPayment: simulates success with 95% probability

**BankTransferPayment class:**
- [ ] Fields: bankName, accountNumber
- [ ] processPayment: always succeeds (synchronous transfer simulation)

**PaymentProcessor class:**
- [ ] \`processOrder(double amount, PaymentMethod method)\` — calls processPayment, prints result

**Main program:**
- [ ] Create multiple payment methods
- [ ] Process several orders with different payment methods
- [ ] Print a payment history

---

## Rules

- Use an interface for \`PaymentMethod\` — not an abstract class
- PaymentProcessor should accept any PaymentMethod without knowing the concrete type
- Expired credit cards must be rejected before attempting payment

---

## Suggested Build Plan

1. Define the PaymentMethod interface
2. Implement CreditCardPayment with validation
3. Implement PayPalPayment
4. Implement BankTransferPayment
5. Implement PaymentProcessor
6. Wire together in Main

---

## Testing Checklist

- [ ] Each payment type reports the correct type name
- [ ] CreditCardPayment rejects expired cards
- [ ] PaymentProcessor works with all three types polymorphically
- [ ] Payment failures are handled gracefully (don't crash)

---

## Extension Challenges

### Upgrade 1 — Retry Logic
If a payment fails, retry up to 3 times before giving up.

### Upgrade 2 — Transaction Log
Keep a list of all processed transactions (amount, method, success/failure, timestamp).

### Upgrade 3 — Refund
Add a \`refund(double amount)\` method to the interface with a default implementation that throws UnsupportedOperationException.

---

## Submission Requirements

Files: \`PaymentMethod.java\`, \`CreditCardPayment.java\`, \`PayPalPayment.java\`, \`BankTransferPayment.java\`, \`PaymentProcessor.java\`, \`Main.java\`

Run with:
\`\`\`bash
javac *.java && java Main
\`\`\`
`,
  support: {
    intro: `
Focus on the interface first, then implement one concrete class at a time.
    `.trim(),

    level1Nudges: [
      "Why use an interface here instead of an abstract class?",
      "How does PaymentProcessor accept any payment method without knowing the specific type?",
      "How do you simulate a 90% success rate? (Hint: Math.random())",
    ],

    level2Hints: [
      "PaymentProcessor takes a PaymentMethod parameter — because all three classes implement PaymentMethod.",
      "Simulating probability: Math.random() returns 0.0 to 1.0. Return true if Math.random() < 0.9 for 90% success.",
      "For expiry check: use java.time.Year.now().getValue() to get the current year.",
    ],

    blueprint: [
      "public interface PaymentMethod { boolean processPayment(double amount); String getPaymentType(); }",
      "CreditCardPayment implements PaymentMethod: validate expiry in constructor.",
      "PayPalPayment implements PaymentMethod: processPayment returns Math.random() < 0.95.",
      "BankTransferPayment implements PaymentMethod: processPayment always returns true.",
      "PaymentProcessor: processOrder(double amount, PaymentMethod method) calls method.processPayment(amount).",
      "Main: create methods, create processor, call processOrder with different methods.",
    ],

    debuggingGuide: [
      {
        problem: "My PaymentProcessor method only works with one specific payment type.",
        hint: "The parameter type in processOrder should be PaymentMethod (the interface), not CreditCardPayment or any concrete class.",
      },
    ],

    revealSolutionWarning: `
One implementation shown. Focus on how the interface enables polymorphism.
    `.trim(),

    exampleSolution: `public interface PaymentMethod {
    boolean processPayment(double amount);
    String getPaymentType();
}

public class PayPalPayment implements PaymentMethod {
    private String email;

    public PayPalPayment(String email) {
        this.email = email;
    }

    @Override
    public boolean processPayment(double amount) {
        System.out.printf("Processing $%.2f via PayPal (%s)...%n", amount, email);
        return Math.random() < 0.95;
    }

    @Override
    public String getPaymentType() { return "PayPal"; }
}`,
  },
};
