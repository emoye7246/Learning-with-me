'use client';

import { useEffect, useState } from "react";

export function usePyodide() {
  const [pyodide, setPyodide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        // Wait for Pyodide to be available
        let retries = 0;
        const maxRetries = 50; // 5 seconds max wait
        
        while (!window.loadPyodide && retries < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 100));
          retries++;
        }

        if (!window.loadPyodide) {
          throw new Error('Pyodide failed to load. Please refresh the page.');
        }

        const pyodideInstance = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
        });
        
        setPyodide(pyodideInstance);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error('Failed to load Pyodide:', err);
      }
    }

    load();
  }, []);

  return { pyodide, loading, error };
}

