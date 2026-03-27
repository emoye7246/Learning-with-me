export const lessonObjectInitializersNamedArgs = {
  id: "object-initializers-named-args",
  title: "Object Initializers & Named Arguments",
  hasChallenge: false,
  article: `
## Object Initializers & Named Arguments

C# offers several ergonomic features for creating and calling things — object initializers, named arguments, and optional parameters. Together they make your code more readable and flexible without forcing you to write a dozen constructor overloads.

### Object Initializer Syntax

An **object initializer** lets you set public properties right after calling \`new\`, without needing a constructor that accepts all those values:

\`\`\`csharp
class Person
{
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public int Age { get; set; }
    public string Email { get; set; } = "";
}

// Without initializer — verbose
var p1 = new Person();
p1.FirstName = "Alice";
p1.LastName = "Smith";
p1.Age = 30;

// With initializer — clean
var p2 = new Person
{
    FirstName = "Alice",
    LastName = "Smith",
    Age = 30,
    Email = "alice@example.com"
};
\`\`\`

Both approaches produce the same result. The initializer form is preferred because it's more readable and expresses intent clearly.

### Mixing Constructors and Initializers

Object initializers run *after* the constructor. So you can use a constructor for required data and an initializer for optional data:

\`\`\`csharp
class Product
{
    public string Name { get; }
    public decimal Price { get; set; }
    public string? Description { get; set; }
    public bool InStock { get; set; } = true;

    public Product(string name, decimal price)
    {
        Name = name;
        Price = price;
    }
}

var widget = new Product("Widget", 9.99m)
{
    Description = "A handy little widget",
    InStock = false
};
\`\`\`

### Init-Only Properties with Initializers

Properties with \`init\` accessors can only be set via object initializers (or the constructor), making this pattern great for near-immutable objects:

\`\`\`csharp
class OrderLine
{
    public string ProductId { get; init; } = "";
    public int Quantity { get; init; }
    public decimal UnitPrice { get; init; }
    public decimal Total => Quantity * UnitPrice;
}

var line = new OrderLine { ProductId = "ABC-001", Quantity = 3, UnitPrice = 4.99m };
Console.WriteLine(line.Total); // 14.97
// line.Quantity = 5; // compile error — init only
\`\`\`

### Named Arguments in Method Calls

When calling a method, you can specify arguments **by name** rather than relying on position. This is called a **named argument**:

\`\`\`csharp
void CreateUser(string username, string email, bool isAdmin = false, int maxSessions = 5)
{
    Console.WriteLine($"User: {username}, Email: {email}, Admin: {isAdmin}, Sessions: {maxSessions}");
}

// Positional — you must remember the order
CreateUser("alice", "alice@example.com", false, 10);

// Named — order doesn't matter, intent is clear
CreateUser(username: "alice", email: "alice@example.com", maxSessions: 10);
\`\`\`

Named arguments are especially valuable when a method has many parameters with similar types (e.g., multiple \`bool\` flags), where the positional form is ambiguous.

### Optional Parameters

A parameter is **optional** when it has a default value. Callers can omit optional arguments and the default applies:

\`\`\`csharp
string FormatCurrency(decimal amount, string symbol = "$", int decimals = 2)
{
    return $"{symbol}{amount.ToString($"F{decimals}")}";
}

Console.WriteLine(FormatCurrency(9.99m));             // $9.99
Console.WriteLine(FormatCurrency(9.99m, "€"));        // €9.99
Console.WriteLine(FormatCurrency(9.99m, "£", 0));     // £10
\`\`\`

Optional parameters must come **after** all required parameters.

### Positional vs Named — When to Use Which

| Situation | Recommendation |
|-----------|---------------|
| 1–2 parameters, clearly typed | Positional is fine |
| Multiple \`bool\` flags | Named args — \`isAdmin: true\` is clearer than \`true\` |
| Long parameter lists | Named for readability |
| Skipping optional params in the middle | Named args are required |
| \`record\` positional constructors | Positional is idiomatic |

### Skipping Optional Arguments

Named arguments allow you to skip over optional parameters you don't want to change:

\`\`\`csharp
void Send(string to, string subject, string body, bool isHtml = false, int priority = 3, bool trackOpens = false)
{
    // imagine sending an email here
}

// Skip isHtml and priority, just set trackOpens
Send("alice@example.com", "Hello", "Hi there", trackOpens: true);
\`\`\`

Without named arguments you'd have to repeat all the defaults: \`Send("...", "...", "...", false, 3, true)\` — fragile and hard to read.

### Summary

- Object initializers set properties inline after \`new\`, eliminating repetitive assignment statements
- Constructors run first; initializers run after — mix them for required + optional data
- \`init\`-only properties pair perfectly with object initializers for near-immutable types
- Named arguments make call sites self-documenting and remove ambiguity
- Optional parameters reduce the need for multiple overloads
- You can skip optional parameters in the middle using named argument syntax
`,
};
