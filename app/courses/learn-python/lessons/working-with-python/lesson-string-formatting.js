export const lessonStringFormatting = {
    id: "basics-string-formatting",
    title: "String Formatting",
    hasChallenge: false,

  
    // ✅ Article markdown (tone and structure aligned with lesson-hello-world)
    article: `
  ## String Formatting — Combining Text with Variables in Python
  
  So far you have printed fixed strings and worked with numbers.
  The next step is to **combine text with values that change** — like a name or an age.
  
  In this lesson, your objective is clear:
  > **Use C-style string formatting to build a single string from a template and two values: a name and an age.**
  
  This is how real programs build messages: one template, many possible outputs. You give Python exact instructions; it fills in the placeholders.
  
  ---
  
  ## What is Python doing when you format a string?
  
  Python is still read and executed **line by line** by the interpreter.
  
  When you write a format expression like \`"My name is %s" % (name,)\`, you are not describing text in general.
  You are giving **one specific instruction**: “Take this template and these values, and produce one string.”
  
  Python evaluates the template, substitutes the values, and produces the result.
  There is no guessing.
  There is no skipping steps.
  Python does exactly what you tell it to do.
  
  ---
  
  ## The code you are working toward
  
  By the end of this lesson, you will write a function that takes a name and an age and returns a single formatted string:
  
  \`\`\`python
  def format_message(name, age):
      return "My name is %s and I am %d years old." % (name, age)
  \`\`\`
  
  When called with \`"Alex"\` and \`21\`, it returns: \`"My name is Alex and I am 21 years old."\`
  
  Let’s break down the pieces.
  
  ---
  
  ## Understanding the format string
  
  A **format string** is a string that contains **placeholders** — special markers that tell Python where to insert values.
  
  In C-style formatting, the placeholders use \`%\` plus a letter:
  
  - \`%s\` — substitute a **string**
  - \`%d\` — substitute an **integer** (decimal)
  - \`%f\` — substitute a **floating-point number**
  
  So in \`"My name is %s and I am %d years old."\`, the \`%s\` is where the name goes and the \`%d\` is where the age goes.
  
  The template is fixed; the values you pass in change the result.
  
  ---
  
  ## Why the \`%\` operator?
  
  In Python, the \`%\` operator on a string means: “format this string using the values that follow.”
  
  You write:
  
  \`\`\`python
  format_string % (value1, value2, ...)
  \`\`\`
  
  So when you write:
  
  \`\`\`python
  "My name is %s and I am %d years old." % (name, age)
  \`\`\`
  
  You are telling Python:
  > “Take this format string and fill in \`%s\` with the first value and \`%d\` with the second.”
  
  The result is a new string. No \`%\` means no substitution — you would just have a literal string with \`%s\` and \`%d\` in it.
  
  ---
  
  ## Why a tuple?
  
  The values after \`%\` must be grouped into a single object.
  Python uses a **tuple** for that: a fixed-size sequence written in parentheses.
  
  \`\`\`python
  (name, age)
  \`\`\`
  
  The order matters. The first value goes to the first placeholder, the second to the second, and so on.
  
  If you have only one value, you still need a tuple — write \`(value,)\` with a comma so Python knows it is a tuple.
  
  ---
  
  ## Matching placeholders and values
  
  The number and type of placeholders must match the values you provide.
  
  - \`%s\` expects a string (or something Python can convert to text).
  - \`%d\` expects an integer.
  
  Mismatching them (e.g. \`%d\` for a string) can cause errors or wrong output.
  For this lesson: one \`%s\` for name, one \`%d\` for age, and a tuple \`(name, age)\`.
  
  ---
  
  ## How Python evaluates your format expression
  
  When Python runs your format expression, it:
  
  1. Takes the format string
  2. Reads each placeholder from left to right
  3. Takes the next value from the tuple
  4. Converts the value to the right form (string, integer, etc.) and inserts it
  5. Returns the final string
  
  Once that happens, your function can return that string.
  
  ---
  
  ## Your interactive challenge
  
  Your task is to write a function \`format_message(name, age)\` that:
  
  - Takes two arguments: \`name\` (a string) and \`age\` (an integer)
  - Returns the string: \`"My name is &lt;name&gt; and I am &lt;age&gt; years old."\` using C-style formatting with \`%s\` and \`%d\`
  
  Use the template \`"My name is %s and I am %d years old."\` and the tuple \`(name, age)\`.
  
  If your function returns the correct string for the given name and age, the challenge is complete.
  
  Small details matter — the exact template, the order of placeholders, and the tuple are all part of writing correct Python.
  
  ---
  
  ## Why this lesson matters
  
  This lesson introduces ideas you will use constantly:
  - Format strings and placeholders
  - Combining fixed text with changing values
  - Tuples as a way to pass multiple values to one operation
  
  Later you will use other formatting styles (e.g. \`.format()\` or f-strings) and build more complex messages. The idea stays the same: one template, many outputs.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - What \`%s\` and \`%d\` mean in a format string
  - How the \`%\` operator uses a tuple of values
  - Why the order of placeholders and values must match
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and format your first string.
  `,
  };
  