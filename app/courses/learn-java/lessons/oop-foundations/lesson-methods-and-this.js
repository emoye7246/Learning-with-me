export const lessonMethodsAndThis = {
  id: "methods-and-this",
  title: "Methods and This",
  hasChallenge: false,
  article: `
## Methods and \`this\`

Instance methods are behaviors that belong to an object. They can access and modify the object's fields through \`this\`.

---

## Instance Methods vs Static Methods

In the fundamentals module, all your methods were \`static\` — they belonged to the class, not to any object.

Instance methods do **not** have \`static\`. They run in the context of a specific object:

\`\`\`java
public class Circle {
    double radius;

    // Constructor
    public Circle(double radius) {
        this.radius = radius;
    }

    // Instance method — belongs to a specific Circle object
    public double getArea() {
        return Math.PI * radius * radius;
    }

    public double getCircumference() {
        return 2 * Math.PI * radius;
    }
}
\`\`\`

Calling these methods:

\`\`\`java
Circle c1 = new Circle(5.0);
Circle c2 = new Circle(10.0);

System.out.println(c1.getArea());           // 78.54...
System.out.println(c2.getArea());           // 314.16...
\`\`\`

Each call to \`getArea()\` uses that object's \`radius\`.

---

## How \`this\` Works in Methods

Inside an instance method, \`this\` automatically refers to the object the method was called on:

\`\`\`java
public double getArea() {
    // this.radius and radius are the same here (when no parameter named radius exists)
    return Math.PI * this.radius * this.radius;
}
\`\`\`

You usually don't need to write \`this.\` explicitly in methods unless there's a naming conflict. But you can always write it for clarity.

---

## Returning \`this\` for Method Chaining

A method can return \`this\` to enable chaining:

\`\`\`java
public class Builder {
    String name = "";
    int value = 0;

    public Builder setName(String name) {
        this.name = name;
        return this;   // return the same object
    }

    public Builder setValue(int value) {
        this.value = value;
        return this;
    }

    public void build() {
        System.out.println(name + ": " + value);
    }
}

// Usage:
new Builder().setName("score").setValue(100).build();
\`\`\`

This pattern is common in builder classes and stream operations.

---

## Methods Can Call Other Methods

\`\`\`java
public class BankAccount {
    double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public boolean hasSufficientFunds(double amount) {
        return balance >= amount;
    }

    public void withdraw(double amount) {
        if (hasSufficientFunds(amount)) {   // calls another instance method
            balance -= amount;
            System.out.println("Withdrew: " + amount);
        } else {
            System.out.println("Insufficient funds.");
        }
    }
}
\`\`\`

---

## Void vs Returning Methods

**Void methods** perform an action but return no value:
\`\`\`java
public void deposit(double amount) {
    balance += amount;
}
\`\`\`

**Returning methods** compute and return a value:
\`\`\`java
public double getBalance() {
    return balance;
}
\`\`\`

**Query methods** (like \`getBalance\`) should not change state. **Command methods** (like \`deposit\`) change state. Keeping these roles separate makes code easier to reason about.

---

## What You Learned

- Instance methods don't have \`static\` — they belong to a specific object
- \`this\` refers to the object the method was called on
- Methods can call other methods on the same object
- Returning \`this\` enables method chaining
- Query methods read state; command methods change state — keep them separate

## What Comes Next

Right now, your objects' fields can be accessed and changed from anywhere. That's dangerous. The next lesson covers access modifiers — the tool for controlling visibility.

Continue to:
**4.5 Access Modifiers**
`,
};
