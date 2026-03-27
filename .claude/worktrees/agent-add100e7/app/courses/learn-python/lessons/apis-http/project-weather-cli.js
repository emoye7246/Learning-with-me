export const projectWeatherCli = {
  id: "project-weather-cli",
  title: "Project: Weather CLI App",

  article: `
## Overview

Build a command-line weather app that fetches real weather data from an API.

The user passes a city name. The app returns current temperature, humidity, conditions, and wind speed.

This project proves you can connect Python to live external data.

---

## Functional Requirements

Your app must:

- [ ] Accept a city name from the command line or via \`input()\`
- [ ] Call the OpenWeatherMap API (or Open-Meteo for a keyless option)
- [ ] Display temperature (in Celsius or Fahrenheit — your choice)
- [ ] Display humidity percentage
- [ ] Display weather description (e.g. "light rain", "clear sky")
- [ ] Display wind speed
- [ ] Handle invalid city names gracefully (404 from API)
- [ ] Handle no internet connection gracefully
- [ ] Load the API key from an environment variable

---

## API Options

**OpenWeatherMap (requires free API key):**
\`\`\`
https://api.openweathermap.org/data/2.5/weather?q=London&appid=KEY&units=metric
\`\`\`

**Open-Meteo (no key required — uses lat/lon):**
First geocode the city name, then fetch weather. More steps, but no signup.

Start with OpenWeatherMap unless you prefer keyless.

---

## Suggested File Structure

\`\`\`text
weather_cli/
  main.py       ← entry point
  weather.py    ← API calls and data extraction
  display.py    ← formatting and output
  .env          ← API key (not committed)
\`\`\`

---

## Implementation Milestones

1. Set up virtual environment. Install \`requests\` and \`python-dotenv\`.
2. Load API key from \`.env\`.
3. Make a raw API call and print the full JSON response.
4. Extract and print the fields you need.
5. Add error handling (bad city, timeout, no connection).
6. Format the output cleanly.
7. Accept city as command-line argument with \`sys.argv\` or \`input()\`.

---

## Testing Checklist

- [ ] Valid city returns correct weather data
- [ ] Invalid city name gives a clear message (not a crash)
- [ ] No internet gives a clear message (not a crash)
- [ ] API key missing gives a clear message at startup
- [ ] Output is formatted and readable
- [ ] Temperature units are consistent

---

## Optional Extensions

- [ ] Support multiple cities in one run
- [ ] Show a 5-day forecast (different endpoint)
- [ ] Add \`--units\` flag for metric vs imperial
- [ ] Color-code output using \`rich\` or \`colorama\`

---

## Submission Requirements

Entry file: \`main.py\`

Run with:

\`\`\`bash
python main.py London
\`\`\`

Or with input prompt:

\`\`\`bash
python main.py
Enter city: London
\`\`\`

---

## What This Project Proves

You can integrate a real external API, handle authentication, parse JSON responses, and build a polished CLI tool.
`,

  support: {
    intro: `
Use this support in order.

Level 1 → Level 2 → Blueprint → Example.
Attempt your own version before reading the example.
    `.trim(),

    level1Nudges: [
      "What does the raw JSON response from the API look like? Print it first.",
      "Which keys contain the temperature, humidity, and description?",
      "What does the API return when the city name is invalid?",
      "How will you load the API key without hardcoding it?",
      "What happens if requests.get() itself throws an exception?",
    ],

    level2Hints: [
      "The weather description is at data['weather'][0]['description'].",
      "Temperature is at data['main']['temp'], humidity at data['main']['humidity'].",
      "A 404 status code means city not found. Check response.status_code before calling .json().",
      "Use os.environ.get('OPENWEATHER_API_KEY') after calling load_dotenv().",
      "Wrap the requests call in try/except for ConnectionError and Timeout.",
    ],

    blueprint: [
      "Install requests and python-dotenv. Create .env with your key.",
      "In weather.py: define get_weather(city) that calls the API and returns data dict.",
      "Handle HTTPError (404) and RequestException inside get_weather().",
      "In display.py: define show_weather(data) that prints formatted output.",
      "In main.py: load dotenv, get city from sys.argv or input(), call get_weather, call show_weather.",
      "Add a guard: if API key not found, print error and exit early.",
    ],

    debuggingGuide: [
      {
        problem: "I get a 401 Unauthorized error.",
        hint: "Your API key is wrong or not loaded. Print os.environ.get('OPENWEATHER_API_KEY') to check.",
      },
      {
        problem: "response.json() raises an error.",
        hint: "Check response.status_code first. If it's not 200, the body might not be JSON.",
      },
      {
        problem: "City name with spaces doesn't work in the URL.",
        hint: "Pass city as a query parameter dict, not string-embedded. requests handles encoding.",
      },
    ],

    revealSolutionWarning: `
This is one implementation. If yours meets the checklist, it's valid.
Read this to compare structure, not as the only correct answer.
    `.trim(),

    exampleSolution: `import os
import sys
import requests
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.environ.get("OPENWEATHER_API_KEY")

if not API_KEY:
    print("Error: OPENWEATHER_API_KEY not set.")
    sys.exit(1)


def get_weather(city):
    params = {"q": city, "appid": API_KEY, "units": "metric"}
    try:
        response = requests.get(
            "https://api.openweathermap.org/data/2.5/weather",
            params=params,
            timeout=10,
        )
        if response.status_code == 404:
            print(f"City not found: {city}")
            return None
        response.raise_for_status()
        return response.json()
    except requests.exceptions.ConnectionError:
        print("No internet connection.")
    except requests.exceptions.Timeout:
        print("Request timed out.")
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
    return None


def show_weather(data):
    name = data.get("name", "Unknown")
    temp = data["main"]["temp"]
    humidity = data["main"]["humidity"]
    description = data["weather"][0]["description"].capitalize()
    wind = data["wind"]["speed"]
    print(f"\\nWeather in {name}")
    print(f"  {description}")
    print(f"  Temp:     {temp}°C")
    print(f"  Humidity: {humidity}%")
    print(f"  Wind:     {wind} m/s")


if __name__ == "__main__":
    city = sys.argv[1] if len(sys.argv) > 1 else input("Enter city: ").strip()
    data = get_weather(city)
    if data:
        show_weather(data)`,

    upgrades: {
      forecastBlueprint: [
        "Use the /forecast endpoint for 5-day data.",
        "Parse the list of forecast entries.",
        "Show min/max temp for each day.",
      ],
      richOutputBlueprint: [
        "pip install rich.",
        "Use rich.console.Console() for colored output.",
        "Use weather emojis based on description keywords.",
      ],
    },
  },
};
