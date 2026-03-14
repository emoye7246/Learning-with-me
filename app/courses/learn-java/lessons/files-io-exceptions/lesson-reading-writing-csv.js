export const lessonReadingWritingCsv = {
  id: "reading-writing-csv",
  title: "Reading and Writing CSV and Text Data",
  hasChallenge: false,
  article: `
## Reading and Writing CSV and Text Data

CSV (Comma-Separated Values) is one of the most common data formats you'll encounter. Java has no built-in CSV parser, but you can handle simple CSV files yourself — and use a library for complex cases.

---

## What CSV Looks Like

\`\`\`
name,score,grade
Alice,92,A
Bob,78,C
Carol,88,B
\`\`\`

Each line is a record. Fields are separated by commas. The first line is often a header.

---

## Reading a Simple CSV File

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CsvReader {
    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new FileReader("students.csv"))) {
            String header = reader.readLine(); // skip header
            System.out.println("Columns: " + header);

            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                String name  = parts[0];
                int score    = Integer.parseInt(parts[1]);
                String grade = parts[2];

                System.out.printf("%-10s %3d  %s%n", name, score, grade);
            }
        }
    }
}
\`\`\`

Output:
\`\`\`
Columns: name,score,grade
Alice       92  A
Bob         78  C
Carol       88  B
\`\`\`

---

## Parsing CSV into Objects

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public record Student(String name, int score, String grade) {}

public class CsvParser {
    public static List<Student> loadStudents(String path) throws IOException {
        List<Student> students = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
            reader.readLine(); // skip header

            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                students.add(new Student(
                    parts[0].trim(),
                    Integer.parseInt(parts[1].trim()),
                    parts[2].trim()
                ));
            }
        }
        return students;
    }
}
\`\`\`

---

## Writing a CSV File

\`\`\`java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class CsvWriter {
    public static void writeStudents(String path, List<Student> students) throws IOException {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(path))) {
            writer.write("name,score,grade");
            writer.newLine();

            for (Student s : students) {
                writer.write(s.name() + "," + s.score() + "," + s.grade());
                writer.newLine();
            }
        }
    }
}
\`\`\`

---

## Handling Commas Inside Fields

Simple \`split(",")\` breaks if a field contains a comma, like \`"Smith, John"\`. Quoted fields are the CSV standard fix:

\`\`\`
name,city
"Smith, John",New York
Alice,Boston
\`\`\`

Parsing quoted CSV manually gets complex. Use **OpenCSV** for this:

\`\`\`xml
<!-- pom.xml dependency -->
<dependency>
    <groupId>com.opencsv</groupId>
    <artifactId>opencsv</artifactId>
    <version>5.9</version>
</dependency>
\`\`\`

\`\`\`java
import com.opencsv.CSVReader;
import java.io.FileReader;

try (CSVReader reader = new CSVReader(new FileReader("data.csv"))) {
    String[] row;
    while ((row = reader.readNext()) != null) {
        System.out.println(row[0] + " | " + row[1]);
    }
}
\`\`\`

---

## Tab-Separated Values (TSV)

Same as CSV, but use \`\\t\` as the delimiter:

\`\`\`java
String[] parts = line.split("\\t");
\`\`\`

---

## What You Learned

- Use \`split(",")\` for simple CSV files with no commas in field values
- Skip the header line with a first \`readLine()\` call
- Write CSV manually with a \`BufferedWriter\` loop
- For complex CSV (quoted fields, embedded commas), use the OpenCSV library

## What Comes Next

Next, you'll work with JSON — the most common data format for modern applications.

Continue to: **7.5 Working with JSON — using Gson or Jackson**
`,
};
