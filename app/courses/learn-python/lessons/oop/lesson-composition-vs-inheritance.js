export const lessonCompositionVsInheritance = {
  id: "composition-vs-inheritance",
  title: "Composition vs Inheritance",

  article: `
## Composition vs Inheritance

Inheritance is one way to reuse code. Composition is another.

Both achieve code reuse. They express different relationships.

---

## The Difference

**Inheritance** = "is-a"

A Dog **is** an Animal.

\`\`\`python
class Animal:
    def breathe(self):
        print("Breathing.")

class Dog(Animal):
    def bark(self):
        print("Woof!")
\`\`\`

**Composition** = "has-a"

A Car **has** an Engine.

\`\`\`python
class Engine:
    def start(self):
        print("Engine started.")

class Car:
    def __init__(self):
        self.engine = Engine()   # Car HAS an Engine

    def drive(self):
        self.engine.start()
        print("Driving.")

car = Car()
car.drive()
\`\`\`

---

## Why Composition Often Wins

Inheritance locks you in. When you inherit from a class, you inherit everything — including things you didn't want.

Composition is more flexible. You include only what you need.

\`\`\`python
class Logger:
    def log(self, message):
        print(f"[LOG] {message}")

class Database:
    def __init__(self):
        self.logger = Logger()

    def query(self, sql):
        self.logger.log(f"Running: {sql}")
        # ... execute query

class Cache:
    def __init__(self):
        self.logger = Logger()

    def get(self, key):
        self.logger.log(f"Cache get: {key}")
        # ... return cached value
\`\`\`

Both \`Database\` and \`Cache\` use \`Logger\` without inheriting from it. Logging behavior is reused without a class hierarchy.

---

## Composition Allows Swapping

Since components are injected, you can swap them.

\`\`\`python
class SilentLogger:
    def log(self, message):
        pass   # no output

db = Database()
db.logger = SilentLogger()   # swap for testing
db.query("SELECT *")         # no log output
\`\`\`

This is hard to do cleanly with inheritance.

---

## The Classic Rule

> Favor composition over inheritance.

This doesn't mean "never use inheritance." It means: when in doubt, reach for composition.

Use inheritance when:
- The relationship is genuinely "is-a"
- You want polymorphism (treating Dog and Cat as Animals)
- The hierarchy stays shallow (1-2 levels)

Use composition when:
- The relationship is "has-a"
- You want flexible, swappable behavior
- The parent class has methods you don't actually need

---

## Combined Example

\`\`\`python
class Notifier:
    def notify(self, message):
        print(f"Notification: {message}")

class Order:
    def __init__(self, item, notifier=None):
        self.item = item
        self.notifier = notifier or Notifier()

    def complete(self):
        print(f"Order for {self.item} complete.")
        self.notifier.notify(f"{self.item} is ready for pickup.")

order = Order("Coffee")
order.complete()
\`\`\`

\`Order\` has a \`Notifier\`. That's composition. You can pass in a different notifier (email, SMS, silent) without changing \`Order\`.

---

## Try this

1. Create a \`Speaker\` class with a \`speak(message)\` method.
2. Create a \`Robot\` class that **has** a \`Speaker\`.
3. Create a \`WhisperSpeaker\` that prints messages in lowercase.
4. Swap in the \`WhisperSpeaker\` without changing \`Robot\`.

---

## What you just learned

- The difference between "is-a" (inheritance) and "has-a" (composition)
- Why composition offers more flexibility
- How to inject and swap components
- When inheritance is still the right call

---

## What comes next

Next lesson: **When NOT to Use OOP**
`,
};
