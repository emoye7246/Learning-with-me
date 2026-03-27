export const lessonPackagesAndImports = {
  id: "packages-and-imports",
  title: "Packages and Imports",
  hasChallenge: false,
  article: `
## Packages and Imports

Packages organize related classes into named groups. Imports allow you to use classes from other packages.

---

## What Is a Package?

A package is a namespace — a named container for related classes.

Package names are typically lowercase and follow the reverse-domain convention:

\`\`\`
com.company.project.module
\`\`\`

Examples from the Java standard library:
- \`java.util\` — utilities (ArrayList, HashMap, Scanner)
- \`java.io\` — input/output
- \`java.time\` — date and time
- \`java.lang\` — core classes (String, Math, System) — auto-imported

---

## Declaring a Package

The \`package\` statement must be the first line of a Java file:

\`\`\`java
package com.example.banking;

public class BankAccount {
    // ...
}
\`\`\`

The file must be located in a directory matching the package: \`src/com/example/banking/BankAccount.java\`

---

## Importing Classes

To use a class from another package, import it:

\`\`\`java
import java.util.ArrayList;
import java.util.Scanner;
import java.time.LocalDate;

public class Example {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> list = new ArrayList<>();
        LocalDate today = LocalDate.now();
    }
}
\`\`\`

The import statement goes after the package declaration and before the class declaration.

---

## Wildcard Imports

You can import all classes in a package with \`*\`:

\`\`\`java
import java.util.*;
\`\`\`

This is convenient but frowned upon in professional code because it's unclear which classes are actually used. IntelliJ uses specific imports by default.

---

## \`java.lang\` is Always Imported

Classes in \`java.lang\` — including \`String\`, \`Integer\`, \`Math\`, \`System\`, \`Object\`, and all primitive wrappers — are automatically available without an import.

---

## No Import Needed for the Same Package

Classes in the same package can use each other without imports:

\`\`\`java
// Both files in package com.example.banking
// BankAccount.java and Transaction.java can use each other without import
\`\`\`

---

## Fully Qualified Names

You can use a class without importing it by using its fully qualified name:

\`\`\`java
java.util.ArrayList<String> list = new java.util.ArrayList<>();
\`\`\`

This is verbose and rarely used, but avoids import conflicts when two packages have a class with the same name.

---

## IntelliJ Auto-Import

IntelliJ adds imports automatically:
- Type a class name; press Alt+Enter → "Import class"
- Or enable auto-import in Settings: Editor → General → Auto Import

---

## What You Learned

- Packages organize related classes into namespaces
- Declare a package with \`package com.example.name;\` as the first line
- Import classes with \`import com.example.name.ClassName;\`
- \`java.lang\` is always available without import
- Classes in the same package don't need imports
- IntelliJ can add imports automatically

## What Comes Next

You now know enough OOP foundations to build real classes. The next three lessons are mini-projects that challenge you to design and implement OOP solutions.

Continue to:
**4.10 Mini-Project: Bank Account**
`,
};
