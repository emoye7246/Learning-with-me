export const lessonTestingEdgeCases = {
  id: "testing-edge-cases",
  title: "Testing Edge Cases & Failures",

  article: `
## Testing Edge Cases & Failures

The happy path is easy to test. The bugs hide at the edges.

Edge cases are where software actually breaks. Testing them is where tests earn their value.

---

## What is an Edge Case?

Inputs or conditions that are unusual, boundary, or unexpected.

For a function that sums a list:
- Empty list
- List with one element
- Very large numbers
- Negative numbers
- Mixed types (what should happen?)

---

## Empty Inputs

\`\`\`python
def get_average(numbers):
    if not numbers:
        raise ValueError("Cannot average an empty list")
    return sum(numbers) / len(numbers)


def test_average_empty_list_raises():
    import pytest
    with pytest.raises(ValueError):
        get_average([])


def test_average_single_value():
    assert get_average([42]) == 42
\`\`\`

Empty input is almost always an edge case.

---

## Boundary Values

Test the values just at the limits.

\`\`\`python
def clamp(value, min_val, max_val):
    return max(min_val, min(value, max_val))


def test_clamp_at_minimum():
    assert clamp(0, 0, 100) == 0

def test_clamp_below_minimum():
    assert clamp(-5, 0, 100) == 0

def test_clamp_at_maximum():
    assert clamp(100, 0, 100) == 100

def test_clamp_above_maximum():
    assert clamp(150, 0, 100) == 100

def test_clamp_in_range():
    assert clamp(50, 0, 100) == 50
\`\`\`

---

## Testing Failure Paths

Every \`if\` branch is a path. Test both sides.

\`\`\`python
def withdraw(balance, amount):
    if amount > balance:
        raise ValueError("Insufficient funds")
    return balance - amount


def test_withdraw_success():
    assert withdraw(100, 50) == 50


def test_withdraw_exact_balance():
    assert withdraw(100, 100) == 0


def test_withdraw_overdraft_raises():
    import pytest
    with pytest.raises(ValueError, match="Insufficient funds"):
        withdraw(50, 100)
\`\`\`

---

## Parametrize: Test Many Inputs at Once

\`\`\`python
import pytest

@pytest.mark.parametrize("a, b, expected", [
    (2, 3, 5),
    (0, 0, 0),
    (-1, 1, 0),
    (-5, -5, -10),
    (100, 200, 300),
])
def test_add(a, b, expected):
    assert add(a, b) == expected
\`\`\`

One test function, five test cases. Each runs independently.

---

## Testing What Should NOT Happen

\`\`\`python
def test_withdraw_does_not_go_negative():
    import pytest
    with pytest.raises(ValueError):
        withdraw(10, 50)
    # If we reach here, no exception was raised — which would be wrong
\`\`\`

---

## Common Edge Cases to Always Consider

- Empty string, None, empty list, empty dict
- Zero (often a division concern)
- Negative numbers
- Very large numbers
- Strings where numbers are expected
- Missing dictionary keys

---

## Try this

1. Write a \`safe_divide\` function that handles division by zero.
2. Write tests for: normal division, division by zero, negative divisors.
3. Use \`@pytest.mark.parametrize\` to test multiple input pairs.

---

## What you just learned

- What edge cases are and why they matter
- How to test empty inputs and boundary values
- How to test both sides of conditional logic
- How to use parametrize to test multiple inputs efficiently

---

## What comes next

Next lesson: **Organizing Tests in a Project**
`,
};
