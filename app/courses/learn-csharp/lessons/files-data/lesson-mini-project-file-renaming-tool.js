export const lessonMiniProjectFileRenamingTool = {
  id: "mini-project-file-renaming-tool-cs",
  title: "Mini-Project: File Renaming Tool",
  hasChallenge: false,
  article: `
## Mini-Project: File Renaming Tool

Build a command-line tool that batch renames files in a directory according to user-specified rules: adding a prefix or suffix, replacing text in file names, changing the extension, or converting to a consistent naming convention. This project is a practical utility and a great exercise in path manipulation.

---

## What You're Building

A tool that supports multiple renaming modes:

\`\`\`bash
# Add prefix to all .jpg files
dotnet run -- --prefix "vacation_" --ext .jpg ./photos

# Add suffix before extension
dotnet run -- --suffix "_backup" ./documents

# Change extension
dotnet run -- --change-ext .md --from .txt ./notes

# Replace text in file names
dotnet run -- --replace "IMG_" --with "photo_" ./photos

# Lowercase all file names
dotnet run -- --lowercase ./files

# Always show what would happen first
dotnet run -- --dry-run --prefix "2024_" ./photos
\`\`\`

---

## Getting Started

\`\`\`bash
dotnet new console -n FileRenamer
cd FileRenamer
\`\`\`

---

## Argument Parsing

\`\`\`csharp
string directory = ".";
string? prefix = null;
string? suffix = null;
string? replaceFrom = null;
string? replaceTo = null;
string? changeExt = null;
string? filterExt = null;
bool lowercase = false;
bool dryRun = false;

for (int i = 0; i < args.Length; i++)
{
    switch (args[i])
    {
        case "--prefix":   prefix = args[++i]; break;
        case "--suffix":   suffix = args[++i]; break;
        case "--replace":  replaceFrom = args[++i]; break;
        case "--with":     replaceTo = args[++i]; break;
        case "--change-ext": changeExt = args[++i]; break;
        case "--ext":      filterExt = args[++i]; break;
        case "--lowercase": lowercase = true; break;
        case "--dry-run":  dryRun = true; break;
        default:
            if (!args[i].StartsWith("--"))
                directory = args[i];
            break;
    }
}
\`\`\`

---

## Building the New Name

Compute the new file name from the old one, applying rules in order:

\`\`\`csharp
static string ComputeNewName(string oldName, RenameOptions opts)
{
    string nameWithoutExt = Path.GetFileNameWithoutExtension(oldName);
    string ext = Path.GetExtension(oldName);

    // Apply text replacement
    if (opts.ReplaceFrom != null)
        nameWithoutExt = nameWithoutExt.Replace(opts.ReplaceFrom, opts.ReplaceTo ?? "");

    // Apply prefix
    if (opts.Prefix != null)
        nameWithoutExt = opts.Prefix + nameWithoutExt;

    // Apply suffix
    if (opts.Suffix != null)
        nameWithoutExt = nameWithoutExt + opts.Suffix;

    // Apply lowercase
    if (opts.Lowercase)
        nameWithoutExt = nameWithoutExt.ToLower();

    // Apply extension change
    if (opts.ChangeExt != null)
        ext = opts.ChangeExt.StartsWith('.') ? opts.ChangeExt : "." + opts.ChangeExt;

    return nameWithoutExt + ext;
}
\`\`\`

---

## Performing the Rename

\`\`\`csharp
var files = Directory.GetFiles(directory);
if (filterExt != null)
    files = files.Where(f => Path.GetExtension(f).Equals(filterExt, StringComparison.OrdinalIgnoreCase))
                 .ToArray();

int renamed = 0, skipped = 0, errors = 0;

foreach (string filePath in files)
{
    string dir = Path.GetDirectoryName(filePath)!;
    string oldName = Path.GetFileName(filePath);
    string newName = ComputeNewName(oldName, opts);

    if (oldName == newName)
    {
        skipped++;
        continue;
    }

    string newPath = Path.Combine(dir, newName);

    if (dryRun)
    {
        Console.WriteLine($"[dry-run] {oldName} → {newName}");
        renamed++;
        continue;
    }

    try
    {
        if (File.Exists(newPath))
        {
            Console.Error.WriteLine($"[SKIP] {oldName} → {newName} — destination already exists");
            skipped++;
            continue;
        }

        File.Move(filePath, newPath);
        Console.WriteLine($"[OK] {oldName} → {newName}");
        renamed++;
    }
    catch (IOException ex)
    {
        Console.Error.WriteLine($"[ERROR] {oldName}: {ex.Message}");
        errors++;
    }
}

Console.WriteLine($"\\nDone. Renamed: {renamed}, Skipped: {skipped}, Errors: {errors}");
\`\`\`

---

## Key Requirements

- [ ] Supports at least 3 renaming operations (prefix, suffix, extension change, replace, or lowercase)
- [ ] \`--dry-run\` mode shows changes without making them
- [ ] Filters by extension with \`--ext\`
- [ ] Skips files where the name would not change
- [ ] Refuses to overwrite an existing file — skip with a clear message
- [ ] Reports a summary: renamed, skipped, errors
- [ ] Works correctly on paths with spaces

---

## Stretch Goals

- **Undo file** — write a log of all renames so they can be reversed
- **Numbered sequence** — rename files to \`photo_001.jpg\`, \`photo_002.jpg\`, etc.
- **Recursive mode** — rename files in subdirectories too (\`--recursive\`)
- **Preview table** — show a formatted before/after table in dry-run mode
- **Interactive confirm** — ask "Rename X files? (y/n)" before proceeding in real mode
`,
};
