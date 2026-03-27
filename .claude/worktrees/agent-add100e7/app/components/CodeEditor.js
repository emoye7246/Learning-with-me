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

  const extensions = useMemo(() => {
    switch (language) {
      case 'python':
      default:
        return [python(), runKeymap];
    }
  }, [language, runKeymap]);

  const handleChange = (value) => {
    setLocalCode(value);
    onChange?.(value);
  };

  return (
    <div className="h-full flex flex-col bg-[#1A1A1A]">
      {/* Header */}
      <div className="px-4 py-2 border-b border-white/10 bg-[#242424]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#8BBCC9] uppercase tracking-wider">
              {language}
            </span>
            <span className="text-xs text-[#A89F8C]">editor</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden text-xs text-[#A89F8C] sm:block">
              ⌘↵ to run
            </span>

            {onReset && (
              <button
                onClick={onReset}
                className="px-3 py-1 text-xs font-medium text-[#A89F8C] hover:bg-white/10 rounded-md transition-colors"
                type="button"
              >
                Reset
              </button>
            )}

            <button
              onClick={onRun}
              disabled={isRunning}
              className="px-4 py-1.5 text-xs font-semibold bg-[#568A99] hover:bg-[#3D6878] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
            >
              {isRunning ? 'Running…' : 'Check ▶'}
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
          theme={oneDark}
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
