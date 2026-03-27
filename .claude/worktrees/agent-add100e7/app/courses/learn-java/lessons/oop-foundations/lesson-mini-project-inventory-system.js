export const lessonMiniProjectInventorySystem = {
  id: "mini-project-inventory-system",
  title: "Mini-Project: Inventory System",
  hasChallenge: false,
  article: `
## Overview

Build a simple inventory management system using two classes: \`Product\` and \`Inventory\`.

This project introduces multi-class design — classes that work together to solve a problem.

---

## What You're Building

**Product class:**
- Name, ID, price, quantity in stock

**Inventory class:**
- Stores a collection of Products
- Add product
- Remove product by ID
- Update stock quantity
- Find product by ID or name
- Print a full inventory report
- Calculate total inventory value

---

## Requirements Checklist (Core)

**Product class:**
- [ ] Private fields: id (int), name (String), price (double), stock (int)
- [ ] Constructor: \`Product(int id, String name, double price, int stock)\`
- [ ] Getters for all fields
- [ ] \`restock(int quantity)\` — adds to stock
- [ ] \`sell(int quantity)\` — reduces stock; rejects if insufficient
- [ ] \`toString()\` — formatted product summary

**Inventory class:**
- [ ] Internal list of Products
- [ ] \`addProduct(Product p)\` — adds a product
- [ ] \`removeProduct(int id)\` — removes by ID; prints error if not found
- [ ] \`findById(int id)\` — returns Product or null
- [ ] \`findByName(String name)\` — case-insensitive search, returns Product or null
- [ ] \`printReport()\` — prints all products in a formatted table
- [ ] \`getTotalValue()\` — returns sum of (price * stock) for all products

**Main program:**
- [ ] Create an Inventory
- [ ] Add at least 5 products
- [ ] Sell some stock
- [ ] Restock one product
- [ ] Remove a product
- [ ] Print the report
- [ ] Print total inventory value

---

## Rules

- Stock cannot go negative
- Selling more than available stock must print an error
- ID should be unique (don't need to enforce in this version — just be consistent)

---

## Suggested Build Plan

1. Build and test Product in isolation first
2. Build Inventory with just addProduct and printReport
3. Add findById
4. Add removeProduct using findById
5. Add sell and restock to Product
6. Add getTotalValue
7. Wire it all together in Main

---

## Testing Checklist

- [ ] Add products — they appear in the report
- [ ] Sell valid quantity — stock decreases
- [ ] Sell more than available — error, stock unchanged
- [ ] Restock — stock increases
- [ ] Remove by ID — product disappears from report
- [ ] Remove non-existent ID — error message, no crash
- [ ] getTotalValue() calculates correctly

---

## Extension Challenges

### Upgrade 1 — Low Stock Alert
Add a \`getLowStockProducts(int threshold)\` method that returns all products with stock <= threshold.

### Upgrade 2 — Sorted Report
Print the inventory report sorted by price (ascending or descending).

### Upgrade 3 — Save to String
Add a \`toCSV()\` method to Inventory that returns the inventory as a CSV-formatted String.

### Upgrade 4 — Category
Add a \`category\` field to Product. Add \`getProductsByCategory(String category)\` to Inventory.

---

## Submission Requirements

Files: \`Product.java\`, \`Inventory.java\`, \`Main.java\`

Run with:
\`\`\`bash
javac *.java && java Main
\`\`\`
`,
  support: {
    intro: `
Use support in order. This is a multi-class project — focus on one class at a time.
    `.trim(),

    level1Nudges: [
      "What data type should you use to store the collection of Products in Inventory?",
      "How does removeProduct find the right product to remove? (Hint: it needs to search the list)",
      "findById returns a Product — what should it return if no product has that ID?",
      "getTotalValue needs to loop through all products — what calculation happens per product?",
    ],

    level2Hints: [
      "Use ArrayList<Product> in Inventory to store products.",
      "findById: loop through the list, check each product's id, return the matching one. Return null if none found.",
      "removeProduct: call findById first. If null, print error. If found, call list.remove(product).",
      "getTotalValue: double total = 0; for each product: total += product.getPrice() * product.getStock();",
    ],

    blueprint: [
      "Product: private fields, constructor, getters, sell() with validation, restock(), toString().",
      "Inventory: ArrayList<Product> products field.",
      "Inventory.addProduct(Product p): products.add(p).",
      "Inventory.findById(int id): loop, return match or null.",
      "Inventory.removeProduct(int id): find by id, if null print error, else products.remove(p).",
      "Inventory.printReport(): print header, loop and print each product.toString().",
      "Inventory.getTotalValue(): sum price * stock for all products.",
      "Main: create inventory, add products, test all operations.",
    ],

    debuggingGuide: [
      {
        problem: "products.remove(product) isn't removing anything.",
        hint: "Make sure you're removing the Product object reference, not an index. list.remove(product) removes by reference. This works correctly when findById returns the actual object from the list.",
      },
      {
        problem: "findByName doesn't find a product that exists.",
        hint: "Are you doing case-sensitive comparison? Use name.equalsIgnoreCase(searchName) instead of name.equals(searchName).",
      },
    ],

    revealSolutionWarning: `
This is one implementation. Yours may organize methods differently and still be correct.
    `.trim(),

    exampleSolution: `import java.util.ArrayList;

public class Product {
    private int id;
    private String name;
    private double price;
    private int stock;

    public Product(int id, String name, double price, int stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public int getId() { return id; }
    public String getName() { return name; }
    public double getPrice() { return price; }
    public int getStock() { return stock; }

    public void sell(int quantity) {
        if (quantity > stock) {
            System.out.println("Cannot sell " + quantity + " units of " + name + ": only " + stock + " in stock.");
        } else {
            stock -= quantity;
        }
    }

    public void restock(int quantity) {
        stock += quantity;
    }

    @Override
    public String toString() {
        return String.format("ID:%-4d %-20s $%7.2f  Stock: %d", id, name, price, stock);
    }
}`,
  },
};
