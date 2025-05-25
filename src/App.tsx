// NOTE: Outlet might be needed here
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import Design from "./pages/Design";
import Engineering from "./pages/Engineering";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="design" element={<Design />} />
        <Route path="engineering" element={<Engineering />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
