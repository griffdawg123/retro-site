import { Breadcrumb } from "@/components/retroui/Breadcrumb";

export default function Contact() {
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
            <Breadcrumb.Link href="/" className="text-muted-foreground">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page className="text-white">Contact</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100% - 4rem)" }}>
        <h1 style={{ color: "#f5f5f5", fontSize: "4rem", fontFamily: "Archivo Black" }}>Contact</h1>
      </div>
    </div>
  );
}
