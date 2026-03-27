export const projectLibraryCatalogue = {
  id: "project-library-catalogue",
  title: "Project: Library Catalogue System",

  article: `
## Overview

Build a library catalogue system using OOP.

Users can add books, search by title or author, check out books, return them, and view availability.

This project is about managing a collection of objects — not just one entity — and letting them interact.

---

## Functional Requirements

Your system must:

- [ ] Define a \`Book\` class with title, author, ISBN, and available status
- [ ] Define a \`Library\` class that manages a collection of books
- [ ] Add books to the library
- [ ] Search by title (partial match, case-insensitive)
- [ ] Search by author (partial match, case-insensitive)
- [ ] Check out a book (marks as unavailable)
- [ ] Return a book (marks as available again)
- [ ] List all books with availability status
- [ ] Handle checking out an already-checked-out book gracefully

---

## User Flow

1. Library starts empty (or pre-seeded with books).
2. Books are added to the catalogue.
3. User searches for a book.
4. User checks out an available book.
5. User returns a book.
6. User views the full catalogue.

---

## Suggested Class Structure

\`\`\`text
Book
  - title: str
  - author: str
  - isbn: str
  - available: bool

  + checkout() → None
  + return_book() → None
  + __str__() → str

Library
  - books: list[Book]

  + add_book(book) → None
  + search_title(query) → list[Book]
  + search_author(query) → list[Book]
  + checkout_book(isbn) → None
  + return_book(isbn) → None
  + list_all() → None
\`\`\`

---

## Implementation Milestones

1. Define \`Book\` with \`__init__\`, \`checkout\`, \`return_book\`, and \`__str__\`.
2. Define \`Library\` with \`__init__\` and \`add_book\`.
3. Implement search methods (filter by partial title/author match).
4. Implement \`checkout_book\` and \`return_book\` on \`Library\` (find book by ISBN first).
5. Implement \`list_all\` with availability indicators.
6. Write a demo \`main.py\` that exercises all features.

---

## Testing Checklist

- [ ] Add 5 books to the library
- [ ] Search for a book by partial title — returns correct results
- [ ] Search for books by author — returns all matching books
- [ ] Check out a book and confirm it's marked unavailable
- [ ] Try to check out the same book again — should print an error
- [ ] Return the book and confirm it's available again
- [ ] List all books and verify formatting
- [ ] Search for a non-existent book — returns empty list gracefully

---

## Optional Extensions

- [ ] Add a \`Member\` class that tracks who checked out what
- [ ] Limit members to 3 checked-out books at a time
- [ ] Add due dates using Python's \`datetime\`
- [ ] Save/load catalogue from JSON

---

## Submission Requirements

Entry file: \`main.py\`

Run with:

\`\`\`bash
python main.py
\`\`\`

---

## What This Project Proves

You can build a system with multiple interacting classes, maintain a collection of objects, and implement searching, state changes, and lookup by identifier.
`,

  support: {
    intro: `
Use this support in order.

Level 1 first. Level 2 if needed. Blueprint to unblock.
Only read the example solution after you've made a real attempt.
    `.trim(),

    level1Nudges: [
      "What information does a single Book need to track?",
      "How will Library find a specific book — by title, author, or ISBN?",
      "What does it mean for a book to be 'checked out'? What changes?",
      "How will search_title() compare user input to book titles case-insensitively?",
      "How will you handle a search that returns no results?",
      "What should happen if someone tries to check out a book that doesn't exist?",
    ],

    level2Hints: [
      "Book has self.available = True. checkout() sets it False. return_book() sets it True.",
      "Library stores self.books = []. add_book() appends a Book object.",
      "search_title(query): return [b for b in self.books if query.lower() in b.title.lower()].",
      "checkout_book(isbn): find book with matching isbn, then call book.checkout() if available.",
      "Use next() with a default to find a book by ISBN: next((b for b in self.books if b.isbn == isbn), None).",
    ],

    blueprint: [
      "Define class Book with __init__(title, author, isbn, available=True).",
      "Add Book.checkout(): if available, set False and confirm. Else print already checked out.",
      "Add Book.return_book(): set available=True and confirm.",
      "Add Book.__str__(): return formatted string with title, author, status.",
      "Define class Library with __init__(self): self.books = [].",
      "Add Library.add_book(book): append book to self.books.",
      "Add Library.search_title(query): return filtered list.",
      "Add Library.search_author(query): return filtered list.",
      "Add Library.checkout_book(isbn): find book, call checkout on it.",
      "Add Library.return_book(isbn): find book, call return_book on it.",
      "Add Library.list_all(): print each book.",
      "Write main.py: seed library, demo all features.",
    ],

    debuggingGuide: [
      {
        problem: "search_title() returns nothing even when the book exists.",
        hint: "Check your case comparison. Use .lower() on both sides: query.lower() in b.title.lower().",
      },
      {
        problem: "Checking out fails but the book is in the library.",
        hint: "Confirm your ISBN lookup is exact. Print the book's ISBN and compare to what you're passing.",
      },
      {
        problem: "All books share the same available status.",
        hint: "available is probably a class attribute. Move self.available = True into __init__.",
      },
    ],

    revealSolutionWarning: `
This is a reference implementation.

If your solution handles all checklist items correctly, it's valid.
Use this to compare design decisions, not to replace your own work.
    `.trim(),

    exampleSolution: `class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.available = True

    def checkout(self):
        if not self.available:
            print(f"'{self.title}' is already checked out.")
        else:
            self.available = False
            print(f"Checked out: '{self.title}'")

    def return_book(self):
        self.available = True
        print(f"Returned: '{self.title}'")

    def __str__(self):
        status = "Available" if self.available else "Checked Out"
        return f"{self.title} by {self.author} (ISBN: {self.isbn}) — {status}"


class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def _find_by_isbn(self, isbn):
        return next((b for b in self.books if b.isbn == isbn), None)

    def search_title(self, query):
        return [b for b in self.books if query.lower() in b.title.lower()]

    def search_author(self, query):
        return [b for b in self.books if query.lower() in b.author.lower()]

    def checkout_book(self, isbn):
        book = self._find_by_isbn(isbn)
        if not book:
            print(f"No book found with ISBN {isbn}.")
        else:
            book.checkout()

    def return_book(self, isbn):
        book = self._find_by_isbn(isbn)
        if not book:
            print(f"No book found with ISBN {isbn}.")
        else:
            book.return_book()

    def list_all(self):
        if not self.books:
            print("No books in catalogue.")
        for b in self.books:
            print(b)


if __name__ == "__main__":
    lib = Library()
    lib.add_book(Book("Clean Code", "Robert Martin", "9780132350884"))
    lib.add_book(Book("The Pragmatic Programmer", "David Thomas", "9780135957059"))
    lib.add_book(Book("Python Crash Course", "Eric Matthes", "9781593279288"))

    lib.list_all()
    lib.checkout_book("9780132350884")
    lib.checkout_book("9780132350884")   # already checked out
    lib.return_book("9780132350884")
    results = lib.search_title("python")
    for b in results:
        print(b)`,

    upgrades: {
      memberBlueprint: [
        "Create Member class with name and checked_out list.",
        "Add checkout_limit = 3 as class attribute.",
        "Library.checkout_book() accepts member parameter and enforces limit.",
      ],
      persistenceBlueprint: [
        "Serialize books to JSON using book.__dict__.",
        "Save on every mutation.",
        "Load on Library.__init__.",
      ],
    },
  },
};
