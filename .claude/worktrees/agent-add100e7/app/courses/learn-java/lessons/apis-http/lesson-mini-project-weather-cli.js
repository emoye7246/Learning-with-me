export const lessonMiniProjectWeatherCli = {
  id: "mini-project-weather-cli",
  title: "Mini Project: Weather CLI App Using a Public API",
  hasChallenge: false,
  article: `
## Mini Project: Weather CLI App Using a Public API

Build a command-line app that fetches real weather data and displays it in a formatted report.

---

## Setup: Get a Free API Key

1. Sign up at openweathermap.org (free tier — 60 calls/minute)
2. Go to API keys → copy your key
3. Set the environment variable:
   \`\`\`bash
   export OPENWEATHER_API_KEY=your_key_here
   \`\`\`

---

## What You'll Build

\`\`\`
$ java Main London

Weather in London, GB
=====================
Condition  : Overcast clouds
Temperature: 12.3°C (feels like 10.1°C)
Humidity   : 78%
Wind       : 4.5 m/s from NW
Visibility : 10 km
\`\`\`

---

## Step 1: Add Gson to pom.xml

\`\`\`xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.10.1</version>
</dependency>
\`\`\`

---

## Step 2: Model the Response

The OpenWeatherMap response looks like:

\`\`\`json
{
  "name": "London",
  "sys": { "country": "GB" },
  "weather": [{ "description": "overcast clouds" }],
  "main": { "temp": 12.3, "feels_like": 10.1, "humidity": 78 },
  "wind": { "speed": 4.5, "deg": 315 },
  "visibility": 10000
}
\`\`\`

\`\`\`java
// WeatherResponse.java
import com.google.gson.annotations.SerializedName;
import java.util.List;

public class WeatherResponse {
    public String name;
    public Sys sys;
    public List<WeatherCondition> weather;
    public Main main;
    public Wind wind;
    public int visibility;

    public static class Sys {
        public String country;
    }

    public static class WeatherCondition {
        public String description;
    }

    public static class Main {
        public double temp;
        @SerializedName("feels_like")
        public double feelsLike;
        public int humidity;
    }

    public static class Wind {
        public double speed;
        public int deg;
    }

    public String compassDirection() {
        String[] dirs = {"N","NE","E","SE","S","SW","W","NW"};
        return dirs[(int)Math.round(wind.deg / 45.0) % 8];
    }
}
\`\`\`

---

## Step 3: The Weather Client

\`\`\`java
import com.google.gson.Gson;
import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.*;
import java.nio.charset.StandardCharsets;

public class WeatherClient {
    private static final String BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    private final String apiKey;
    private final HttpClient http;
    private final Gson gson;

    public WeatherClient() {
        this.apiKey = System.getenv("OPENWEATHER_API_KEY");
        if (apiKey == null) throw new RuntimeException("OPENWEATHER_API_KEY not set");
        this.http = HttpClient.newHttpClient();
        this.gson = new Gson();
    }

    public WeatherResponse fetch(String city) throws IOException, InterruptedException {
        String url = BASE_URL + "?q="
            + URLEncoder.encode(city, StandardCharsets.UTF_8)
            + "&units=metric&appid=" + apiKey;

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .GET()
            .build();

        HttpResponse<String> response = http.send(request,
            HttpResponse.BodyHandlers.ofString());

        return switch (response.statusCode()) {
            case 200 -> gson.fromJson(response.body(), WeatherResponse.class);
            case 401 -> throw new RuntimeException("Invalid API key");
            case 404 -> throw new RuntimeException("City not found: " + city);
            default  -> throw new RuntimeException("API error: " + response.statusCode());
        };
    }
}
\`\`\`

---

## Step 4: Display the Results

\`\`\`java
public class WeatherDisplay {
    public static void print(WeatherResponse w) {
        String location = w.name + ", " + w.sys.country;
        System.out.println("Weather in " + location);
        System.out.println("=".repeat(location.length() + 11));
        System.out.printf("Condition  : %s%n",
            capitalize(w.weather.get(0).description));
        System.out.printf("Temperature: %.1f°C (feels like %.1f°C)%n",
            w.main.temp, w.main.feelsLike);
        System.out.printf("Humidity   : %d%%%n", w.main.humidity);
        System.out.printf("Wind       : %.1f m/s from %s%n",
            w.wind.speed, w.compassDirection());
        System.out.printf("Visibility : %d km%n", w.visibility / 1000);
    }

    private static String capitalize(String s) {
        if (s == null || s.isEmpty()) return s;
        return Character.toUpperCase(s.charAt(0)) + s.substring(1);
    }
}
\`\`\`

---

## Step 5: Main

\`\`\`java
public class Main {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Usage: java Main <city>");
            System.exit(1);
        }

        String city = String.join(" ", args);

        try {
            WeatherClient client = new WeatherClient();
            WeatherResponse weather = client.fetch(city);
            WeatherDisplay.print(weather);
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
            System.exit(1);
        }
    }
}
\`\`\`

---

## Stretch Goals

- Cache the last result to a file so you can view it offline
- Accept \`--forecast\` flag to show a 5-day forecast (different endpoint)
- Show an ASCII art weather icon based on the condition

Continue to: **Mini Project: GitHub Repository Fetcher**
`,
};
