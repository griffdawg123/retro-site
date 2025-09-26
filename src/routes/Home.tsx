import { Link } from "@tanstack/react-router";
import { Button } from "@/components/retroui/Button";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "#f5f5f5", fontSize: "4rem", fontFamily: "Archivo Black" }}>Griffin Doyle</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/about">
          <Button variant="default">About</Button>
        </Link>
        <Link to="/projects">
          <Button variant="default">Projects</Button>
        </Link>
        <Link to="/blog">
          <Button variant="default">Blog</Button>
        </Link>
        <Link to="/contact">
          <Button variant="default">Contact</Button>
        </Link>
      </div>
    </div>
  );
}
