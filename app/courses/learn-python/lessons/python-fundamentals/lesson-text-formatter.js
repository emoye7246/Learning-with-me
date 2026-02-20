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
  };