'use client';

import CourseTocPage from '../../components/CourseTocPage';
import { curriculum, lessons } from './lessons';

export default function LearnJavaTocPage() {
  return (
    <CourseTocPage
      title="Learn Java"
      shortTag="java"
      tagBg="rgba(201,99,44,0.12)"
      tagColor="#A0400F"
      imageSrc="/java.svg"
      imageAlt="Java logo"
      curriculum={curriculum}
      lessons={lessons}
      lessonHrefBase="/courses/learn-java/lesson"
    />
  );
}
