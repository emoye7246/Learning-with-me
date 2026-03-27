export const lessonErrorHandlingNetwork = {
  id: "error-handling-network",
  title: "Error Handling for Network Requests",
  hasChallenge: false,
  article: `
## Error Handling for Network Requests

Network requests fail. The API might be down, the network might be slow, you might be rate-limited, or your request might be malformed. Robust API clients handle all of these gracefully.

---

## Categories of Failures

**Connection errors** — can't reach the server at all:
- DNS resolution fails
- Connection refused
- Network timeout

**HTTP errors** — reached the server, but it said no:
- 400 Bad Request — your request is wrong
- 401 Unauthorized — authentication failed
- 404 Not Found — the resource doesn't exist
- 429 Too Many Requests — rate limited
- 500 Internal Server Error — server crashed

**Parsing errors** — the response body isn't what you expected.

---

## Handling IOException and InterruptedException

These are always thrown by \`client.send()\`:

\`\`\`java
try {
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    // handle response
} catch (IOException e) {
    System.err.println("Network error: " + e.getMessage());
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
    System.err.println("Request was interrupted");
}
\`\`\`

---

## Checking Status Codes

\`\`\`java
HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
int status = response.statusCode();

switch (status) {
    case 200, 201 -> parseAndUse(response.body());
    case 400       -> System.err.println("Bad request: check your parameters");
    case 401       -> System.err.println("Unauthorized: check your API key");
    case 403       -> System.err.println("Forbidden: you don't have access");
    case 404       -> System.err.println("Not found: resource doesn't exist");
    case 429       -> handleRateLimit(response);
    case 500, 503  -> System.err.println("Server error: try again later");
    default        -> System.err.println("Unexpected status: " + status);
}
\`\`\`

---

## Handling Rate Limits (429)

\`\`\`java
private void handleRateLimit(HttpResponse<String> response) throws InterruptedException {
    String retryAfter = response.headers()
        .firstValue("Retry-After")
        .orElse("60");

    int seconds = Integer.parseInt(retryAfter);
    System.out.println("Rate limited. Waiting " + seconds + " seconds...");
    Thread.sleep(seconds * 1000L);
    // then retry
}
\`\`\`

---

## Timeouts

Set a request timeout to avoid hanging forever:

\`\`\`java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create(url))
    .timeout(Duration.ofSeconds(10))
    .GET()
    .build();

try {
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    // ...
} catch (HttpTimeoutException e) {
    System.err.println("Request timed out after 10 seconds");
}
\`\`\`

---

## Retry with Exponential Backoff

For transient errors (500, 503, network issues), retry with increasing delays:

\`\`\`java
public HttpResponse<String> sendWithRetry(HttpRequest request, int maxAttempts)
        throws IOException, InterruptedException {

    int delayMs = 500;

    for (int attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            HttpResponse<String> response = client.send(request,
                HttpResponse.BodyHandlers.ofString());

            int status = response.statusCode();
            if (status == 429 || status >= 500) {
                System.err.println("Attempt " + attempt + " failed with " + status
                    + ". Retrying in " + delayMs + "ms...");
                Thread.sleep(delayMs);
                delayMs *= 2;  // exponential backoff
                continue;
            }
            return response;

        } catch (IOException e) {
            if (attempt == maxAttempts) throw e;
            System.err.println("Network error on attempt " + attempt + ". Retrying...");
            Thread.sleep(delayMs);
            delayMs *= 2;
        }
    }

    throw new IOException("All " + maxAttempts + " attempts failed");
}
\`\`\`

---

## A Robust API Call Pattern

\`\`\`java
public Optional<WeatherData> fetchWeather(String city) {
    try {
        HttpResponse<String> response = sendWithRetry(buildRequest(city), 3);

        if (response.statusCode() != 200) {
            System.err.println("API returned " + response.statusCode()
                + " for city: " + city);
            return Optional.empty();
        }

        return Optional.of(gson.fromJson(response.body(), WeatherData.class));

    } catch (IOException e) {
        System.err.println("Network error fetching weather: " + e.getMessage());
        return Optional.empty();
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
        return Optional.empty();
    }
}
\`\`\`

---

## What You Learned

- Network failures fall into three categories: connection errors, HTTP errors, and parsing errors
- Always check the status code — never assume success
- Handle 429 by respecting the \`Retry-After\` header
- Set a request timeout to prevent hanging indefinitely
- Use retry with exponential backoff for transient failures (5xx, network errors)
- Return \`Optional.empty()\` from API methods when failure is a legitimate outcome

## What Comes Next

Let's apply everything in a real project.

Continue to: **Mini Project: Weather CLI App Using a Public API**
`,
};
