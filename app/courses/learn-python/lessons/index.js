import { curriculum } from "./curriculum";
import { welcomeLessons } from "./welcome";
import { prerequisitesLessons } from "./prerequisites";
import { pythonFundamentalsLessons } from "./python-fundamentals";
import { thinkingInSystemsLessons } from "./thinking-in-systems";
import { consoleApplicationsLessons } from "./console-applications";
import { filesDataLessons } from "./files-data";
import { projectStructureScalingPythonLessons } from "./project-structure-scaling-python";
/**
 * All lessons by module. Add a new array here when you add a new module folder.
 */
const lessonsByModule = [
  welcomeLessons,
  prerequisitesLessons,
  pythonFundamentalsLessons,
  thinkingInSystemsLessons,
  consoleApplicationsLessons,
  filesDataLessons,
  projectStructureScalingPythonLessons,
];

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
