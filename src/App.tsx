// src/App.tsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LanguageSelection from './pages/LanguageSelection';
import Grid from './pages/Grid';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set initial theme based on OS preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listener for changes in OS theme preference
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleThemeChange);

    // Clean up the event listener on component unmount
    return () => darkModeMediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage isDarkMode={isDarkMode} />} />
      <Route
        path="/language-selection"
        element={<LanguageSelection isDarkMode={isDarkMode} />}
      />
      {/* Pass isDarkMode to Grid */}
      <Route path="/grid" element={<Grid isDarkMode={isDarkMode} />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default App;
