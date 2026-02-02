/**
 * Curriculum: ordered list of modules and their lesson IDs.
 * Add new modules here and create a matching folder under lessons/<moduleId>/ with an index.js that exports the lessons array.
 * Lesson order is determined by the order of lessonIds in each module.
 */
export const curriculum = [
  {
    id: "welcome",
    title: "Welcome to Python",
    lessonIds: [
      "welcome-intro", 
      "intro-where-python-lives",
      "intro-how-python-runs",
      "intro-how-to-learn-programming",
      "intro-what-comes-next"
    ],
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
  {
    id: "thinking-systems",
    title: "Thinking Systems",
    lessonIds: [
      "thinking-systems-tracing-execution",
      "thinking-systems-state-and-change",
      "thinking-systems-scope-and-lifetime",
      "thinking-systems-errors-and-debugging",  
      "thinking-systems-refactoring-and-clarity",
      "thinking-systems-problem-decomposition",
    ],
  },
];
