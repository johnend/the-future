import type { Mode, Theme } from "../context/ThemeContext";

export const themeName = (theme: Theme): string | undefined => {
  switch (theme) {
    case "rose-pine":
      return "Rosé Pine";

    case "catppuccin":
      return "Catppuccin";

    case "kanagawa":
      return "Kanagawa";

    case "gruvbox":
      return "Gruvbox";
  }
};

export const themeBackground = (theme: Theme, mode: Mode) => {
  if (mode == "dark") {
    return `url(src/assets/images/webp_out/${theme}-dark.webp)`;
  } else {
    return `url(src/assets/images/webp_out/${theme}-light.webp)`;
  }
};
