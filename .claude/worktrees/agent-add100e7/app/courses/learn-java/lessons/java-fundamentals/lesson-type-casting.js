export const lessonTypeCasting = {
  id: "type-casting",
  title: "Type Casting",
  hasChallenge: false,
  article: `
## Type Casting

Type casting converts a value from one type to another. Java has two kinds: widening (automatic) and narrowing (explicit).

---

## Widening Conversion (Automatic)

When you assign a smaller type to a larger type, Java converts automatically:

\`\`\`java
int i = 42;
long l = i;       // int → long (automatic)
double d = i;     // int → double (automatic)
float f = i;      // int → float (automatic)
\`\`\`

The "size" order from smallest to largest:
\`byte → short → int → long → float → double\`

Widening is safe — no data is lost.

---

## Narrowing Conversion (Explicit Cast)

When you assign a larger type to a smaller type, you must cast explicitly:

\`\`\`java
double d = 9.99;
int i = (int) d;   // explicit cast — drops the decimal
System.out.println(i);   // 9 (truncates, does NOT round)
\`\`\`

The \`(int)\` before the value is the cast operator. It tells Java: "I know this might lose precision — do it anyway."

**Narrowing truncates, not rounds:**
\`\`\`java
(int) 3.9    // 3
(int) -3.9   // -3 (toward zero)
\`\`\`

---

## Integer Division vs Decimal Division

A common gotcha is accidentally getting integer division when you want a decimal:

\`\`\`java
int a = 7, b = 2;
double result = a / b;           // 3.0 — division happens as int first!
double result2 = (double) a / b; // 3.5 — cast a to double first
double result3 = a / (double) b; // 3.5 — also works
\`\`\`

Cast at least one operand to \`double\` before the division.

---

## String to Number and Back

\`\`\`java
// String to number:
String numStr = "42";
int i = Integer.parseInt(numStr);
double d = Double.parseDouble("3.14");
long l = Long.parseLong("9876543210");

// Number to String:
String s1 = String.valueOf(42);       // "42"
String s2 = Integer.toString(42);     // "42"
String s3 = "" + 42;                  // "42" (concatenation trick)
\`\`\`

If the String isn't a valid number, \`parseInt\` throws a \`NumberFormatException\`.

---

## char and int

\`char\` and \`int\` can be converted, since chars are stored as Unicode code points:

\`\`\`java
char c = 'A';
int code = c;            // 65 (ASCII/Unicode code for 'A')
char back = (char) 70;   // 'F'

// Useful for letter arithmetic:
char next = (char) ('A' + 1);   // 'B'
\`\`\`

---

## Casting Between Objects (Reference Types)

Object casting is covered in the OOP modules. For now, know that:
- You can cast a subclass reference to its parent type (upcasting — automatic)
- Casting a parent reference to a subclass type (downcasting) requires explicit cast and can fail with \`ClassCastException\`

---

## What You Learned

- Widening (small → large): automatic, no data loss
- Narrowing (large → small): requires explicit \`(type)\` cast, may lose precision
- \`(int)\` truncates — it does not round
- Use \`Integer.parseInt()\`, \`Double.parseDouble()\` to convert Strings to numbers
- Use \`String.valueOf()\` or \`"" + value\` to convert numbers to Strings

## What Comes Next

You've learned Java fundamentals. Now it's time to put them all together in your first mini-project.

Continue to:
**2.14 Mini-Project: Number Guessing Game**
`,
};
