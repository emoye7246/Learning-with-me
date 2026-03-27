export const lessonWhyOop = {
  id: "why-oop-cs",
  title: "Why OOP? From Functions to Classes",
  hasChallenge: false,
  article: `
## Why OOP? From Functions to Classes

When you first learn to program, you write functions. A function takes some input, does something, and returns a result. For small programs this works beautifully. But as your programs grow, you start to feel the pain.

Imagine writing a Todo application procedurally. You might have a list, and a handful of functions that manipulate it:

\`\`\`csharp
List<string> todos = new List<string>();

void AddTodo(string title) { todos.Add(title); }
void RemoveTodo(int index) { todos.RemoveAt(index); }
void PrintTodos() { /* ... */ }
\`\`\`

This seems fine at first. But what happens when you need to track whether each todo is complete? Or a due date? Or priority? Suddenly your list of strings becomes a list of parallel arrays, or a mess of tuples — and every function needs to know the internal structure of your data.

### The Core Problem with Procedural Code at Scale

In a procedural program, **data and behavior live separately**. Your variables sit in one place, your functions sit in another. As programs grow:

- Functions become tightly coupled to global or shared state
- It becomes hard to reuse logic without copying it
- Adding a new feature might mean touching dozens of functions
- Bugs in one function silently corrupt data used by other functions

### What Is a Class?

A **class** is a blueprint that bundles **data** (fields and properties) and **behavior** (methods) together into one coherent unit. Think of a class as a custom data type you define yourself.

\`\`\`csharp
class Todo
{
    public string Title { get; set; }
    public bool IsComplete { get; set; }
    public DateTime DueDate { get; set; }

    public void MarkComplete()
    {
        IsComplete = true;
    }

    public override string ToString()
    {
        string status = IsComplete ? "[x]" : "[ ]";
        return $"{status} {Title} (due: {DueDate:d})";
    }
}
\`\`\`

Now your data and the operations on that data live in the same place. The \`MarkComplete\` method knows everything it needs without being passed a bunch of parameters.

### Objects Are Instances of Classes

A class is the blueprint. An **object** is the thing you actually create from that blueprint. You can create as many objects as you need from a single class:

\`\`\`csharp
Todo shopping = new Todo { Title = "Buy groceries", DueDate = DateTime.Today };
Todo homework = new Todo { Title = "Finish assignment", DueDate = DateTime.Today.AddDays(2) };

shopping.MarkComplete();
Console.WriteLine(shopping); // [x] Buy groceries (due: ...)
Console.WriteLine(homework); // [ ] Finish assignment (due: ...)
\`\`\`

Each object maintains its own independent state. Marking \`shopping\` as complete has no effect on \`homework\`.

### The Four Pillars of OOP

Object-oriented programming is organized around four big ideas:

1. **Encapsulation** — Hiding internal details, exposing only what's needed
2. **Inheritance** — Sharing behavior between related classes
3. **Polymorphism** — Treating different types uniformly through a shared interface
4. **Abstraction** — Modeling the essential features of a concept, ignoring the rest

You don't need to master all four right now. In this module you'll build a solid foundation starting with classes, instances, and encapsulation.

### When Should You Use OOP?

OOP is not the right tool for every job. It shines when:

- You have **entities** with identity, state, and behavior (users, accounts, products)
- You need to **reuse logic** across related concepts
- Your program is large enough that organization matters

For small scripts, a handful of functions is perfectly fine. Good developers know when to reach for classes and when not to — you'll develop that judgment throughout this course.

### Summary

- Procedural code separates data from behavior, which causes pain at scale
- A **class** bundles data and behavior into a reusable blueprint
- An **object** is an instance of a class, with its own independent state
- OOP helps you write code that is organized, reusable, and easier to reason about
`,
};
