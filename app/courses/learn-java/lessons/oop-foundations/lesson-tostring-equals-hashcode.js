export const lessonToStringEqualsHashcode = {
  id: "tostring-equals-hashcode",
  title: "toString, equals, and hashCode",
  hasChallenge: false,
  article: `
## toString, equals, and hashCode

Every Java class automatically inherits three key methods from the \`Object\` class. Unless you override them, the defaults are usually not what you want.

---

## \`toString()\`

\`toString()\` returns a String representation of the object.

Without overriding it:
\`\`\`java
Person alice = new Person("Alice", 30);
System.out.println(alice);   // Person@1b6d3586  — useless
\`\`\`

The default \`toString()\` returns the class name and memory address.

After overriding:
\`\`\`java
public class Person {
    private String name;
    private int age;

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

System.out.println(alice);   // Person{name='Alice', age=30}
\`\`\`

IntelliJ generates \`toString()\` for you: right-click inside the class → Generate → toString().

---

## \`equals()\`

\`equals()\` compares two objects for logical equality.

Without overriding it:
\`\`\`java
Person a = new Person("Alice", 30);
Person b = new Person("Alice", 30);
System.out.println(a.equals(b));   // false — compares references
\`\`\`

The default \`equals()\` checks if both variables point to the exact same object in memory (\`==\`).

After overriding:
\`\`\`java
@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Person other = (Person) obj;
    return age == other.age && Objects.equals(name, other.name);
}

System.out.println(a.equals(b));   // true — same name and age
\`\`\`

---

## \`hashCode()\`

\`hashCode()\` returns an integer representing the object. It's used by \`HashMap\`, \`HashSet\`, and other hash-based collections.

**The contract:** If \`a.equals(b)\` is true, then \`a.hashCode()\` must equal \`b.hashCode()\`.

If you override \`equals\`, you must override \`hashCode\`. Breaking this contract causes HashMap to silently fail.

\`\`\`java
@Override
public int hashCode() {
    return Objects.hash(name, age);
}
\`\`\`

\`Objects.hash()\` produces a hash code from multiple fields. IntelliJ generates this for you.

---

## Always Override Together

The rule is simple: if you override \`equals\`, always override \`hashCode\` at the same time.

IntelliJ generates both at once: right-click → Generate → equals() and hashCode().

---

## \`@Override\` Annotation

\`@Override\` tells the compiler: "I'm intentionally overriding a method from the parent class."

If you spell the method name wrong (\`equal\` instead of \`equals\`), the compiler gives an error — because there's no method named \`equal\` to override.

Without \`@Override\`, you'd just be creating a new method named \`equal\` and wondering why equality checks don't work.

Always use \`@Override\` when overriding.

---

## What You Learned

- \`toString()\`: override to get a readable String representation; called automatically by \`println\`
- \`equals()\`: override to compare objects by content, not reference
- \`hashCode()\`: must be overridden whenever \`equals\` is overridden; required for HashMap/HashSet to work correctly
- \`@Override\` annotation catches typos and confirms the override is intentional
- IntelliJ generates all three for you — use it

## What Comes Next

Now that you understand how classes work, the next lesson explains how Java organizes classes into packages.

Continue to:
**4.9 Packages and Imports**
`,
};
