export const lessonMiniProjectGithubFetcher = {
  id: "mini-project-github-fetcher",
  title: "Mini Project: GitHub Repository Fetcher",
  hasChallenge: false,
  article: `
## Mini Project: GitHub Repository Fetcher

Build a CLI tool that fetches and displays a GitHub user's public repositories using the GitHub REST API.

---

## What You'll Build

\`\`\`
$ java Main octocat

Repositories for octocat (8 public repos)
==========================================

 #  Repository                Stars  Language    Updated
 1  Hello-World               2001   (none)      2024-01-15
 2  Spoon-Knife               1873   HTML        2023-11-20
 3  linguist                   567   Ruby        2024-02-01
...
\`\`\`

---

## Setup

The GitHub API allows 60 unauthenticated requests per hour. For higher limits, create a GitHub personal access token and set it:

\`\`\`bash
export GITHUB_TOKEN=your_token_here
\`\`\`

---

## Step 1: The Repository Model

\`\`\`java
import com.google.gson.annotations.SerializedName;

public class GitHubRepo {
    public String name;
    public String description;
    public String language;

    @SerializedName("stargazers_count")
    public int stars;

    @SerializedName("forks_count")
    public int forks;

    @SerializedName("updated_at")
    public String updatedAt;

    @SerializedName("html_url")
    public String htmlUrl;

    public String shortDate() {
        return updatedAt == null ? "N/A" : updatedAt.substring(0, 10);
    }
}
\`\`\`

---

## Step 2: The GitHub Client

\`\`\`java
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.IOException;
import java.lang.reflect.Type;
import java.net.URI;
import java.net.http.*;
import java.util.List;

public class GitHubClient {
    private static final String BASE = "https://api.github.com";
    private final HttpClient http;
    private final Gson gson;
    private final String token;

    public GitHubClient() {
        this.http  = HttpClient.newHttpClient();
        this.gson  = new Gson();
        this.token = System.getenv("GITHUB_TOKEN");  // null is OK — uses public rate limit
    }

    public List<GitHubRepo> getRepositories(String username)
            throws IOException, InterruptedException {

        HttpRequest.Builder builder = HttpRequest.newBuilder()
            .uri(URI.create(BASE + "/users/" + username + "/repos?per_page=30&sort=updated"))
            .header("Accept", "application/vnd.github.v3+json");

        if (token != null && !token.isBlank()) {
            builder.header("Authorization", "Bearer " + token);
        }

        HttpResponse<String> response = http.send(builder.GET().build(),
            HttpResponse.BodyHandlers.ofString());

        return switch (response.statusCode()) {
            case 200 -> {
                Type listType = new TypeToken<List<GitHubRepo>>(){}.getType();
                yield gson.fromJson(response.body(), listType);
            }
            case 404 -> throw new RuntimeException("User not found: " + username);
            case 403 -> throw new RuntimeException("API rate limit exceeded");
            default  -> throw new RuntimeException("GitHub API error: " + response.statusCode());
        };
    }
}
\`\`\`

---

## Step 3: Display the Results

\`\`\`java
import java.util.Comparator;
import java.util.List;

public class RepoDisplay {

    public static void print(String username, List<GitHubRepo> repos) {
        System.out.printf("Repositories for %s (%d public repos)%n", username, repos.size());
        System.out.println("=".repeat(50));
        System.out.println();
        System.out.printf(" %-3s  %-30s %6s  %-12s %s%n",
            "#", "Repository", "Stars", "Language", "Updated");
        System.out.println(" " + "-".repeat(65));

        List<GitHubRepo> sorted = repos.stream()
            .sorted(Comparator.comparingInt((GitHubRepo r) -> r.stars).reversed())
            .toList();

        int i = 1;
        for (GitHubRepo repo : sorted) {
            System.out.printf(" %-3d  %-30s %6d  %-12s %s%n",
                i++,
                truncate(repo.name, 30),
                repo.stars,
                repo.language != null ? repo.language : "(none)",
                repo.shortDate()
            );
        }
    }

    private static String truncate(String s, int max) {
        return s.length() <= max ? s : s.substring(0, max - 3) + "...";
    }
}
\`\`\`

---

## Step 4: Main

\`\`\`java
public class Main {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Usage: java Main <github-username>");
            System.exit(1);
        }

        String username = args[0];

        try {
            GitHubClient client = new GitHubClient();
            List<GitHubRepo> repos = client.getRepositories(username);
            RepoDisplay.print(username, repos);
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
            System.exit(1);
        }
    }
}
\`\`\`

---

## Stretch Goals

- Fetch and display repo topics/tags
- Show the README of a specific repo (another API call)
- Add \`--language\` filter to show only repos in a specific language
- Save results to a JSON file

Continue to: **Mini Project: Currency Converter with Live Exchange Rates**
`,
};
