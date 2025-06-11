import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";

export default function Layout() {
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
      </div>

      {/* This is where your page components render */}
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
}
