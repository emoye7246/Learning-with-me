export const miniProjectTextFormatter = {
    id: "mini-project-text-formatter",
    title: "Mini-Project: Text Formatter",
  
    article: `
  
  ## Overview
  
  In this mini-project, you will build a real text utility.
  
  The user will enter some text.
  Your program will show a menu of formatting options.
  The user chooses an option.
  Your program outputs the formatted result.
  
  This is an assignment.
  
  You already learned everything needed:
  - strings
  - input/output
  - conditions
  - loops
  - (optional) functions
  
  Your job is to combine them into one complete tool.
  
  ---
  
  ## What You’re Building
  
  A text formatter that:
  
  - accepts text from the user
  - lets the user choose formatting options
  - shows the result
  - keeps running until the user quits
  
  This is the same core pattern used in real CLI tools:
  
  **Input → Choose → Process → Output**
  
  ---
  
  ## Requirements Checklist (Core)
  
  Your project should:
  
  - [ ] Print a welcome message when the program starts  
  - [ ] Ask the user to enter a piece of text (sentence, phrase, or paragraph)  
  - [ ] Display a menu of formatting options  
  - [ ] Ask the user to choose an option using input()  
  - [ ] Perform the selected formatting operation on the text  
  - [ ] Print the formatted result  
  - [ ] Repeat the menu until the user chooses to quit (use a loop)  
  - [ ] Exit cleanly with a goodbye message  
  
  ---
  
  ## Menu Checklist (Required Options)
  
  Your menu should include at least these options:
  
  - [ ] Uppercase (make all letters uppercase)  
  - [ ] Lowercase (make all letters lowercase)  
  - [ ] Title Case (capitalize the start of each word)  
  - [ ] Word Count (count how many words are in the text)  
  - [ ] Quit (end the program)  
  
  You can add more later, but start with these.
  
  ---
  
  ## Program Behavior Checklist
  
  Your program should behave like this:
  
  - [ ] The menu should reappear after each operation  
  - [ ] The user should be able to pick different options without restarting the program  
  - [ ] If the user enters an invalid choice, the program should not crash  
  - [ ] If the user enters an invalid choice, the program should show an “Invalid option” message and show the menu again  
  
  ---
  
  ## Recommended Quality Checklist
  
  To make it feel polished, add:
  
  - [ ] Show the “current text” somewhere so the user knows what they’re formatting  
  - [ ] Add an option to enter new text without quitting  
  - [ ] Keep your output clean and readable (spacing matters)  
  
  ---
  
  ## Suggested Build Plan (No Answers)
  
  If you’re unsure where to start, build it in this order:
  
  1. Ask the user for text and store it in a variable  
  2. Print a menu with options 1–4 and quit  
  3. Ask the user for a menu choice  
  4. Use if / elif / else to handle one option  
  5. Add the rest of the options one at a time  
  6. Add a loop so the menu repeats  
  7. Add “invalid choice” handling  
  8. Add an option to update the text (recommended)  
  
  Build it step-by-step.
  
  Do not try to build everything at once.
  
  ---
  
  ## Testing Checklist
  
  Before you consider it “done”, test these cases:
  
  - [ ] Enter a normal sentence and try every option  
  - [ ] Enter ALL CAPS text and test lowercase  
  - [ ] Enter all lowercase text and test title case  
  - [ ] Enter text with multiple spaces and check the word count result  
  - [ ] Enter an invalid menu choice (like 9) and confirm it handles it gracefully  
  - [ ] Quit the program and confirm it exits cleanly  
  
  ---
  
  ## Extension Challenges (Optional)
  
  Once your core project works, choose ONE upgrade at a time.
  
  ---
  
  ### Upgrade 1 — Reverse Text
  
  - [ ] Add a menu option that reverses the text  
  - [ ] Print the reversed result  
  
  ---
  
  ### Upgrade 2 — Character Count
  
  - [ ] Add a menu option that shows how many characters are in the text  
  - [ ] Decide if spaces should count (either is fine, just be consistent)  
  
  ---
  
  ### Upgrade 3 — Replace a Word
  
  - [ ] Ask the user for a word to replace  
  - [ ] Ask the user for the replacement word  
  - [ ] Print the updated text  
  
  ---
  
  ### Upgrade 4 — Remove Extra Spaces
  
  - [ ] Convert multiple spaces into one space  
  - [ ] Print the cleaned text  
  
  ---
  
  ### Upgrade 5 — Save to a File
  
  - [ ] Add an option to save the current text to a file  
  - [ ] The saved file should be a .txt file  
  - [ ] Confirm it saves successfully  
  
  ---
  
  ## Submission Requirements
  
  Your final file should be named:
  
  \`text_formatter.py\`
  
  It should run from the terminal like this:
  
  \`\`\`bash
  python text_formatter.py
  \`\`\`
  
  (or \`python3\` if needed)
  
  ---
  
  ## What You’re Proving
  
  If you complete the core checklist, you’ve proven you can:
  
  - handle user input
  - control program flow with loops
  - make decisions with conditions
  - apply string transformations
  - build a complete interactive tool
  
  That’s real programming.
  
  ---
  
  ## Need Help Without Getting the Answer?
  
  If you get stuck, don’t ask for the full solution.
  
  Ask for a hint like:
  
  - “My menu repeats but doesn’t apply the option — what should I check?”  
  - “My word count is off — what should I consider?”  
  - “My program crashes on invalid input — how do I prevent that?”  
  
  That way you still learn.
  
  ---
  
  ## Next Mini-Project
  
  When you finish this, the next assignment is:
  
  **Simple Menu Program**
  
  `
  ,
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
      "Where should you ask the user to enter text?",
      "What variable stores the current text?",
      "How will you repeatedly show the menu?",
      "What condition should stop the loop?",
      "How do you compare the user's menu choice?",
      "What string methods can transform text?",
      "How do you count words in a sentence?",
      "How can you prevent the program from crashing on invalid input?",
    ],

    level2Hints: [
      "You need at least two main variables: text and choice.",
      "Your loop should continue until the user selects the quit option.",
      "Use if / elif / else to handle each menu option.",
      "Use built-in string methods like .upper(), .lower(), and .title().",
      "To count words, split the string into a list first.",
      "If the user enters an invalid option, print an error message and continue the loop.",
      "If you allow updating text, assign the new input back to the same text variable.",
    ],

    blueprint: [
      "Print a welcome message.",
      "Ask the user to enter initial text and store it.",
      "Set choice variable to empty string.",
      "Start a loop that runs until choice equals the quit value (e.g., '0').",
      "Inside the loop:",
      "  - Print the current text.",
      "  - Print menu options.",
      "  - Ask for user choice.",
      "  - If choice is 1: print uppercase version.",
      "  - If choice is 2: print lowercase version.",
      "  - If choice is 3: print title case version.",
      "  - If choice is 4: count words and print result.",
      "  - If choice is 5: allow user to enter new text.",
      "  - If choice is quit: print goodbye message.",
      "  - Else: print invalid option message.",
    ],

    debuggingGuide: [
      {
        problem: "My menu only runs once and then stops.",
        hint: "You likely forgot to wrap your menu logic inside a loop.",
      },
      {
        problem: "My program crashes when I enter something unexpected.",
        hint: "Make sure you handle invalid menu choices with an else block.",
      },
      {
        problem: "My word count seems incorrect.",
        hint: "Check how you are splitting the string. Are you splitting by spaces?",
      },
      {
        problem: "My updated text doesn't change.",
        hint: "Make sure you're reassigning the new input back to the original text variable.",
      },
      {
        problem: "The menu prints multiple times unexpectedly.",
        hint: "Check where your print statements are placed relative to the loop.",
      },
    ],

    revealSolutionWarning: `
This is ONE possible implementation.

If your version meets the checklist and works correctly, it is valid.
Read the solution carefully and compare logic — do not blindly copy.
    `.trim(),

    exampleSolution: `def show_menu():
    print("\\nText Formatter Menu")
    print("1) Uppercase")
    print("2) Lowercase")
    print("3) Title Case")
    print("4) Word Count")
    print("5) Enter New Text")
    print("0) Quit")


print("Welcome to the Text Formatter!")
text = input("Enter some text: ")

choice = ""

while choice != "0":
    print("\\nCurrent text:", text)
    show_menu()

    choice = input("Enter your choice: ")

    if choice == "1":
        print(text.upper())
    elif choice == "2":
        print(text.lower())
    elif choice == "3":
        print(text.title())
    elif choice == "4":
        print("Word count:", len(text.split()))
    elif choice == "5":
        text = input("Enter new text: ")
    elif choice == "0":
        print("Goodbye!")
    else:
        print("Invalid option.")`,

    upgrades: {
      reverseTextBlueprint: [
        "Add a new menu option for reversing text.",
        "Use slicing to reverse the string.",
        "Print the reversed result.",
      ],

      characterCountBlueprint: [
        "Add a menu option to count characters.",
        "Use len() on the string.",
        "Decide whether spaces should count.",
      ],

      replaceWordBlueprint: [
        "Ask user for a word to replace.",
        "Ask for the replacement word.",
        "Use string replace method to update text.",
        "Print the updated result.",
      ],

      saveToFileBlueprint: [
        "Add a menu option to save text.",
        "Open a file in write mode.",
        "Write the text to the file.",
        "Close the file.",
        "Print confirmation message.",
      ],
    },
  },
  };