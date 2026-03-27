export const lessonErrorHandlingNetworkRequests = {
  id: "error-handling-network-requests",
  title: "Error Handling for Network Requests",

  article: `
## Error Handling for Network Requests

Network code fails. Often.

Connections time out. Servers return errors. JSON is malformed. Rate limits hit. The API is down.

Robust network code handles all of this without crashing.

---

## The Failure Modes

1. **No internet / server unreachable** → \`ConnectionError\`
2. **Request times out** → \`Timeout\`
3. **Server returns 4xx/5xx** → bad status code
4. **Response isn't JSON** → \`JSONDecodeError\`
5. **Expected field is missing** → \`KeyError\`

---

## Always Set a Timeout

\`\`\`python
response = requests.get("https://api.example.com/data", timeout=10)
\`\`\`

Without this, a hanging server will hang your script forever.

---

## Catching requests Exceptions

\`\`\`python
import requests

try:
    response = requests.get("https://api.example.com/data", timeout=10)
    response.raise_for_status()
    data = response.json()
except requests.exceptions.ConnectionError:
    print("Could not connect. Check your internet.")
except requests.exceptions.Timeout:
    print("Request timed out.")
except requests.exceptions.HTTPError as e:
    print(f"HTTP error: {e.response.status_code}")
except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")
\`\`\`

\`requests.exceptions.RequestException\` is the base class — catch it last to handle anything else.

---

## raise_for_status()

\`\`\`python
response = requests.get("https://api.example.com/data")
response.raise_for_status()   # raises HTTPError if 4xx or 5xx
\`\`\`

Clean and automatic. Replaces manual status code checks.

---

## Handling JSON Parse Errors

\`\`\`python
import json

try:
    data = response.json()
except json.JSONDecodeError:
    print("Invalid JSON response.")
    print(response.text)
\`\`\`

APIs sometimes return HTML error pages. Don't assume the response is JSON.

---

## Retry Logic

For transient failures, retry with a delay.

\`\`\`python
import time

def fetch_with_retry(url, retries=3, delay=2):
    for attempt in range(retries):
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt < retries - 1:
                time.sleep(delay)
    return None

data = fetch_with_retry("https://api.example.com/data")
\`\`\`

---

## Safe Field Access

Even when the request succeeds, expected fields might be missing.

\`\`\`python
data = response.json()
temp = data.get("main", {}).get("temp", "N/A")
city = data.get("name", "Unknown")
\`\`\`

Chain \`.get()\` calls for nested access without crashes.

---

## A Robust Request Function

\`\`\`python
import requests
import json

def safe_get(url, params=None, headers=None, timeout=10):
    try:
        response = requests.get(url, params=params, headers=headers, timeout=timeout)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.Timeout:
        print(f"Timeout hitting {url}")
    except requests.exceptions.ConnectionError:
        print(f"Connection error for {url}")
    except requests.exceptions.HTTPError as e:
        print(f"HTTP {e.response.status_code} from {url}")
    except json.JSONDecodeError:
        print(f"Non-JSON response from {url}")
    return None
\`\`\`

Use a wrapper like this for all your API calls.

---

## What you just learned

- The failure modes in network requests
- How to catch specific requests exceptions
- How \`raise_for_status()\` simplifies error detection
- How to build retry logic and safe request wrappers

---

## What comes next

Next project: **Weather CLI App**
`,
};
