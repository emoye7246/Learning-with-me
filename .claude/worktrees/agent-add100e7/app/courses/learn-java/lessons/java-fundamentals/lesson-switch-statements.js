export const lessonSwitchStatements = {
  id: "switch-statements",
  title: "Switch Statements and Expressions",
  hasChallenge: false,
  article: `
## Switch Statements and Expressions

When you need to test a single variable against many specific values, \`switch\` is often cleaner than a chain of \`if/else if\`.

Java has two forms: the classic switch statement and the modern switch expression (Java 14+).

---

## The Classic Switch Statement

\`\`\`java
int day = 3;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    case 4:
        System.out.println("Thursday");
        break;
    case 5:
        System.out.println("Friday");
        break;
    default:
        System.out.println("Weekend");
}
\`\`\`

Output: \`Wednesday\`

---

## The \`break\` Statement Is Not Optional

Without \`break\`, execution **falls through** to the next case:

\`\`\`java
int x = 1;
switch (x) {
    case 1:
        System.out.println("One");
        // no break — falls through!
    case 2:
        System.out.println("Two");
        break;
    case 3:
        System.out.println("Three");
}
// Output: "One" then "Two"
\`\`\`

Fall-through is occasionally useful (multiple cases share the same code), but usually it's a bug. Always add \`break\` unless fall-through is intentional.

---

## Switch with Strings

\`\`\`java
String command = "start";

switch (command) {
    case "start":
        System.out.println("Starting...");
        break;
    case "stop":
        System.out.println("Stopping...");
        break;
    case "help":
        System.out.println("Showing help...");
        break;
    default:
        System.out.println("Unknown command: " + command);
}
\`\`\`

String switch uses \`.equals()\` under the hood, so it's safe to use.

---

## The Modern Switch Expression (Java 14+)

The switch expression is cleaner — no \`break\`, no fall-through, and it returns a value:

\`\`\`java
int day = 3;
String dayName = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    case 4 -> "Thursday";
    case 5 -> "Friday";
    default -> "Weekend";
};
System.out.println(dayName);   // "Wednesday"
\`\`\`

Key differences from classic switch:
- Uses \`->\` instead of \`:\`
- No fall-through by default
- Can return a value (assign to a variable)
- No \`break\` needed

---

## Multiple Values Per Case

Both classic and modern switch support multiple values for one case:

\`\`\`java
// Modern style
String type = switch (day) {
    case 1, 2, 3, 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Invalid";
};
\`\`\`

---

## When to Use Switch vs If/Else

**Use switch when:**
- Testing one variable against multiple specific values
- Values are ints, Strings, chars, or enums
- There are 3 or more cases

**Use if/else when:**
- Testing different variables or expressions
- Using ranges (\`> 90\`, \`< 0\`)
- Complex compound conditions

---

## What You Learned

- Classic switch needs \`break\` to prevent fall-through
- Switch works with \`int\`, \`String\`, \`char\`, and \`enum\`
- Modern switch expression (Java 14+) uses \`->\`, has no fall-through, and can return a value
- Use switch for equality checks against specific values; use if/else for range checks and complex conditions

## What Comes Next

Conditions let you choose which code runs. Loops let you repeat code. The next lesson covers all three loop types in Java.

Continue to:
**2.9 Loops**
`,
};
