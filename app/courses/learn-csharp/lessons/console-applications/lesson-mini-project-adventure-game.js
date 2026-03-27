export const lessonMiniProjectAdventureGame = {
  id: "mini-project-adventure-game-cs",
  title: "Mini-Project: Text-Based Adventure Game",
  hasChallenge: false,
  article: `
## Mini-Project: Text-Based Adventure Game

Build a text-based adventure game where the player explores rooms, makes choices, manages an inventory, and works toward a win or lose condition. This is the most open-ended project in the module — a chance to combine everything you've learned with your own creativity.

---

## What You're Building

A terminal game where the player:
- Navigates between connected rooms
- Reads descriptions of their surroundings
- Picks up and uses items from an inventory
- Makes choices that affect the outcome
- Can win or lose depending on their decisions

\`\`\`
=== The Abandoned Lighthouse ===

You are in the entrance hall. Dust covers the stone floor.
A rusted lantern hangs near the door. There are exits to the NORTH and EAST.
You are carrying: nothing.

What do you do?
> take lantern
You pick up the rusted lantern.

> go north
You enter the winding staircase. It's very dark here.
Without light, you cannot see where you're going.

> use lantern
The lantern flickers to life, casting a warm glow.
You can now see the staircase clearly. A key glints on the step above.

> take key
You pick up the brass key.
\`\`\`

---

## Getting Started

\`\`\`bash
dotnet new console -n AdventureGame
cd AdventureGame
\`\`\`

Plan the structure before you start coding:

\`\`\`
AdventureGame/
├── Program.cs
├── GameEngine.cs      ← main game loop and command parsing
├── Room.cs            ← room data and connections
├── Item.cs            ← item data
└── Player.cs          ← player state and inventory
\`\`\`

---

## Data Models

\`\`\`csharp
class Item
{
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public bool IsUsable { get; set; }
}

class Room
{
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public Dictionary<string, Room> Exits { get; set; } = [];
    public List<Item> Items { get; set; } = [];
    public bool IsLocked { get; set; }
    public string? RequiredItem { get; set; }  // item name needed to enter
}

class Player
{
    public Room CurrentRoom { get; set; } = null!;
    public List<Item> Inventory { get; set; } = [];
    public bool IsAlive { get; set; } = true;
    public bool HasWon { get; set; }

    public bool HasItem(string name) =>
        Inventory.Any(i => i.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
}
\`\`\`

---

## Building the World

Connect rooms by setting their exits:

\`\`\`csharp
var entrance = new Room { Name = "Entrance Hall", Description = "..." };
var staircase = new Room { Name = "Winding Staircase", Description = "...", IsLocked = false };
var lighthouse = new Room
{
    Name = "Lighthouse Top",
    Description = "You've made it to the top. The signal lamp awaits.",
    IsLocked = true,
    RequiredItem = "brass key"
};

entrance.Exits["north"] = staircase;
staircase.Exits["south"] = entrance;
staircase.Exits["up"] = lighthouse;
lighthouse.Exits["down"] = staircase;

entrance.Items.Add(new Item { Name = "lantern", Description = "A rusted but functional lantern." });
\`\`\`

---

## Command Parser

Parse player input into a verb and optional noun:

\`\`\`csharp
static (string verb, string noun) ParseCommand(string input)
{
    var parts = input.Trim().ToLower().Split(' ', 2);
    string verb = parts[0];
    string noun = parts.Length > 1 ? parts[1] : "";
    return (verb, noun);
}
\`\`\`

Handle commands in a switch or dictionary:

\`\`\`csharp
var (verb, noun) = ParseCommand(input ?? "");

switch (verb)
{
    case "go":
    case "move":
        HandleMove(player, noun);
        break;
    case "take":
    case "pick":
        HandleTake(player, noun);
        break;
    case "use":
        HandleUse(player, noun);
        break;
    case "look":
        DescribeRoom(player.CurrentRoom);
        break;
    case "inventory":
    case "i":
        ShowInventory(player);
        break;
    case "help":
        ShowHelp();
        break;
    case "quit":
        return;
    default:
        Console.WriteLine("I don't understand that. Try: go, take, use, look, inventory, help.");
        break;
}
\`\`\`

---

## Win and Lose Conditions

Define clear win and lose states:

\`\`\`csharp
// Win condition — check after each action
if (player.CurrentRoom.Name == "Lighthouse Top" && player.HasItem("signal mirror"))
{
    Console.WriteLine("You activate the signal lamp. A rescue boat approaches. You win!");
    player.HasWon = true;
    break;
}

// Lose condition — entering a dangerous room without the right item
if (player.CurrentRoom.Name == "Flooded Basement" && !player.HasItem("rubber boots"))
{
    Console.WriteLine("The cold water is overwhelming. You collapse. Game over.");
    player.IsAlive = false;
    break;
}
\`\`\`

---

## Key Requirements

- [ ] At least 5 connected rooms with descriptions
- [ ] At least 3 items that can be picked up
- [ ] At least 1 item that is required to progress
- [ ] Inventory system (take, show, use items)
- [ ] Movement between rooms (go north, go up, etc.)
- [ ] At least one win condition and one lose condition
- [ ] Help command listing available commands
- [ ] Input is case-insensitive and handles unknown commands gracefully

---

## Stretch Goals

- **Save and load** — write the player's room and inventory to a file so they can resume
- **Room revisit descriptions** — show a shorter description when a room is visited again
- **NPC** — add a character the player can talk to using a "talk" command
- **Timed events** — use a turn counter to trigger events (the tide comes in after 20 turns)
- **Multiple endings** — different endings depending on which items the player collected

This project has no single right answer. Design the story you want to tell, build the world around it, and make it fun to play.
`,
};
