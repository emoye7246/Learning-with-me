/**
 * Curriculum: ordered list of modules and their lesson IDs.
 * Add new modules here and create a matching folder under lessons/<moduleId>/ with an index.js that exports the lessons array.
 * Lesson order is determined by the order of lessonIds in each module.
 */
export const curriculum = [
  {
    id: "welcome",
    title: "Welcome to Python",
    lessonIds: ["welcome-intro", "intro-where-python-lives"],
  },
  {
    id: "working-with-python",
    title: "Working with Python",
    lessonIds: [
      "basics-hello-world",
      "basics-variables-types",
      "basics-lists",
      "basics-operators",
      "basics-string-formatting",
      "basics-string-operations",
      "basics-conditions",
      "basics-loops",
      "basics-functions",
      "basics-classes-objects",
      "basics-dictionaries",
      "basics-modules-packages",
      "basics-input-output",
    ],
  },
];
