export const lessonGuidAndRandom = {
  id: "guid-and-random",
  title: "Guid and Random — Identifiers and Randomness",
  hasChallenge: false,
  article: `
## Guid and Random — Identifiers and Randomness

Two common needs in software: generating unique identifiers and producing random numbers. C# provides \`Guid\` for globally unique IDs, and several options for randomness — from the familiar \`Random\` class to cryptographically secure generation.

---

## Guid — Globally Unique Identifiers

A \`Guid\` (Globally Unique Identifier) is a 128-bit value that is statistically guaranteed to be unique across space and time. They are used everywhere: database primary keys, API request IDs, file names, session tokens.

\`\`\`csharp
Guid id = Guid.NewGuid();
Console.WriteLine(id); // e.g. 3f2504e0-4f89-11d3-9a0c-0305e82c3301

// Parse a string back to a Guid
Guid parsed = Guid.Parse("3f2504e0-4f89-11d3-9a0c-0305e82c3301");

// Safe parse
if (Guid.TryParse(input, out Guid result))
{
    Console.WriteLine(result);
}

// The empty Guid (all zeros) — useful as a sentinel value
Console.WriteLine(Guid.Empty); // 00000000-0000-0000-0000-000000000000
\`\`\`

Guids can be formatted in several ways:

\`\`\`csharp
Guid id = Guid.NewGuid();
Console.WriteLine(id.ToString("D")); // dashes:      xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Console.WriteLine(id.ToString("N")); // no dashes:   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Console.WriteLine(id.ToString("B")); // braces:      {xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}
Console.WriteLine(id.ToString("P")); // parentheses: (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
\`\`\`

In Entity Framework and ASP.NET Core, \`Guid\` is a common primary key type. They work well for distributed systems where you can't rely on a central auto-increment counter.

---

## The Random Class

\`System.Random\` generates pseudo-random numbers. "Pseudo-random" means the sequence is deterministic given a seed — but for most non-security purposes, it behaves randomly enough.

\`\`\`csharp
var rng = new Random();

int roll      = rng.Next(1, 7);          // dice roll: 1 to 6 (max is exclusive)
double sample = rng.NextDouble();         // 0.0 to 1.0 (exclusive)
float fSample = rng.NextSingle();         // same but float

// Fill a byte array with random data
byte[] buffer = new byte[16];
rng.NextBytes(buffer);
\`\`\`

**Seeding** — when you provide a seed, you get a reproducible sequence. This is useful for testing and simulations:

\`\`\`csharp
var seeded = new Random(42);
Console.WriteLine(seeded.Next(1, 100)); // always the same value for seed 42
\`\`\`

---

## Random.Shared — Thread-Safe Convenience

Before .NET 6, sharing a single \`Random\` instance across threads was unsafe (it would corrupt internal state). Creating one per thread was wasteful. .NET 6 introduced \`Random.Shared\`, a thread-safe shared instance:

\`\`\`csharp
// Safe to call from any thread
int value = Random.Shared.Next(1, 101);
double d   = Random.Shared.NextDouble();
\`\`\`

Use \`Random.Shared\` whenever you need quick randomness without managing instances. Use a seeded instance when you need reproducibility.

---

## Shuffling a Collection

A common use of \`Random\` is shuffling. The Fisher-Yates algorithm:

\`\`\`csharp
var deck = Enumerable.Range(1, 52).ToList();
var rng = Random.Shared;

for (int i = deck.Count - 1; i > 0; i--)
{
    int j = rng.Next(i + 1);
    (deck[i], deck[j]) = (deck[j], deck[i]);
}
\`\`\`

In .NET 8+, you can use the built-in \`Random.Shuffle\`:

\`\`\`csharp
int[] array = { 1, 2, 3, 4, 5 };
Random.Shared.Shuffle(array);
\`\`\`

---

## Cryptographic Randomness — RandomNumberGenerator

\`System.Random\` is **not** suitable for security-sensitive use cases: passwords, tokens, API keys, session IDs. For those, use \`System.Security.Cryptography.RandomNumberGenerator\`, which uses the operating system's cryptographically secure random source:

\`\`\`csharp
using System.Security.Cryptography;

// Get random bytes
byte[] token = RandomNumberGenerator.GetBytes(32); // 256-bit token
string base64Token = Convert.ToBase64String(token);
Console.WriteLine(base64Token);

// Get a random integer in a range (secure)
int secureInt = RandomNumberGenerator.GetInt32(1, 101); // 1 to 100 inclusive
\`\`\`

The \`GetBytes\` method fills the array using OS entropy (e.g., hardware events, timing). The result is unpredictable and not reproducible.

---

## Which to Use?

| Scenario | Use |
|---|---|
| Unique database key | \`Guid.NewGuid()\` |
| Dice rolls, random selection | \`Random.Shared\` |
| Reproducible randomness (tests, simulations) | \`new Random(seed)\` |
| Passwords, tokens, cryptographic use | \`RandomNumberGenerator\` |
| Shuffle a list | \`Random.Shared.Shuffle()\` (.NET 8+) |
`,
};
