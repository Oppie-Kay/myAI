"use client"; 

import { useTheme } from "./ThemeProvider"; // Adjust path if necessary
import { Moon, Sun } from "lucide-react"; // Install with: npm install lucide-react
import { useEffect } from "react";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  // 🔥 Debugging Log: Check if the component renders
  useEffect(() => {
    console.log("🚀 ThemeToggleButton is rendering! Current Theme:", theme);
  }, [theme]);

  return (
    <button
      onClick={() => {
        console.log("🛑 Button clicked!"); // 🔥 Debugging Clicks
        toggleTheme();
      }}
      className="p-3 rounded-lg bg-red-500 text-white dark:bg-green-500 border border-white"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      <span className="text-xs">Debug: {theme}</span> {/* 🔥 Debugging Theme State */}
    </button>
  );
};

export default ThemeToggleButton;
