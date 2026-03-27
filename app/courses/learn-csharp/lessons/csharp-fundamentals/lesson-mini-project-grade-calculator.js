export const lessonMiniProjectGradeCalculator = {
  id: "mini-project-grade-calculator",
  title: "Mini Project: Grade Calculator",
  hasChallenge: false,
  article: `
## Mini Project: Grade Calculator

This project processes a list of grades to produce statistics — practicing arrays, loops, methods, and output formatting together in a more realistic program.

---

## Project Specification

Build a console application that:

1. Asks the user how many grades they want to enter
2. Prompts for each grade (0–100)
3. After all grades are entered, displays:
   - Each grade with its letter grade
   - The average, highest, and lowest scores
   - A distribution summary (how many A, B, C, D, F grades)
4. Optionally, re-runs for another student

---

## Skills This Practices

- **Arrays** — storing a collection of grades
- **Loops** — input collection, calculation, display
- **Methods** — \`CalculateAverage\`, \`GetLetterGrade\`, \`CountGrades\`
- **Switch expressions** — mapping scores to letter grades
- **Formatting** — aligned table output, percentage display

---

## Sample Interaction

\`\`\`
=== Grade Calculator ===

How many grades? 5
Grade 1 (0-100): 95
Grade 2 (0-100): 82
Grade 3 (0-100): 78
Grade 4 (0-100): 91
Grade 5 (0-100): 67

=== Results ===
Grade 1:  95  →  A
Grade 2:  82  →  B
Grade 3:  78  →  C
Grade 4:  91  →  A
Grade 5:  67  →  D

Average: 82.6
Highest: 95
Lowest:  67

Grade Distribution:
  A: 2 (40%)
  B: 1 (20%)
  C: 1 (20%)
  D: 1 (20%)
  F: 0 (0%)

Enter another student? (y/n): n
\`\`\`

---

## Letter Grade Scale

| Score | Grade |
|---|---|
| 90–100 | A |
| 80–89 | B |
| 70–79 | C |
| 60–69 | D |
| 0–59 | F |

\`\`\`csharp
string GetLetterGrade(double score) => score switch
{
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    >= 60 => "D",
    _ => "F"
};
\`\`\`

---

## Key Calculations

\`\`\`csharp
double CalculateAverage(double[] grades)
{
    double sum = 0;
    foreach (double g in grades)
        sum += g;
    return sum / grades.Length;
}

// Or more concisely using LINQ (preview of a later module)
// double average = grades.Average();
\`\`\`

Finding min and max manually:
\`\`\`csharp
double FindMax(double[] grades)
{
    double max = grades[0];
    for (int i = 1; i < grades.Length; i++)
        if (grades[i] > max) max = grades[i];
    return max;
}
\`\`\`

---

## Distribution Count

\`\`\`csharp
(int A, int B, int C, int D, int F) CountDistribution(double[] grades)
{
    int a = 0, b = 0, c = 0, d = 0, f = 0;
    foreach (double g in grades)
    {
        if (g >= 90) a++;
        else if (g >= 80) b++;
        else if (g >= 70) c++;
        else if (g >= 60) d++;
        else f++;
    }
    return (a, b, c, d, f);
}
\`\`\`

---

## Formatting Aligned Output

Use format specifiers to align numbers:

\`\`\`csharp
// Right-align numbers in a fixed-width field
Console.WriteLine($"Grade {i + 1}: {grades[i],4:F0}  →  {GetLetterGrade(grades[i])}");
\`\`\`

The \`,4\` part right-aligns the number in a field of width 4.

---

## Input Validation

Each grade must be between 0 and 100:

\`\`\`csharp
double ReadGrade(int number)
{
    while (true)
    {
        Console.Write($"Grade {number} (0-100): ");
        if (double.TryParse(Console.ReadLine(), out double grade) &&
            grade >= 0 && grade <= 100)
        {
            return grade;
        }
        Console.WriteLine("Please enter a number between 0 and 100.");
    }
}
\`\`\`

---

## Review Checklist

- [ ] Handles 1 grade and 50+ grades equally well
- [ ] Edge cases: all A's, all F's, a grade of exactly 90, 80, 70, 60
- [ ] Input validation prevents invalid grades from being stored
- [ ] Methods are small and single-purpose
- [ ] Output is clearly formatted and readable

---

## What Comes Next

This completes the C# Fundamentals module. The next module — Thinking in Systems — covers how to trace execution, understand state, use the debugger, and decompose problems. These mental skills separate programmers who struggle from programmers who can tackle anything.
`,
};
