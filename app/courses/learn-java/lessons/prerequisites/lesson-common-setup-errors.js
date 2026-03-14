export const lessonCommonSetupErrors = {
  id: "common-setup-errors",
  title: "Common Setup Errors",
  hasChallenge: false,
  article: `
## Common Setup Errors

Setup problems are normal. Every developer has spent hours fighting with environment configuration at some point.

This lesson covers the most common Java setup errors and how to fix each one.

---

## Error: 'java' is not recognized as an internal or external command

**Platform:** Windows

**Cause:** Java is not in your PATH environment variable.

**Fix:**
1. Search for "Environment Variables" in the Windows search bar
2. Click "Edit the system environment variables"
3. Click "Environment Variables..."
4. Under "System variables", find "Path"
5. Click Edit → New
6. Add the path to your JDK's \`bin\` directory, e.g.:
   \`C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.2.13-hotspot\\bin\`
7. Click OK on all dialogs
8. Open a **new** Command Prompt (existing ones won't see the change)

---

## Error: java: command not found

**Platform:** macOS/Linux

**Cause:** Java is not in your PATH, or the shell hasn't loaded the updated PATH.

**Fix:**
\`\`\`bash
# Check where Java is installed
which java

# If Homebrew-installed, add to .zshrc or .bash_profile:
echo 'export PATH="/opt/homebrew/opt/openjdk@21/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Verify
java -version
\`\`\`

---

## Error: error: Source option 5 is no longer supported. Use 7 or later.

**Cause:** IntelliJ's project is configured for an old Java version.

**Fix:**
1. Go to **File → Project Structure**
2. Under **Project**, set "Language level" to **21**
3. Under **SDK**, make sure Java 21 is selected
4. Click Apply and OK

---

## Error: Cannot find or load main class Main

**Cause:** The class name doesn't match the file name, or the file isn't in the right location.

**Fix:**
- Make sure \`Main.java\` contains \`public class Main\` (names must match exactly, including case)
- Make sure you're running the file that contains the \`main\` method
- Try: right-click the file in the Project Panel → Run 'Main.main()'

---

## Error: class Main is public, should be declared in a file named Main.java

**Cause:** File name and class name don't match.

**Fix:**
- If your class is named \`Main\`, the file must be named \`Main.java\`
- If your class is named \`HelloWorld\`, the file must be named \`HelloWorld.java\`
- Java is case-sensitive: \`main.java\` is not the same as \`Main.java\`

---

## IntelliJ Shows Red Errors But My Code Looks Correct

**Cause:** IntelliJ's index is stale.

**Fix:**
1. Go to **File → Invalidate Caches**
2. Click "Invalidate and Restart"
3. Wait for IntelliJ to restart and re-index your project

---

## No Output, Program Appears to Hang

**Cause:** Your program is waiting for input (e.g., Scanner is open and waiting for you to type something).

**Fix:**
- Check if you have a \`Scanner\` that's waiting for input
- Click in the Run console at the bottom and type something, then press Enter
- If you didn't intend to read input, remove the Scanner code

---

## IntelliJ Can't Find the JDK

**Fix:**
1. Go to **File → Project Structure → SDKs**
2. If no JDK is listed, click **+** → **Add JDK**
3. Navigate to where your JDK is installed:
   - macOS Homebrew: \`/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home\`
   - Windows: \`C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.2.13-hotspot\`
   - Linux: \`/usr/lib/jvm/java-21-openjdk-amd64\`

---

## What You Learned

- PATH issues are the most common setup problem on all platforms
- Class name must exactly match file name (case-sensitive)
- Language level mismatches cause source compatibility errors
- Invalidating IntelliJ's cache fixes many unexplained red errors

## What Comes Next

Your environment is working. Now it's time to learn Java itself.

Continue to:
**Module 2 — Java Fundamentals**
`,
};
