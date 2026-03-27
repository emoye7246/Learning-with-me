export const lessonJavaHttpclient = {
  id: "java-httpclient",
  title: "Java's Built-in HttpClient (Java 11+)",
  hasChallenge: false,
  article: `
## Java's Built-in HttpClient (Java 11+)

Java 11 introduced \`java.net.http.HttpClient\` — a modern, non-blocking HTTP client that's now the standard way to make HTTP requests in Java without external libraries.

---

## The Three Core Classes

\`\`\`
HttpClient    — sends requests, manages connections
HttpRequest   — the request you want to send
HttpResponse  — the response you get back
\`\`\`

---

## Making a GET Request

\`\`\`java
import java.net.URI;
import java.net.http.*;
import java.io.IOException;

public class HttpExample {
    public static void main(String[] args) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.github.com/users/octocat"))
            .header("Accept", "application/vnd.github.v3+json")
            .GET()
            .build();

        HttpResponse<String> response = client.send(
            request,
            HttpResponse.BodyHandlers.ofString()
        );

        System.out.println("Status: " + response.statusCode());
        System.out.println("Body: " + response.body());
    }
}
\`\`\`

---

## Creating the HttpClient

\`\`\`java
// Default client — good for most cases
HttpClient client = HttpClient.newHttpClient();

// With configuration
HttpClient client = HttpClient.newBuilder()
    .connectTimeout(Duration.ofSeconds(10))
    .followRedirects(HttpClient.Redirect.NORMAL)
    .build();
\`\`\`

The client is reusable and thread-safe. Create one and share it.

---

## Building Requests

\`\`\`java
// GET
HttpRequest get = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/users"))
    .GET()
    .build();

// POST with JSON body
String json = """{"name": "Alice", "email": "alice@example.com"}""";
HttpRequest post = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/users"))
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(json))
    .build();

// With a timeout
HttpRequest timedRequest = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/slow"))
    .timeout(Duration.ofSeconds(5))
    .GET()
    .build();
\`\`\`

---

## Handling the Response

\`\`\`java
HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

// Status code
int status = response.statusCode();  // 200, 404, etc.

// Body
String body = response.body();

// Headers
String contentType = response.headers().firstValue("Content-Type").orElse("unknown");

// Check success
if (status >= 200 && status < 300) {
    System.out.println("Success: " + body);
} else {
    System.err.println("Failed with status " + status + ": " + body);
}
\`\`\`

---

## Different Body Handlers

\`\`\`java
// Response as String
HttpResponse<String> r1 = client.send(request, HttpResponse.BodyHandlers.ofString());

// Response as bytes
HttpResponse<byte[]> r2 = client.send(request, HttpResponse.BodyHandlers.ofByteArray());

// Discard the body (e.g., for DELETE requests)
HttpResponse<Void> r3 = client.send(request, HttpResponse.BodyHandlers.discarding());

// Save directly to a file
HttpResponse<Path> r4 = client.send(request,
    HttpResponse.BodyHandlers.ofFile(Path.of("response.json")));
\`\`\`

---

## Async Requests with sendAsync()

\`\`\`java
CompletableFuture<HttpResponse<String>> future = client.sendAsync(
    request,
    HttpResponse.BodyHandlers.ofString()
);

future
    .thenApply(HttpResponse::body)
    .thenAccept(System.out::println)
    .exceptionally(ex -> {
        System.err.println("Request failed: " + ex.getMessage());
        return null;
    });

// Don't exit before the future completes in a real app
future.join();
\`\`\`

---

## Building URLs with Query Parameters

\`\`\`java
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

String city = "New York";
String units = "metric";

String url = "https://api.openweathermap.org/data/2.5/weather"
    + "?q=" + URLEncoder.encode(city, StandardCharsets.UTF_8)
    + "&units=" + units
    + "&appid=" + API_KEY;

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create(url))
    .GET()
    .build();
\`\`\`

---

## What You Learned

- \`HttpClient\`, \`HttpRequest\`, and \`HttpResponse\` are the three core classes
- Build the client once and reuse it
- \`HttpRequest.newBuilder()\` configures the request fluently
- \`client.send()\` is synchronous; \`client.sendAsync()\` returns a \`CompletableFuture\`
- Always check the status code before trusting the response body
- URL-encode query parameter values that may contain special characters

## What Comes Next

Now you'll parse the JSON responses you receive.

Continue to: **11.4 Parsing JSON Responses with Jackson or Gson**
`,
};
