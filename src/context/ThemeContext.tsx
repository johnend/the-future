import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type Theme =
  | "rose-pine"
  | "catppuccin"
  | "kanagawa"
  | "gruvbox"
  | "nord"
  | "github";
export type Mode = "dark" | "light";

const STORAGE_KEY = "app-theme";

type ThemeContextType = {
  theme: Theme;
  mode: Mode;
  setTheme: (t: Theme) => void;
  toggleMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [{ theme, mode }, set] = useState<{ theme: Theme; mode: Mode }>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { theme: "rose-pine", mode: "light" };
    } catch {
      return { theme: "rose-pine", mode: "light" };
    }
  });

  useEffect(() => {
    document.documentElement.className = `theme-${theme}-${mode}`;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, mode }));
  }, [theme, mode]);

  const setTheme = (t: Theme) => set((prev) => ({ ...prev, theme: t }));
  const toggleMode = () =>
    set((prev) => ({
      ...prev,
      mode: prev.mode === "light" ? "dark" : "light",
    }));

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};
