import { curriculum } from "./curriculum";
import { welcomeLessons } from "./welcome";
import { prerequisitesLessons } from "./prerequisites";
import { csharpFundamentalsLessons } from "./csharp-fundamentals";
import { thinkingInSystemsLessons } from "./thinking-in-systems";
import { consoleApplicationsLessons } from "./console-applications";
import { filesDataLessons } from "./files-data";
import { oopLessons } from "./oop";
import { interfacesAbstractionLessons } from "./interfaces-abstraction";
import { collectionsLinqLessons } from "./collections-linq";
import { testingXunitLessons } from "./testing-xunit";
import { asyncConcurrencyLessons } from "./async-concurrency";
import { projectStructureNugetLessons } from "./project-structure-nuget";
import { apisHttpLessons } from "./apis-http";
import { gitWorkflowLessons } from "./git-workflow";
import { standardLibraryLessons } from "./standard-library";
import { realWorldLessons } from "./real-world";
import { capstoneLessons } from "./capstone";

const lessonsByModule = [
  welcomeLessons,
  prerequisitesLessons,
  csharpFundamentalsLessons,
  thinkingInSystemsLessons,
  consoleApplicationsLessons,
  filesDataLessons,
  oopLessons,
  interfacesAbstractionLessons,
  collectionsLinqLessons,
  testingXunitLessons,
  asyncConcurrencyLessons,
  projectStructureNugetLessons,
  apisHttpLessons,
  gitWorkflowLessons,
  standardLibraryLessons,
  realWorldLessons,
  capstoneLessons,
];

const lessonMap = lessonsByModule.reduce((acc, lessonArray) => {
  for (const lesson of lessonArray) {
    if (lesson?.id) acc[lesson.id] = lesson;
  }
  return acc;
}, {});

export const lessons = curriculum.flatMap((module) =>
  module.lessonIds.map((id) => lessonMap[id]).filter(Boolean)
);

export { curriculum };
