export const miniProjectNumberGuessingGame = {
    id: "mini-project-number-guessing-game",
    title: "Mini-Project: Number Guessing Game",
  
    article: `
  
  ## Overview
  
  In this mini-project, you will build a real guessing game.
  
  The computer will choose a secret number.
  The user will try to guess it.
  Your program will guide them with hints.
  
  This is not a copy-and-paste lesson.
  
  This is an assignment.
  
  You already have everything you need from the lessons:
  - variables
  - input/output
  - conditions
  - loops
  - (optional) modules
  
  Your job is to combine them into one complete program.
  
  You’ve got this.
  
  ---
  
  ## What You’re Building
  
  A game that:
  
  - chooses a secret number
  - asks the user to guess
  - gives feedback until they win
  - ends with a win message
  
  ---
  
  ## Requirements Checklist (Core)
  
  Your project should:
  
  - [ ] Print a welcome message when the program starts  
  - [ ] Choose a secret number (start with a fixed number like 7)  
  - [ ] Ask the user for a guess using input()  
  - [ ] Convert the user’s guess into an integer  
  - [ ] Compare the guess to the secret number  
  - [ ] If the guess is incorrect, tell the user if it was too high or too low  
  - [ ] Keep asking until the user guesses correctly (use a loop)  
  - [ ] Print a final win message when the guess is correct  
  
  ---
  
  ## User Experience Checklist (Recommended)
  
  To make your program feel polished, add:
  
  - [ ] Clear prompts (the user always knows what to do next)  
  - [ ] Clean output (no confusing messages)  
  - [ ] A guess counter that tracks how many tries it took  
  - [ ] A final message that includes the number of tries  
  
  Example idea (you write the code):
  
  “You guessed it in 4 tries.”
  
  ---
  
  ## Rules
  
  Your program should follow these rules:
  
  - The user must keep guessing until they get it right  
  - The program must always respond with a hint when the guess is wrong  
  - The program must not crash during normal gameplay  
  - The secret number must stay the same during one round  
  
  ---
  
  ## Suggested Build Plan (No Answers)
  
  If you don’t know where to start, follow this order:
  
  1. Create a variable that stores the secret number  
  2. Ask the user for a guess and store it  
  3. Compare the guess and print one message  
  4. Add “too high / too low” hints  
  5. Add a loop so the game repeats  
  6. Add a counter variable to track attempts  
  7. Print a final win message with the attempt count  
  
  You are building step-by-step.
  That’s how real programming works.
  
  ---
  
  ## Testing Checklist
  
  Before you consider it “done”, test these cases:
  
  - [ ] Guess the correct number on the first try  
  - [ ] Guess a number that is too low  
  - [ ] Guess a number that is too high  
  - [ ] Guess wrong multiple times and confirm the game continues  
  - [ ] Confirm the game stops after the correct guess  
  - [ ] Confirm the attempt counter increases correctly (if you added it)  
  
  ---
  
  ## Extension Challenges (Optional)
  
  Once the core version works, pick one upgrade.
  
  Do not do them all at once.
  
  ---
  
  ### Upgrade 1 — Random Secret Number
  
  - [ ] Use the random module  
  - [ ] Generate a secret number between 1 and 10  
  - [ ] Keep everything else the same  
  
  ---
  
  ### Upgrade 2 — Difficulty Levels
  
  - [ ] Ask the user to choose a difficulty: Easy / Medium / Hard  
  - [ ] Easy range: 1–10  
  - [ ] Medium range: 1–50  
  - [ ] Hard range: 1–100  
  - [ ] Generate the secret number based on the difficulty  
  
  ---
  
  ### Upgrade 3 — Limited Attempts
  
  - [ ] Give the user a maximum number of guesses  
  - [ ] End the game if they run out of attempts  
  - [ ] Reveal the secret number when the game ends  
  
  ---
  
  ### Upgrade 4 — Play Again
  
  - [ ] After the game ends, ask if they want to play again  
  - [ ] If yes, restart the game cleanly  
  - [ ] If no, exit gracefully  
  
  ---
  
  ## Submission Requirements
  
  Your final file should be named:
  
  \`guessing_game.py\`
  
  It should run from the terminal like this:
  
  \`\`\`bash
  python guessing_game.py
  \`\`\`
  
  (or \`python3\` if needed)
  
  ---
  
  ## What You’re Proving
  
  If you complete the core checklist, you’ve proven you can:
  
  - combine multiple Python fundamentals
  - build a complete working program
  - think step-by-step
  - debug your own logic
  
  That’s not “practice”.
  
  That’s real skill.
  
  ---
  
  ## Need Help Without Getting the Answer?
  
  If you get stuck, don’t ask for the full solution.
  
  Ask for a hint like:
  
  - “My loop keeps running forever — what should I check?”  
  - “How do I tell if the guess is too high or too low?”  
  - “My input is crashing when I type a number — why?”  
  
  That way you still learn.
  
  ---
  
  ## Next Mini-Project
  
  When you finish this, the next assignment is:
  
  **Text Formatter**
  
  `,
  support: {
    intro: `
Use this support in order.

Start with Level 1.
If you're still stuck, go to Level 2.
If you need structure, use the Blueprint.
Only reveal the example solution if you're truly stuck.

Remember: there are many correct solutions.
We want you to think through the problem and come up with your own solution.
But if you're stuck, you can use the support to help you move forward.
This is just support to help you move forward.
    `.trim(),

    level1Nudges: [
      "What variable stores the secret number?",
      "What variable stores the user's current guess?",
      "What condition should keep the game running until the user wins?",
      "Where do you ask for the first guess — before the loop or inside the loop?",
      "If your loop never ends, what variable isn't changing?",
      "When should you print 'Too high' vs 'Too low'?",
      "When should your tries counter increase (every guess)?",
      "What should happen immediately after the user guesses correctly?",
    ],

    level2Hints: [
      "You need at least three variables: secret, guess, tries.",
      "input() returns a string, so you must convert the guess to an integer before comparing.",
      "Your loop condition should keep running while the guess is NOT equal to the secret number.",
      "Inside the loop: compare guess to secret, print a hint, then ask for another guess.",
      "If you're counting tries, increase the counter every time you successfully capture a guess.",
      "Make sure you update the guess variable inside the loop; otherwise the loop can repeat forever.",
    ],

    blueprint: [
      "Print a welcome message and the game range.",
      "Set secret number (start with a fixed number for testing).",
      "Set tries counter to 0.",
      "Ask user for a guess.",
      "Convert the guess to an integer.",
      "Increase tries by 1.",
      "While guess is not equal to secret:",
      "  - If guess is lower than secret: print 'Too low'.",
      "  - Else: print 'Too high'.",
      "  - Ask user for a new guess.",
      "  - Convert it to an integer.",
      "  - Increase tries by 1.",
      "After loop ends: print a win message including tries.",
    ],

    debuggingGuide: [
      {
        problem: "My program crashes when I type something that isn't a number.",
        hint: "input() returns text. Converting non-number text to int causes an error. You need input validation (try/except) or re-prompting.",
      },
      {
        problem: "My loop runs forever even when I guess correctly.",
        hint: "Your guess variable is probably not being updated inside the loop, or your loop condition is incorrect.",
      },
      {
        problem: "It always says 'Too high' or always says 'Too low'.",
        hint: "Check your comparisons (<, >). Also confirm that secret is what you expect and guess is being converted to an integer.",
      },
      {
        problem: "My tries counter is wrong.",
        hint: "Decide exactly when a 'try' counts. The most common approach: increment tries every time you accept a guess from the user.",
      },
    ],

    revealSolutionWarning: `
This is ONE possible implementation.

If your version works and meets the checklist, it's correct.
Do not copy blindly — read it line by line and explain what each part does.
    `.trim(),

    exampleSolution: `import random

print("Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 10.")

secret = random.randint(1, 10)
tries = 0

while True:
    user_input = input("Enter your guess (or type 'quit'): ").strip().lower()

    if user_input == "quit":
        print("Goodbye!")
        break

    if not user_input.isdigit():
        print("Please enter a valid number.")
        continue

    guess = int(user_input)
    tries += 1

    if guess == secret:
        print(f"Correct! You guessed it in {tries} tries.")
        break
    elif guess < secret:
        print("Too low.")
    else:
        print("Too high.")`,

    upgrades: {
      randomSecretBlueprint: [
        "Import the random module.",
        "Replace the fixed secret number with a random number within a range.",
        "Keep the rest of the game logic the same.",
      ],

      difficultyLevelsBlueprint: [
        "Ask the user to choose difficulty (example: 1, 2, 3).",
        "Map difficulty to a number range (Easy: 1–10, Medium: 1–50, Hard: 1–100).",
        "Generate the secret number using the selected range.",
        "Update the welcome message to show the chosen range.",
      ],

      limitedAttemptsBlueprint: [
        "Add a max_attempts variable.",
        "Each time the user guesses, increment tries.",
        "If tries reaches max_attempts before they guess correctly:",
        "  - print a game over message",
        "  - reveal the secret number",
        "  - end the program (or ask to play again).",
      ],

      playAgainBlueprint: [
        "Wrap your entire game logic inside a function (recommended).",
        "After a round ends, ask: 'Play again? (y/n)'.",
        "If yes, reset secret and tries and restart the round.",
        "If no, exit cleanly.",
      ],
    },
  },
  };