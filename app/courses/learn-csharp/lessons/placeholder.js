export function createPlaceholderLesson({ id, title, moduleTitle }) {
  return {
    id,
    title,
    hasChallenge: false,
    article: `
## ${title}

This lesson page is now wired into the C# course structure and available in the correct order.

The full article content for **${title}** has not been written yet. For now, this placeholder keeps the course navigation, lesson routing, and article pages working while the remaining lessons are filled in.

---

## Structure Status

- Module: **${moduleTitle}**
- Lesson ID: \`${id}\`
- Page route: working
- Article view: working
- Full lesson draft: still needed

---

## Next Step

Replace this placeholder article with the finished lesson content when you're ready.
`,
  };
}
