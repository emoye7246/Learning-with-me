import { lessonWhyCollections } from "./lesson-why-collections";
import { lessonListAndLinkedlist } from "./lesson-list-and-linkedlist";
import { lessonDictionary } from "./lesson-dictionary";
import { lessonHashsetSortedset } from "./lesson-hashset-sortedset";
import { lessonQueueAndStack } from "./lesson-queue-and-stack";
import { lessonIteratingCollections } from "./lesson-iterating-collections";
import { lessonGenerics } from "./lesson-generics";
import { lessonIenumerableIcomparable } from "./lesson-ienumerable-icomparable";
import { lessonIntroToLinq } from "./lesson-intro-to-linq";
import { lessonLinqFilteringProjectingAggregating } from "./lesson-linq-filtering-projecting-aggregating";
import { lessonChoosingRightCollection } from "./lesson-choosing-right-collection";
import { lessonMiniProjectWordFrequency } from "./lesson-mini-project-word-frequency";
import { createPlaceholderLesson } from "../placeholder";

const lessonMiniProjectStudentRoster = createPlaceholderLesson({
  id: "mini-project-student-roster-cs",
  title: "Mini-Project: Student Roster with Sorting & Filtering",
  moduleTitle: "Collections, LINQ & Generics",
});

const lessonMiniProjectGenericStack = createPlaceholderLesson({
  id: "mini-project-generic-stack-cs",
  title: "Mini-Project: Generic Stack Implementation",
  moduleTitle: "Collections, LINQ & Generics",
});

const lessonMiniProjectLinqPipeline = createPlaceholderLesson({
  id: "mini-project-linq-pipeline",
  title: "Mini-Project: LINQ Data Pipeline Challenge",
  moduleTitle: "Collections, LINQ & Generics",
});

export const collectionsLinqLessons = [
  lessonWhyCollections,
  lessonListAndLinkedlist,
  lessonDictionary,
  lessonHashsetSortedset,
  lessonQueueAndStack,
  lessonIteratingCollections,
  lessonGenerics,
  lessonIenumerableIcomparable,
  lessonIntroToLinq,
  lessonLinqFilteringProjectingAggregating,
  lessonChoosingRightCollection,
  lessonMiniProjectWordFrequency,
  lessonMiniProjectStudentRoster,
  lessonMiniProjectGenericStack,
  lessonMiniProjectLinqPipeline,
];
