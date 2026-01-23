'use client';

import { useState } from 'react';
import TopBar from './components/TopBar';
import LessonPanel from './components/LessonPanel';
import CodeEditor from './components/CodeEditor';
import OutputPanel from './components/OutputPanel';
import { usePyodide } from './hooks/usePyodide';
import { useLessonRunner } from './hooks/useLessonRunner';
import { lessons } from './lessons';

export default function Home() {
  const { pyodide, loading: pyodideLoading, error: pyodideError } = usePyodide();

  // Lessons (index-based navigation)
  const [lessonIndex, setLessonIndex] = useState(0);
  const currentLesson = lessons[lessonIndex];

  // UI state
  const [mobileTab, setMobileTab] = useState('lesson');

  // Derived progress
  const progress = ((lessonIndex + 1) / lessons.length) * 100;
  const isLastLesson = lessonIndex === lessons.length - 1;

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

  const handleNext = () => {
    setLessonIndex((i) => Math.min(i + 1, lessons.length - 1));
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

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
        progress={progress}
        onNext={handleNext}
        // If your TopBar supports it, use this:
        // nextDisabled={isLastLesson}
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
              onRun={handleCheck}   // consider renaming button to "Check" if this runs tests
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
            />
          </div>
        </div>

        {/* Mobile Layout - Tabs */}
        <div className="lg:hidden flex flex-col w-full h-full">
          {/* Tab Navigation */}
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
                  onRun={handleCheck}
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
