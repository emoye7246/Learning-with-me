export const projectDataPipeline = {
  id: "capstone-data-pipeline",
  title: "Capstone: Data Pipeline",

  article: `
## Overview

Build a data pipeline that fetches, cleans, analyzes, and reports on real data from an external source.

A data pipeline is a sequence of steps: raw data comes in one end, and clean, useful output comes out the other. This project combines everything from the APIs & HTTP, Files & Data, and Project Structure courses.

---

## What Makes This Different

This isn't about writing code that works once. It's about building a repeatable pipeline — something you can run today, tomorrow, and next week and get updated results each time.

---

## Project Options

Choose a data source and a question to answer:

- **Weather trends** — fetch daily weather data for a city, compute weekly averages, visualize temperature trends
- **GitHub activity** — fetch commit history or issue counts for a repo, summarize contributor activity
- **Currency exchange rates** — track daily exchange rates over time, identify trends and volatility
- **News headlines** — collect headlines from a public API, classify by topic, count sentiment patterns
- **Sports statistics** — fetch match results from a public API, compute standings, compare team performance

---

## Functional Requirements

Your pipeline must:

- [ ] Fetch data from a real external source (API or downloadable file)
- [ ] Save raw data locally (so you don't re-fetch on every run)
- [ ] Clean the data: handle missing values, fix types, remove duplicates
- [ ] Compute at least 3 meaningful statistics or aggregations
- [ ] Produce a report — either a printed summary, a CSV output, or a chart
- [ ] Be rerunnable: running it again should fetch fresh data and produce an updated report
- [ ] Handle network errors and missing data gracefully

---

## Non-Functional Requirements

- [ ] Code is split across logical modules (fetch, clean, analyze, report)
- [ ] Has a \`requirements.txt\` and a \`README.md\`
- [ ] All credentials (API keys) are stored in environment variables, not in code
- [ ] No crashes on network failure — errors are caught and reported clearly

---

## Suggested Project Structure

\`\`\`text
data-pipeline/
  main.py            ← orchestrates the full pipeline
  fetch.py           ← data fetching and caching
  clean.py           ← data cleaning and validation
  analyze.py         ← statistics and aggregation
  report.py          ← output: print, CSV, or chart
  data/
    raw/             ← cached raw data
    processed/       ← cleaned output
  requirements.txt
  README.md
\`\`\`

---

## Implementation Milestones

1. Identify your data source. Read its documentation. Make one successful API call.
2. Build \`fetch.py\`: fetch data and save it to \`data/raw/\`. Add caching (skip fetch if file is recent).
3. Build \`clean.py\`: load raw data, fix types, drop nulls, normalize formats.
4. Build \`analyze.py\`: compute your statistics from the cleaned data.
5. Build \`report.py\`: format and output the results.
6. Wire everything together in \`main.py\`.
7. Add error handling at every stage (network failure, bad data, empty results).
8. Write the README with setup and usage instructions.

---

## Testing Checklist

- [ ] Run the full pipeline from scratch — it should fetch, clean, analyze, and report without errors
- [ ] Run it a second time — cached data should be used (no redundant API calls)
- [ ] Disconnect from the internet and run — it should use cached data or fail gracefully
- [ ] Verify each statistic is correct by cross-checking against the raw data manually
- [ ] Check that the output report is readable and clearly communicates the findings
- [ ] Confirm API keys are not hardcoded anywhere in the code

---

## Optional Extensions

- [ ] Add a \`--force-refresh\` flag to bypass cache and re-fetch all data
- [ ] Add a chart (matplotlib) to visualize the key findings
- [ ] Schedule it to run daily and append results to a historical record
- [ ] Add a second data source and combine the datasets
- [ ] Export to a formatted Markdown report

---

## Submission Requirements

Entry file: \`main.py\`

Run with:

\`\`\`bash
python main.py
python main.py --force-refresh
\`\`\`

Repository must include \`requirements.txt\`, \`README.md\`, and a sample of output (screenshot or sample report file).

---

## What This Project Proves

You can build a repeatable, production-style data pipeline — not just a one-time script. You understand data fetching, caching, cleaning, analysis, and reporting as distinct concerns with their own modules.
`,

  support: {
    intro: `
Use this support in order.

Start with Level 1 nudges.
Move to Level 2 hints if still stuck.
Use the blueprint to unblock your approach.
    `.trim(),

    level1Nudges: [
      "What specific question will your pipeline answer? Write it out: 'I want to know...'",
      "Where is the data coming from? Have you read the API docs and made a test request?",
      "What does one raw record look like? What fields are in it?",
      "What cleaning does that raw data need — missing values, wrong types, inconsistent formats?",
      "What three statistics will you compute? Can you describe them without code first?",
      "What does the final report look like? Sketch the output before you write the code.",
    ],

    level2Hints: [
      "Save raw data as: Path('data/raw/data.json').write_text(json.dumps(raw, indent=2)). Check if it exists before fetching.",
      "For caching: check if the file exists and is less than N hours old using Path.stat().st_mtime.",
      "In clean.py, load raw JSON into a list of dicts. Use a list comprehension to transform each record. Drop records with missing required fields.",
      "pandas makes aggregation easy: df.groupby('category')['value'].mean(). But plain Python dicts work too.",
      "For the report, print a formatted table with rich or write a CSV with the csv module.",
      "Store API keys in .env and load them with python-dotenv: load_dotenv(); key = os.getenv('API_KEY').",
    ],

    blueprint: [
      "Make one successful API call. Print the raw response. Understand its structure.",
      "Build fetch.py: fetch_data() returns parsed JSON. Add cache check: if raw file exists and is recent, load from file instead.",
      "Build clean.py: clean_data(raw) takes a list of raw records, returns a list of cleaned dicts with correct types and no nulls.",
      "Build analyze.py: compute_stats(clean) returns a dict of your three statistics.",
      "Build report.py: print_report(stats) formats and prints the results clearly.",
      "Build main.py: call fetch → clean → analyze → report in sequence. Add error handling around each step.",
      "Add --force-refresh CLI flag using argparse to bypass cache.",
      "Write README: what the pipeline does, data source, how to set up the API key, how to run.",
    ],

    debuggingGuide: [
      {
        problem: "API returns 401 Unauthorized.",
        hint: "Your API key is missing or wrong. Confirm it's loaded from the environment variable, not hardcoded. Print os.getenv('API_KEY') temporarily to verify.",
      },
      {
        problem: "Cache is never used — it always re-fetches.",
        hint: "Check your cache logic. The file must exist AND be recent. Print the file's modification time and compare it to the current time.",
      },
      {
        problem: "Statistics are wrong or zero.",
        hint: "Add a print statement in clean.py to inspect the cleaned records. Confirm the data types are what you expect — strings won't sum correctly.",
      },
      {
        problem: "Pipeline crashes on missing data mid-run.",
        hint: "Add try/except around each stage in main.py. Log the error and exit cleanly instead of letting it propagate.",
      },
    ],

    revealSolutionWarning: `
This capstone has no example solution.

Every data pipeline is different depending on the data source and the questions you're answering. Use the blueprint as a structure, not a script.
    `.trim(),
  },
};
