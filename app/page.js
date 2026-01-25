'use client';

import { useState, useEffect, useRef } from 'react';
import TopBar from './components/TopBar';
import LessonPanel from './components/LessonPanel';
import CodeEditor from './components/CodeEditor';
import OutputPanel from './components/OutputPanel';
import { usePyodide } from './hooks/usePyodide';
import { useLessonRunner } from './hooks/useLessonRunner';
import { useProgress } from './hooks/useProgress';
import { lessons } from './lessons';
import SuccessDialog from './components/SuccessDialog';

export default function Home() {
  const { pyodide, loading: pyodideLoading, error: pyodideError } = usePyodide();

  // Lessons (index-based navigation)
  const [lessonIndex, setLessonIndex] = useState(0);
  const currentLesson = lessons[lessonIndex];
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // UI state
  const [mobileTab, setMobileTab] = useState('lesson');
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);
  const prevCompletedRef = useRef(false);

  // Progress tracking
  const {
    percent,
    attempt,
    complete,
    completed,
    isLocked,
  } = useProgress(lessons);

  const currentCompleted = completed(currentLesson.id);
  const locked = isLocked(lessonIndex);

  // Show dialog when lesson completion changes from false to true
  useEffect(() => {
    if (currentCompleted && !prevCompletedRef.current) {
      setShowCompletionDialog(true);
    }
    prevCompletedRef.current = currentCompleted;
  }, [currentCompleted]);

  // Reset dialog state when lesson changes
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
    resetCode
  } = useLessonRunner(currentLesson, pyodide);

  const handleCheckWithTracking = async () => {
    // attempt(currentLesson.id); // if you're tracking attempts

    const res = await handleCheck(); // or runner.handleCheck()

    const didPass =
      res?.status === "success" &&
      typeof res.passedCount === "number" &&
      typeof res.totalCount === "number" &&
      res.passedCount === res.totalCount;

      if (didPass) {
        // ✅ mark completion FIRST (this updates progress)
        complete(currentLesson.id);
    
        // ✅ open dialog only first time completed
        if (!currentCompleted) setShowSuccessDialog(true);
      }

    return res;
  };


  const handleNext = () => {
    // Locking behavior (optional)
    // if (!currentCompleted) return;

    setShowCompletionDialog(false);
    setLessonIndex((i) => Math.min(i + 1, lessons.length - 1));
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const isLastLesson = lessonIndex === lessons.length - 1;

  // Show loading state while Pyodide loads
  if (pyodideLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-zinc-600 dark:text-zinc-400">Loading Python runtime...</p>
        </div>
      </div>
    );
  }

  // Show error state if Pyodide fails to load
  if (pyodideError) {
    return (
      <div className="h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-950">
        <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-800 dark:text-red-200 font-semibold mb-2">Failed to load Python runtime</p>
          <p className="text-red-600 dark:text-red-400 text-sm">{pyodideError}</p>
          <p className="text-red-600 dark:text-red-400 text-sm mt-2">Please refresh the page to try again.</p>
        </div>
      </div>
    );
  }



  return (
    <div className="h-screen flex flex-col bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
      {/* Top Bar */}
      <TopBar
        lessonTitle={currentLesson.title}
        progress={percent}
        onNext={handleNext}
        isCompleted={currentCompleted}
      // nextDisabled={!currentCompleted || isLastLesson}
      />

      {/* Completion Dialog */}
      <SuccessDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
        title="Lesson Completed 🎉"
        description={currentLesson.successMessage || "Nice work! You passed all tests."}
        onNext={handleNext}
      />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-1 w-full">
          {/* Left Panel - Lesson Content */}
          <div className="w-1/3 border-r border-zinc-200 dark:border-zinc-800">
            <LessonPanel lesson={currentLesson} />
          </div>

          {/* Center Panel - Code Editor */}
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

          {/* Right Panel - Output/Tests/Results */}
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

        {/* Mobile Layout - Tabs */}
        <div className="lg:hidden flex flex-col w-full h-full">
          {/* Tab Navigation */}
          <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <button
              onClick={() => setMobileTab('lesson')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${mobileTab === 'lesson'
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              type="button"
            >
              Lesson
            </button>

            <button
              onClick={() => setMobileTab('code')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${mobileTab === 'code'
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              type="button"
            >
              Code
            </button>

            <button
              onClick={() => setMobileTab('output')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${mobileTab === 'output'
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              type="button"
            >
              Output
            </button>
          </div>

          {/* Tab Content */}
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

          {/* Optional: show "Next lesson" button in mobile output tab */}
          {/* {!isLastLesson && mobileTab === 'output' && (
            <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <button
                onClick={handleNext}
                className="w-full px-4 py-2 rounded bg-blue-600 text-white font-medium disabled:opacity-50"
                type="button"
              >
                Next Lesson
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
