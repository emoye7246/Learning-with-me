export const lessonIntroToVerification = {
  id: "intro-to-verification-cs",
  title: "Intro to Verification — How Do You Know It Works?",
  hasChallenge: false,
  article: `
## Intro to Verification — How Do You Know It Works?

Writing code is one thing. Knowing it works is another. Before formal automated testing enters the picture, there's a fundamental skill: systematic manual verification. This lesson covers how to think carefully about whether your program is correct.

---

## What Is Verification?

Verification is the process of confirming that your program does what it's supposed to do — not just that it runs without crashing. A program can run successfully and still produce wrong results.

\`\`\`csharp
// This runs without errors but is wrong for negative numbers
static int Absolute(int n)
{
    return n * -1;  // Wrong! Only works if n is negative
}
\`\`\`

Running the program with one input and seeing output is not enough. Verification means deliberately testing the cases that matter.

---

## Writing Test Scenarios

A test scenario defines: an input, an expected output, and why that case matters. Before writing code, write the scenarios:

\`\`\`
Feature: Add two numbers

Scenario 1: Both positive
  Input: 3, 5
  Expected: 8

Scenario 2: One negative
  Input: -3, 5
  Expected: 2

Scenario 3: Both zero
  Input: 0, 0
  Expected: 0

Scenario 4: Large numbers
  Input: 1_000_000, 2_000_000
  Expected: 3_000_000
\`\`\`

Write these before you code — or at minimum, before you call the feature "done." They become your checklist.

---

## Thinking About Edge Cases

Edge cases are the inputs most likely to expose bugs:

- **Empty input** — what happens when the user enters nothing?
- **Minimum and maximum values** — what if the number is 0, or \`int.MaxValue\`?
- **Invalid types** — what if the user enters "abc" when you expect a number?
- **Boundary conditions** — off-by-one errors love boundaries (index 0, last item, empty list)
- **Duplicate values** — what if the same item is added twice?
- **Very long input** — what if the user pastes a 10,000-character string?

\`\`\`csharp
// Verify your menu loop handles all of these:
// - valid choice ("1", "2", "3", "0")
// - invalid number ("9", "99")
// - non-numeric input ("hello", "", " ")
// - null input (Ctrl+D / Ctrl+Z in the terminal)
\`\`\`

---

## Manual Testing Process

For a console application, structured manual testing looks like:

1. **Run with normal inputs** — the happy path. Does it produce the expected output?
2. **Run with boundary inputs** — empty list, single item, maximum items.
3. **Run with bad inputs** — wrong type, out of range, blank.
4. **Run the full workflow** — add, list, delete, list again. Does the state stay consistent?
5. **Test your error messages** — do they actually help the user?

Keep a scratch notepad of the scenarios you've tested. Check them off. If you change the code, re-test.

---

## The Console.ReadLine Mocking Concept

One challenge with console apps is that \`Console.ReadLine()\` blocks waiting for user input, making it awkward to automate. A simple workaround: write your logic to accept input as a parameter rather than reading it directly.

\`\`\`csharp
// Hard to test — coupled to Console
static int ReadAge()
{
    Console.Write("Enter age: ");
    return int.Parse(Console.ReadLine()!);
}

// Easier to test — input is a parameter
static int ParseAge(string input)
{
    if (!int.TryParse(input, out int age) || age < 0 || age > 150)
        throw new ArgumentException("Invalid age.");
    return age;
}

// Now you can test ParseAge without any console interaction:
// ParseAge("25") → 25
// ParseAge("abc") → throws ArgumentException
// ParseAge("-1") → throws ArgumentException
// ParseAge("200") → throws ArgumentException
\`\`\`

This is the beginning of the pattern that makes formal unit testing possible: separating pure logic from I/O.

---

## Why Formal Testing Comes Later

Formal automated testing — unit tests with xUnit or NUnit — is a powerful tool, but it requires understanding how to structure code for testability. The patterns you're building now (small focused methods, separated concerns) are exactly what make automated testing straightforward later.

For now, the discipline of thinking through scenarios and edge cases before calling something done is the most important skill. Many experienced developers still start here: write the scenarios, then write the code, then verify each scenario manually.

---

## What Comes Next

The next lesson is your first mini-project: a full Todo CLI application with persistent storage, menu loop, and all the patterns covered in this module.
`,
};
