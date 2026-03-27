export const lessonRequestsLibrary = {
  id: "requests-library",
  title: "The requests Library",

  article: `
## The requests Library

Python's standard library has \`urllib\`, but it's verbose and awkward.

\`requests\` is the de facto standard. Clean, readable, powerful.

---

## Installing

\`\`\`bash
pip install requests
\`\`\`

---

## Making a GET Request

\`\`\`python
import requests

response = requests.get("https://api.github.com/users/torvalds")

print(response.status_code)   # 200
print(response.json())        # dict with user data
\`\`\`

That's the core pattern.

---

## Working with the Response

\`\`\`python
response = requests.get("https://api.github.com/users/torvalds")

# Status code
print(response.status_code)    # 200

# Response body as text
print(response.text)

# Response body as parsed JSON (dict or list)
data = response.json()
print(data["name"])            # Linus Torvalds
print(data["public_repos"])    # some number
\`\`\`

---

## Query Parameters

Pass as a dict. requests encodes the URL automatically.

\`\`\`python
params = {
    "q": "python",
    "sort": "stars",
    "per_page": 5,
}

response = requests.get(
    "https://api.github.com/search/repositories",
    params=params,
)

data = response.json()
for repo in data["items"]:
    print(repo["full_name"], repo["stargazers_count"])
\`\`\`

---

## Custom Headers

\`\`\`python
headers = {
    "Authorization": "Bearer YOUR_TOKEN",
    "Accept": "application/json",
}

response = requests.get("https://api.github.com/user", headers=headers)
\`\`\`

---

## POST Requests

Send JSON in the body:

\`\`\`python
payload = {"name": "new-repo", "private": False}

response = requests.post(
    "https://api.github.com/user/repos",
    json=payload,
    headers={"Authorization": "Bearer YOUR_TOKEN"},
)

print(response.status_code)   # 201
\`\`\`

Using \`json=payload\` automatically sets \`Content-Type: application/json\`.

---

## Timeouts

Always set a timeout. Networks fail.

\`\`\`python
response = requests.get("https://api.example.com/data", timeout=10)
\`\`\`

\`timeout=10\` means: wait up to 10 seconds. After that, raise a \`Timeout\` exception.

Without a timeout, your script can hang forever.

---

## Checking Success

\`\`\`python
response = requests.get("https://api.example.com/data")

if response.status_code == 200:
    data = response.json()
else:
    print(f"Error: {response.status_code}")
    print(response.text)
\`\`\`

Or use \`response.raise_for_status()\` to throw an exception on 4xx/5xx:

\`\`\`python
response = requests.get("https://api.example.com/data")
response.raise_for_status()   # raises HTTPError if status >= 400
data = response.json()
\`\`\`

---

## Common Mistakes

- Forgetting to install requests (it's not in the standard library).
- Not checking the status code before calling \`.json()\`.
- Not setting a timeout — scripts can hang indefinitely.
- Printing the raw response object instead of \`.text\` or \`.json()\`.

---

## Try this

1. Fetch your GitHub profile: \`https://api.github.com/users/YOUR_USERNAME\`.
2. Print your follower count, public repo count, and bio.
3. Fetch JSON placeholder posts: \`https://jsonplaceholder.typicode.com/posts\`.
4. Print the titles of the first 5 posts.

---

## What you just learned

- How to install and use the requests library
- How to make GET and POST requests
- How to pass query parameters and headers
- How to handle responses and errors

---

## What comes next

Next lesson: **Working with JSON Responses**
`,
};
