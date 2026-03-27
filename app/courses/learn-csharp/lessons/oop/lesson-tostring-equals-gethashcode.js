export const lessonToStringEqualsGetHashCode = {
  id: "tostring-equals-gethashcode",
  title: "ToString(), Equals(), GetHashCode()",
  hasChallenge: false,
  article: `
## ToString(), Equals(), GetHashCode()

Every class in C# implicitly inherits from \`System.Object\`. This base class defines several virtual methods that you can — and often should — override. The three most important are \`ToString()\`, \`Equals()\`, and \`GetHashCode()\`.

### Why Object Has These Methods

\`System.Object\` is the root of C#'s entire type hierarchy. Every class you write is an \`Object\`. The default implementations of \`ToString()\`, \`Equals()\`, and \`GetHashCode()\` are generic and rarely what you want for your own types.

### ToString() — Human-Readable Representation

By default, \`ToString()\` on a custom class returns the fully qualified type name (e.g., \`"MyApp.Person"\`). That's almost never useful when debugging:

\`\`\`csharp
class Point
{
    public double X { get; }
    public double Y { get; }

    public Point(double x, double y) { X = x; Y = y; }
}

var p = new Point(3, 4);
Console.WriteLine(p); // "MyApp.Point" — not helpful!
\`\`\`

Override \`ToString()\` to return something meaningful:

\`\`\`csharp
class Point
{
    public double X { get; }
    public double Y { get; }

    public Point(double x, double y) { X = x; Y = y; }

    public override string ToString() => $"({X}, {Y})";
}

var p = new Point(3, 4);
Console.WriteLine(p);            // (3, 4)
Console.WriteLine($"Point: {p}"); // Point: (3, 4)
\`\`\`

\`Console.WriteLine\`, string interpolation, and debuggers all call \`ToString()\` automatically — so a good override pays dividends everywhere.

### Reference vs Value Equality

Before diving into \`Equals()\`, it's important to understand what **reference equality** means:

\`\`\`csharp
var a = new Point(3, 4);
var b = new Point(3, 4);

Console.WriteLine(a == b);       // False — different objects in memory
Console.WriteLine(object.ReferenceEquals(a, b)); // False
\`\`\`

Even though \`a\` and \`b\` have identical data, they are two different objects. The default \`Equals()\` compares **references** (memory addresses), not content. For most value-like objects, you want **value equality** — equal if the data is equal.

### Equals() — Structural Equality

Override \`Equals()\` to define when two instances should be considered equal:

\`\`\`csharp
class Point
{
    public double X { get; }
    public double Y { get; }

    public Point(double x, double y) { X = x; Y = y; }

    public override bool Equals(object? obj)
    {
        if (obj is not Point other) return false;
        return X == other.X && Y == other.Y;
    }

    public override string ToString() => $"({X}, {Y})";
}

var a = new Point(3, 4);
var b = new Point(3, 4);
Console.WriteLine(a.Equals(b)); // True
\`\`\`

### GetHashCode() — The Equality Contract

Here's the rule: **if two objects are equal, they must return the same hash code**. This contract must always hold for \`Dictionary\`, \`HashSet\`, and other hash-based collections to work correctly.

If you override \`Equals()\`, you *must* also override \`GetHashCode()\`. The compiler will warn you if you don't.

\`\`\`csharp
class Point
{
    public double X { get; }
    public double Y { get; }

    public Point(double x, double y) { X = x; Y = y; }

    public override bool Equals(object? obj)
    {
        if (obj is not Point other) return false;
        return X == other.X && Y == other.Y;
    }

    public override int GetHashCode() => HashCode.Combine(X, Y);

    public override string ToString() => $"({X}, {Y})";
}
\`\`\`

\`HashCode.Combine()\` is the idiomatic way to build a hash from multiple values. It handles the combining algorithm for you.

### Putting It All Together

\`\`\`csharp
class Money
{
    public decimal Amount { get; }
    public string Currency { get; }

    public Money(decimal amount, string currency)
    {
        Amount = amount;
        Currency = currency.ToUpper();
    }

    public override string ToString() => $"{Amount:F2} {Currency}";

    public override bool Equals(object? obj)
    {
        if (obj is not Money other) return false;
        return Amount == other.Amount && Currency == other.Currency;
    }

    public override int GetHashCode() => HashCode.Combine(Amount, Currency);
}

var price1 = new Money(9.99m, "usd");
var price2 = new Money(9.99m, "USD");
Console.WriteLine(price1);          // 9.99 USD
Console.WriteLine(price1 == price2); // False — == still uses reference equality
Console.WriteLine(price1.Equals(price2)); // True — our override
\`\`\`

Note that overriding \`Equals()\` doesn't automatically change the \`==\` operator for classes — for that, you'd also need to overload \`operator ==\`, which is covered in more advanced material.

### When Records Save You the Work

If you're on C# 9+, \`record\` types generate \`Equals()\`, \`GetHashCode()\`, and \`ToString()\` automatically based on all properties. This is covered in the interfaces-abstraction module.

### Summary

- Every C# class inherits \`ToString()\`, \`Equals()\`, and \`GetHashCode()\` from \`System.Object\`
- Override \`ToString()\` to return a meaningful string — used by \`Console.WriteLine\`, string interpolation, and debuggers
- The default \`Equals()\` checks reference equality; override it for value-based comparison
- Always override \`GetHashCode()\` when you override \`Equals()\` — use \`HashCode.Combine()\`
- Equal objects must always have the same hash code — this is a fundamental contract
`,
};
