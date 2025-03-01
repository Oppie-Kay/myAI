"use client"; // 🚨 Mark as Client Component

import { useTheme } from "../ThemeProvider"; // Adjust path if needed
import { Moon, Sun } from "lucide-react"; // Install with: npm install lucide-react

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition duration-300 bg-gray-200 dark:bg-gray-800"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-gray-900" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
