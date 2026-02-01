/**
 * Working with Python module — lessons live in parent folder (../) for now.
 * To move them here later: move each lesson-*.js into this folder and change imports to ./lesson-*.
 */
import { lessonHelloWorld } from "./lesson-hello-world";
import { lessonVariablesTypes } from "./lesson-variables-and-types";
import { lessonLists } from "./lesson-list";
import { lessonBasicOperators } from "./lesson-basic-operator";
import { lessonStringFormatting } from "./lesson-string-formatting";
import { lessonBasicStringOperations } from "./lesson-basic-string-operations";
import { lessonConditions } from "./lesson-conditions";
import { lessonLoops } from "./lesson-loops";
import { lessonFunctions } from "./lesson-functions";
import { lessonClassesAndObjects } from "./lesson-classes-and-objects";
import { lessonDictionaries } from "./lesson-dictionaries";
import { lessonModulesAndPackages } from "./lesson-modules-and-packages";
import { lessonInputAndOutput } from "./lesson-input-and-output";

export const workingWithPythonLessons = [
  lessonHelloWorld,
  lessonVariablesTypes,
  lessonLists,
  lessonBasicOperators,
  lessonStringFormatting,
  lessonBasicStringOperations,
  lessonConditions,
  lessonLoops,
  lessonFunctions,
  lessonClassesAndObjects,
  lessonDictionaries,
  lessonModulesAndPackages,
  lessonInputAndOutput,
];
