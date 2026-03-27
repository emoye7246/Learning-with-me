export const lessonReadingJavadoc = {
  id: "reading-javadoc",
  title: "Reading Javadoc",
  hasChallenge: false,
  article: `
## Reading Javadoc

Javadoc is Java's official documentation format. Every class and method in the standard library is documented with it. Learning to read it quickly is a core Java skill.

---

## Where to Find It

- **Official JDK docs**: docs.oracle.com/en/java/javase/21/docs/api/
- **In your IDE**: hover over any class or method name to see inline Javadoc
- **Maven dependencies**: IDE downloads sources/docs automatically

---

## Anatomy of a Javadoc Page

For a class like \`ArrayList\`:

\`\`\`
java.util
Class ArrayList<E>

java.lang.Object
  ↳ java.util.AbstractCollection<E>
      ↳ java.util.AbstractList<E>
          ↳ java.util.ArrayList<E>

All Implemented Interfaces:
  Serializable, Cloneable, Iterable<E>, Collection<E>, List<E>, RandomAccess
\`\`\`

The **class hierarchy** tells you what methods are inherited. The **Implemented Interfaces** tell you how it can be used generically.

---

## Reading a Method Signature

\`\`\`
public boolean add(E e)
\`\`\`

- **Return type**: \`boolean\` — \`true\` if the collection changed
- **Method name**: \`add\`
- **Parameter**: \`E e\` — element of the generic type

\`\`\`
public E get(int index)
    throws IndexOutOfBoundsException
\`\`\`

- **throws**: checked exceptions the caller must handle or declare

---

## Tags You'll See

| Tag | Meaning |
|---|---|
| \`@param name description\` | What a parameter does |
| \`@return description\` | What the method returns |
| \`@throws ExceptionType\` | When this exception is thrown |
| \`@see ClassName\` | Related class or method |
| \`@since 1.8\` | Which Java version introduced this |
| \`@deprecated\` | Don't use — prefer the alternative mentioned |

---

## Practical Example: String.format

\`\`\`
public static String format(String format, Object... args)

Returns a formatted string using the specified format string and arguments.
Parameters:
  format - A format string
  args   - Arguments referenced by the format specifiers in the format string.
           If there are more format specifiers than arguments, extra specifiers
           cause IllegalFormatException.
Returns:
  A formatted string
Throws:
  IllegalFormatException - If a format string contains an illegal syntax
See Also:
  Formatter, printf(String, Object...)
Since:
  1.5
\`\`\`

Reading this: the format string uses specifiers (\`%s\`, \`%d\`) that match the args positionally. Extra specifiers throw.

---

## Reading Interface Docs

When you see a method documented on an interface (e.g., \`List.sort()\`):

1. The interface docs say *what* the contract is (sort in-place, stable sort, etc.)
2. Implementation docs (e.g., \`ArrayList.sort()\`) say *how* this implementation fulfills it

Check the interface for the behavior contract — it's what you should code against.

---

## Using Javadoc in Your IDE

In IntelliJ IDEA:
- Hover over a symbol → inline Javadoc pops up
- \`Ctrl+Q\` (Windows/Linux) or \`F1\` (macOS) → open Javadoc panel
- \`Ctrl+Click\` → navigate to source

In VS Code (with Extension Pack for Java):
- Hover over a symbol → Javadoc tooltip
- \`Ctrl+Click\` → navigate to definition

---

## Writing Your Own Javadoc

\`\`\`java
/**
 * Converts an amount from one currency to another using live exchange rates.
 *
 * @param amount the amount to convert (must be positive)
 * @param from   the source currency code (e.g., "USD")
 * @param to     the target currency code (e.g., "EUR")
 * @return the converted amount
 * @throws IOException          if the exchange rate API is unreachable
 * @throws IllegalArgumentException if amount is negative or currency code is invalid
 */
public double convert(double amount, String from, String to) throws IOException {
    // ...
}
\`\`\`

---

## What You Learned

- Javadoc is at docs.oracle.com and built into your IDE — use it constantly
- Class hierarchy and Implemented Interfaces tell you what a class can do
- \`@param\`, \`@return\`, \`@throws\` are the essential tags for reading and writing
- When in doubt about a method's contract, check the interface first, then the implementation

This completes Course 13 — Standard Library Essentials.
`,
};
