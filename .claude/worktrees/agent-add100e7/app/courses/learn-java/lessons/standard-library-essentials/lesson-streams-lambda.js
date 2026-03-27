export const lessonStreamsLambda = {
  id: "streams-lambda",
  title: "Streams and Lambdas",
  hasChallenge: false,
  article: `
## Streams and Lambdas

The Streams API lets you process collections declaratively — describing *what* you want, not *how* to iterate. Lambdas make the syntax concise.

---

## Lambda Syntax

A lambda is an anonymous function:

\`\`\`java
// Traditional anonymous class
Comparator<String> comp = new Comparator<String>() {
    public int compare(String a, String b) { return a.compareTo(b); }
};

// Lambda
Comparator<String> comp = (a, b) -> a.compareTo(b);

// Method reference (even shorter when calling a named method)
Comparator<String> comp = String::compareTo;
\`\`\`

Lambda syntax: \`(parameters) -> expression\` or \`(parameters) -> { statements; }\`

---

## Creating Streams

\`\`\`java
import java.util.stream.*;

List<String> names = List.of("Alice", "Bob", "Charlie");

// From a collection
Stream<String> stream = names.stream();

// Parallel processing
Stream<String> parallel = names.parallelStream();

// From values
Stream<Integer> nums = Stream.of(1, 2, 3, 4, 5);

// Infinite stream
Stream<Integer> evens = Stream.iterate(0, n -> n + 2);
\`\`\`

---

## Intermediate Operations (lazy — return a new Stream)

\`\`\`java
List<String> names = List.of("Alice", "Bob", "Charlie", "Anna");

// filter: keep elements matching predicate
names.stream()
     .filter(n -> n.startsWith("A"))    // ["Alice", "Anna"]

// map: transform each element
names.stream()
     .map(String::toUpperCase)          // ["ALICE", "BOB", "CHARLIE", "ANNA"]

// sorted
names.stream()
     .sorted()                          // alphabetical order

// distinct, limit, skip
Stream.of(1,1,2,3,3)
      .distinct()                       // [1, 2, 3]
      .limit(2)                         // [1, 2]
\`\`\`

---

## Terminal Operations (eager — produce a result)

\`\`\`java
// collect to a List
List<String> result = names.stream()
    .filter(n -> n.length() > 3)
    .collect(Collectors.toList());

// count
long count = names.stream().filter(n -> n.startsWith("A")).count();

// reduce
int sum = List.of(1,2,3,4,5).stream()
    .reduce(0, Integer::sum);  // 15

// findFirst / findAny
Optional<String> first = names.stream()
    .filter(n -> n.startsWith("C"))
    .findFirst();

// anyMatch, allMatch, noneMatch
boolean anyShort = names.stream().anyMatch(n -> n.length() < 4);  // true ("Bob")
\`\`\`

---

## Collectors

\`\`\`java
import java.util.stream.Collectors;

// To list, set, map
List<String> list = stream.collect(Collectors.toList());
Set<String>  set  = stream.collect(Collectors.toSet());

Map<Integer, List<String>> byLength = names.stream()
    .collect(Collectors.groupingBy(String::length));
// {5=["Alice"], 3=["Bob"], 7=["Charlie"], 4=["Anna"]}

// joining
String csv = names.stream().collect(Collectors.joining(", "));
// "Alice, Bob, Charlie, Anna"

// counting
Map<Integer, Long> countByLength = names.stream()
    .collect(Collectors.groupingBy(String::length, Collectors.counting()));
\`\`\`

---

## Real Example: Processing a List of Orders

\`\`\`java
record Order(String customer, String item, double price) {}

List<Order> orders = getOrders();

// Total revenue from orders over $50
double revenue = orders.stream()
    .filter(o -> o.price() > 50)
    .mapToDouble(Order::price)
    .sum();

// Top 3 most expensive items
List<String> topItems = orders.stream()
    .sorted(Comparator.comparingDouble(Order::price).reversed())
    .limit(3)
    .map(Order::item)
    .collect(Collectors.toList());

// Group by customer
Map<String, List<Order>> byCustomer = orders.stream()
    .collect(Collectors.groupingBy(Order::customer));
\`\`\`

---

## When Not to Use Streams

- Simple loops with side effects (printing, updating state) — a for loop is clearer
- When you need to break out early — streams can't \`break\`
- When performance is critical and you need precise control — a loop is faster

---

## What You Learned

- Streams process collections declaratively: filter, map, collect
- Lambdas are concise anonymous functions; method references (\`Type::method\`) are even shorter
- Intermediate operations (filter, map, sorted) are lazy; terminal operations (collect, count, reduce) trigger execution
- \`Collectors.groupingBy()\` and \`Collectors.joining()\` handle common aggregation patterns

Continue to: **Functional Interfaces**
`,
};
