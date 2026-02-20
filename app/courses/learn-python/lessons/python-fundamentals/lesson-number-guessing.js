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
  
  `
  };