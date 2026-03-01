export const lessonInstallingPython = {

    id: "installing-python",
    title: "Installing Python",
    hasChallenge: false,

    article: `

## Installing Python (Windows · macOS · Linux)

Before you can write Python programs, Python itself must be installed on your computer.

Python is not built into most systems in a way that’s suitable for development.
Installing it is a normal, expected step — even for professional developers.

This lesson is about getting Python onto your machine safely and calmly.
Nothing more.
Nothing less.

---
## What You’re Installing

Python is a program called an **interpreter**.

Your computer does not understand Python code on its own.
The interpreter is what reads \`*.py\` files and executes the instructions inside them.

Installing Python means:
- your computer can run Python programs
- the terminal can recognize the \`python\` command
- you are working in a real development environment

That’s it.

---

## Always Use the Official Source

Python should always be installed from the official website:

[https://www.python.org](https://www.python.org)

This ensures:
- you get a safe, up-to-date version
- your setup matches real-world environments
- you avoid broken or unofficial installers

---

## Choosing the Right Version

For this course, you want **Python 3**.

If multiple versions are shown:
- choose the latest stable Python 3 release
- ignore anything labeled Python 2

Python 2 is obsolete and not used in modern development.

---

## Installing Python by Operating System

### Windows

1. Go to https://www.python.org
2. Click **Downloads**
3. Download the Windows installer
4. Run the installer

**Important:**
During installation, check the box that says **“Add Python to PATH.”**

This allows Python to be run from the terminal.
If you miss this step, it can be fixed later.

---
### macOS

macOS may already include a version of Python.
That version is often outdated and not intended for development.

For this course:
1. Go to https://www.python.org
2. Download the macOS installer
3. Run the installer normally

This installs a modern version of Python alongside the system version.
You do not need to remove anything.

---
### Linux

Most Linux systems already include Python or provide it through the system package manager.

If Python 3 is not installed, or you want to ensure it is available, you can install it using the terminal.

For Ubuntu or Debian-based systems, run:

\`\`\`bash
sudo apt install python3
\`\`\`

You do **not** need to understand this command yet.

It simply tells the system to install Python 3 from official repositories.
If the system reports that Python is already installed, that’s fine — nothing else is required.

If you don’t know how to open the terminal yet, here’s the quick version:

- **Windows** — press the Windows key, type **Command Prompt** or **PowerShell**, press Enter
- **macOS** — press **⌘ + Space**, type **Terminal**, press Enter
- **Linux** — press **Ctrl + Alt + T** or find Terminal in your applications menu

You’ll learn everything about using the terminal in **1.5 Terminal Basics** — for now, just knowing how to open it is enough.

---

## You Cannot “Break” Your Computer Here

This is important to understand:

Installing Python does **not**:
- damage your system
- overwrite important files
- remove existing software
- lock you into anything permanent

On Linux, installing software through the package manager is normal.
On Windows and macOS, Python installs like any other application.

If something goes wrong:
- it can be fixed
- it can be reinstalled
- it can be adjusted later

Nothing in this step is irreversible.

--- 

## Pause and Complete This Step

Before moving on:
- make sure Python is installed
- take your time
- don’t rush
- don’t compare your setup to others

Different systems look different.
That is normal.

---

## What Comes Next

In the next lesson, you’ll verify that Python is installed correctly by asking your computer which version it’s running.

This is the moment where:

“I think it worked”
turns into
**“It worked.”**

When you’re ready, continue to:

**1.2 Verifying Your Python Installation**
    
`
}