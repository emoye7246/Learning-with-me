export const lessonIntroToMockito = {
  id: "intro-to-mockito",
  title: "Introduction to Mockito — mocking dependencies",
  hasChallenge: false,
  article: `
## Introduction to Mockito — mocking dependencies

Real classes have dependencies: a service depends on a repository, a controller depends on a service. When unit testing, you want to test **one class in isolation** — without involving the real database, file system, or network.

**Mockito** creates fake (mock) versions of dependencies so you can test in isolation.

---

## Setup: Add Mockito to pom.xml

\`\`\`xml
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>

<!-- Optionally: JUnit 5 integration -->
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>
\`\`\`

---

## The Problem Without Mocks

\`\`\`java
class AccountServiceTest {
    @Test
    void getBalance_returnsCorrectBalance() {
        // This uses a REAL repository — real file, real database
        AccountRepository repo = new AccountRepository("real-database");
        AccountService service = new AccountService(repo);

        // Slow, unpredictable, depends on external state
        double balance = service.getBalance("acc-123");
        assertEquals(500.0, balance);
    }
}
\`\`\`

---

## Creating a Mock

\`\`\`java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)  // enables @Mock and @InjectMocks
class AccountServiceTest {

    @Mock
    AccountRepository repository;   // Mockito creates a fake

    @InjectMocks
    AccountService service;         // injects the mock into this

    @Test
    void getBalance_returnsBalanceFromRepository() {
        Account fakeAccount = new Account("acc-123", 500.0);

        // Tell the mock what to return
        when(repository.findById("acc-123")).thenReturn(Optional.of(fakeAccount));

        double balance = service.getBalance("acc-123");

        assertEquals(500.0, balance);
    }
}
\`\`\`

---

## Stubbing: when() / thenReturn()

\`\`\`java
// Return a value
when(repository.findAll()).thenReturn(List.of(account1, account2));

// Return empty
when(repository.findById("bad-id")).thenReturn(Optional.empty());

// Throw an exception
when(repository.save(any())).thenThrow(new RuntimeException("DB error"));

// Return different values on successive calls
when(repository.findById("x"))
    .thenReturn(Optional.empty())
    .thenReturn(Optional.of(account));
\`\`\`

---

## Verifying Interactions

Check that a method was (or wasn't) called:

\`\`\`java
@Test
void deposit_savesUpdatedAccount() {
    when(repository.findById("acc-123")).thenReturn(Optional.of(account));

    service.deposit("acc-123", 100.0);

    // Verify the repository's save method was called once
    verify(repository, times(1)).save(account);

    // Verify nothing else was called
    verifyNoMoreInteractions(repository);
}
\`\`\`

---

## Argument Matchers

\`\`\`java
// Match any String argument
when(repository.findById(anyString())).thenReturn(Optional.of(account));

// Match any argument of any type
when(repository.save(any())).thenReturn(account);

// Match a specific condition
when(repository.findById(eq("acc-123"))).thenReturn(Optional.of(account));
\`\`\`

---

## Manual Mock Creation (Without Annotations)

\`\`\`java
AccountRepository repository = mock(AccountRepository.class);
AccountService service = new AccountService(repository);

when(repository.findAll()).thenReturn(Collections.emptyList());
\`\`\`

---

## What Mockito Cannot Mock

- \`final\` classes (by default)
- \`static\` methods (requires extra setup with Mockito 3.4+)
- Private methods

Design your code to avoid needing to mock these.

---

## What You Learned

- Mockito creates fake implementations of dependencies for isolated testing
- \`@Mock\` creates the fake; \`@InjectMocks\` injects it into the class under test
- \`when().thenReturn()\` stubs method calls
- \`verify()\` confirms a method was called with specific arguments
- Use \`any()\`, \`anyString()\`, \`eq()\` as argument matchers

## What Comes Next

How much of your code is actually tested? Let's talk about coverage.

Continue to: **9.7 Test Coverage — what it tells you and what it doesn't**
`,
};
