"use client";
import useMounted from "@/hooks/useMounted";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-end">
      {theme === "light" ? (
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className="focus:outline-none dark:hover:bg-gray-700 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white"
        >
          <Moon className="h-6 w-6" aria-hidden="true" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setTheme("light")}
          className="focus:outline-none dark:hover:bg-gray-700 p-2 rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
        >
          <Sun className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
