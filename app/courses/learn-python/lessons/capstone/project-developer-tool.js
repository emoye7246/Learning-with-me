export const projectDeveloperTool = {
  id: "capstone-developer-tool",
  title: "Capstone: Internal Developer Tool",

  article: `
## Overview

Build a tool that helps developers — including yourself — work faster or more consistently.

Developer tools are some of the most valuable software you can build. They're used constantly, improve with every iteration, and demonstrate deep understanding of how software is built and maintained.

---

## What Makes This Different

This isn't a script you run once. It's a tool you'd install, keep around, and use regularly. It needs a polished CLI interface, clear documentation, and enough configurability to work in different contexts.

---

## Project Options

Choose one (or propose your own):

- **Project scaffolder** — generates a new project structure from a template: creates directories, files, and boilerplate code based on a project type argument
- **Code stats tool** — analyzes a codebase and reports: line counts, function counts, TODO counts, file type breakdown, largest files
- **Dependency checker** — reads a \`requirements.txt\`, checks for outdated packages via PyPI, flags security advisories
- **PR description generator** — reads \`git diff\` output and produces a structured PR description template
- **Environment validator** — checks a project directory for expected files, correct Python version, installed dependencies, and reports any issues

---

## Functional Requirements

Your tool must:

- [ ] Have a clear, documented CLI interface with \`--help\` on every command
- [ ] Solve a real workflow problem, not a toy problem
- [ ] Accept a path or project directory as input (don't hardcode paths)
- [ ] Support at least one configuration option (flag or config file)
- [ ] Produce output that is clear enough to act on immediately
- [ ] Handle invalid input, missing files, and wrong paths gracefully
- [ ] Be installable as a local package (using \`pip install .\`)

---

## Non-Functional Requirements

- [ ] Has \`pyproject.toml\` or \`setup.py\` to define the package
- [ ] Has a \`README.md\` with installation and usage instructions
- [ ] Has \`requirements.txt\` or dependencies declared in \`pyproject.toml\`
- [ ] No hardcoded paths, usernames, or machine-specific settings anywhere

---

## Suggested Project Structure

\`\`\`text
my-tool/
  src/
    my_tool/
      __init__.py
      __main__.py     ← entry point: python -m my_tool
      cli.py          ← CLI command definitions
      core.py         ← main logic
      utils.py        ← shared helpers
  tests/
    test_core.py
  pyproject.toml
  README.md
\`\`\`

---

## Implementation Milestones

1. Define the problem precisely. What input does the tool take? What output does it produce?
2. Build the CLI skeleton with typer or click. One command, one flag, one placeholder output.
3. Implement the core logic as a plain Python function (no CLI dependency).
4. Connect the CLI to the core logic.
5. Add configuration support: a CLI flag for common options, optionally a config file.
6. Add output formatting using \`rich\` — tables, panels, color-coded status.
7. Add error handling: every failure mode should produce a useful message.
8. Write tests for the core logic (not the CLI).
9. Write the README. Make the installation instructions work on a clean machine.

---

## Testing Checklist

- [ ] Run the tool against a real project directory — output is correct and useful
- [ ] Run with \`--help\` — the description and options are clear
- [ ] Pass a nonexistent path — it should explain the problem, not crash
- [ ] Pass a directory missing expected files — handled gracefully
- [ ] Install it with \`pip install .\` and run it as a command — works from anywhere
- [ ] Run the test suite — all tests pass
- [ ] Give the README to someone else — they can install and use the tool from the README alone

---

## Optional Extensions

- [ ] Add a \`--json\` flag that outputs machine-readable JSON (for piping to other tools)
- [ ] Add a \`--config\` flag to specify a config file path
- [ ] Publish to PyPI so anyone can install it with \`pip install your-tool-name\`
- [ ] Add GitHub Actions CI that runs tests on every push
- [ ] Add a \`--watch\` flag that re-runs the tool when files change

---

## Submission Requirements

Installable with:

\`\`\`bash
pip install .
\`\`\`

Run with:

\`\`\`bash
my-tool --help
my-tool check ./my-project
my-tool check ./my-project --verbose
\`\`\`

Repository must include \`pyproject.toml\`, \`README.md\`, and at least one test file.

---

## What This Project Proves

You can build production-quality developer tooling — software that other developers would actually install and use. You understand CLI design, package structure, configuration, output formatting, and error handling at a professional level.
`,

  support: {
    intro: `
Use this support in order.

Start with Level 1 nudges.
Move to Level 2 hints if still stuck.
Use the blueprint to unblock your approach.
    `.trim(),

    level1Nudges: [
      "What workflow pain point does this tool solve? Describe it in one sentence.",
      "What does the tool take as input — a file, a directory, a string?",
      "What does the output look like? Sketch it in plain text before writing any code.",
      "What's the minimum useful version of this tool? What could it do in 50 lines?",
      "What can go wrong? What inputs should it reject, and how should it explain why?",
      "How will someone install this tool? What's the installation experience?",
    ],

    level2Hints: [
      "Use typer: @app.command() def check(path: Path = typer.Argument(..., help='Project directory to check'))",
      "Implement core logic in core.py as a plain function that takes a Path and returns a result dict. Test it without the CLI.",
      "Use rich's Console for output: console = Console(); console.print('[green]✓[/] Requirements file found').",
      "Define the package entry point in pyproject.toml: [project.scripts] my-tool = 'my_tool.cli:app'",
      "For the code stats tool: use Path.rglob('*.py') to find files, then count lines with len(f.read_text().splitlines()).",
      "For the scaffolder: use jinja2 templates stored in a templates/ folder. Render each template and write to the target path.",
    ],

    blueprint: [
      "Define the problem. Write what the tool takes as input and what it outputs.",
      "Create the package structure. Add __main__.py so python -m my_tool works.",
      "Create cli.py with one typer command. Run it. Confirm --help works.",
      "Create core.py with the main logic as a pure function. Test it directly (no CLI).",
      "Connect cli.py to core.py. Run the tool end-to-end.",
      "Add rich output formatting. Use Console, Table, or Panel for clean display.",
      "Add error handling: check inputs, raise typer.BadParameter or print an error and exit.",
      "Write pyproject.toml with [project.scripts] entry point. Test pip install .",
      "Write tests in tests/test_core.py for the core logic. Run with pytest.",
      "Write README: installation steps, usage examples, options reference.",
    ],

    debuggingGuide: [
      {
        problem: "pip install . installs but the command isn't found.",
        hint: "Check your [project.scripts] entry in pyproject.toml. The format is: tool-name = 'package.module:function'. Also confirm your virtual environment is activated.",
      },
      {
        problem: "The tool works when run directly but fails after pip install.",
        hint: "You may be importing modules using relative paths that don't work as a package. Use absolute imports: from my_tool import core instead of from . import core.",
      },
      {
        problem: "Path handling breaks on Windows vs macOS.",
        hint: "Use pathlib.Path throughout — never string concatenation for file paths. Path handles OS differences automatically.",
      },
      {
        problem: "Tests pass but the CLI crashes with the same inputs.",
        hint: "The CLI and core are probably handling types differently. Add a print of the actual types received in the CLI function. Check for str vs Path mismatches.",
      },
    ],

    revealSolutionWarning: `
This capstone has no example solution.

Developer tools are deeply personal — the best implementation is the one that solves your specific problem cleanly. Use the blueprint as a structure and build from there.
    `.trim(),
  },
};
