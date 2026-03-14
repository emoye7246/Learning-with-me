export const lessonAuthenticationApiKeys = {
  id: "authentication-api-keys",
  title: "Authentication — API Keys and Bearer Tokens",
  hasChallenge: false,
  article: `
## Authentication — API Keys and Bearer Tokens

Most APIs require authentication — proof of who you are. The two most common mechanisms are **API keys** and **Bearer tokens**. Both are sent in HTTP headers.

---

## Storing Credentials Safely

**Never hardcode API keys in your source code.** They'll end up in git history and be visible to anyone with access to your repo.

Use environment variables instead:

\`\`\`java
String apiKey = System.getenv("WEATHER_API_KEY");
if (apiKey == null || apiKey.isBlank()) {
    throw new RuntimeException("WEATHER_API_KEY environment variable not set");
}
\`\`\`

Set the environment variable:
\`\`\`bash
export WEATHER_API_KEY=your-key-here    # Mac/Linux
set WEATHER_API_KEY=your-key-here       # Windows
\`\`\`

In IntelliJ: Run → Edit Configurations → Environment Variables.

---

## API Key in a Header

\`\`\`java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .header("X-API-Key", apiKey)
    .GET()
    .build();
\`\`\`

---

## API Key as a Query Parameter

Some APIs (like OpenWeatherMap) accept the key as a query param:

\`\`\`java
String url = "https://api.openweathermap.org/data/2.5/weather"
    + "?q=London&appid=" + apiKey + "&units=metric";

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create(url))
    .GET()
    .build();
\`\`\`

---

## Bearer Token Authentication

Many modern APIs use Bearer tokens (JWTs or OAuth access tokens):

\`\`\`java
String token = System.getenv("GITHUB_TOKEN");

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.github.com/user/repos"))
    .header("Authorization", "Bearer " + token)
    .header("Accept", "application/vnd.github.v3+json")
    .GET()
    .build();
\`\`\`

The format is always: \`Authorization: Bearer <token>\`

---

## Building a Reusable API Client

\`\`\`java
public class WeatherClient {
    private static final String BASE_URL = "https://api.openweathermap.org/data/2.5";
    private final String apiKey;
    private final HttpClient client;
    private final Gson gson;

    public WeatherClient() {
        this.apiKey = System.getenv("WEATHER_API_KEY");
        if (this.apiKey == null) throw new RuntimeException("WEATHER_API_KEY not set");

        this.client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();
        this.gson = new Gson();
    }

    public WeatherData getWeather(String city) throws IOException, InterruptedException {
        String url = BASE_URL + "/weather?q="
            + URLEncoder.encode(city, StandardCharsets.UTF_8)
            + "&units=metric&appid=" + apiKey;

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .GET()
            .build();

        HttpResponse<String> response = client.send(request,
            HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() == 401) {
            throw new RuntimeException("Invalid API key");
        }
        if (response.statusCode() == 404) {
            throw new RuntimeException("City not found: " + city);
        }
        if (response.statusCode() != 200) {
            throw new RuntimeException("API error: " + response.statusCode());
        }

        return gson.fromJson(response.body(), WeatherData.class);
    }
}
\`\`\`

---

## Handling 401 Unauthorized

\`\`\`java
if (response.statusCode() == 401) {
    System.err.println("Authentication failed.");
    System.err.println("Check that your API key is correct and not expired.");
    return;
}
\`\`\`

Common causes:
- Wrong key format
- Expired token
- Missing \`Bearer \` prefix
- Wrong header name (\`X-API-Key\` vs \`Authorization\`)

---

## What You Learned

- Never hardcode API keys — use environment variables
- API key authentication: send in a header (\`X-API-Key\`) or query parameter (\`?apikey=\`)
- Bearer token authentication: \`Authorization: Bearer <token>\`
- Always handle 401 (unauthorized) and 404 (not found) specifically
- Build a reusable client class that encapsulates auth and base URL

## What Comes Next

Now you'll handle all the things that can go wrong with network requests.

Continue to: **11.7 Error Handling for Network Requests**
`,
};
