export const lessonOrganizingTests = {
  id: "organizing-tests",
  title: "Organizing Tests in a Project",

  article: `
## Organizing Tests in a Project

A single test file works for small projects. As the project grows, you need structure.

Good test organization means you can find, run, and maintain tests without friction.

---

## Basic Structure

For a simple project:

\`\`\`text
project/
  calculator.py
  test_calculator.py
\`\`\`

Works fine for one module. Doesn't scale.

---

## The tests/ Folder

Once you have multiple modules:

\`\`\`text
project/
  src/
    calculator.py
    user.py
    database.py
  tests/
    test_calculator.py
    test_user.py
    test_database.py
  main.py
\`\`\`

One test file per source module. Clear mapping.

---

## conftest.py

pytest's special file for shared fixtures.

\`\`\`text
project/
  tests/
    conftest.py       ← shared fixtures
    test_calculator.py
    test_user.py
\`\`\`

\`\`\`python
# conftest.py
import pytest
from user import User

@pytest.fixture
def sample_user():
    return User(name="Alice", email="alice@example.com")
\`\`\`

Any test file in the \`tests/\` directory can use \`sample_user\` without importing it.

---

## __init__.py

Add an empty \`__init__.py\` to your \`tests/\` directory to make imports work cleanly:

\`\`\`text
tests/
  __init__.py
  conftest.py
  test_calculator.py
\`\`\`

---

## Running Tests

Run all tests:

\`\`\`bash
pytest tests/
\`\`\`

Run tests for one module:

\`\`\`bash
pytest tests/test_calculator.py
\`\`\`

Run with verbose output:

\`\`\`bash
pytest -v
\`\`\`

Run and show coverage:

\`\`\`bash
pip install pytest-cov
pytest --cov=src tests/
\`\`\`

---

## Naming Conventions

| File | Convention |
|---|---|
| Test files | \`test_<module>.py\` |
| Test functions | \`test_<behavior>()\` |
| Fixture files | \`conftest.py\` |

---

## Grouping with Classes

Group related tests in a class:

\`\`\`python
class TestDeposit:
    def test_deposit_increases_balance(self, account):
        account.deposit(100)
        assert account.balance == 100

    def test_deposit_zero_raises(self, account):
        with pytest.raises(ValueError):
            account.deposit(0)

class TestWithdraw:
    def test_withdraw_reduces_balance(self, account):
        account.withdraw(50)
        assert account.balance == 50
\`\`\`

Run just one class:

\`\`\`bash
pytest tests/test_bank.py::TestDeposit
\`\`\`

---

## Marking and Filtering

\`\`\`python
import pytest

@pytest.mark.slow
def test_large_file_processing():
    ...

@pytest.mark.integration
def test_database_connection():
    ...
\`\`\`

Run only fast tests:

\`\`\`bash
pytest -m "not slow"
\`\`\`

---

## Try this

1. Reorganize your test files into a \`tests/\` folder.
2. Move shared fixtures to \`conftest.py\`.
3. Run \`pytest -v\` and verify everything still passes.
4. Try running just one test class.

---

## What you just learned

- How to structure a \`tests/\` folder
- How \`conftest.py\` shares fixtures across test files
- Naming conventions for test files and functions
- How to group tests with classes and filter with markers

---

## What comes next

Next lesson: **Intro to Mocking**
`,
};
