export const lessonAssertionsTestStructure = {
  id: "assertions-test-structure",
  title: "Assertions & Test Structure",

  article: `
## Assertions & Test Structure

Good tests are readable. They communicate what a function is supposed to do — even to someone who's never seen the code.

---

## The AAA Pattern

Every test follows: **Arrange, Act, Assert**.

\`\`\`python
def test_withdraw_reduces_balance():
    # Arrange
    account = BankAccount(balance=500)

    # Act
    account.withdraw(100)

    # Assert
    assert account.balance == 400
\`\`\`

- **Arrange**: set up the data and state
- **Act**: call the function under test
- **Assert**: check the result

One test, one clear flow.

---

## Assertion Styles

\`\`\`python
# Equality
assert result == 42
assert name == "Alice"

# Truthiness
assert is_valid
assert not is_empty

# Membership
assert "error" in message
assert 3 in [1, 2, 3]

# Type
assert isinstance(result, dict)
assert isinstance(result, list)

# Comparison
assert score >= 0
assert count < 100

# None
assert result is None
assert result is not None
\`\`\`

---

## One Assertion Per Test (Usually)

Not a strict rule, but a useful guideline.

\`\`\`python
# Less clear
def test_user():
    user = create_user("Alice", "alice@example.com")
    assert user.name == "Alice"
    assert user.email == "alice@example.com"
    assert user.active is True

# Clearer
def test_user_has_correct_name():
    user = create_user("Alice", "alice@example.com")
    assert user.name == "Alice"

def test_new_user_is_active():
    user = create_user("Alice", "alice@example.com")
    assert user.active is True
\`\`\`

When the first assertion fails, you immediately know which property broke.

---

## Descriptive Test Names

\`\`\`python
# Bad
def test_1():
    ...

# Good
def test_withdraw_with_sufficient_balance_reduces_balance():
    ...

def test_withdraw_with_insufficient_balance_raises_error():
    ...
\`\`\`

Test names are documentation. Name them to describe behavior.

---

## Testing Exceptions

Use \`pytest.raises\` to assert that an exception is raised.

\`\`\`python
import pytest

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b


def test_divide_by_zero_raises():
    with pytest.raises(ValueError):
        divide(10, 0)


def test_divide_by_zero_message():
    with pytest.raises(ValueError, match="Cannot divide by zero"):
        divide(10, 0)
\`\`\`

---

## Fixtures: Setup Once, Reuse

\`\`\`python
import pytest
from bank import BankAccount

@pytest.fixture
def empty_account():
    return BankAccount(balance=0)

@pytest.fixture
def funded_account():
    return BankAccount(balance=500)


def test_deposit_increases_balance(empty_account):
    empty_account.deposit(100)
    assert empty_account.balance == 100


def test_withdraw_reduces_balance(funded_account):
    funded_account.withdraw(200)
    assert funded_account.balance == 300
\`\`\`

Fixtures create test data. They're injected by name — pytest handles it automatically.

---

## Common Mistakes

- Writing tests that are longer than the code they test (over-engineering).
- Not testing the failure cases.
- Asserting too many things in one test function.
- Using vague names like \`test_1\` or \`test_stuff\`.

---

## Try this

1. Add \`pytest.raises\` tests for division by zero.
2. Create a fixture for a test user object.
3. Write 3 tests that all use the same fixture.
4. Name each test to describe its specific behavior.

---

## What you just learned

- The AAA (Arrange, Act, Assert) pattern
- Common assertion styles in pytest
- How to test for exceptions with pytest.raises
- How to use fixtures to share setup code

---

## What comes next

Next lesson: **Testing Edge Cases & Failures**
`,
};
