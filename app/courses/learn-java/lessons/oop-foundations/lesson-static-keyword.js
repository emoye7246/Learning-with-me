export const lessonStaticKeyword = {
  id: "static-keyword",
  title: "The Static Keyword",
  hasChallenge: false,
  article: `
## The \`static\` Keyword

The \`static\` keyword marks a field or method as belonging to the **class itself**, not to any specific instance (object).

---

## Static Fields

A static field is shared across all instances of a class:

\`\`\`java
public class Counter {
    private static int totalCount = 0;   // shared across all instances
    private int id;

    public Counter() {
        totalCount++;
        this.id = totalCount;
    }

    public static int getTotalCount() {
        return totalCount;
    }

    public int getId() {
        return id;
    }
}

Counter a = new Counter();
Counter b = new Counter();
Counter c = new Counter();

System.out.println(Counter.getTotalCount());   // 3
System.out.println(a.getId());   // 1
System.out.println(b.getId());   // 2
\`\`\`

Each \`Counter\` object has its own \`id\`, but \`totalCount\` is shared — it's incremented by every constructor call.

---

## Static Methods

Static methods don't have access to instance fields or \`this\` — they belong to the class, not an object:

\`\`\`java
public class MathUtils {
    public static int square(int n) {
        return n * n;
    }

    public static boolean isEven(int n) {
        return n % 2 == 0;
    }
}

// Call without creating an object:
int result = MathUtils.square(5);     // 25
boolean even = MathUtils.isEven(4);  // true
\`\`\`

---

## Accessing Static Members

Call static methods and access static fields through the class name:

\`\`\`java
Counter.getTotalCount();    // correct — uses class name
Math.sqrt(16);              // correct

Counter c = new Counter();
c.getTotalCount();          // works but misleading — avoid this style
\`\`\`

---

## Static Constants

\`public static final\` fields are the standard way to define constants:

\`\`\`java
public class Config {
    public static final int MAX_CONNECTIONS = 100;
    public static final String APP_NAME = "MyApp";
    public static final double PI = 3.14159265358979;
}

// Access:
int max = Config.MAX_CONNECTIONS;
\`\`\`

---

## The \`static\` Initializer Block

For complex static initialization:

\`\`\`java
public class AppConfig {
    public static final Map<String, String> DEFAULTS;

    static {
        DEFAULTS = new HashMap<>();
        DEFAULTS.put("theme", "dark");
        DEFAULTS.put("language", "en");
    }
}
\`\`\`

The static block runs once when the class is loaded, before any objects are created.

---

## When to Use Static

**Use static for:**
- Utility methods that don't depend on object state (\`Math.sqrt\`, \`Integer.parseInt\`)
- Constants (\`public static final\`)
- Factory methods (alternative constructors)
- Counters or caches shared across all instances

**Don't use static for:**
- Methods that need access to object state (use instance methods)
- Mutable state shared across a whole application (this causes difficult-to-track bugs)

---

## What You Learned

- \`static\` fields are shared across all instances; instance fields are per-object
- \`static\` methods belong to the class; they cannot access \`this\` or instance fields
- Call static members through the class name: \`ClassName.method()\`
- \`public static final\` is the pattern for constants
- Use static for utilities, constants, and shared counters — not for general object behavior

## What Comes Next

Java's Object class provides three methods that all classes inherit: \`toString()\`, \`equals()\`, and \`hashCode()\`. The next lesson explains why these matter and how to override them.

Continue to:
**4.8 toString, equals, and hashCode**
`,
};
