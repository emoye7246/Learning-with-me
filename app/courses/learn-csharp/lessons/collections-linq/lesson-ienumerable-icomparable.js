export const lessonIenumerableIcomparable = {
  id: "ienumerable-icomparable",
  title: "IEnumerable and IComparable",
  hasChallenge: false,
  article: `
## IEnumerable and IComparable

Two interfaces appear constantly when working with collections in C#: \`IEnumerable<T>\` — the universal "I can be iterated" interface — and \`IComparable<T>\` — the "I know how to compare myself to another" interface. Understanding them makes you a much more effective C# developer.

### IEnumerable<T> — The Universal Collection Interface

\`IEnumerable<T>\` is the most fundamental collection interface in .NET. Any type that implements it can be used in a \`foreach\` loop and works with all LINQ methods. Arrays, \`List<T>\`, \`HashSet<T>\`, \`Dictionary<TKey, TValue>\`, and every other standard collection implement it.

\`\`\`csharp
// These all work because they implement IEnumerable<T>
IEnumerable<int> fromArray = new int[] { 1, 2, 3 };
IEnumerable<int> fromList = new List<int> { 1, 2, 3 };
IEnumerable<int> fromSet = new HashSet<int> { 1, 2, 3 };

void PrintAll(IEnumerable<int> items)
{
    foreach (int item in items)
        Console.WriteLine(item);
}

// All three work with the same method
PrintAll(fromArray);
PrintAll(fromList);
PrintAll(fromSet);
\`\`\`

This is powerful: by accepting \`IEnumerable<T>\` as a parameter type, your methods work with any collection — the caller decides what to pass in.

**The interface itself is simple:**

\`\`\`csharp
public interface IEnumerable<T>
{
    IEnumerator<T> GetEnumerator();
}

public interface IEnumerator<T>
{
    T Current { get; }
    bool MoveNext();
    void Reset();
}
\`\`\`

You can implement it yourself using \`yield return\`:

\`\`\`csharp
class NumberRange : IEnumerable<int>
{
    private int _start, _end;

    public NumberRange(int start, int end)
    {
        _start = start;
        _end = end;
    }

    public IEnumerator<int> GetEnumerator()
    {
        for (int i = _start; i <= _end; i++)
            yield return i;
    }

    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
        => GetEnumerator(); // Required non-generic version
}

NumberRange range = new NumberRange(1, 5);
foreach (int n in range)
    Console.Write(n + " "); // 1 2 3 4 5
\`\`\`

### IComparable<T> — Defining a Natural Sort Order

When you call \`List<T>.Sort()\` or \`Array.Sort()\` on custom objects, the runtime needs to know how to order them. Implement \`IComparable<T>\` to define the natural sort order for your type.

\`\`\`csharp
class Student : IComparable<Student>
{
    public string Name { get; set; }
    public double Gpa { get; set; }

    public int CompareTo(Student other)
    {
        if (other == null) return 1;
        // Sort by GPA descending (highest first)
        return other.Gpa.CompareTo(this.Gpa);
    }

    public override string ToString() => $"{Name} ({Gpa:F2})";
}

List<Student> students = new List<Student>
{
    new Student { Name = "Alice", Gpa = 3.8 },
    new Student { Name = "Bob", Gpa = 3.5 },
    new Student { Name = "Carol", Gpa = 3.9 },
};

students.Sort(); // Uses CompareTo
foreach (Student s in students)
    Console.WriteLine(s); // Carol (3.90), Alice (3.80), Bob (3.50)
\`\`\`

\`CompareTo\` returns:
- **Negative** if \`this\` comes before \`other\`
- **Zero** if they are equal
- **Positive** if \`this\` comes after \`other\`

### IComparer<T> — External Sort Logic

Sometimes you don't own the class, or you need multiple different sort orders. \`IComparer<T>\` lets you define sorting logic separately from the class itself:

\`\`\`csharp
class StudentNameComparer : IComparer<Student>
{
    public int Compare(Student x, Student y)
    {
        if (x == null && y == null) return 0;
        if (x == null) return -1;
        if (y == null) return 1;
        return string.Compare(x.Name, y.Name, StringComparison.Ordinal);
    }
}

// Sort by name using the external comparer
students.Sort(new StudentNameComparer());

// Or use a lambda for a one-off sort
students.Sort((a, b) => a.Name.CompareTo(b.Name));
\`\`\`

### Implementing Both Together

A complete, well-behaved custom collection type often implements both interfaces:

\`\`\`csharp
class Product : IComparable<Product>
{
    public string Name { get; set; }
    public decimal Price { get; set; }

    // Natural order: by price ascending
    public int CompareTo(Product other)
    {
        if (other == null) return 1;
        return Price.CompareTo(other.Price);
    }
}

class ProductCatalog : IEnumerable<Product>
{
    private List<Product> _products = new List<Product>();

    public void Add(Product p) => _products.Add(p);

    public IEnumerable<Product> Sorted()
    {
        var sorted = new List<Product>(_products);
        sorted.Sort(); // Uses IComparable<Product>
        return sorted;
    }

    public IEnumerator<Product> GetEnumerator() => _products.GetEnumerator();
    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator() => GetEnumerator();
}
\`\`\`

### Summary

- \`IEnumerable<T>\` is the universal interface that enables \`foreach\` and LINQ on any type — accept it as a parameter to write maximally flexible methods
- \`IEnumerator<T>\` drives the actual iteration via \`MoveNext()\` and \`Current\`
- \`IComparable<T>\` defines the natural sort order of a type, enabling \`Sort()\` without extra arguments
- \`IComparer<T>\` provides external, substitutable sort logic — useful when you need multiple orderings or can't modify the class
- These interfaces are the foundation of how C# collections, LINQ, and sorting all fit together
`,
};
