export const lessonMiniProjectGithubFetcher = {
  id: "mini-project-github-fetcher-cs",
  title: "Mini-Project: GitHub Repository Fetcher",
  hasChallenge: false,
  article: `
## Mini-Project: GitHub Repository Fetcher

The GitHub REST API is one of the best-documented, most developer-friendly APIs available. In this project you'll fetch a user's public repositories and display them sorted by star count. You'll practice Bearer token authentication, DTO design, and working with a professional-grade API.

---

## Project Setup

\`\`\`bash
dotnet new console -n GitHubFetcher
cd GitHubFetcher
\`\`\`

---

## Getting a GitHub Token

While the GitHub API works without authentication for public data (60 requests/hour), an authenticated token raises your limit to 5,000/hour and is required for private repos.

1. Go to github.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with the \`public_repo\` scope
3. Copy the token (you won't see it again)

Store it as an environment variable:

\`\`\`bash
export GITHUB_TOKEN="ghp_yourTokenHere"
\`\`\`

---

## DTO Design

GitHub's repo objects are large — you only need a subset:

\`\`\`csharp
using System.Text.Json.Serialization;

public class GitHubRepo
{
    [JsonPropertyName("name")]
    public string Name { get; set; } = "";

    [JsonPropertyName("description")]
    public string? Description { get; set; }

    [JsonPropertyName("language")]
    public string? Language { get; set; }

    [JsonPropertyName("stargazers_count")]
    public int StargazersCount { get; set; }

    [JsonPropertyName("forks_count")]
    public int ForksCount { get; set; }

    [JsonPropertyName("html_url")]
    public string HtmlUrl { get; set; } = "";

    [JsonPropertyName("updated_at")]
    public DateTime UpdatedAt { get; set; }
}
\`\`\`

\`Description\` and \`Language\` are nullable because GitHub repos can have neither.

---

## The GitHub Service

\`\`\`csharp
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;

public class GitHubService
{
    private static readonly HttpClient _client = new HttpClient(new SocketsHttpHandler
    {
        PooledConnectionLifetime = TimeSpan.FromMinutes(2)
    });

    private const string BaseUrl = "https://api.github.com";

    public GitHubService(string? token)
    {
        _client.DefaultRequestHeaders.Add("User-Agent", "GitHubFetcher/1.0");
        _client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/vnd.github+json"));

        if (!string.IsNullOrEmpty(token))
        {
            _client.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", token);
        }
    }

    public async Task<List<GitHubRepo>> GetReposAsync(string username, int perPage = 30)
    {
        string url = $"{BaseUrl}/users/{username}/repos?per_page={perPage}&sort=updated";

        HttpResponseMessage response = await _client.GetAsync(url);

        if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
        {
            Console.Error.WriteLine($"User '{username}' not found.");
            return [];
        }

        response.EnsureSuccessStatusCode();

        string json = await response.Content.ReadAsStringAsync();
        var repos = JsonSerializer.Deserialize<List<GitHubRepo>>(json);
        return repos ?? [];
    }
}
\`\`\`

---

## Display Formatting

\`\`\`csharp
static void DisplayRepos(string username, List<GitHubRepo> repos)
{
    var sorted = repos.OrderByDescending(r => r.StargazersCount).ToList();

    Console.WriteLine();
    Console.WriteLine($"Repositories for: {username} ({repos.Count} total)");
    Console.WriteLine(new string('─', 60));

    foreach (var repo in sorted)
    {
        string lang = repo.Language ?? "—";
        string desc = repo.Description ?? "No description";

        // Truncate long descriptions
        if (desc.Length > 70)
            desc = desc[..67] + "...";

        Console.WriteLine($"★ {repo.StargazersCount,-6} {repo.Name}");
        Console.WriteLine($"         {desc}");
        Console.WriteLine($"         Language: {lang,-15} Forks: {repo.ForksCount}");
        Console.WriteLine();
    }
}
\`\`\`

---

## The Entry Point

\`\`\`csharp
// Program.cs
string username = args.Length > 0 ? args[0] : "microsoft";
string? token = Environment.GetEnvironmentVariable("GITHUB_TOKEN");

if (string.IsNullOrEmpty(token))
{
    Console.WriteLine("Note: GITHUB_TOKEN not set. Limited to 60 requests/hour.");
}

var service = new GitHubService(token);

try
{
    Console.WriteLine($"Fetching repositories for '{username}'...");
    List<GitHubRepo> repos = await service.GetReposAsync(username);

    if (repos.Count == 0)
    {
        Console.WriteLine("No repositories found.");
        return;
    }

    DisplayRepos(username, repos);

    // Summary stats
    int totalStars = repos.Sum(r => r.StargazersCount);
    var languages = repos
        .Where(r => r.Language != null)
        .GroupBy(r => r.Language!)
        .OrderByDescending(g => g.Count())
        .Take(3)
        .Select(g => $"{g.Key} ({g.Count()})");

    Console.WriteLine($"Total stars: {totalStars}");
    Console.WriteLine($"Top languages: {string.Join(", ", languages)}");
}
catch (HttpRequestException ex)
{
    Console.Error.WriteLine($"Request failed: {ex.Message}");
}
\`\`\`

---

## Running It

\`\`\`bash
dotnet run -- torvalds
dotnet run -- dotnet
dotnet run -- your-github-username
\`\`\`

---

## Extension Ideas

- Add a \`--sort stars|forks|updated\` flag
- Filter by language: \`--language csharp\`
- Show the user's profile (followers, following, bio) by calling \`/users/{username}\` before the repos call
- Paginate — fetch multiple pages to get more than 30 repos (use the \`Link\` response header)
- Cache results to a local JSON file to avoid re-fetching on repeated runs
`,
};
