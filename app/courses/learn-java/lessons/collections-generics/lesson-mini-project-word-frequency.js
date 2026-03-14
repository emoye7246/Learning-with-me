export const lessonMiniProjectWordFrequency = {
  id: "mini-project-word-frequency",
  title: "Mini-Project: Word Frequency Counter",
  hasChallenge: false,
  article: `
## Overview

Build a word frequency counter that reads a block of text and reports how many times each word appears.

This project puts HashMap to work in a real use case.

---

## What You're Building

A program that:
- Accepts a multi-line text input (hardcode a sample or read from Scanner)
- Splits it into individual words
- Counts how many times each word appears
- Prints the results sorted by frequency (most common first)

---

## Requirements Checklist (Core)

- [ ] Store word counts in a \`Map<String, Integer>\`
- [ ] Normalize words: convert to lowercase, strip punctuation
- [ ] Count occurrences of each word
- [ ] Print the top 10 most frequent words with their counts
- [ ] Total unique word count

---

## User Experience Checklist (Recommended)

- [ ] Clean output: "java: 15 times"
- [ ] Words sorted by count descending, then alphabetically for ties

---

## Rules

- Words should be case-insensitive ("Java" and "java" are the same word)
- Strip common punctuation: \`.,!?;:"'\`
- Empty strings after splitting/stripping should be ignored

---

## Useful Tools

**Split text into words:**
\`\`\`java
String[] words = text.split("\\\\s+");
\`\`\`

**Strip punctuation from a word:**
\`\`\`java
word = word.replaceAll("[^a-zA-Z]", "");
\`\`\`

**Increment count in map:**
\`\`\`java
wordCount.merge(word, 1, Integer::sum);
// Or:
wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
\`\`\`

**Sort map entries by value:**
\`\`\`java
wordCount.entrySet().stream()
    .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
    .forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));
\`\`\`

---

## Testing Checklist

- [ ] "the" appears as many times as it actually does in the text
- [ ] "Java" and "java" are counted as the same word
- [ ] Punctuation doesn't affect word counting ("hello," and "hello" are the same)
- [ ] Empty strings aren't counted

---

## Extension Challenges

### Upgrade 1 — Stop Words
Skip common words like "the", "a", "and", "is", "of" — they're not interesting.

### Upgrade 2 — Read from File
Read the text from a file instead of a hardcoded string.

### Upgrade 3 — Word Cloud
Print a visual word cloud: more frequent words appear with more \`#\` characters.

---

## Submission Requirements

File: \`WordFrequency.java\`

Run with:
\`\`\`bash
javac WordFrequency.java && java WordFrequency
\`\`\`
`,
  support: {
    intro: "Use support in order. Try the core word counting before sorting.".trim(),

    level1Nudges: [
      "What collection is best for mapping words to counts?",
      "How do you split a sentence into individual words?",
      "How do you update a count that might not exist yet in the map?",
      "How do you sort map entries by value?",
    ],

    level2Hints: [
      "Map<String, Integer> wordCount = new HashMap<>();",
      "text.split(\"\\\\s+\") splits on any whitespace.",
      "wordCount.merge(word, 1, Integer::sum) is the cleanest way to increment.",
      "Sort: wordCount.entrySet().stream().sorted(Map.Entry.<String,Integer>comparingByValue().reversed())",
    ],

    blueprint: [
      "Define a sample text string.",
      "Split into words with split(\"\\\\s+\").",
      "For each word: lowercase, strip non-alpha characters.",
      "If not empty: merge into wordCount map.",
      "Sort entries by value descending.",
      "Print top 10 (or all).",
      "Print total unique word count.",
    ],

    debuggingGuide: [
      {
        problem: "My word counts include empty strings.",
        hint: "After stripping punctuation, check if the word is empty before adding: if (!word.isEmpty()) { ... }",
      },
    ],

    revealSolutionWarning: "This is one implementation. The interesting part is how you sort by map values.".trim(),

    exampleSolution: `import java.util.*;

public class WordFrequency {
    public static void main(String[] args) {
        String text = "To be or not to be that is the question " +
                      "Whether tis nobler in the mind to suffer";

        Map<String, Integer> wordCount = new HashMap<>();

        for (String raw : text.split("\\\\s+")) {
            String word = raw.toLowerCase().replaceAll("[^a-z]", "");
            if (!word.isEmpty()) {
                wordCount.merge(word, 1, Integer::sum);
            }
        }

        System.out.println("Unique words: " + wordCount.size());
        wordCount.entrySet().stream()
                .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
                .limit(10)
                .forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));
    }
}`,
  },
};
