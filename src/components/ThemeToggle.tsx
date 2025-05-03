
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      aria-label="Toggle dark mode" 
      onClick={toggleTheme} 
      pressed={theme === 'dark'}
      className="border-none focus:outline-none"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-300" />
      ) : (
        <Moon size={20} className="text-slate-700" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
}
