
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { PiFileCss } from "react-icons/pi";
import { DiJava, DiPython } from "react-icons/di";
import { Bluetooth } from "lucide-react";
import { FaGolang } from "react-icons/fa6";
import { Breadcrumb } from "@/components/retroui/Breadcrumb";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    name: "Frontend Web Page",
    description: "A responsive front-end application built with React.",
    icons: [<FaReact />, <SiTypescript />, <PiFileCss />],
    imageUrl: "https://via.placeholder.com/500x500.png?text=React+Project",
    githubUrl: "https://github.com",
  },
  {
    name: "Data Collection Application",
    description: "A Python script to collect and process data from the web.",
    icons: [<DiPython />, <Bluetooth />],
    imageUrl: "https://via.placeholder.com/500x500.png?text=Python+Project",
    githubUrl: "https://github.com",
  },
  {
    name: "Proxy Server",
    description: "A high-performance proxy server written in Go.",
    icons: [<FaGolang />],
    imageUrl: "https://via.placeholder.com/500x500.png?text=Go+Project",
    githubUrl: "https://github.com",
  },
  {
    name: "REST API",
    description: "A robust REST API built with Java and Spring Boot.",
    icons: [<DiJava />],
    imageUrl: "https://via.placeholder.com/500x500.png?text=Java+Project",
    githubUrl: "https://github.com",
  },
];

export default function Projects() {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/" className="text-muted-foreground">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page className="text-white">Projects</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem' }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

