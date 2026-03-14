export const lessonMiniProjectTddExercise = {
  id: "mini-project-tdd-exercise",
  title: "Mini Project: Test-Driven Development Exercise",
  hasChallenge: false,
  article: `
## Mini Project: Test-Driven Development Exercise

**Test-Driven Development (TDD)** flips the usual order: you write the test first, watch it fail, then write just enough code to make it pass.

This exercise guides you through TDD to build a \`ShoppingCart\` class from scratch.

---

## The TDD Cycle

\`\`\`
1. RED   — Write a failing test for a behavior that doesn't exist yet
2. GREEN — Write the minimum code to make it pass
3. REFACTOR — Clean up the code without breaking the test
\`\`\`

Repeat for each new behavior.

---

## What You'll Build

A \`ShoppingCart\` that:
- Adds items with name, price, and quantity
- Calculates the total price
- Applies a discount percentage
- Removes items by name
- Tracks item count

---

## Round 1: RED — Write the First Test

Create the test class first. The \`ShoppingCart\` class doesn't exist yet.

\`\`\`java
// src/test/java/com/example/shop/ShoppingCartTest.java
package com.example.shop;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class ShoppingCartTest {

    @Test
    void newCart_hasZeroTotal() {
        ShoppingCart cart = new ShoppingCart();
        assertEquals(0.0, cart.getTotal());
    }
}
\`\`\`

This won't compile — \`ShoppingCart\` doesn't exist. That's the red phase.

---

## Round 1: GREEN — Make It Compile and Pass

\`\`\`java
// src/main/java/com/example/shop/ShoppingCart.java
package com.example.shop;

public class ShoppingCart {
    public double getTotal() {
        return 0.0;
    }
}
\`\`\`

Test passes. ✓

---

## Round 2: Adding Items

\`\`\`java
@Test
void addItem_increasesTotal() {
    ShoppingCart cart = new ShoppingCart();
    cart.addItem("Apple", 1.50, 3);
    assertEquals(4.50, cart.getTotal(), 0.001);
}

@Test
void addItem_multipleItems_summedCorrectly() {
    ShoppingCart cart = new ShoppingCart();
    cart.addItem("Apple", 1.50, 2);   // 3.00
    cart.addItem("Bread", 2.99, 1);   // 2.99
    assertEquals(5.99, cart.getTotal(), 0.001);
}
\`\`\`

Now implement:

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ShoppingCart {
    private final List<CartItem> items = new ArrayList<>();

    public void addItem(String name, double price, int quantity) {
        items.add(new CartItem(name, price, quantity));
    }

    public double getTotal() {
        return items.stream()
            .mapToDouble(i -> i.price() * i.quantity())
            .sum();
    }
}

record CartItem(String name, double price, int quantity) {}
\`\`\`

---

## Round 3: Item Count

\`\`\`java
@Test
void getItemCount_returnsNumberOfDistinctItems() {
    ShoppingCart cart = new ShoppingCart();
    cart.addItem("Apple", 1.50, 3);
    cart.addItem("Bread", 2.99, 1);
    assertEquals(2, cart.getItemCount());
}
\`\`\`

Implement:

\`\`\`java
public int getItemCount() {
    return items.size();
}
\`\`\`

---

## Round 4: Removing Items

\`\`\`java
@Test
void removeItem_removesMatchingItem() {
    ShoppingCart cart = new ShoppingCart();
    cart.addItem("Apple", 1.50, 2);
    cart.addItem("Bread", 2.99, 1);
    cart.removeItem("Apple");
    assertEquals(2.99, cart.getTotal(), 0.001);
    assertEquals(1, cart.getItemCount());
}

@Test
void removeItem_doesNothingWhenItemNotFound() {
    ShoppingCart cart = new ShoppingCart();
    cart.addItem("Apple", 1.50, 1);
    assertDoesNotThrow(() -> cart.removeItem("Orange"));
    assertEquals(1, cart.getItemCount());
}
\`\`\`

Implement:

\`\`\`java
public void removeItem(String name) {
    items.removeIf(i -> i.name().equals(name));
}
\`\`\`

---

## Round 5: Discount

\`\`\`java
@Test
void applyDiscount_reducesTotalByPercentage() {
    ShoppingCart cart = new ShoppingCart();
    cart.addItem("Laptop", 1000.0, 1);
    cart.applyDiscount(10);  // 10% off
    assertEquals(900.0, cart.getTotal(), 0.001);
}

@Test
void applyDiscount_throwsOnInvalidPercentage() {
    ShoppingCart cart = new ShoppingCart();
    assertThrows(IllegalArgumentException.class, () -> cart.applyDiscount(-5));
    assertThrows(IllegalArgumentException.class, () -> cart.applyDiscount(101));
}
\`\`\`

Implement:

\`\`\`java
private double discountPercent = 0;

public void applyDiscount(double percent) {
    if (percent < 0 || percent > 100) {
        throw new IllegalArgumentException("Discount must be between 0 and 100");
    }
    this.discountPercent = percent;
}

public double getTotal() {
    double subtotal = items.stream()
        .mapToDouble(i -> i.price() * i.quantity())
        .sum();
    return subtotal * (1 - discountPercent / 100);
}
\`\`\`

---

## What TDD Taught You Here

Notice what happened:
- Every feature started with a clear, testable specification
- Implementation was always driven by a concrete failing test
- Edge cases (invalid discount, missing item) were caught before coding
- The final class has full test coverage with zero extra effort

---

## What You Practiced

- The red-green-refactor TDD cycle
- Writing tests before implementation
- Building up a class incrementally through tests
- Naturally arriving at clean, testable code through TDD discipline

This completes Course 9 — Testing with JUnit.
`,
};
