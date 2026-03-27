export const lessonEncapsulation = {
  id: "encapsulation",
  title: "Encapsulation",
  hasChallenge: false,
  article: `
## Encapsulation

Encapsulation is the principle of hiding an object's internal state and requiring all interactions to go through a defined interface.

It's not about hiding things from other programmers. It's about protecting the integrity of your object's data.

---

## The Problem Without Encapsulation

\`\`\`java
public class Temperature {
    public double celsius;
}

Temperature t = new Temperature();
t.celsius = -500;   // physically impossible, but nothing stops this
\`\`\`

When fields are public, any code anywhere can set them to invalid values. Your object can be in an inconsistent state.

---

## Getters and Setters

The classic encapsulation pattern: make fields \`private\`, provide \`public\` methods to read and write them.

\`\`\`java
public class Temperature {
    private double celsius;

    // Getter
    public double getCelsius() {
        return celsius;
    }

    // Setter with validation
    public void setCelsius(double celsius) {
        if (celsius < -273.15) {
            throw new IllegalArgumentException("Temperature below absolute zero");
        }
        this.celsius = celsius;
    }

    // Derived getter — no corresponding setter needed
    public double getFahrenheit() {
        return celsius * 9.0 / 5.0 + 32;
    }
}
\`\`\`

Now:
- You can read the temperature via \`getCelsius()\`
- You can set it via \`setCelsius()\`, but validation prevents impossible values
- You get Fahrenheit for free from the derived getter

---

## Naming Conventions

Java getters and setters follow a standard naming convention:
- Getter: \`getFieldName()\` (or \`isFieldName()\` for booleans)
- Setter: \`setFieldName(value)\`

\`\`\`java
private String name;
private boolean active;

public String getName() { return name; }
public void setName(String name) { this.name = name; }

public boolean isActive() { return active; }
public void setActive(boolean active) { this.active = active; }
\`\`\`

IntelliJ can generate getters and setters automatically: right-click in the class → Generate → Getter and Setter.

---

## Immutable Objects

Some objects should never change after creation. Make all fields \`private\` and \`final\`, provide only getters, no setters:

\`\`\`java
public class Point {
    private final double x;
    private final double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double getX() { return x; }
    public double getY() { return y; }

    // No setters — Point is immutable
}
\`\`\`

Immutable objects are thread-safe and easier to reason about. Java's \`String\` is immutable for this reason.

---

## Don't Blindly Add Getters and Setters

A common mistake is to add a getter and setter for every field "just because that's what you do."

Ask yourself:
- Does this field need to be readable from outside? If not, no getter.
- Does this field need to be settable from outside? If not, no setter.
- Can the setter enforce any rules? If yes, add it. If not, consider making the field public-final.

Encapsulation is not about adding boilerplate. It's about controlling access where it matters.

---

## What You Learned

- Encapsulation: keep fields private, expose behavior through public methods
- Getters read field values; setters set them (with optional validation)
- Boolean getters use \`is\` prefix: \`isActive()\`
- Immutable objects have only getters and \`final\` fields
- Don't add getters/setters blindly — only where needed

## What Comes Next

Some methods and fields belong to the class itself, not to any specific object. The next lesson covers the \`static\` keyword.

Continue to:
**4.7 The \`static\` Keyword**
`,
};
