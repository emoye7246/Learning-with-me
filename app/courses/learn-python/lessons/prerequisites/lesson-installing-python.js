export const lessonInstallingPython = {

    id: "installing-python",
    title: "Installing Python",

    article: `
## Installing Python (Windows · macOS · Linux)

Before you can write Python programs, you need one thing:

**Python installed on your computer.**

This lesson will walk you through that process calmly and clearly.
No assumptions. No shortcuts. No “you should already know this.”

---

## First, a Simple Truth

Installing Python is not a test of intelligence.
It’s not something you “get right” the first time or you fail.

Even experienced developers reinstall Python.
Even professionals double-check versions.

This is normal.

---

## What You’re Installing

Python is a program called an **interpreter**.

Your computer does not understand Python by default.
The interpreter is what reads your ${'.py'} files and executes the instructions inside them.

Installing Python means:
- your computer can recognize Python files
- you can run Python programs from the terminal
- you are working in a real development environment

That’s it.

---

## Where Python Comes From (Important)

Python should always be installed from the **official source**.

The official Python website is:
> https://www.python.org

This ensures:
- you get the correct version
- you avoid broken or outdated installers
- your setup matches what professionals use

Avoid third-party download sites.

---

## Choosing the Right Version

For this course, you want **Python 3**.

If you see multiple options:
- choose the latest stable Python 3 version
- ignore anything labeled Python 2

Python 2 is obsolete.
You do not need it.

---

## Installation by Operating System

### Windows

1. Go to https://www.python.org
2. Click **Downloads**
3. Download the Windows installer
4. Run the installer

⚠️ **Important step**  
During installation, make sure to check the box that says:
> **“Add Python to PATH”**

This allows you to run Python from the terminal.

If you miss this step, it’s fixable later. Don’t panic.

---

### macOS

macOS may come with a version of Python already installed.
That version is often outdated and not intended for development.

For this course:
1. Go to https://www.python.org
2. Download the macOS installer
3. Run the installer normally

This installs a modern Python version alongside the system one.

You don’t need to remove anything.

---

### Linux

Most Linux distributions already include Python.

To install or update Python, use your package manager.
For example:

- Ubuntu / Debian:

### Quick Check

If Python is already installed, this step ensures it is available and up to date.

On many Linux systems, Python is included by default.
However, some systems may not have Python 3 installed, or it may not be accessible from the terminal yet.

Using the install command ensures:
- Python 3 is present on your system
- the system knows where to find it
- you can run Python the same way developers do everywhere else

If the command completes successfully, Python is installed.
If it reports that Python is already installed, that’s perfectly fine — nothing else is required.

---

## You Cannot “Break” Your Computer Here

This is important to understand:

Installing Python does **not**:
- damage your system
- overwrite important files
- remove existing software
- lock you into anything permanent

On Linux, installing software through the package manager is a normal, everyday operation.
It is how the operating system is designed to work.

If something goes wrong:
- it can be fixed
- it can be reinstalled
- it can be adjusted later

Nothing in this step is irreversible.

You are not putting your computer at risk.

---

## What Not to Worry About Yet

At this stage, you do **not** need to worry about:
- virtual environments
- package managers beyond basic installation
- Python versions beyond “Python 3”
- configuration files
- editor customization
- advanced terminal commands

Those topics exist for a reason — but they only matter **after** you are comfortable running Python.

Right now, your goal is simple and focused:

> **Get Python onto your machine and make sure it exists.**

Everything else comes later, when it actually helps instead of confusing.

---

## Pause and Complete This Step

Before moving on:
- make sure Python is installed
- take your time
- don’t rush through the steps
- don’t compare your setup to someone else’s

Different systems look different.
That is normal.

What matters is that Python is present on *your* machine.

---

## What Comes Next

In the next lesson, you’ll confirm that Python is installed correctly.

You’ll do this by asking your computer to tell you which version of Python it is running.

This is the moment where:
> “I think it worked”  
turns into  
> **“It worked.”**

When you’re ready, continue to:
**1.2 Verifying Your Python Installation**
`
}