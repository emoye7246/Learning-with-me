export const lessonReusableUtilityClasses = {
  id: "reusable-utility-classes",
  title: "Reusable Utility Classes and Libraries",
  hasChallenge: false,
  article: `
## Reusable Utility Classes and Libraries

Every project accumulates small helper functions that don't belong to any one domain — string formatting, date parsing, file path helpers. These live in **utility classes**.

---

## What a Utility Class Is

A utility class is a class with only \`static\` methods and no state. It's a collection of functions, not an object.

\`\`\`java
package com.example.util;

public final class StringUtils {

    // Private constructor — don't instantiate utility classes
    private StringUtils() {}

    public static boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }

    public static String capitalize(String s) {
        if (isBlank(s)) return s;
        return Character.toUpperCase(s.charAt(0)) + s.substring(1).toLowerCase();
    }

    public static String repeat(String s, int times) {
        return s.repeat(times);  // Java 11+
    }
}
\`\`\`

Usage:
\`\`\`java
StringUtils.capitalize("hello");   // "Hello"
StringUtils.isBlank("  ");         // true
\`\`\`

---

## Another Example: DateUtils

\`\`\`java
package com.example.util;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public final class DateUtils {

    private DateUtils() {}

    private static final DateTimeFormatter DATE_FORMAT =
        DateTimeFormatter.ofPattern("dd/MM/yyyy");

    public static String format(LocalDate date) {
        return date.format(DATE_FORMAT);
    }

    public static LocalDate parse(String dateStr) {
        return LocalDate.parse(dateStr, DATE_FORMAT);
    }

    public static boolean isWeekend(LocalDate date) {
        return switch (date.getDayOfWeek()) {
            case SATURDAY, SUNDAY -> true;
            default -> false;
        };
    }
}
\`\`\`

---

## Constants Classes

Related constants live in a constants class:

\`\`\`java
public final class AppConstants {
    private AppConstants() {}

    public static final String DEFAULT_ENCODING = "UTF-8";
    public static final int MAX_RETRY_COUNT = 3;
    public static final String CSV_DELIMITER = ",";
    public static final String DATE_PATTERN = "yyyy-MM-dd";
}
\`\`\`

---

## When NOT to Use a Utility Class

Utility classes are appropriate for genuinely stateless helpers. Don't use them when:

- The logic belongs to a domain object (put it in the class)
- The function needs state (make it a proper class with fields)
- You're hiding business logic (put it in a service)

\`\`\`java
// BAD — this belongs on Student, not in a utility class
StudentUtils.calculateGrade(student);

// GOOD — Student knows its own grade
student.grade();
\`\`\`

---

## Packaging as a Library

If your utility code is useful across multiple projects, package it as a JAR:

1. Create a separate Maven project for the utilities
2. Run \`mvn install\` — it's added to your local Maven repository
3. Reference it from other projects:

\`\`\`xml
<dependency>
    <groupId>com.example</groupId>
    <artifactId>my-utils</artifactId>
    <version>1.0.0</version>
</dependency>
\`\`\`

---

## What You Learned

- Utility classes have only \`static\` methods, no state, and a private constructor
- Put them in a \`util\` package, named \`*Utils\` or \`*Helper\`
- Constants classes group related constants under one name
- Don't use utility classes for logic that naturally belongs on a domain object
- Utilities can be packaged as libraries and shared across projects

## What Comes Next

Time to apply this in a real project.

Continue to: **Mini Project: Convert a Single-File Project to Maven**
`,
};
