export const lessonMiniProjectWeatherCli = {
  id: "mini-project-weather-cli-cs",
  title: "Mini-Project: Weather CLI App Using a Public API",
  hasChallenge: false,
  article: `
## Mini-Project: Weather CLI App Using a Public API

In this project you'll build a command-line weather app that fetches real weather data from a public API and displays it in a readable format. This ties together everything from the module: HttpClient, JSON parsing, authentication, and error handling.

---

## Choosing an API

**Option A: wttr.in (no API key required)**

wttr.in is a console-oriented weather service with a JSON output mode. No signup needed — great for getting started immediately:

\`\`\`bash
curl "https://wttr.in/London?format=j1"
\`\`\`

**Option B: OpenWeatherMap (free tier, requires API key)**

More detailed data, widely documented. Sign up at openweathermap.org for a free API key.

This lesson uses **wttr.in** so you can run it without any account setup.

---

## Project Setup

\`\`\`bash
dotnet new console -n WeatherCli
cd WeatherCli
\`\`\`

---

## The DTO Structure

The wttr.in JSON response is nested. You only need a small slice of it:

\`\`\`csharp
using System.Text.Json.Serialization;

public class WttrResponse
{
    [JsonPropertyName("current_condition")]
    public List<CurrentCondition> CurrentCondition { get; set; } = [];

    [JsonPropertyName("nearest_area")]
    public List<NearestArea> NearestArea { get; set; } = [];
}

public class CurrentCondition
{
    [JsonPropertyName("temp_C")]
    public string TempC { get; set; } = "";

    [JsonPropertyName("temp_F")]
    public string TempF { get; set; } = "";

    [JsonPropertyName("humidity")]
    public string Humidity { get; set; } = "";

    [JsonPropertyName("windspeedKmph")]
    public string WindSpeedKmph { get; set; } = "";

    [JsonPropertyName("weatherDesc")]
    public List<ValueWrapper> WeatherDesc { get; set; } = [];
}

public class ValueWrapper
{
    [JsonPropertyName("value")]
    public string Value { get; set; } = "";
}

public class NearestArea
{
    [JsonPropertyName("areaName")]
    public List<ValueWrapper> AreaName { get; set; } = [];

    [JsonPropertyName("country")]
    public List<ValueWrapper> Country { get; set; } = [];
}
\`\`\`

---

## The Weather Fetcher

\`\`\`csharp
using System.Net.Http;
using System.Text.Json;

public class WeatherService
{
    private static readonly HttpClient _client = new HttpClient(new SocketsHttpHandler
    {
        PooledConnectionLifetime = TimeSpan.FromMinutes(2)
    });

    public async Task<WttrResponse?> GetWeatherAsync(string city)
    {
        string encoded = Uri.EscapeDataString(city);
        string url = $"https://wttr.in/{encoded}?format=j1";

        _client.DefaultRequestHeaders.TryAddWithoutValidation(
            "User-Agent", "WeatherCli/1.0 (learning project)");

        HttpResponseMessage response = await _client.GetAsync(url);

        if (!response.IsSuccessStatusCode)
        {
            Console.Error.WriteLine($"API returned {(int)response.StatusCode}");
            return null;
        }

        string json = await response.Content.ReadAsStringAsync();

        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = false };
        return JsonSerializer.Deserialize<WttrResponse>(json, options);
    }
}
\`\`\`

---

## The Entry Point

\`\`\`csharp
// Program.cs
string city = args.Length > 0 ? args[0] : "London";

Console.WriteLine($"Fetching weather for: {city}");
Console.WriteLine();

var service = new WeatherService();

try
{
    WttrResponse? weather = await service.GetWeatherAsync(city);

    if (weather is null || weather.CurrentCondition.Count == 0)
    {
        Console.WriteLine("Could not retrieve weather data.");
        return;
    }

    CurrentCondition current = weather.CurrentCondition[0];
    string areaName = weather.NearestArea.FirstOrDefault()?.AreaName.FirstOrDefault()?.Value ?? city;
    string country = weather.NearestArea.FirstOrDefault()?.Country.FirstOrDefault()?.Value ?? "";
    string description = current.WeatherDesc.FirstOrDefault()?.Value ?? "Unknown";

    Console.WriteLine($"Location : {areaName}, {country}");
    Console.WriteLine($"Condition: {description}");
    Console.WriteLine($"Temp     : {current.TempC}°C / {current.TempF}°F");
    Console.WriteLine($"Humidity : {current.Humidity}%");
    Console.WriteLine($"Wind     : {current.WindSpeedKmph} km/h");
}
catch (HttpRequestException ex)
{
    Console.Error.WriteLine($"Network error: {ex.Message}");
}
catch (TaskCanceledException)
{
    Console.Error.WriteLine("Request timed out.");
}
\`\`\`

---

## Running It

\`\`\`bash
dotnet run -- London
dotnet run -- "New York"
dotnet run -- Tokyo
\`\`\`

Expected output:

\`\`\`bash
Fetching weather for: London

Location : London, United Kingdom
Condition: Partly Cloudy
Temp     : 12°C / 54°F
Humidity : 72%
Wind     : 18 km/h
\`\`\`

---

## Extension Ideas

Once the basic version works, try extending it:

- Accept a \`--units metric|imperial\` flag to display the preferred temperature unit
- Show a 3-day forecast (wttr.in includes this in the JSON response under \`weather\`)
- Color the output based on temperature (cold = blue, warm = yellow, hot = red) using ANSI escape codes
- Add a \`--save\` flag that writes the result to a \`weather.json\` file

This project demonstrates the full API consumption loop in about 100 lines of clean, readable C#.
`,
};
