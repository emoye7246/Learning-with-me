export const lessonProblemDecomposition = {
  id: "problem-decomposition",
  title: "Problem Decomposition",
  hasChallenge: false,
  article: `
## Problem Decomposition

Problem decomposition is the skill of breaking a large problem into smaller problems you know how to solve.

It's the difference between staring at a blank file and writing the first line.

---

## The Blank File Problem

When a beginner gets a programming task, they often stare at an empty file, not knowing where to start.

They have the complete problem in their head as one big thing. It feels overwhelming because it is too big to hold.

The solution is not to think harder. The solution is to think smaller.

---

## How to Decompose

Start with the top-level output: what does the finished program do?

Then ask: what does the program need to do in order to produce that?

Then ask that same question about each of those steps.

Keep going until each step is small enough to write in a few lines of code.

---

## An Example: Build a Student Grade Tracker

**Level 1: What does it do?**
- Store students and their grades
- Calculate each student's average
- Print a report

**Level 2: Break each part down**

Store students and grades:
- Represent a student (name + list of grades)
- Store multiple students

Calculate average:
- Sum all grades
- Divide by number of grades

Print report:
- For each student: print name, average, letter grade

**Level 3: Get specific**

Calculate letter grade:
- If average >= 90: A
- If average >= 80: B
- If average >= 70: C
- Else: F

Each of these is now small enough to write directly.

---

## Translate Decomposition to Methods

Each piece in your decomposition becomes a method:

\`\`\`java
public static double calculateAverage(int[] grades) { ... }
public static String getLetterGrade(double average) { ... }
public static void printStudentReport(String name, int[] grades) { ... }
public static void printFullReport(String[] names, int[][] allGrades) { ... }
\`\`\`

Before writing any of the code inside these methods, you've already designed the program structure.

---

## Write Stubs First

A stub is a method with the right signature but no real implementation yet:

\`\`\`java
public static double calculateAverage(int[] grades) {
    return 0;   // TODO: implement
}

public static String getLetterGrade(double average) {
    return "?";   // TODO: implement
}
\`\`\`

Stubs let you write the overall structure first, then fill in each piece. The program "compiles" even before it works.

---

## Top-Down Development

1. Write \`main\` first — it calls the high-level methods
2. Write stubs for all the methods \`main\` calls
3. Fill in one method at a time
4. Test as you go

This is called **top-down development**. You design the skeleton first, then add flesh.

---

## The 10-Minute Decomposition Rule

Before writing any code, spend 10 minutes decomposing the problem on paper or in comments.

\`\`\`java
public static void main(String[] args) {
    // 1. Create scanner
    // 2. Read number of students
    // 3. For each student: read name and grades
    // 4. Calculate averages
    // 5. Print report
    // 6. Close scanner
}
\`\`\`

Once the comments are right, writing the code to implement them is straightforward.

---

## What You Learned

- Decomposition breaks a large problem into small, solvable pieces
- Translate each piece into a method with a clear single responsibility
- Write stubs first — a compiling skeleton before implementation
- Top-down development: design the structure, then fill in details
- 10-minute decomposition before coding prevents the blank-file problem

## What Comes Next

You're ready for the most important part of Java: Object-Oriented Programming. Module 4 starts with the foundations of OOP.

Continue to:
**Module 4 — Object-Oriented Programming Part 1: Foundations**
`,
};
