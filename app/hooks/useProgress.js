"use client";

import { useEffect, useMemo, useState } from "react";
import {
  loadProgress,
  incrementAttempt,
  markLessonCompleted,
  isLessonCompleted,
} from "@/lib/progressStore";

export function useProgress(lessons) {
  const [state, setState] = useState(loadProgress());

  useEffect(() => {
    setState(loadProgress());
  }, []);

  const completedCount = useMemo(() => {
    return Object.values(state.completed || {}).filter(Boolean).length;
  }, [state]);

  const totalLessons = lessons.length;
  const percent = totalLessons ? (completedCount / totalLessons) * 100 : 0;

  function attempt(lessonId) {
    setState((prev) => incrementAttempt(prev, lessonId));
  }

  function complete(lessonId) {
    setState((prev) => markLessonCompleted(prev, lessonId));
  }

  function completed(lessonId) {
    return isLessonCompleted(state, lessonId);
  }

  // Lock until previous lesson completed. Article-only lessons (hasChallenge === false) don't block.
  function isLocked(index) {
    if (index === 0) return false;
    const prev = lessons[index - 1];
    if (!prev?.id) return false;
    if (prev.hasChallenge === false) return false; // article-only: no completion required
    return !completed(prev.id);
  }

  return {
    state,
    completedCount,
    totalLessons,
    percent,
    attempt,
    complete,
    completed,
    isLocked,
  };
}
