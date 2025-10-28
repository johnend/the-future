import { useTheme } from "../../../../hooks/useTheme";
import { themeName } from "../../../../lib/themeHelpers";
import styles from "./controls.module.scss";
import cx from "classnames";
import type { Theme } from "../../../../context/ThemeContext";

type Props = { className?: string };

const Controls = ({ className }: Props) => {
  const { theme, setTheme, mode, toggleMode } = useTheme();
  const themes: Theme[] = ["rose-pine", "catppuccin", "kanagawa", "gruvbox"];

  return (
    <div className={cx(className, styles.controls)}>
      <ul>
        <li>
          <label>
            <i
              className="nf nf-fa-paint_roller"
              style={{
                color: "var(--text-magenta)",
              }}
            ></i>{" "}
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as Theme)}
              style={{
                marginLeft: 4,
                color: "var(--text-magenta)",
                appearance: "none",
              }}
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {themeName(t)}
                </option>
              ))}
            </select>
          </label>
        </li>
        <li className={styles.brightness} onClick={toggleMode}>
          {mode === "light" ? (
            <span className={styles.darkMode}>
              <i className="nf nf-md-white_balance_sunny"></i> Light
            </span>
          ) : (
            <span className={styles.darkMode}>
              <i className="nf nf-md-moon_waxing_crescent"></i> Dark
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Controls;
