export const lessonVerifyPython = {
    id: "verify-python",
    title: "Verify Your Python Installation",
    hasChallenge: false,

    article: `
## Verifying Your Python Installation

At this point, Python should be installed on your computer.

Before moving on, it’s important to **confirm that everything worked**.
This lesson is not about writing code or fixing problems.
It’s about checking.

Think of this as asking your computer a simple question and listening to its answer.

---

## What “Verifying” Means

Verifying your Python installation means:
- confirming Python is installed
- confirming your system can find it
- confirming you can run it from the terminal

If this step works, your environment is ready.
If it doesn’t, that’s okay — it simply tells us what needs attention next.

---

## Open the Terminal

You’ll use the **Terminal** again for this step.

If you need a refresher on how to open it:
- on Windows, open **Command Prompt** or **PowerShell**
- on macOS, open **Terminal**
- on Linux, open **Terminal**

Once the terminal window is open, you’re ready to continue.

---

## Ask Python for Its Version

In the terminal, type the following command and press **Enter**:

\`\`\`bash
python --version
\`\`\`

On some systems, especially macOS and Linux, you may need to run:

\`\`\`bash
python3 --version
\`\`\`

You do not need to understand why yet.
You are simply checking which command your system recognizes.

---

## What You Should See

If Python is installed correctly, the terminal will respond with something like:

\`\`\`bash
Python 3.12.1
\`\`\`

The exact version number may be different.
That’s completely fine.

What matters is:
- the command runs
- Python responds
- the version starts with **3**

If you see that, your Python installation is working.

---

## If You See an Error

You might see a message such as:

On **Windows:**
\`\`\`
'python' is not recognized as an internal or external command
\`\`\`

On **macOS / Linux:**
\`\`\`
command not found: python
\`\`\`

This does **not** mean you failed.

It usually means:
- Python is not installed yet
- or your system does not know where to find it

This is common and fixable.

If this happens, scroll past the "What Comes Next" section below — there's an optional troubleshooting guide waiting for you.

---

## Why This Step Matters

This is your first real interaction with Python.

You didn’t click a button.
You didn’t use a special interface.
You typed a command and received a response.

This is how real development works.

Everything that comes next — running files, debugging code, building projects —
is built on this exact interaction.

---

## Take a Moment

If Python responded with a version number, pause for a second.

That moment — where your computer answers you —
is important.

It means your environment is real.
It means you’re set up correctly.

---

## What Comes Next

Now that Python is installed and verified, the next step is to begin working in a real editor.

In the next lesson, you’ll install **VS Code** and prepare a workspace where you’ll write and run Python files.

When you’re ready, continue to:

**1.3 Installing VS Code**

--- 

## Still Having Trouble? (Optional)

**Note:** if Python is installed correctly, you can skip this section.

If Python did not respond as expected, that’s okay.

You do **not** need to solve this immediately to continue learning.
The steps below are optional support if you want to investigate further now.

---

### Windows

If you’re on Windows and the command wasn’t recognized, try:

- Running the command in **PowerShell** or **Command Prompt** (not inside VS Code’s terminal yet)
- Re-running the Python installer, choosing **Modify**, and making sure **"Add Python to PATH"** is checked
- Restarting your terminal after installation — PATH changes only take effect in a new window

After reopening the terminal, run \`python --version\` again.
If it still doesn’t work, search for **"Edit the system environment variables"** in the Start menu and confirm Python’s folder appears in the PATH list.

---

### macOS

If you’re on macOS and \`python --version\` did not work, try:

- Running \`python3 --version\` instead  
- Making sure you’re typing the command in the **Terminal**, not inside a code editor  
- Confirming that Python was installed successfully  

macOS can keep multiple versions of Python, and this behavior is normal.

For a visual walkthrough, you can watch this optional explanation video:  
[macOS Python Version & PATH Explanation](https://youtu.be/nhv82tvFfkM?si=JBN7qzL3kXzmg8pR)

---

### Linux

If you’re on Linux and \`python --version\` did not work, try:

- Running \`python3 --version\` instead  
- Making sure you’re typing the command in the **Terminal**, not inside a code editor  
- Confirming that Python is installed on your system  

Most Linux systems use \`python3\` explicitly by default.

---

### About PATH (All Platforms)

Across all operating systems, the most common cause of a "command not found" error is a **PATH** issue.

PATH is a list your system uses to find programs when you type commands in the terminal.
If Python is installed but not on the PATH, your terminal can’t find it — even though it’s there.

You do **not** need to fully understand PATH right now.
This course will cover it properly later.

For now, it’s enough to know:
- the error doesn’t mean Python is broken
- it usually means your system just needs to know where to look

Each troubleshooting section above addresses this for your specific OS.

---

### Reminder

If you’re unsure or feel stuck:
- you did nothing wrong  
- setup issues are common  
- this course will handle them with you  

You’re still exactly where you’re supposed to be.

    
`,
}