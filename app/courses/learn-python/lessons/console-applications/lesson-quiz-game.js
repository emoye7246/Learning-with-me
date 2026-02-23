export const projectQuizGame = {
  id: "project-quiz-game",
  title: "Project: Quiz Game",

  article: `
## Overview

Build a terminal quiz application with clear rules and reliable scoring.

The user answers questions one by one.

The program evaluates each answer and ends with a meaningful summary.

This project is about controlled flow.

---

## Functional Requirements

Your tool must:

- [ ] Display a welcome message and basic rules
- [ ] Present questions in order
- [ ] Accept user input for each answer
- [ ] Validate answer format where needed
- [ ] Track score accurately
- [ ] Show immediate feedback (correct/incorrect)
- [ ] Show final results (score + percentage)
- [ ] Exit cleanly

Avoid hidden behavior.

Each requirement should be easy to verify.

---

## User Flow Description

1. User starts program.
2. Program explains quiz format.
3. Program asks question 1.
4. User answers.
5. Program evaluates and updates score.
6. Repeat until all questions complete.
7. Program prints final score report.

The flow should feel consistent from first question to last.

---

## Suggested File Structure

\`\`\`text
quiz_game/
  main.py
  questions.py
  engine.py
\`\`\`

- \`questions.py\`: quiz dataset
- \`engine.py\`: checking and score logic
- \`main.py\`: interaction flow and entry point

Keep data and runtime logic separate.

That makes iteration easier.

---

## Implementation Milestones

1. Create a small question set (5-10 questions).
2. Build one-question ask/check flow.
3. Add score tracking.
4. Loop through all questions.
5. Print final report.
6. Refactor into modules.

Ship one milestone at a time.

Then harden behavior.

---

## Testing Checklist

- [ ] Correct answers increase score
- [ ] Incorrect answers do not increase score
- [ ] Final score equals expected count
- [ ] Percentage math is correct
- [ ] Input handling does not crash on unexpected values
- [ ] Question loop completes fully

Test edge cases early, especially input normalization.

---

## Optional Extensions

- [ ] Shuffle question order
- [ ] Add multiple categories
- [ ] Add timed questions
- [ ] Save results to file

Add extensions only after core scoring is stable.

---

## Submission Requirements

Entry file:

\`main.py\`

Run with:

\`\`\`bash
python main.py
\`\`\`

---

## What This Project Proves

You can build deterministic interactive software with repeated user input and trustworthy computed output.
`,

  support: {
    intro: `
Use support progressively.
Start with nudges.
Use blueprint when you need structure.
Only check the example after attempting your own build.
    `.trim(),

    level1Nudges: [
      "How will each question and answer be stored?",
      "Where should score increments happen?",
      "What should feedback look like after each answer?",
      "How will you compute percentage at the end?",
      "What is your plan if input is blank or malformed?",
    ],

    level2Hints: [
      "A simple structure is a list of dicts with prompt and answer.",
      "Normalize answers with strip().lower() before comparison.",
      "Increment score only when normalized answer matches expected answer.",
      "Final percentage = (score / total_questions) * 100.",
      "Separate question data from runtime flow for maintainability.",
    ],

    blueprint: [
      "Define question dataset.",
      "Initialize score = 0.",
      "Loop over each question.",
      "Prompt user and capture answer.",
      "Normalize and compare answer.",
      "Print immediate feedback.",
      "After loop, print score and percentage.",
      "Provide simple closing message based on score band.",
    ],

    debuggingGuide: [
      {
        problem: "Correct answers are marked wrong.",
        hint: "Normalize both user input and expected answer before comparison.",
      },
      {
        problem: "Percentage output looks off.",
        hint: "Check integer division assumptions and total question count.",
      },
      {
        problem: "Program ends after first question.",
        hint: "Verify your ask/check logic is inside the questions loop.",
      },
    ],

    revealSolutionWarning: `
Reference implementation below is one approach.
If your behavior matches requirements, your architecture can differ.
    `.trim(),

    exampleSolution: `questions = [
    {"prompt": "Python keyword to define a function?", "answer": "def"},
    {"prompt": "What list index is first?", "answer": "0"},
]

score = 0

for q in questions:
    user = input(q["prompt"] + " ").strip().lower()
    if user == q["answer"].lower():
        score += 1
        print("Correct")
    else:
        print("Incorrect")

percent = (score / len(questions)) * 100
print(f"Final: {score}/{len(questions)} ({percent:.0f}%)")`,

    upgrades: {
      shuffleBlueprint: [
        "Import random.",
        "Shuffle copy of question list.",
        "Run quiz loop with shuffled order.",
      ],
      categoriesBlueprint: [
        "Group questions by category key.",
        "Ask user to pick category.",
        "Run only selected category set.",
      ],
    },
  },
};
