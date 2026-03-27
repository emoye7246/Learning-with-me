export const lessonGenerics = {
  id: "generics-cs",
  title: "Generics — Writing Type-Safe Reusable Code",
  hasChallenge: false,
  article: `
## Generics — Writing Type-Safe Reusable Code

Generics are one of C#'s most powerful features. They let you write classes, methods, and interfaces that work with **any type** — while the compiler still enforces full type safety at compile time. If you've used \`List<T>\` or \`Dictionary<TKey, TValue>\`, you've already used generics.

### The Problem Generics Solve

Imagine writing a \`Pair\` class that holds two related values. Without generics, you'd use \`object\`:

\`\`\`csharp
// Without generics — fragile
class Pair
{
    public object First { get; set; }
    public object Second { get; set; }
}

Pair p = new Pair { First = "hello", Second = 42 };
string s = (string)p.First;  // Must cast — can fail at runtime
int n = (int)p.Second;       // Must cast — can fail at runtime
\`\`\`

This works but is unsafe. Nothing stops you from putting an \`int\` where a \`string\` is expected, and the error only surfaces at runtime.

### Generic Classes

With generics, you define a **type parameter** using angle brackets:

\`\`\`csharp
class Pair<TFirst, TSecond>
{
    public TFirst First { get; set; }
    public TSecond Second { get; set; }

    public Pair(TFirst first, TSecond second)
    {
        First = first;
        Second = second;
    }

    public override string ToString() => $"({First}, {Second})";
}

// Compiler infers types or you specify them
Pair<string, int> person = new Pair<string, int>("Alice", 30);
Console.WriteLine(person.First.ToUpper()); // "ALICE" — no cast needed
Console.WriteLine(person.Second + 1);      // 31 — compiler knows it's int
\`\`\`

Now \`person.First\` is statically known to be a \`string\`, and \`person.Second\` is statically known to be an \`int\`. No casts, no runtime surprises.

### Generic Methods

You can also make individual methods generic, even inside non-generic classes:

\`\`\`csharp
static T Max<T>(T a, T b) where T : IComparable<T>
{
    return a.CompareTo(b) >= 0 ? a : b;
}

int maxInt = Max(10, 20);          // 20
string maxStr = Max("apple", "banana"); // "banana"
double maxDbl = Max(3.14, 2.71);   // 3.14
\`\`\`

The compiler infers the type from the arguments — you usually don't need to write \`Max<int>(10, 20)\` explicitly.

### Generic Constraints

Sometimes you need to restrict what types \`T\` can be. **Constraints** let you do this with the \`where\` keyword:

\`\`\`csharp
// T must be a class (reference type)
void PrintIfNotNull<T>(T value) where T : class
{
    if (value != null) Console.WriteLine(value.ToString());
}

// T must have a parameterless constructor
T CreateInstance<T>() where T : new()
{
    return new T();
}

// T must implement an interface
void SortAndPrint<T>(List<T> items) where T : IComparable<T>
{
    items.Sort();
    foreach (var item in items) Console.WriteLine(item);
}

// T must be a struct (value type)
void PrintSize<T>(T value) where T : struct
{
    Console.WriteLine(System.Runtime.InteropServices.Marshal.SizeOf<T>());
}

// Multiple constraints
void ProcessEntity<T>(T entity) where T : class, IComparable<T>, new()
{
    // T is a reference type, is comparable, and can be created with new T()
}
\`\`\`

Common constraints:

| Constraint | Meaning |
|---|---|
| \`where T : class\` | T must be a reference type |
| \`where T : struct\` | T must be a value type |
| \`where T : new()\` | T must have a public parameterless constructor |
| \`where T : SomeClass\` | T must inherit from SomeClass |
| \`where T : ISomeInterface\` | T must implement ISomeInterface |
| \`where T : IComparable<T>\` | T must be comparable to itself |

### A Generic Repository Pattern

Generics shine in patterns like repositories, which perform the same operations across different entity types:

\`\`\`csharp
class Repository<T> where T : class
{
    private List<T> _items = new List<T>();

    public void Add(T item) => _items.Add(item);
    public void Remove(T item) => _items.Remove(item);
    public IEnumerable<T> GetAll() => _items.AsReadOnly();
    public int Count => _items.Count;
}

Repository<Customer> customers = new Repository<Customer>();
Repository<Product> products = new Repository<Product>();
// Same logic, different types — no code duplication
\`\`\`

### Why Generics Beat object

- **Type safety**: The compiler catches type mismatches before the program runs
- **Performance**: No boxing/unboxing for value types like \`int\` and \`double\`
- **IntelliSense**: Your IDE knows the actual type and provides proper autocomplete
- **Readability**: Code expresses intent clearly — \`List<Customer>\` is far clearer than \`ArrayList\`

### Summary

- Generics use type parameters (\`<T>\`) as placeholders that are filled in at compile time
- Generic classes and methods work with any type while remaining fully type-safe
- Constraints (\`where T : ...\`) restrict what types can be used, enabling you to call methods on \`T\`
- Generics eliminate the need for unsafe casts and costly boxing that \`object\`-based collections required
- The built-in collections (\`List<T>\`, \`Dictionary<TKey, TValue>\`, etc.) are all built on generics
`,
};
