import { Outlet } from "react-router-dom";
import Bar from "./components/Bar/Bar";
import { useTheme } from "./hooks/useTheme";
import React from "react";
import { themeBackground } from "./lib/themeHelpers";

export default function Layout() {
  const { theme, mode } = useTheme();
  const mainStyle = React.useMemo(
    () => ({
      padding: "1rem",
      backgroundImage: themeBackground(theme, mode),
      backgroundSize: "cover",
      height: "100vh",
      paddingTop: 48,
    }),
    [theme, mode],
  );
  return (
    <>
      <Bar />
      <main style={mainStyle} key={mode}>
        <Outlet />
      </main>
    </>
  );
}
