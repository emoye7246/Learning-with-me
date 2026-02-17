export const lessonVariablesTypes = {
    id: "variables-and-types",
    title: "Variables and Types",

    article: `
   ## Variables & Types

In the last lesson, you printed text.

Now we take the next step.

Instead of printing fixed text,
we are going to store information
and use it.

This is where programming becomes powerful.

---

## What Is a Variable?

A variable is a name that stores a value.

Think of it like a labeled container.

You give the container a name.
You put something inside it.
You can use it later.

---

## Creating Your First Variable

Open your \`hello.py\` file
and replace its contents with:

\`\`\`python
message = "Hello, world!"
print(message)
\`\`\`

Save the file.
Run it again.

---

## What Just Happened?

This line:

\`\`\`python
message = "Hello, world!"
\`\`\`

does something new.

The "=" symbol assigns a value.

It tells Python:

“Store this value under the name \`message\`.”

Now, instead of printing the text directly,
you are printing the variable.

That is a big step.

---

## Variables Hold Different Types of Data

Not all values are text.

Python supports different kinds of data,
called **types**.

Here are the most common ones:

### Integer (Whole Numbers)

\`\`\`python
age = 25
\`\`\`

### Float (Decimal Numbers)

\`\`\`python
price = 19.99
\`\`\`

### String (Text)

\`\`\`python
name = "Elijah"
\`\`\`

### Boolean (True or False)

\`\`\`python
is_student = True
\`\`\`

---

## Checking the Type of a Value

Python has a built-in function called \`type()\`.

Try this:

\`\`\`python
age = 25
print(type(age))
\`\`\`

Run it.

You should see:

\`<class 'int'>\`

This tells you that \`age\` is an integer.

---

## Why Types Matter

Different types behave differently.

Numbers can be added.
Strings can be combined.
Booleans can control decisions.

Understanding types is how you avoid confusion later.

But for now,
just focus on recognizing them.

---

## Try This

Modify your file to include multiple variables:

\`\`\`python
name = "Elijah"
age = 25
is_learning = True

print(name)
print(age)
print(is_learning)
\`\`\`

Save.
Run.
Observe.

---

## What You Just Learned

You learned how to:

- Create a variable
- Assign a value
- Print a variable
- Recognize basic types
- Inspect a type with \`type()\`

This is the foundation of all programming.

Everything complex
is built on storing and manipulating data.

---

## What Comes Next

Now that you understand variables,
we’re going to use numbers more intentionally.

Next lesson:

**Numbers & Math**

    `
}