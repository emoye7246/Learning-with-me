export const lessonOptional = {
  id: "optional",
  title: "Optional — Avoiding Null",
  hasChallenge: false,
  article: `
## Optional — Avoiding Null

\`NullPointerException\` is Java's most common runtime error. \`Optional<T>\` is a container that forces you to handle the "value might not exist" case explicitly.

---

## The Problem with Null

\`\`\`java
User user = findUser(id);
String city = user.getAddress().getCity();  // NullPointerException if anything is null
\`\`\`

The null propagates silently until it crashes somewhere unexpected.

---

## Creating an Optional

\`\`\`java
import java.util.Optional;

// A value that is present
Optional<String> present = Optional.of("hello");

// A value that might be null
Optional<String> maybe = Optional.ofNullable(possiblyNullString);

// Explicitly empty
Optional<String> empty = Optional.empty();
\`\`\`

**Never** use \`Optional.of(null)\` — it throws. Use \`Optional.ofNullable()\` when the value might be null.

---

## Retrieving Values

\`\`\`java
Optional<String> name = findName(id);

// Safe retrieval
String value = name.orElse("Unknown");            // default if empty
String computed = name.orElseGet(() -> loadDefault()); // lazy default
String required = name.orElseThrow(() ->
    new NotFoundException("Name not found"));    // throw if empty

// Check and get
if (name.isPresent()) {
    System.out.println(name.get());
}

// Modern: ifPresent
name.ifPresent(n -> System.out.println("Hello, " + n));
\`\`\`

---

## Transforming with map and flatMap

\`\`\`java
Optional<String> city = findUser(id)
    .map(User::getAddress)
    .map(Address::getCity);

// vs. the NPE-prone version:
String city = findUser(id).getAddress().getCity();
\`\`\`

Use \`flatMap\` when the mapping function itself returns an Optional:

\`\`\`java
Optional<String> email = findUser(id)
    .flatMap(user -> findEmail(user.getId()));
\`\`\`

---

## filter

\`\`\`java
Optional<Integer> positiveAge = getAge()
    .filter(age -> age > 0);
\`\`\`

---

## When to Use Optional

**Good uses:**
- Return type of methods that might not find a result: \`findById()\`, \`lookupConfig()\`
- Chaining operations that can short-circuit on missing values

**Bad uses:**
- Method parameters — just use null checks or overloading
- Fields in a class — increases memory overhead, complicates serialization
- Collections — use an empty list instead of an Optional of a list

---

## Real Example: Config Lookup

\`\`\`java
public Optional<String> getConfig(String key) {
    return Optional.ofNullable(properties.getProperty(key));
}

// Caller:
int port = getConfig("server.port")
    .map(Integer::parseInt)
    .orElse(8080);

String host = getConfig("server.host")
    .orElseThrow(() -> new IllegalStateException("server.host is required"));
\`\`\`

---

## What You Learned

- \`Optional<T>\` makes "no value" explicit and forces callers to handle it
- \`orElse()\`, \`orElseGet()\`, \`orElseThrow()\` extract values safely
- \`map()\` and \`flatMap()\` transform Optional values without unwrapping
- Use Optional as return types for "might not find" methods, not for fields or parameters

Continue to: **Streams and Lambdas**
`,
};
