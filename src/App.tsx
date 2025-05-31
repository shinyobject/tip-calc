import React from 'react';
import TipCalculator from './components/TipCalculator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">SplitSmart</h1>
        <TipCalculator />
      </div>
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} SplitSmart</p>
      </footer>
    </div>
  );
}

export default App;