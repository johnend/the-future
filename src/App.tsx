// NOTE: Outlet might be needed here
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import Design from "./pages/Design";
import Engineering from "./pages/Engineering";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function NotFound() {
  return <h1>404: Page not found</h1>;
}

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="design" element={<Design />} />
        <Route path="engineering" element={<Engineering />} />
        <Route path="about" element={<About />} />
        {/* wildcard route for unmatched URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
