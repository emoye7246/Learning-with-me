export const lessonMiniProjectConvertToMaven = {
  id: "mini-project-convert-to-maven",
  title: "Mini Project: Convert a Single-File Project to Maven",
  hasChallenge: false,
  article: `
## Mini Project: Convert a Single-File Project to Maven

In this project, you'll take a working single-file Java program and restructure it into a proper Maven project with layered architecture.

---

## Starting Point: The Single File

Here's the program to convert — a simple student grade calculator:

\`\`\`java
// Main.java (the whole program in one file)
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String[]> data = List.of(
            new String[]{"Alice", "92"},
            new String[]{"Bob",   "78"},
            new String[]{"Carol", "88"}
        );

        for (String[] row : data) {
            String name  = row[0];
            int score    = Integer.parseInt(row[1]);
            String grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
            System.out.printf("%-10s %3d  %s%n", name, score, grade);
        }

        double avg = data.stream()
            .mapToInt(r -> Integer.parseInt(r[1]))
            .average()
            .orElse(0);
        System.out.printf("Average: %.1f%n", avg);
    }
}
\`\`\`

---

## Target Structure

\`\`\`
grade-calculator/
├── pom.xml
└── src/
    └── main/
        └── java/
            └── com/example/grades/
                ├── Main.java
                ├── model/
                │   └── Student.java
                ├── service/
                │   └── GradeService.java
                └── util/
                    └── GradeUtils.java
\`\`\`

---

## Step 1: Create the Maven Project

In IntelliJ: File → New Project → Maven Archetype → maven-archetype-quickstart

Or create \`pom.xml\` manually:

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>grade-calculator</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
</project>
\`\`\`

---

## Step 2: Create the Model

\`\`\`java
// src/main/java/com/example/grades/model/Student.java
package com.example.grades.model;

public record Student(String name, int score) {}
\`\`\`

---

## Step 3: Create the Utility Class

\`\`\`java
// src/main/java/com/example/grades/util/GradeUtils.java
package com.example.grades.util;

public final class GradeUtils {
    private GradeUtils() {}

    public static String letterGrade(int score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }
}
\`\`\`

---

## Step 4: Create the Service

\`\`\`java
// src/main/java/com/example/grades/service/GradeService.java
package com.example.grades.service;

import com.example.grades.model.Student;
import com.example.grades.util.GradeUtils;
import java.util.List;

public class GradeService {

    public void printReport(List<Student> students) {
        for (Student s : students) {
            System.out.printf("%-10s %3d  %s%n",
                s.name(), s.score(), GradeUtils.letterGrade(s.score()));
        }

        double avg = students.stream()
            .mapToInt(Student::score)
            .average()
            .orElse(0);

        System.out.printf("Average: %.1f%n", avg);
    }
}
\`\`\`

---

## Step 5: Update Main

\`\`\`java
// src/main/java/com/example/grades/Main.java
package com.example.grades;

import com.example.grades.model.Student;
import com.example.grades.service.GradeService;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Student> students = List.of(
            new Student("Alice", 92),
            new Student("Bob",   78),
            new Student("Carol", 88)
        );

        new GradeService().printReport(students);
    }
}
\`\`\`

---

## Step 6: Build and Run

\`\`\`bash
mvn compile
mvn exec:java -Dexec.mainClass="com.example.grades.Main"
\`\`\`

Or run \`Main\` directly from IntelliJ.

---

## What You Practiced

- Creating a Maven project from scratch
- Organising code into model, service, and util layers
- Using proper package naming conventions
- Building with \`mvn compile\`

Continue to: **Mini Project: Multi-Module Console App with External Dependency**
`,
};
