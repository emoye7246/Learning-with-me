export const lessonInheritance = {
  id: "inheritance",
  title: "Inheritance",
  hasChallenge: false,
  article: `
## Inheritance

Inheritance lets a class build on an existing class, inheriting its fields and methods and adding or changing behavior.

---

## The Concept

Consider vehicles. A Car and a Truck are both vehicles. Both have a speed and can move. But a Truck can haul cargo and a Car has a passenger capacity.

Instead of duplicating the speed and move behavior, you define it once in a \`Vehicle\` class and have \`Car\` and \`Truck\` extend it.

---

## Extending a Class

\`\`\`java
public class Vehicle {
    protected String make;
    protected String model;
    protected int speed;

    public Vehicle(String make, String model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    public void accelerate(int amount) {
        speed += amount;
    }

    public void brake(int amount) {
        speed = Math.max(0, speed - amount);
    }

    @Override
    public String toString() {
        return make + " " + model + " (speed: " + speed + ")";
    }
}

public class Car extends Vehicle {
    private int passengerCapacity;

    public Car(String make, String model, int capacity) {
        super(make, model);   // call Vehicle constructor
        this.passengerCapacity = capacity;
    }

    public int getPassengerCapacity() {
        return passengerCapacity;
    }
}
\`\`\`

---

## \`extends\`

The \`extends\` keyword establishes the inheritance relationship:

\`\`\`java
public class Car extends Vehicle { ... }
\`\`\`

- \`Vehicle\` is the **parent class** (superclass)
- \`Car\` is the **child class** (subclass)
- \`Car\` inherits all \`public\` and \`protected\` members of \`Vehicle\`

---

## \`super\`

\`super\` refers to the parent class:

\`\`\`java
super(make, model);   // call parent constructor
\`\`\`

When a child class has a constructor, it must call the parent constructor using \`super(...)\` as the first statement (or Java inserts a no-arg \`super()\` call automatically).

---

## What Is Inherited

A subclass inherits:
- All \`public\` and \`protected\` fields and methods
- Package-private fields/methods if in the same package

A subclass does NOT inherit:
- \`private\` fields and methods (they exist but can't be accessed directly)
- Constructors

---

## Java's Single Inheritance

Java classes can only extend one class directly. This is single inheritance.

(Java interfaces provide a way to inherit behavior from multiple sources — covered later.)

---

## The Object Class

Every class in Java implicitly extends \`java.lang.Object\`. That's where \`toString()\`, \`equals()\`, and \`hashCode()\` come from.

---

## What You Learned

- \`extends\` creates a parent-child (superclass-subclass) relationship
- Subclasses inherit \`public\` and \`protected\` members
- \`super()\` calls the parent constructor
- Java supports single inheritance only
- All classes ultimately inherit from \`Object\`

## What Comes Next

Inherited methods are useful as-is, but sometimes you need to change their behavior in a subclass. The next lesson covers method overriding.

Continue to:
**5.2 Method Overriding and super**
`,
};
