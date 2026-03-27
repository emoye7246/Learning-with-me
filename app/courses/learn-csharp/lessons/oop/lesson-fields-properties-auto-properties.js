export const lessonFieldsPropertiesAutoProperties = {
  id: "fields-properties-auto-properties",
  title: "Fields, Properties & Auto-Properties",
  hasChallenge: false,
  article: `
## Fields, Properties & Auto-Properties

In the previous lesson, we used public fields to store data on a class. While convenient, public fields expose your internal state directly to the outside world — any code anywhere can set them to invalid values. **Properties** give you control.

### Fields vs Properties

A **field** is a variable declared directly in a class:

\`\`\`csharp
class BankAccount
{
    public decimal Balance; // public field — dangerous!
}

var account = new BankAccount();
account.Balance = -99999; // nothing stops this!
\`\`\`

A **property** looks like a field from the outside but uses get/set accessors underneath, letting you add validation or logic:

\`\`\`csharp
class BankAccount
{
    private decimal _balance; // private backing field

    public decimal Balance
    {
        get { return _balance; }
        set
        {
            if (value < 0)
                throw new ArgumentException("Balance cannot be negative.");
            _balance = value;
        }
    }
}
\`\`\`

Now invalid values are rejected at the point of assignment.

### The Private Backing Field Convention

By convention, private backing fields use **camelCase with an underscore prefix**: \`_balance\`, \`_name\`, \`_isActive\`. The corresponding property uses PascalCase: \`Balance\`, \`Name\`, \`IsActive\`.

### Auto-Properties

When you don't need custom get/set logic, **auto-properties** let you skip the backing field entirely. The compiler generates it for you:

\`\`\`csharp
class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}
\`\`\`

This is functionally equivalent to writing a full property with a private backing field, but far more concise. Auto-properties are the most common pattern in everyday C# code.

### Read-Only Properties

A property with only a getter (no setter) is read-only from outside the class:

\`\`\`csharp
class Circle
{
    public double Radius { get; }

    public Circle(double radius)
    {
        Radius = radius; // can only be set here, in the constructor
    }

    public double Area => Math.PI * Radius * Radius; // expression-bodied property
}
\`\`\`

The \`=>\` syntax (expression body) is shorthand for a getter that returns a single expression — great for computed properties.

### Init-Only Setters (C# 9+)

The \`init\` keyword allows a property to be set during object initialization but not afterward:

\`\`\`csharp
class Product
{
    public string Name { get; init; }
    public decimal Price { get; init; }
}

var item = new Product { Name = "Widget", Price = 9.99m }; // OK
item.Name = "Gadget"; // ERROR: can only be set during initialization
\`\`\`

This is perfect for immutable-ish objects where you want the convenience of object initializer syntax without the risk of later mutation.

### Property Validation in the Setter

You can add any logic inside a setter. A common pattern is to validate and throw if the value is invalid:

\`\`\`csharp
class Person
{
    private string _name = "";

    public string Name
    {
        get => _name;
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("Name cannot be empty.");
            _name = value.Trim();
        }
    }

    private int _age;

    public int Age
    {
        get => _age;
        set
        {
            if (value < 0 || value > 150)
                throw new ArgumentOutOfRangeException(nameof(value), "Age must be between 0 and 150.");
            _age = value;
        }
    }
}
\`\`\`

### Private Setters

Sometimes you want a property that is readable from outside but only settable from inside the class:

\`\`\`csharp
class Order
{
    public DateTime CreatedAt { get; private set; }

    public Order()
    {
        CreatedAt = DateTime.UtcNow; // set internally
    }
}
\`\`\`

\`private set\` is extremely common for properties that should reflect computed or internally managed state.

### Choosing the Right Pattern

| Scenario | Use |
|----------|-----|
| Simple data, no validation needed | Auto-property \`{ get; set; }\` |
| Read after construction only | \`{ get; init; }\` or \`{ get; }\` |
| Needs validation in setter | Full property with backing field |
| Computed value | Expression-bodied getter \`=> ...\` |
| Internal mutation only | \`{ get; private set; }\` |

### Summary

- Prefer properties over public fields — they give you control over reads and writes
- Auto-properties (\`{ get; set; }\`) are the default choice for simple data
- Use \`init\` for properties that should only be set at creation time
- Use private backing fields with validation when you need to enforce invariants
- Expression-bodied properties (\`=>\`) are clean for computed values
`,
};
