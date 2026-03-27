export const lessonMiniProjectWordFrequency = {
  id: "mini-project-word-frequency-cs",
  title: "Mini-Project: Word Frequency Counter",
  hasChallenge: true,
  article: `
## Mini-Project: Word Frequency Counter

In this project you'll build a program that reads text, counts how often each word appears, and displays the top N most frequent words. It's a classic exercise that puts \`Dictionary<string, int>\` to practical use alongside basic file I/O, string processing, and LINQ.

### What You'll Build

- Read text from a file (or a hardcoded string for simplicity)
- Normalize the text (lowercase, remove punctuation)
- Count occurrences of each word using a \`Dictionary<string, int>\`
- Display the top 10 most frequent words with their counts

### Step 1: Set Up the Project

\`\`\`bash
dotnet new console -n WordFrequency
cd WordFrequency
\`\`\`

Create a sample text file \`sample.txt\` in the project folder, or use any plain text (a book excerpt works great).

### Step 2: Read and Normalize the Text

\`\`\`csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

string text = File.ReadAllText("sample.txt");

// Normalize: lowercase and extract only word characters
string[] words = Regex.Split(text.ToLower(), @"\\W+")
                      .Where(w => w.Length > 0)
                      .ToArray();
\`\`\`

\`\\W+\` matches one or more non-word characters (spaces, punctuation, etc.) and splits on them. The \`Where\` clause filters out any empty strings that result from leading/trailing separators.

### Step 3: Count Words with a Dictionary

\`\`\`csharp
Dictionary<string, int> frequency = new Dictionary<string, int>();

foreach (string word in words)
{
    if (frequency.ContainsKey(word))
        frequency[word]++;
    else
        frequency[word] = 1;
}
\`\`\`

A more concise way using \`GetValueOrDefault\`:

\`\`\`csharp
foreach (string word in words)
{
    frequency[word] = frequency.GetValueOrDefault(word, 0) + 1;
}
\`\`\`

Or even more concise using a \`TryGetValue\` pattern with a helper:

\`\`\`csharp
foreach (string word in words)
{
    frequency.TryGetValue(word, out int count);
    frequency[word] = count + 1; // count is 0 if key didn't exist
}
\`\`\`

### Step 4: Find the Top N Words with LINQ

\`\`\`csharp
int topN = 10;

var topWords = frequency
    .OrderByDescending(pair => pair.Value)
    .Take(topN)
    .ToList();

Console.WriteLine($"Top {topN} most frequent words:\\n");
Console.WriteLine($"{"Rank",-6} {"Word",-20} {"Count",8}");
Console.WriteLine(new string('-', 36));

for (int i = 0; i < topWords.Count; i++)
{
    var (word, count) = topWords[i];
    Console.WriteLine($"{i + 1,-6} {word,-20} {count,8}");
}
\`\`\`

### Step 5: Add a Stop Words Filter (Optional Enhancement)

Common words like "the", "a", "is" dominate any English text but aren't interesting. Filter them out:

\`\`\`csharp
HashSet<string> stopWords = new HashSet<string>
{
    "the", "a", "an", "and", "or", "but", "in", "on",
    "at", "to", "for", "of", "with", "is", "are", "was",
    "were", "be", "been", "it", "this", "that", "i", "you"
};

var topWords = frequency
    .Where(pair => !stopWords.Contains(pair.Key))
    .Where(pair => pair.Key.Length > 2) // Skip very short words
    .OrderByDescending(pair => pair.Value)
    .Take(topN)
    .ToList();
\`\`\`

### Full Program

\`\`\`csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

class Program
{
    static void Main(string[] args)
    {
        string filePath = args.Length > 0 ? args[0] : "sample.txt";

        if (!File.Exists(filePath))
        {
            Console.WriteLine($"File not found: {filePath}");
            return;
        }

        string text = File.ReadAllText(filePath);
        string[] words = Regex.Split(text.ToLower(), @"\\W+")
                              .Where(w => w.Length > 2)
                              .ToArray();

        Dictionary<string, int> frequency = new Dictionary<string, int>();
        foreach (string word in words)
        {
            frequency.TryGetValue(word, out int count);
            frequency[word] = count + 1;
        }

        var top10 = frequency
            .OrderByDescending(p => p.Value)
            .Take(10)
            .ToList();

        Console.WriteLine($"Total unique words: {frequency.Count}");
        Console.WriteLine($"Total word count: {words.Length}\\n");
        Console.WriteLine($"{"Rank",-6} {"Word",-20} {"Count",8}");
        Console.WriteLine(new string('-', 36));

        for (int i = 0; i < top10.Count; i++)
        {
            Console.WriteLine($"{i + 1,-6} {top10[i].Key,-20} {top10[i].Value,8}");
        }
    }
}
\`\`\`

### Running the Project

\`\`\`bash
dotnet run                    # Uses sample.txt in current directory
dotnet run -- myfile.txt     # Specify a custom file
\`\`\`

### Key Takeaways

- \`Dictionary<string, int>\` is the natural choice for counting and frequency problems
- The \`TryGetValue\` pattern initializes missing keys to zero safely
- LINQ makes sorting and selecting the top N items a one-liner
- \`HashSet<string>\` efficiently filters stop words with O(1) lookups
- String normalization (lowercase + regex split) is essential before counting
`,
};
