export const lessonAccessModifiers = {
  id: "access-modifiers-cs",
  title: "Access Modifiers — public, private, protected",
  hasChallenge: false,
  article: `
## Access Modifiers — public, private, protected

Access modifiers control who can see and use the members (fields, properties, methods, constructors) of a class. They are the primary tool for **encapsulation** — one of the four pillars of OOP.

The idea is simple: hide what callers don't need to see, and expose only a clean, intentional public interface.

### The Main Access Modifiers

| Modifier | Accessible from |
|----------|----------------|
| \`public\` | Anywhere — inside the class, other classes, other assemblies |
| \`private\` | Only inside the class itself |
| \`protected\` | Inside the class and in any derived (child) class |
| \`internal\` | Anywhere within the same assembly (project), but not outside |
| \`protected internal\` | Either protected or internal — a combination |
| \`private protected\` | Only derived classes within the same assembly |

You'll use \`public\`, \`private\`, and \`protected\` most of the time.

### Default Accessibility

If you omit an access modifier, C# applies a default:

- **Class members** (fields, methods, properties) default to \`private\`
- **Top-level classes** default to \`internal\`

This means C# is **restrictive by default** — which is good. You have to consciously decide what to make public.

\`\`\`csharp
class Example
{
    int secret;          // private by default
    public int Visible;  // explicitly public
}
\`\`\`

### public — The External Interface

Mark something \`public\` when it forms part of your class's contract with the outside world:

\`\`\`csharp
class BankAccount
{
    public string Owner { get; }
    public decimal Balance { get; private set; }

    public BankAccount(string owner, decimal initialBalance)
    {
        Owner = owner;
        Balance = initialBalance;
    }

    public void Deposit(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("Amount must be positive.");
        Balance += amount;
    }
}
\`\`\`

### private — Hiding Implementation Details

Mark something \`private\` when it's an internal detail that callers shouldn't need to know about:

\`\`\`csharp
class PasswordManager
{
    private string _hashedPassword;

    public PasswordManager(string rawPassword)
    {
        _hashedPassword = Hash(rawPassword); // callers never touch _hashedPassword
    }

    public bool Verify(string rawPassword)
    {
        return Hash(rawPassword) == _hashedPassword;
    }

    private string Hash(string input) // helper — no need to expose this
    {
        // simplified — don't do this in production!
        return Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(input));
    }
}
\`\`\`

\`_hashedPassword\` and \`Hash()\` are private — callers interact only through the public \`Verify\` method. The implementation can change without affecting any calling code.

### protected — Sharing with Subclasses

\`protected\` members are invisible to arbitrary external code but are accessible within derived classes. This is useful when you're building a class that's meant to be inherited:

\`\`\`csharp
class Animal
{
    public string Name { get; }

    protected Animal(string name)
    {
        Name = name;
    }

    protected void Breathe()
    {
        Console.WriteLine($"{Name} breathes.");
    }
}

class Dog : Animal
{
    public Dog(string name) : base(name) { }

    public void Fetch()
    {
        Breathe(); // OK — accessible because Dog extends Animal
        Console.WriteLine($"{Name} fetches the ball!");
    }
}
\`\`\`

External code cannot call \`Breathe()\` on a \`Dog\` or \`Animal\`, but \`Dog\` itself can.

### internal — Assembly-Level Visibility

\`internal\` is a great default for classes and members that are used within a library or application but shouldn't be part of a public API:

\`\`\`csharp
internal class DatabaseConnectionPool
{
    // Only code in this project can use this class
}
\`\`\`

### The Encapsulation Rationale

Why does this matter? Consider what happens without encapsulation:

- Any code can put an \`Account\` into an invalid state (\`Balance = -1000\`)
- You can't change how \`_hashedPassword\` is stored without breaking all callers
- Your class has no single responsibility — it becomes a bag of public variables

With proper access modifiers:
- The class enforces its own invariants (balance can't go negative)
- The implementation can change freely without breaking callers
- The public interface is small, clear, and intentional

### Practical Guidelines

- Default to \`private\` for fields and helper methods
- Use \`public\` only for members that are genuinely part of the external contract
- Use \`protected\` for members that derived classes need to customize behavior
- Use \`internal\` for implementation details shared across a project but not a library's public surface

### Summary

- Access modifiers control visibility and enforce encapsulation
- Class members default to \`private\` — restrictive by default
- \`public\` forms the intentional external contract of your class
- \`private\` hides implementation details that callers shouldn't depend on
- \`protected\` shares internals with derived classes only
- \`internal\` limits visibility to the current project/assembly
`,
};
