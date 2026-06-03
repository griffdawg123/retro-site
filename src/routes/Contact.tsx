import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Check } from "lucide-react";
import { useState } from "react";

const EMAIL = "doylegriffin32@gmail.com";

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  onClick?: () => void;
  copied?: boolean;
}

function ContactCard({ icon, label, value, href, onClick, copied }: ContactCardProps) {
  const inner = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1.25rem",
        padding: "1.25rem 1.5rem",
        backgroundColor: "var(--card)",
        border: "2px solid var(--border)",
        borderRadius: "6px",
        cursor: href || onClick ? "pointer" : "default",
        minWidth: "320px",
        textDecoration: "none",
      }}
      className="shadow-md hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
    >
      <div style={{ fontSize: "2rem", color: "var(--primary)", flexShrink: 0 }}>
        {copied ? <Check size={32} strokeWidth={2.5} style={{ color: "var(--primary)" }} /> : icon}
      </div>
      <div>
        <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--muted-foreground)", fontFamily: "Space Grotesk, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {label}
        </p>
        <p style={{ margin: 0, fontSize: "1rem", color: "var(--foreground)", fontFamily: "Archivo Black, sans-serif" }}>
          {copied ? "Copied!" : value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        {inner}
      </a>
    );
  }

  return <div onClick={onClick}>{inner}</div>;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      <h1
        style={{
          color: "var(--foreground)",
          fontFamily: "Archivo Black, sans-serif",
          fontSize: "2.5rem",
          margin: "0 0 1rem 0",
        }}
      >
        GET IN TOUCH
      </h1>

      <ContactCard
        icon={<FaGithub size={32} />}
        label="GitHub"
        value="griffdawg123"
        href="https://github.com/griffdawg123"
      />
      <ContactCard
        icon={<FaLinkedin size={32} />}
        label="LinkedIn"
        value="griffin-doyle"
        href="https://www.linkedin.com/in/griffin-doyle-3283b91b6/"
      />
      <ContactCard
        icon={<Mail size={32} />}
        label="Email"
        value={EMAIL}
        onClick={copyEmail}
        copied={copied}
      />
    </div>
  );
}
