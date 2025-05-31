// Apply theme as early as possible
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
});

// THEN import your app and render
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);