export const lessonParsingJson = {
  id: "parsing-json-cs",
  title: "Parsing JSON with System.Text.Json",
  hasChallenge: false,
  article: `
## Parsing JSON with System.Text.Json

Once you've made an API request and received a response, you need to turn that JSON string into something C# can work with. \`System.Text.Json\` is the built-in library for this — fast, modern, and included with .NET out of the box.

---

## Two Approaches

There are two main ways to parse JSON in C#:

1. **Deserialize into a typed class (DTO)** — best for known, structured responses
2. **Use JsonDocument for dynamic parsing** — best for exploring unknown structures or extracting a single value

---

## Approach 1: Deserializing into a DTO

A **DTO** (Data Transfer Object) is a plain class that mirrors the JSON structure:

\`\`\`csharp
// JSON response:
// { "login": "octocat", "id": 583231, "public_repos": 8, "followers": 9341 }

public class GitHubUser
{
    public string Login { get; set; } = "";
    public int Id { get; set; }
    public int PublicRepos { get; set; }
    public int Followers { get; set; }
}
\`\`\`

Then deserialize it:

\`\`\`csharp
using System.Text.Json;

string json = await response.Content.ReadAsStringAsync();
var user = JsonSerializer.Deserialize<GitHubUser>(json);

Console.WriteLine(user?.Login);       // octocat
Console.WriteLine(user?.PublicRepos); // 8
\`\`\`

---

## Handling Property Name Differences

JSON uses \`camelCase\` by convention. C# uses \`PascalCase\`. By default, \`System.Text.Json\` is case-sensitive and expects exact matches. There are two solutions:

**Option A: Use JsonPropertyName attribute**

\`\`\`csharp
using System.Text.Json.Serialization;

public class WeatherResponse
{
    [JsonPropertyName("temp")]
    public double Temperature { get; set; }

    [JsonPropertyName("feels_like")]
    public double FeelsLike { get; set; }
}
\`\`\`

**Option B: Use case-insensitive options (recommended for most scenarios)**

\`\`\`csharp
var options = new JsonSerializerOptions
{
    PropertyNameCaseInsensitive = true
};

var user = JsonSerializer.Deserialize<GitHubUser>(json, options);
\`\`\`

---

## Approach 2: JsonDocument for Dynamic Parsing

When you only need one or two values from a large response, or you don't know the structure in advance, \`JsonDocument\` lets you navigate JSON like a tree:

\`\`\`csharp
using System.Text.Json;

string json = await response.Content.ReadAsStringAsync();

using JsonDocument doc = JsonDocument.Parse(json);
JsonElement root = doc.RootElement;

string city = root.GetProperty("name").GetString() ?? "";
double temp = root.GetProperty("main").GetProperty("temp").GetDouble();
string condition = root.GetProperty("weather")[0].GetProperty("description").GetString() ?? "";

Console.WriteLine($"{city}: {temp}°C, {condition}");
\`\`\`

Note: \`JsonDocument\` is disposable — always use it in a \`using\` block.

---

## Handling Nulls and Missing Fields

JSON can have null values or missing properties. Be defensive:

\`\`\`csharp
// Check if a property exists before accessing it
if (root.TryGetProperty("description", out JsonElement desc))
{
    Console.WriteLine(desc.GetString());
}

// For nullable properties in DTOs, use nullable types
public class Repo
{
    public string Name { get; set; } = "";
    public string? Description { get; set; }  // nullable — may be absent in JSON
    public string? Language { get; set; }
    public int StargazersCount { get; set; }
}
\`\`\`

---

## Deserializing Arrays

Many API responses return arrays:

\`\`\`csharp
// JSON: [{ "name": "repo1", ... }, { "name": "repo2", ... }]

var repos = JsonSerializer.Deserialize<List<Repo>>(json, options);

foreach (var repo in repos ?? [])
{
    Console.WriteLine($"{repo.Name} — {repo.StargazersCount} stars");
}
\`\`\`

---

## Serializing Objects to JSON

Going the other direction — turning a C# object into a JSON string for sending in a POST body:

\`\`\`csharp
var payload = new { title = "Bug report", body = "Steps to reproduce..." };
string json = JsonSerializer.Serialize(payload);
// Result: {"title":"Bug report","body":"Steps to reproduce..."}

// With pretty printing for debugging
string prettyJson = JsonSerializer.Serialize(payload, new JsonSerializerOptions
{
    WriteIndented = true
});
\`\`\`

---

## Which Approach to Use?

| Scenario | Use |
|---|---|
| Known response structure | \`JsonSerializer.Deserialize<T>\` with a DTO |
| Extract 1-2 values quickly | \`JsonDocument\` |
| Unknown or highly variable structure | \`JsonDocument\` |
| Building request bodies | \`JsonSerializer.Serialize\` |
`,
};
