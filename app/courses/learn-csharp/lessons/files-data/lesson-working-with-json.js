export const lessonWorkingWithJson = {
  id: "working-with-json-cs",
  title: "Working with JSON — System.Text.Json",
  hasChallenge: false,
  article: `
## Working with JSON — System.Text.Json

JSON is the dominant format for configuration files, API responses, and data exchange between systems. .NET includes \`System.Text.Json\` built-in — no NuGet package required — providing fast, modern JSON serialization and deserialization.

---

## Serializing Objects to JSON

Convert a C# object to a JSON string with \`JsonSerializer.Serialize\`:

\`\`\`csharp
using System.Text.Json;

record Person(string Name, int Age, string City);

var person = new Person("Alice", 30, "New York");
string json = JsonSerializer.Serialize(person);

Console.WriteLine(json);
// {"Name":"Alice","Age":30,"City":"New York"}
\`\`\`

---

## Pretty-Printing JSON

By default, output is compact (no whitespace). Use \`JsonSerializerOptions\` to format it readably:

\`\`\`csharp
var options = new JsonSerializerOptions { WriteIndented = true };
string prettyJson = JsonSerializer.Serialize(person, options);

Console.WriteLine(prettyJson);
// {
//   "Name": "Alice",
//   "Age": 30,
//   "City": "New York"
// }
\`\`\`

---

## Deserializing JSON to Objects

Convert a JSON string back to a C# object with \`JsonSerializer.Deserialize<T>\`:

\`\`\`csharp
string json = """{"Name":"Bob","Age":25,"City":"London"}""";

Person? person = JsonSerializer.Deserialize<Person>(json);
Console.WriteLine(person?.Name);  // Bob
\`\`\`

Deserialization returns a nullable type — always handle the possibility of null (e.g., when the input is "null" or empty):

\`\`\`csharp
var data = JsonSerializer.Deserialize<Person>(json)
    ?? throw new InvalidOperationException("JSON was null.");
\`\`\`

---

## Reading and Writing JSON Files

Combine file I/O with JSON serialization:

\`\`\`csharp
// Write object to file
var config = new AppConfig { Theme = "dark", MaxItems = 50 };
string json = JsonSerializer.Serialize(config, new JsonSerializerOptions { WriteIndented = true });
File.WriteAllText("config.json", json);

// Read object from file
string content = File.ReadAllText("config.json");
AppConfig? loaded = JsonSerializer.Deserialize<AppConfig>(content);
\`\`\`

---

## JsonPropertyName — Controlling Property Names

By default, property names in JSON match C# property names exactly. Use \`[JsonPropertyName]\` to map them differently:

\`\`\`csharp
using System.Text.Json.Serialization;

class WeatherData
{
    [JsonPropertyName("temp_celsius")]
    public double Temperature { get; set; }

    [JsonPropertyName("wind_kph")]
    public double WindSpeed { get; set; }

    [JsonPropertyName("description")]
    public string Condition { get; set; } = "";
}
\`\`\`

This is essential when working with external APIs that use snake_case or other naming conventions.

---

## Case-Insensitive Deserialization

External JSON may have different casing from your C# properties. Enable case-insensitive matching:

\`\`\`csharp
var options = new JsonSerializerOptions
{
    PropertyNameCaseInsensitive = true
};

var data = JsonSerializer.Deserialize<Person>(json, options);
\`\`\`

---

## Deserializing Collections

\`\`\`csharp
string json = """[{"Name":"Alice","Age":30},{"Name":"Bob","Age":25}]""";

List<Person>? people = JsonSerializer.Deserialize<List<Person>>(json);
foreach (var p in people ?? [])
    Console.WriteLine($"{p.Name}, {p.Age}");
\`\`\`

---

## Handling JsonException

Malformed JSON throws \`JsonException\`. Always wrap deserialization in a try/catch when the input comes from outside your control:

\`\`\`csharp
try
{
    string content = File.ReadAllText("config.json");
    var config = JsonSerializer.Deserialize<AppConfig>(content);
    // use config...
}
catch (FileNotFoundException)
{
    Console.Error.WriteLine("Config file not found.");
    return 1;
}
catch (JsonException ex)
{
    Console.Error.WriteLine($"Config file contains invalid JSON: {ex.Message}");
    return 1;
}
\`\`\`

---

## Common JsonSerializerOptions

\`\`\`csharp
var options = new JsonSerializerOptions
{
    WriteIndented = true,                          // pretty-print output
    PropertyNameCaseInsensitive = true,            // case-insensitive reads
    PropertyNamingPolicy = JsonNamingPolicy.CamelCase, // write as camelCase
    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull // skip null properties
};
\`\`\`

Create one \`JsonSerializerOptions\` instance and reuse it — creating new instances repeatedly has a performance cost.

---

## What Comes Next

The next lesson covers cross-platform path handling — ensuring your file paths work correctly on Windows, macOS, and Linux.
`,
};
