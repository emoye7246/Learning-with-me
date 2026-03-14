export const lessonCompositionVsInheritance = {
  id: "composition-vs-inheritance",
  title: "Composition vs Inheritance",
  hasChallenge: false,
  article: `
## Composition vs Inheritance

Inheritance is often the first OOP tool beginners reach for. Composition is usually the better choice.

---

## The Inheritance Trap

Imagine you have a \`Robot\` class. You want to add "can drive" and "can fly" behavior.

With inheritance:
\`\`\`java
class DrivingRobot extends Robot { ... }
class FlyingRobot extends Robot { ... }
// What about a robot that can both drive AND fly?
class FlyingDrivingRobot extends ??? { ... }   // Java doesn't allow two parents
\`\`\`

Inheritance breaks down when you need to combine behaviors.

---

## Composition: Has-A Instead of Is-A

Composition means an object *contains* other objects rather than *extending* them.

\`\`\`java
public class DriveEngine {
    public void drive() { System.out.println("Driving..."); }
}

public class FlyEngine {
    public void fly() { System.out.println("Flying..."); }
}

public class Robot {
    private DriveEngine driveEngine;
    private FlyEngine flyEngine;

    public Robot(boolean canDrive, boolean canFly) {
        if (canDrive) driveEngine = new DriveEngine();
        if (canFly) flyEngine = new FlyEngine();
    }

    public void drive() {
        if (driveEngine != null) driveEngine.drive();
    }

    public void fly() {
        if (flyEngine != null) flyEngine.fly();
    }
}
\`\`\`

Now you can compose any combination of behaviors.

---

## The Rule of Thumb

**Use inheritance when:** the subclass IS-A type of the superclass in a meaningful, permanent way.
- A \`Dog\` IS-AN \`Animal\` ✓
- A \`SavingsAccount\` IS-A \`BankAccount\` ✓
- A \`FlyingCar\` IS-A \`Car\`... maybe?

**Use composition when:** one class HAS-A or USES-A another class.
- An \`Order\` HAS-A \`Customer\`
- A \`Logger\` USES-A \`FileWriter\`
- A \`Car\` HAS-A \`Engine\`

---

## Composition + Interfaces

The cleanest design combines composition and interfaces:

\`\`\`java
public interface Moveable {
    void move(int x, int y);
}

public interface Renderable {
    void render();
}

public class Sprite implements Moveable, Renderable {
    private PhysicsEngine physics;
    private RenderEngine renderer;

    @Override
    public void move(int x, int y) { physics.move(x, y); }

    @Override
    public void render() { renderer.render(); }
}
\`\`\`

- Interfaces define what it can do (contracts)
- Composition defines how it does it (implementations)

---

## Delegation

When a class wraps another class and forwards calls, it's called delegation:

\`\`\`java
public class LoggingList<T> implements List<T> {
    private final List<T> delegate;

    public LoggingList(List<T> delegate) {
        this.delegate = delegate;
    }

    @Override
    public boolean add(T item) {
        System.out.println("Adding: " + item);
        return delegate.add(item);   // delegate the actual work
    }

    // ... implement other List methods by delegating
}
\`\`\`

---

## What You Learned

- Inheritance (IS-A): use when a subclass genuinely is a type of the parent
- Composition (HAS-A): use when one class uses or contains another
- Composition is more flexible — avoids the rigid hierarchy problem
- "Favor composition over inheritance" is a well-established design principle
- Interfaces + composition is a powerful combination

## What Comes Next

Enums are a special kind of class for representing a fixed set of values.

Continue to:
**5.8 Enums**
`,
};
