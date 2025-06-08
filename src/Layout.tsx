import { Outlet } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import { Nav } from "./components/Nav";

type Theme = "rose-pine" | "catppuccin";

export default function Layout() {
  const { theme, mode, setTheme, toggleMode } = useTheme();
  const themes: Theme[] = ["rose-pine", "catppuccin"];

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "0.5rem",
        }}
      >
        <Nav />
        <label>
          Theme:
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
            style={{ marginLeft: 4 }}
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <button onClick={toggleMode}>
          {mode === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      {/* This is where your page components render */}
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
}
