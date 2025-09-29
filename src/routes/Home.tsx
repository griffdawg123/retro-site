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
      <h2 style={{ color: "#f5f5f5", fontSize: "2rem", fontFamily: "Archivo" }}>Technology Enthusiast</h2>
      <p
        style={{
          color: "#f5f5f5",
          fontSize: "1.2rem",
          fontFamily: "Archivo",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        Welcome to my personal website! Here you can find information about me, my projects, and my blog.
      </p>
      <div style={{ display: "flex", gap: "1rem", paddingTop: "2rem" }}>
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
