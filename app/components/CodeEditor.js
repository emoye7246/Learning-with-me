'use client';

import { useEffect, useMemo, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { keymap } from '@uiw/react-codemirror';

export default function CodeEditor({
  code,
  onChange,
  language = 'python',
  onRun,
  isRunning,
  onReset,

}) {
  const [localCode, setLocalCode] = useState(code || '');

  useEffect(() => {
    setLocalCode(code || '');
  }, [code]);

  const runKeymap = useMemo(
    () =>
      keymap.of([
        {
          key: 'Mod-Enter',
          run: () => {
            if (!isRunning) onRun?.();
            return true;
          },
        },
      ]),
    [onRun, isRunning]
  );

  // Pick language extensions (easy to expand later)
  const extensions = useMemo(() => {
    switch (language) {
      case 'python':
      default:
        return [python(), runKeymap];
    }
  }, [language]);





  const handleChange = (value) => {
    setLocalCode(value);
    onChange?.(value);
  };

  return (
    <div className="h-full flex flex-col bg-zinc-50 dark:bg-[#282c34]">
      {/* Header */}
      <div className="px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
              {language}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-500">
              Code Editor
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onReset && (
              <button
                onClick={onReset}
                className="px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors"
                type="button"
              >
                Reset
              </button>
            )}

            <button
              onClick={onRun}
              disabled={isRunning}
              className="px-4 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
            >
              {isRunning ? 'Running...' : 'Check'}
            </button>
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 min-h-0 scrollable">
        <CodeMirror
          value={localCode}
          height="100%"
          extensions={extensions}
          theme={oneDark} // looks good in both; if you want true light/dark switching, see note below
          onChange={handleChange}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLine: true,
            foldGutter: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
          }}
        />
      </div>
    </div>
  );
}
