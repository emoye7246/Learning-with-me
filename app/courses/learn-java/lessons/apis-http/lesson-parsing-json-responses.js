export const lessonParsingJsonResponses = {
  id: "parsing-json-responses",
  title: "Parsing JSON Responses with Jackson or Gson",
  hasChallenge: false,
  article: `
## Parsing JSON Responses with Jackson or Gson

API responses come as JSON strings. To use the data in your Java code, you need to parse (deserialize) that JSON into Java objects.

---

## The Full Flow

\`\`\`
API returns JSON string
       ↓
Gson / Jackson parses it
       ↓
Java record or class with fields
       ↓
Your code uses the data
\`\`\`

---

## Example: GitHub User API Response

\`\`\`json
{
  "login": "octocat",
  "name": "The Octocat",
  "public_repos": 8,
  "followers": 9001,
  "created_at": "2011-01-25T18:44:36Z"
}
\`\`\`

---

## Parsing with Gson

**1. Define the model:**

\`\`\`java
public class GitHubUser {
    private String login;
    private String name;
    private int public_repos;  // field name matches JSON key
    private int followers;
    private String created_at;

    public String getLogin()    { return login; }
    public String getName()     { return name; }
    public int getPublicRepos() { return public_repos; }
    public int getFollowers()   { return followers; }
}
\`\`\`

**2. Parse the response:**

\`\`\`java
import com.google.gson.Gson;

HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
String json = response.body();

GitHubUser user = new Gson().fromJson(json, GitHubUser.class);
System.out.println(user.getName() + " has " + user.getFollowers() + " followers");
\`\`\`

---

## Handling Nested JSON Objects

\`\`\`json
{
  "name": "octocat/Hello-World",
  "owner": {
    "login": "octocat",
    "avatar_url": "https://..."
  },
  "stargazers_count": 2000
}
\`\`\`

\`\`\`java
public class Owner {
    private String login;
    private String avatar_url;
    public String getLogin() { return login; }
}

public class Repository {
    private String name;
    private Owner owner;
    private int stargazers_count;

    public String getName()           { return name; }
    public Owner getOwner()           { return owner; }
    public int getStargazersCount()   { return stargazers_count; }
}
\`\`\`

Gson maps nested JSON objects to nested Java classes automatically.

---

## Handling JSON Arrays

\`\`\`json
[
  {"login": "alice", "followers": 100},
  {"login": "bob",   "followers": 50}
]
\`\`\`

\`\`\`java
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
import java.util.List;

Type listType = new TypeToken<List<GitHubUser>>(){}.getType();
List<GitHubUser> users = new Gson().fromJson(json, listType);

users.forEach(u -> System.out.println(u.getLogin()));
\`\`\`

---

## Using @SerializedName with Gson

When the JSON key doesn't match a valid Java field name:

\`\`\`java
import com.google.gson.annotations.SerializedName;

public class GitHubUser {
    private String login;
    private String name;

    @SerializedName("public_repos")
    private int publicRepos;

    @SerializedName("created_at")
    private String createdAt;
}
\`\`\`

Now your field names follow Java conventions while still matching the JSON.

---

## Parsing with Jackson

\`\`\`java
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GitHubUser {
    private String login;
    private String name;

    @JsonProperty("public_repos")
    private int publicRepos;

    // getters required for Jackson
    public String getLogin()    { return login; }
    public String getName()     { return name; }
    public int getPublicRepos() { return publicRepos; }
}
\`\`\`

\`\`\`java
ObjectMapper mapper = new ObjectMapper();
GitHubUser user = mapper.readValue(response.body(), GitHubUser.class);
\`\`\`

---

## Handling Unknown or Dynamic JSON

When you don't know the shape of the JSON:

\`\`\`java
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

JsonObject obj = JsonParser.parseString(json).getAsJsonObject();
String login = obj.get("login").getAsString();
int repos = obj.get("public_repos").getAsInt();
\`\`\`

---

## Putting It All Together

\`\`\`java
public class GitHubClient {
    private final HttpClient client = HttpClient.newHttpClient();
    private final Gson gson = new Gson();

    public GitHubUser getUser(String username) throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.github.com/users/" + username))
            .header("Accept", "application/vnd.github.v3+json")
            .GET()
            .build();

        HttpResponse<String> response = client.send(request,
            HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            throw new RuntimeException("API error: " + response.statusCode());
        }

        return gson.fromJson(response.body(), GitHubUser.class);
    }
}
\`\`\`

---

## What You Learned

- Gson and Jackson both map JSON fields to Java fields by name
- Use \`@SerializedName\` (Gson) or \`@JsonProperty\` (Jackson) for field name mismatches
- Nested JSON objects map to nested Java classes
- JSON arrays map to \`List<T>\` using TypeToken (Gson) or directly (Jackson)
- Always check the status code before parsing the response body

## What Comes Next

Now you'll learn how to read API documentation to understand any API.

Continue to: **11.5 Reading API Documentation**
`,
};
