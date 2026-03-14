export const lessonArrays = {
  id: "arrays",
  title: "Arrays",
  hasChallenge: false,
  article: `
## Arrays

An array stores multiple values of the same type in a single variable.

Arrays in Java are fixed-size — once created, the size cannot change.

---

## Declaring and Creating Arrays

**Declaration and creation:**
\`\`\`java
int[] scores = new int[5];       // array of 5 ints, all initialized to 0
String[] names = new String[3];  // array of 3 Strings, all initialized to null
\`\`\`

**Array literal (with values):**
\`\`\`java
int[] scores = {95, 82, 78, 90, 65};
String[] names = {"Alice", "Bob", "Carol"};
\`\`\`

---

## Accessing Elements

Arrays are **zero-indexed**: the first element is at index 0.

\`\`\`java
int[] scores = {95, 82, 78, 90, 65};

System.out.println(scores[0]);   // 95 — first element
System.out.println(scores[4]);   // 65 — last element (index = length - 1)

scores[2] = 85;                  // modify element at index 2
\`\`\`

Accessing an index that doesn't exist throws an \`ArrayIndexOutOfBoundsException\`:
\`\`\`java
scores[5];   // ERROR: index 5 is out of bounds for length 5
\`\`\`

---

## Array Length

\`\`\`java
int[] scores = {95, 82, 78, 90, 65};
System.out.println(scores.length);   // 5
\`\`\`

Note: \`length\` is a property (no parentheses), not a method. This is different from Strings, which use \`length()\`.

---

## Iterating Over Arrays

**Classic for loop:**
\`\`\`java
for (int i = 0; i < scores.length; i++) {
    System.out.println("Score " + i + ": " + scores[i]);
}
\`\`\`

**Enhanced for loop (cleaner when index isn't needed):**
\`\`\`java
for (int score : scores) {
    System.out.println(score);
}
\`\`\`

---

## Arrays Utility Class

\`java.util.Arrays\` provides helpful methods:

\`\`\`java
import java.util.Arrays;

int[] nums = {5, 2, 8, 1, 9, 3};

Arrays.sort(nums);
System.out.println(Arrays.toString(nums));   // [1, 2, 3, 5, 8, 9]

int[] copy = Arrays.copyOf(nums, 4);         // [1, 2, 3, 5] (first 4 elements)

int idx = Arrays.binarySearch(nums, 5);      // finds index of 5 (array must be sorted)

boolean equal = Arrays.equals(nums, copy);   // false — different lengths
\`\`\`

---

## Multidimensional Arrays

A 2D array is an array of arrays — useful for grids, matrices, and tables:

\`\`\`java
int[][] grid = new int[3][3];

grid[0][0] = 1;
grid[1][1] = 5;
grid[2][2] = 9;

// Array literal for 2D:
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Iterating a 2D array:
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println();
}
\`\`\`

---

## Limitations of Arrays

Arrays are fast and simple, but:
- **Fixed size** — you can't add or remove elements after creation
- **Single type** — all elements must be the same type
- **No built-in methods** for searching, filtering, or transforming (beyond \`Arrays\` class)

For dynamic collections, use \`ArrayList\` (covered in the Collections module).

---

## What You Learned

- Arrays store fixed-size collections of a single type
- Zero-indexed: first element is \`[0]\`, last is \`[length - 1]\`
- \`length\` property (no parentheses) returns the array size
- \`Arrays.sort()\`, \`Arrays.toString()\`, \`Arrays.copyOf()\` for common operations
- 2D arrays are arrays of arrays
- Arrays are fixed-size; use \`ArrayList\` for dynamic lists

## What Comes Next

You've learned to store and loop over data. Now let's learn how to organize reusable logic into methods.

Continue to:
**2.11 Methods**
`,
};
