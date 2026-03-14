export const lessonMiniProjectFileBackup = {
  id: "mini-project-file-backup",
  title: "Mini Project: File Backup Utility",
  hasChallenge: false,
  article: `
## Mini Project: File Backup Utility

Build a command-line utility that backs up files from a source directory to a backup directory, timestamping each backup so you can keep a history.

---

## What You'll Build

- Scan a source directory for files
- Copy each file to a backup directory with a timestamp in the filename
- Skip files that haven't changed (bonus)
- Print a summary of what was backed up

---

## Expected Output

\`\`\`
Backing up files from: data/
Destination: backups/

  Backed up: notes.txt → backups/notes_2024-03-15T14-22-01.txt
  Backed up: config.json → backups/config_2024-03-15T14-22-01.json
  Backed up: report.csv → backups/report_2024-03-15T14-22-01.csv

Backup complete. 3 files backed up.
\`\`\`

---

## Step 1: Setup

\`\`\`java
import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.stream.Stream;

public class FileBackupUtility {

    private static final DateTimeFormatter TIMESTAMP =
        DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH-mm-ss");
\`\`\`

---

## Step 2: Build the Backup File Name

\`\`\`java
    private static String timestampedName(Path file) {
        String filename = file.getFileName().toString();
        String timestamp = LocalDateTime.now().format(TIMESTAMP);

        int dot = filename.lastIndexOf('.');
        if (dot > 0) {
            String base = filename.substring(0, dot);
            String ext  = filename.substring(dot);          // includes the dot
            return base + "_" + timestamp + ext;
        }
        return filename + "_" + timestamp;
    }
\`\`\`

---

## Step 3: Back Up a Single File

\`\`\`java
    private static void backupFile(Path source, Path destDir) throws IOException {
        String destName = timestampedName(source);
        Path dest = destDir.resolve(destName);

        Files.copy(source, dest, StandardCopyOption.REPLACE_EXISTING);
        System.out.printf("  Backed up: %s → %s%n",
            source.getFileName(), dest.getFileName());
    }
\`\`\`

---

## Step 4: Back Up a Directory

\`\`\`java
    public static int backupDirectory(String sourceDir, String destDir) throws IOException {
        Path source = Path.of(sourceDir);
        Path dest   = Path.of(destDir);

        if (!Files.exists(source) || !Files.isDirectory(source)) {
            throw new IllegalArgumentException("Source is not a valid directory: " + sourceDir);
        }

        Files.createDirectories(dest);

        System.out.println("Backing up files from: " + sourceDir);
        System.out.println("Destination: " + destDir);
        System.out.println();

        int count = 0;
        try (Stream<Path> entries = Files.list(source)) {
            for (Path entry : (Iterable<Path>) entries::iterator) {
                if (Files.isRegularFile(entry)) {
                    backupFile(entry, dest);
                    count++;
                }
            }
        }

        return count;
    }
\`\`\`

---

## Step 5: Main Method

\`\`\`java
    public static void main(String[] args) {
        String sourceDir = args.length > 0 ? args[0] : "data";
        String destDir   = args.length > 1 ? args[1] : "backups";

        try {
            int count = backupDirectory(sourceDir, destDir);
            System.out.println();
            System.out.println("Backup complete. " + count + " files backed up.");
        } catch (IllegalArgumentException e) {
            System.err.println("Error: " + e.getMessage());
        } catch (IOException e) {
            System.err.println("Backup failed: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
\`\`\`

---

## Testing It

1. Create a \`data/\` folder in your project root
2. Add a few text files to it
3. Run the program — check the \`backups/\` folder

---

## Stretch Goals

- Skip files that were last modified before the previous backup (compare \`Files.getLastModifiedTime()\`)
- Recursively back up subdirectories
- Delete backups older than N days
- Accept a \`--dry-run\` flag that shows what would be backed up without copying
- Write a backup log file listing everything that was copied

---

## What You Practiced

- Listing directory contents with \`Files.list()\`
- Copying files with \`Files.copy()\`
- Creating directories with \`Files.createDirectories()\`
- Working with file names and extensions
- Formatting timestamps with \`DateTimeFormatter\`
- Handling command-line arguments

Continue to: **Mini Project: Log File Analyzer with Exception Reporting**
`,
};
