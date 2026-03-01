export const lessonTypeHintsAnnotations = {
  id: "type-hints-annotations",
  title: "Type Hints & Annotations",

  article: `
## Type Hints & Annotations

Python is dynamically typed. You don't have to declare types.

But you can. And doing so makes your code significantly easier to read, debug, and maintain.

---

## What Are Type Hints?

Annotations that tell readers (and tools) what types a function expects and returns.

\`\`\`python
def greet(name: str) -> str:
    return f"Hello, {name}"
\`\`\`

- \`name: str\` — expects a string
- \`-> str\` — returns a string

Python doesn't enforce these at runtime. They're documentation with teeth — tools like mypy and editors use them to catch errors.

---

## Basic Types

\`\`\`python
def add(a: int, b: int) -> int:
    return a + b

def is_valid(value: str) -> bool:
    return len(value) > 0

def load_data(path: str) -> list:
    ...
\`\`\`

---

## Optional and None

Use \`Optional\` when a value might be \`None\`:

\`\`\`python
from typing import Optional

def find_user(user_id: int) -> Optional[str]:
    # returns a name or None
    ...
\`\`\`

In Python 3.10+, use the pipe syntax:

\`\`\`python
def find_user(user_id: int) -> str | None:
    ...
\`\`\`

---

## Lists, Dicts, Tuples

\`\`\`python
from typing import List, Dict, Tuple

def get_names() -> List[str]:
    return ["Alice", "Bob"]

def get_config() -> Dict[str, int]:
    return {"timeout": 30, "retries": 3}

def get_point() -> Tuple[int, int]:
    return (10, 20)
\`\`\`

Python 3.9+ lets you use lowercase:

\`\`\`python
def get_names() -> list[str]:
    return ["Alice", "Bob"]

def get_config() -> dict[str, int]:
    return {"timeout": 30}
\`\`\`

---

## Variable Annotations

\`\`\`python
count: int = 0
name: str = "Alice"
scores: list[int] = []
\`\`\`

---

## Function with Multiple Types

\`\`\`python
from typing import Union

def process(value: Union[int, str]) -> str:
    return str(value)

# Python 3.10+ syntax
def process(value: int | str) -> str:
    return str(value)
\`\`\`

---

## Why Bother?

1. **Catches bugs early** — your editor highlights mismatched types before you run the code.
2. **Self-documenting** — no need to read the entire function to know what it expects.
3. **Better autocomplete** — editors know what methods are available on typed variables.
4. **Safer refactoring** — mypy catches type errors when you change signatures.

---

## Running mypy

\`\`\`bash
pip install mypy
mypy main.py
\`\`\`

Reports type errors before you run the code.

---

## The Practical Rule

Annotate function signatures. Always.
Annotate variables when the type isn't obvious.
Don't annotate everything — it becomes noise.

\`\`\`python
# Good
def calculate_tax(income: float, rate: float) -> float:
    return income * rate

# Too much
x: int = 1   # obvious
\`\`\`

---

## Try this

1. Add type hints to a function that takes a list of numbers and returns their average.
2. Write a function that returns a user dict or None if not found.
3. Install mypy and run it on a file with intentional type errors.

---

## What you just learned

- How to annotate function parameters and return types
- How to handle Optional, Union, list, and dict types
- Why type hints matter for readability and tooling
- How to use mypy for static type checking

---

## What comes next

Next lesson: **Intro to Linting & Formatting**
`,
};
