export const lessonTheDotnetRuntime = {
  id: "the-dotnet-runtime",
  title: "The .NET Runtime",
  hasChallenge: false,
  article: `
## The .NET Runtime

When you write C# code and run it, something specific happens between your source code and the program actually executing. Understanding that process — even at a high level — will save you confusion later when things go wrong.

---

## From Source Code to Running Program

C# source code goes through two stages before it executes:

**Stage 1: Compilation to IL**

The C# compiler (\`csc\` or \`dotnet build\`) reads your \`.cs\` files and compiles them to **Intermediate Language (IL)**, also called MSIL or CIL. IL is a low-level, platform-neutral bytecode — not machine code for any specific CPU, but not human-readable source code either. It lives in \`.dll\` and \`.exe\` files.

**Stage 2: JIT Compilation**

When you run the program, the **.NET Runtime** (also called the CLR — Common Language Runtime) takes over. It reads the IL and uses a **Just-In-Time (JIT) compiler** to convert it to native machine code for your specific CPU. This happens at runtime, the first time each method is called.

The result: C# code runs as native machine code on whatever platform you deploy to, without you needing to recompile for each target platform.

---

## .NET vs .NET Framework — A Brief History

This confuses many beginners, so let's address it directly.

**".NET Framework"** (versions 1.0 through 4.8) was the original Microsoft-only, Windows-only implementation. It shipped with Windows and was the platform for WinForms, WPF, and ASP.NET WebForms. It is still maintained but no longer receives new features.

**".NET Core"** (versions 1.0 through 3.1) was Microsoft's cross-platform rewrite. Open source, runs on Windows/macOS/Linux.

**".NET"** (versions 5, 6, 7, 8, 9...) is the unified successor to both. Starting with .NET 5, Microsoft dropped the "Core" name and this is now the current, actively developed platform.

**When someone says "modern .NET" or just ".NET", they mean .NET 6+.** That's what this course uses.

---

## The Garbage Collector

C# uses automatic memory management. You don't call \`malloc\` and \`free\`. You don't manually track object lifetimes. The **Garbage Collector (GC)** does this for you.

When you create an object with \`new\`, memory is allocated on the heap. When no code holds a reference to that object anymore, the GC eventually reclaims the memory.

This eliminates entire classes of bugs common in C and C++: dangling pointers, double-frees, memory leaks from forgotten deallocation.

The tradeoff: the GC occasionally pauses your program briefly to collect garbage. For most applications this is imperceptible. For latency-sensitive code (high-frequency trading, game engines), you learn to minimize GC pressure — but that's an advanced topic.

---

## The BCL — Base Class Library

The .NET runtime ships with an enormous standard library called the **Base Class Library (BCL)**. This includes:

- \`System.IO\` — file reading and writing
- \`System.Collections.Generic\` — \`List<T>\`, \`Dictionary<K,V>\`, and friends
- \`System.Net.Http\` — \`HttpClient\` for making web requests
- \`System.Text.Json\` — JSON serialization and deserialization
- \`System.Threading\` — threads, tasks, and async primitives
- \`System.Linq\` — LINQ query operations
- And hundreds more namespaces covering nearly every common programming need

You don't install these — they come with the runtime. This is why C# programs can do so much with so little setup.

---

## What This Means in Practice

When you run \`dotnet run\`, the following happens:
1. The .NET SDK compiles your \`.cs\` files to IL
2. The runtime loads the IL
3. The JIT compiles the entry point method to native code and executes it
4. Additional methods are JIT-compiled on first call

When you publish a C# application with \`dotnet publish\`, you can produce:
- A **framework-dependent deployment** (requires .NET installed on the target machine)
- A **self-contained deployment** (bundles the runtime, no installation required)
- A **single-file executable** (everything in one \`.exe\`)

This flexibility is a significant practical advantage when shipping software to users or servers.

---

## What Comes Next

Now that you understand the runtime, the next lesson covers how this course is structured and what to expect as you work through it.
`,
};
