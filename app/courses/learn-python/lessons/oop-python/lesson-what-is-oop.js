export const lessonWhatIsOOP = {
  id: "what-is-oop",
  title: "What Is Object-Oriented Programming?",

  article: `
## Introduction

So far, you've written code as a series of instructions.

Variables hold data.
Functions do work.
Everything runs top to bottom.

That works.

But there's another way to think about code.

A way that mirrors how the world actually works.

That's **Object-Oriented Programming** — OOP.

---

## The Core Idea

Everything in the real world is an **object**.

A car.
A person.
A bank account.
A product.

Each object has two things:

1. **Attributes** — what it has (its data)
2. **Methods** — what it can do (its behavior)

---

## A Car as an Object

Attributes:
- color: "red"
- brand: "Toyota"
- speed: 0

Methods:
- accelerate()
- brake()
- honk()

The attributes describe it.
The methods define what it does.

---

## Why Think This Way?

Without OOP, a program about cars might look like this:

\`\`\`python
car_color = "red"
car_speed = 0

def accelerate(speed):
    return speed + 10
\`\`\`

With many cars, this breaks down fast.

OOP lets you bundle the data and the behavior together.

One object.
Self-contained.

---

## Classes vs Objects

A **class** is a blueprint.

An **object** is something built from that blueprint.

Think of it like this:

- A class is an architectural plan for a house.
- Objects are the actual houses built from that plan.

You define the class once.
You can create as many objects from it as you want.

---

## What This Module Covers

Over the next few lessons, you'll learn to:

- Create a class
- Define attributes and methods
- Use \`__init__\` to set starting values
- Create multiple objects from one class
- Use inheritance to extend a class

Each lesson builds on the last.

---

## What You Learned

You now understand:

- What OOP is
- The difference between attributes and methods
- The difference between a class and an object
- Why OOP helps organize complex programs

This is a shift in how you think about code.

Not just instructions in sequence —
but objects that hold data and know how to behave.

---

## What Comes Next

Let's build your first class.

**Classes & Objects**
`,
};
