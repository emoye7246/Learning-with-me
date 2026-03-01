export const trackGameTools = {
  id: "track-game-tools",
  title: "Track: Game Tools",

  article: `
## Game Tools

This track is about building games and game-related tools with Python.

Python isn't the fastest language for game development, but it's an excellent environment for learning the fundamentals: game loops, collision detection, sprite movement, state machines, and event handling. It's also a great tool for building game utilities — level editors, data converters, procedural generators.

---

## What You'll Build

- 2D games with graphics, movement, and collision using pygame
- Terminal-based games with rich visual output using the \`rich\` library
- Game utilities: map generators, loot tables, save/load systems
- Simple game engines and physics simulations
- Tools that generate game content procedurally

---

## The Core Libraries

\`\`\`text
pygame       — 2D game framework: window, sprites, events, sound, collision
rich         — Beautiful terminal output: colors, tables, panels, animations
random       — Procedural content generation
dataclasses  — Clean game object definitions
json         — Save/load game state
pathlib      — Asset file management
\`\`\`

---

## A Taste of the Work

A minimal pygame game loop:

\`\`\`python
import pygame

pygame.init()
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()

player_x, player_y = 400, 300
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:  player_x -= 3
    if keys[pygame.K_RIGHT]: player_x += 3
    if keys[pygame.K_UP]:    player_y -= 3
    if keys[pygame.K_DOWN]:  player_y += 3

    screen.fill((0, 0, 0))
    pygame.draw.rect(screen, (100, 200, 100), (player_x, player_y, 40, 40))
    pygame.display.flip()
    clock.tick(60)

pygame.quit()
\`\`\`

A terminal game with \`rich\`:

\`\`\`python
from rich.console import Console
from rich.panel import Panel

console = Console()
console.print(Panel("[bold green]You are in a dark cave.[/]\\n\\nExits: [cyan]north[/], [cyan]east[/]"))
\`\`\`

---

## Why This Track Is Valuable

Games are one of the most motivating ways to learn programming. Every concept you've studied — functions, loops, state, OOP, data structures — comes together in a game.

Game development also builds skills that transfer directly to other domains: event-driven architecture, real-time state management, performance awareness, and user experience thinking.

---

## Where to Start

1. Install pygame: \`pip install pygame\`
2. Run \`python -m pygame.examples.aliens\` to see what's possible.
3. Build a bouncing ball — just a circle that moves and bounces off walls.
4. Add player input.
5. Add a score counter and a way to win or lose.

---

## Recommended Path

1. Get pygame working. Draw shapes and move them.
2. Implement a game loop, event handling, and frame rate control.
3. Add sprites, collision detection, and basic physics.
4. Build one complete small game: Snake, Pong, or a simple platformer.
5. Explore sound, game states (menu → playing → game over), and save systems.

---

## What you just learned

- What the Game Tools track covers
- Which libraries you'll use for graphical and terminal games
- What a basic game loop looks like
- Where to start

---

## What comes next

Install pygame and get a window open. Everything else follows from there.
`,
};
