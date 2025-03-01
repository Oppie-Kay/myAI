"use client"; 

import { useTheme } from "./ThemeProvider"; // Adjust path if necessary
import { Moon, Sun } from "lucide-react"; // Install with: npm install lucide-react
import { useEffect } from "react";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  // 🔥 Add Debugging Log to Check if the Component is Loaded
  useEffect(() => {
    console.log("🚀 ThemeToggleButton is rendering! Theme:", theme);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-lg bg-red-500 text-white dark:bg-green-500"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggleButton;
