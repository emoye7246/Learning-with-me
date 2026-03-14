export const lessonMiniProjectCsvReport = {
  id: "mini-project-csv-report",
  title: "Mini Project: CSV Report Generator",
  hasChallenge: false,
  article: `
## Mini Project: CSV Report Generator

Build a program that reads a CSV file of student grades, calculates statistics, and writes a formatted report to a new file.

---

## What You'll Build

- Read \`students.csv\` containing names and scores
- Calculate average, highest, and lowest score
- Assign letter grades
- Write a formatted \`report.txt\`

---

## Input File: students.csv

Create this file in your project root:

\`\`\`
name,score
Alice,92
Bob,78
Carol,88
David,65
Emma,95
Frank,71
\`\`\`

---

## Expected Output: report.txt

\`\`\`
STUDENT GRADE REPORT
====================
Name            Score  Grade
--------------------------
Alice              92  A
Bob                78  C
Carol              88  B
David              65  D
Emma               95  A
Frank              71  C

SUMMARY
-------
Total students : 6
Average score  : 81.50
Highest score  : 95 (Emma)
Lowest score   : 65 (David)
\`\`\`

---

## Step 1: Create the Student Record

\`\`\`java
public record Student(String name, int score) {
    public String grade() {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }
}
\`\`\`

---

## Step 2: Read the CSV

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CsvReportGenerator {

    public static List<Student> loadStudents(String path) throws IOException {
        List<Student> students = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
            reader.readLine(); // skip header

            String line;
            int lineNum = 1;
            while ((line = reader.readLine()) != null) {
                lineNum++;
                try {
                    String[] parts = line.split(",");
                    String name = parts[0].trim();
                    int score   = Integer.parseInt(parts[1].trim());
                    students.add(new Student(name, score));
                } catch (Exception e) {
                    System.err.println("Skipping malformed line " + lineNum + ": " + line);
                }
            }
        }
        return students;
    }
\`\`\`

---

## Step 3: Generate the Report

\`\`\`java
    public static void writeReport(String path, List<Student> students) throws IOException {
        if (students.isEmpty()) {
            System.out.println("No students to report on.");
            return;
        }

        double avg = students.stream()
            .mapToInt(Student::score)
            .average()
            .orElse(0);

        Student highest = students.stream()
            .max(Comparator.comparingInt(Student::score))
            .orElseThrow();

        Student lowest = students.stream()
            .min(Comparator.comparingInt(Student::score))
            .orElseThrow();

        try (PrintWriter writer = new PrintWriter(new FileWriter(path))) {
            writer.println("STUDENT GRADE REPORT");
            writer.println("====================");
            writer.printf("%-15s %6s  %5s%n", "Name", "Score", "Grade");
            writer.println("--------------------------");

            for (Student s : students) {
                writer.printf("%-15s %6d  %5s%n", s.name(), s.score(), s.grade());
            }

            writer.println();
            writer.println("SUMMARY");
            writer.println("-------");
            writer.printf("Total students : %d%n", students.size());
            writer.printf("Average score  : %.2f%n", avg);
            writer.printf("Highest score  : %d (%s)%n", highest.score(), highest.name());
            writer.printf("Lowest score   : %d (%s)%n", lowest.score(), lowest.name());
        }

        System.out.println("Report written to: " + path);
    }
\`\`\`

---

## Step 4: Wire It Together

\`\`\`java
    public static void main(String[] args) {
        try {
            List<Student> students = loadStudents("students.csv");
            writeReport("report.txt", students);
        } catch (IOException e) {
            System.err.println("Failed: " + e.getMessage());
        }
    }
}
\`\`\`

---

## Full Import List

\`\`\`java
import java.io.*;
import java.util.*;
\`\`\`

---

## Stretch Goals

- Accept input and output file paths as command-line arguments
- Sort students by score (highest first) in the report
- Add a grade distribution section (how many A's, B's, etc.)
- Handle the case where the input file doesn't exist with a helpful message

---

## What You Practiced

- Reading CSV files with \`BufferedReader\`
- Parsing and validating data line by line
- Writing formatted reports with \`PrintWriter\`
- Computing statistics from a list using streams
- Handling exceptions gracefully throughout

Continue to: **Mini Project: File Backup Utility**
`,
};
