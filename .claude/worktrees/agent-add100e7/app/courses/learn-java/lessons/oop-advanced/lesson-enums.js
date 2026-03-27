export const lessonEnums = {
  id: "enums",
  title: "Enums",
  hasChallenge: false,
  article: `
## Enums

An enum (enumeration) defines a fixed set of named constants.

Java enums are much more powerful than simple constant lists — they can have fields, methods, and implement interfaces.

---

## Basic Enum

\`\`\`java
public enum Direction {
    NORTH, SOUTH, EAST, WEST
}

Direction d = Direction.NORTH;
System.out.println(d);   // NORTH
\`\`\`

---

## Using Enums in Switch

\`\`\`java
Direction d = Direction.EAST;

switch (d) {
    case NORTH -> System.out.println("Moving up");
    case SOUTH -> System.out.println("Moving down");
    case EAST  -> System.out.println("Moving right");
    case WEST  -> System.out.println("Moving left");
}
\`\`\`

---

## Enum with Fields and Methods

Enums can carry data and behavior:

\`\`\`java
public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS  (4.869e+24, 6.0518e6),
    EARTH  (5.976e+24, 6.37814e6),
    MARS   (6.421e+23, 3.3972e6);

    private final double mass;      // kg
    private final double radius;    // meters

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double surfaceGravity() {
        final double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }

    public double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

double earthWeight = 75.0;
double mass = earthWeight / Planet.EARTH.surfaceGravity();

for (Planet p : Planet.values()) {
    System.out.printf("Weight on %s: %.2f%n", p, p.surfaceWeight(mass));
}
\`\`\`

---

## Useful Enum Methods

Every enum has built-in methods:

\`\`\`java
Direction d = Direction.NORTH;

d.name()          // "NORTH" — the enum constant's name as String
d.ordinal()       // 0 — the position in the enum (0-indexed)

Direction.values()     // array of all constants: [NORTH, SOUTH, EAST, WEST]
Direction.valueOf("EAST")   // Direction.EAST — parse from String
\`\`\`

---

## Enums Can Implement Interfaces

\`\`\`java
public interface Describable {
    String describe();
}

public enum Season implements Describable {
    SPRING {
        @Override public String describe() { return "Warm and rainy"; }
    },
    SUMMER {
        @Override public String describe() { return "Hot and sunny"; }
    },
    AUTUMN {
        @Override public String describe() { return "Cool and windy"; }
    },
    WINTER {
        @Override public String describe() { return "Cold and snowy"; }
    };
}
\`\`\`

---

## When to Use Enums

Use enums when:
- A variable can only be one of a fixed set of values
- You need type safety (not just string constants)
- The values have associated behavior or data

\`\`\`java
// Bad — uses String with no compile-time checking
String status = "ACTIVE";   // what if you typo "ACTIV"?

// Good — compile-time checked, readable, safe
Status status = Status.ACTIVE;
\`\`\`

---

## What You Learned

- Enums define a fixed set of named constants
- Java enums can have constructors, fields, and methods
- \`values()\` returns all constants; \`valueOf(String)\` parses a string to an enum
- Enums can implement interfaces
- Prefer enums over String constants for type safety

## What Comes Next

Java 16 introduced records — a concise way to create immutable data classes.

Continue to:
**5.9 Records**
`,
};
