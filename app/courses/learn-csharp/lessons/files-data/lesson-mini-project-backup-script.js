export const lessonMiniProjectBackupScript = {
  id: "mini-project-backup-script-cs",
  title: "Mini-Project: Backup Script",
  hasChallenge: false,
  article: `
## Mini-Project: Backup Script

Build a console program that copies files from a source directory to a timestamped backup directory. This is a practical utility you might actually use — and it exercises directory traversal, file copying, error handling, and path construction.

---

## What You're Building

A program that:
- Accepts a source directory and a backup root directory as command-line arguments
- Creates a new backup folder named with the current timestamp
- Copies all files from source to the backup folder, preserving subdirectory structure
- Reports progress and a final summary
- Handles individual file errors without aborting the entire backup

\`\`\`
Usage: backup <source-dir> <backup-root>

Example:
  dotnet run -- ./my-project ./backups

Output:
  Backup started: ./backups/my-project_20240315_143022
  [OK] readme.md
  [OK] src/Program.cs
  [OK] src/Helper.cs
  [SKIP] build/output.dll — access denied
  [OK] config/settings.json

  Backup complete.
  Files copied:  4
  Files skipped: 1
  Destination:   ./backups/my-project_20240315_143022
\`\`\`

---

## Getting Started

\`\`\`bash
dotnet new console -n BackupScript
cd BackupScript
\`\`\`

---

## Creating the Timestamped Backup Folder

\`\`\`csharp
string timestamp = DateTime.Now.ToString("yyyyMMdd_HHmmss");
string sourceName = Path.GetFileName(Path.GetFullPath(sourceDir));
string backupName = $"{sourceName}_{timestamp}";
string backupDir = Path.Combine(backupRoot, backupName);

Directory.CreateDirectory(backupDir);
Console.WriteLine($"Backup started: {backupDir}");
\`\`\`

---

## Copying Files with Structure Preserved

To replicate subdirectory structure, calculate the relative path of each file and recreate it in the destination:

\`\`\`csharp
static (int copied, int skipped) CopyDirectory(string source, string destination)
{
    int copied = 0, skipped = 0;
    string fullSource = Path.GetFullPath(source);

    foreach (string filePath in Directory.GetFiles(source, "*", SearchOption.AllDirectories))
    {
        // Get relative path from source root
        string relativePath = Path.GetRelativePath(fullSource, filePath);
        string destPath = Path.Combine(destination, relativePath);

        // Ensure destination subdirectory exists
        string? destDir = Path.GetDirectoryName(destPath);
        if (destDir != null)
            Directory.CreateDirectory(destDir);

        try
        {
            File.Copy(filePath, destPath, overwrite: true);
            Console.WriteLine($"[OK] {relativePath}");
            copied++;
        }
        catch (UnauthorizedAccessException)
        {
            Console.Error.WriteLine($"[SKIP] {relativePath} — access denied");
            skipped++;
        }
        catch (IOException ex)
        {
            Console.Error.WriteLine($"[SKIP] {relativePath} — {ex.Message}");
            skipped++;
        }
    }

    return (copied, skipped);
}
\`\`\`

---

## Argument Validation

\`\`\`csharp
if (args.Length < 2)
{
    Console.Error.WriteLine("Usage: backup <source-dir> <backup-root>");
    Console.Error.WriteLine("Example: dotnet run -- ./my-project ./backups");
    return 1;
}

string sourceDir = args[0];
string backupRoot = args[1];

if (!Directory.Exists(sourceDir))
{
    Console.Error.WriteLine($"Source directory not found: {sourceDir}");
    return 1;
}
\`\`\`

---

## Key Requirements

- [ ] Accepts source and backup root as command-line arguments
- [ ] Creates a timestamped backup folder (format: \`sourcename_YYYYMMDD_HHMMSS\`)
- [ ] Copies all files recursively, preserving subdirectory structure
- [ ] Individual file errors are caught and logged — don't abort the whole backup
- [ ] Reports a final summary: files copied, files skipped
- [ ] Exits with code 1 if source directory doesn't exist or backup root can't be created

---

## Stretch Goals

- **Dry run mode** (\`--dry-run\`) — show what would be copied without doing it
- **Exclude patterns** — skip files matching extensions like \`*.tmp\`, \`*.log\`, or directories like \`bin/\`, \`obj/\`
- **Incremental backup** — only copy files that are newer than the most recent backup
- **Backup rotation** — keep only the N most recent backups, delete older ones
- **Verification** — after copying, compare file sizes or checksums to confirm integrity
- **Progress display** — show \`[5/23] Copying file.txt...\` during the copy

---

## Tips

Use \`Path.GetRelativePath\` (available from .NET 5+) to compute relative paths cleanly. It handles edge cases like trailing slashes and different forms of the same absolute path.

Test with a directory that contains subdirectories, read-only files, and empty subdirectories to make sure each case is handled correctly.
`,
};
