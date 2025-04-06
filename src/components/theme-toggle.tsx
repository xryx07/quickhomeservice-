
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // Force a reflow to ensure styles are applied
    document.documentElement.style.transition = 'background-color 0.3s ease';
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="h-9 w-9 rounded-full border-primary/20 bg-background hover:bg-secondary/80 transition-all"
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
