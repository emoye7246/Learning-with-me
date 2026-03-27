export const lessonFirstTestPytest = {
  id: "first-test-pytest",
  title: "Writing Your First Test with pytest",

  article: `
## Writing Your First Test with pytest

pytest is Python's standard testing framework. It's simple, powerful, and the most widely used.

---

## Installing pytest

\`\`\`bash
pip install pytest
\`\`\`

---

## Your First Test

Create a file called \`test_math.py\`:

\`\`\`python
def add(a, b):
    return a + b


def test_add():
    assert add(2, 3) == 5


def test_add_negative():
    assert add(-1, 1) == 0


def test_add_floats():
    assert add(0.1, 0.2) == pytest.approx(0.3)
\`\`\`

Run it:

\`\`\`bash
pytest test_math.py
\`\`\`

Output:

\`\`\`
PASSED test_math.py::test_add
PASSED test_math.py::test_add_negative
PASSED test_math.py::test_add_floats
\`\`\`

---

## How pytest Finds Tests

- Files matching \`test_*.py\` or \`*_test.py\`
- Functions named \`test_*\`
- Classes named \`Test*\` with methods named \`test_*\`

You don't need to import pytest for basic tests.

---

## The assert Statement

\`\`\`python
assert result == expected
assert result > 0
assert "error" in message
assert items is not None
\`\`\`

When an assertion fails, pytest shows exactly what went wrong:

\`\`\`
AssertionError: assert 4 == 5
\`\`\`

---

## Running Tests

Run all tests in the current directory:

\`\`\`bash
pytest
\`\`\`

Run a specific file:

\`\`\`bash
pytest test_math.py
\`\`\`

Run a specific test:

\`\`\`bash
pytest test_math.py::test_add
\`\`\`

Verbose output:

\`\`\`bash
pytest -v
\`\`\`

---

## Separating Code from Tests

Keep tests in a separate file from the code under test.

\`\`\`text
my_project/
  calculator.py     ← your code
  test_calculator.py ← your tests
\`\`\`

In \`test_calculator.py\`:

\`\`\`python
from calculator import add, multiply

def test_add():
    assert add(3, 4) == 7

def test_multiply():
    assert multiply(3, 4) == 12
\`\`\`

---

## pytest.approx for Floats

Floating point math isn't exact. Don't compare floats with \`==\`.

\`\`\`python
import pytest

def test_division():
    assert 1 / 3 == pytest.approx(0.333, rel=1e-3)
\`\`\`

\`pytest.approx\` handles floating point tolerance.

---

## Try this

1. Write a \`calculator.py\` with \`add\`, \`subtract\`, \`multiply\`, \`divide\`.
2. Create \`test_calculator.py\`.
3. Write one test per function.
4. Run \`pytest -v\` and verify all pass.
5. Break one function intentionally. Watch the test fail.

---

## What you just learned

- How to install pytest and write basic tests
- How pytest discovers test files and functions
- How to use assert and pytest.approx
- How to organize code and test files separately

---

## What comes next

Next lesson: **Assertions & Test Structure**
`,
};
