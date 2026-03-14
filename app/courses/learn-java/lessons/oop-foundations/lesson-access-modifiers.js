export const lessonAccessModifiers = {
  id: "access-modifiers",
  title: "Access Modifiers",
  hasChallenge: false,
  article: `
## Access Modifiers

Access modifiers control which parts of your program can see a class, field, or method.

They are the primary tool for building well-designed, maintainable software.

---

## The Four Access Levels

| Modifier | Accessible From |
|---|---|
| \`public\` | Anywhere |
| \`protected\` | Same class, same package, subclasses |
| (none — package-private) | Same class, same package only |
| \`private\` | Same class only |

---

## \`public\`

The most permissive. Anyone can access it.

Use \`public\` for:
- The class itself (usually)
- Methods that form the public API of your class
- Constants that other code needs to use

\`\`\`java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
\`\`\`

---

## \`private\`

The most restrictive. Only accessible within the same class.

Use \`private\` for:
- Fields (almost always)
- Helper methods not meant for outside use

\`\`\`java
public class Person {
    private String name;   // private field
    private int age;

    private boolean isAdult() {   // private helper
        return age >= 18;
    }
}
\`\`\`

---

## \`protected\`

Accessible within the same class, same package, and subclasses.

Use \`protected\` for members that subclasses need to access but external code shouldn't.

You'll use this more in the inheritance module.

---

## Package-Private (No Modifier)

When you don't write any modifier, Java uses package-private:

\`\`\`java
class Helper {          // no public — package-private class
    void doSomething() { ... }   // package-private method
}
\`\`\`

Accessible within the same package, not from other packages.

---

## The Default Rule

**Fields should almost always be \`private\`.**
**Methods should usually be \`public\` or \`private\`.**

This is not a style preference. It's a design principle. Hiding fields forces users of your class to interact through methods — which you control.

---

## Why This Matters

If a field is \`public\`:
\`\`\`java
public class BankAccount {
    public double balance;   // anyone can write to this
}

// Somewhere else:
account.balance = -1000000;   // perfectly valid code, terrible result
\`\`\`

If the field is \`private\`:
\`\`\`java
public class BankAccount {
    private double balance;

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        } else {
            throw new IllegalArgumentException("Invalid amount");
        }
    }
}
\`\`\`

Now the only way to change the balance is through controlled methods that enforce rules.

---

## Modifiers on Classes

Top-level classes can only be \`public\` or package-private:

\`\`\`java
public class MyClass { ... }   // visible everywhere
class InternalHelper { ... }   // visible only within its package
\`\`\`

---

## What You Learned

- \`public\`: accessible from anywhere
- \`private\`: accessible only within the same class
- \`protected\`: accessible in the same package and in subclasses
- Package-private (no modifier): accessible within the same package
- Fields should almost always be \`private\`
- Access modifiers enforce design contracts — they're not just for protection, they communicate intent

## What Comes Next

Private fields + controlled access methods = encapsulation. The next lesson explains this core OOP principle in depth.

Continue to:
**4.6 Encapsulation**
`,
};
