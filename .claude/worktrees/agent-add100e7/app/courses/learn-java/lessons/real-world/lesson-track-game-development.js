export const lessonTrackGameDevelopment = {
  id: "track-game-development",
  title: "Track: Game Development with libGDX",
  hasChallenge: false,
  article: `
## Track: Game Development with libGDX

Games are among the most technically demanding software ever written. A game must update hundreds of objects, render thousands of pixels, respond to input, play audio, and manage memory — all within 16 milliseconds, 60 times per second.

Building games in Java with libGDX teaches you low-level programming skills that make you a better developer in any domain: performance thinking, the game loop, coordinate systems, state machines, collision detection, and more.

---

## What You Will Build

A sample project: **a top-down dungeon crawler** with:
- A player character that moves with keyboard/gamepad input
- Procedurally generated dungeon rooms
- Enemies that follow the player and deal damage
- Collectible items (health potions, keys)
- A door that opens when all enemies in the room are defeated
- A simple HUD showing health and score

This is a complete, shippable game. It demonstrates the game loop, scene management, collision detection, sprite rendering, and basic AI.

---

## Key Concepts You Will Learn

### What Is libGDX?

libGDX is a free, open-source Java game development framework that lets you write your game once and deploy it to:
- Desktop (Windows, macOS, Linux)
- Android
- iOS (via RoboVM)
- Web (via GWT)

It gives you low-level access to graphics, audio, input, and file I/O without managing platform-specific code yourself.

### The Game Loop
Every game runs in a continuous loop:

1. **Process input** — what buttons are pressed?
2. **Update game state** — move characters, run physics, handle collisions
3. **Render** — draw everything to the screen
4. Repeat (target: 60 times per second)

\`\`\`java
public class DungeonGame extends ApplicationAdapter {

    private SpriteBatch batch;
    private Player player;
    private List<Enemy> enemies;
    private DungeonMap map;

    @Override
    public void create() {
        // Called once at startup
        batch = new SpriteBatch();
        map = new DungeonMap();
        player = new Player(map.getStartPosition());
        enemies = map.spawnEnemies();
    }

    @Override
    public void render() {
        // Called every frame — this IS the game loop
        float deltaTime = Gdx.graphics.getDeltaTime();

        // 1. Update
        player.update(deltaTime);
        enemies.forEach(enemy -> enemy.update(deltaTime, player));
        checkCollisions();

        // 2. Render
        ScreenUtils.clear(0.1f, 0.1f, 0.1f, 1f);
        batch.begin();
        map.render(batch);
        player.render(batch);
        enemies.forEach(enemy -> enemy.render(batch));
        batch.end();
    }

    @Override
    public void dispose() {
        // Release resources — always do this
        batch.dispose();
        player.dispose();
    }
}
\`\`\`

### Handling Input
\`\`\`java
public class Player {

    private static final float SPEED = 150f;
    private Vector2 position;
    private Texture sprite;

    public void update(float deltaTime) {
        Vector2 velocity = new Vector2(0, 0);

        if (Gdx.input.isKeyPressed(Input.Keys.W) || Gdx.input.isKeyPressed(Input.Keys.UP)) {
            velocity.y = SPEED;
        }
        if (Gdx.input.isKeyPressed(Input.Keys.S) || Gdx.input.isKeyPressed(Input.Keys.DOWN)) {
            velocity.y = -SPEED;
        }
        if (Gdx.input.isKeyPressed(Input.Keys.A) || Gdx.input.isKeyPressed(Input.Keys.LEFT)) {
            velocity.x = -SPEED;
        }
        if (Gdx.input.isKeyPressed(Input.Keys.D) || Gdx.input.isKeyPressed(Input.Keys.RIGHT)) {
            velocity.x = SPEED;
        }

        // Normalize diagonal movement so it isn't faster
        if (velocity.len() > 0) velocity.nor().scl(SPEED);

        position.add(velocity.scl(deltaTime));
    }
}
\`\`\`

### Rendering and Sprites
\`\`\`java
// Loading textures
Texture playerSheet = new Texture(Gdx.files.internal("sprites/player.png"));
TextureRegion[] walkFrames = TextureRegion.split(playerSheet, 16, 16)[0]; // First row
Animation<TextureRegion> walkAnimation = new Animation<>(0.1f, walkFrames);
float stateTime = 0;

// In render():
stateTime += Gdx.graphics.getDeltaTime();
TextureRegion currentFrame = walkAnimation.getKeyFrame(stateTime, true); // loop = true
batch.draw(currentFrame, position.x, position.y, 32, 32);
\`\`\`

### Collision Detection
\`\`\`java
public class CollisionSystem {

    public boolean overlaps(Rectangle a, Rectangle b) {
        return a.overlaps(b);
    }

    public void checkPlayerEnemyCollisions(Player player, List<Enemy> enemies) {
        Rectangle playerBounds = player.getBounds();
        for (Enemy enemy : enemies) {
            if (playerBounds.overlaps(enemy.getBounds())) {
                player.takeDamage(enemy.getDamage());
                // Knockback
                Vector2 knockback = new Vector2(player.getPosition())
                    .sub(enemy.getPosition())
                    .nor()
                    .scl(100f);
                player.applyForce(knockback);
            }
        }
    }
}
\`\`\`

### Game Screens and State Management
Real games have multiple screens: main menu, gameplay, pause, game over. libGDX's Screen interface handles this cleanly:

\`\`\`java
public class GameScreen implements Screen {

    private final DungeonGame game;

    public GameScreen(DungeonGame game) {
        this.game = game;
    }

    @Override
    public void render(float delta) {
        update(delta);
        draw();

        if (player.isDead()) {
            game.setScreen(new GameOverScreen(game, score));
        }
    }
}

public class MainMenuScreen implements Screen {
    @Override
    public void render(float delta) {
        // Draw menu
        if (Gdx.input.isKeyJustPressed(Input.Keys.ENTER)) {
            game.setScreen(new GameScreen(game));
        }
    }
}
\`\`\`

### Basic Enemy AI
\`\`\`java
public class Enemy {

    private Vector2 position;
    private float speed = 60f;

    public void update(float deltaTime, Player player) {
        // Simple chase AI: move toward the player
        Vector2 direction = new Vector2(player.getPosition())
            .sub(position)
            .nor();

        position.add(direction.scl(speed * deltaTime));
    }
}
\`\`\`

---

## Sample Game Ideas

- **Breakout clone** — paddle, ball, bricks — great first game, pure mechanics
- **Space shooter** — player ship, waves of enemies, power-ups
- **Platformer** — side-scrolling movement, jumping, obstacles
- **Puzzle game** — grid-based, move blocks to reach the goal
- **Tower defense** — place towers, enemies follow a path, manage resources
- **Roguelike dungeon crawler** — procedural generation, permadeath, items

---

## Tools You Will Use

| Tool | Purpose |
|------|---------|
| libGDX | Cross-platform game framework |
| gdx-setup (libgdx.com/wiki/start/project-generation) | Project generator |
| Tiled Map Editor | Create tile-based levels |
| TexturePacker | Pack sprites into atlases for performance |
| Box2D (bundled with libGDX) | Physics engine |
| Scene2D (bundled with libGDX) | UI components for menus |

---

## Where to Continue Learning

- **libgdx.com/wiki** — the official wiki is thorough and well-maintained
- **"Developing Games in Java" by David Brackeen** — older but timeless concepts
- **YouTube: Brent Aureli** — beginner-friendly libGDX tutorials
- **GameFromScratch (gamefromscratch.com)** — libGDX tutorials and comparisons
- **itch.io** — publish and share your finished games; the community is welcoming

---

## What Comes Next

After your first finished game:
- Polish it: add sound effects, particle effects, and a proper title screen
- Publish it to itch.io and share it
- Study the source code of open-source libGDX games
- Look into **Kotlin + libGDX** — Kotlin's concise syntax is pleasant for game code
- Explore **Box2D** for physics-based gameplay

The most important thing in game development is finishing. Most aspiring game developers never ship anything. If you complete one game — even a simple one — you are ahead of most people who ever started.
`,
};
