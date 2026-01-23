'use client';

import { useState, useCallback, useEffect } from 'react';
import { runPython, runTests, extractFunctionName } from '../utils/pythonRunner';

export function useLessonRunner(lesson, pyodide) {
  const [code, setCode] = useState(lesson?.starterCode || '');
  const [result, setResult] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');
  const [testResults, setTestResults] = useState([]);

  // ✅ update editor when lesson changes
  useEffect(() => {
    setCode(lesson?.starterCode || '');
    setResult(null);
    setOutput('');
    setTestResults([]);
  }, [lesson]);

  const resetCode = useCallback(() => {
    setCode(lesson?.starterCode || '');
    setResult(null);
    setOutput('');
    setTestResults([]);
  }, [lesson]);

  const handleCheck = useCallback(async () => {
    if (!pyodide || !lesson) {
      setResult({
        status: 'error',
        message: 'Python runtime not ready. Please wait...'
      });
      return;
    }

    setIsRunning(true);
    setResult(null);
    setOutput('');
    setTestResults([]);

    try {
      // ✅ Determine lesson type (default to function)
      const lessonType = lesson.type || 'function';

      // Step 1: Execute code and capture output (for Output panel)
      const execResult = await runPython(pyodide, code);

      setOutput(execResult.output || '');

      if (execResult.error) {
        setResult({
          status: 'error',
          message: execResult.error
        });
        return;
      }

      // Step 2: Run tests if they exist
      if (lesson.tests && lesson.tests.length > 0) {
        if (lessonType === 'function') {
          const functionName = lesson.entry || extractFunctionName(lesson.id, code);

          if (!functionName) {
            setResult({
              status: 'error',
              message:
                'Could not determine function name. Add lesson.entry (recommended) or ensure your function is properly defined.'
            });
            return;
          }

          const testResult = await runTests(pyodide, code, lesson.tests, functionName);
          setTestResults(testResult.testResults || []);

          if (testResult.passed) {
            setResult({
              status: 'success',
              message: lesson.successMessage || 'All tests passed! 🎉',
              passedCount: testResult.passedCount,
              totalCount: testResult.totalCount
            });
          } else {
            setResult({
              status: 'fail',
              message: testResult.error
                ? `Test error: ${testResult.error}`
                : `Test failed: Expected ${JSON.stringify(testResult.failedTest?.expected)}, got ${JSON.stringify(testResult.received)}`,
              passedCount: testResult.passedCount,
              totalCount: testResult.totalCount
            });
          }

          return;
        }

        if (lessonType === 'stdout') {
          // ✅ Basic stdout checking (MVP)
          // Expect lesson.tests like: [{ expectedOutput: "Hello, world!\n" }]
          const expected = lesson.tests?.[0]?.expectedOutput ?? '';
          const received = (execResult.output || '').replace(/\r\n/g, '\n');

          const normalize = (s) => s.trimEnd(); // ignore trailing whitespace/newline differences
          const passed = normalize(received) === normalize(expected);

          setTestResults([
            {
              name: 'Output Check',
              passed,
              expected,
              received,
              message: passed ? 'Passed output check' : 'Output did not match expected'
            }
          ]);

          setResult({
            status: passed ? 'success' : 'fail',
            message: passed
              ? (lesson.successMessage || 'Output matched! 🎉')
              : `Expected output:\n${expected}\n\nGot:\n${received}`
          });

          return;
        }
      }

      // No tests, just show execution was successful
      setResult({
        status: 'success',
        message: 'Code executed successfully!'
      });
    } catch (err) {
      setResult({
        status: 'error',
        message: err?.message || 'An unexpected error occurred'
      });
    } finally {
      setIsRunning(false);
    }
  }, [pyodide, lesson, code]);

  return {
    code,
    setCode,
    handleCheck,
    result,
    isRunning,
    output,
    testResults,
    resetCode
  };
}
