export const lessonInterfaces = {
  id: "interfaces",
  title: "Interfaces",
  hasChallenge: false,
  article: `
## Interfaces

An interface defines a contract — a set of methods that any implementing class must provide.

Interfaces are one of the most important tools in Java design.

---

## Defining an Interface

\`\`\`java
public interface Drawable {
    void draw();
    void resize(double factor);
}
\`\`\`

An interface:
- Uses \`interface\` keyword instead of \`class\`
- All methods are implicitly \`public abstract\` (you don't need to write it)
- Cannot have instance fields (only \`public static final\` constants)
- Cannot have constructors

---

## Implementing an Interface

\`\`\`java
public class Circle implements Drawable {
    private double radius;

    @Override
    public void draw() {
        System.out.println("Drawing circle with radius " + radius);
    }

    @Override
    public void resize(double factor) {
        radius *= factor;
    }
}
\`\`\`

A class uses \`implements\` (not \`extends\`) for interfaces.

A class can implement **multiple interfaces**:

\`\`\`java
public class Shape implements Drawable, Serializable, Comparable<Shape> {
    // must implement all methods from all interfaces
}
\`\`\`

---

## Default Methods (Java 8+)

Interfaces can have \`default\` methods — concrete implementations:

\`\`\`java
public interface Drawable {
    void draw();

    default void drawWithLabel(String label) {
        System.out.println("Label: " + label);
        draw();
    }
}
\`\`\`

Implementing classes get \`drawWithLabel\` for free, but can override it if needed.

---

## Static Methods in Interfaces (Java 8+)

\`\`\`java
public interface Validator<T> {
    boolean validate(T value);

    static Validator<String> notEmpty() {
        return s -> s != null && !s.isEmpty();
    }
}
\`\`\`

---

## Programming to an Interface

This is a fundamental design principle:

\`\`\`java
// Bad — tied to implementation
ArrayList<String> list = new ArrayList<>();

// Good — programmed to interface
List<String> list = new ArrayList<>();
\`\`\`

When you program to the interface, you can swap the implementation (e.g., change to \`LinkedList\`) without changing the code that uses it.

---

## Common Java Interfaces

| Interface | Purpose |
|---|---|
| \`Comparable<T>\` | Natural ordering (\`compareTo\`) |
| \`Iterable<T>\` | Can be iterated with for-each |
| \`Runnable\` | Can be run in a thread (\`run()\`) |
| \`Callable<V>\` | Can return a value from a thread |
| \`Serializable\` | Can be serialized to bytes |
| \`Closeable\` | Can be closed (try-with-resources) |

---

## What You Learned

- Interfaces define contracts — sets of methods a class must implement
- A class uses \`implements\` and can implement multiple interfaces
- Default methods add concrete behavior to interfaces without breaking existing implementors
- Program to interfaces (not implementations) for flexibility
- Java's core interfaces include \`Comparable\`, \`Iterable\`, \`Runnable\`

## What Comes Next

Now that you know about inheritance and interfaces, the next lesson ties them together with polymorphism.

Continue to:
**5.5 Polymorphism**
`,
};
