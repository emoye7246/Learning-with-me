export const lessonArrays = {
  id: "arrays-cs",
  title: "Arrays",
  hasChallenge: false,
  article: `
## Arrays

An array is a fixed-size, ordered collection of elements of the same type. Arrays are the most fundamental collection type in C# and the building block for understanding all other collections.

---

## Declaring and Initializing Arrays

\`\`\`csharp
// Declare with a specific size (elements default to 0/null/false)
int[] numbers = new int[5];         // [0, 0, 0, 0, 0]

// Declare and initialize with values
int[] scores = { 85, 92, 78, 95, 88 };

// Explicit new syntax
string[] names = new string[] { "Alice", "Bob", "Carol" };

// Let the compiler count
double[] temperatures = new double[] { 36.5, 37.1, 36.8 };
\`\`\`

---

## Accessing Elements

Arrays use zero-based indexing — the first element is at index 0:

\`\`\`csharp
int[] scores = { 85, 92, 78, 95, 88 };

Console.WriteLine(scores[0]);  // 85 — first element
Console.WriteLine(scores[4]);  // 88 — last element
Console.WriteLine(scores.Length); // 5 — number of elements
\`\`\`

Accessing an index out of range throws \`IndexOutOfRangeException\`:

\`\`\`csharp
Console.WriteLine(scores[5]); // IndexOutOfRangeException!
\`\`\`

The last valid index is always \`Length - 1\`.

---

## Modifying Elements

\`\`\`csharp
int[] scores = { 85, 92, 78, 95, 88 };
scores[2] = 100;  // replace the third element
Console.WriteLine(scores[2]); // 100
\`\`\`

---

## Iterating Arrays

\`\`\`csharp
int[] scores = { 85, 92, 78, 95, 88 };

// foreach — preferred when you don't need the index
foreach (int score in scores)
{
    Console.WriteLine(score);
}

// for — use when you need the index
for (int i = 0; i < scores.Length; i++)
{
    Console.WriteLine($"[{i}] = {scores[i]}");
}
\`\`\`

---

## Common Array Operations

\`\`\`csharp
int[] numbers = { 5, 2, 8, 1, 9, 3 };

// Sort in ascending order (modifies the array)
Array.Sort(numbers);
// numbers is now: [1, 2, 3, 5, 8, 9]

// Reverse
Array.Reverse(numbers);
// numbers is now: [9, 8, 5, 3, 2, 1]

// Search (only works on sorted arrays)
int index = Array.BinarySearch(numbers, 5);

// Find index of a value
int idx = Array.IndexOf(numbers, 8);

// Copy
int[] copy = new int[numbers.Length];
Array.Copy(numbers, copy, numbers.Length);

// Or use LINQ (covered later)
int[] copy2 = numbers.ToArray();
\`\`\`

---

## Multidimensional Arrays

C# supports true multidimensional arrays:

\`\`\`csharp
// 2D array (3 rows, 4 columns)
int[,] grid = new int[3, 4];
grid[0, 0] = 1;
grid[1, 2] = 5;

// Initialize with values
int[,] matrix = {
    { 1, 2, 3 },
    { 4, 5, 6 },
    { 7, 8, 9 }
};

Console.WriteLine(matrix[1, 1]); // 5 (row 1, col 1)
Console.WriteLine(matrix.GetLength(0)); // 3 (rows)
Console.WriteLine(matrix.GetLength(1)); // 3 (cols)
\`\`\`

---

## Jagged Arrays

A jagged array is an array of arrays, where each inner array can have a different length:

\`\`\`csharp
int[][] jagged = new int[3][];
jagged[0] = new int[] { 1, 2 };
jagged[1] = new int[] { 3, 4, 5, 6 };
jagged[2] = new int[] { 7 };

Console.WriteLine(jagged[1][2]); // 5
\`\`\`

Jagged arrays are more common than 2D arrays in practice because each row can have a different length.

---

## Array Limitations

Arrays have a fixed size. Once created, you cannot add or remove elements. If you need a resizable collection, use \`List<T>\` (covered in the Collections module).

For most practical programming, \`List<T>\` is preferred over arrays. But arrays are important to understand because:
- They're the foundation for \`List<T>\` and other collections
- They appear in many APIs (including the command-line args \`string[] args\`)
- They're more efficient for fixed-size data

---

## What Comes Next

The next lesson covers methods — how to define reusable blocks of code that take inputs and return outputs.
`,
};
