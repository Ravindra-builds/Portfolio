"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 text-gray-500 opacity-60"
      >
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="relative w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all hover:scale-105 active:scale-95 shadow-sm"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 rotate-0 transition-transform duration-300" />
      ) : (
        <Moon className="h-4 w-4 text-indigo-600 rotate-0 transition-transform duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
