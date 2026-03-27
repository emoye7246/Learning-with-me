export const lessonCsprojAndSolutionFiles = {
  id: "csproj-and-solution-files",
  title: ".csproj and Solution Files",
  hasChallenge: false,
  article: `
## .csproj and Solution Files

Every C# project has a \`.csproj\` file. Larger programs have multiple projects organized into a \`.sln\` (solution) file. Understanding these files prevents confusion when things go wrong and is essential when you start building multi-project applications.

---

## The .csproj File

The \`.csproj\` file is an XML document that tells MSBuild (the .NET build system) everything it needs to know about your project:

\`\`\`xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <RootNamespace>MyApp</RootNamespace>
    <AssemblyName>MyApp</AssemblyName>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="../MyLibrary/MyLibrary.csproj" />
  </ItemGroup>

</Project>
\`\`\`

**Key elements:**

- **\`<OutputType>\`** — \`Exe\` for executables, \`Library\` for class libraries (DLLs)
- **\`<TargetFramework>\`** — which .NET version to target (\`net8.0\`, \`net7.0\`, \`netstandard2.0\`, etc.)
- **\`<Nullable>enable\`** — enables nullable reference type analysis
- **\`<ImplicitUsings>enable\`** — auto-imports common namespaces
- **\`<PackageReference>\`** — NuGet package dependencies
- **\`<ProjectReference>\`** — references to other projects in the same solution

---

## Multiple Target Frameworks

A library can target multiple frameworks simultaneously:

\`\`\`xml
<TargetFrameworks>net8.0;net6.0;netstandard2.0</TargetFrameworks>
\`\`\`

This is how NuGet packages support multiple versions of .NET. For applications (as opposed to libraries), you typically target a single framework.

---

## The .sln Solution File

A solution file groups multiple projects together. Here's what one looks like:

\`\`\`
Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio Version 17
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "MyApp", "MyApp\\MyApp.csproj", "{GUID-1}"
EndProject
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "MyLibrary", "MyLibrary\\MyLibrary.csproj", "{GUID-2}"
EndProject
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "MyApp.Tests", "MyApp.Tests\\MyApp.Tests.csproj", "{GUID-3}"
EndProject
\`\`\`

You rarely edit \`.sln\` files by hand. The \`dotnet\` CLI manages them:

\`\`\`bash
# Create a new solution
dotnet new sln -n MySolution

# Add a project to the solution
dotnet sln add MyApp/MyApp.csproj
dotnet sln add MyLibrary/MyLibrary.csproj
dotnet sln add MyApp.Tests/MyApp.Tests.csproj

# Build all projects in the solution
dotnet build

# Run all tests in the solution
dotnet test
\`\`\`

---

## Typical Multi-Project Structure

A real-world .NET solution might look like:

\`\`\`
MySolution/
├── MySolution.sln
├── MyApp/
│   ├── MyApp.csproj      (OutputType: Exe)
│   └── Program.cs
├── MyApp.Core/
│   ├── MyApp.Core.csproj  (OutputType: Library)
│   ├── Models/
│   └── Services/
└── MyApp.Tests/
    ├── MyApp.Tests.csproj  (OutputType: Library, xunit)
    └── Services/
\`\`\`

The application (\`MyApp\`) references the library (\`MyApp.Core\`). The tests (\`MyApp.Tests\`) reference the library too, so they can test its classes.

---

## Implicit Usings

With \`<ImplicitUsings>enable</ImplicitUsings>\` in your \`.csproj\`, the following namespaces are automatically imported in every C# file in your project:

- \`System\`
- \`System.Collections.Generic\`
- \`System.IO\`
- \`System.Linq\`
- \`System.Net.Http\`
- \`System.Threading\`
- \`System.Threading.Tasks\`

This is why modern C# code doesn't start with a wall of \`using\` statements. The project file handles the common ones.

---

## What Comes Next

The final lesson in this module covers common setup errors — the things that go wrong for almost every developer when first setting up a .NET environment, and how to fix them.
`,
};
