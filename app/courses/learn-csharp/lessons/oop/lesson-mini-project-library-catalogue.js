export const lessonMiniProjectLibraryCatalogue = {
  id: "mini-project-library-catalogue-cs",
  title: "Mini-Project: Library Catalogue System",
  hasChallenge: false,
  article: `
## Mini-Project: Library Catalogue System

In this project you'll build a simple library catalogue using two classes: \`Book\` and \`Library\`. The system supports adding books, searching by title or author, removing books, and displaying the full catalogue. It's a realistic exercise in designing classes with meaningful behavior.

### What You're Building

- A \`Book\` class representing a single book with metadata
- A \`Library\` class managing a collection of books
- A console-based menu to interact with the system

### Step 1: The Book Class

A book has an ISBN (unique identifier), title, author, year, and availability status:

\`\`\`csharp
class Book
{
    public string Isbn { get; }
    public string Title { get; }
    public string Author { get; }
    public int Year { get; }
    public bool IsAvailable { get; private set; } = true;

    public Book(string isbn, string title, string author, int year)
    {
        if (string.IsNullOrWhiteSpace(isbn))   throw new ArgumentException("ISBN cannot be empty.");
        if (string.IsNullOrWhiteSpace(title))  throw new ArgumentException("Title cannot be empty.");
        if (string.IsNullOrWhiteSpace(author)) throw new ArgumentException("Author cannot be empty.");
        if (year < 1 || year > DateTime.Now.Year)
            throw new ArgumentOutOfRangeException(nameof(year), "Invalid publication year.");

        Isbn = isbn.Trim().ToUpper();
        Title = title.Trim();
        Author = author.Trim();
        Year = year;
    }

    public void CheckOut()
    {
        if (!IsAvailable)
            throw new InvalidOperationException($"'{Title}' is already checked out.");
        IsAvailable = false;
    }

    public void Return()
    {
        if (IsAvailable)
            throw new InvalidOperationException($"'{Title}' was not checked out.");
        IsAvailable = true;
    }

    public override string ToString()
    {
        string availability = IsAvailable ? "Available" : "Checked Out";
        return $"[{Isbn}] \\\"{Title}\\\" by {Author} ({Year}) — {availability}";
    }
}
\`\`\`

### Step 2: The Library Class

The \`Library\` class manages the collection and enforces uniqueness by ISBN:

\`\`\`csharp
class Library
{
    private readonly List<Book> _books = new();
    public string Name { get; }

    public Library(string name)
    {
        Name = string.IsNullOrWhiteSpace(name) ? "Library" : name.Trim();
    }

    public bool Add(Book book)
    {
        if (_books.Any(b => b.Isbn == book.Isbn))
        {
            Console.WriteLine($"A book with ISBN {book.Isbn} already exists.");
            return false;
        }
        _books.Add(book);
        return true;
    }

    public bool Remove(string isbn)
    {
        Book? book = FindByIsbn(isbn);
        if (book is null)
        {
            Console.WriteLine($"No book found with ISBN {isbn}.");
            return false;
        }
        _books.Remove(book);
        return true;
    }

    public List<Book> SearchByTitle(string query)
    {
        return _books
            .Where(b => b.Title.Contains(query, StringComparison.OrdinalIgnoreCase))
            .ToList();
    }

    public List<Book> SearchByAuthor(string author)
    {
        return _books
            .Where(b => b.Author.Contains(author, StringComparison.OrdinalIgnoreCase))
            .ToList();
    }

    public Book? FindByIsbn(string isbn) =>
        _books.FirstOrDefault(b => b.Isbn == isbn.ToUpper().Trim());

    public void DisplayCatalogue()
    {
        Console.WriteLine($"\\n=== {Name} — {_books.Count} book(s) ===");
        if (_books.Count == 0)
        {
            Console.WriteLine("No books in catalogue.");
            return;
        }

        foreach (Book book in _books.OrderBy(b => b.Author).ThenBy(b => b.Title))
            Console.WriteLine($"  {book}");

        int available = _books.Count(b => b.IsAvailable);
        Console.WriteLine($"\\nAvailable: {available} | Checked Out: {_books.Count - available}");
    }

    public int Count => _books.Count;
}
\`\`\`

### Step 3: The Main Menu

\`\`\`csharp
Library library = new("City Central Library");

// Seed some data
library.Add(new Book("978-0-06-112008-4", "To Kill a Mockingbird", "Harper Lee", 1960));
library.Add(new Book("978-0-7432-7356-5", "1984", "George Orwell", 1949));
library.Add(new Book("978-0-14-028329-7", "The Great Gatsby", "F. Scott Fitzgerald", 1925));

while (true)
{
    Console.WriteLine("\\n1. View catalogue  2. Search  3. Add book");
    Console.WriteLine("4. Remove book     5. Check out  6. Return  7. Quit");
    Console.Write("Choice: ");

    string? choice = Console.ReadLine()?.Trim();

    switch (choice)
    {
        case "1":
            library.DisplayCatalogue();
            break;

        case "2":
            Console.Write("Search by (t)itle or (a)uthor? ");
            string? searchType = Console.ReadLine()?.Trim().ToLower();
            Console.Write("Query: ");
            string? query = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(query)) break;

            List<Book> results = searchType == "a"
                ? library.SearchByAuthor(query)
                : library.SearchByTitle(query);

            if (results.Count == 0)
                Console.WriteLine("No matching books found.");
            else
                results.ForEach(b => Console.WriteLine($"  {b}"));
            break;

        case "3":
            Console.Write("ISBN: ");   string isbn = Console.ReadLine() ?? "";
            Console.Write("Title: ");  string title = Console.ReadLine() ?? "";
            Console.Write("Author: "); string author = Console.ReadLine() ?? "";
            Console.Write("Year: ");   string yearStr = Console.ReadLine() ?? "";

            if (int.TryParse(yearStr, out int year))
            {
                try
                {
                    library.Add(new Book(isbn, title, author, year));
                    Console.WriteLine("Book added.");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error: {ex.Message}");
                }
            }
            else Console.WriteLine("Invalid year.");
            break;

        case "4":
            Console.Write("ISBN to remove: ");
            string? removeIsbn = Console.ReadLine();
            if (!string.IsNullOrWhiteSpace(removeIsbn))
                library.Remove(removeIsbn);
            break;

        case "5":
            Console.Write("ISBN to check out: ");
            string? checkOutIsbn = Console.ReadLine();
            Book? checkOut = library.FindByIsbn(checkOutIsbn ?? "");
            if (checkOut is null) Console.WriteLine("Book not found.");
            else try { checkOut.CheckOut(); Console.WriteLine("Checked out."); }
                 catch (Exception ex) { Console.WriteLine($"Error: {ex.Message}"); }
            break;

        case "6":
            Console.Write("ISBN to return: ");
            string? returnIsbn = Console.ReadLine();
            Book? returnBook = library.FindByIsbn(returnIsbn ?? "");
            if (returnBook is null) Console.WriteLine("Book not found.");
            else try { returnBook.Return(); Console.WriteLine("Returned."); }
                 catch (Exception ex) { Console.WriteLine($"Error: {ex.Message}"); }
            break;

        case "7":
            Console.WriteLine("Goodbye!");
            return;
    }
}
\`\`\`

### Key Design Decisions

- **ISBN as identity**: The \`Isbn\` property is the unique key — \`Library\` uses it to prevent duplicates and for lookup
- **Invariants in the class**: \`CheckOut\` and \`Return\` throw exceptions when called in the wrong state — the class enforces its own rules
- **Separation of concerns**: \`Book\` knows about itself; \`Library\` knows about the collection
- **LINQ for queries**: \`SearchByTitle\` and \`SearchByAuthor\` use \`Where\` and \`Contains\` for case-insensitive substring matching

### Extensions to Try

- Add a \`Genre\` property and a \`SearchByGenre\` method
- Track who checked out each book (add a \`CheckedOutBy\` string property)
- Serialize the catalogue to JSON and reload it on startup
- Add a \`GetOverdueBooks(int daysAllowed)\` method using a checkout date

### Summary

This project demonstrates how two classes with clear responsibilities can model a real-world system. \`Book\` manages the state and rules of a single book; \`Library\` manages the collection. Together they provide a clean, intuitive API that hides all the details from the main program.
`,
};
