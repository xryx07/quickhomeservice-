
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Apply a darker transition effect
  useEffect(() => {
    document.documentElement.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    
    // Force reflow for better style application
    if (theme === 'dark') {
      document.body.classList.add('bg-[#121212]');
    } else {
      document.body.classList.remove('bg-[#121212]');
    }
    
    return () => {
      document.documentElement.style.transition = '';
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`h-9 w-9 rounded-full transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' 
          : 'bg-background border-primary/20 hover:bg-secondary/80'
      }`}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
