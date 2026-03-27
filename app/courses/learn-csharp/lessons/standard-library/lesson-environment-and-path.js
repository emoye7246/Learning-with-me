export const lessonEnvironmentAndPath = {
  id: "environment-and-path",
  title: "Environment & Path — OS-Level Information",
  hasChallenge: false,
  article: `
## Environment & Path — OS-Level Information

Every application runs inside an operating system that exposes machine state, user information, configuration values, and file system structure. The \`System.Environment\` class and the \`System.IO.Path\` class are your primary tools for reading and navigating that context in a cross-platform way.

---

## Environment Variables

Environment variables are key-value pairs set by the OS, shell, or deployment system. They are the standard way to inject configuration into applications without hardcoding values.

\`\`\`csharp
// Read an environment variable (returns null if not set)
string? apiKey = Environment.GetEnvironmentVariable("MY_API_KEY");

if (apiKey is null)
{
    Console.WriteLine("API key not configured.");
    return;
}

// With a fallback default
string env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production";
\`\`\`

Setting environment variables at runtime (affects current process only):

\`\`\`csharp
Environment.SetEnvironmentVariable("DEBUG_MODE", "true");
\`\`\`

You can also scope reads to the machine, user, or process level:

\`\`\`csharp
string? path = Environment.GetEnvironmentVariable("PATH", EnvironmentVariableTarget.Process);
\`\`\`

In production .NET applications (ASP.NET Core, Azure Functions), prefer \`IConfiguration\` over direct \`Environment.GetEnvironmentVariable\` calls — it abstracts over environment variables, JSON config, and secrets in a unified way. But knowing how to read environment variables directly is essential for CLI tools and scripts.

---

## Machine and User Information

\`\`\`csharp
Console.WriteLine(Environment.MachineName);       // DESKTOP-ABC123
Console.WriteLine(Environment.UserName);           // alice
Console.WriteLine(Environment.UserDomainName);     // CORP
Console.WriteLine(Environment.ProcessorCount);     // 8
Console.WriteLine(Environment.SystemPageSize);     // 4096
Console.WriteLine(Environment.Is64BitOperatingSystem); // True
Console.WriteLine(Environment.Is64BitProcess);         // True
Console.WriteLine(Environment.WorkingSet);         // bytes of RAM used by process
\`\`\`

---

## OSVersion and Platform Detection

\`\`\`csharp
Console.WriteLine(Environment.OSVersion);
// Microsoft Windows NT 10.0.22621.0

// Cross-platform checks (preferred in modern .NET)
if (OperatingSystem.IsWindows())
    Console.WriteLine("Running on Windows");
else if (OperatingSystem.IsMacOS())
    Console.WriteLine("Running on macOS");
else if (OperatingSystem.IsLinux())
    Console.WriteLine("Running on Linux");
\`\`\`

Use \`OperatingSystem.IsWindows()\` rather than parsing \`OSVersion.Platform\` — it's cleaner and gets correct results even on .NET MAUI and Blazor.

---

## SpecialFolder — Standard OS Paths

\`Environment.GetFolderPath\` resolves OS-specific special directories in a cross-platform way:

\`\`\`csharp
string desktop     = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
string documents   = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
string appData     = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
string localApp    = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
string programData = Environment.GetFolderPath(Environment.SpecialFolder.CommonApplicationData);
string temp        = Path.GetTempPath(); // System temp directory

Console.WriteLine(appData);
// Windows: C:\\Users\\alice\\AppData\\Roaming
// macOS:   /Users/alice/.config
// Linux:   /home/alice/.config
\`\`\`

For storing application data, \`LocalApplicationData\` is the right choice on all platforms.

---

## The Path Class

\`System.IO.Path\` provides methods for building and dissecting file system paths safely. Never concatenate paths with string \`+\` — use \`Path.Combine\`:

\`\`\`csharp
string dir  = @"C:\\Users\\alice";
string file = "notes.txt";

string full = Path.Combine(dir, file);
// C:\\Users\\alice\\notes.txt (Windows)
// /Users/alice/notes.txt (macOS/Linux)
\`\`\`

Inspecting paths:

\`\`\`csharp
string path = @"/home/alice/projects/app/src/main.cs";

Console.WriteLine(Path.GetFileName(path));           // main.cs
Console.WriteLine(Path.GetFileNameWithoutExtension(path)); // main
Console.WriteLine(Path.GetExtension(path));          // .cs
Console.WriteLine(Path.GetDirectoryName(path));      // /home/alice/projects/app/src
Console.WriteLine(Path.GetFullPath("./relative"));   // absolute path from current dir
\`\`\`

Generating safe temporary paths:

\`\`\`csharp
string tempFile = Path.GetTempFileName();     // creates a unique temp file
string tempDir  = Path.GetTempPath();         // system temp directory
string random   = Path.GetRandomFileName();   // random file name, no file created
\`\`\`

---

## Combining Environment and Path

A practical pattern for cross-platform config file location:

\`\`\`csharp
string configDir = Path.Combine(
    Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
    "MyApp"
);
Directory.CreateDirectory(configDir);

string configFile = Path.Combine(configDir, "settings.json");
Console.WriteLine($"Config file: {configFile}");
\`\`\`

This works correctly on Windows, macOS, and Linux without any platform-specific code.
`,
};
