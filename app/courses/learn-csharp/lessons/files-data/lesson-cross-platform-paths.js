export const lessonCrossPlatformPaths = {
  id: "cross-platform-paths",
  title: "Path Class & Cross-Platform File Handling",
  hasChallenge: false,
  article: `
## Path Class & Cross-Platform File Handling

.NET runs on Windows, macOS, and Linux. File paths work differently on each platform: different separators, different root conventions, different case sensitivity. Writing code that works everywhere requires understanding these differences and using the right APIs.

---

## The Core Problem: Path Separators

Windows uses backslash (\`\\\\\`), while macOS and Linux use forward slash (\`/\`):

\`\`\`
Windows: C:\\Users\\Alice\\Documents\\report.csv
Linux:   /home/alice/documents/report.csv
macOS:   /Users/alice/Documents/report.csv
\`\`\`

Hardcoding separators breaks cross-platform code:

\`\`\`csharp
// Wrong — breaks on Linux/macOS
string path = "data\\\\" + "output\\\\" + "report.csv";

// Right — uses Path.Combine
string path = Path.Combine("data", "output", "report.csv");
\`\`\`

\`Path.Combine\` uses \`Path.DirectorySeparatorChar\`, which is the correct separator for the current OS.

---

## Path.DirectorySeparatorChar and AltDirectorySeparatorChar

\`\`\`csharp
// On Windows: '\\' and '/'
// On Linux/macOS: '/' and '/'
Console.WriteLine(Path.DirectorySeparatorChar);
Console.WriteLine(Path.AltDirectorySeparatorChar);
\`\`\`

.NET on Windows accepts both \`\\\\\` and \`/\` in paths. On Linux and macOS, only \`/\` works. This means code using \`/\` often works everywhere, but using \`\\\\\` breaks on non-Windows.

---

## Key Path Methods

\`\`\`csharp
string path = "/home/alice/documents/report.csv";

Path.GetFileName(path)                  // "report.csv"
Path.GetFileNameWithoutExtension(path)  // "report"
Path.GetExtension(path)                 // ".csv"
Path.GetDirectoryName(path)             // "/home/alice/documents"
Path.GetFullPath("relative/file.txt")   // absolute path from current directory
Path.GetTempPath()                      // OS temp directory
Path.GetTempFileName()                  // creates a unique temp file, returns its path
Path.ChangeExtension(path, ".json")     // "/home/alice/documents/report.json"
Path.IsPathRooted(path)                 // true (starts from root)
\`\`\`

---

## Environment.GetFolderPath — Standard OS Directories

Rather than hardcoding paths like \`C:\\Users\\Alice\` or \`/home/alice\`, use \`Environment.GetFolderPath\`:

\`\`\`csharp
// User's home directory
string home = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
// Windows: C:\\Users\\Alice
// macOS:   /Users/alice
// Linux:   /home/alice

// Desktop
string desktop = Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory);

// Application data (for storing config/data)
string appData = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);

// Documents folder
string docs = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);

// Temp directory (same as Path.GetTempPath())
string temp = Path.GetTempPath();
\`\`\`

Use these to store application data in the right OS-appropriate location.

---

## Case Sensitivity Gotcha

Windows file paths are case-insensitive. Linux paths are case-sensitive. macOS is case-insensitive by default (but can be case-sensitive).

\`\`\`csharp
// On Linux: these are different files
File.WriteAllText("Report.txt", "a");
File.WriteAllText("report.txt", "b");

// On Windows: the second call overwrites the first
\`\`\`

Always be consistent with casing in your file names. Prefer lowercase for file and directory names in cross-platform code.

---

## Rooted vs. Relative Paths

\`\`\`csharp
// Absolute (rooted) path — starts from the file system root
string absolute = "/home/alice/data.txt";       // Linux/macOS
string windowsAbs = "C:\\\\Users\\\\Alice\\\\data.txt"; // Windows

// Relative path — relative to the current working directory
string relative = "data/output.txt";

// Convert relative to absolute
string full = Path.GetFullPath(relative);

// Check if rooted
bool isAbsolute = Path.IsPathRooted(relative);  // false
\`\`\`

---

## Current Directory vs. Executable Directory

Two common confusions:

\`\`\`csharp
// Current working directory — where the shell was when you ran the program
string cwd = Directory.GetCurrentDirectory();

// Directory containing the executable — where your .dll or .exe lives
string exeDir = AppContext.BaseDirectory;

// For data files bundled with your app, use AppContext.BaseDirectory
string dataPath = Path.Combine(AppContext.BaseDirectory, "data", "seeds.json");
\`\`\`

When running with \`dotnet run\`, \`Directory.GetCurrentDirectory()\` is the project folder. When deployed, it's wherever the user was when they ran the app. Use \`AppContext.BaseDirectory\` for files that ship with the application.

---

## Building a Cross-Platform Config Path

A common pattern for storing per-user configuration:

\`\`\`csharp
static string GetConfigPath(string appName)
{
    string appData = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
    string configDir = Path.Combine(appData, appName);
    Directory.CreateDirectory(configDir);
    return Path.Combine(configDir, "config.json");
}

string configPath = GetConfigPath("MyApp");
// Windows: C:\\Users\\Alice\\AppData\\Roaming\\MyApp\\config.json
// macOS:   /Users/alice/.config/MyApp/config.json (on some distros)
// Linux:   /home/alice/.config/MyApp/config.json
\`\`\`

---

## What Comes Next

The following lessons are hands-on mini-projects where you'll apply everything from this module: reading, writing, CSV, JSON, and directory navigation all working together in real programs.
`,
};
