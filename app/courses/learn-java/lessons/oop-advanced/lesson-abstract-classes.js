export const lessonAbstractClasses = {
  id: "abstract-classes",
  title: "Abstract Classes",
  hasChallenge: false,
  article: `
## Abstract Classes

An abstract class is a class that cannot be instantiated directly. It defines a template for subclasses to follow.

---

## Why Abstract Classes?

Some concepts exist only as templates — they make no sense to instantiate directly.

A \`Shape\` is not a thing. A \`Circle\`, a \`Rectangle\`, a \`Triangle\` — those are things.

But all shapes share behavior: they have an area, a perimeter, and can be drawn. You can define that shared behavior in an abstract class.

---

## Defining an Abstract Class

\`\`\`java
public abstract class Shape {
    private String color;

    public Shape(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    // Abstract method — no implementation; subclasses MUST provide it
    public abstract double getArea();
    public abstract double getPerimeter();

    // Concrete method — shared by all subclasses
    public void describe() {
        System.out.printf("A %s %s with area %.2f%n",
            color, getClass().getSimpleName(), getArea());
    }
}
\`\`\`

---

## Implementing an Abstract Class

\`\`\`java
public class Circle extends Shape {
    private double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
}

public class Rectangle extends Shape {
    private double width;
    private double height;

    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    @Override
    public double getArea() {
        return width * height;
    }

    @Override
    public double getPerimeter() {
        return 2 * (width + height);
    }
}
\`\`\`

---

## Using Abstract Classes

\`\`\`java
Shape s1 = new Circle("red", 5.0);
Shape s2 = new Rectangle("blue", 4.0, 6.0);

// Shape s3 = new Shape("green");   // ERROR: cannot instantiate abstract class

s1.describe();   // A red Circle with area 78.54
s2.describe();   // A blue Rectangle with area 24.00
\`\`\`

---

## Rules

- \`abstract\` classes are declared with the \`abstract\` keyword
- \`abstract\` methods have no body — just a signature
- A class with any abstract method must be declared abstract
- Subclasses must implement all abstract methods (or themselves be abstract)
- Abstract classes can have constructors, fields, and concrete methods

---

## Abstract Class vs Interface

| | Abstract Class | Interface |
|---|---|---|
| Can have constructors | Yes | No |
| Can have instance fields | Yes | No (only constants) |
| Can have concrete methods | Yes | Yes (with \`default\`) |
| A class can extend | One | Multiple |

Use an abstract class when subclasses share state (fields) and common behavior.
Use an interface when you want to define a contract without shared state.

---

## What You Learned

- Abstract classes define templates that cannot be instantiated directly
- Abstract methods have no body — subclasses must implement them
- Concrete methods in abstract classes provide shared behavior
- Abstract classes can have constructors and fields (unlike interfaces)

## What Comes Next

Interfaces take abstraction further — defining pure contracts with no implementation or state (mostly). The next lesson covers Java interfaces.

Continue to:
**5.4 Interfaces**
`,
};
