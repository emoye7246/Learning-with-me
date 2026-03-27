export const lessonMethodsAndThis = {
  id: "methods-and-this-cs",
  title: "Methods & this",
  hasChallenge: false,
  article: `
## Methods & this

A class bundles data (properties and fields) with **behavior** (methods). Methods are functions that belong to a class. They can read and modify the object's state, accept parameters, and return values — and they always have access to \`this\`, the current instance.

### Declaring Instance Methods

An instance method is declared inside a class body. It has a return type, a name, and an optional parameter list:

\`\`\`csharp
class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }

    public double Area()
    {
        return Width * Height;
    }

    public double Perimeter()
    {
        return 2 * (Width + Height);
    }
}

var rect = new Rectangle { Width = 5, Height = 3 };
Console.WriteLine(rect.Area());      // 15
Console.WriteLine(rect.Perimeter()); // 16
\`\`\`

The method accesses \`Width\` and \`Height\` directly because it's inside the same class.

### The \`this\` Keyword in Methods

Inside any instance method, \`this\` refers to the object the method was called on. It's implicit — you don't usually need to write it — but it's there:

\`\`\`csharp
class Counter
{
    private int _count = 0;

    public void Increment()
    {
        this._count++; // explicit this — same as just _count++
    }

    public int GetCount()
    {
        return this._count;
    }
}
\`\`\`

\`this\` becomes essential when you need to pass the current object to another method, or when a parameter shadows a field name.

### Parameters and Return Values

Methods can take any number of parameters and return any type. Use \`void\` when nothing is returned:

\`\`\`csharp
class Greeter
{
    public string Name { get; set; }

    public string Greet(string greeting)
    {
        return $"{greeting}, {Name}!";
    }

    public void PrintGreeting(string greeting)
    {
        Console.WriteLine(Greet(greeting));
    }
}

var g = new Greeter { Name = "Alice" };
g.PrintGreeting("Hello");       // Hello, Alice!
string msg = g.Greet("Howdy"); // Howdy, Alice!
\`\`\`

### Expression-Bodied Methods

Single-expression methods can be written with \`=>\` (arrow syntax):

\`\`\`csharp
class Circle
{
    public double Radius { get; }
    public Circle(double radius) => Radius = radius;

    public double Area() => Math.PI * Radius * Radius;
    public double Circumference() => 2 * Math.PI * Radius;
    public bool IsLargerThan(Circle other) => Radius > other.Radius;
}
\`\`\`

This is purely syntactic sugar — no performance difference, just cleaner code for simple methods.

### Method Chaining

**Method chaining** is a pattern where each method returns \`this\`, allowing you to call multiple methods in a single fluent expression:

\`\`\`csharp
class QueryBuilder
{
    private string _table = "";
    private string _condition = "";
    private int _limit = 100;

    public QueryBuilder From(string table)
    {
        _table = table;
        return this; // return the current instance
    }

    public QueryBuilder Where(string condition)
    {
        _condition = condition;
        return this;
    }

    public QueryBuilder Limit(int limit)
    {
        _limit = limit;
        return this;
    }

    public string Build()
    {
        string where = string.IsNullOrEmpty(_condition) ? "" : $" WHERE {_condition}";
        return $"SELECT * FROM {_table}{where} LIMIT {_limit}";
    }
}

string query = new QueryBuilder()
    .From("users")
    .Where("age > 18")
    .Limit(50)
    .Build();

Console.WriteLine(query);
// SELECT * FROM users WHERE age > 18 LIMIT 50
\`\`\`

You see this pattern in LINQ, StringBuilder, and many popular libraries.

### Overloading Methods

Just like constructors, methods can be overloaded. Multiple methods with the same name but different parameter types or counts:

\`\`\`csharp
class Logger
{
    public void Log(string message)
    {
        Console.WriteLine($"[INFO] {message}");
    }

    public void Log(string message, string level)
    {
        Console.WriteLine($"[{level.ToUpper()}] {message}");
    }

    public void Log(Exception ex)
    {
        Console.WriteLine($"[ERROR] {ex.Message}");
    }
}
\`\`\`

C# picks the right overload based on the arguments you provide at the call site.

### Summary

- Instance methods are functions that belong to a class and have access to its state
- \`this\` always refers to the current instance; it's implicit in most situations
- Methods can take parameters and return values, or be \`void\`
- Expression-bodied methods (\`=>\`) are great for single-line logic
- Returning \`this\` enables fluent method chaining
- Method overloading lets you provide multiple versions with different signatures
`,
};
