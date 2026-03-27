export const lessonMathRandomUuid = {
  id: "math-random-uuid",
  title: "Math, Random, and UUID",
  hasChallenge: false,
  article: `
## Math, Random, and UUID

Three utilities you'll reach for constantly: numeric operations, random values, and unique identifiers.

---

## java.lang.Math

Math is a static utility class — no instantiation needed.

\`\`\`java
// Rounding
Math.round(3.7);       // 4  (long)
Math.floor(3.7);       // 3.0
Math.ceil(3.2);        // 4.0

// Min / Max / Abs
Math.min(10, 20);      // 10
Math.max(10, 20);      // 20
Math.abs(-5);          // 5

// Power and roots
Math.pow(2, 10);       // 1024.0
Math.sqrt(16);         // 4.0
Math.cbrt(27);         // 3.0

// Logarithms / trig
Math.log(Math.E);      // 1.0
Math.log10(1000);      // 3.0
Math.sin(Math.PI / 2); // 1.0

// Constants
Math.PI;               // 3.14159...
Math.E;                // 2.71828...
\`\`\`

---

## Random Numbers

### java.util.Random (basic)

\`\`\`java
import java.util.Random;

Random rand = new Random();

rand.nextInt(100);      // 0 to 99
rand.nextInt(50, 100);  // 50 to 99 (Java 17+)
rand.nextDouble();      // 0.0 to 1.0
rand.nextBoolean();     // true or false
rand.nextLong();        // any long
\`\`\`

### Seeded Random (reproducible — good for tests)

\`\`\`java
Random rand = new Random(42);  // same seed = same sequence every run
\`\`\`

### ThreadLocalRandom (concurrent code)

\`\`\`java
import java.util.concurrent.ThreadLocalRandom;

int n = ThreadLocalRandom.current().nextInt(1, 101);  // 1 to 100
\`\`\`

Use \`ThreadLocalRandom\` in multi-threaded code — it avoids contention on a shared \`Random\` instance.

### SecureRandom (security-sensitive)

\`\`\`java
import java.security.SecureRandom;

SecureRandom secure = new SecureRandom();
byte[] token = new byte[32];
secure.nextBytes(token);  // cryptographically strong random bytes
\`\`\`

Use for passwords, tokens, session IDs — never use plain \`Random\` for security purposes.

---

## Shuffling and Sampling

\`\`\`java
import java.util.Collections;

List<Integer> numbers = new ArrayList<>(List.of(1, 2, 3, 4, 5));
Collections.shuffle(numbers);            // random order
Collections.shuffle(numbers, new Random(42));  // seeded

// Pick a random element
int randomIndex = rand.nextInt(numbers.size());
int picked = numbers.get(randomIndex);
\`\`\`

---

## UUID — Universally Unique Identifier

A UUID is a 128-bit value almost guaranteed to be unique. Version 4 is randomly generated.

\`\`\`java
import java.util.UUID;

UUID id = UUID.randomUUID();
System.out.println(id);          // e.g. "550e8400-e29b-41d4-a716-446655440000"

String idStr = id.toString();    // store as string in database
UUID parsed  = UUID.fromString("550e8400-e29b-41d4-a716-446655440000");

// Compare
id.equals(parsed);               // true
\`\`\`

### When to use UUID

| Use case | Good fit? |
|---|---|
| Database primary key | Yes — globally unique, no coordination needed |
| API resource IDs | Yes — safe to expose, hard to guess |
| File names | Yes — avoids collision in parallel writes |
| Sequential ordering | No — random UUIDs don't sort chronologically |
| Short display strings | No — 36 chars is verbose |

---

## Practical: Generating a Token

\`\`\`java
import java.security.SecureRandom;
import java.util.Base64;

public static String generateToken(int byteLength) {
    SecureRandom random = new SecureRandom();
    byte[] bytes = new byte[byteLength];
    random.nextBytes(bytes);
    return Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
}

// Usage:
String token = generateToken(32);  // 43-character URL-safe token
\`\`\`

---

## What You Learned

- \`Math\` provides rounding, min/max, power, roots, and trig as static methods
- Use \`Random\` for general purposes, \`ThreadLocalRandom\` in threads, \`SecureRandom\` for security
- \`UUID.randomUUID()\` generates collision-proof IDs suitable for database keys and API tokens
- Never use plain \`Random\` for passwords or session tokens

Continue to: **Reading Javadoc**
`,
};
