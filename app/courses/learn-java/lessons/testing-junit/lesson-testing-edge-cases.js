export const lessonTestingEdgeCases = {
  id: "testing-edge-cases",
  title: "Testing Edge Cases and Failures",
  hasChallenge: false,
  article: `
## Testing Edge Cases and Failures

Testing the happy path is just the beginning. Real bugs live in edge cases: empty inputs, null values, boundary conditions, and unexpected inputs. This lesson teaches you to think systematically about what could go wrong.

---

## The Happy Path Is Not Enough

\`\`\`java
// This test passes — but it's only one case
@Test
void add_returnsSumOfTwoPositiveIntegers() {
    assertEquals(7, calc.add(3, 4));
}
\`\`\`

What about \`add(0, 0)\`? \`add(-1, 1)\`? \`add(Integer.MAX_VALUE, 1)\`?

---

## Categories of Edge Cases

**Boundaries:**
- Minimum and maximum valid values
- Zero, one, and two (for collections)
- Empty strings, empty lists

**Invalid inputs:**
- Null where an object is expected
- Negative where positive is required
- Out-of-range values

**State:**
- Operating on an empty or uninitialized object
- Calling methods in the wrong order

---

## Systematic Edge Case Testing

\`\`\`java
class StringUtilsTest {

    @Test
    void capitalize_normalString() {
        assertEquals("Hello", StringUtils.capitalize("hello"));
    }

    @Test
    void capitalize_alreadyCapitalized() {
        assertEquals("Hello", StringUtils.capitalize("HELLO"));
    }

    @Test
    void capitalize_singleChar() {
        assertEquals("A", StringUtils.capitalize("a"));
    }

    @Test
    void capitalize_emptyString() {
        assertEquals("", StringUtils.capitalize(""));
    }

    @Test
    void capitalize_nullInput() {
        assertNull(StringUtils.capitalize(null));
    }
}
\`\`\`

---

## @ParameterizedTest — Run One Test with Many Inputs

Instead of copying tests for each case, use parameterized tests:

\`\`\`java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

class GradeCalculatorTest {

    @ParameterizedTest
    @CsvSource({
        "95, A",
        "85, B",
        "75, C",
        "65, D",
        "55, F"
    })
    void letterGrade_returnsCorrectGrade(int score, String expected) {
        assertEquals(expected, GradeUtils.letterGrade(score));
    }

    @ParameterizedTest
    @ValueSource(strings = {"", "  ", "\\t"})
    void isBlank_returnsTrueForWhitespace(String input) {
        assertTrue(StringUtils.isBlank(input));
    }
}
\`\`\`

Add to pom.xml for parameterized tests (already included in \`junit-jupiter\`):
\`\`\`xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-params</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
</dependency>
\`\`\`

---

## Testing That Exceptions Are Thrown

\`\`\`java
@Test
void withdraw_throwsInsufficientFundsException() {
    BankAccount account = new BankAccount(50.0);

    assertThrows(
        InsufficientFundsException.class,
        () -> account.withdraw(100.0),
        "Should throw when withdrawal exceeds balance"
    );
}

@Test
void constructor_throwsWhenBalanceIsNegative() {
    assertThrows(
        IllegalArgumentException.class,
        () -> new BankAccount(-10.0)
    );
}
\`\`\`

---

## Boundary Value Analysis

Test at and around the boundary:

\`\`\`java
// If the rule is "score >= 90 → A"
@Test void scoreOf90_isA()  { assertEquals("A", grade(90)); }
@Test void scoreOf89_isB()  { assertEquals("B", grade(89)); }  // just below A
@Test void scoreOf91_isA()  { assertEquals("A", grade(91)); }  // just above

// If the rule is "score >= 0"
@Test void scoreOfZero_isValid()       { assertDoesNotThrow(() -> new Student("X", 0)); }
@Test void negativeScore_throwsError() { assertThrows(IllegalArgumentException.class,
                                            () -> new Student("X", -1)); }
\`\`\`

---

## assertDoesNotThrow

Verify that no exception is thrown:

\`\`\`java
@Test
void deposit_withValidAmount_doesNotThrow() {
    BankAccount account = new BankAccount(100.0);
    assertDoesNotThrow(() -> account.deposit(50.0));
}
\`\`\`

---

## The Test Checklist for Any Method

When writing tests for a new method, ask:
1. What's the normal case?
2. What's the minimum valid input?
3. What's the maximum valid input?
4. What's zero / empty / null?
5. What should throw an exception?
6. Are there any off-by-one risks?

---

## What You Learned

- The happy path is not enough — edge cases are where bugs live
- Categories to test: boundaries, invalid input, and bad state
- \`@ParameterizedTest\` + \`@CsvSource\` eliminates duplicated test boilerplate
- Test exact boundaries (at, above, and below)
- \`assertDoesNotThrow\` verifies normal flow doesn't throw unexpectedly

## What Comes Next

Now you'll learn how to organise your tests within a Maven project.

Continue to: **9.5 Organising Tests in a Maven Project**
`,
};
