import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import styles from "./nav.module.scss";
import { HiColorSwatch, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { IconContext } from "react-icons";

type Theme =
  | "rose-pine"
  | "catppuccin"
  | "kanagawa"
  | "gruvbox"
  | "nord"
  | "github";

const links = [
  { url: "/", linkText: "Home" },
  { url: "/design", linkText: "Design" },
  { url: "/engineering", linkText: "Engineering" },
  { url: "/about", linkText: "About" },
];

export function Nav() {
  const { theme, mode, setTheme, toggleMode } = useTheme();
  const themes: Theme[] = [
    "rose-pine",
    "catppuccin",
    "kanagawa",
    "gruvbox",
    "nord",
    "github",
  ];
  return (
    <div className={styles.container}>
      <nav>
        <ul style={{ display: "flex", gap: 16 }}>
          {links.map((link) => (
            <li>
              <Link to={link.url}>{link.linkText}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ display: "flex", gap: 16 }}>
        <label>
          <IconContext.Provider value={{ color: "var(--secondary)" }}>
            <HiColorSwatch />
          </IconContext.Provider>
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
          <IconContext.Provider value={{ color: "var(--primary)" }}>
            {mode === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}
