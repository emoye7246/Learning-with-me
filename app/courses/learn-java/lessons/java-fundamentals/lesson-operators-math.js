export const lessonOperatorsMath = {
  id: "operators-math",
  title: "Operators and Math",
  hasChallenge: false,
  article: `
## Operators and Math

Operators are symbols that perform operations on values. Java has five categories of operators you'll use constantly.

---

## Arithmetic Operators

\`\`\`java
int a = 10;
int b = 3;

int sum        = a + b;   // 13  — addition
int difference = a - b;   // 7   — subtraction
int product    = a * b;   // 30  — multiplication
int quotient   = a / b;   // 3   — integer division (truncates!)
int remainder  = a % b;   // 1   — modulo (remainder)
\`\`\`

**Integer division** truncates the decimal:
\`\`\`java
int result = 7 / 2;   // 3, not 3.5
\`\`\`

To get a decimal result, at least one operand must be a \`double\`:
\`\`\`java
double result = 7.0 / 2;    // 3.5
double result2 = (double) 7 / 2;  // 3.5 (cast to double first)
\`\`\`

**Modulo** is useful for checking divisibility and cycling through ranges:
\`\`\`java
boolean isEven = (number % 2 == 0);
int cycled = counter % 10;   // 0..9 repeating
\`\`\`

---

## Assignment Operators

\`\`\`java
int x = 10;

x += 5;    // x = x + 5   → 15
x -= 3;    // x = x - 3   → 12
x *= 2;    // x = x * 2   → 24
x /= 4;    // x = x / 4   → 6
x %= 4;    // x = x % 4   → 2
\`\`\`

---

## Increment and Decrement

\`\`\`java
int count = 5;

count++;   // count = count + 1 → 6
count--;   // count = count - 1 → 5

// Pre-increment vs post-increment:
int a = 5;
int b = a++;   // b = 5, then a = 6 (post: use, then increment)
int c = ++a;   // a = 7, then c = 7 (pre: increment, then use)
\`\`\`

In most loops, you'll use \`i++\` or \`i--\`. The pre/post distinction rarely matters unless you're using the result in an expression.

---

## Comparison Operators

These return \`boolean\` (true or false):

\`\`\`java
int x = 10, y = 20;

x == y     // false — equal to
x != y     // true  — not equal to
x > y      // false — greater than
x < y      // true  — less than
x >= y     // false — greater than or equal to
x <= y     // true  — less than or equal to
\`\`\`

---

## Logical Operators

Combine boolean expressions:

\`\`\`java
boolean a = true;
boolean b = false;

a && b     // false — AND: both must be true
a || b     // true  — OR: at least one must be true
!a         // false — NOT: inverts the boolean
\`\`\`

**Short-circuit evaluation:**
- \`&&\` stops evaluating if the left side is \`false\`
- \`||\` stops evaluating if the left side is \`true\`

This matters when the right side has a side effect or could cause an error:
\`\`\`java
if (list != null && list.size() > 0) { ... }
// list.size() is only called if list is not null
\`\`\`

---

## Operator Precedence

Java evaluates operators in a specific order, similar to math:

1. \`()\` — parentheses
2. \`++\`, \`--\`, \`!\` — unary
3. \`*\`, \`/\`, \`%\` — multiplicative
4. \`+\`, \`-\` — additive
5. \`<\`, \`>\`, \`<=\`, \`>=\` — relational
6. \`==\`, \`!=\` — equality
7. \`&&\` — logical AND
8. \`||\` — logical OR

When in doubt, use parentheses to make intent explicit:

\`\`\`java
int result = (a + b) * (c - d);
\`\`\`

---

## Math Class

For operations beyond basic arithmetic:

\`\`\`java
Math.abs(-5)          // 5    — absolute value
Math.max(10, 20)      // 20   — larger of two values
Math.min(10, 20)      // 10   — smaller of two values
Math.pow(2, 10)       // 1024.0 — power
Math.sqrt(16)         // 4.0  — square root
Math.round(3.7)       // 4    — round to nearest int
Math.floor(3.7)       // 3.0  — round down
Math.ceil(3.2)        // 4.0  — round up
Math.random()         // random double between 0.0 and 1.0
\`\`\`

---

## What You Learned

- Arithmetic: \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (integer division truncates)
- Assignment shortcuts: \`+=\`, \`-=\`, \`*=\`, \`/=\`, \`%=\`
- Increment/decrement: \`++\`, \`--\`
- Comparison: \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\` return \`boolean\`
- Logical: \`&&\`, \`||\`, \`!\` with short-circuit evaluation
- \`Math\` class for abs, max, min, pow, sqrt, etc.

## What Comes Next

Now that you can perform operations, you need to make decisions. The next lesson covers conditional statements.

Continue to:
**2.7 Conditionals**
`,
};
