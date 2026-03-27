export const lessonCommonSetupErrors = {
  id: "common-setup-errors-cs",
  title: "Common Setup Errors",
  hasChallenge: false,
  article: `
## Common Setup Errors

Almost every developer hits at least one of these problems when setting up a .NET development environment for the first time. This lesson catalogs the most common errors and their solutions so you can move past them quickly.

---

## "dotnet is not recognized" / "command not found"

**Symptom:** After installing the .NET SDK, the terminal says \`dotnet\` is not a recognized command.

**Cause:** The terminal was open before the SDK was installed, so the updated PATH variable isn't visible to it. Or the installer didn't add \`dotnet\` to your PATH correctly.

**Solution:**
1. Close all terminal windows
2. Open a new terminal
3. Try \`dotnet --version\` again

If that doesn't work, manually check your PATH:

\`\`\`bash
# macOS/Linux
echo $PATH

# Windows PowerShell
$env:PATH
\`\`\`

Look for a path like \`/usr/local/share/dotnet\` (macOS) or \`C:\\Program Files\\dotnet\` (Windows). If it's missing, re-run the SDK installer or add the path manually.

---

## Wrong .NET Version

**Symptom:** \`dotnet --version\` shows an old version, or building a project fails with "The current .NET SDK does not support targeting .NET 8.0."

**Solution:** Install the correct SDK version from https://dot.net. Multiple SDK versions can coexist. You can pin a project to a specific SDK with a \`global.json\` file:

\`\`\`json
{
  "sdk": {
    "version": "8.0.100"
  }
}
\`\`\`

Place \`global.json\` in the root folder of your solution.

---

## "Could not find a part of the path" (Windows)

**Symptom:** Build errors about missing paths on Windows.

**Cause:** Windows has a maximum path length of 260 characters. Deep directory structures (like \`C:\\Users\\YourName\\Documents\\Projects\\...\\src\\...\`) hit this limit.

**Solution:** Enable long path support in Windows:
- Open Group Policy Editor or run \`regedit\`
- Navigate to \`HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem\`
- Set \`LongPathsEnabled\` to \`1\`

Or keep your projects in a shorter path like \`C:\\Dev\\Projects\\\`.

---

## NuGet Restore Failures

**Symptom:** \`dotnet restore\` or \`dotnet build\` fails with "Unable to resolve 'PackageName'."

**Cause:** No internet connection, a corporate proxy blocking nuget.org, or a corrupted local NuGet cache.

**Solutions:**
\`\`\`bash
# Clear the NuGet cache and retry
dotnet nuget locals all --clear
dotnet restore

# Or specify a different NuGet source
dotnet restore --source https://api.nuget.org/v3/index.json
\`\`\`

---

## CS0234 / Namespace Not Found

**Symptom:** Compiler error like "The type or namespace 'X' does not exist in the namespace 'Y'."

**Cause:** Missing NuGet package, missing \`using\` directive, or referencing a class from a different project without a \`ProjectReference\`.

**Solutions:**
- Check if you need to add a NuGet package: \`dotnet add package PackageName\`
- Add the correct \`using\` statement at the top of your file
- If the class is in another project, add a \`<ProjectReference>\` in your \`.csproj\`

---

## The Extension Doesn't Start in VS Code

**Symptom:** After installing C# Dev Kit, VS Code shows no IntelliSense, no error highlighting, or a red status bar message.

**Solutions:**
1. Make sure you opened a **folder** containing a \`.csproj\` or \`.sln\` file — not just a raw \`.cs\` file
2. Check the Output panel (View → Output) and select "C#" from the dropdown — error messages appear here
3. Run the "Restart Language Server" command from the Command Palette (\`Ctrl+Shift+P\`)
4. Ensure you're running a supported .NET SDK version (8.x or later is always supported)

---

## Build Succeeds but Run Fails

**Symptom:** \`dotnet build\` succeeds but \`dotnet run\` gives a runtime error.

**Common causes:**
- A missing file that the program tries to read at runtime
- An incorrect connection string or configuration value
- A method that throws an exception at runtime (not a compile error)

Read the full exception message — it will tell you the type of exception, the message, and the stack trace showing exactly where in your code it occurred.

---

## Permission Errors on macOS/Linux

**Symptom:** "Permission denied" when running a published executable.

**Solution:**
\`\`\`bash
chmod +x ./MyApp
./MyApp
\`\`\`

---

## What Comes Next

You're ready to write C#. The next module starts with the fundamentals — every token, every concept, from the ground up.
`,
};
