'use client';

import CourseTocPage from '../../components/CourseTocPage';
import { curriculum, lessons } from './lessons';

export default function LearnCsharpTocPage() {
  return (
    <CourseTocPage
      title="Learn C#"
      shortTag="C#"
      tagBg="rgba(233,167,22,0.14)"
      tagColor="#8C6400"
      imageSrc="/Logo_C_sharp.svg"
      imageAlt="C sharp logo"
      curriculum={curriculum}
      lessons={lessons}
      lessonHrefBase="/courses/learn-csharp/lesson"
    />
  );
}
