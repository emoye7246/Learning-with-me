'use client';

import { useState, useCallback } from 'react';
import { runPython, runTests, extractFunctionName } from '../utils/pythonRunner';

export function useLessonRunner(lesson, pyodide) {
  const [code, setCode] = useState(lesson?.starterCode || '');
  const [result, setResult] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');
  const [testResults, setTestResults] = useState([]);

  // Reset code when lesson changes
  const resetCode = useCallback(() => {
    if (lesson?.starterCode) {
      setCode(lesson.starterCode);
      setResult(null);
      setOutput('');
      setTestResults([]);
    }
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
      // Step 1: Execute code and capture output
      const execResult = await runPython(pyodide, code);
      
      if (execResult.error) {
        setResult({ 
          status: 'error', 
          message: execResult.error 
        });
        setOutput(execResult.output);
        setIsRunning(false);
        return;
      }

      setOutput(execResult.output);

      // Step 2: Run tests if they exist
      if (lesson.tests && lesson.tests.length > 0) {
        const functionName = extractFunctionName(lesson.id, code);
        
        if (!functionName) {
          setResult({ 
            status: 'error', 
            message: 'Could not determine function name. Make sure your function is properly defined.' 
          });
          setIsRunning(false);
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
              : `Test failed: Expected ${testResult.failedTest?.expected}, got ${testResult.received}`,
            passedCount: testResult.passedCount,
            totalCount: testResult.totalCount
          });
        }
      } else {
        // No tests, just show execution was successful
        setResult({ 
          status: 'success', 
          message: 'Code executed successfully!' 
        });
      }
    } catch (err) {
      setResult({ 
        status: 'error', 
        message: err.message || 'An unexpected error occurred' 
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


