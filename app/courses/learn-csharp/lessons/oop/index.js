import { lessonWhyOop } from "./lesson-why-oop";
import { lessonClassesInstancesConstructors } from "./lesson-classes-instances-constructors";
import { lessonFieldsPropertiesAutoProperties } from "./lesson-fields-properties-auto-properties";
import { lessonMethodsAndThis } from "./lesson-methods-and-this";
import { lessonAccessModifiers } from "./lesson-access-modifiers";
import { lessonStaticKeyword } from "./lesson-static-keyword";
import { lessonObjectInitializersNamedArgs } from "./lesson-object-initializers-named-args";
import { lessonToStringEqualsGetHashCode } from "./lesson-tostring-equals-gethashcode";
import { lessonWhenNotToUseOop } from "./lesson-when-not-to-use-oop";
import { lessonMiniProjectRefactorTodoCli } from "./lesson-mini-project-refactor-todo-cli";
import { lessonMiniProjectLibraryCatalogue } from "./lesson-mini-project-library-catalogue";
import { createPlaceholderLesson } from "../placeholder";

const lessonMiniProjectBankAccount = createPlaceholderLesson({
  id: "mini-project-bank-account-cs",
  title: "Mini-Project: Bank Account Simulator",
  moduleTitle: "Object-Oriented Programming (Foundations)",
});

export const oopLessons = [
  lessonWhyOop,
  lessonClassesInstancesConstructors,
  lessonFieldsPropertiesAutoProperties,
  lessonMethodsAndThis,
  lessonAccessModifiers,
  lessonStaticKeyword,
  lessonObjectInitializersNamedArgs,
  lessonToStringEqualsGetHashCode,
  lessonWhenNotToUseOop,
  lessonMiniProjectRefactorTodoCli,
  lessonMiniProjectLibraryCatalogue,
  lessonMiniProjectBankAccount,
];
