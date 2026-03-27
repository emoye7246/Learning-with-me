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
      const errorObj = {
        status: 'error',
        message: 'Python runtime not ready. Please wait...'
      };
      setResult(errorObj);
      return errorObj;
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
        const errorObj = {
          status: 'error',
          message: execResult.error
        };
        setResult(errorObj);
        return errorObj;
      }

      // Step 2: Run tests if they exist
      if (lesson.tests && lesson.tests.length > 0) {
        if (lessonType === 'function') {
          const functionName = lesson.entry || extractFunctionName(lesson.id, code);

          if (!functionName) {
            const errorObj = {
              status: 'error',
              message:
                'Could not determine function name. Add lesson.entry (recommended) or ensure your function is properly defined.'
            };
            setResult(errorObj);
            return errorObj;
          }

          const testResult = await runTests(pyodide, code, lesson.tests, functionName);
          setTestResults(testResult.testResults || []);

          if (testResult.passed) {
            const successObj = {
              status: 'success',
              message: lesson.successMessage || 'All tests passed! 🎉',
              passedCount: testResult.passedCount,
              totalCount: testResult.totalCount
            };
            setResult(successObj);
            return successObj;
          } else {
            const failObj = {
              status: 'fail',
              message: testResult.error
                ? `Test error: ${testResult.error}`
                : `Test failed: Expected ${JSON.stringify(testResult.failedTest?.expected)}, got ${JSON.stringify(testResult.received)}`,
              passedCount: testResult.passedCount,
              totalCount: testResult.totalCount
            };
            setResult(failObj);
            return failObj;
          }
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

          const resultObj = {
            status: passed ? 'success' : 'fail',
            message: passed
              ? (lesson.successMessage || 'Output matched! 🎉')
              : `Expected output:\n${expected}\n\nGot:\n${received}`,
            passedCount: passed ? 1 : 0,
            totalCount: 1
          };
          setResult(resultObj);
          return resultObj;
        }
      }

      // No tests, just show execution was successful
      const successObj = {
        status: 'success',
        message: 'Code executed successfully!',
        passedCount: 0,
        totalCount: 0
      };
      setResult(successObj);
      return successObj;
    } catch (err) {
      const errorObj = {
        status: 'error',
        message: err?.message || 'An unexpected error occurred'
      };
      setResult(errorObj);
      return errorObj;
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
