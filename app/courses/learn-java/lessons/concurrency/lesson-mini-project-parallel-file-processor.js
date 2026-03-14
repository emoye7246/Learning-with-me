export const lessonMiniProjectParallelFileProcessor = {
  id: "mini-project-parallel-file-processor",
  title: "Mini Project: Parallel File Processor using ExecutorService",
  hasChallenge: false,
  article: `
## Mini Project: Parallel File Processor using ExecutorService

Build a program that processes multiple files in parallel using a thread pool, counts words in each file, and aggregates the results.

---

## What You'll Build

- Accept a directory of text files
- Process each file in a separate thread
- Count total words across all files
- Print per-file results and a grand total

---

## Expected Output

\`\`\`
Processing files in: data/
Using 4 threads

  chapter1.txt : 1,234 words
  chapter2.txt :   987 words
  chapter3.txt : 1,567 words
  chapter4.txt :   823 words

Total: 4,611 words
Processed in: 127ms
\`\`\`

---

## Step 1: Word Counter Task

\`\`\`java
import java.io.*;
import java.nio.file.*;
import java.util.concurrent.*;

public record FileWordCount(String filename, int wordCount) {}

public class WordCountTask implements Callable<FileWordCount> {
    private final Path file;

    public WordCountTask(Path file) {
        this.file = file;
    }

    @Override
    public FileWordCount call() throws IOException {
        int count = 0;
        try (BufferedReader reader = new BufferedReader(new FileReader(file.toFile()))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] words = line.trim().split("\\\\s+");
                if (words.length > 0 && !words[0].isEmpty()) {
                    count += words.length;
                }
            }
        }
        return new FileWordCount(file.getFileName().toString(), count);
    }
}
\`\`\`

---

## Step 2: The Parallel Processor

\`\`\`java
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

public class ParallelFileProcessor {

    public static void processDirectory(String dirPath) throws Exception {
        Path dir = Path.of(dirPath);
        if (!Files.isDirectory(dir)) {
            System.err.println("Not a directory: " + dirPath);
            return;
        }

        List<Path> files;
        try (var stream = Files.list(dir)) {
            files = stream
                .filter(Files::isRegularFile)
                .filter(p -> p.toString().endsWith(".txt"))
                .sorted()
                .toList();
        }

        if (files.isEmpty()) {
            System.out.println("No .txt files found in " + dirPath);
            return;
        }

        int threadCount = Math.min(files.size(),
            Runtime.getRuntime().availableProcessors());

        System.out.println("Processing files in: " + dirPath);
        System.out.println("Using " + threadCount + " threads");
        System.out.println();

        ExecutorService executor = Executors.newFixedThreadPool(threadCount);
        long startTime = System.currentTimeMillis();

        // Submit all tasks
        List<Future<FileWordCount>> futures = files.stream()
            .map(WordCountTask::new)
            .map(executor::submit)
            .toList();

        // Collect results
        List<FileWordCount> results = new ArrayList<>();
        for (Future<FileWordCount> future : futures) {
            try {
                results.add(future.get());
            } catch (ExecutionException e) {
                System.err.println("Error processing file: " + e.getCause().getMessage());
            }
        }

        executor.shutdown();
        long elapsed = System.currentTimeMillis() - startTime;

        // Print results
        int totalWords = 0;
        for (FileWordCount result : results) {
            System.out.printf("  %-20s : %,6d words%n",
                result.filename(), result.wordCount());
            totalWords += result.wordCount();
        }

        System.out.println();
        System.out.printf("Total: %,d words%n", totalWords);
        System.out.printf("Processed in: %dms%n", elapsed);
    }

    public static void main(String[] args) throws Exception {
        String dir = args.length > 0 ? args[0] : "data";
        processDirectory(dir);
    }
}
\`\`\`

---

## Setting Up Test Files

Create a \`data/\` folder and add a few text files:

\`\`\`bash
mkdir data
echo "The quick brown fox jumps over the lazy dog" > data/chapter1.txt
echo "Pack my box with five dozen liquor jugs" > data/chapter2.txt
\`\`\`

Or copy any text files you have into the \`data/\` folder.

---

## Stretch Goals

- Compare sequential vs parallel processing time (disable the thread pool and measure both)
- Count unique words across all files using \`ConcurrentHashMap\`
- Sort results by word count (highest first)
- Accept file patterns (e.g., only \`*.csv\`)

---

## What You Practiced

- Implementing \`Callable\<T\>\` for tasks that return values
- Using \`ExecutorService\` with a fixed thread pool
- Collecting results from a list of \`Future\<T\>\`
- Handling \`ExecutionException\` from failed tasks
- Measuring elapsed time

Continue to: **Mini Project: Producer-Consumer Simulation with Thread-Safe Queue**
`,
};
