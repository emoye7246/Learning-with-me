export const lessonMiniProjectNumberGuessingGame = {
  id: "mini-project-number-guessing-game-cs",
  title: "Mini Project: Number Guessing Game",
  hasChallenge: false,
  article: `
## Mini Project: Number Guessing Game

This mini-project is your first complete C# program. It practices variables, loops, conditionals, user input, and random number generation — everything from the fundamentals module so far.

---

## Project Specification

Build a console application where:

1. The program picks a random integer between 1 and 100 (inclusive)
2. The user gets up to 7 attempts to guess the number
3. After each wrong guess, the program says whether the secret number is higher or lower
4. If the user guesses correctly, print how many attempts it took and a congratulatory message
5. If the user runs out of attempts, reveal the secret number
6. After the game ends, ask the user if they want to play again

---

## Skills This Practices

- **Random number generation** — \`Random.Shared.Next()\`
- **Loops** — game loop, play-again loop, input validation loop
- **Conditionals** — higher/lower/correct comparisons
- **User input** — \`Console.ReadLine()\`, \`int.TryParse()\`
- **Method extraction** — organizing the game into meaningful functions
- **String formatting** — clear output messages

---

## Getting Started

Create a new project:

\`\`\`bash
dotnet new console -n NumberGuessingGame
cd NumberGuessingGame
\`\`\`

---

## Key APIs to Use

**Random number:**
\`\`\`csharp
int secret = Random.Shared.Next(1, 101); // 1 to 100 inclusive
\`\`\`

\`Random.Shared\` is a thread-safe shared instance available in .NET 6+. The range is \`[min, max)\` — the max is exclusive, so use 101 to include 100.

**Input with validation:**
\`\`\`csharp
int GetGuess(int min, int max)
{
    while (true)
    {
        Console.Write($"Guess ({min}-{max}): ");
        if (int.TryParse(Console.ReadLine(), out int guess) &&
            guess >= min && guess <= max)
        {
            return guess;
        }
        Console.WriteLine($"Please enter a number between {min} and {max}.");
    }
}
\`\`\`

---

## Requirements in Detail

**Game loop:**
- The outer loop handles play-again
- The inner loop handles individual guesses within one game

**Guess feedback:**
- "Too low — try higher"
- "Too high — try lower"
- "Correct! You guessed it in X attempt(s)."

**Failure case:**
- "Out of attempts! The number was X."

**Play again:**
- "Play again? (y/n): " — accept \`y\` or \`Y\` to restart

**Edge cases to handle:**
- Non-numeric input → ask again
- Numbers outside 1-100 → ask again
- Case-insensitive yes/no for play-again

---

## Stretch Goals

If you want to go further:

1. **Track statistics** across multiple games: games played, total guesses, best game
2. **Adjustable difficulty**: ask the user for a range (e.g., 1–1000) and calculate max attempts as \`Math.Ceiling(Math.Log2(range)) + 1\`
3. **Hint system**: after 4 wrong guesses, offer a hint like "the number is even" or "the number is a multiple of 5"

---

## What a Finished Version Looks Like

\`\`\`
Welcome to Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 7 attempts.

Guess (1-100): 50
Too high — try lower.

Guess (1-100): 25
Too low — try higher.

Guess (1-100): 37
Too high — try lower.

Guess (1-100): 31
Correct! You guessed it in 4 attempts!

Play again? (y/n): n
Thanks for playing!
\`\`\`

---

## Review Checklist

Before moving on, verify your implementation:

- [ ] The secret number is truly random each game
- [ ] Invalid input (text, out-of-range numbers) is handled gracefully without crashing
- [ ] The attempt counter is accurate
- [ ] The play-again prompt works correctly
- [ ] The code is organized into at least one extracted method (not all in one block)

---

## What Comes Next

The next mini-project is a Simple Calculator — practicing method overloading, switch expressions, and structured input parsing.
`,
};
