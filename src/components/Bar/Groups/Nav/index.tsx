import { Switch } from "radix-ui";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import styles from "./nav.module.scss";
import { MagicWandIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

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
  const { theme, setTheme, toggleMode } = useTheme();
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
          <MagicWandIcon className={styles.magicWandIcon} />
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

        <form>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div title="Light Mode">
              <MoonIcon className={styles.moonIcon} />
            </div>
            <Switch.Root
              className={styles.SwitchRoot}
              id="dark-mode"
              onCheckedChange={toggleMode}
            >
              <Switch.Thumb className={styles.SwitchThumb} />
            </Switch.Root>
            <div title="Dark Mode">
              <SunIcon className={styles.sunIcon} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
