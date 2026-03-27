export const lessonSeparatingConcerns = {
  id: "separating-concerns",
  title: "Separating Concerns — layered architecture basics",
  hasChallenge: false,
  article: `
## Separating Concerns — layered architecture basics

As your application grows, keeping all logic in one class becomes unworkable. **Layered architecture** is the standard way to organise Java code into responsibilities that stay separate and stay manageable.

---

## The Problem with Everything in Main

\`\`\`java
public class Main {
    public static void main(String[] args) throws Exception {
        // Read file
        List<String> lines = Files.readAllLines(Path.of("students.csv"));

        // Parse
        List<Student> students = new ArrayList<>();
        for (String line : lines.subList(1, lines.size())) {
            String[] parts = line.split(",");
            students.add(new Student(parts[0], Integer.parseInt(parts[1])));
        }

        // Calculate
        double avg = students.stream().mapToInt(Student::score).average().orElse(0);

        // Display
        System.out.printf("Average: %.1f%n", avg);
    }
}
\`\`\`

This works. But it's not testable, not reusable, and impossible to modify safely as it grows.

---

## The Three-Layer Model

A classic layered architecture separates code into three responsibilities:

\`\`\`
┌──────────────────────────────┐
│         Presentation         │  Main, CLI, UI — interacts with the user
├──────────────────────────────┤
│          Service             │  Business logic — rules, calculations, decisions
├──────────────────────────────┤
│         Repository           │  Data access — reads/writes files, databases, APIs
└──────────────────────────────┘
\`\`\`

Each layer only depends on the layer below it.

---

## Applying the Pattern

\`\`\`java
// Repository — only knows about data
public class StudentRepository {
    public List<Student> loadAll(String path) throws IOException {
        List<Student> students = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
            reader.readLine(); // skip header
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                students.add(new Student(parts[0].trim(),
                    Integer.parseInt(parts[1].trim())));
            }
        }
        return students;
    }
}
\`\`\`

\`\`\`java
// Service — only knows about business rules
public class StudentService {
    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public double getAverageScore(String path) throws IOException {
        List<Student> students = repository.loadAll(path);
        return students.stream()
            .mapToInt(Student::score)
            .average()
            .orElse(0);
    }

    public Optional<Student> getTopStudent(String path) throws IOException {
        return repository.loadAll(path).stream()
            .max(Comparator.comparingInt(Student::score));
    }
}
\`\`\`

\`\`\`java
// Main — only knows about coordination
public class Main {
    public static void main(String[] args) throws IOException {
        StudentRepository repo = new StudentRepository();
        StudentService service = new StudentService(repo);

        double avg = service.getAverageScore("students.csv");
        System.out.printf("Average score: %.1f%n", avg);

        service.getTopStudent("students.csv")
            .ifPresent(s -> System.out.println("Top student: " + s.name()));
    }
}
\`\`\`

---

## Why This Works

**Testability:** The service can be tested by passing a mock repository — no file system needed.

**Replaceability:** Switch from CSV to a database? Only the repository changes. The service and main are untouched.

**Readability:** Each class has one job. New developers understand it immediately.

---

## Package Layout

\`\`\`
com.example.app/
├── Main.java
├── model/
│   └── Student.java
├── repository/
│   └── StudentRepository.java
└── service/
    └── StudentService.java
\`\`\`

---

## What You Learned

- Put all code in one class only for the simplest scripts
- Layered architecture: Presentation → Service → Repository
- Each layer has one responsibility and depends only on the layer below
- This separation makes code testable, replaceable, and readable

## What Comes Next

Next, you'll learn how to write reusable utility classes that any layer can use.

Continue to: **8.8 Reusable Utility Classes and Libraries**
`,
};
