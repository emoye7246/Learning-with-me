/**
 * Execute Python code and capture stdout + errors
 */
export async function runPython(pyodide, code) {
  try {
    // Set up stdout capture
    pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
`);

    // Run user code
    pyodide.runPython(code);

    // Get captured output
    const output = pyodide.runPython("sys.stdout.getvalue()");
    const error = pyodide.runPython("sys.stderr.getvalue()");
    
    return { 
      output: output || "", 
      error: error || null 
    };
  } catch (err) {
    return { 
      output: "", 
      error: err.message || String(err) 
    };
  }
}

/**
 * Run tests against user code
 * Assumes the function name is extracted from the lesson
 */
export async function runTests(pyodide, code, tests, functionName) {
  try {
    // Clear any previous state
    pyodide.runPython(`
import sys
sys.modules.pop('__main__', None)
`);

    // First, run the user's code to define the function
    pyodide.runPython(code);

    // Verify the function exists
    try {
      pyodide.runPython(`_ = ${functionName}`);
    } catch (err) {
      return {
        passed: false,
        passedCount: 0,
        totalCount: tests.length,
        error: `Function '${functionName}' is not defined. Make sure you've implemented the function correctly.`,
        testResults: []
      };
    }

    let passed = 0;
    const testResults = [];

    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      try {
        // Format inputs properly (handle strings, numbers, etc.)
        const inputStr = test.input.map(inp => 
          typeof inp === 'string' ? `"${inp}"` : String(inp)
        ).join(',');
        
        // Call the function with test inputs
        const result = pyodide.runPython(`${functionName}(${inputStr})`);
        
        const testPassed = result === test.expected;
        
        testResults.push({
          name: `Test ${i + 1}`,
          passed: testPassed,
          input: test.input,
          expected: test.expected,
          received: result,
          message: testPassed 
            ? `Passed: ${functionName}(${test.input.join(", ")}) = ${result}`
            : `Failed: Expected ${test.expected}, got ${result}`
        });

        if (!testPassed) {
          return {
            passed: false,
            passedCount: passed,
            totalCount: tests.length,
            failedTest: test,
            received: result,
            testResults
          };
        }
        passed++;
      } catch (err) {
        testResults.push({
          name: `Test ${i + 1}`,
          passed: false,
          input: test.input,
          expected: test.expected,
          received: null,
          message: `Error: ${err.message || String(err)}`
        });
        return {
          passed: false,
          passedCount: passed,
          totalCount: tests.length,
          error: err.message || String(err),
          testResults
        };
      }
    }

    return { 
      passed: true, 
      passedCount: passed,
      totalCount: tests.length,
      testResults
    };
  } catch (err) {
    return { 
      passed: false, 
      passedCount: 0,
      totalCount: tests.length,
      error: err.message || String(err),
      testResults: []
    };
  }
}

/**
 * Extract function name from lesson ID or code
 * For now, we'll use a simple heuristic or pass it explicitly
 */
export function extractFunctionName(lessonId, code) {
  // Try to extract from lesson ID (e.g., "functions-add" -> "add")
  if (lessonId.includes('-')) {
    const parts = lessonId.split('-');
    return parts[parts.length - 1];
  }
  
  // Try to extract from code (look for "def functionName")
  const match = code.match(/def\s+(\w+)\s*\(/);
  if (match) {
    return match[1];
  }
  
  return null;
}

