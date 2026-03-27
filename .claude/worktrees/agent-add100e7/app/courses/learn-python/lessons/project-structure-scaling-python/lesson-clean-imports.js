export const lessonCleanImports = {
  id: "clean-imports",
  title: "Clean Imports",

  article: `
## Clean Imports

Imports are more than syntax.

They are architectural signals.

Every import answers this question:

"What does this module depend on to do its job?"

When imports are messy, dependencies become hidden and fragile.

When imports are clean, project structure stays predictable as it grows.

---

## Dependency Direction Rule

High-level flow can depend on low-level modules.

Low-level modules should not depend on app entry points.

Good:

\`\`\`text
main.py -> services.py -> storage.py
\`\`\`

Bad:

\`\`\`text
storage.py -> main.py
\`\`\`

That bad direction often creates circular import errors and confusing coupling.

---

## A Clean Import Pattern

\`\`\`python
# main.py
from app.commands import run


if __name__ == "__main__":
    run()
\`\`\`

\`\`\`python
# app/commands.py
from app.storage import load_tasks
\`\`\`

\`\`\`python
# app/storage.py
def load_tasks():
    return []
\`\`\`

Notice the direction:

- \`main.py\` coordinates
- \`commands.py\` handles app behavior
- \`storage.py\` handles data concerns

Dependencies only point downward.

That is what keeps your codebase stable.

---

## Why Circular Imports Happen

Circular imports usually appear when responsibilities are mixed.

Example pattern:

- \`commands.py\` imports \`storage.py\`
- \`storage.py\` imports \`commands.py\`

Now Python cannot fully initialize either module cleanly.

The fix is usually architectural, not a syntax trick:

- move shared logic into a third module
- re-align dependency direction

---

## Import Hygiene Checklist

- Import from clear module paths.
- Avoid \`from x import *\`.
- Keep side effects out of import time.
- Move command execution under \`if __name__ == "__main__":\`.

Clean imports should be boring and predictable.

---

## Common Mistakes

- Circular imports from cross-calling modules.
- Heavy logic running at import time.
- Hiding dependencies with wildcard imports.

Imports should describe, not surprise.

---

## Practice Exercise

Take an older project and do this cleanup pass:

1. Replace at least one wildcard import with explicit imports.
2. Find one risky dependency path and simplify direction.
3. Ensure app execution lives only in \`main()\` or guarded entry code.

Then reflect:

- Can you read dependencies from imports alone?
- Does importing modules have side effects?
- Would a teammate understand dependency flow quickly?

---

## What You Can Now Do

You can design and enforce clean dependency direction, which prevents many hard-to-debug import issues before they start.
`,
};
