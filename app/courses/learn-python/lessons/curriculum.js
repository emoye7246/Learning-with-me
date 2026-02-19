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
      "intro-what-programming-actually-is",
      // "intro-how-python-runs",
      "intro-what-python-can-do",
      "intro-how-this-course-works",
      "intro-what-does-it-mean-to-be-a-python-developer"
      // "intro-how-to-learn-programming",
      // "intro-what-comes-next"
    ],
  },
  {
    id: "prerequisites",
    title: "Prerequisites",
    lessonIds: [
      "installing-python",
      "verify-python",
      "install-VScode",
      "VScode-Tour",
      "terminal-basics",
      "common-setup-issues",
      // "AI",
    ],
  },
  // {
  //   id: "working-with-python",
  //   title: "Working with Python",
  //   lessonIds: [
  //     "basics-hello-world",
  //     "basics-variables-types",
  //     "basics-lists",
  //     "basics-operators",
  //     "basics-string-formatting",
  //     "basics-string-operations",
  //     "basics-conditions",
  //     "basics-loops",
  //     "basics-functions",
  //     "basics-classes-objects",
  //     "basics-dictionaries",
  //     "basics-modules-packages",
  //     "basics-input-output",
  //   ],
  // },
  {
    id: "python-fundamentals",
    title: "Python Fundamentals",
    lessonIds: [
      "hello-world",
      "variables-and-types",
      "numbers-and-math"

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
