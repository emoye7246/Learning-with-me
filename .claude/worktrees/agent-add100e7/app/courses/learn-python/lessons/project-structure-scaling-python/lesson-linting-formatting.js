export const lessonLintingFormatting = {
  id: "linting-formatting",
  title: "Intro to Linting & Formatting (ruff, black)",

  article: `
## Intro to Linting & Formatting

Code style isn't about aesthetics. It's about readability and catching bugs before they ship.

Two tools handle this for Python: **ruff** (linting) and **black** (formatting).

---

## What is Linting?

Linting finds potential problems in your code without running it.

- Unused variables
- Missing imports
- Calling undefined names
- Style violations
- Security patterns

A linter is a fast, automated code reviewer.

---

## What is Formatting?

A formatter automatically rewrites your code to follow a consistent style.

No more debates about quote style, line length, or spacing. The formatter decides. Everyone follows.

---

## ruff: The Fast Linter

ruff is written in Rust. It's extremely fast — 10-100x faster than older tools.

Install:

\`\`\`bash
pip install ruff
\`\`\`

Run:

\`\`\`bash
ruff check .
\`\`\`

Fix automatically:

\`\`\`bash
ruff check --fix .
\`\`\`

Sample output:

\`\`\`
main.py:5:1: F401 [*] 'os' imported but unused
main.py:12:9: E711 Comparison to None (use 'is None')
\`\`\`

---

## black: The Uncompromising Formatter

black formats your code. You don't configure it. That's the point.

Install:

\`\`\`bash
pip install black
\`\`\`

Format a file:

\`\`\`bash
black main.py
\`\`\`

Format entire project:

\`\`\`bash
black .
\`\`\`

Before:

\`\`\`python
def greet( name,greeting="Hello" ):
    return greeting+"  "+name
\`\`\`

After black:

\`\`\`python
def greet(name, greeting="Hello"):
    return greeting + "  " + name
\`\`\`

---

## ruff Can Also Format

ruff 0.1+ includes a formatter compatible with black.

\`\`\`bash
ruff format .
\`\`\`

You can use ruff for both linting and formatting — one tool, two jobs.

---

## Configuring in pyproject.toml

\`\`\`toml
[tool.ruff]
line-length = 88
select = ["E", "F", "W", "I"]   # error, pyflakes, warning, isort

[tool.black]
line-length = 88
target-version = ["py311"]
\`\`\`

---

## Editor Integration

Both ruff and black have VS Code extensions.

- Install "Ruff" extension
- Install "Black Formatter" extension
- Enable "Format on Save" in VS Code settings

Now your code is formatted every time you save. No manual runs needed.

---

## The Workflow

1. Write code.
2. Save → black formats automatically.
3. Before committing → run \`ruff check .\`.
4. Fix lint errors.
5. Commit clean code.

---

## Why This Matters on Teams

Everyone's code looks the same. Code reviews focus on logic, not whitespace debates.

PR diffs are clean. No spurious formatting changes mixed with real changes.

Establish this from the start of any project.

---

## Try this

1. Create a file with intentionally messy formatting.
2. Run \`black\` on it. Observe the changes.
3. Add an unused import.
4. Run \`ruff check\`. Note the F401 error.
5. Run \`ruff check --fix\` to auto-remove it.

---

## What you just learned

- What linting and formatting do and why they matter
- How to use ruff for linting and black for formatting
- How to configure both in pyproject.toml
- How to set up editor integration for automatic formatting

---

## What comes next

Next project: **Multi-File Console App**
`,
};
