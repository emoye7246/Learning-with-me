export const lessonStaticKeyword = {
  id: "static-keyword-cs",
  title: "The static Keyword",
  hasChallenge: false,
  article: `
## The static Keyword

Every instance method and property you've seen so far belongs to a specific object. Call \`account.Deposit(100)\` and you're operating on *that* account. But sometimes you want behavior or data that belongs to the **class itself**, not to any particular instance. That's where \`static\` comes in.

### Static Fields

A **static field** is shared across all instances of a class. There is only one copy, no matter how many objects you create:

\`\`\`csharp
class Counter
{
    private static int _totalCount = 0; // one copy for all instances
    private int _id;

    public Counter()
    {
        _totalCount++;
        _id = _totalCount;
    }

    public int Id => _id;
    public static int TotalCount => _totalCount;
}

var a = new Counter();
var b = new Counter();
var c = new Counter();

Console.WriteLine(a.Id);            // 1
Console.WriteLine(b.Id);            // 2
Console.WriteLine(Counter.TotalCount); // 3 — accessed on the class, not an instance
\`\`\`

Note that you access static members through the **class name**, not through an instance.

### Static Methods

A **static method** belongs to the class, not to any instance. It cannot access instance fields or properties (there's no \`this\` in a static method):

\`\`\`csharp
class MathHelpers
{
    public static double DegToRad(double degrees) => degrees * Math.PI / 180.0;
    public static double RadToDeg(double radians) => radians * 180.0 / Math.PI;
    public static bool IsPrime(int n)
    {
        if (n < 2) return false;
        for (int i = 2; i <= Math.Sqrt(n); i++)
            if (n % i == 0) return false;
        return true;
    }
}

double rad = MathHelpers.DegToRad(90);     // 1.5707...
bool prime = MathHelpers.IsPrime(17);      // true
\`\`\`

\`Math\`, \`Console\`, and \`File\` from the .NET standard library are all examples of utility classes packed with static methods.

### Static Classes

If a class only contains static members (i.e., it's purely a utility class), you can mark the class itself as \`static\`. This prevents anyone from creating an instance of it:

\`\`\`csharp
static class StringExtensions
{
    public static string Truncate(string value, int maxLength)
    {
        if (value.Length <= maxLength) return value;
        return value[..maxLength] + "...";
    }

    public static bool IsEmail(string value)
    {
        return value.Contains('@') && value.Contains('.');
    }
}

string truncated = StringExtensions.Truncate("Hello, World!", 5); // Hello...
bool isEmail = StringExtensions.IsEmail("user@example.com");       // true
\`\`\`

Attempting \`new StringExtensions()\` will produce a compile-time error.

### Static Constructors

A **static constructor** runs once, the first time the class is used. It's used to initialize static fields that require non-trivial setup:

\`\`\`csharp
class Config
{
    public static readonly string AppName;
    public static readonly int MaxRetries;

    static Config()
    {
        AppName = Environment.GetEnvironmentVariable("APP_NAME") ?? "MyApp";
        MaxRetries = int.TryParse(Environment.GetEnvironmentVariable("MAX_RETRIES"), out int r) ? r : 3;
    }
}

Console.WriteLine(Config.AppName);   // MyApp (or env value)
Console.WriteLine(Config.MaxRetries); // 3
\`\`\`

Static constructors have no access modifier and take no parameters. C# guarantees they run exactly once.

### When to Use Static vs Instance Members

| Use \`static\` when... | Use instance when... |
|-----------------------|----------------------|
| The operation doesn't depend on object state | The behavior depends on the object's data |
| It's a pure utility/helper function | It reads or modifies the object's fields |
| It's a factory method creating instances | It represents a behavior of a specific entity |
| Tracking class-level state (counters, caches) | Tracking per-object state |

### The Singleton Pattern (A Cautionary Note)

Static fields are sometimes used to implement singletons — a single shared instance of a class:

\`\`\`csharp
class AppLogger
{
    private static AppLogger? _instance;
    private AppLogger() { }

    public static AppLogger Instance => _instance ??= new AppLogger();

    public void Log(string message) => Console.WriteLine($"[LOG] {message}");
}

AppLogger.Instance.Log("Started"); // creates instance on first call
AppLogger.Instance.Log("Done");    // reuses same instance
\`\`\`

Use singletons sparingly — they can make code hard to test. Prefer dependency injection in larger applications.

### Summary

- Static members belong to the class itself, not to any particular instance
- Access static members via the class name: \`ClassName.Member\`
- Static methods cannot use \`this\` or access instance-level data
- Static classes are utility containers — they cannot be instantiated
- Static constructors initialize static state once, the first time the class is used
- Prefer instance members when behavior depends on object state; use static for stateless helpers
`,
};
