export const lessonTerminalBasics = {

    id: "terminal-basics",
    title: "Terminal Basics",
    hasChallenge: false,

    article: `
  ## Terminal Basics for Python Developers

The terminal may look simple.
It may even look intimidating.

But underneath it, the terminal is just a way to talk directly to your computer.

Earlier, you used it to check your Python version.
Now, you’ll learn how to move around and understand where you are.

---

## What the Terminal Actually Is

The terminal is a text-based interface.

Instead of clicking buttons, you:
- type commands
- press Enter
- receive output

That’s it.

There are no hidden tricks.
No secret rules.
Just instructions and responses.

---

## Understanding Your Location

The terminal always operates from a specific folder.

This is called your **current directory**.

Every command you run happens relative to where you are.
That’s why understanding your location is important.

---

## See Where You Are

To see your current directory, type:

pwd

Press Enter.

On Windows PowerShell, this may also work.
In Command Prompt, you can simply look at the path shown in the prompt.

This command shows your current folder.

---

## See What’s Inside a Folder

To list the contents of your current folder:

On macOS or Linux:
ls

On Windows Command Prompt:
dir

Press Enter.

You’ll see a list of files and folders inside your current directory.

---

## Move Into a Folder

To move into a folder, use:

cd folder-name

Example:

cd python-projects

Press Enter.

You are now inside that folder.

---

## Move Back One Level

To move back to the previous folder, type:

cd ..

The two dots mean:
"go up one directory."

This is one of the most common commands you will use.

---

## You Cannot Break Anything With These Commands

The commands you learned:
- pwd
- ls / dir
- cd

do not delete files.
They do not modify your system.
They only help you move around.

Exploration is safe here.

---

## Why This Matters for Python

When you run:

python file.py

the terminal looks for that file in your current directory.

If you are in the wrong folder, Python will not find it.

Understanding location is the difference between:
- confusion
- and control

---

## Practice

Open your terminal.

Try:
- pwd
- ls or dir
- cd into a folder
- cd .. to move back

Get comfortable moving around.

This skill will make everything else easier.

---

## What Comes Next

Now that you can navigate your system from the terminal,
the next step is an important one before you start installing packages.

In the next lesson, you’ll read about using AI tools effectively —
the difference between using them to grow and using them as a crutch.

When you’re ready, continue to:

**1.6 Using AI With Discipline**

    `,
}