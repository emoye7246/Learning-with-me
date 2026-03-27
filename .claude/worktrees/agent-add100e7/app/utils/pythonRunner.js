/**
 * Execute Python code and capture stdout + errors
 */
export async function runPython(pyodide, code) {
  try {
    pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
`);

    pyodide.runPython(code);

    const stdout = pyodide.runPython("sys.stdout.getvalue()");
    const stderr = pyodide.runPython("sys.stderr.getvalue()");

    return {
      output: stdout || "",
      stderr: stderr || "",
      error: null
    };
  } catch (err) {
    // Python exception during execution
    return {
      output: "",
      stderr: "",
      error: err?.message || String(err)
    };
  }
}


/**
 * Run tests against user code
 * Assumes the function name is extracted from the lesson
 */

function normalizePyResult(value) {
  // Pyodide returns primitives directly, but complex values can be PyProxy
  if (value && typeof value === "object" && typeof value.toJs === "function") {
    // Convert Python lists/dicts to JS
    return value.toJs({ dict_converter: Object.fromEntries });
  }
  return value;
}

function deepEqual(a, b) {
  // good enough for primitives/arrays/objects in lessons
  return JSON.stringify(a) === JSON.stringify(b);
}


export async function runTests(pyodide, code, tests, functionName) {
  const totalCount = tests?.length ?? 0;

  try {
    // Run user code (define the function)
    try {
      pyodide.runPython(code);
    } catch (err) {
      return {
        passed: false,
        passedCount: 0,
        totalCount,
        error: err?.message || String(err),
        testResults: []
      };
    }

    // Verify function exists + is callable
    const fn = pyodide.globals.get(functionName);
    if (!fn) {
      return {
        passed: false,
        passedCount: 0,
        totalCount,
        error: `Function '${functionName}' is not defined. Make sure you've implemented it.`,
        testResults: []
      };
    }

    // If it exists but isn't callable, fail clearly
    if (typeof fn.callKwargs !== "function" && typeof fn.call !== "function") {
      fn?.destroy?.();
      return {
        passed: false,
        passedCount: 0,
        totalCount,
        error: `'${functionName}' exists but is not callable. Did you overwrite it with a variable?`,
        testResults: []
      };
    }

    let passedCount = 0;
    const testResults = [];

    for (let i = 0; i < totalCount; i++) {
      const test = tests[i];
      const input = Array.isArray(test.input) ? test.input : [];
      const expected = test.expected;

      try {
        // Convert JS inputs -> Python values safely
        const pyArgs = input.map((v) => pyodide.toPy(v));

        // Call function in Python runtime
        const raw = fn(...pyArgs);

        // Clean up pyArgs (avoid memory leaks)
        for (const a of pyArgs) a?.destroy?.();

        const received = normalizePyResult(raw);
        raw?.destroy?.(); // if PyProxy

        // Compare values
        let testPassed = false;

        // Optional float tolerance support: { expected: 0.3, input:[...], tol: 1e-9 }
        if (typeof expected === "number" && typeof received === "number" && typeof test.tol === "number") {
          testPassed = Math.abs(received - expected) <= test.tol;
        } else {
          // For arrays/objects, deep compare; primitives strict compare
          if (typeof expected === "object" && expected !== null) {
            testPassed = deepEqual(received, expected);
          } else {
            testPassed = received === expected;
          }
        }

        testResults.push({
          name: `Test ${i + 1}`,
          passed: testPassed,
          input,
          expected,
          received,
          message: testPassed
            ? `Passed: ${functionName}(${input.map(String).join(", ")})`
            : `Failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(received)}`
        });

        if (!testPassed) {
          fn?.destroy?.();
          return {
            passed: false,
            passedCount,
            totalCount,
            failedTest: test,
            received,
            testResults
          };
        }

        passedCount++;
      } catch (err) {
        testResults.push({
          name: `Test ${i + 1}`,
          passed: false,
          input: test?.input ?? [],
          expected: test?.expected,
          received: null,
          message: `Error: ${err?.message || String(err)}`
        });

        fn?.destroy?.();
        return {
          passed: false,
          passedCount,
          totalCount,
          error: err?.message || String(err),
          testResults
        };
      }
    }

    fn?.destroy?.();
    return {
      passed: true,
      passedCount,
      totalCount,
      testResults
    };
  } catch (err) {
    return {
      passed: false,
      passedCount: 0,
      totalCount,
      error: err?.message || String(err),
      testResults: []
    };
  }
}

/**
 * Extract function name from lesson ID or code
 * For now, we'll use a simple heuristic or pass it explicitly
 */
export function extractFunctionName(lessonId, code) {
  const match = code.match(/def\s+(\w+)\s*\(/);
  if (match) return match[1];

  if (lessonId?.includes('-')) return lessonId.split('-').pop();
  return null;
}

