export const lessonStateAndChange = {
    id: "thinking-systems-state-and-change",
    title: "State & Change Over Time",
  
    // ✅ Article markdown
    article: `
  ## State & Change Over Time
  
  In Stage 2 Lesson 1, you learned to trace code line by line.
  
  Now we level up:
  
  > **State changes over time — and those changes can surprise you.**
  
  A huge number of bugs happen because a developer thinks they’re “changing a variable”
  when they’re actually:
  - changing a shared object
  - changing something in-place
  - or changing one name while another name still points to the old value
  
  This lesson is about learning the difference.
  
  ---
  
  ## Reassignment vs Mutation (the difference matters)
  
  ### ✅ Reassignment
  Reassignment means a name points to a new value.
  
  \`\`\`python
  x = 5
  x = 10
  \`\`\`
  
  Here, \`x\` is updated to a new value.
  
  ---
  
  ### ✅ Mutation
  Mutation means the *same object* is changed in-place.
  
  Lists are mutable — meaning they can change without becoming a new list.
  
  \`\`\`python
  nums = [1, 2, 3]
  nums.append(4)
  \`\`\`
  
  The list object changes, but \`nums\` still points to the same list.
  
  ---
  
  ## The Danger: Shared State
  
  This is where people get surprised.
  
  \`\`\`python
  a = [1, 2]
  b = a
  b.append(3)
  print(a)
  \`\`\`
  
  If \`b\` is the same list as \`a\`, then changing \`b\` changes \`a\` too.
  
  That’s not Python being weird.
  That’s shared state.
  
  ---
  
  ## Tracing State Like a Developer
  
  In this lesson, you’ll practice tracing the state of a list over time.
  
  Your goal isn’t to memorize rules.
  
  Your goal is to be able to say:
  - what the data looks like right now
  - what changed
  - why it changed
  
  That’s how real debugging works.
  
  ---
  
  ## Your interactive challenge
  
  You’re going to simulate what happens when two variables reference the same list.
  
  You will return the list after a series of operations.
  
  This is how you prove you understand state changes over time.
  `,
  
  };
  