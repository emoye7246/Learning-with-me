export const lessonIntelliJTour = {
  id: "intellij-tour",
  title: "IntelliJ Tour",
  hasChallenge: false,
  article: `
## IntelliJ Tour

IntelliJ can look overwhelming at first. This lesson points out the parts you'll use every day.

---

## The Welcome Screen

When IntelliJ opens, you see the **Welcome Screen**:

- **New Project** — Create a new Java project
- **Open** — Open an existing project folder
- **Recent Projects** — Quickly reopen recent work

You'll also see options to clone from VCS (GitHub) — we'll use this later in the Git module.

---

## The Project Window

Once a project is open, the main window has several zones:

### Left: Project Panel
The file tree showing all your source files, organized by package. This is where you navigate between files.

Keyboard shortcut: **Alt+1** (Windows/Linux) or **Cmd+1** (macOS) to show/hide it.

### Center: Editor
Where you write code. Multiple files can be open as tabs.

### Bottom: Run/Debug Console
Appears when you run or debug your program. Shows output and error messages.

### Right: Gutter Indicators
The narrow strip to the left of your code shows:
- Line numbers
- Breakpoint indicators
- Git change indicators (blue line = modified, green = new)

---

## Running a Program

To run your Java program:

1. Find the file with your \`main\` method in the Project Panel
2. Right-click it → **Run 'FileName.main()'**
3. Or click the green play button in the gutter next to your \`main\` method
4. Output appears in the Run tab at the bottom

Keyboard shortcut: **Shift+F10** (Windows/Linux) or **Ctrl+R** (macOS) to re-run the last configuration.

---

## Keyboard Shortcuts You Need Now

| Action | Windows/Linux | macOS |
|---|---|---|
| Run program | Shift+F10 | Ctrl+R |
| Search everywhere | Double Shift | Double Shift |
| Find in file | Ctrl+F | Cmd+F |
| Rename (refactor) | Shift+F6 | Shift+F6 |
| Auto-format code | Ctrl+Alt+L | Cmd+Option+L |
| Autocomplete | Ctrl+Space | Ctrl+Space |
| Quick fix | Alt+Enter | Option+Enter |
| Go to definition | Ctrl+Click | Cmd+Click |
| Comment/uncomment | Ctrl+/ | Cmd+/ |

The most important is **Alt+Enter** (Option+Enter on Mac). When IntelliJ underlines something in red, put your cursor there and press Alt+Enter — it will suggest fixes.

---

## The Terminal

IntelliJ has a built-in terminal.

Open it with **Alt+F12** (Windows/Linux) or **Option+F12** (macOS), or by clicking the **Terminal** tab at the bottom.

This runs commands from your project root directory. You'll use it for Maven, Gradle, and Git commands.

---

## Autocomplete

Start typing any Java expression and press **Ctrl+Space** to see suggestions.

IntelliJ's autocomplete is context-aware. If you have a \`String\` variable \`name\`, typing \`name.\` will show you all the methods available on String.

This is not cheating. Professional developers use autocomplete constantly. The goal is not to memorize method names — it's to understand what methods exist and when to use them.

---

## Red Underlines and Quick Fixes

IntelliJ underlines problems in your code as you type:

- **Red** — Compile error (your code won't compile)
- **Yellow** — Warning (code will compile but may have issues)
- **Gray** — Suggestion (usually style improvements)

When you see a red underline:
1. Put your cursor on it
2. Press **Alt+Enter** (Option+Enter on Mac)
3. IntelliJ shows you fix options — often it can fix the error automatically

---

## What You Learned

- The Project Panel, Editor, and Run Console are the three zones you'll use most
- Alt+Enter is the most important shortcut — it fixes errors automatically
- The built-in terminal lets you run Maven/Git without leaving IntelliJ
- Autocomplete is a professional tool, not a crutch

## What Comes Next

Before writing any Java, you need to be comfortable with the terminal. The next lesson covers the terminal commands you'll actually use as a Java developer.

Continue to:
**1.5 Terminal Basics for Java**
`,
};
