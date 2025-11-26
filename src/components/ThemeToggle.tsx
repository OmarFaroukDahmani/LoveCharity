"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const changeTheme = () => {
    if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
    }
  };

  if (!mounted) {
    return <div className={cn("h-10 w-10", className)} />;
  }

  return (
    <button
      onClick={changeTheme}
      className={cn(
        "flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300",
        // Using semantic border-input and bg-background
        "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        "shadow-sm hover:shadow-md", 
        className
      )}
      aria-label="Toggle theme"
    >
        {isDarkMode ? (
          <SunDim className="h-5 w-5 text-orange-300 transition-transform hover:rotate-90" />
        ) : (
          <Moon className="h-5 w-5 text-primary transition-transform hover:-rotate-12" />
        )}
    </button>
  );
};