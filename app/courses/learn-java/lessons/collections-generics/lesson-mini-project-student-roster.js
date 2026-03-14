export const lessonMiniProjectStudentRoster = {
  id: "mini-project-student-roster",
  title: "Mini-Project: Student Roster",
  hasChallenge: false,
  article: `
## Overview

Build a student roster management system that uses collections to organize and query student data.

This project combines List, Set, Map, and sorting to solve a real problem.

---

## What You're Building

A program that manages a roster of students. Each student has a name, ID, and a list of courses they're enrolled in.

The system supports: adding students, enrolling in courses, searching, and generating reports.

---

## Requirements Checklist (Core)

- [ ] \`Student\` record or class: id (int), name (String), courses (Set<String>)
- [ ] \`Roster\` class that stores students in a \`Map<Integer, Student>\` (by ID)
- [ ] \`addStudent(Student s)\`
- [ ] \`enroll(int studentId, String course)\`
- [ ] \`getStudentById(int id)\` — returns Student or null
- [ ] \`getStudentsByName(String name)\` — returns List<Student>
- [ ] \`getStudentsInCourse(String course)\` — returns all enrolled students
- [ ] \`printRoster()\` — all students sorted by name
- [ ] \`printCourseEnrollment()\` — each course and how many students are in it

---

## Rules

- A student cannot be enrolled in the same course twice (use Set)
- Searching by name should be case-insensitive
- Students should be sorted alphabetically in printRoster()

---

## Suggested Build Plan

1. Create the Student record (or class)
2. Create the Roster with a Map<Integer, Student>
3. Implement addStudent and enroll
4. Implement getStudentById
5. Implement getStudentsByName (loop, case-insensitive compare)
6. Implement getStudentsInCourse (loop all students, check their course set)
7. Implement printRoster (sorted by name)
8. Implement printCourseEnrollment (build a Map<String, Integer> of course counts)

---

## Testing Checklist

- [ ] addStudent — student appears in roster
- [ ] enroll — course appears in student's courses
- [ ] Enroll same student in same course twice — no duplicate
- [ ] getStudentsByName — case-insensitive match works
- [ ] getStudentsInCourse — returns correct students
- [ ] printRoster — sorted alphabetically
- [ ] printCourseEnrollment — correct counts per course

---

## Extension Challenges

### Upgrade 1 — Drop Course
Add \`dropCourse(int studentId, String course)\`

### Upgrade 2 — Student GPA
Add a GPA field. Sort the printRoster by GPA descending.

### Upgrade 3 — Course Capacity
Add maximum enrollment per course. Reject enrollment if full.

---

## Submission Requirements

Files: \`Student.java\`, \`Roster.java\`, \`Main.java\`

Run with:
\`\`\`bash
javac *.java && java Main
\`\`\`
`,
  support: {
    intro: "Build one class at a time. Test Student before building Roster.".trim(),

    level1Nudges: [
      "Why use Set<String> for courses instead of List<String>?",
      "Why use Map<Integer, Student> for the roster instead of List<Student>?",
      "getStudentsInCourse needs to loop through all students — what does it check per student?",
    ],

    level2Hints: [
      "Set<String> courses in Student: adding a duplicate course is silently ignored.",
      "Map<Integer, Student>: O(1) lookup by ID with roster.get(studentId).",
      "getStudentsInCourse: for each student in roster.values(), check if student.getCourses().contains(course).",
    ],

    blueprint: [
      "Student: id, name, Set<String> courses. Constructor sets name and id; courses = new HashSet<>();",
      "Roster: Map<Integer, Student> students = new HashMap<>();",
      "addStudent: students.put(s.getId(), s).",
      "enroll: find student by ID, call student.getCourses().add(course).",
      "getStudentsInCourse: loop values(), filter by contains(course), collect to List.",
      "printRoster: students.values() sorted by name.",
    ],

    debuggingGuide: [
      {
        problem: "Enrolling in a course twice still adds a duplicate.",
        hint: "Make sure courses is a Set, not a List. Set.add() returns false for duplicates.",
      },
    ],

    revealSolutionWarning: "One implementation. The key insight is matching collection types to requirements.".trim(),

    exampleSolution: `import java.util.*;

public record Student(int id, String name, Set<String> courses) {
    public Student(int id, String name) {
        this(id, name, new HashSet<>());
    }
}`,
  },
};
