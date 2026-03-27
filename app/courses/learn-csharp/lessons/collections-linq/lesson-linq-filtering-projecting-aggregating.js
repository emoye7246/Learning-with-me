export const lessonLinqFilteringProjectingAggregating = {
  id: "linq-filtering-projecting-aggregating",
  title: "LINQ — Filtering, Projecting, Aggregating",
  hasChallenge: false,
  article: `
## LINQ — Filtering, Projecting, Aggregating

With the fundamentals of LINQ in place, it's time to master the operators you'll use every day. LINQ operators fall into three broad categories: **filtering** (narrowing down items), **projecting** (transforming items), and **aggregating** (computing a single value from many).

### Setup — Sample Data

\`\`\`csharp
record Product(string Name, string Category, decimal Price, int Stock);

List<Product> products = new List<Product>
{
    new("Laptop", "Electronics", 999.99m, 15),
    new("Phone", "Electronics", 699.99m, 30),
    new("Desk", "Furniture", 349.99m, 8),
    new("Chair", "Furniture", 199.99m, 20),
    new("Keyboard", "Electronics", 79.99m, 50),
    new("Monitor", "Electronics", 449.99m, 12),
    new("Lamp", "Furniture", 49.99m, 40),
};
\`\`\`

### Filtering — Where

\`Where\` keeps items that match a condition:

\`\`\`csharp
// Products under $500
var affordable = products.Where(p => p.Price < 500);

// Electronics with low stock
var lowStockElectronics = products
    .Where(p => p.Category == "Electronics" && p.Stock < 20);

// Chaining multiple Where calls (same as &&)
var result = products
    .Where(p => p.Price < 500)
    .Where(p => p.Stock > 10);
\`\`\`

### Projecting — Select

\`Select\` transforms each item into a new shape:

\`\`\`csharp
// Get just the names
IEnumerable<string> names = products.Select(p => p.Name);

// Get names and prices as anonymous objects
var summary = products.Select(p => new { p.Name, p.Price });
foreach (var item in summary)
    Console.WriteLine($"\${item.Name}: \${item.Price}");

// Transform into a different type
record ProductSummary(string Name, string PriceLabel);
var labels = products.Select(p => new ProductSummary(p.Name, $"\${p.Price:F0}"));

// SelectMany — flatten nested collections
List<List<int>> nested = new() { new() { 1, 2 }, new() { 3, 4 }, new() { 5 } };
IEnumerable<int> flat = nested.SelectMany(list => list); // {1, 2, 3, 4, 5}
\`\`\`

### Ordering

\`\`\`csharp
// Ascending (default)
var byPrice = products.OrderBy(p => p.Price);

// Descending
var byPriceDesc = products.OrderByDescending(p => p.Price);

// Multiple sort keys
var sorted = products
    .OrderBy(p => p.Category)
    .ThenBy(p => p.Price);
\`\`\`

### Grouping — GroupBy

\`GroupBy\` organizes items into groups by a key:

\`\`\`csharp
var byCategory = products.GroupBy(p => p.Category);

foreach (var group in byCategory)
{
    Console.WriteLine($"--- {group.Key} ---");
    foreach (var product in group)
        Console.WriteLine($"  {product.Name}: \${product.Price}");
}
// --- Electronics ---
//   Laptop: $999.99
//   Phone: $699.99
//   ...
// --- Furniture ---
//   Desk: $349.99
//   ...
\`\`\`

### Finding Single Items

\`\`\`csharp
// First match — throws if none found
Product first = products.First(p => p.Price > 500);

// First match — returns null if none found (safe version)
Product? found = products.FirstOrDefault(p => p.Price > 10000);

// Single item — throws if zero or more than one match
Product only = products.Single(p => p.Name == "Laptop");

// Last item
Product last = products.Last();
Product? lastCheap = products.LastOrDefault(p => p.Price < 10);
\`\`\`

### Aggregation — Count, Sum, Average, Min, Max

\`\`\`csharp
int total = products.Count();                          // 7
int electronics = products.Count(p => p.Category == "Electronics"); // 4

decimal totalValue = products.Sum(p => p.Price * p.Stock);
decimal avgPrice = products.Average(p => p.Price);
decimal minPrice = products.Min(p => p.Price);
decimal maxPrice = products.Max(p => p.Price);

Product cheapest = products.MinBy(p => p.Price);  // Returns the item, not just the value
Product priciest = products.MaxBy(p => p.Price);
\`\`\`

### Existence Checks — Any, All

\`\`\`csharp
bool hasExpensive = products.Any(p => p.Price > 900);   // true
bool allInStock = products.All(p => p.Stock > 0);        // true
bool hasNone = !products.Any(p => p.Category == "Books"); // true — no books

// Any() with no argument — just checks if collection is non-empty
bool hasItems = products.Any();
\`\`\`

### Chaining Everything Together

LINQ's real power comes from chaining:

\`\`\`csharp
// "For each category, find the average price of in-stock items, sorted by avg price"
var categoryStats = products
    .Where(p => p.Stock > 0)
    .GroupBy(p => p.Category)
    .Select(g => new
    {
        Category = g.Key,
        AveragePrice = g.Average(p => p.Price),
        Count = g.Count()
    })
    .OrderByDescending(x => x.AveragePrice)
    .ToList();

foreach (var stat in categoryStats)
    Console.WriteLine($"\${stat.Category}: avg \${stat.AveragePrice:F2} ({stat.Count} items)");
\`\`\`

### Distinct, Take, and Skip

\`\`\`csharp
List<string> cats = products.Select(p => p.Category).Distinct().ToList();
// {"Electronics", "Furniture"}

// Pagination
var page1 = products.OrderBy(p => p.Name).Take(3);        // First 3
var page2 = products.OrderBy(p => p.Name).Skip(3).Take(3); // Items 4–6
\`\`\`

### Summary

- \`Where\` filters; \`Select\` transforms; aggregators (\`Count\`, \`Sum\`, \`Average\`, \`Min\`, \`Max\`) reduce to a single value
- \`OrderBy\` / \`OrderByDescending\` + \`ThenBy\` handle multi-level sorting
- \`GroupBy\` organizes items by a key; each group has a \`Key\` and can be iterated
- \`First\` / \`FirstOrDefault\` / \`Single\` retrieve individual items — prefer the \`OrDefault\` variants when a match may not exist
- \`Any\` and \`All\` check conditions across the collection
- Chain operators freely — LINQ's deferred execution means each step is applied efficiently in a single pass
`,
};
