export const lessonMiniProjectShapeHierarchy = {
  id: "mini-project-shape-hierarchy",
  title: "Mini-Project: Shape Hierarchy",
  hasChallenge: false,
  article: `
## Overview

Design and implement a shape hierarchy using an abstract class and multiple concrete subclasses.

This project tests abstract classes, method overriding, and polymorphism.

---

## What You're Building

An abstract \`Shape\` class with subclasses: \`Circle\`, \`Rectangle\`, \`Triangle\`.

A main program that creates a collection of shapes and processes them polymorphically.

---

## Requirements Checklist (Core)

**Abstract Shape class:**
- [ ] Abstract methods: \`getArea()\`, \`getPerimeter()\`, \`getType()\`
- [ ] Concrete method: \`describe()\` — prints type, area, perimeter using the abstract methods
- [ ] Overridden \`toString()\`

**Circle:**
- [ ] Field: radius
- [ ] \`getArea()\`: π × r²
- [ ] \`getPerimeter()\`: 2 × π × r
- [ ] \`getType()\`: returns "Circle"

**Rectangle:**
- [ ] Fields: width, height
- [ ] \`getArea()\`: width × height
- [ ] \`getPerimeter()\`: 2 × (width + height)
- [ ] \`getType()\`: returns "Rectangle"

**Triangle:**
- [ ] Fields: side1, side2, side3
- [ ] \`getArea()\`: Heron's formula
- [ ] \`getPerimeter()\`: side1 + side2 + side3
- [ ] \`getType()\`: returns "Triangle"
- [ ] Validation: the three sides must form a valid triangle

**Main program:**
- [ ] Create a list of at least 5 shapes (mix of all three types)
- [ ] Print \`describe()\` for each
- [ ] Find and print the shape with the largest area
- [ ] Print the total area of all shapes

---

## Heron's Formula for Triangle Area

Given sides a, b, c:
- s = (a + b + c) / 2  (semi-perimeter)
- area = √(s × (s-a) × (s-b) × (s-c))

---

## Rules

- The abstract class must be truly abstract — it should never be instantiated
- Triangle validation: each side must be less than the sum of the other two

---

## Suggested Build Plan

1. Create abstract Shape with abstract methods and a concrete describe()
2. Implement Circle, test it alone
3. Implement Rectangle, test it
4. Implement Triangle with validation, test it
5. In Main: create an ArrayList<Shape>, add mixed shapes
6. Loop and call describe() on each
7. Find the max area using a loop

---

## Testing Checklist

- [ ] Circle area and perimeter are correct (use exact values, not rounded)
- [ ] Rectangle area and perimeter are correct
- [ ] Triangle area matches Heron's formula
- [ ] Invalid triangle (e.g., sides 1, 1, 100) is rejected in constructor
- [ ] Polymorphic loop calls the correct override for each shape
- [ ] Total area sums correctly

---

## Extension Challenges

### Upgrade 1 — Color
Add a \`color\` field to Shape. Include it in describe().

### Upgrade 2 — Sorting
Sort the shapes by area using \`Collections.sort()\` and implement \`Comparable<Shape>\`.

### Upgrade 3 — Square
Add a \`Square extends Rectangle\`. Consider: does LSP hold?

### Upgrade 4 — Draw
Add an abstract \`draw()\` method that uses ASCII art to visually represent each shape.

---

## Submission Requirements

Files: \`Shape.java\`, \`Circle.java\`, \`Rectangle.java\`, \`Triangle.java\`, \`Main.java\`

Run with:
\`\`\`bash
javac *.java && java Main
\`\`\`
`,
  support: {
    intro: `
Use support in order. Focus on getting the abstract class right before implementing subclasses.
    `.trim(),

    level1Nudges: [
      "What makes a class 'abstract' in Java syntax?",
      "If describe() calls getArea() and getArea() is abstract, will describe() still work when called on a subclass?",
      "What should happen in the Triangle constructor if the sides don't form a valid triangle?",
      "How do you find the shape with the largest area from a list?",
    ],

    level2Hints: [
      "abstract class Shape { ... } — declare with the 'abstract' keyword.",
      "describe() is a concrete method in Shape that calls this.getArea() — it will dispatch to the subclass override at runtime.",
      "Triangle validation: if (side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2) throw new IllegalArgumentException(...)",
      "For max area: double maxArea = 0; Shape maxShape = null; then loop and compare.",
    ],

    blueprint: [
      "Shape: abstract class with abstract getArea(), getPerimeter(), getType().",
      "Shape: concrete describe() calls getType(), getArea(), getPerimeter().",
      "Circle: extends Shape, field radius, implement all three methods.",
      "Rectangle: extends Shape, fields width + height, implement all three methods.",
      "Triangle: extends Shape, fields side1/2/3, validate in constructor, Heron's for area.",
      "Main: List<Shape> shapes = new ArrayList<>(); add mix of shapes.",
      "Loop and call shape.describe() for each.",
      "Find max: track max area and corresponding shape in loop.",
    ],

    debuggingGuide: [
      {
        problem: "My Triangle area is negative or NaN.",
        hint: "Check Heron's formula. Make sure s is (a+b+c)/2.0 (not integer division). Also confirm you're passing valid triangle sides — if validation isn't working, invalid sides produce negative area under the square root.",
      },
      {
        problem: "describe() in Shape shows 0 for all shapes.",
        hint: "Make sure getArea() is overridden in each subclass with @Override. If you haven't overridden it, it calls the abstract method — which has no implementation.",
      },
    ],

    revealSolutionWarning: `
This is one implementation. Focus on the abstract class structure — there are many ways to implement the subclasses.
    `.trim(),

    exampleSolution: `public abstract class Shape {
    public abstract double getArea();
    public abstract double getPerimeter();
    public abstract String getType();

    public void describe() {
        System.out.printf("%s: area=%.2f, perimeter=%.2f%n",
                getType(), getArea(), getPerimeter());
    }

    @Override
    public String toString() {
        return String.format("%s[area=%.2f]", getType(), getArea());
    }
}`,
  },
};
