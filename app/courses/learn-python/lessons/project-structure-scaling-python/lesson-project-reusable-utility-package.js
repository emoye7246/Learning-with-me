export const projectReusableUtilityPackage = {
  id: "project-reusable-utility-package",
  title: "Project: Reusable Utility Package",

  article: `
## Overview

Build a small Python package with reusable utilities.

The package should be useful in multiple scripts, not locked to one app.

This project teaches a key transition:

from "code that works once"
to "code that is dependable across contexts."

---

## Why This Project Matters

Reusable utility packages are common in real teams.

They reduce duplicated logic and make behavior consistent across tools.

When designed well, they save time every week.

When designed poorly, they become confusing and risky.

This project helps you build the good version.

---

## Functional Requirements

Your package must:

- [ ] Contain at least 3 focused utility modules
- [ ] Expose clear import paths
- [ ] Include docstrings for core functions
- [ ] Be used by at least 2 separate scripts
- [ ] Handle edge cases without crashing

---

## Suggested Utility Themes

Choose one theme:

- text processing
- date/time formatting
- file/path helpers
- simple data validation

Keep scope small, quality high.

---

## Suggested Structure

\`\`\`text
tools/
  myutils/
    __init__.py
    text.py
    validation.py
    files.py
  script_a.py
  script_b.py
\`\`\`

Example usage:

\`\`\`python
from myutils.text import normalize_spaces
from myutils.validation import is_email
\`\`\`

---

## Build Strategy (Recommended)

Start narrow.

Do not build a giant "everything utilities" package.

Pick one domain and make it clean:

- text cleanup
- file path helpers
- validation helpers
- date formatting helpers

Quality and clarity matter more than quantity.

---

## Milestones

1. Pick a focused utility theme.
2. Implement 3-5 utility functions.
3. Add docstrings and clear names.
4. Use utilities in two independent scripts.
5. Refine API names for readability.

---

## API Design Self-Check

Before finishing, verify:

- Would another developer understand function behavior from names alone?
- Are inputs/outputs explicit and predictable?
- Do utilities avoid app-specific assumptions?
- Can each function be tested independently?

If not, simplify before adding more functions.

---

## Quality Checklist

- [ ] Function names are specific and intention-revealing
- [ ] Inputs and return values are consistent
- [ ] No terminal \`input()/print()\` inside utilities
- [ ] Functions are easily testable in isolation
- [ ] Two scripts successfully reuse the same package
`,

  support: {
    intro: `
Treat this like a mini internal library your future self and teammates will rely on.
Optimize for clarity, not cleverness.
    `.trim(),

    level1Nudges: [
      "Which functions would you want available across many projects?",
      "Are your function names specific enough to understand without opening code?",
      "Can each utility run without relying on global state?",
      "Do two scripts use the package in clearly different ways?",
      "Are edge cases documented and handled predictably?",
    ],

    level2Hints: [
      "Use one module per domain: text, validation, files.",
      "Keep each utility function small and side-effect light.",
      "Write docstrings with expected input and return behavior.",
      "Avoid packing unrelated helpers into one generic module.",
      "If an API name feels ambiguous, rename before expanding usage.",
    ],

    blueprint: [
      "Choose a narrow utility domain.",
      "Create package folder and modules with clear roles.",
      "Implement and document core functions.",
      "Build two scripts that import and use the package.",
      "Refactor API names and boundaries for long-term readability.",
    ],

    debuggingGuide: [
      {
        problem: "Import path errors in scripts.",
        hint: "Confirm package structure and import from module paths explicitly.",
      },
      {
        problem: "Utilities are hard to reuse.",
        hint: "Remove UI or app-specific assumptions from utility functions.",
      },
      {
        problem: "Functions do too many things.",
        hint: "Split into focused single-purpose helpers.",
      },
    ],
  },
};
