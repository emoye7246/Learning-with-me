export const lessonAuthenticationApiKeys = {
  id: "authentication-api-keys",
  title: "Authentication & API Keys",

  article: `
## Authentication & API Keys

Most useful APIs require authentication.

An API key proves who you are. It lets the server track usage, enforce limits, and control access.

---

## What is an API Key?

A long string that uniquely identifies you (or your app).

\`\`\`
sk-abc123def456...
\`\`\`

Guard it like a password. Anyone who has it can make requests on your behalf.

---

## How Keys Are Passed

**Query parameter:**

\`\`\`python
params = {
    "q": "London",
    "appid": "YOUR_API_KEY",
    "units": "metric",
}
response = requests.get("https://api.openweathermap.org/data/2.5/weather", params=params)
\`\`\`

**Authorization header (most common):**

\`\`\`python
headers = {"Authorization": "Bearer YOUR_API_KEY"}
response = requests.get("https://api.github.com/user", headers=headers)
\`\`\`

**Custom header:**

\`\`\`python
headers = {"X-API-Key": "YOUR_API_KEY"}
response = requests.get("https://api.example.com/data", headers=headers)
\`\`\`

The API docs tell you which style to use.

---

## Never Hardcode Keys in Code

\`\`\`python
# DON'T do this
API_KEY = "sk-abc123def456"   # hardcoded = danger
\`\`\`

If you commit this to GitHub, it's exposed. Bots scan for leaked keys constantly.

---

## Use Environment Variables

\`\`\`python
import os

API_KEY = os.environ.get("OPENWEATHER_API_KEY")
if not API_KEY:
    raise ValueError("OPENWEATHER_API_KEY environment variable not set.")
\`\`\`

Set it in your shell before running:

\`\`\`bash
export OPENWEATHER_API_KEY=your_key_here
python main.py
\`\`\`

---

## Using python-dotenv

For local development, store keys in a \`.env\` file.

Install:

\`\`\`bash
pip install python-dotenv
\`\`\`

Create \`.env\`:

\`\`\`text
OPENWEATHER_API_KEY=your_key_here
GITHUB_TOKEN=your_token_here
\`\`\`

Load in code:

\`\`\`python
from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.environ.get("OPENWEATHER_API_KEY")
\`\`\`

Add \`.env\` to \`.gitignore\`:

\`\`\`text
.env
\`\`\`

---

## Getting API Keys

Most APIs require a free account signup.

- **OpenWeatherMap**: openweathermap.org → Sign Up → API Keys
- **GitHub**: Settings → Developer Settings → Personal Access Tokens
- **NewsAPI**: newsapi.org
- **CoinGecko**: No key needed for basic endpoints

Start with APIs that don't require keys while learning.

---

## Common Mistakes

- Committing \`.env\` to Git.
- Using the same API key for development and production.
- Not rotating keys after they're accidentally exposed.
- Not checking if the key loaded successfully before using it.

---

## Try this

1. Sign up for an OpenWeatherMap account.
2. Get your API key.
3. Store it in a \`.env\` file.
4. Load it with \`python-dotenv\`.
5. Make a request to fetch weather for your city.
6. Confirm your \`.env\` is in \`.gitignore\`.

---

## What you just learned

- What API keys are and how they're passed in requests
- Why you never hardcode keys
- How to use environment variables
- How python-dotenv simplifies local development

---

## What comes next

Next lesson: **Error Handling for Network Requests**
`,
};
