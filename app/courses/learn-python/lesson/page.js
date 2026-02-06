'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import TopBar from '../../../components/TopBar';
import ArticleView from '../../../components/ArticleView';
import { useProgress } from '../../../hooks/useProgress';
import { lessons } from '../lessons';

function getInitialLessonIndex(searchParams, lessonsList) {
  const lessonId = searchParams?.get('lesson');
  if (!lessonId) return 0;
  const idx = lessonsList.findIndex((l) => l?.id === lessonId);
  return idx >= 0 ? idx : 0;
}

export default function LearnPythonLessonPage() {
  const searchParams = useSearchParams();
  const [lessonIndex, setLessonIndex] = useState(() =>
    getInitialLessonIndex(searchParams, lessons)
  );

  useEffect(() => {
    const idx = getInitialLessonIndex(searchParams, lessons);
    setLessonIndex(idx);
  }, [searchParams]);

  const currentLesson = lessons[lessonIndex];
  const { percent, complete, completed } = useProgress(lessons);
  const currentCompleted = completed(currentLesson.id);

  const handleNext = () => {
    setLessonIndex((i) => Math.min(i + 1, lessons.length - 1));
  };

  const handlePrevious = () => {
    setLessonIndex((i) => Math.max(i - 1, 0));
  };

  const handleComplete = () => {
    if (currentLesson?.id) complete(currentLesson.id);
  };

  const isLastLesson = lessonIndex === lessons.length - 1;
  const isFirstLesson = lessonIndex === 0;

  return (
    <div className="h-screen flex flex-col bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
      <div className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-2 flex items-center gap-4">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          ← Learning Center
        </Link>
        <span className="text-zinc-400 dark:text-zinc-500">/</span>
        <Link
          href="/courses/learn-python"
          className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          Learn Python
        </Link>
        <span className="text-zinc-400 dark:text-zinc-500">/</span>
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate max-w-[180px]">
          {currentLesson.title}
        </span>
      </div>

      <TopBar
        lessonTitle={currentLesson.title}
        progress={percent}
        mode="article"
        onPrev={handlePrevious}
        onNext={handleNext}
        canGoPrev={!isFirstLesson}
        canGoNext={!isLastLesson}
        isCompleted={currentCompleted}
        hasChallenge={false}
      />

      <ArticleView
        lesson={currentLesson}
        onComplete={handleComplete}
        isCompleted={currentCompleted}
        showCompleteButton={true}
      />
    </div>
  );
}
