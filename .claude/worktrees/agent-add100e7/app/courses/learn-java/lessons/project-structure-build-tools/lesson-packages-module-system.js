export const lessonPackagesModuleSystem = {
  id: "packages-module-system",
  title: "Packages and the Module System",
  hasChallenge: false,
  article: `
## Packages and the Module System

You've already used packages to organise classes. This lesson goes deeper — and introduces Java's module system (Java 9+), which you'll encounter in modern projects.

---

## Packages: A Quick Recap

A package is a namespace that groups related classes:

\`\`\`java
package com.example.bank.service;

public class AccountService {
    // ...
}
\`\`\`

The package declaration must match the directory structure:
\`\`\`
src/main/java/com/example/bank/service/AccountService.java
\`\`\`

---

## Importing from Other Packages

\`\`\`java
package com.example.bank.controller;

import com.example.bank.service.AccountService;
import com.example.bank.model.Account;

// Wildcard import (not recommended — less readable):
import com.example.bank.model.*;

public class AccountController {
    private final AccountService service = new AccountService();
}
\`\`\`

Classes in the same package don't need imports.

---

## Access Across Packages

| Modifier | Same class | Same package | Subclass | Anywhere |
|---|---|---|---|---|
| \`private\` | ✓ | | | |
| (none) | ✓ | ✓ | | |
| \`protected\` | ✓ | ✓ | ✓ | |
| \`public\` | ✓ | ✓ | ✓ | ✓ |

Package-private (no modifier) is useful for hiding implementation details from outside the package.

---

## Common Package Conventions

\`\`\`
com.example.app/
├── model/        ← data classes: User, Account, Order
├── service/      ← business logic: UserService, OrderService
├── repository/   ← database access: UserRepository
├── controller/   ← HTTP handlers (Spring): UserController
├── util/         ← helpers: DateUtils, StringHelper
└── exception/    ← custom exceptions: UserNotFoundException
\`\`\`

---

## The Java Module System (Java 9+)

The module system (also called JPMS — Java Platform Module System) adds a higher level of encapsulation above packages.

A **module** declares:
- Which packages it **exports** (makes public to the world)
- Which other modules it **requires**

\`\`\`java
// module-info.java (at the root of src/main/java/)
module com.example.bank {
    requires java.net.http;        // use Java's HTTP client
    requires com.google.gson;      // use Gson library

    exports com.example.bank.api;  // only this package is public
    // com.example.bank.internal is hidden
}
\`\`\`

---

## Do You Need the Module System?

**For most applications: no.** Modules are most valuable for:
- Large multi-team projects that need strong internal boundaries
- Library authors who want to hide implementation packages
- Framework developers

For typical applications, packages provide enough organisation. Spring Boot, for example, does not require you to create a \`module-info.java\`.

When you see it in a project, now you know what it is.

---

## Static Imports

You can import static members directly:

\`\`\`java
import static java.lang.Math.PI;
import static java.lang.Math.sqrt;

double area = PI * sqrt(radius);
\`\`\`

Common with testing frameworks:
\`\`\`java
import static org.junit.jupiter.api.Assertions.*;

assertEquals(42, result);
assertTrue(list.isEmpty());
\`\`\`

---

## What You Learned

- Packages group related classes and control access across boundaries
- Package-private access (no modifier) hides implementation from external packages
- The Java module system (Java 9+) provides an additional layer of encapsulation
- Modules are optional for most applications — packages are sufficient
- Static imports bring static members into scope without qualification

## What Comes Next

Time to meet Maven — the build tool that makes all of this work together.

Continue to: **8.4 Introduction to Maven — pom.xml, lifecycle, and goals**
`,
};
