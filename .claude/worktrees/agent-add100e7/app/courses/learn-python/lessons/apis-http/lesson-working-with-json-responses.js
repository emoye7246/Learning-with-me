export const lessonWorkingWithJsonResponses = {
  id: "working-with-json-responses",
  title: "Working with JSON Responses",

  article: `
## Working with JSON Responses

Most APIs return JSON. Your job is to navigate that data and extract what you need.

JSON responses can be nested, inconsistent, and missing fields. Knowing how to handle that is a real skill.

---

## The Basics: .json()

\`\`\`python
import requests

response = requests.get("https://api.github.com/users/torvalds")
data = response.json()   # dict

print(type(data))        # <class 'dict'>
print(data["name"])      # Linus Torvalds
\`\`\`

\`response.json()\` parses the response body from a JSON string into Python objects.

---

## List Responses

Sometimes the API returns a list.

\`\`\`python
response = requests.get("https://jsonplaceholder.typicode.com/posts")
posts = response.json()   # list of dicts

print(len(posts))         # 100
print(posts[0]["title"])  # title of first post
\`\`\`

---

## Nested Data

\`\`\`python
response = requests.get("https://api.github.com/repos/python/cpython")
repo = response.json()

# Nested access
print(repo["owner"]["login"])     # python
print(repo["license"]["name"])    # Python Software Foundation License 2.0
\`\`\`

Chain bracket access for nested dicts.

---

## Safe Access with .get()

API fields aren't always guaranteed to exist.

\`\`\`python
bio = data.get("bio", "No bio available")
location = data.get("location", "Unknown")
\`\`\`

\`.get(key, default)\` returns the default if the key is missing. Never crashes.

---

## Iterating Over List Responses

\`\`\`python
response = requests.get("https://jsonplaceholder.typicode.com/users")
users = response.json()

for user in users:
    name = user.get("name", "Unknown")
    email = user.get("email", "No email")
    print(f"{name} — {email}")
\`\`\`

---

## Filtering Results

\`\`\`python
response = requests.get("https://jsonplaceholder.typicode.com/posts")
posts = response.json()

# Only posts by userId 1
user_posts = [p for p in posts if p["userId"] == 1]
print(len(user_posts))  # 10
\`\`\`

---

## Handling Bad JSON

\`\`\`python
import json

try:
    data = response.json()
except json.JSONDecodeError:
    print("Response was not valid JSON.")
    print(response.text)
\`\`\`

API servers sometimes return HTML error pages or plain text for errors. Don't assume JSON.

---

## Extracting Specific Fields

\`\`\`python
def extract_summary(repo):
    return {
        "name": repo.get("full_name"),
        "stars": repo.get("stargazers_count", 0),
        "language": repo.get("language", "Unknown"),
        "url": repo.get("html_url"),
    }
\`\`\`

Extract only what you need. Don't drag the full response object through your code.

---

## Try this

1. Fetch \`https://jsonplaceholder.typicode.com/todos\`.
2. Count how many are completed vs incomplete.
3. Fetch \`https://jsonplaceholder.typicode.com/users\`.
4. Print each user's name, email, and city (from the \`address\` nested object).

---

## What you just learned

- How to access top-level and nested JSON fields
- How to use \`.get()\` for safe access
- How to filter and extract from list responses
- How to handle invalid JSON gracefully

---

## What comes next

Next lesson: **Reading API Documentation**
`,
};
