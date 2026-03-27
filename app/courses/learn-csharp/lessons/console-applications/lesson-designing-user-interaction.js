export const lessonDesigningUserInteraction = {
  id: "designing-user-interaction-cs",
  title: "Designing User Interaction in the Terminal",
  hasChallenge: false,
  article: `
## Designing User Interaction in the Terminal

A well-designed CLI is predictable, forgiving, and clear. The terminal is a minimal environment — no buttons, no icons, no hover states — so the quality of your user interaction depends entirely on your output text and your input handling logic.

---

## The Menu Loop Pattern

Most interactive console apps are built around a loop that presents a menu, reads a choice, acts on it, and repeats:

\`\`\`csharp
while (true)
{
    Console.WriteLine();
    Console.WriteLine("=== Main Menu ===");
    Console.WriteLine("1. Add item");
    Console.WriteLine("2. List items");
    Console.WriteLine("3. Delete item");
    Console.WriteLine("0. Exit");
    Console.Write("Choice: ");

    string? input = Console.ReadLine()?.Trim();

    switch (input)
    {
        case "1": AddItem(); break;
        case "2": ListItems(); break;
        case "3": DeleteItem(); break;
        case "0": return;
        default:
            Console.WriteLine("Unknown option. Please try again.");
            break;
    }
}
\`\`\`

The loop runs until the user explicitly exits. Each option delegates to a method, keeping the loop thin and readable.

---

## Prompts and Input Validation

Never assume user input is valid. Always validate before using it:

\`\`\`csharp
static int PromptInt(string prompt, int min, int max)
{
    while (true)
    {
        Console.Write(prompt);
        string? input = Console.ReadLine();

        if (int.TryParse(input, out int value) && value >= min && value <= max)
            return value;

        Console.WriteLine($"Please enter a number between {min} and {max}.");
    }
}

static string PromptNonEmpty(string prompt)
{
    while (true)
    {
        Console.Write(prompt);
        string? input = Console.ReadLine()?.Trim();
        if (!string.IsNullOrEmpty(input))
            return input;
        Console.WriteLine("This field cannot be empty.");
    }
}
\`\`\`

These helper methods loop until valid input is received. Centralizing validation logic reduces duplication.

---

## Console Colors

\`Console.ForegroundColor\` and \`Console.BackgroundColor\` let you add meaning through color. Always reset afterward:

\`\`\`csharp
static void PrintSuccess(string message)
{
    Console.ForegroundColor = ConsoleColor.Green;
    Console.WriteLine($"[OK] {message}");
    Console.ResetColor();
}

static void PrintError(string message)
{
    Console.ForegroundColor = ConsoleColor.Red;
    Console.WriteLine($"[ERROR] {message}");
    Console.ResetColor();
}

static void PrintWarning(string message)
{
    Console.ForegroundColor = ConsoleColor.Yellow;
    Console.WriteLine($"[WARN] {message}");
    Console.ResetColor();
}
\`\`\`

Use color sparingly and with purpose. Overuse makes output hard to read. Always call \`Console.ResetColor()\` — failing to reset leaves the terminal in a broken state after the program exits.

---

## Clearing the Screen

\`Console.Clear()\` clears the terminal, useful for menu-driven apps that want a clean display:

\`\`\`csharp
Console.Clear();
Console.WriteLine("=== Welcome ===");
\`\`\`

Use it deliberately — don't clear on every keystroke. Users may want to scroll up to see previous output.

---

## Progress Indicators

For long-running operations, give feedback so the user knows the program is working:

\`\`\`csharp
// Simple spinner
static async Task ShowSpinner(Task work)
{
    char[] frames = ['|', '/', '-', '\\\\'];
    int i = 0;
    while (!work.IsCompleted)
    {
        Console.Write($"\\rProcessing... {frames[i++ % frames.Length]}");
        await Task.Delay(100);
    }
    Console.Write("\\r                    \\r");  // clear the spinner line
}

// Simple progress bar
static void ShowProgress(int current, int total, int width = 40)
{
    float ratio = (float)current / total;
    int filled = (int)(ratio * width);
    string bar = new string('#', filled) + new string('-', width - filled);
    Console.Write($"\\r[{bar}] {current}/{total}");
}
\`\`\`

The \`\\r\` (carriage return) moves the cursor to the beginning of the current line without advancing to the next, enabling in-place updates.

---

## UX Principles for CLI Programs

**Be explicit about what you expect.** Write "Enter a number between 1 and 10" not just "Enter a number."

**Confirm destructive actions.** Before deleting data, ask: "Are you sure? (y/n)"

\`\`\`csharp
static bool Confirm(string prompt)
{
    Console.Write($"{prompt} (y/n): ");
    string? response = Console.ReadLine()?.Trim().ToLower();
    return response == "y" || response == "yes";
}
\`\`\`

**Be consistent.** If pressing 0 exits in one menu, it should exit in all menus. If you use brackets for prompts in one place, use them everywhere.

**Handle empty input gracefully.** \`Console.ReadLine()\` returns \`null\` if stdin is closed (e.g., in a pipe). Always null-check.

**Write errors to stderr.** Use \`Console.Error.WriteLine()\` for error messages so they don't pollute stdout when the program is piped.

---

## What Comes Next

The next lesson covers exception handling in CLI programs — catching errors gracefully, writing helpful error messages, and preventing your program from crashing on unexpected input.
`,
};
