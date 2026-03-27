export const lessonInstallingTheDotnetSdk = {
  id: "installing-the-dotnet-sdk",
  title: "Installing the .NET SDK",
  hasChallenge: false,
  article: `
## Installing the .NET SDK

Before you write a single line of C#, you need the .NET SDK installed on your machine. This lesson walks through what the SDK is, where to get it, and how to verify it's working.

---

## What Is the .NET SDK?

The .NET SDK (Software Development Kit) is a bundle that includes:

- The **C# compiler** — converts your source code to IL
- The **dotnet CLI** — the command-line tool for creating, building, and running projects
- The **.NET Runtime** — what actually executes your compiled programs
- **Build tools** — MSBuild for managing the compilation process
- **Templates** — starter project templates for console apps, web APIs, libraries, and more

The SDK is everything you need to develop C# applications from the command line. IDEs like Visual Studio install their own copy of the SDK, but it's good practice to have the standalone SDK installed too.

---

## Installing on Windows

1. Go to **https://dot.net** — Microsoft's official .NET download page
2. Click **Download .NET** — this takes you to the latest stable release
3. Under the SDK column (not Runtime), download the installer for your architecture (x64 for most machines, ARM64 for Surface Pro X or similar)
4. Run the installer — it's a standard Windows installer, click through and finish
5. Open a new Command Prompt or PowerShell window (must be new — existing windows won't see the new PATH)

---

## Installing on macOS

**Option 1: Official installer**
1. Go to **https://dot.net**
2. Download the macOS pkg installer
3. Run it — it installs to \`/usr/local/share/dotnet\`

**Option 2: Homebrew (recommended for developers)**
\`\`\`bash
brew install --cask dotnet-sdk
\`\`\`

---

## Installing on Linux

Most Linux distributions can install via a package manager. For Ubuntu/Debian:

\`\`\`bash
sudo apt-get update
sudo apt-get install -y dotnet-sdk-8.0
\`\`\`

For other distributions, check **https://learn.microsoft.com/en-us/dotnet/core/install/linux** for the official instructions.

---

## Verifying the Installation

Open a terminal (Command Prompt, PowerShell, Terminal, or bash) and run:

\`\`\`bash
dotnet --version
\`\`\`

You should see output like:
\`\`\`
8.0.100
\`\`\`

The exact version number will vary, but any 8.x or later is fine for this course.

To see more detail about what's installed:

\`\`\`bash
dotnet --info
\`\`\`

This shows the SDK version, runtime version, and the location where .NET is installed.

---

## Which Version Should You Install?

Install the latest **LTS (Long-Term Support)** version. As of 2025, that is **.NET 8**. LTS releases receive security and bug fixes for three years.

Avoid installing preview or release candidate versions for learning — they can have bugs and their behavior may differ from documentation.

---

## Multiple SDK Versions

You can have multiple .NET SDK versions installed side by side. This is common in professional environments where different projects target different versions. The \`dotnet --list-sdks\` command shows all installed SDKs.

For this course, one current LTS version is all you need.

---

## What Comes Next

The next lesson explains the difference between the SDK and the Runtime — a distinction that matters when you eventually deploy applications to servers or other machines.
`,
};
