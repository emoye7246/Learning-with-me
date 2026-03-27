export const lessonReadingInput = {
  id: "reading-input-cs",
  title: "Reading Input",
  hasChallenge: false,
  article: `
## Reading Input

Console programs interact with users through standard input. In C#, \`Console.ReadLine()\` is the primary method for reading user input. This lesson covers how to read, parse, and validate input correctly.

---

## Console.ReadLine()

\`Console.ReadLine()\` reads a line of text from standard input and returns it as a \`string?\` (nullable string):

\`\`\`csharp
Console.Write("Enter your name: ");
string? input = Console.ReadLine();
Console.WriteLine($"Hello, {input}!");
\`\`\`

\`ReadLine()\` blocks execution until the user presses Enter. It returns \`null\` when the input stream ends (e.g., when reading from a redirected file that's been fully read).

---

## Handling Null

Because \`ReadLine()\` can return \`null\`, you need to handle it:

\`\`\`csharp
string? raw = Console.ReadLine();
string name = raw ?? "Anonymous";  // use "Anonymous" if null
\`\`\`

Or use the null-coalescing assignment:

\`\`\`csharp
string name = Console.ReadLine() ?? string.Empty;
\`\`\`

---

## Parsing Numeric Input

User input is always a string. To use it as a number, you must parse it:

\`\`\`csharp
Console.Write("Enter a number: ");
string? input = Console.ReadLine();
int number = int.Parse(input ?? "0");  // throws FormatException if invalid
\`\`\`

\`int.Parse()\` throws an exception if the input isn't a valid integer. For user input, prefer \`TryParse()\`:

\`\`\`csharp
Console.Write("Enter your age: ");
string? input = Console.ReadLine();

if (int.TryParse(input, out int age))
{
    Console.WriteLine($"You are {age} years old.");
}
else
{
    Console.WriteLine("That's not a valid age.");
}
\`\`\`

\`TryParse()\` returns \`false\` instead of throwing when the input is invalid. It's almost always the right choice for user input.

---

## Robust Input Loop

A common pattern: keep asking until the user provides valid input:

\`\`\`csharp
int GetPositiveInt(string prompt)
{
    while (true)
    {
        Console.Write(prompt);
        string? input = Console.ReadLine();

        if (int.TryParse(input, out int value) && value > 0)
            return value;

        Console.WriteLine("Please enter a positive whole number.");
    }
}

int count = GetPositiveInt("How many items? ");
Console.WriteLine($"You entered: {count}");
\`\`\`

---

## Reading Multiple Values

You can ask for multiple pieces of information:

\`\`\`csharp
Console.Write("First name: ");
string firstName = Console.ReadLine() ?? "";

Console.Write("Last name: ");
string lastName = Console.ReadLine() ?? "";

Console.Write("Age: ");
int age = 0;
while (!int.TryParse(Console.ReadLine(), out age) || age < 0)
{
    Console.Write("Please enter a valid age: ");
}

Console.WriteLine($"Name: {firstName} {lastName}, Age: {age}");
\`\`\`

---

## Console.ReadKey()

For single-keystroke input (like "press any key to continue"):

\`\`\`csharp
Console.WriteLine("Press any key to continue...");
ConsoleKeyInfo key = Console.ReadKey(intercept: true); // intercept: don't echo the key
Console.WriteLine($"You pressed: {key.Key}");
\`\`\`

For detecting specific keys:

\`\`\`csharp
if (key.Key == ConsoleKey.Y)
    Console.WriteLine("Confirmed.");
else if (key.Key == ConsoleKey.Escape)
    Console.WriteLine("Cancelled.");
\`\`\`

---

## Command-Line Arguments

Programs can receive arguments when launched from the terminal:

\`\`\`csharp
// Program.cs (top-level statements)
// Access args directly — available as the implicit 'args' variable
if (args.Length == 0)
{
    Console.WriteLine("Usage: myapp <name>");
    return;
}

string name = args[0];
Console.WriteLine($"Hello, {name}!");
\`\`\`

\`\`\`bash
dotnet run -- Alice
# Output: Hello, Alice!
\`\`\`

---

## Parsing from Strings — Quick Reference

\`\`\`csharp
int.Parse("42")           // 42
int.TryParse("abc", out _) // false
double.Parse("3.14")      // 3.14
bool.Parse("true")        // true
DateTime.Parse("2025-01-15") // DateTime
Enum.Parse<DayOfWeek>("Monday") // DayOfWeek.Monday
\`\`\`

---

## What Comes Next

The next lesson covers type casting — how to convert between numeric types and what the rules are for safe and unsafe conversions.
`,
};
