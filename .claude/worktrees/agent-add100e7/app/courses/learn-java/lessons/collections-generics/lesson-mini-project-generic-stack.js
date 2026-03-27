export const lessonMiniProjectGenericStack = {
  id: "mini-project-generic-stack",
  title: "Mini-Project: Generic Stack",
  hasChallenge: false,
  article: `
## Overview

Build a generic \`Stack<T>\` class that works with any type.

A stack is a Last-In, First-Out (LIFO) data structure. The last element pushed is the first one popped.

This project tests your understanding of generics in class design.

---

## What You're Building

A \`Stack<T>\` class that wraps an ArrayList and provides stack operations:

- \`push(T item)\` — add to top
- \`pop()\` — remove and return top element
- \`peek()\` — look at top without removing
- \`isEmpty()\` — is the stack empty?
- \`size()\` — number of elements
- \`toString()\` — display contents

---

## Requirements Checklist (Core)

- [ ] \`Stack<T>\` is a generic class with type parameter \`T\`
- [ ] Internal storage: \`ArrayList<T>\`
- [ ] \`push(T item)\` — adds item to top
- [ ] \`pop()\` — removes and returns top item; throws exception if empty
- [ ] \`peek()\` — returns top item without removing; throws exception if empty
- [ ] \`isEmpty()\` — returns true if no elements
- [ ] \`size()\` — returns element count
- [ ] \`toString()\` — shows stack contents (top first)

**Test your stack with at least two different types:**
- \`Stack<Integer>\`
- \`Stack<String>\`

---

## Rules

- \`pop()\` and \`peek()\` on an empty stack must throw \`EmptyStackException\` or \`NoSuchElementException\`
- The class must be generic — it cannot be tied to a specific type

---

## Suggested Build Plan

1. Create \`Stack<T>\` class with \`private ArrayList<T> items\`
2. Implement \`push\` (add to end)
3. Implement \`pop\` (remove from end, check empty first)
4. Implement \`peek\` (return last without removing)
5. Implement \`isEmpty\` and \`size\`
6. Implement \`toString\`
7. In Main: create Stack<Integer>, push/pop several times; do the same for Stack<String>

---

## Testing Checklist

- [ ] push 3 items, pop them — they come back in reverse order
- [ ] peek after push — returns top item, size unchanged
- [ ] pop from empty stack — exception is thrown, not null
- [ ] Stack<Integer> and Stack<String> both work correctly
- [ ] toString shows contents in correct order (top first)

---

## Extension Challenges

### Upgrade 1 — Bounded Size
Add a maximum capacity. Push beyond capacity throws an exception.

### Upgrade 2 — Iterator
Make \`Stack<T>\` implement \`Iterable<T>\` so it can be used in for-each loops.

### Upgrade 3 — Utility Methods
Add \`contains(T item)\`, \`clear()\`, \`toArray()\`.

### Upgrade 4 — Stack Calculator
Use your stack to implement a simple reverse-Polish notation (RPN) calculator.

---

## Submission Requirements

Files: \`Stack.java\`, \`Main.java\`

Run with:
\`\`\`bash
javac Stack.java Main.java && java Main
\`\`\`

---

## What You're Proving

Building a generic data structure from scratch shows you understand:
- Generic class design
- Invariant enforcement (can't pop from empty)
- Type safety without knowing the concrete type in advance
`,
  support: {
    intro: "Get the basic push/pop working before adding toString and exception handling.".trim(),

    level1Nudges: [
      "The 'top' of the stack should be the last element added. Which end of ArrayList is that?",
      "How do you check if the stack is empty before popping?",
      "What should pop() do if the stack is empty — return null or throw an exception?",
    ],

    level2Hints: [
      "ArrayList's last element is at index items.size() - 1. That's your 'top'.",
      "pop(): if (isEmpty()) throw new NoSuchElementException(); return items.remove(items.size() - 1);",
      "peek(): if (isEmpty()) throw new NoSuchElementException(); return items.get(items.size() - 1);",
      "toString(): build from end to start so top appears first.",
    ],

    blueprint: [
      "public class Stack<T> {",
      "  private ArrayList<T> items = new ArrayList<>();",
      "  push(T item): items.add(item);",
      "  pop(): check empty, return items.remove(items.size() - 1);",
      "  peek(): check empty, return items.get(items.size() - 1);",
      "  isEmpty(): return items.isEmpty();",
      "  size(): return items.size();",
      "  toString(): build reversed string from items.",
      "}",
    ],

    debuggingGuide: [
      {
        problem: "My stack returns items in push order, not reverse.",
        hint: "Remember: the last item pushed should be the first popped. Use items.remove(items.size() - 1) to remove from the END (which is the top).",
      },
    ],

    revealSolutionWarning: "One implementation. Note how generic <T> makes it reusable.".trim(),

    exampleSolution: `import java.util.ArrayList;
import java.util.NoSuchElementException;

public class Stack<T> {
    private ArrayList<T> items = new ArrayList<>();

    public void push(T item) {
        items.add(item);
    }

    public T pop() {
        if (isEmpty()) throw new NoSuchElementException("Stack is empty");
        return items.remove(items.size() - 1);
    }

    public T peek() {
        if (isEmpty()) throw new NoSuchElementException("Stack is empty");
        return items.get(items.size() - 1);
    }

    public boolean isEmpty() { return items.isEmpty(); }
    public int size() { return items.size(); }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("[TOP] ");
        for (int i = items.size() - 1; i >= 0; i--) {
            sb.append(items.get(i));
            if (i > 0) sb.append(", ");
        }
        return sb.toString();
    }
}`,
  },
};
