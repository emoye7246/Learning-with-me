# Agent Course Authoring Guide

This guide is for agents (e.g. Codex) that generate or extend course and lesson content for this platform. Your output must match the style of the gold-standard lessons so learners get a calm, clear, beginner-friendly experience.

**When in doubt, match the voice and structure of the lessons in `app/courses/learn-python/lessons/welcome/` and `app/courses/learn-python/lessons/python-fundamentals/`.**

This document works together with the **MASTER STYLE GUIDE** in this folder. Follow both. This guide adds concrete voice, phrasing, and structure patterns; the MASTER STYLE GUIDE defines philosophy, required sections, and compliance.

---

## Condensed system prompt (for quick loading)

You author course and lesson content for this platform. Follow the **Agent Course Authoring Guide** and **MASTER STYLE GUIDE** in `app/content-style/`. Match the voice and structure of the gold-standard lessons in `app/courses/learn-python/lessons/welcome/` and `app/courses/learn-python/lessons/python-fundamentals/`: short sentences, calm direct tone, clear sections ("What just happened?", "What comes next"), no emojis or hype. Teach thinking, not syntax dumps. For mini-projects, use the full support schema (intro, level1Nudges, level2Hints, blueprint, debuggingGuide, revealSolutionWarning, exampleSolution); never put the full solution in the article. When uncertain, mirror an existing lesson file from those paths.

---

## 1. Role and purpose

You are authoring course and lesson content for this learning platform. Your job is to produce lessons and mini-projects that:

- Teach thinking and clarity, not syntax dumps
- Feel like the existing welcome and python-fundamentals lessons: calm, direct, short sentences, clear sections
- Challenge learners without leaving them stuck
- Use the exact article structure and support schema already used in the codebase

Do not invent new tone or structure. Mirror the gold-standard files.

---

## 2. Core philosophy (align with MASTER STYLE GUIDE)

- **We teach thinking.** We do not teach syntax for its own sake.
- **One idea at a time.** Clarity before cleverness. Confidence from clarity, not from hype.
- **We do not overwhelm.** We do not over-explain. We do not dump information. We guide.
- **Growth alignment:** Every lesson or project should strengthen at least one of: debug without panic, reason about code behavior, handle ambiguity, think before typing, build usable software, structure before coding. Keep this subtle; never list it explicitly in the lesson text.
- **What this platform is NOT:** Not a YouTube transcript, not a documentation dump, not a hype-driven bootcamp, not copy-and-paste training. It is structured skill development.

---

## 3. Voice and sentence craft

### Short sentences and paragraphs

- Use 1–3 lines per paragraph. Often one idea per sentence.
- Break up long thoughts into separate sentences.

**Good (from gold-standard):**

> Python is not just another programming language.  
> It is a **tool** — one that can be used to create, automate, explore, and build systems that solve real problems.  
> This article is your starting point. No syntax. No pressure. Just clarity.

> You are no longer installing tools. You are no longer checking versions. You are writing a program. It will be small. It will be simple. And it will work.

**Bad:**

> In this lesson we will learn about Python, which is a very popular and powerful programming language that you can use to do many things like build websites and analyze data, and by the end you'll understand the basics!

### Direct "you"

- Speak to the learner. Use "you" and "your." Avoid passive or vague "one might" or "the learner."

**Good:** "When you write a program, you are explaining: what should happen, in what order, under what conditions."

**Bad:** "When writing a program, one explains what should happen and in what order."

### Punchy closers

- End sections with a short declarative sentence. It reinforces the idea and keeps rhythm.

**Examples from gold-standard:**

- "That's programming."
- "You are in control."
- "That's developer thinking."
- "Python does exactly what you tell it to do. Nothing more. Nothing less."
- "Every website. Every automation tool. Every game. Every AI system. Starts like this. One instruction at a time."

### Honest, not cheerleader

- Acknowledge difficulty and struggle without hype. No fake excitement.

**Good (from lesson-how-this-course-works):**

> At some point, you will feel stuck. That doesn't mean you're failing. It means you're learning something new.  
> You are not expected to be perfect. You are expected to be persistent.

**Bad:** "Don't worry, you've got this! It's super easy and you'll love it!"

### What to avoid

- **No** emojis
- **No** AI references (e.g. "ask ChatGPT", "use an AI")
- **No** marketing hype or exclamation overload
- **No** long walls of text (break into sections and short paragraphs)
- **No** robotic or corporate tone
- **No** "Just simply…" or "Easy!" or "It's that simple!"

### Before/after examples

| Avoid | Prefer (gold-standard style) |
|-------|-----------------------------|
| "In this lesson we will learn about variables." | "In the last lesson, you printed text. Now we take the next step." |
| "Variables are really important for storing data in your programs." | "A variable is a name that stores a value. Think of it like a labeled container." |
| "Simply run the code and you'll see the output!" | "Save. Run the file. Observe the output." |
| "That's all there is to it!" | "That's programming." or "You are in control." |
| "If you get stuck, don't worry—just keep trying!" | "When you hit a wall: revisit previous lessons, break the problem into smaller pieces, read error messages carefully." |

---

## 4. Article structure by lesson type

### 4.1 Concept / "welcome"-style (article-only)

Use for orientation, philosophy, or meta-lessons where code is optional or absent.

**Pattern:**

1. **Opening:** What this is and why it matters (1–3 short paragraphs).
2. **Body:** Short subsections with `##`; use `---` between sections. Bullets for lists. No code unless necessary.
3. **Optional:** "What it is not" or "What this means for you."
4. **Close:** "What comes next" with explicit next lesson title.

**Section flow example:** What Is X? → Why It Matters → What X Is Not (if relevant) → What Comes Next.

**Reference files:** `lesson-welcome.js`, `lesson-what-programming-actually-is.js`, `lesson-what-python-can-do.js`, `lesson-how-this-course-works.js`.

### 4.2 Hands-on / fundamentals (code-in-lesson)

Use when the lesson teaches a concrete skill with code.

**Pattern:**

1. **Brief intro:** What we're doing and why (2–4 short sentences).
2. **Steps:** Numbered or titled steps (e.g. "Step 1 — Open VS Code", "Step 2 — Create a New Folder"). One concept per step.
3. **Code block:** Small example. Then immediately:
4. **"What just happened?" / "What is this doing?"** — Break down the code in plain language (bullets OK).
5. **"Try this" / "Observe."** — Short instruction to run or modify. Use "Save." "Run the file." "Observe the output."
6. **"Why this matters"** — One short section tying the step to bigger picture.
7. **"What you just learned"** — Bullet list of skills or facts.
8. **"What comes next"** — Explicit next lesson title, e.g. "Next lesson: **Variables & Types**" or "When you're ready, continue to: **Numbers & Math**."

**Required elements:** Intro, mental model or "what just happened," 2–4 focused code examples (small blocks), "What you just learned," "What comes next" with next lesson name.

**Reference files:** `lesson-hello-world.js`, `lesson-variables-and-types.js`, `lesson-numbers-and-math.js`.

### 4.3 Formatting rules (all lessons)

- Use `##` for main sections, `###` for sub-steps.
- Use `---` between sections.
- Keep paragraphs to 1–3 lines.
- Use backticks for file names and code references: `hello.py`, `print()`, `type()`.
- Whitespace is part of the design; don't cram text.

---

## 5. Mini-projects and challenges

### 5.1 Article structure for mini-projects

State clearly at the top that this is not copy-paste: e.g. "This is not a copy-and-paste lesson. This is an assignment." or "This is a challenge."

**Required article sections (in order):**

1. **Overview** — What they're building and that they already have the tools from prior lessons.
2. **What you're building** — Short bullet list of high-level behaviors.
3. **Requirements checklist (core)** — Checkboxes: "[ ] Do X", "[ ] Do Y". Concrete, testable.
4. **User experience checklist (optional)** — Polish: clear prompts, clean output, etc.
5. **Rules** — What the program must or must not do.
6. **Suggested build plan (no answers)** — Ordered steps without giving code (e.g. "1. Create a variable that stores the secret number. 2. Ask the user for a guess…").
7. **Testing checklist** — Specific cases to test (e.g. "Guess correct on first try", "Guess too low", "Guess too high").
8. **Extensions (optional)** — Upgrade ideas; one subsection per upgrade.
9. **Submission requirements** — File name (e.g. `guessing_game.py`) and how to run (e.g. `python guessing_game.py`).
10. **What you're proving** — Short bullet list of skills demonstrated.
11. **Need help?** — Pointer that support (nudges, hints, blueprint, solution) is available below; don't give the full solution in the article.

**Reference files:** `lesson-number-guessing.js`, `lesson-mini-project-intro.js`.

### 5.2 Support object (required for mini-projects)

The **article never contains the full solution.** The `support` object holds layered help and the example solution.

**Support must follow this schema:**

- **intro** — Short text: use support in order; start with Level 1, then Level 2, then Blueprint; only reveal solution if truly stuck. Frame as "one possible implementation."
- **level1Nudges** — Array of strings: questions to ask yourself (e.g. "What variable stores the secret number?").
- **level2Hints** — Array of strings: clearer guidance without full code (e.g. "Your loop condition should keep running while the guess is NOT equal to the secret number.").
- **blueprint** — Array of strings: step-by-step structure in plain language, no code (pseudocode OK).
- **debuggingGuide** — Array of objects: `{ problem: "...", hint: "..." }` for common issues.
- **revealSolutionWarning** — String: warning that the solution is one possible implementation; don't copy blindly.
- **exampleSolution** — String: full code of one possible implementation.
- **upgrades** (optional) — Object: keys are upgrade names, values are arrays of blueprint-style steps for optional extensions.

Solutions must be framed as "One possible implementation." Never imply there is only one correct approach.

**Reference:** MASTER STYLE GUIDE section 5; `support` object in `lesson-number-guessing.js`.

---

## 6. Code and formatting rules

- **Code blocks:** Small. One concept per block. Readable, explicit, beginner-safe. No clever tricks, no lambdas or one-liners unless the lesson is about them.
- **Instructions around code:** Use "Save." "Run the file." "Observe the output." "Try this." Short and imperative.
- **Markdown:** `##` for main sections, `###` for sub-steps; `---` between sections; backticks for `filename.py` and `function_name()`.
- **Clarity > brevity.** No dense or advanced features unless already taught.

---

## 7. Transitions and phrases

### Use these

- "What just happened?"
- "What is this line doing?" / "Let's break it down."
- "Try this." / "Observe." / "Save." / "Run the file."
- "That's programming." / "You are in control." / "That's developer thinking."
- "When you're ready, continue to: **Lesson name**"
- "Next lesson: **Title**"
- "This is the foundation of …"
- "Nothing more. Nothing less."
- "You wrote instructions. Python executed them. Your computer responded."

### Avoid these

- "In this lesson we will…"
- Long passive sentences
- Emojis
- "Just simply…", "Easy!", "It's that simple!"
- Giving the full solution in the article for projects (solution belongs in `support` only)

---

## 8. Compliance and consistency

When generating content:

- **Follow this guide and the MASTER STYLE GUIDE strictly.** Do not invent new structure or tone.
- **Do not remove required sections** from lessons or mini-projects.
- **Do not add AI mentions** or references to external AI tools.
- **When uncertain,** open and mirror the gold-standard lesson files under `lessons/welcome/` and `lessons/python-fundamentals/` by path.

Consistency builds trust. The goal is for generated lessons to be indistinguishable in voice and structure from the existing gold-standard lessons.

---

## 9. Quick reference: gold-standard paths

- **Concept / welcome-style:** `app/courses/learn-python/lessons/welcome/` (e.g. `lesson-welcome.js`, `lesson-what-programming-actually-is.js`, `lesson-how-this-course-works.js`).
- **Hands-on / fundamentals:** `app/courses/learn-python/lessons/python-fundamentals/` (e.g. `lesson-hello-world.js`, `lesson-variables-and-types.js`, `lesson-numbers-and-math.js`).
- **Mini-projects:** `lesson-mini-project-intro.js`, `lesson-number-guessing.js` (and other `lesson-*.js` / `mini-project-*.js` in python-fundamentals).
- **Style foundation:** `MASTER STYLE GUIDE` in this folder.

End of Agent Course Authoring Guide.
