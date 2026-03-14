import { curriculum } from "./curriculum";
import { welcomeLessons } from "./welcome";
import { prerequisitesLessons } from "./prerequisites";
import { javaFundamentalsLessons } from "./java-fundamentals";
import { thinkingInSystemsLessons } from "./thinking-in-systems";
import { oopFoundationsLessons } from "./oop-foundations";
import { oopAdvancedLessons } from "./oop-advanced";
import { collectionsGenericsLessons } from "./collections-generics";
import { filesIoExceptionsLessons } from "./files-io-exceptions";
import { projectStructureBuildToolsLessons } from "./project-structure-build-tools";
import { testingJunitLessons } from "./testing-junit";
import { concurrencyLessons } from "./concurrency";
import { apisHttpLessons } from "./apis-http";
import { gitWorkflowLessons } from "./git-workflow";
import { standardLibraryEssentialsLessons } from "./standard-library-essentials";
import { realWorldLessons } from "./real-world";
import { capstoneLessons } from "./capstone";

/**
 * All lessons by module. Add a new array here when you add a new module folder.
 */
const lessonsByModule = [
  welcomeLessons,
  prerequisitesLessons,
  javaFundamentalsLessons,
  thinkingInSystemsLessons,
  oopFoundationsLessons,
  oopAdvancedLessons,
  collectionsGenericsLessons,
  filesIoExceptionsLessons,
  projectStructureBuildToolsLessons,
  testingJunitLessons,
  concurrencyLessons,
  apisHttpLessons,
  gitWorkflowLessons,
  standardLibraryEssentialsLessons,
  realWorldLessons,
  capstoneLessons,
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
