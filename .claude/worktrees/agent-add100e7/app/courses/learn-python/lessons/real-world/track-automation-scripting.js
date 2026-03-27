export const trackAutomationScripting = {
  id: "track-automation-scripting",
  title: "Track: Automation & Scripting",

  article: `
## Automation & Scripting

This track is about making computers do repetitive work for you.

File renaming. Log analysis. Report generation. Directory cleanup. Email parsing. Scheduled jobs. Any time a human is doing the same thing over and over, a Python script can replace it — faster, more reliably, without error.

---

## What You'll Build

- Scripts that organize files automatically by type, date, or name pattern
- Tools that process and transform text, CSV, or JSON data
- Scheduled jobs that run on a timer without you being there
- System utilities that interact with the operating system
- Workflow automation that chains programs together with \`subprocess\`

---

## The Core Libraries

\`\`\`text
pathlib      — Modern file and path handling (preferred over os.path)
os / shutil  — OS operations, file moves, copies, deletes
subprocess   — Run shell commands from Python
glob         — File pattern matching
schedule     — Run functions on a repeating timer
watchdog     — React when files or folders change
csv / json   — Parse and produce data files
argparse     — Accept arguments from the terminal
\`\`\`

---

## A Taste of the Work

Rename all \`.txt\` files in a folder to include today's date:

\`\`\`python
from pathlib import Path
from datetime import date

folder = Path("reports")
today = date.today().isoformat()

for file in folder.glob("*.txt"):
    new_name = f"{today}_{file.name}"
    file.rename(folder / new_name)
    print(f"Renamed: {file.name} → {new_name}")
\`\`\`

Run a shell command and capture its output:

\`\`\`python
import subprocess

result = subprocess.run(
    ["git", "log", "--oneline", "-5"],
    capture_output=True,
    text=True
)
print(result.stdout)
\`\`\`

---

## Why This Track Is Valuable

Automation skills pay off immediately. You don't need to deploy anything, learn a framework, or understand networking. You write a script. You run it. Work gets done.

These skills compound: every script you build deepens your understanding of Python, files, the OS, and real-world data. Most professional developers have a personal toolkit of automation scripts. This track is how you start building yours.

---

## Where to Start

1. Pick one repetitive task you currently do manually.
2. Break it into small steps on paper.
3. Write a script for the first step.
4. Run it. Fix it. Extend it.

If you don't have a task in mind yet, start with one of these:

- Organize your Downloads folder by file extension
- Parse a log file and extract every line containing "ERROR"
- Rename a batch of image files to a consistent numbered format
- Generate a weekly summary from a folder of notes

---

## Recommended Path

1. Review the **Files, Data & the Operating System** course if you haven't finished it.
2. Learn \`pathlib\` in depth — it handles most file work cleanly.
3. Explore \`subprocess\` for running other programs from Python.
4. Add \`schedule\` or a cron job for timed execution.
5. Build one real automation that solves a problem you actually have.

---

## What you just learned

- What the Automation & Scripting track covers
- Which libraries you'll use and what each one does
- What kinds of problems this track solves
- Where to start

---

## What comes next

Choose your first project. The capstone section has project briefs to guide you.
`,
};
