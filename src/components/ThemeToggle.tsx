
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-nav-hover/10 hover:bg-nav-hover/20 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-nav-text hover:text-nav-text transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-nav-text hover:text-nav-text transition-colors" />
      )}
    </button>
  );
};

export default ThemeToggle;
