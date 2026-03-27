export const lessonPrimitiveTypes = {
  id: "primitive-types",
  title: "Primitive Types",
  hasChallenge: false,
  article: `
## Primitive Types

Java has two categories of types: **primitive types** and **reference types**.

Primitive types store their value directly in memory. They are the basic building blocks of all Java programs.

There are 8 primitive types. You'll use 4 of them constantly.

---

## The Four You'll Use Most

### \`int\` — Integer

Stores whole numbers. Range: -2,147,483,648 to 2,147,483,647.

\`\`\`java
int score = 100;
int year = 2024;
int temperature = -15;
\`\`\`

Use \`int\` for any whole number that fits in this range.

---

### \`double\` — Floating-Point Number

Stores decimal numbers with about 15-16 significant digits of precision.

\`\`\`java
double price = 9.99;
double pi = 3.14159265358979;
double height = 1.75;
\`\`\`

Use \`double\` for any number with a decimal point. Avoid \`float\` (less precision) unless you have a specific reason.

**Important:** Never use \`double\` for money calculations where exact cents matter. Use \`BigDecimal\` instead (covered later).

---

### \`boolean\` — True or False

Stores exactly one of two values: \`true\` or \`false\`.

\`\`\`java
boolean isLoggedIn = true;
boolean hasError = false;
boolean isAdult = age >= 18;
\`\`\`

Booleans are the result of comparison and logical operations. They control \`if\` statements and loops.

---

### \`char\` — Single Character

Stores a single Unicode character. Note the single quotes.

\`\`\`java
char grade = 'A';
char initial = 'J';
char newline = '\\n';
\`\`\`

\`char\` uses single quotes (\`'A'\`). Strings use double quotes (\`"Alice"\`). These are different types.

---

## The Four You'll Use Occasionally

### \`long\` — Large Integer

Like \`int\` but bigger. Range: about -9.2 quintillion to 9.2 quintillion.

\`\`\`java
long population = 8_000_000_000L;   // note the L suffix
long fileSize = 1_073_741_824L;     // 1 GB in bytes
\`\`\`

The \`L\` suffix tells Java this literal is a \`long\`, not an \`int\`. Without it, the compiler may complain that the number doesn't fit in an \`int\`.

Use \`long\` when you need numbers larger than ~2 billion (file sizes, timestamps, IDs).

---

### \`byte\` and \`short\`

Smaller integer types. Rarely used directly unless you're working with binary data, network protocols, or memory-constrained systems.

\`\`\`java
byte b = 127;      // -128 to 127
short s = 32767;   // -32768 to 32767
\`\`\`

---

### \`float\` — Single-Precision Decimal

\`\`\`java
float f = 3.14f;   // note the f suffix
\`\`\`

Less precision than \`double\`. Use \`double\` unless you're working with graphics libraries or legacy code that requires \`float\`.

---

## Underscores in Numeric Literals

Java allows underscores in numeric literals for readability:

\`\`\`java
int million = 1_000_000;
long creditCardNumber = 1234_5678_9012_3456L;
double pi = 3.141_592_653;
\`\`\`

The underscores are ignored by the compiler — they're just for humans to read.

---

## Default Values

When declared as class fields (not local variables), primitive types have default values:

| Type | Default |
|---|---|
| int, long, short, byte | 0 |
| double, float | 0.0 |
| boolean | false |
| char | \\u0000 (null character) |

Local variables have no default — you must initialize them before use.

---

## What You Learned

- 8 primitive types exist; you'll use \`int\`, \`double\`, \`boolean\`, \`char\` most
- \`int\` for whole numbers, \`double\` for decimals, \`boolean\` for true/false, \`char\` for single characters
- \`long\` requires an \`L\` suffix on large literals
- \`float\` requires an \`f\` suffix
- Underscores make large numbers readable: \`1_000_000\`
- Never use \`double\` for money — use \`BigDecimal\`

## What Comes Next

You've learned about primitive types. Now let's look at Strings — Java's most commonly used reference type.

Continue to:
**2.5 Strings and the Reference Type**
`,
};
