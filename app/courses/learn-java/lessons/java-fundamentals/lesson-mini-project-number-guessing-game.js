export const lessonMiniProjectNumberGuessingGame = {
  id: "mini-project-number-guessing-game",
  title: "Mini-Project: Number Guessing Game",
  hasChallenge: false,
  article: `
## Overview

In this mini-project, you will build a number guessing game in Java.

The computer chooses a secret number. The user guesses. Your program gives hints until they win.

This is not a tutorial. It is an assignment.

You have everything you need:
- variables and types
- Scanner for input
- conditionals
- loops

Your job is to combine them into one complete, working program.

---

## What You're Building

A game that:
- Chooses a secret number (start with a fixed number for testing)
- Asks the user to guess
- Tells them "Too high" or "Too low"
- Keeps asking until they guess correctly
- Ends with a congratulations message

---

## Requirements Checklist (Core)

- [ ] Print a welcome message when the program starts
- [ ] Store a secret number (start fixed, e.g., \`int secret = 7;\`)
- [ ] Ask the user for a guess using Scanner
- [ ] Parse the input as an integer
- [ ] Compare the guess to the secret
- [ ] Print "Too high" or "Too low" when wrong
- [ ] Keep asking until the guess is correct (use a loop)
- [ ] Print a congratulations message when correct

---

## User Experience Checklist (Recommended)

- [ ] Clear prompts — the user always knows what to do
- [ ] Track how many guesses the user took
- [ ] Include the guess count in the final message: "You got it in 4 tries!"
- [ ] Tell the user the range at the start: "Guess a number between 1 and 10"

---

## Rules

- The user must keep guessing until correct
- Every wrong guess must receive a hint
- The program must not crash during normal gameplay
- The secret number must stay the same throughout one round

---

## Suggested Build Plan

1. Create the class and main method
2. Create a Scanner and a variable for the secret number
3. Print a welcome message
4. Read one guess from the user
5. Add an \`if\` to tell the user if they're right, too high, or too low
6. Wrap it in a \`while\` loop that repeats until the guess is correct
7. Add a counter that increments with each guess
8. Print the final win message with the count

---

## Testing Checklist

- [ ] Guess correctly on the first try
- [ ] Guess too low — confirm "Too low" is printed
- [ ] Guess too high — confirm "Too high" is printed
- [ ] Guess wrong multiple times — confirm the loop continues
- [ ] Confirm the loop stops after a correct guess
- [ ] Confirm the guess counter is accurate

---

## Extension Challenges

### Upgrade 1 — Random Number
- [ ] Import \`java.util.Random\`
- [ ] Use \`new Random().nextInt(10) + 1\` to generate a number 1–10
- [ ] Keep everything else the same

### Upgrade 2 — Difficulty Levels
- [ ] Ask the user to choose Easy (1–10), Medium (1–50), or Hard (1–100)
- [ ] Generate the secret number within the chosen range
- [ ] Show the selected range in the welcome message

### Upgrade 3 — Limited Attempts
- [ ] Give the user a maximum number of guesses
- [ ] If they run out, print "Game over! The number was X."
- [ ] If they guess correctly, print the win message

### Upgrade 4 — Play Again
- [ ] After each round ends, ask "Play again? (y/n)"
- [ ] If yes, reset and restart
- [ ] If no, exit cleanly

---

## Submission Requirements

Your file should be named:

\`GuessingGame.java\`

Run it with:

\`\`\`bash
javac GuessingGame.java && java GuessingGame
\`\`\`

---

## What You're Proving

If you complete the core checklist, you've proven you can:
- Combine multiple Java fundamentals into one working program
- Use Scanner for real user interaction
- Write a loop that terminates correctly
- Debug your own logic

That's not practice. That's real skill.
`,
  support: {
    intro: `
Use this support in order.

Start with Level 1.
If you're still stuck, go to Level 2.
If you need structure, use the Blueprint.
Only look at the example solution after you've built your own version.

There are many correct solutions. The goal is that you understand yours.
    `.trim(),

    level1Nudges: [
      "What variable stores the secret number?",
      "What variable stores the user's current guess?",
      "What condition should keep the loop running until the user wins?",
      "Where should you ask for the first guess — before the loop or inside it?",
      "If your loop never ends, what isn't changing inside it?",
      "When does your counter increment — on every guess or only on correct guesses?",
    ],

    level2Hints: [
      "You need at least three variables: secret, guess, and tries.",
      "scanner.nextInt() reads the integer. Make sure you have a Scanner set up first.",
      "Your loop condition should be: while (guess != secret) — or use a boolean flag.",
      "Inside the loop: compare guess to secret, print a hint, then read the next guess.",
      "Increment tries every time you successfully read a guess from the user.",
      "The loop exits when guess equals secret — at that point, print the win message.",
    ],

    blueprint: [
      "Declare and initialize: secret = 7, tries = 0, guess = 0.",
      "Create a Scanner.",
      "Print a welcome message and the range.",
      "Ask for a guess.",
      "Read the guess with scanner.nextInt().",
      "Increment tries by 1.",
      "Start a while loop: while (guess != secret).",
      "  Inside loop: check if guess < secret → print 'Too low'.",
      "  Else: print 'Too high'.",
      "  Ask for another guess, read it, increment tries.",
      "After loop: print congratulations message with tries count.",
      "Close the scanner.",
    ],

    debuggingGuide: [
      {
        problem: "My program crashes with NumberFormatException.",
        hint: "scanner.nextInt() expects a number. If the user types text, it crashes. For now, assume valid input. Later you can add try/catch.",
      },
      {
        problem: "My loop runs forever even when I type the correct number.",
        hint: "Make sure you're updating the 'guess' variable inside the loop. If it never changes, the condition never becomes false.",
      },
      {
        problem: "It always says 'Too high' or always says 'Too low'.",
        hint: "Check your comparison operators (< and >). Also verify that 'secret' and 'guess' have the values you expect — add a debug print if needed.",
      },
      {
        problem: "My try counter shows the wrong number.",
        hint: "Decide exactly when a try counts. The cleanest approach: increment immediately after every nextInt() call.",
      },
    ],

    revealSolutionWarning: `
This is ONE correct implementation. If your version works and passes the checklist, it's valid.

Do not copy this blindly. Read each line and explain what it does before moving on.
    `.trim(),

    exampleSolution: `import java.util.Random;
import java.util.Scanner;

public class GuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        int secret = random.nextInt(10) + 1;
        int tries = 0;
        int guess = 0;

        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("I'm thinking of a number between 1 and 10.");

        while (guess != secret) {
            System.out.print("Your guess: ");
            guess = scanner.nextInt();
            tries++;

            if (guess < secret) {
                System.out.println("Too low!");
            } else if (guess > secret) {
                System.out.println("Too high!");
            }
        }

        System.out.println("Correct! You got it in " + tries + " tries.");
        scanner.close();
    }
}`,
  },
};
