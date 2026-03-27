import { lessonWhyAsync } from "./lesson-why-async";
import { lessonTasksCs } from "./lesson-tasks";
import { lessonAsyncAndAwait } from "./lesson-async-and-await";
import { lessonRaceConditionsCs } from "./lesson-race-conditions";
import { lessonConfigureAwait } from "./lesson-configure-await";
import { lessonTaskWhenAllWhenAny } from "./lesson-task-when-all-when-any";
import { lessonCancellationToken } from "./lesson-cancellation-token";
import { lessonThreadSafeCollectionsCs } from "./lesson-thread-safe-collections";
import { lessonMiniProjectAsyncFileProcessor } from "./lesson-mini-project-async-file-processor";
import { createPlaceholderLesson } from "../placeholder";

const lessonMiniProjectParallelApiCaller = createPlaceholderLesson({
  id: "mini-project-parallel-api-caller",
  title: "Mini-Project: Parallel API Caller",
  moduleTitle: "Async, Tasks & Concurrency",
});

export const asyncConcurrencyLessons = [
  lessonWhyAsync,
  lessonTasksCs,
  lessonAsyncAndAwait,
  lessonRaceConditionsCs,
  lessonConfigureAwait,
  lessonTaskWhenAllWhenAny,
  lessonCancellationToken,
  lessonThreadSafeCollectionsCs,
  lessonMiniProjectAsyncFileProcessor,
  lessonMiniProjectParallelApiCaller,
];
