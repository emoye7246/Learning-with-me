export const trackDeveloperTooling = {
  id: "track-developer-tooling",
  title: "Track: Developer Tooling",

  article: `
## Developer Tooling

This track is about building tools for developers — including yourself.

Most of the software developers use daily was built by other developers. Code formatters, linters, project scaffolders, test runners, build systems, CLI utilities — these are all programs someone wrote. This track teaches you to build that kind of software in Python.

---

## What You'll Build

- Polished CLI tools with subcommands, flags, and help text
- Project scaffolders that generate boilerplate from templates
- Code analysis tools that inspect files, count patterns, or enforce rules
- Build scripts that automate multi-step development workflows
- Configuration-driven tools that adapt to different environments

---

## The Core Libraries

\`\`\`text
click        — Mature, decorator-based CLI framework
typer        — Modern CLI framework built on click, with type hint support
rich         — Beautiful terminal output: colors, tables, progress bars, panels
jinja2       — Templating engine for code and text generation
pathlib      — File and directory operations
tomllib      — Parse TOML config files (Python 3.11+)
subprocess   — Run other tools from within your tool
ast          — Parse and inspect Python source code
\`\`\`

---

## A Taste of the Work

A multi-command CLI tool with typer:

\`\`\`python
import typer
from pathlib import Path

app = typer.Typer()

@app.command()
def new(name: str, template: str = "basic"):
    """Create a new project from a template."""
    Path(name).mkdir(exist_ok=True)
    (Path(name) / "main.py").write_text(f"# {name}\\n\\ndef main():\\n    pass\\n")
    typer.echo(f"Created project: {name}")

@app.command()
def check(path: str = "."):
    """Check a project for common issues."""
    p = Path(path)
    if not (p / "requirements.txt").exists():
        typer.echo("[!] Missing requirements.txt", err=True)
    else:
        typer.echo("[✓] requirements.txt found")

if __name__ == "__main__":
    app()
\`\`\`

Generate files from templates with Jinja2:

\`\`\`python
from jinja2 import Template

template = Template("""
class {{ class_name }}:
    def __init__(self):
        pass
""")

print(template.render(class_name="UserService"))
\`\`\`

---

## Why This Track Is Valuable

Developer tools are some of the most satisfying software to build. They solve real problems for real people (starting with yourself), they're used constantly, and they compound in value over time.

Building tools also deepens your understanding of Python itself. When you write a tool that inspects Python files, you learn how Python works. When you build a CLI framework wrapper, you understand how CLI frameworks are designed.

---

## Where to Start

1. Install typer and rich: \`pip install typer rich\`
2. Build a CLI tool with one command that does something useful to you.
3. Add a second command. Add \`--verbose\` and \`--output\` flags.
4. Package it with a proper \`__main__.py\` so it runs cleanly.
5. Add a config file (TOML or JSON) so it can be customized without editing code.

---

## Recommended Path

1. Learn typer or click — understand commands, arguments, options, and help text.
2. Add rich output: tables, progress bars, colored status messages.
3. Add file generation with pathlib (and jinja2 for template-based generation).
4. Add configuration support: read from a config file, merge with CLI flags.
5. Build one complete tool that you'd actually use in your daily workflow.

---

## What you just learned

- What the Developer Tooling track covers
- Which libraries you'll use and what each one does
- What a multi-command CLI tool looks like
- Where to start

---

## What comes next

Pick a workflow pain point and build a CLI tool to fix it. The capstone section includes a developer tool brief.
`,
};
