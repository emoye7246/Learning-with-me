export const lessonValueTypesVsReferenceTypes = {
  id: "value-types-vs-reference-types",
  title: "Value Types vs Reference Types",
  hasChallenge: false,
  article: `
## Value Types vs Reference Types

This is one of the most important concepts in C#. It affects how variables behave when you copy them, pass them to methods, and compare them. Getting this wrong causes subtle bugs that are hard to track down.

---

## The Core Distinction

**Value types** store their data directly. When you assign one value type variable to another, you get a complete copy of the data.

**Reference types** store a reference (a pointer) to data that lives on the heap. When you assign one reference type variable to another, both variables point to the same underlying object.

---

## Value Types in Action

\`\`\`csharp
int a = 10;
int b = a;   // b gets a copy of the value 10
b = 20;      // changing b does NOT affect a

Console.WriteLine(a); // 10
Console.WriteLine(b); // 20
\`\`\`

\`a\` and \`b\` are independent. Changing one doesn't affect the other.

Value types in C# include: \`int\`, \`long\`, \`double\`, \`float\`, \`decimal\`, \`bool\`, \`char\`, \`byte\`, \`short\`, and all \`struct\` types (including \`DateTime\`, \`TimeSpan\`, \`Guid\`).

---

## Reference Types in Action

\`\`\`csharp
int[] a = { 1, 2, 3 };
int[] b = a;    // b points to the SAME array as a
b[0] = 99;      // this modifies the shared array

Console.WriteLine(a[0]); // 99 — a was also affected!
Console.WriteLine(b[0]); // 99
\`\`\`

\`a\` and \`b\` both reference the same array object. Modifying the data through \`b\` affects what \`a\` sees too.

Reference types in C# include: all classes (\`string\`, \`List<T>\`, \`HttpClient\`, your own classes), arrays, and interfaces.

---

## Strings Are Special

\`string\` is a reference type, but it behaves like a value type because strings are **immutable**:

\`\`\`csharp
string a = "hello";
string b = a;
b = "world";    // creates a NEW string; does not modify "hello"

Console.WriteLine(a); // hello — unchanged
Console.WriteLine(b); // world
\`\`\`

You can't modify a string in place. Every string operation returns a new string object. So even though strings are reference types, you don't get the "shared mutation" problem with them.

---

## null

Reference types can be \`null\` — a reference that points to nothing:

\`\`\`csharp
string name = null;
Console.WriteLine(name.Length); // NullReferenceException!
\`\`\`

Value types cannot be \`null\` by default. An \`int\` always holds a value.

If you need a nullable value type, use the \`?\` suffix:

\`\`\`csharp
int? age = null;
if (age.HasValue)
{
    Console.WriteLine(age.Value);
}

// Or with the null-coalescing operator
int actualAge = age ?? 0;
\`\`\`

---

## Nullable Reference Types

Modern C# (8.0+) with \`<Nullable>enable</Nullable>\` in your project file adds compile-time analysis to catch null reference errors:

\`\`\`csharp
string name = "Alice";  // non-nullable: must not be null
string? nickname = null; // nullable: can be null

Console.WriteLine(name.Length);     // safe — compiler knows it's not null
Console.WriteLine(nickname.Length); // warning: might be null
Console.WriteLine(nickname?.Length ?? 0); // safe: null-conditional + coalescing
\`\`\`

Enabling nullable reference types is strongly recommended. It catches bugs at compile time instead of runtime.

---

## Passing to Methods

Value types are passed by value (a copy is made). Reference types pass a reference (the method can modify the original data):

\`\`\`csharp
void DoubleValue(int x)
{
    x = x * 2; // modifies the local copy only
}

void ClearArray(int[] arr)
{
    arr[0] = 0; // modifies the actual array
}

int n = 5;
DoubleValue(n);
Console.WriteLine(n); // 5 — unchanged

int[] nums = { 1, 2, 3 };
ClearArray(nums);
Console.WriteLine(nums[0]); // 0 — modified
\`\`\`

---

## What Comes Next

The next lesson covers strings and interpolation in depth — one of the most commonly used features in everyday C# programming.
`,
};
