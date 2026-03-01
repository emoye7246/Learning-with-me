export const projectGithubRepoFetcher = {
  id: "project-github-repo-fetcher",
  title: "Project: GitHub Repo Fetcher",

  article: `
## Overview

Build a CLI tool that fetches and displays GitHub repository information for any user.

The tool should show repos, stars, languages, and let users filter or sort results.

This project solidifies real API work with authenticated and unauthenticated requests.

---

## Functional Requirements

Your tool must:

- [ ] Accept a GitHub username as input
- [ ] Fetch all public repositories for that user
- [ ] Display repo name, star count, primary language, and description
- [ ] Sort repositories by stars (descending) by default
- [ ] Show a summary: total repos, total stars, most-used language
- [ ] Handle non-existent usernames with a clear message
- [ ] Handle rate limiting (print a helpful message if 403/429)
- [ ] Optionally load a GitHub token for higher rate limits

---

## API Endpoint

\`\`\`
GET https://api.github.com/users/{username}/repos?per_page=100
\`\`\`

No token required for public data (60 requests/hour limit).
With token: 5,000 requests/hour.

---

## Suggested File Structure

\`\`\`text
github_fetcher/
  main.py
  github_api.py
  display.py
  .env
\`\`\`

---

## Implementation Milestones

1. Make a basic request and print the raw JSON.
2. Extract name, stars, language, description from each repo.
3. Sort by stars descending.
4. Print formatted table output.
5. Compute summary statistics.
6. Add error handling (bad username, rate limit).
7. Add optional GitHub token via environment variable.

---

## Testing Checklist

- [ ] Valid username returns repo list
- [ ] Invalid username prints friendly error
- [ ] Repos sorted by stars correctly
- [ ] Summary stats are accurate
- [ ] Works without a token (rate limit may hit on repeat calls)
- [ ] Works with a token at header

---

## Optional Extensions

- [ ] Filter by language: \`--lang python\`
- [ ] Show only repos updated in the last 30 days
- [ ] Paginate results (GitHub caps at 100 per page)
- [ ] Export results to CSV or JSON

---

## Submission Requirements

Entry file: \`main.py\`

\`\`\`bash
python main.py torvalds
\`\`\`

---

## What This Project Proves

You can work with a real, paginated REST API, handle authentication headers, aggregate and sort data, and build a useful developer tool.
`,

  support: {
    intro: `
Level 1 → Level 2 → Blueprint → Example. Attempt first.
    `.trim(),

    level1Nudges: [
      "What does a single repo object look like in the JSON response?",
      "Which fields do you need from each repo?",
      "How will you sort a list of dicts by star count?",
      "What does GitHub return when the username doesn't exist?",
      "What's the difference between a 403 and a 404 from GitHub?",
    ],

    level2Hints: [
      "Each repo is a dict. Access: repo['name'], repo['stargazers_count'], repo['language'], repo['description'].",
      "Sort with: sorted(repos, key=lambda r: r.get('stargazers_count', 0), reverse=True).",
      "A 404 means user not found. A 403 often means rate limit exceeded.",
      "Pass GitHub token as: headers = {'Authorization': 'Bearer TOKEN'}.",
      "Total stars: sum(r.get('stargazers_count', 0) for r in repos).",
    ],

    blueprint: [
      "In github_api.py: define fetch_repos(username, token=None) → list or None.",
      "Build headers dict. Include Authorization if token provided.",
      "Make GET request to /users/{username}/repos?per_page=100.",
      "Handle 404 (user not found), 403 (rate limited), other errors.",
      "In display.py: define show_repos(repos) to print sorted table.",
      "Define show_summary(repos) to print totals and top language.",
      "In main.py: get username from sys.argv or input, call fetch, display.",
    ],

    debuggingGuide: [
      {
        problem: "I'm getting 403 but my token is set.",
        hint: "Check the Authorization header format: 'Bearer YOUR_TOKEN'. Some older docs say 'token YOUR_TOKEN' — try both.",
      },
      {
        problem: "Description is None for some repos.",
        hint: "Use repo.get('description') or 'No description' to handle None gracefully.",
      },
      {
        problem: "I'm only getting 30 repos but the user has more.",
        hint: "GitHub defaults to 30 per page. Add ?per_page=100 to get more. For 100+, implement pagination.",
      },
    ],

    revealSolutionWarning: `
Reference implementation only. If yours meets the checklist, it's good.
    `.trim(),

    exampleSolution: `import os
import sys
import requests
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.environ.get("GITHUB_TOKEN")


def fetch_repos(username):
    headers = {"Accept": "application/vnd.github.v3+json"}
    if TOKEN:
        headers["Authorization"] = f"Bearer {TOKEN}"
    url = f"https://api.github.com/users/{username}/repos"
    try:
        response = requests.get(url, headers=headers, params={"per_page": 100}, timeout=10)
        if response.status_code == 404:
            print(f"User '{username}' not found.")
            return None
        if response.status_code == 403:
            print("Rate limit exceeded. Set GITHUB_TOKEN for higher limits.")
            return None
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        return None


def show_repos(repos):
    sorted_repos = sorted(repos, key=lambda r: r.get("stargazers_count", 0), reverse=True)
    print(f"\\n{'Name':<35} {'Stars':>6} {'Language':<15} Description")
    print("-" * 80)
    for r in sorted_repos:
        name = r.get("name", "")[:34]
        stars = r.get("stargazers_count", 0)
        lang = r.get("language") or "—"
        desc = (r.get("description") or "")[:40]
        print(f"{name:<35} {stars:>6} {lang:<15} {desc}")


def show_summary(repos):
    total_stars = sum(r.get("stargazers_count", 0) for r in repos)
    languages = [r.get("language") for r in repos if r.get("language")]
    top_lang = max(set(languages), key=languages.count) if languages else "N/A"
    print(f"\\nTotal repos: {len(repos)}, Total stars: {total_stars}, Top language: {top_lang}")


if __name__ == "__main__":
    username = sys.argv[1] if len(sys.argv) > 1 else input("GitHub username: ").strip()
    repos = fetch_repos(username)
    if repos:
        show_repos(repos)
        show_summary(repos)`,

    upgrades: {
      filterBlueprint: [
        "Add --lang argument via argparse.",
        "Filter repos: [r for r in repos if r.get('language','').lower() == lang].",
      ],
      paginationBlueprint: [
        "Check response Link header for 'next' URL.",
        "Loop requests while next page exists.",
        "Accumulate all repos before displaying.",
      ],
    },
  },
};
