import { Link } from "@tanstack/react-router";
import { Card } from "@/components/retroui/Card";
import headshot from "@/static/headshot.jpg";

export default function About() {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "2rem",
        }}
      >
        <Card
          className="bg-card"
          style={{
            width: "clamp(300px, 80%, 1200px)",
          }}
        >
          <Card.Header>
            <Card.Title
              className="text-2xl font-bold text-center text-card-foreground"
              style={{ fontFamily: "Archivo Black" }}
            >
              ABOUT ME
            </Card.Title>
          </Card.Header>
          <Card.Content className="text-card-foreground" style={{ fontFamily: "Space Grotesk, sans-serif", lineHeight: 1.75 }}>
            <img
              src={headshot}
              alt="Griffin Doyle"
              style={{
                float: "right",
                marginLeft: "1.25rem",
                marginBottom: "1rem",
                width: "clamp(150px, 30%, 200px)",
                objectFit: "cover",
                objectPosition: "top",
              }}
              className="rounded"
            />
            <p>
              I'm Griffin — a software engineer based in Sydney. I graduated from UNSW in 2024 with a double degree in Software Engineering and Physics, and I'm currently a technology graduate at Westpac Bank.
            </p>
            <br />
            <p>
              My first rotation was in consumer banking, where I worked on the internal CRM. I was involved in designing a branch manager view for tracking proactive sales leads — a deceptively tricky problem involving complex lead-to-banker relationship filtering across multiple tabs. It was a good introduction to enterprise-scale engineering and the role of solution designers in the development lifecycle.
            </p>
            <br />
            <p>
              I'm now in the in-house hosting team, where we use Red Hat products to run automation and container workloads for other teams across the business. It's deepened my understanding of networking, infrastructure, and DevOps considerably.
            </p>
            <br />
            <p>
              Outside work I'm building a homelab, working on a HTTP proxy and mocking TUI, and cooking. I write about all of it on my{" "}
              <Link to="/blog" style={{ color: "var(--primary)" }} className="hover:text-accent-foreground">
                blog
              </Link>
              .
            </p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
