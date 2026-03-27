export const lessonPolymorphism = {
  id: "polymorphism",
  title: "Polymorphism",
  hasChallenge: false,
  article: `
## Polymorphism

Polymorphism means "many forms." In Java, it means a variable of one type can hold objects of different types, and Java calls the correct method for the actual object type.

---

## Runtime Polymorphism

\`\`\`java
public abstract class Animal {
    public abstract String speak();
}

public class Dog extends Animal {
    @Override public String speak() { return "Woof!"; }
}

public class Cat extends Animal {
    @Override public String speak() { return "Meow!"; }
}

public class Duck extends Animal {
    @Override public String speak() { return "Quack!"; }
}

// Polymorphism in action:
Animal[] animals = { new Dog(), new Cat(), new Duck() };

for (Animal a : animals) {
    System.out.println(a.speak());   // calls the correct override each time
}
// Output:
// Woof!
// Meow!
// Quack!
\`\`\`

Each call to \`a.speak()\` dispatches to the actual type's implementation at runtime.

---

## Why This Is Powerful

Without polymorphism, you'd need to check types manually:

\`\`\`java
// Without polymorphism — fragile and doesn't scale
if (a instanceof Dog) {
    System.out.println("Woof!");
} else if (a instanceof Cat) {
    System.out.println("Meow!");
}
// Add a new animal type? Have to update every if/else chain.
\`\`\`

With polymorphism:

\`\`\`java
System.out.println(a.speak());
// Add a new animal type? Override speak(). Nothing else changes.
\`\`\`

Polymorphism makes code extensible. You add new types without changing existing code.

---

## Polymorphism Through Interfaces

\`\`\`java
public interface Payable {
    double calculatePayment();
}

public class Employee implements Payable {
    private double salary;
    @Override public double calculatePayment() { return salary / 12; }
}

public class Contractor implements Payable {
    private double hourlyRate;
    private int hoursWorked;
    @Override public double calculatePayment() { return hourlyRate * hoursWorked; }
}

// Same loop works for both:
List<Payable> payroll = new ArrayList<>();
payroll.add(new Employee(60000));
payroll.add(new Contractor(75, 160));

for (Payable p : payroll) {
    System.out.printf("Payment: $%.2f%n", p.calculatePayment());
}
\`\`\`

---

## Compile-Time Polymorphism (Overloading)

Method overloading is resolved at compile time based on parameter types:

\`\`\`java
public static void print(int n) { System.out.println("int: " + n); }
public static void print(String s) { System.out.println("String: " + s); }

print(42);        // "int: 42"
print("hello");   // "String: hello"
\`\`\`

---

## Upcasting and Downcasting

**Upcasting** (automatic): assign a subclass reference to a superclass variable:

\`\`\`java
Dog rex = new Dog();
Animal a = rex;   // upcast — always safe
\`\`\`

**Downcasting** (explicit): assign a superclass reference back to a subclass:

\`\`\`java
Animal a = new Dog();
Dog d = (Dog) a;   // downcast — safe here because a IS a Dog
d.fetch();         // can now call Dog-specific methods

Animal a2 = new Cat();
Dog d2 = (Dog) a2;  // ClassCastException! Cat is not a Dog
\`\`\`

Always check with \`instanceof\` before downcasting.

---

## What You Learned

- Runtime polymorphism: the correct method override is called based on the actual object type
- Polymorphism makes code extensible — add new types without changing existing loops
- Interfaces enable polymorphism across unrelated class hierarchies
- Upcasting is automatic; downcasting requires an explicit cast and may throw ClassCastException
- Check with \`instanceof\` before downcasting

## What Comes Next

Java 16+ added pattern matching for instanceof, which makes downcasting cleaner and safer. The next lesson covers it.

Continue to:
**5.6 instanceof and Pattern Matching**
`,
};
