'use client';

import CourseTocPage from '../../components/CourseTocPage';
import { curriculum, lessons } from './lessons';

export default function LearnPythonTocPage() {
  return (
    <CourseTocPage
      title="Learn Python"
      shortTag="py"
      tagBg="rgba(86,138,153,0.15)"
      tagColor="#3D6878"
      imageSrc="/python.svg"
      imageAlt="Python logo"
      curriculum={curriculum}
      lessons={lessons}
      lessonHrefBase="/courses/learn-python/lesson"
    />
  );
}
