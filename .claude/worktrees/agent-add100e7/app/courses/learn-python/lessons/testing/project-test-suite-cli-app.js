export const projectTestSuiteCliApp = {
  id: "project-test-suite-cli-app",
  title: "Project: Test Suite for Your CLI App",

  article: `
## Overview

Take a CLI app you've already built — the Todo CLI, the Weather CLI, or any other project — and write a full test suite for it.

This project is about applying everything: unit tests, edge cases, fixtures, and mocking external dependencies.

---

## Functional Requirements

Your test suite must:

- [ ] Test at least one pure function from your app (input → output, no side effects)
- [ ] Test at least one function that modifies state (add, remove, update)
- [ ] Test at least one error case (invalid input, missing data)
- [ ] Test at least one edge case (empty list, zero, None)
- [ ] Use at least one fixture
- [ ] Use \`pytest.raises\` for at least one exception test
- [ ] If your app calls an API or reads a file, mock that dependency
- [ ] All tests pass with \`pytest -v\`
- [ ] At least 10 test functions total

---

## Picking Your Target App

Good options from earlier projects:

- **Todo CLI** — test add_task, complete_task, delete_task, list_tasks edge cases
- **Bank Account Simulator** — test deposit, withdraw, overdraft, get_statement
- **Weather CLI** — test the data extraction function with mocked API response
- **Library Catalogue** — test add, search, checkout, return

Pick the one you know best.

---

## Suggested Test Structure

\`\`\`text
your_project/
  main.py
  tasks.py        ← your app logic
  tests/
    __init__.py
    conftest.py   ← shared fixtures
    test_tasks.py ← unit tests
\`\`\`

---

## Implementation Milestones

1. Identify the functions to test — prioritize logic, not I/O.
2. Create \`tests/\` folder with \`__init__.py\` and \`conftest.py\`.
3. Write fixtures for common setup (empty list, loaded account, etc.).
4. Write happy-path tests first.
5. Write error and edge case tests.
6. If applicable: mock API calls or file reads.
7. Run \`pytest -v\` and get everything green.

---

## Testing Checklist

- [ ] At least 10 test functions
- [ ] At least one fixture used by multiple tests
- [ ] At least one \`pytest.raises\` test
- [ ] At least one parametrized test (\`@pytest.mark.parametrize\`)
- [ ] At least one mock (if your app has external dependencies)
- [ ] No test modifies shared state that bleeds into other tests
- [ ] Descriptive test names that describe behavior

---

## Optional Extensions

- [ ] Add \`pytest-cov\` and achieve 80%+ coverage
- [ ] Write tests before fixing a bug (test-first)
- [ ] Add a \`Makefile\` or script that runs tests automatically

---

## Submission Requirements

\`\`\`bash
pytest tests/ -v
\`\`\`

All tests green. No skips.

---

## What This Project Proves

You can take existing code and retrofit a professional-grade test suite. You know how to structure tests, share fixtures, mock dependencies, and achieve meaningful coverage.
`,

  support: {
    intro: `
Use this support in order.

Level 1 → Level 2 → Blueprint → Example.
Don't read the example until you've genuinely attempted the task.
    `.trim(),

    level1Nudges: [
      "Which functions in your app have clear inputs and outputs (no side effects)?",
      "Which operations could fail due to invalid input? Those need error tests.",
      "What state is shared between tests? That state should come from fixtures.",
      "Does your app call an API or read a file? Those calls need to be mocked.",
      "Which edge cases haven't you thought about yet? Empty input? Zero? None?",
    ],

    level2Hints: [
      "Pure functions (input → output, no side effects) are easiest to test. Start there.",
      "For stateful classes (BankAccount, Library), use a fixture that creates a fresh instance per test.",
      "To mock a file read, use mocker.patch('builtins.open', mock_open(read_data='file content')).",
      "For API mocks, patch the requests.get call and set return_value.json.return_value = {...}.",
      "Use @pytest.mark.parametrize to test one function with 5+ input variations in one block.",
    ],

    blueprint: [
      "List all functions in your app. Mark each as: pure, stateful, or external-dependent.",
      "Write one test for each pure function — happy path.",
      "Add error tests for any function that has validation or raises.",
      "Create a conftest.py with fixtures for shared objects.",
      "Refactor tests to use fixtures instead of repeating setup.",
      "Add parametrize to any test that checks similar inputs.",
      "Mock any external call (requests, open, os.path.exists).",
      "Run pytest -v. Fix failures. Get all green.",
    ],

    debuggingGuide: [
      {
        problem: "My tests are modifying each other's state.",
        hint: "Each test should get a fresh object from a fixture. If you're using a module-level variable as state, move it into a fixture.",
      },
      {
        problem: "I can't import from my app in the test file.",
        hint: "Check your directory structure. Add __init__.py to tests/. Or run pytest from the project root.",
      },
      {
        problem: "My mock isn't being called — the real function still runs.",
        hint: "Make sure you're patching the name as it's used, not where it's defined. patch('mymodule.requests.get') not patch('requests.get').",
      },
    ],

    revealSolutionWarning: `
There's no single right answer here — the tests depend on which project you chose.

Below is an example test suite for the BankAccount class. Adapt the pattern to your project.
    `.trim(),

    exampleSolution: `# conftest.py
import pytest
from bank import BankAccount

@pytest.fixture
def empty_account():
    return BankAccount("Alice", initial_balance=0)

@pytest.fixture
def funded_account():
    return BankAccount("Bob", initial_balance=500)


# test_bank.py
import pytest

class TestDeposit:
    def test_deposit_increases_balance(self, empty_account):
        empty_account.deposit(100)
        assert empty_account.balance == 100

    def test_deposit_zero_raises(self, empty_account):
        with pytest.raises(ValueError):
            empty_account.deposit(0)

    def test_deposit_negative_raises(self, empty_account):
        with pytest.raises(ValueError):
            empty_account.deposit(-50)

    @pytest.mark.parametrize("amount,expected", [
        (100, 100),
        (250, 250),
        (1000, 1000),
    ])
    def test_deposit_various_amounts(self, empty_account, amount, expected):
        empty_account.deposit(amount)
        assert empty_account.balance == expected


class TestWithdraw:
    def test_withdraw_reduces_balance(self, funded_account):
        funded_account.withdraw(100)
        assert funded_account.balance == 400

    def test_withdraw_exact_balance(self, funded_account):
        funded_account.withdraw(500)
        assert funded_account.balance == 0

    def test_withdraw_overdraft_raises(self, funded_account):
        with pytest.raises(ValueError, match="Insufficient"):
            funded_account.withdraw(1000)

    def test_withdraw_negative_raises(self, funded_account):
        with pytest.raises(ValueError):
            funded_account.withdraw(-50)


class TestStatement:
    def test_statement_contains_all_transactions(self, funded_account, capsys):
        funded_account.deposit(100)
        funded_account.withdraw(50)
        funded_account.get_statement()
        captured = capsys.readouterr()
        assert "deposit" in captured.out.lower()
        assert "withdrawal" in captured.out.lower()`,

    upgrades: {
      coverageBlueprint: [
        "pip install pytest-cov.",
        "Run: pytest --cov=. --cov-report=term-missing tests/.",
        "Add tests for any uncovered lines.",
      ],
    },
  },
};
