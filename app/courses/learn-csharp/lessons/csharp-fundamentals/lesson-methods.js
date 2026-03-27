export const lessonMethods = {
  id: "methods-cs",
  title: "Methods",
  hasChallenge: false,
  article: `
## Methods

A method is a named block of code that performs a specific task. Methods let you avoid repeating code, break programs into manageable pieces, and express intent through meaningful names.

---

## Defining and Calling Methods

\`\`\`csharp
// Method definition
void SayHello()
{
    Console.WriteLine("Hello!");
}

// Method call
SayHello(); // Output: Hello!
SayHello(); // can call it multiple times
\`\`\`

\`void\` means the method returns nothing. The empty parentheses mean it takes no parameters.

---

## Parameters

Parameters are inputs to a method:

\`\`\`csharp
void Greet(string name)
{
    Console.WriteLine($"Hello, {name}!");
}

void PrintSum(int a, int b)
{
    Console.WriteLine($"{a} + {b} = {a + b}");
}

Greet("Alice");        // Hello, Alice!
Greet("Bob");          // Hello, Bob!
PrintSum(3, 7);        // 3 + 7 = 10
\`\`\`

---

## Return Values

Methods can return a value using \`return\`:

\`\`\`csharp
int Add(int a, int b)
{
    return a + b;
}

double CircleArea(double radius)
{
    return Math.PI * radius * radius;
}

int sum = Add(5, 3);          // sum = 8
double area = CircleArea(5);  // area ≈ 78.54
\`\`\`

The return type is declared before the method name. The method must return a value of that type on all code paths (or not at all, for \`void\`).

---

## Expression-Bodied Methods

For simple single-expression methods, you can use the arrow syntax:

\`\`\`csharp
int Add(int a, int b) => a + b;
double CircleArea(double r) => Math.PI * r * r;
string Greet(string name) => $"Hello, {name}!";
\`\`\`

These are identical to the block-body versions. Use them when the method fits naturally in one expression.

---

## Optional Parameters

Parameters can have default values, making them optional:

\`\`\`csharp
void PrintMessage(string message, int times = 1, string prefix = "")
{
    for (int i = 0; i < times; i++)
    {
        Console.WriteLine($"{prefix}{message}");
    }
}

PrintMessage("Hello");                    // Hello
PrintMessage("Hello", 3);                 // Hello (3 times)
PrintMessage("Hello", 3, ">> ");          // >> Hello (3 times)
\`\`\`

Optional parameters must come after required parameters.

---

## Named Arguments

You can specify arguments by name, allowing any order:

\`\`\`csharp
PrintMessage(times: 2, message: "Hey", prefix: "* ");
\`\`\`

Named arguments are useful when calling methods with many parameters to make the call site more readable.

---

## Multiple Return Paths

A method can have multiple \`return\` statements:

\`\`\`csharp
string GetGrade(int score)
{
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}
\`\`\`

Every code path must return a value (the compiler enforces this).

---

## Returning Multiple Values with Tuples

\`\`\`csharp
(int Min, int Max) FindMinMax(int[] numbers)
{
    int min = numbers[0], max = numbers[0];
    foreach (int n in numbers)
    {
        if (n < min) min = n;
        if (n > max) max = n;
    }
    return (min, max);
}

var (min, max) = FindMinMax(new[] { 3, 1, 9, 2, 7 });
Console.WriteLine($"Min: {min}, Max: {max}"); // Min: 1, Max: 9
\`\`\`

---

## The out Keyword

\`out\` parameters let a method return additional values through its parameters:

\`\`\`csharp
bool TryParseAge(string input, out int age)
{
    if (int.TryParse(input, out age) && age >= 0 && age <= 150)
        return true;
    age = 0;
    return false;
}

if (TryParseAge("25", out int parsedAge))
    Console.WriteLine($"Age: {parsedAge}");
\`\`\`

The \`Try*\` pattern (return bool, use \`out\` for the result) is common in the .NET BCL.

---

## Method Overloading

Multiple methods can share the same name if they have different parameter lists:

\`\`\`csharp
int Add(int a, int b) => a + b;
double Add(double a, double b) => a + b;
int Add(int a, int b, int c) => a + b + c;

Add(1, 2);         // calls int version
Add(1.5, 2.5);     // calls double version
Add(1, 2, 3);      // calls three-parameter version
\`\`\`

The compiler selects the best matching overload based on the argument types.

---

## What Comes Next

The next lesson covers reading input from the user — how to get data from the console and validate it.
`,
};
