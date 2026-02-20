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
      "What variable stores the user's menu choice?",
      "How will you make the menu repeat until the user quits?",
      "What value should represent the quit option (example: '0')?",
      "Where should the menu print—inside the loop or outside it?",
      "How will you handle an invalid choice so the program doesn't crash?",
      "What are 3 actions your menu can perform that are different from each other?",
      "If your menu runs forever, what condition are you missing?",
      "If your menu ends immediately, what value did your choice start as?",
    ],

    level2Hints: [
      "You need a loop that continues while the choice is not the quit option.",
      "Inside the loop: print the menu, ask for choice, then handle it with if/elif/else.",
      "Your choice should be compared as a string if you collect it with input() (example: choice == '1').",
      "After handling an action, the loop should naturally continue and show the menu again.",
      "Include an else branch for invalid input that prints an error and continues.",
      "If you want cleaner code, put menu printing into a function like show_menu().",
    ],

    blueprint: [
      "Print a welcome message.",
      "Set a choice variable to an empty string.",
      "Start a loop that runs until choice equals the quit value (example: '0').",
      "Inside the loop:",
      "  - Print the menu options (at least 1, 2, 3, and 0 for quit).",
      "  - Ask the user for a choice using input().",
      "  - If choice is '1': perform Action 1.",
      "  - Else if choice is '2': perform Action 2.",
      "  - Else if choice is '3': perform Action 3.",
      "  - Else if choice is '0': print goodbye message.",
      "  - Else: print invalid option message.",
      "After the loop ends: program exits cleanly.",
    ],

    debuggingGuide: [
      {
        problem: "My menu prints once and then the program ends.",
        hint: "You probably didn't wrap the menu logic inside a loop.",
      },
      {
        problem: "My loop never stops even when I choose quit.",
        hint: "Check that you're comparing the same types. input() returns a string, so compare to '0', not 0.",
      },
      {
        problem: "My menu prints twice each time.",
        hint: "You may be printing the menu both inside and outside the loop. Keep it in one place.",
      },
      {
        problem: "Invalid input crashes my program.",
        hint: "Use an else block to catch invalid choices and print an error message instead of crashing.",
      },
      {
        problem: "My actions run but the menu doesn't show again.",
        hint: "Make sure your loop continues and your program isn't accidentally returning or breaking early.",
      },
    ],

    revealSolutionWarning: `
This is ONE possible implementation.

If your program meets the checklist and behaves correctly, your version is valid.
Read it, compare it, and understand it — don't blindly copy.
    `.trim(),

    exampleSolution: `def show_menu():
    print("\\nMenu")
    print("1) Greet me")
    print("2) Add two numbers")
    print("3) Count letters in a sentence")
    print("0) Quit")


print("Welcome to the Simple Menu Program!")

choice = ""

while choice != "0":
    show_menu()
    choice = input("Choose an option: ").strip()

    if choice == "1":
        name = input("What is your name? ").strip()
        print(f"Hello, {name}!")
    elif choice == "2":
        a = int(input("Enter first number: "))
        b = int(input("Enter second number: "))
        print("Sum:", a + b)
    elif choice == "3":
        text = input("Enter a sentence: ")
        print("Character count:", len(text))
    elif choice == "0":
        print("Goodbye!")
    else:
        print("Invalid option.")`,

    upgrades: {
      subMenuBlueprint: [
        "Create a new option on the main menu like '4) More tools'.",
        "When the user selects it, enter a second loop (sub-menu).",
        "The sub-menu should have its own options and a way to return to the main menu.",
        "When the user chooses 'back', exit the sub-menu loop and return to the main menu loop.",
      ],

      storeDataBlueprint: [
        "Create an empty list before the loop starts.",
        "Add a menu option that asks the user for an item and appends it to the list.",
        "Add another option that prints the list of stored items.",
        "Make sure the list persists while the program runs (do not recreate it inside the loop).",
      ],

      functionsBlueprint: [
        "Create a function for show_menu().",
        "Create a separate function for each action (action_one, action_two, etc.).",
        "Inside the menu logic, call the correct function based on the user's choice.",
        "This keeps your loop clean and readable.",
      ],

      inputValidationBlueprint: [
        "If you're converting user input to int, add protection (try/except) so invalid input doesn't crash the program.",
        "If input is invalid, show an error message and re-prompt.",
        "Keep the program running smoothly even when users make mistakes.",
      ],
    },
  },
  };