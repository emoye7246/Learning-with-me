export const projectAutomationSuite = {
  id: "capstone-automation-suite",
  title: "Capstone: Automation Suite",

  article: `
## Overview

Build a suite of related automation scripts that work together to solve a real, recurring problem.

This isn't one script. It's a collection of tools that share utilities, a common configuration, and a consistent interface. Think of it as your personal automation toolkit for a specific domain.

---

## What Makes This Different

Single scripts are useful. A coherent suite is professional.

Your automation suite should feel like it belongs together — shared code, consistent output style, a single config file, and a \`README.md\` that explains how to use each script. Someone else should be able to clone it and run it with minimal setup.

---

## Project Options

Choose one domain (or propose your own with similar scope):

- **File organization suite** — organize by type, remove duplicates, archive old files, generate a report
- **Development environment setup** — check dependencies, initialize project structure, set up git hooks, generate configs
- **Data ingestion pipeline** — download files from a source, validate them, transform format, archive originals
- **Log management suite** — collect logs from multiple locations, filter errors, generate daily summary, rotate old logs
- **Content management scripts** — rename media files, resize images, generate thumbnails, build an index

---

## Functional Requirements

Your suite must:

- [ ] Include at least 3 distinct scripts that work toward a common goal
- [ ] Share a common utilities module (don't repeat yourself across scripts)
- [ ] Read from a shared config file (\`config.json\` or \`config.toml\`)
- [ ] Produce consistent, readable output (status messages, summaries)
- [ ] Be idempotent — running a script twice shouldn't cause errors or duplicate work
- [ ] Log what was done to a log file
- [ ] Handle missing files, empty directories, and bad input without crashing

---

## Non-Functional Requirements

- [ ] Runs from the terminal with clear command syntax
- [ ] Has a \`README.md\` with setup instructions and usage for each script
- [ ] All scripts importable as modules (no bare code at module level)
- [ ] Has \`requirements.txt\` if any third-party packages are used

---

## Suggested Project Structure

\`\`\`text
automation-suite/
  config.json          ← shared configuration
  utils.py             ← shared utility functions
  scripts/
    organize.py        ← script 1
    report.py          ← script 2
    archive.py         ← script 3
  logs/
    run.log            ← generated log file
  requirements.txt
  README.md
\`\`\`

---

## Implementation Milestones

1. Define the problem and the three scripts needed to solve it.
2. Create the config file with the settings each script will need.
3. Build the shared \`utils.py\` with common functions (logging, config loading, path helpers).
4. Implement script 1 end-to-end. Test it thoroughly.
5. Implement scripts 2 and 3, reusing utils.
6. Add a log file — write a timestamped entry after each operation.
7. Test each script on fresh input, then test idempotency (run again, nothing breaks).
8. Write the README.

---

## Testing Checklist

- [ ] Run each script against real input and verify the output is correct
- [ ] Run each script a second time (idempotency) — should succeed with no duplicated work
- [ ] Delete the config file and confirm a clear error message is shown
- [ ] Pass an invalid path to each script and confirm it handles it gracefully
- [ ] Check that the log file contains a clear record of what each run did
- [ ] Give the repo to someone else (or a fresh machine) and confirm it works with the README

---

## Optional Extensions

- [ ] Add a \`run_all.py\` that runs all scripts in order
- [ ] Add a \`--dry-run\` flag that shows what would happen without making changes
- [ ] Add email or desktop notification when a run completes
- [ ] Schedule execution with cron or the \`schedule\` library
- [ ] Add stats tracking (files processed, bytes saved, errors encountered)

---

## Submission Requirements

Entry: run individual scripts from the \`scripts/\` directory

Run with:

\`\`\`bash
python scripts/organize.py
python scripts/report.py --output summary.txt
python scripts/archive.py --older-than 30
\`\`\`

Repository must include \`config.json\`, \`requirements.txt\`, and \`README.md\`.

---

## What This Project Proves

You can design a system of cooperating scripts — not just a one-off file. You understand shared utilities, configuration, logging, and idempotency, which are the foundations of production-grade automation.
`,

  support: {
    intro: `
Use this support in order.

Start with Level 1 nudges.
Move to Level 2 hints if still stuck.
Use the blueprint to unblock your approach.
    `.trim(),

    level1Nudges: [
      "What specific, real problem will your suite solve? Write it in one sentence.",
      "What are the three discrete tasks that make up that problem? Each task becomes a script.",
      "What data and settings will all three scripts need? That's your config file.",
      "What operations appear in more than one script? Those belong in utils.py.",
      "How will you know if a script has already processed a file? How will you skip it on a second run?",
      "What does 'success' look like after running the full suite? What will be different?",
    ],

    level2Hints: [
      "Load config with: config = json.loads(Path('config.json').read_text()). Wrap in a function in utils.py.",
      "For idempotency, track processed files in a state file (JSON) or check output files before creating them.",
      "Use Python's logging module: logging.basicConfig(filename='logs/run.log', level=logging.INFO). Call logging.info() in each script.",
      "In utils.py, define a setup_logging() function and call it at the top of each script.",
      "Use if __name__ == '__main__': guards in every script so they can be imported as modules.",
      "Use argparse for per-script flags. Keep the interface consistent across scripts.",
    ],

    blueprint: [
      "Define the problem and the three scripts. Write what each script inputs and outputs.",
      "Create config.json with all shared settings (paths, options, thresholds).",
      "Create utils.py with: load_config(), setup_logging(), and any shared path/file helpers.",
      "Implement script 1. Import from utils. Test fully before moving on.",
      "Implement script 2 and script 3, importing shared utilities.",
      "Add logging to each script: log every significant action and every error.",
      "Add idempotency: check before overwriting, skip already-processed items.",
      "Write README.md: what the suite does, how to configure it, how to run each script.",
    ],

    debuggingGuide: [
      {
        problem: "Scripts work independently but fail when run together.",
        hint: "Check for shared mutable state or file conflicts. Each script should be self-contained — reading from config, writing to its designated output location.",
      },
      {
        problem: "Running a script twice causes duplicates or errors.",
        hint: "Add an existence check before creating files or records. If output already exists, skip and log 'already processed'.",
      },
      {
        problem: "Config values are wrong in one script but correct in another.",
        hint: "Make sure all scripts call the same load_config() from utils.py. Don't hardcode paths or values in individual scripts.",
      },
    ],

    revealSolutionWarning: `
This capstone has no example solution.

The point is for you to design the system. Use the blueprint to structure your approach, but the specific implementation is yours to figure out.
    `.trim(),
  },
};
