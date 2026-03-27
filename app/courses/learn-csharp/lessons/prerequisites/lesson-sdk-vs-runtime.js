export const lessonSdkVsRuntime = {
  id: "sdk-vs-runtime",
  title: "SDK vs Runtime",
  hasChallenge: false,
  article: `
## SDK vs Runtime

One of the most common sources of confusion for new .NET developers is the difference between the SDK and the Runtime. This matters because when you deploy an application, you often don't install the SDK on the server — you install the runtime. And when you read documentation or error messages, these two things are mentioned differently.

---

## The Runtime

The **.NET Runtime** is what's required to **run** a compiled .NET application. It includes:

- The **CLR (Common Language Runtime)** — the execution engine that JIT-compiles IL to native code
- The **GC (Garbage Collector)** — automatic memory management
- The **BCL (Base Class Library)** — the standard library (\`System.IO\`, \`System.Collections\`, etc.)

The runtime is what you install on a production server that needs to run your C# application. It's smaller than the SDK because it doesn't include the compiler or build tools — it only has what's needed to execute already-compiled programs.

---

## The SDK

The **.NET SDK** is what's required to **develop** .NET applications. It includes:

- **Everything in the Runtime** (you can't build without the ability to run)
- **The C# compiler (\`csc\` / Roslyn)**
- **The \`dotnet\` CLI tool** for creating, building, testing, and publishing
- **MSBuild** — the build system
- **Project templates** for console apps, libraries, web APIs, etc.
- **NuGet client** — for downloading packages

The SDK is what you install on your development machine. It's larger than the runtime because it bundles everything needed for development.

---

## A Concrete Analogy

Think of it this way:

- The **SDK** is like a carpenter's full workshop — you need it to build things
- The **Runtime** is like just the finished piece of furniture — you need it to use what was built

You build in the workshop. Users get the furniture.

---

## What Gets Installed Where

| Environment | Install |
|---|---|
| Developer laptop | SDK (includes runtime) |
| Production server running your app | Runtime only |
| CI/CD build server | SDK (needs to compile) |
| Docker container running your app | Runtime only |
| Docker container building your app | SDK |

---

## Checking What's Installed

\`\`\`bash
# See installed SDKs
dotnet --list-sdks

# See installed runtimes
dotnet --list-runtimes
\`\`\`

Output might look like:
\`\`\`
# SDKs
8.0.100 [/usr/local/share/dotnet/sdk]

# Runtimes
Microsoft.AspNetCore.App 8.0.0 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
Microsoft.NETCore.App 8.0.0 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
\`\`\`

Notice that there are multiple runtime types:
- **Microsoft.NETCore.App** — the base runtime for console apps and libraries
- **Microsoft.AspNetCore.App** — adds the ASP.NET Core web framework on top

---

## Self-Contained vs Framework-Dependent Deployments

When you publish a C# application, you choose one of two deployment models:

**Framework-dependent** (default): The published output is small. It requires the correct .NET Runtime to be installed on the target machine.

**Self-contained**: The published output bundles the runtime alongside your application. It's larger, but the target machine needs nothing pre-installed. This is how most shipping desktop applications work.

\`\`\`bash
# Framework-dependent (small, requires runtime on target)
dotnet publish -c Release

# Self-contained (larger, no runtime required on target)
dotnet publish -c Release --self-contained true -r win-x64
\`\`\`

---

## What Comes Next

With the SDK installed and these concepts understood, the next lesson covers setting up VS Code with the C# Dev Kit — the recommended editor for this course.
`,
};
