export const lessonGenerics = {
  id: "generics",
  title: "Generics",
  hasChallenge: false,
  article: `
## Generics

Generics allow you to write type-safe, reusable code by parameterizing types.

You've been using generics all along: \`List<String>\`, \`Map<String, Integer>\`. The angle brackets are the generic type parameters.

---

## Why Generics Exist

Without generics (before Java 5):

\`\`\`java
List list = new ArrayList();
list.add("hello");
list.add(42);   // no error — but mixing types is a bug

String s = (String) list.get(1);   // ClassCastException at runtime!
\`\`\`

With generics:

\`\`\`java
List<String> list = new ArrayList<>();
list.add("hello");
list.add(42);   // COMPILE ERROR — can't add int to List<String>

String s = list.get(0);   // no cast needed — compiler knows it's String
\`\`\`

Generics move errors from runtime to compile time.

---

## Generic Classes

You can write your own generic classes:

\`\`\`java
public class Box<T> {
    private T content;

    public void put(T item) {
        this.content = item;
    }

    public T get() {
        return content;
    }
}

Box<String> stringBox = new Box<>();
stringBox.put("hello");
String s = stringBox.get();   // no cast needed

Box<Integer> intBox = new Box<>();
intBox.put(42);
int n = intBox.get();
\`\`\`

\`T\` is a **type parameter** — a placeholder for the actual type chosen at usage.

---

## Generic Methods

\`\`\`java
public static <T> T getFirst(List<T> list) {
    if (list.isEmpty()) return null;
    return list.get(0);
}

String first = getFirst(List.of("a", "b", "c"));   // "a"
Integer num = getFirst(List.of(1, 2, 3));            // 1
\`\`\`

---

## Bounded Type Parameters

Restrict the type to a subtype:

\`\`\`java
public static <T extends Comparable<T>> T findMax(List<T> list) {
    T max = list.get(0);
    for (T item : list) {
        if (item.compareTo(max) > 0) {
            max = item;
        }
    }
    return max;
}

int maxInt = findMax(List.of(3, 1, 4, 1, 5, 9));    // 9
String maxStr = findMax(List.of("banana", "apple"));  // "banana"
\`\`\`

\`T extends Comparable<T>\` means: T must implement Comparable.

---

## Wildcards

The wildcard \`?\` represents an unknown type:

\`\`\`java
// Read from any List<? extends Number>
public static double sum(List<? extends Number> list) {
    double total = 0;
    for (Number n : list) total += n.doubleValue();
    return total;
}

sum(List.of(1, 2, 3));           // List<Integer> is ok
sum(List.of(1.5, 2.5, 3.5));    // List<Double> is ok
\`\`\`

---

## Common Type Parameter Names

By convention:
- \`T\` — Type
- \`E\` — Element (used in collection classes)
- \`K\` — Key
- \`V\` — Value
- \`N\` — Number

---

## What You Learned

- Generics provide compile-time type safety for reusable classes and methods
- \`List<String>\` only holds Strings; no cast needed to retrieve elements
- Write generic classes with \`class Box<T>\` and generic methods with \`<T>\` before the return type
- Bounded type parameters: \`<T extends SomeClass>\` restrict to subtypes
- Wildcards: \`<? extends T>\` for reading, \`<? super T>\` for writing

## What Comes Next

Sorting collections requires objects to be comparable. The next lesson covers Comparable and Comparator.

Continue to:
**6.8 Comparable and Comparator**
`,
};
