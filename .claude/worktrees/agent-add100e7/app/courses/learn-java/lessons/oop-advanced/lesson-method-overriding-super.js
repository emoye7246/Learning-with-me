export const lessonMethodOverridingSuper = {
  id: "method-overriding-super",
  title: "Method Overriding and super",
  hasChallenge: false,
  article: `
## Method Overriding and super

Method overriding lets a subclass provide its own implementation of a method defined in the parent class.

---

## Overriding a Method

\`\`\`java
public class Animal {
    public String speak() {
        return "...";
    }
}

public class Dog extends Animal {
    @Override
    public String speak() {
        return "Woof!";
    }
}

public class Cat extends Animal {
    @Override
    public String speak() {
        return "Meow!";
    }
}

Animal d = new Dog();
Animal c = new Cat();
System.out.println(d.speak());   // "Woof!"
System.out.println(c.speak());   // "Meow!"
\`\`\`

Even though the variable type is \`Animal\`, Java calls the correct version based on the actual object type at runtime. This is **runtime polymorphism**.

---

## Rules for Overriding

1. Same method name
2. Same parameter types (overloading is different)
3. Return type must be the same or a subtype (covariant return)
4. Access modifier can be the same or less restrictive (can widen, not narrow)
5. Must not be \`static\`, \`private\`, or \`final\`

---

## \`@Override\` Annotation

Always use \`@Override\` when overriding:

\`\`\`java
@Override
public String speak() { ... }
\`\`\`

Without it, a typo (\`speek\` instead of \`speak\`) creates a new method instead of overriding — and you won't know why polymorphism doesn't work.

---

## Calling the Parent Method with \`super\`

You can call the parent's version of a method using \`super.methodName()\`:

\`\`\`java
public class ElectricCar extends Car {
    private int batteryLevel;

    @Override
    public String toString() {
        return super.toString() + " [Battery: " + batteryLevel + "%]";
    }
}
\`\`\`

This reuses the parent's \`toString()\` and appends extra info.

---

## Overriding vs Overloading

| Feature | Overriding | Overloading |
|---|---|---|
| Same name? | Yes | Yes |
| Same parameters? | Yes | No |
| Where? | Subclass | Same class |
| Purpose | Change behavior for subtype | Provide multiple signatures |
| Runtime or compile-time? | Runtime | Compile-time |

---

## Preventing Override with \`final\`

If you want to prevent subclasses from overriding a method, mark it \`final\`:

\`\`\`java
public final void criticalOperation() {
    // cannot be overridden
}
\`\`\`

A \`final\` class cannot be subclassed at all (e.g., Java's \`String\` is final).

---

## What You Learned

- Subclasses can override parent methods with \`@Override\`
- Java calls the most specific override at runtime (runtime polymorphism)
- \`super.method()\` calls the parent's version of a method
- \`final\` prevents overriding; a \`final\` class cannot be extended
- Overriding changes behavior for a subtype; overloading provides multiple signatures

## What Comes Next

Sometimes you want a class that defines shared behavior but should never be instantiated directly. The next lesson covers abstract classes.

Continue to:
**5.3 Abstract Classes**
`,
};
