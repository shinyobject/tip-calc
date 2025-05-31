import React, { useEffect, useState } from 'react';
import TipCalculator from './components/TipCalculator';

type Theme = 'light' | 'dark';

function App() {
  const getPreferredTheme = (): Theme => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<Theme>(getPreferredTheme);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">SplitSmart</h1>
        <TipCalculator />
      </div>
      <footer className="mt-8 text-center text-sm">
        <button
          onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
          className="text-blue-500 underline"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </footer>
    </div>
  );
}

export default App;