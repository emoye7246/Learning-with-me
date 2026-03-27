export const lessonFunctionalInterfaces = {
  id: "functional-interfaces",
  title: "Functional Interfaces",
  hasChallenge: false,
  article: `
## Functional Interfaces

A functional interface is an interface with exactly one abstract method. Lambdas and method references implement functional interfaces — they're the glue between lambdas and Java's type system.

---

## The @FunctionalInterface Annotation

\`\`\`java
@FunctionalInterface
public interface Transformer<T, R> {
    R transform(T input);
}
\`\`\`

The annotation is optional but recommended — it causes a compile error if you accidentally add a second abstract method.

---

## The Core Four in java.util.function

| Interface | Signature | Use |
|---|---|---|
| \`Function<T, R>\` | \`R apply(T t)\` | Transform a value |
| \`Predicate<T>\` | \`boolean test(T t)\` | Test a condition |
| \`Consumer<T>\` | \`void accept(T t)\` | Use a value, return nothing |
| \`Supplier<T>\` | \`T get()\` | Produce a value, take nothing |

---

## Function\<T, R\>

\`\`\`java
Function<String, Integer> length = String::length;
Function<String, String>  upper  = String::toUpperCase;

// Compose: apply length after upper
Function<String, Integer> upperLength = upper.andThen(length);

System.out.println(length.apply("hello"));        // 5
System.out.println(upperLength.apply("hello"));   // 5
\`\`\`

**Variants:**
- \`UnaryOperator<T>\` — Function<T, T> (same input and output type)
- \`BiFunction<T, U, R>\` — takes two parameters
- \`ToIntFunction<T>\`, \`ToDoubleFunction<T>\` — avoids boxing

---

## Predicate\<T\>

\`\`\`java
Predicate<String> nonEmpty  = s -> !s.isEmpty();
Predicate<String> shortWord = s -> s.length() < 5;

// Combine predicates
Predicate<String> shortNonEmpty = nonEmpty.and(shortWord);
Predicate<String> eitherOr      = nonEmpty.or(shortWord);
Predicate<String> notEmpty      = nonEmpty.negate();

List<String> words = List.of("", "hi", "hello", "supercalifragilistic");
words.stream()
     .filter(shortNonEmpty)
     .collect(Collectors.toList());  // ["hi"]
\`\`\`

---

## Consumer\<T\>

\`\`\`java
Consumer<String> print   = System.out::println;
Consumer<String> toLower = s -> log(s.toLowerCase());

// Chain with andThen
Consumer<String> both = print.andThen(toLower);

List.of("Alice", "Bob").forEach(both);
\`\`\`

---

## Supplier\<T\>

\`\`\`java
Supplier<LocalDate> today = LocalDate::now;
Supplier<List<String>> emptyList = ArrayList::new;

// Useful for lazy initialization
String value = cache.computeIfAbsent("key", k -> expensive());

// Optional.orElseGet() uses a Supplier
String result = optional.orElseGet(() -> loadDefault());
\`\`\`

---

## Writing Methods That Accept Lambdas

\`\`\`java
public static <T> List<T> filter(List<T> list, Predicate<T> predicate) {
    return list.stream()
               .filter(predicate)
               .collect(Collectors.toList());
}

public static <T, R> List<R> transform(List<T> list, Function<T, R> mapper) {
    return list.stream()
               .map(mapper)
               .collect(Collectors.toList());
}

// Usage:
List<String> long_names = filter(names, n -> n.length() > 4);
List<Integer> lengths   = transform(names, String::length);
\`\`\`

---

## Primitive Specializations (Avoid Boxing Overhead)

\`\`\`java
IntFunction<String>  intToString = Integer::toString;
ToIntFunction<String> strToInt   = Integer::parseInt;
IntUnaryOperator      doubleIt   = n -> n * 2;
IntPredicate          isEven     = n -> n % 2 == 0;
\`\`\`

Use these in performance-sensitive code to avoid wrapping \`int\` → \`Integer\`.

---

## What You Learned

- A functional interface has one abstract method — lambdas implement them
- The four core types: Function (transform), Predicate (test), Consumer (use), Supplier (produce)
- Predicates compose with \`and()\`, \`or()\`, \`negate()\`
- Accepting functional interfaces as parameters makes your methods flexible and lambda-compatible

Continue to: **String Utilities**
`,
};
