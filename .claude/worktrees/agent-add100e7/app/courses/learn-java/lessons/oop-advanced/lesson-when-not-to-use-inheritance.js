export const lessonWhenNotToUseInheritance = {
  id: "when-not-to-use-inheritance",
  title: "When Not to Use Inheritance",
  hasChallenge: false,
  article: `
## When Not to Use Inheritance

Inheritance is the most misused OOP tool. Knowing when not to use it is as important as knowing how to use it.

---

## The Liskov Substitution Principle

The Liskov Substitution Principle (LSP) states:

> If \`B\` extends \`A\`, then anywhere you use \`A\`, you should be able to use \`B\` without breaking the program.

This is the test for whether inheritance is appropriate.

A \`Square\` extends \`Rectangle\`? Only if a Square can be used everywhere a Rectangle is used — including in code that sets width and height independently.

\`\`\`java
Rectangle r = new Square(5);
r.setWidth(10);    // Square must have equal sides — what does this do?
r.setHeight(5);    // Square changes both dimensions — rectangle logic breaks
\`\`\`

A Square is-a Rectangle mathematically, but it's NOT a Rectangle in the Java sense if Square violates Rectangle's behavior. This is the classic LSP violation.

---

## Signs You're Overusing Inheritance

**1. The subclass overrides most of the parent's methods**

If you're overriding everything, you're not reusing — you're fighting the hierarchy.

**2. The inheritance is for code reuse, not type relationship**

\`\`\`java
// Bad: Button extends Rectangle just to reuse width/height
class Button extends Rectangle { ... }

// Better: Button HAS-A Dimension
class Button {
    private Dimension size;
}
\`\`\`

**3. The hierarchy grows deep (more than 2-3 levels)**

Deep hierarchies are hard to understand and change. A change at the top propagates down in unexpected ways.

**4. You're adding "not applicable" markers to subclasses**

\`\`\`java
class Bird {
    void fly() { ... }
}

class Penguin extends Bird {
    @Override
    void fly() {
        throw new UnsupportedOperationException("Penguins can't fly");
    }
}
\`\`\`

If a subclass can't do what the parent promises, it's not a valid subclass.

---

## Prefer Interfaces for Type Contracts

\`\`\`java
// Instead of Bird → FlyingBird → Penguin (awkward)
interface Flyable { void fly(); }
interface Swimmable { void swim(); }

class Eagle implements Flyable { ... }
class Penguin implements Swimmable { ... }
class Duck implements Flyable, Swimmable { ... }
\`\`\`

Each class implements only the contracts that apply to it.

---

## The Two Legitimate Uses of Inheritance

1. **True IS-A relationship** where LSP holds
2. **Framework extension points** — when a framework (like JUnit, Spring) explicitly designs classes to be subclassed

Outside of these two cases, composition is almost always the better choice.

---

## What You Learned

- The Liskov Substitution Principle: subclasses must be substitutable for their parent
- Don't use inheritance just for code reuse — use composition
- Deep inheritance hierarchies are hard to maintain
- Interfaces are better than inheritance for defining type contracts without shared state

## What Comes Next

You've completed the OOP modules. The next three lessons are mini-projects applying advanced OOP design.

Continue to:
**5.11 Mini-Project: Shape Hierarchy**
`,
};
