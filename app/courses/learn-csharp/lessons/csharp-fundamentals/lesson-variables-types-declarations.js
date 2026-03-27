export const lessonVariablesTypesDeclarations = {
  id: "variables-types-declarations-cs",
  title: "Variables, Types & Declarations",
  hasChallenge: false,
  article: `
## Variables, Types & Declarations

A variable is a named storage location in memory. In C#, every variable has a **type** — declared explicitly or inferred — that determines what values it can hold and what operations are valid on it.

---

## Declaring Variables

The basic syntax is: \`type name = value;\`

\`\`\`csharp
int age = 30;
string name = "Alice";
double temperature = 98.6;
bool isActive = true;
char grade = 'A';
\`\`\`

You can also declare without assigning (but you must assign before use):

\`\`\`csharp
int count;
count = 0; // must assign before reading
Console.WriteLine(count); // OK now
\`\`\`

---

## The Built-in Value Types

| Type | Description | Example |
|---|---|---|
| \`int\` | 32-bit integer | \`42\`, \`-7\`, \`0\` |
| \`long\` | 64-bit integer | \`10000000000L\` |
| \`double\` | 64-bit floating point | \`3.14\`, \`-0.5\` |
| \`float\` | 32-bit floating point | \`3.14f\` |
| \`decimal\` | 128-bit precise decimal | \`9.99m\` (use for money) |
| \`bool\` | true or false | \`true\`, \`false\` |
| \`char\` | single Unicode character | \`'A'\`, \`'€'\` |
| \`byte\` | 8-bit unsigned integer | \`0\` to \`255\` |

---

## Strings

\`string\` is a reference type (discussed in the next lesson), but it behaves like a built-in type:

\`\`\`csharp
string firstName = "John";
string lastName = "Doe";
string fullName = firstName + " " + lastName; // concatenation
int length = fullName.Length; // 8
\`\`\`

Strings are **immutable** — operations on them return new strings rather than modifying the original.

---

## Type Inference with var

The \`var\` keyword lets the compiler infer the type from the assigned value:

\`\`\`csharp
var count = 10;        // inferred as int
var name = "Alice";    // inferred as string
var pi = 3.14159;      // inferred as double
var flag = true;       // inferred as bool
\`\`\`

\`var\` is not a dynamic type — the type is still determined at compile time. You just don't have to write it. The variable \`count\` is still an \`int\`; you just didn't have to type \`int\`.

Use \`var\` when the type is obvious from the right-hand side. Use explicit types when clarity matters.

---

## Constants

A \`const\` value cannot change after declaration:

\`\`\`csharp
const double Pi = 3.14159265358979;
const int MaxRetries = 3;
const string DefaultName = "Anonymous";

// Pi = 3.0; // Compile error: cannot assign to a constant
\`\`\`

Constants must be assigned at declaration time and must be compile-time values (no method calls or variables).

---

## Naming Conventions

C# has well-established naming conventions:

| Context | Convention | Example |
|---|---|---|
| Local variables | camelCase | \`firstName\`, \`itemCount\` |
| Parameters | camelCase | \`userName\`, \`maxLength\` |
| Constants | PascalCase | \`MaxRetries\`, \`Pi\` |
| Fields (private) | _camelCase | \`_name\`, \`_count\` |
| Properties/Methods | PascalCase | \`FirstName\`, \`GetValue()\` |
| Classes/Types | PascalCase | \`BankAccount\`, \`HttpClient\` |

Following these conventions matters — they're enforced by code reviews in professional settings and tools like Roslyn analyzers will warn you when you violate them.

---

## Default Values

Variables declared at the class level (fields) get default values if not initialized. Local variables must be assigned before use.

| Type | Default value |
|---|---|
| \`int\`, \`long\` | \`0\` |
| \`double\`, \`float\` | \`0.0\` |
| \`bool\` | \`false\` |
| \`char\` | \`'\\0'\` (null character) |
| \`string\`, any reference type | \`null\` |

---

## What Comes Next

The next lesson explains value types vs reference types — a fundamental C# concept that affects how variables behave when copied and passed to methods.
`,
};
