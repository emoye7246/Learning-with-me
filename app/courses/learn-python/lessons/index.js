import { curriculum } from "./curriculum";
import { welcomeLessons } from "./welcome";
import { prerequisitesLessons } from "./prerequisites";
import { workingWithPythonLessons } from "./working-with-python";
import { thinkingSystemsLessons } from "./thinking-systems";
/**
 * All lessons by module. Add a new array here when you add a new module folder.
 */
const lessonsByModule = [welcomeLessons, prerequisitesLessons, workingWithPythonLessons, thinkingSystemsLessons];

/**
 * Build id -> lesson map from all modules.
 */
const lessonMap = lessonsByModule.reduce((acc, lessonArray) => {
  for (const lesson of lessonArray) {
    if (lesson?.id) acc[lesson.id] = lesson;
  }
  return acc;
}, {});

/**
 * Ordered flat list of lessons from curriculum.
 * Add new modules in curriculum.js and a new folder under lessons/<moduleId>/ with an index.js that exports the lessons array.
 */
export const lessons = curriculum.flatMap((module) =>
  module.lessonIds.map((id) => lessonMap[id]).filter(Boolean)
);

/**
 * Modules with metadata (for future sidebar or section headers).
 */
export { curriculum };
