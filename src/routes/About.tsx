import { Breadcrumb } from "@/components/retroui/Breadcrumb";
import { Card } from "@/components/retroui/Card";
import headshot from "@/static/headshot.jpg";

export default function About() {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        height: "100vh",
        padding: "2rem",
      }}
    >
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/" className="text-muted-foreground">
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page className="text-white">About</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "calc(100% - 4rem)",
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
          <Card.Content className="text-card-foreground">
            <img
              src={headshot}
              alt="placeholder headshot"
              style={{
                float: "right",
                marginLeft: "1rem",
                marginBottom: "1rem",
                shapeOutside: "margin-box",
                width: "clamp(150px, 30%, 200px)",
                objectFit: "cover",
                objectPosition: "top",
              }}
              className="rounded"
            />
            <p>Hello! My my name is Griffin and I am a software engineer. I graduated from UNSW with a double Bachelor's Degree in Software Engineering and Physics in 2024. While I am passionate for all facets of computer technology, I am still aiming to find my niche in a world where AI development is everpresent. Outside of technology, I am passionate about cooking and enjoy learning new techniques and flavour profiles and would like to post the meals I make on my <a href="/blog" style={{ color: 'var(--primary)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-hover)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--primary)'}>blog</a>.</p>
            <br />
            <p>I have started my professional development career as a technology graduate at Westpac Bank. Through this program I have been able to rotate through teams and gain experience across the business. My first 6 month rotation was in the consumer banking divison, specifically working on the internal CRM application. I was personally involved in the planning and design of a new branch manager view to allow leaders of banking teams manage and view their proactive sales leads. This project was very complicated as we had to ensure that the filtration of leads was accurate and performant, across multiple tabs which delineated different relationships of bankers to the logged in manager. This position introduced me to enterprise software engineering practices as well as the importance of positions such as solution designers in the development lifecycle.</p>
            <br />
            <p>My second position at Westpac (and the one I am currently in) is in the in-house hosting team. We utilsise Red Hat products to host automation and container workloads for other teams within the business. This position has strengthened my understanding of networking, infrastructure and DevOps. I am still in the early stages of this team and look forward to how much more I can grow!</p>
            <br />
            <p>Outside of work, I have a few personal projects that I am working on. The first is this website! I built this site using ReactJS and TailwindCSS to showcase my skills and projects, as well as to gain experience with "vibe coding". I also have a few other projects that I am working on such as a HTTP proxy and mocking TUI application as well as starting to document my homelab that I will be building out. I am always looking for new challenges and opportunities to learn and grow as a developer.</p>
          </Card.Content>
        </Card>
      </div>
    </div >
  );
}
