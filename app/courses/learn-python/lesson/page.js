'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import TopBar from '../../../components/TopBar';
import LessonPanel from '../../../components/LessonPanel';
import CodeEditor from '../../../components/CodeEditor';
import OutputPanel from '../../../components/OutputPanel';
import ArticleView from '../../../components/ArticleView';
import { usePyodide } from '../../../hooks/usePyodide';
import { useLessonRunner } from '../../../hooks/useLessonRunner';
import { useProgress } from '../../../hooks/useProgress';
import { lessons } from '../lessons';
import SuccessDialog from '../../../components/SuccessDialog';
import { lessonHasChallenge } from '../../../components/ArticleView';

function getInitialLessonIndex(searchParams, lessonsList) {
  const lessonId = searchParams?.get('lesson');
  if (!lessonId) return 0;
  const idx = lessonsList.findIndex((l) => l?.id === lessonId);
  return idx >= 0 ? idx : 0;
}

export default function LearnPythonLessonPage() {
  const searchParams = useSearchParams();
  const { pyodide, loading: pyodideLoading, error: pyodideError } = usePyodide();

  const [lessonIndex, setLessonIndex] = useState(() =>
    getInitialLessonIndex(searchParams, lessons)
  );

  // Sync lesson index when URL changes (e.g. user navigates from ToC to another lesson)
  useEffect(() => {
    const idx = getInitialLessonIndex(searchParams, lessons);
    setLessonIndex(idx);
  }, [searchParams]);

  const currentLesson = lessons[lessonIndex];
  const hasChallenge = lessonHasChallenge(currentLesson);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const [mode, setMode] = useState('article');
  const [mobileTab, setMobileTab] = useState('lesson');
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);
  const prevCompletedRef = useRef(false);

  const { percent, complete, completed, isLocked } = useProgress(lessons);

  const currentCompleted = completed(currentLesson.id);
  const locked = isLocked(lessonIndex);

  useEffect(() => {
    if (currentCompleted && !prevCompletedRef.current) {
      setShowCompletionDialog(true);
    }
    prevCompletedRef.current = currentCompleted;
  }, [currentCompleted]);

  useEffect(() => {
    setShowCompletionDialog(false);
    prevCompletedRef.current = completed(currentLesson.id);
  }, [lessonIndex, currentLesson.id, completed]);

  const {
    code,
    setCode,
    handleCheck,
    result,
    isRunning,
    output,
    testResults,
    resetCode,
  } = useLessonRunner(currentLesson, pyodide);

  useEffect(() => {
    setMode('article');
    setMobileTab('lesson');
    resetCode();
  }, [lessonIndex, resetCode]);

  const handleCheckWithTracking = async () => {
    const res = await handleCheck();
    const didPass =
      res?.status === 'success' &&
      typeof res.passedCount === 'number' &&
      typeof res.totalCount === 'number' &&
      res.passedCount === res.totalCount;

    if (didPass) {
      complete(currentLesson.id);
      if (!currentCompleted) setShowSuccessDialog(true);
    }
    return res;
  };

  const handleNext = () => {
    setShowCompletionDialog(false);
    if (!hasChallenge && currentLesson?.id) {
      complete(currentLesson.id);
    }
    setLessonIndex((i) => Math.min(i + 1, lessons.length - 1));
  };

  const handlePrevious = () => {
    setShowCompletionDialog(false);
    setLessonIndex((i) => Math.max(i - 1, 0));
  };

  const handleStartChallenge = () => {
    setMode('challenge');
  };

  const handleBackToArticle = () => {
    setMode('article');
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const isLastLesson = lessonIndex === lessons.length - 1;
  const isFirstLesson = lessonIndex === 0;

  if (pyodideLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-zinc-600 dark:text-zinc-400">Loading Python runtime...</p>
        </div>
      </div>
    );
  }

  if (pyodideError) {
    return (
      <div className="h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-950">
        <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-800 dark:text-red-200 font-semibold mb-2">
            Failed to load Python runtime
          </p>
          <p className="text-red-600 dark:text-red-400 text-sm">{pyodideError}</p>
          <p className="text-red-600 dark:text-red-400 text-sm mt-2">
            Please refresh the page to try again.
          </p>
        </div>
      </div>
    );
  }

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
        mode={mode}
        onPrev={handlePrevious}
        onNext={handleNext}
        onStartChallenge={hasChallenge ? handleStartChallenge : undefined}
        onBackToArticle={handleBackToArticle}
        canGoPrev={!isFirstLesson}
        canGoNext={!isLastLesson}
        isCompleted={currentCompleted}
        hasChallenge={hasChallenge}
      />

      <SuccessDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
        title="Lesson Completed 🎉"
        description={
          currentLesson.successMessage || 'Nice work! You passed all tests.'
        }
        onNext={handleNext}
      />

      {mode === 'article' || !hasChallenge ? (
        <ArticleView
          lesson={currentLesson}
          onStart={hasChallenge ? () => setMode('challenge') : undefined}
          hasChallenge={hasChallenge}
        />
      ) : (
        <div className="flex-1 flex overflow-hidden">
          <div className="hidden lg:flex flex-1 w-full">
            <div className="w-1/3 border-r border-zinc-200 dark:border-zinc-800">
              <div className="h-full flex flex-col">
                <div className="px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <button
                    onClick={() => setMode('article')}
                    className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    type="button"
                  >
                    ← Back to Article
                  </button>
                </div>
                <div className="flex-1 overflow-hidden">
                  <LessonPanel lesson={currentLesson} />
                </div>
              </div>
            </div>

            <div className="w-1/3 border-r border-zinc-200 dark:border-zinc-800">
              <CodeEditor
                code={code}
                onChange={handleCodeChange}
                language="python"
                onRun={handleCheckWithTracking}
                isRunning={isRunning}
                onReset={resetCode}
              />
            </div>

            <div className="w-1/3">
              <OutputPanel
                output={output}
                tests={testResults}
                result={result}
                completed={currentCompleted}
                onNext={handleNext}
                canGoNext={currentCompleted && !isLastLesson}
              />
            </div>
          </div>

          <div className="lg:hidden flex flex-col w-full h-full">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-2">
              <button
                onClick={() => setMode('article')}
                className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                type="button"
              >
                ← Article
              </button>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Challenge Mode
              </div>
            </div>

            <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <button
                onClick={() => setMobileTab('lesson')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  mobileTab === 'lesson'
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
                type="button"
              >
                Lesson
              </button>
              <button
                onClick={() => setMobileTab('code')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  mobileTab === 'code'
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
                type="button"
              >
                Code
              </button>
              <button
                onClick={() => setMobileTab('output')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  mobileTab === 'output'
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
                type="button"
              >
                Output
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              {mobileTab === 'lesson' && (
                <div className="h-full">
                  <LessonPanel lesson={currentLesson} />
                </div>
              )}
              {mobileTab === 'code' && (
                <div className="h-full">
                  <CodeEditor
                    code={code}
                    onChange={handleCodeChange}
                    language="python"
                    onRun={handleCheckWithTracking}
                    isRunning={isRunning}
                    onReset={resetCode}
                  />
                </div>
              )}
              {mobileTab === 'output' && (
                <div className="h-full">
                  <OutputPanel
                    output={output}
                    tests={testResults}
                    result={result}
                    completed={currentCompleted}
                    onNext={handleNext}
                    canGoNext={currentCompleted && !isLastLesson}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
