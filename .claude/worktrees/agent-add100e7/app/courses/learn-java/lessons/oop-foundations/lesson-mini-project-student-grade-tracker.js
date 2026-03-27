export const lessonMiniProjectStudentGradeTracker = {
  id: "mini-project-student-grade-tracker",
  title: "Mini-Project: Student Grade Tracker",
  hasChallenge: false,
  article: `
## Overview

Build a \`Student\` class that stores a student's name and their grades, with methods to compute their average and letter grade.

Then write a program that manages multiple students and prints a report.

---

## What You're Building

A \`Student\` class with:
- Name
- An array (or list) of grades
- Method to add a grade
- Method to compute average
- Method to get letter grade
- toString() for a clean report line

A \`GradeReport\` program (or Main) that creates several students, adds grades, and prints a formatted report.

---

## Requirements Checklist (Core)

**Student class:**
- [ ] Private fields: name, grades (array or ArrayList)
- [ ] Constructor: \`Student(String name)\`
- [ ] \`addGrade(int grade)\` — adds a grade; rejects values outside 0–100
- [ ] \`getAverage()\` — returns the average grade as a double (return 0.0 if no grades)
- [ ] \`getLetterGrade()\` — returns "A", "B", "C", "D", or "F" based on average
- [ ] \`toString()\` — returns name, average, and letter grade

**Main program:**
- [ ] Create at least 3 students
- [ ] Add grades to each (at least 4 grades per student)
- [ ] Print a formatted report for all students

---

## Grading Scale

- A: average >= 90
- B: average >= 80
- C: average >= 70
- D: average >= 60
- F: below 60

---

## User Experience Checklist (Recommended)

- [ ] Report is formatted in aligned columns
- [ ] Report shows name, average (2 decimal places), and letter grade
- [ ] A heading row at the top: "Name | Average | Grade"

---

## Rules

- Grades must be integers between 0 and 100 inclusive
- Invalid grades must be rejected with a message, not silently ignored
- If a student has no grades, getAverage() returns 0.0 and getLetterGrade() returns "N/A"

---

## Suggested Build Plan

1. Create \`Student.java\` with private fields
2. Implement the constructor
3. Implement \`addGrade()\` with validation
4. Implement \`getAverage()\`
5. Implement \`getLetterGrade()\` using the grading scale
6. Implement \`toString()\`
7. In Main: create students, add grades, print the report

---

## Testing Checklist

- [ ] Student with all A grades — getLetterGrade() returns "A"
- [ ] Student with failing grades — getLetterGrade() returns "F"
- [ ] Mixed grades — average is computed correctly
- [ ] Add a grade of 101 — rejected
- [ ] Add a grade of -5 — rejected
- [ ] Student with no grades — returns 0.0 average and "N/A" grade

---

## Extension Challenges

### Upgrade 1 — Highest and Lowest Grade
Add \`getHighestGrade()\` and \`getLowestGrade()\` methods.

### Upgrade 2 — Grade Distribution
Print how many A's, B's, C's, D's, and F's each student received.

### Upgrade 3 — Class Average
Calculate and print the average across all students.

### Upgrade 4 — Sort by Average
Sort the student list from highest to lowest average before printing the report.

---

## Submission Requirements

Files: \`Student.java\` and \`Main.java\`

Run with:
\`\`\`bash
javac Student.java Main.java && java Main
\`\`\`
`,
  support: {
    intro: `
Use support in order: Level 1 → Level 2 → Blueprint.

This project is more complex than the Bank Account. Take it one method at a time.
    `.trim(),

    level1Nudges: [
      "How do you store multiple grades? An array or ArrayList? Which is easier to add to?",
      "How do you compute an average from a list of numbers?",
      "What should getAverage() return if there are no grades yet?",
      "getLetterGrade() needs the average first — can it call getAverage() internally?",
    ],

    level2Hints: [
      "Use ArrayList<Integer> for grades — it grows dynamically as you add grades.",
      "getAverage(): sum all grades, divide by grades.size(). Handle empty list (return 0.0).",
      "getLetterGrade(): call getAverage() and use if/else chain on the result.",
      "toString(): use String.format to align name, average (%.2f), and letter grade.",
    ],

    blueprint: [
      "Declare private fields: String name, ArrayList<Integer> grades.",
      "Constructor: Student(String name) — initialize name and empty ArrayList.",
      "addGrade(int grade): validate 0–100, then grades.add(grade).",
      "getAverage(): if grades is empty return 0.0. Else: sum / grades.size().",
      "getLetterGrade(): if no grades return 'N/A'. Else: call getAverage() and return letter.",
      "toString(): format name, average, letter.",
      "Main: create students, add grades, print report.",
    ],

    debuggingGuide: [
      {
        problem: "getAverage() returns 0 when I have grades.",
        hint: "Check integer division: if grades is ArrayList<Integer>, sum might be integer division. Use (double) sum / grades.size() or declare sum as double.",
      },
      {
        problem: "My report columns don't align.",
        hint: "Use printf with width specifiers: %-20s for left-aligned 20-char name, %6.2f for average.",
      },
    ],

    revealSolutionWarning: `
This is one possible implementation. Read every line before using it.
    `.trim(),

    exampleSolution: `import java.util.ArrayList;

public class Student {
    private String name;
    private ArrayList<Integer> grades;

    public Student(String name) {
        this.name = name;
        this.grades = new ArrayList<>();
    }

    public void addGrade(int grade) {
        if (grade < 0 || grade > 100) {
            System.out.println("Invalid grade: " + grade + " (must be 0-100)");
            return;
        }
        grades.add(grade);
    }

    public double getAverage() {
        if (grades.isEmpty()) return 0.0;
        int sum = 0;
        for (int g : grades) sum += g;
        return (double) sum / grades.size();
    }

    public String getLetterGrade() {
        if (grades.isEmpty()) return "N/A";
        double avg = getAverage();
        if (avg >= 90) return "A";
        if (avg >= 80) return "B";
        if (avg >= 70) return "C";
        if (avg >= 60) return "D";
        return "F";
    }

    @Override
    public String toString() {
        return String.format("%-20s %6.2f  %s", name, getAverage(), getLetterGrade());
    }
}`,
  },
};
