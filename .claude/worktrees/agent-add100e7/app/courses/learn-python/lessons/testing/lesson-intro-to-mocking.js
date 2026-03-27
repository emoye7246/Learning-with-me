export const lessonIntroToMocking = {
  id: "intro-to-mocking",
  title: "Intro to Mocking",

  article: `
## Intro to Mocking

Some code is hard to test directly.

Code that calls APIs. Code that reads files. Code that sends emails. Code that talks to a database.

Mocking lets you replace those external dependencies with controlled fakes during tests.

---

## Why Mock?

Real API calls in tests are slow, unreliable, and might cost money.

A mock says: "Pretend this function returned X. Now test how my code handles X."

Your tests become fast, deterministic, and isolated.

---

## unittest.mock

Python's built-in mocking library.

\`\`\`python
from unittest.mock import MagicMock, patch
\`\`\`

---

## MagicMock

\`MagicMock\` is an object that accepts any method call and returns a mock result.

\`\`\`python
from unittest.mock import MagicMock

mock_api = MagicMock()
mock_api.get_weather.return_value = {"temp": 22, "humidity": 60}

result = mock_api.get_weather("London")
print(result)   # {"temp": 22, "humidity": 60}
\`\`\`

---

## Patching a Function

Replace a real function with a mock during a test.

\`\`\`python
# weather.py
import requests

def get_temp(city):
    response = requests.get(f"https://api.example.com/weather?city={city}")
    return response.json()["temp"]
\`\`\`

\`\`\`python
# test_weather.py
from unittest.mock import patch
from weather import get_temp

def test_get_temp(mocker):
    with patch("weather.requests.get") as mock_get:
        mock_get.return_value.json.return_value = {"temp": 22}
        result = get_temp("London")
        assert result == 22
\`\`\`

\`patch("weather.requests.get")\` replaces \`requests.get\` inside the \`weather\` module — only during this test.

---

## Using pytest-mock (Simpler Syntax)

\`\`\`bash
pip install pytest-mock
\`\`\`

\`\`\`python
def test_get_temp(mocker):
    mock_get = mocker.patch("weather.requests.get")
    mock_get.return_value.json.return_value = {"temp": 22}

    result = get_temp("London")
    assert result == 22
\`\`\`

\`mocker\` is a fixture from pytest-mock. Cleaner than \`with patch()\`.

---

## Asserting Mock Was Called

\`\`\`python
def test_api_called_with_correct_city(mocker):
    mock_get = mocker.patch("weather.requests.get")
    mock_get.return_value.json.return_value = {"temp": 15}

    get_temp("Tokyo")

    mock_get.assert_called_once()
    mock_get.assert_called_with(
        "https://api.example.com/weather?city=Tokyo"
    )
\`\`\`

---

## Mocking Exceptions

\`\`\`python
def test_handles_connection_error(mocker):
    import requests
    mocker.patch("weather.requests.get", side_effect=requests.exceptions.ConnectionError)

    result = get_temp("London")
    assert result is None   # assuming get_temp returns None on failure
\`\`\`

---

## What to Mock and What Not To

**Mock:**
- External API calls
- Database queries
- File system reads (sometimes)
- Email or SMS sending
- Time-dependent code (\`datetime.now()\`)

**Don't mock:**
- Your own pure functions
- Simple data transformations
- Anything you're directly testing

---

## Try this

1. Write a function that calls an API and returns a field from the response.
2. Write a test that mocks the API call and verifies your function handles the response correctly.
3. Write a test where the API raises a \`ConnectionError\` — verify your function handles it.

---

## What you just learned

- Why mocking is needed for external dependencies
- How to use MagicMock and patch
- How to assert that mocks were called correctly
- What to mock and what not to

---

## What comes next

Next project: **Test Suite for Your CLI App**
`,
};
