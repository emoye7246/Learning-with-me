export const miniProjectSimpleMenu = {
    id: "mini-project-simple-menu",
    title: "Mini-Project: Simple Menu Program",
  
    article: `
  
  ## Overview
  
  In this mini-project, you will build a simple command-line menu system.
  
  This may sound basic.
  
  It is not.
  
  Menus are everywhere:
  
  - CLI tools
  - Admin dashboards
  - Setup scripts
  - Small automation tools
  - Early-stage apps
  
  This project teaches structure.
  
  You will design a program that:
  
  - shows a menu
  - accepts user choices
  - performs actions
  - keeps running until the user quits
  
  This is an assignment.
  
  No full solution.
  You already know everything needed.
  
  ---
  
  ## What You’re Building
  
  A looping menu program that:
  
  - displays options
  - performs different actions based on user input
  - continues running
  - exits cleanly when the user chooses to quit
  
  This is a control-flow exercise.
  
  ---
  
  ## Requirements Checklist (Core)
  
  Your program should:
  
  - [ ] Print a welcome message at startup  
  - [ ] Display a menu with at least 3 options  
  - [ ] Ask the user to choose an option using input()  
  - [ ] Use if / elif / else to handle each option  
  - [ ] Keep the program running using a loop  
  - [ ] Exit only when the user chooses the quit option  
  - [ ] Handle invalid input gracefully (no crashing)  
  
  ---
  
  ## Required Menu Options
  
  Your menu must include:
  
  - [ ] Option 1 — A simple action (example: print "Hello")  
  - [ ] Option 2 — A second different action  
  - [ ] Option 3 — A third different action  
  - [ ] Option 0 — Quit the program  
  
  You choose what the actions do.
  
  But they must be different.
  
  ---
  
  ## Action Ideas (Pick Any)
  
  You may choose from these ideas or create your own:
  
  - Ask for the user’s name and greet them
  - Ask for two numbers and print their sum
  - Ask for text and print its length
  - Show the current text formatter (mini version)
  - Show a simple countdown
  - Store something in a list
  - Print today’s date (optional module use)
  
  Keep it simple.
  The goal is structure.
  
  ---
  
  ## Program Behavior Checklist
  
  Your program should behave like this:
  
  - [ ] The menu prints every time before asking for input  
  - [ ] After completing an action, the menu appears again  
  - [ ] If the user types something invalid, the program prints "Invalid option"  
  - [ ] The program exits cleanly when the quit option is selected  
  - [ ] The loop stops only when the quit condition is met  
  
  ---
  
  ## Suggested Build Plan (No Answers)
  
  If you’re unsure how to start:
  
  1. Print a static menu (just print statements)
  2. Ask the user for input and print what they chose
  3. Add if / elif statements for one option
  4. Add the remaining options
  5. Wrap everything in a loop
  6. Add a quit condition
  7. Add invalid input handling
  
  Build it step-by-step.
  
  Do not try to build the entire system at once.
  
  ---
  
  ## Testing Checklist
  
  Before calling it complete, test:
  
  - [ ] Choose each valid option and confirm it works  
  - [ ] Enter an invalid number (like 9)  
  - [ ] Enter a letter instead of a number  
  - [ ] Confirm the menu keeps reappearing  
  - [ ] Confirm the program exits only when quit is selected  
  - [ ] Confirm the program does not crash during normal usage  
  
  ---
  
  ## Extension Challenges (Optional)
  
  Once your core menu works, choose ONE upgrade.
  
  ---
  
  ### Upgrade 1 — Add a Sub-Menu
  
  - [ ] One option should open another menu  
  - [ ] That sub-menu should also loop  
  - [ ] The user should be able to return to the main menu  
  
  ---
  
  ### Upgrade 2 — Store Data
  
  - [ ] Create a list  
  - [ ] Add an option to store items in the list  
  - [ ] Add an option to display the list  
  
  ---
  
  ### Upgrade 3 — Use Functions
  
  - [ ] Move each menu action into its own function  
  - [ ] Call the functions from the menu logic  
  - [ ] Keep your main loop clean  
  
  This makes your code feel professional.
  
  ---
  
  ### Upgrade 4 — Clear Structure
  
  - [ ] Create a function that prints the menu  
  - [ ] Create a main() function  
  - [ ] Call main() at the bottom of your file  
  
  This mirrors real-world Python structure.
  
  ---
  
  ## Submission Requirements
  
  Your final file should be named:
  
  \`menu_program.py\`
  
  It should run from the terminal like this:
  
  \`\`\`bash
  python menu_program.py
  \`\`\`
  
  (or \`python3\` if needed)
  
  ---
  
  ## What You’re Proving
  
  If you complete this project, you’ve proven you can:
  
  - control program flow
  - design user interaction
  - manage loops properly
  - prevent crashes
  - structure code clearly
  
  This is the foundation of interactive applications.
  
  ---
  
  ## Need Help Without Getting the Answer?
  
  If you get stuck, ask for a hint like:
  
  - “My loop never stops — what should I check?”  
  - “My menu prints twice — why?”  
  - “How do I structure the quit condition?”  
  
  Ask for guidance.
  Not solutions.
  
  That’s how you level up.
  
  ---
  
  ## Mini-Projects Complete
  
  If you’ve finished:
  
  - Number Guessing Game
  - Text Formatter
  - Simple Menu Program
  
  Then you have officially completed Course 2.
  
  You are no longer writing isolated lines of code.
  
  You are building structured programs.
  
  That’s a real milestone.
  
  `
  };