import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      <Link to="/design" style={{ marginRight: "1rem" }}>
        Design
      </Link>
      <Link to="/engineering" style={{ marginRight: "1rem" }}>
        Engineering
      </Link>
      <Link to="/about" style={{ marginRight: "1rem" }}>
        About
      </Link>
    </nav>
  );
}
