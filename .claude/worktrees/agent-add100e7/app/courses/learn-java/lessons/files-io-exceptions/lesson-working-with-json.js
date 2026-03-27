export const lessonWorkingWithJson = {
  id: "working-with-json",
  title: "Working with JSON — using Gson or Jackson",
  hasChallenge: false,
  article: `
## Working with JSON — using Gson or Jackson

JSON is the dominant data format for APIs, configuration files, and data exchange. Java doesn't include a JSON parser in the standard library, but two excellent libraries dominate:

- **Gson** — Google's library. Simple and easy to use.
- **Jackson** — More powerful and configurable. Used heavily in Spring Boot.

This lesson covers both.

---

## What JSON Looks Like

\`\`\`json
{
  "name": "Alice",
  "score": 92,
  "active": true,
  "courses": ["Java", "Python"]
}
\`\`\`

---

## Gson Setup

Add to \`pom.xml\`:

\`\`\`xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.10.1</version>
</dependency>
\`\`\`

---

## Parsing JSON with Gson

\`\`\`java
import com.google.gson.Gson;

public record Student(String name, int score, boolean active) {}

public class GsonExample {
    public static void main(String[] args) {
        String json = """
            {"name": "Alice", "score": 92, "active": true}
            """;

        Gson gson = new Gson();
        Student student = gson.fromJson(json, Student.class);

        System.out.println(student.name());   // Alice
        System.out.println(student.score());  // 92
    }
}
\`\`\`

---

## Writing Java Objects to JSON with Gson

\`\`\`java
Student student = new Student("Bob", 87, true);
Gson gson = new Gson();
String json = gson.toJson(student);
System.out.println(json);
// {"name":"Bob","score":87,"active":true}

// Pretty-printed:
Gson prettyGson = new GsonBuilder().setPrettyPrinting().create();
System.out.println(prettyGson.toJson(student));
\`\`\`

---

## Reading JSON from a File with Gson

\`\`\`java
import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.FileReader;

try (BufferedReader reader = new BufferedReader(new FileReader("student.json"))) {
    Student student = new Gson().fromJson(reader, Student.class);
    System.out.println(student.name());
}
\`\`\`

---

## Parsing a JSON Array with Gson

\`\`\`java
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
import java.util.List;

String json = """
    [
        {"name": "Alice", "score": 92, "active": true},
        {"name": "Bob",   "score": 87, "active": false}
    ]
    """;

Type listType = new TypeToken<List<Student>>(){}.getType();
List<Student> students = new Gson().fromJson(json, listType);
students.forEach(s -> System.out.println(s.name() + ": " + s.score()));
\`\`\`

---

## Jackson Setup

\`\`\`xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.17.0</version>
</dependency>
\`\`\`

---

## Parsing JSON with Jackson

\`\`\`java
import com.fasterxml.jackson.databind.ObjectMapper;

public class JacksonExample {
    public static void main(String[] args) throws Exception {
        String json = "{\\"name\\": \\"Alice\\", \\"score\\": 92}";

        ObjectMapper mapper = new ObjectMapper();
        Student student = mapper.readValue(json, Student.class);
        System.out.println(student.name());
    }
}
\`\`\`

**Note:** Jackson works best with regular classes that have a no-arg constructor and getters/setters, or with the \`@JsonProperty\` annotation. For records, add the Jackson records module.

---

## Writing Objects to JSON with Jackson

\`\`\`java
ObjectMapper mapper = new ObjectMapper();

// Compact
String json = mapper.writeValueAsString(student);

// Pretty-printed
String pretty = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(student);

// Write directly to a file
mapper.writeValue(new File("student.json"), student);
\`\`\`

---

## Which Should You Use?

| | Gson | Jackson |
|---|---|---|
| Ease of use | Simpler | More configuration needed |
| Performance | Good | Better |
| Spring Boot | Optional | Default (built-in) |
| Records support | Yes | With extra module |

**Rule of thumb:** Use Gson for simple projects. Use Jackson when using Spring Boot (it's already included).

---

## What You Learned

- Gson converts between JSON strings and Java objects with \`fromJson()\` / \`toJson()\`
- Jackson uses \`ObjectMapper\` with \`readValue()\` / \`writeValueAsString()\`
- Both can read JSON directly from a file
- Jackson is the industry standard in Spring Boot applications

## What Comes Next

Now that you can work with files and data, it's time to handle the things that go wrong.

Continue to: **7.6 Exception Handling — try, catch, finally**
`,
};
