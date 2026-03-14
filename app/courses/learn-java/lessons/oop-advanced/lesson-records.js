export const lessonRecords = {
  id: "records",
  title: "Records",
  hasChallenge: false,
  article: `
## Records (Java 16+)

Records are a special kind of class designed for immutable data carriers. They eliminate the boilerplate of writing constructors, getters, equals, hashCode, and toString.

---

## The Problem Records Solve

A simple data class in Java requires a lot of code:

\`\`\`java
public class Point {
    private final double x;
    private final double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double x() { return x; }
    public double y() { return y; }

    @Override
    public boolean equals(Object o) { ... }

    @Override
    public int hashCode() { ... }

    @Override
    public String toString() { ... }
}
\`\`\`

That's 25+ lines for two fields.

---

## A Record

\`\`\`java
public record Point(double x, double y) { }
\`\`\`

One line. Java generates everything automatically:
- A constructor that takes \`x\` and \`y\`
- \`x()\` and \`y()\` accessor methods
- \`equals()\` and \`hashCode()\` based on all fields
- \`toString()\` that returns \`Point[x=1.0, y=2.0]\`

---

## Using a Record

\`\`\`java
Point p1 = new Point(1.0, 2.0);
Point p2 = new Point(1.0, 2.0);

System.out.println(p1.x());         // 1.0
System.out.println(p1.y());         // 2.0
System.out.println(p1);             // Point[x=1.0, y=2.0]
System.out.println(p1.equals(p2));  // true — structural equality
\`\`\`

Note: Record accessors use \`x()\` not \`getX()\` (different naming convention from regular classes).

---

## Records Are Immutable

All fields in a record are \`private final\`. There are no setters. You cannot change a record's fields after creation.

This is intentional. Records are for values that shouldn't change.

---

## Adding Methods to Records

\`\`\`java
public record Circle(double x, double y, double radius) {
    public double area() {
        return Math.PI * radius * radius;
    }

    public boolean containsPoint(Point p) {
        double dx = p.x() - x;
        double dy = p.y() - y;
        return dx * dx + dy * dy <= radius * radius;
    }
}
\`\`\`

---

## Compact Constructor (Validation)

\`\`\`java
public record Temperature(double celsius) {
    public Temperature {
        // compact constructor — no parameter list needed
        if (celsius < -273.15) {
            throw new IllegalArgumentException("Below absolute zero: " + celsius);
        }
    }
}
\`\`\`

The compact constructor runs after the auto-generated parameter assignment. Use it for validation.

---

## When to Use Records

Use records for:
- Data transfer objects (DTOs) — data passed between layers
- Immutable value objects — coordinates, money amounts, dates
- Simple data containers that don't need mutable state

Don't use records for:
- Objects that need to change after creation
- Objects with complex behavior (use a regular class)

---

## What You Learned

- Records are immutable data classes that auto-generate constructor, accessors, equals, hashCode, and toString
- Accessor methods use \`fieldName()\` (not \`getFieldName()\`)
- Records can have methods and validation through compact constructors
- Records are the right choice for immutable value objects and DTOs

## What Comes Next

Before the module projects, let's address a key design question: when should you NOT use inheritance?

Continue to:
**5.10 When Not to Use Inheritance**
`,
};
