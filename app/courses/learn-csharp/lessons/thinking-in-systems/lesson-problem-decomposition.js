export const lessonProblemDecomposition = {
  id: "problem-decomposition-cs",
  title: "Problem Decomposition",
  hasChallenge: false,
  article: `
## Problem Decomposition

When faced with a programming task, beginners often try to write the whole thing at once. This rarely works for anything beyond a few lines. Professional developers break problems down systematically before writing any code.

---

## The Core Technique

**Decompose until each piece is trivially implementable.**

If you're not sure how to implement a task, it's too large. Break it into two or three smaller tasks. Keep breaking until each piece is small enough that you can write it immediately.

This sounds simple. It requires practice to do instinctively.

---

## An Example: Build a Simple Contact Book

The full problem: "Build a console application that lets the user add, search, and delete contacts."

That's too large to implement directly. Break it down:

**Level 1:**
1. Store contacts in memory
2. Add a contact
3. Search for a contact
4. Delete a contact
5. Main interaction loop

**Level 2 — "Store contacts in memory":**
- What data does a contact have? Name, phone, email
- What collection? A \`List<Contact>\` where \`Contact\` is a class
- How do you create one? Constructor with name, phone, email

**Level 2 — "Add a contact":**
- Ask user for name
- Ask user for phone
- Ask user for email
- Validate each field (non-empty at minimum)
- Create a \`Contact\` object and add to the list

Now every sub-task is implementable. You write each one independently and combine them.

---

## The Skeleton Approach

Write the overall structure first with stubs, then fill in the details:

\`\`\`csharp
// Write this first — the overall structure
while (true)
{
    ShowMenu();
    string? choice = Console.ReadLine();

    switch (choice)
    {
        case "1": AddContact(contacts); break;
        case "2": SearchContacts(contacts); break;
        case "3": DeleteContact(contacts); break;
        case "4": return;
    }
}

// Stub methods — return immediately, compile and run
void ShowMenu()
{
    Console.WriteLine("1. Add  2. Search  3. Delete  4. Exit");
}

void AddContact(List<Contact> contacts)
{
    // TODO: implement
}

void SearchContacts(List<Contact> contacts)
{
    // TODO: implement
}

void DeleteContact(List<Contact> contacts)
{
    // TODO: implement
}
\`\`\`

With this skeleton, you can run the program and see the menu working. Then you implement one method at a time, running and testing after each one.

---

## Work In Smallest Increments

At each step, the program should be runnable and the new piece should be verifiable.

Don't write all five methods and then run. Write one method, run it, make sure it works, then write the next.

This gives you:
- Confidence that each piece works
- Fast feedback when something breaks (you know which method caused it)
- A working program at every stage

---

## Recognizing Sub-Problems

Common sub-problems that appear in almost every program:

| Problem | Approach |
|---|---|
| Read and validate user input | Validation loop with \`TryParse\` |
| Find an item in a collection | \`List.Find\`, \`FirstOrDefault\`, or manual loop |
| Process every item in a list | \`foreach\` loop |
| Persist data between runs | File I/O (covered later) |
| Handle invalid operations gracefully | try/catch, guard clauses |
| Format output as a table | String padding with \`,n\` format specifier |

Recognizing these patterns and knowing how to implement them makes decomposition faster. Each sub-problem is just "what type of sub-problem is this and how do I solve it?"

---

## The 20-Minute Rule

If you've been stuck on a problem for more than 20 minutes, you're probably trying to solve something too large at once. Stop. Identify the smallest thing you don't know how to do. Look that up or solve it in isolation. Don't try to solve the big problem until you can solve the small one.

This approach — divide and conquer — is not just a programming technique. It's how any complex problem gets solved.

---

## What Comes Next

The next module covers console applications — building real, complete programs with user interaction, state management, and proper structure. The decomposition skills from this lesson will be essential.
`,
};
