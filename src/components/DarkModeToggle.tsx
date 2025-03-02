import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

const DarkModeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <Button
        className="cursor-pointer"
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
    </>
  );
};

export default DarkModeToggle;
