export const lessonManagingPackagesPip = {
  id: "managing-packages-pip",
  title: "Managing Packages with pip",
  hasChallenge: false,

  article: `
## Managing Packages with pip

pip is Python's package manager. It fetches code written by others and makes it available in your environment.

If you're not using it, you're rebuilding things that already exist.

---

## Installing a Package

\`\`\`bash
pip install requests
\`\`\`

That's it. pip downloads \`requests\` and all its dependencies.

Always run this inside an active virtual environment.

---

## Installing a Specific Version

\`\`\`bash
pip install requests==2.28.2
\`\`\`

Pin versions when you need reproducibility. Unpinned installs get the latest, which can break things later.

---

## Installing Multiple Packages

\`\`\`bash
pip install requests rich click
\`\`\`

Or one per line from a file. More on that next lesson.

---

## Listing Installed Packages

\`\`\`bash
pip list
\`\`\`

Shows everything installed in the current environment.

\`\`\`bash
pip show requests
\`\`\`

Shows detailed info about a specific package: version, location, dependencies.

---

## Upgrading a Package

\`\`\`bash
pip install --upgrade requests
\`\`\`

Gets the latest version that's compatible with your Python.

---

## Uninstalling

\`\`\`bash
pip uninstall requests
\`\`\`

pip asks for confirmation before removing.

---

## Searching for Packages

pip's built-in search is deprecated. Use PyPI directly:

→ https://pypi.org

Search for packages there. Read the docs. Check the last release date and download stats before depending on something.

---

## Checking What's Outdated

\`\`\`bash
pip list --outdated
\`\`\`

Shows packages that have newer versions available. Useful before major updates.

---

## pip vs pip3

On some systems, \`pip\` refers to Python 2's pip.

\`pip3\` refers to Python 3's pip.

When you're in an activated virtual environment, \`pip\` is always correct — it uses the env's Python.

Outside an environment, use \`pip3\` to be safe on Mac/Linux.

---

## Practical Safety Rules

- Always activate your virtual environment first.
- Never \`pip install\` as root or with \`sudo\`.
- Check PyPI before depending on a package — look at activity and stars.
- Pin versions in shared projects.

---

## Try this

1. Activate your \`.venv\`.
2. Install \`httpx\`.
3. Run \`pip show httpx\`.
4. Install a specific version: \`pip install rich==13.0.0\`.
5. Upgrade rich: \`pip install --upgrade rich\`.
6. Uninstall \`httpx\`.
7. Run \`pip list\` to confirm it's gone.

---

## What you just learned

- How to install, upgrade, and uninstall packages
- How to inspect installed packages with pip
- How to pin versions for reproducibility
- Why you always activate first

---

## What comes next

Next lesson: **requirements.txt & pyproject.toml**
`,
};
