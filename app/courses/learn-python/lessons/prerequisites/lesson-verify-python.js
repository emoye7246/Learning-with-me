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

\`\`\`bash
command not found
python is not recognized
no such file or directory
\`\`\`

This does **not** mean you failed.

It usually means:
- Python is not installed yet
- or your system does not know where to find it

This is common and fixable.
The next lessons will show you how to handle these situations calmly and correctly.

For now, simply note what you see.

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

#### About PATH (You Can Skip This)

You may see references to something called the **PATH environment variable**.

You do **not** need to understand or modify PATH right now.
This course will explain it later, when it becomes relevant.

For now, it’s enough to know:
- Python may be installed
- your system just needs to know where to find it

---

### Reminder

If you’re unsure or feel stuck:
- you did nothing wrong  
- setup issues are common  
- this course will handle them with you  

You’re still exactly where you’re supposed to be.

    
`,
}