export const lessonSortingSearching = {
  id: "sorting-searching",
  title: "Sorting and Searching",
  hasChallenge: false,
  article: `
## Sorting and Searching

Java provides built-in sorting and searching for arrays and collections. You don't need to implement these algorithms yourself.

---

## Sorting Lists

\`\`\`java
List<Integer> numbers = new ArrayList<>(List.of(5, 2, 8, 1, 9, 3));

Collections.sort(numbers);          // ascending natural order: [1, 2, 3, 5, 8, 9]
Collections.sort(numbers, Collections.reverseOrder());  // descending: [9, 8, 5, 3, 2, 1]

// Or using List.sort():
numbers.sort(null);                  // natural order
numbers.sort(Comparator.reverseOrder());  // reverse
\`\`\`

---

## Sorting Custom Objects

\`\`\`java
List<String> names = new ArrayList<>(List.of("Charlie", "Alice", "Bob"));

names.sort(Comparator.naturalOrder());           // Alice, Bob, Charlie
names.sort(Comparator.reverseOrder());           // Charlie, Bob, Alice
names.sort(Comparator.comparingInt(String::length));  // Bob, Alice, Charlie
\`\`\`

---

## Binary Search

Binary search finds an element in a **sorted** list in O(log n) time:

\`\`\`java
List<Integer> sorted = new ArrayList<>(List.of(1, 2, 3, 5, 8, 9));

int index = Collections.binarySearch(sorted, 5);  // returns 3 (index of 5)
int notFound = Collections.binarySearch(sorted, 7);  // negative — not found

// For arrays:
int[] arr = {1, 2, 3, 5, 8, 9};
int idx = Arrays.binarySearch(arr, 5);   // 3
\`\`\`

**Important:** The list must be sorted before binary search. Unsorted + binary search = wrong results.

---

## min, max, frequency

\`\`\`java
List<Integer> nums = List.of(3, 1, 4, 1, 5, 9, 2, 6);

int min = Collections.min(nums);         // 1
int max = Collections.max(nums);         // 9
int freq = Collections.frequency(nums, 1);  // 2 (two occurrences of 1)
\`\`\`

---

## Streams for Complex Searches

For more complex filtering and searching, Java Streams (covered in Standard Library module) are the modern approach:

\`\`\`java
// Find first student with GPA >= 3.8
Optional<Student> topStudent = students.stream()
    .filter(s -> s.getGpa() >= 3.8)
    .findFirst();
\`\`\`

---

## What You Learned

- \`Collections.sort()\` and \`List.sort()\` for sorting lists
- \`Arrays.sort()\` for sorting arrays
- \`Collections.binarySearch()\` for O(log n) search in sorted lists
- \`Collections.min()\`, \`Collections.max()\`, \`Collections.frequency()\`
- Binary search requires a sorted collection

## What Comes Next

There are many collection types. The next lesson helps you choose the right one.

Continue to:
**6.10 Choosing the Right Collection**
`,
};
