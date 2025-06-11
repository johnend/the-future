import { useState, useEffect } from "react";

type Theme =
  | "rose-pine"
  | "catppuccin"
  | "kanagawa"
  | "gruvbox"
  | "nord"
  | "github";
type Mode = "dark" | "light";

const STORAGE_KEY = "app-theme";

export const useTheme = () => {
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

  return { theme, mode, setTheme, toggleMode };
};
