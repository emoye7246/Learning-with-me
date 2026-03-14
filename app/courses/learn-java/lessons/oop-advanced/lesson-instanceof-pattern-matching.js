export const lessonInstanceofPatternMatching = {
  id: "instanceof-pattern-matching",
  title: "instanceof and Pattern Matching",
  hasChallenge: false,
  article: `
## instanceof and Pattern Matching

The \`instanceof\` operator checks whether an object is of a given type. Java 16 added **pattern matching** for instanceof, which combines the check and the cast in one step.

---

## Classic \`instanceof\`

Before pattern matching, you'd write:

\`\`\`java
Animal a = getAnimal();

if (a instanceof Dog) {
    Dog d = (Dog) a;    // separate cast after check
    d.fetch();
} else if (a instanceof Cat) {
    Cat c = (Cat) a;
    c.purr();
}
\`\`\`

---

## Pattern Matching for instanceof (Java 16+)

\`\`\`java
Animal a = getAnimal();

if (a instanceof Dog d) {
    d.fetch();   // d is available directly — no separate cast needed
} else if (a instanceof Cat c) {
    c.purr();
}
\`\`\`

The syntax \`a instanceof Dog d\` checks the type AND binds the result to a new variable \`d\` in one step. If the check is true, \`d\` is ready to use.

---

## Scope of Pattern Variables

The pattern variable is scoped to the block where the condition is true:

\`\`\`java
if (obj instanceof String s) {
    System.out.println(s.length());   // s is in scope here
}
// s is NOT in scope here
\`\`\`

---

## Combining with \`&&\`

\`\`\`java
if (obj instanceof String s && s.length() > 5) {
    System.out.println("Long string: " + s);
}
\`\`\`

Because of short-circuit evaluation, \`s\` is in scope in the second condition (the type check already passed).

---

## Sealed Classes and Pattern Matching (Java 17+)

Java 17 introduced **sealed classes** — classes that restrict which subclasses can exist:

\`\`\`java
public sealed interface Shape permits Circle, Rectangle, Triangle { }
\`\`\`

Combined with switch pattern matching (Java 21):

\`\`\`java
double area = switch (shape) {
    case Circle c    -> Math.PI * c.radius() * c.radius();
    case Rectangle r -> r.width() * r.height();
    case Triangle t  -> 0.5 * t.base() * t.height();
};
\`\`\`

The compiler knows all possible subtypes (from the sealed declaration) and warns if you miss one.

---

## When to Use instanceof vs Polymorphism

**Prefer polymorphism:**

\`\`\`java
// Better — each type handles its own behavior
double area = shape.getArea();
\`\`\`

**Use instanceof when:**
- You're working with types you can't modify
- You need to handle a few specific types in a utility method
- You're using pattern matching with sealed types for exhaustive checks

---

## What You Learned

- \`instanceof\` checks an object's type
- Pattern matching (Java 16+) combines check and cast: \`obj instanceof Type t\`
- The pattern variable is in scope only where the condition is true
- Sealed classes (Java 17+) restrict subtyping; switch pattern matching can exhaustively cover all cases
- Prefer polymorphism over instanceof chains when possible

## What Comes Next

Inheritance is powerful, but it's often overused. The next lesson explores composition as a more flexible alternative.

Continue to:
**5.7 Composition vs Inheritance**
`,
};
