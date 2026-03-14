export const lessonComparableComparator = {
  id: "comparable-comparator",
  title: "Comparable and Comparator",
  hasChallenge: false,
  article: `
## Comparable and Comparator

To sort custom objects, Java needs to know how to compare them. Two interfaces handle this: \`Comparable\` for natural ordering and \`Comparator\` for custom ordering.

---

## Comparable — Natural Ordering

Implement \`Comparable<T>\` on your class to define its default (natural) sort order:

\`\`\`java
public class Student implements Comparable<Student> {
    private String name;
    private double gpa;

    public Student(String name, double gpa) {
        this.name = name;
        this.gpa = gpa;
    }

    @Override
    public int compareTo(Student other) {
        // Negative: this comes before other
        // Zero: equal
        // Positive: this comes after other
        return Double.compare(this.gpa, other.gpa);   // sort by GPA ascending
    }
}

List<Student> students = new ArrayList<>();
students.add(new Student("Bob", 3.2));
students.add(new Student("Alice", 3.8));
students.add(new Student("Carol", 3.5));

Collections.sort(students);   // uses compareTo
\`\`\`

---

## Comparator — Custom Ordering

\`Comparator<T>\` defines an external comparison strategy — without modifying the class:

\`\`\`java
// Sort by name alphabetically
Comparator<Student> byName = Comparator.comparing(s -> s.getName());

// Sort by GPA descending
Comparator<Student> byGpaDesc = Comparator.comparingDouble(Student::getGpa).reversed();

// Sort by name, then by GPA descending for ties
Comparator<Student> complex = Comparator
    .comparing(Student::getName)
    .thenComparingDouble(Student::getGpa)
    .reversed();

students.sort(byName);
students.sort(byGpaDesc);
\`\`\`

---

## compareTo Contract

When implementing \`compareTo\`:
- Return negative if \`this\` is "less than" \`other\`
- Return 0 if equal
- Return positive if \`this\` is "greater than" \`other\`

For numbers: \`Integer.compare(a, b)\`, \`Double.compare(a, b)\` handle this correctly.
For strings: \`name.compareTo(other.name)\` works directly.

---

## Comparator Factory Methods

\`\`\`java
Comparator.comparing(Student::getName)              // compare by name
Comparator.comparingInt(Student::getAge)            // compare by int field
Comparator.comparingDouble(Student::getGpa)         // compare by double field
Comparator.naturalOrder()                           // natural order
Comparator.reverseOrder()                           // reverse natural order
\`\`\`

---

## Sorting Arrays

\`\`\`java
int[] arr = {5, 2, 8, 1};
Arrays.sort(arr);   // sorts in place, ascending

String[] words = {"banana", "apple", "cherry"};
Arrays.sort(words);  // alphabetical
Arrays.sort(words, Comparator.reverseOrder());   // reverse alphabetical
\`\`\`

---

## What You Learned

- Implement \`Comparable<T>\` for natural ordering; override \`compareTo()\`
- Use \`Comparator<T>\` for external or multiple sort strategies
- \`Comparator.comparing()\`, \`thenComparing()\`, \`reversed()\` for composing comparators
- \`collections.sort(list)\` uses natural order; \`list.sort(comparator)\` uses custom order

## What Comes Next

Binary search and sorting algorithms work with these comparison mechanisms. The next lesson puts it all together.

Continue to:
**6.9 Sorting and Searching**
`,
};
