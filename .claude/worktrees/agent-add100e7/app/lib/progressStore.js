const KEY = "py_studio_progress_v1";

const defaultState = {
  completed: {},          // { [lessonId]: true }
  attempts: {},           // { [lessonId]: number }
  lastLessonId: null,
  updatedAt: null,
};

export function loadProgress() {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : defaultState;
  } catch {
    return defaultState;
  }
}

export function saveProgress(state) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify({ ...state, updatedAt: Date.now() }));
}

export function isLessonCompleted(state, lessonId) {
  return !!state.completed?.[lessonId];
}

export function incrementAttempt(state, lessonId) {
  const next = {
    ...state,
    attempts: {
      ...state.attempts,
      [lessonId]: (state.attempts?.[lessonId] || 0) + 1,
    },
    lastLessonId: lessonId,
  };
  saveProgress(next);
  return next;
}

export function markLessonCompleted(state, lessonId) {
  const next = {
    ...state,
    completed: { ...state.completed, [lessonId]: true },
    lastLessonId: lessonId,
  };
  saveProgress(next);
  return next;
}
