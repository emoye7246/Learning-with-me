export const lessonMiniProjectQuizGame = {
  id: "mini-project-quiz-game-cs",
  title: "Mini-Project: Quiz Game with Score Tracking",
  hasChallenge: false,
  article: `
## Mini-Project: Quiz Game with Score Tracking

Build an interactive quiz game in the terminal. The player is presented with multiple-choice questions one at a time, selects an answer, and receives a final score at the end. This project focuses on data structures, control flow, and displaying results clearly.

---

## What You're Building

A trivia quiz game that:
- Presents a series of multiple-choice questions
- Accepts a letter answer (A, B, C, or D)
- Tells the player if they got it right or wrong after each question
- Tracks the score throughout
- Displays a final score summary with percentage and a message based on performance

\`\`\`
=== C# Quiz Game ===

Question 1 of 5:
What keyword is used to define a method that cannot be overridden?

  A. abstract
  B. virtual
  C. sealed
  D. static

Your answer: C

Correct! sealed prevents a method from being overridden.

---

Question 2 of 5:
...

=== Results ===
You scored 4 out of 5 (80%)
Great work! Keep it up.
\`\`\`

---

## Getting Started

\`\`\`bash
dotnet new console -n QuizGame
cd QuizGame
\`\`\`

---

## Data Model

Represent each question as a record or class:

\`\`\`csharp
record QuizQuestion(
    string Text,
    string[] Options,   // 4 options: index 0 = A, 1 = B, 2 = C, 3 = D
    int CorrectIndex,   // 0-based index of the correct answer
    string Explanation  // shown after the player answers
);
\`\`\`

---

## Defining Questions

Hard-code your questions as a list. Make them about C# or any topic you enjoy:

\`\`\`csharp
var questions = new List<QuizQuestion>
{
    new(
        Text: "Which keyword makes a class method available without an instance?",
        Options: ["abstract", "virtual", "static", "sealed"],
        CorrectIndex: 2,
        Explanation: "static methods belong to the class, not an instance."
    ),
    new(
        Text: "What does 'var' do in C#?",
        Options: [
            "Declares a variant type",
            "Lets the compiler infer the type",
            "Creates a variable-length array",
            "Declares a volatile field"
        ],
        CorrectIndex: 1,
        Explanation: "var is implicit typing — the compiler infers the type from the right-hand side."
    ),
    // Add more questions...
};
\`\`\`

---

## Core Game Loop

\`\`\`csharp
int score = 0;

for (int i = 0; i < questions.Count; i++)
{
    var q = questions[i];
    Console.WriteLine($"\\nQuestion {i + 1} of {questions.Count}:");
    Console.WriteLine(q.Text);
    Console.WriteLine();

    char[] labels = ['A', 'B', 'C', 'D'];
    for (int j = 0; j < q.Options.Length; j++)
        Console.WriteLine($"  {labels[j]}. {q.Options[j]}");

    char answer = PromptAnswer();
    int selectedIndex = answer - 'A';

    if (selectedIndex == q.CorrectIndex)
    {
        Console.ForegroundColor = ConsoleColor.Green;
        Console.WriteLine($"Correct! {q.Explanation}");
        score++;
    }
    else
    {
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine($"Wrong. The correct answer was {labels[q.CorrectIndex]}. {q.Explanation}");
    }
    Console.ResetColor();
    Console.WriteLine("---");
}
\`\`\`

---

## Input Validation for Answers

\`\`\`csharp
static char PromptAnswer()
{
    while (true)
    {
        Console.Write("Your answer (A/B/C/D): ");
        string? input = Console.ReadLine()?.Trim().ToUpper();

        if (input?.Length == 1 && input[0] >= 'A' && input[0] <= 'D')
            return input[0];

        Console.WriteLine("Please enter A, B, C, or D.");
    }
}
\`\`\`

---

## Final Score Display

\`\`\`csharp
static void ShowResults(int score, int total)
{
    double percent = (double)score / total * 100;
    Console.WriteLine("\\n=== Results ===");
    Console.WriteLine($"You scored {score} out of {total} ({percent:F0}%)");

    string message = percent switch
    {
        100 => "Perfect score! Excellent!",
        >= 80 => "Great work! Keep it up.",
        >= 60 => "Not bad. A little more practice and you'll ace it.",
        >= 40 => "Keep studying — you'll get there.",
        _ => "Don't give up. Review the material and try again."
    };

    Console.WriteLine(message);
}
\`\`\`

---

## Key Requirements

- [ ] At least 5 questions with 4 options each
- [ ] Input validation — only accepts A, B, C, or D
- [ ] Feedback after each question (right/wrong + explanation)
- [ ] Score tracked correctly throughout
- [ ] Final score shown with percentage and performance message
- [ ] Colors used for correct (green) and incorrect (red) feedback

---

## Stretch Goals

- **Shuffle questions** using \`Random.Shared.Shuffle()\` so the order varies each run
- **Shuffle answer options** and track the correct answer dynamically
- **Timer** — give the player 10 seconds per question using \`Stopwatch\`
- **High score file** — save the best score to a file and display it at the start
- **Categories** — allow the player to choose a topic before the quiz starts
`,
};
