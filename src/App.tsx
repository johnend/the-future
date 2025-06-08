import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/Index";
import Design from "./pages/Design";
import Engineering from "./pages/Engineering";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="design" element={<Design />} />
        <Route path="engineering" element={<Engineering />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
