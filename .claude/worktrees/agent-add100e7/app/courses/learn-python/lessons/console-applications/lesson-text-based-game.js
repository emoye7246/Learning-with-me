export const projectTextBasedGame = {
  id: "project-text-based-game",
  title: "Project: Text-Based Game",

  article: `
## Overview

Build a terminal game driven by choices and consequences.

The player reads scenarios, chooses actions, and reaches different outcomes.

This project focuses on state management and branching flow.

Treat narrative as interface design.

---

## Functional Requirements

Your tool must:

- [ ] Start with game intro and objective
- [ ] Present at least 5 meaningful decision points
- [ ] Use conditional branching for outcomes
- [ ] Track at least one player state variable
- [ ] End in win/lose/neutral outcomes
- [ ] Handle invalid choices safely
- [ ] Offer replay option after ending

Each choice should have a visible consequence.

---

## User Flow Description

1. Player starts game.
2. Program presents scenario.
3. Player picks option.
4. Program updates state and narrative.
5. Repeat until ending condition reached.
6. Program offers replay.

Replay must reset state fully.

---

## Suggested File Structure

\`\`\`text
text_game/
  main.py
  scenes.py
  engine.py
\`\`\`

- \`scenes.py\`: scene text + choices
- \`engine.py\`: transitions + state updates
- \`main.py\`: loop + replay + entry point

Keep story content separate from transition logic.

---

## Implementation Milestones

1. Define game setting and objective.
2. Implement one scene with two choices.
3. Add branching into multiple scenes.
4. Add state variable (health, points, trust, inventory).
5. Add endings and replay flow.
6. Refactor into scene/engine separation.

Do not build every branch at once.

Ship path-by-path.

---

## Testing Checklist

- [ ] Every listed choice path works
- [ ] Invalid input does not crash game
- [ ] State changes as expected across scenes
- [ ] Endings trigger correctly
- [ ] Replay starts fresh state

Test every branch at least once.

Unvisited branches hide most bugs.

---

## Optional Extensions

- [ ] Add inventory system
- [ ] Add random events
- [ ] Add save/load state
- [ ] Add difficulty modes

Add complexity only after base branching is stable.

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

You can design and implement multi-path interactive CLI software with controlled state, branching, and replay-safe flow.
`,

  support: {
    intro: `
Start with structure.
Design scene flow before coding.
Use support to unblock specific points.
    `.trim(),

    level1Nudges: [
      "What state variable will affect outcomes?",
      "How will you represent scenes and transitions?",
      "How many endings do you need for meaningful replay value?",
      "Where will you validate user choice input?",
      "How will you reset state on replay?",
    ],

    level2Hints: [
      "A scene can be represented by an id, narrative text, and option map.",
      "Keep transition logic in one function so behavior stays consistent.",
      "Use a while loop that continues until an ending scene is reached.",
      "Track one state variable early before adding extras.",
      "Replay is easiest if game loop is wrapped in a play_game() function.",
    ],

    blueprint: [
      "Define initial scene id and player state.",
      "Render scene narrative and options.",
      "Read user choice and validate.",
      "Apply state updates for chosen action.",
      "Transition to next scene id.",
      "Repeat until scene is terminal.",
      "Print ending summary.",
      "Ask to replay and reset state if yes.",
    ],

    debuggingGuide: [
      {
        problem: "Game jumps to wrong scene.",
        hint: "Check your mapping from choice -> next scene id.",
      },
      {
        problem: "Replay starts in old state.",
        hint: "Reinitialize all state variables at the start of each play session.",
      },
      {
        problem: "Invalid input breaks progression.",
        hint: "Handle unrecognized choices with a retry branch and continue loop.",
      },
    ],

    revealSolutionWarning: `
The reference code is intentionally partial.
Prioritize your own game design and flow decisions.
    `.trim(),

    exampleSolution: `def play_game():
    health = 3
    scene = "start"

    while True:
        if scene == "start":
            print("You stand at a fork.")
            choice = input("Left or right? ").strip().lower()
            if choice == "left":
                scene = "river"
            elif choice == "right":
                scene = "cave"
            else:
                print("Choose left or right.")
        elif scene == "river":
            print("You found the exit. You win.")
            return
        elif scene == "cave":
            health -= 1
            if health <= 0:
                print("You lost.")
                return
            scene = "start"`,

    upgrades: {
      inventoryBlueprint: [
        "Add an inventory list to player state.",
        "Create actions that append/remove items.",
        "Gate specific paths behind required items.",
      ],
      saveLoadBlueprint: [
        "Serialize current scene and state to JSON file.",
        "Load JSON to resume session.",
        "Validate save file content before applying.",
      ],
    },
  },
};
