"use client";

const features = [
  {
    icon: "📦",
    title: "Product Management",
    desc: "Add, edit, and organize your entire product catalogue with stock levels, SKUs, and pricing — all stored locally.",
    accent: "#ff894d",
  },
  {
    icon: "🛒",
    title: "Sales Tracking",
    desc: "Record every sale, generate bills/invoices, and track daily revenue with a fast, intuitive interface.",
    accent: "#3b82f6",
  },
  {
    icon: "💸",
    title: "Expense Management",
    desc: "Log business expenses by category, monitor cash outflow, and stay on top of your spending habits.",
    accent: "#f59e0b",
  },
  {
    icon: "📈",
    title: "Profit & Loss Reports",
    desc: "Auto-generated P&L reports, daily/weekly/monthly summaries, and exportable data for your accountant.",
    accent: "#ec4899",
  },
  {
    icon: "👥",
    title: "User Management",
    desc: "Set up multiple staff accounts with role-based permissions — owner, cashier, or manager.",
    accent: "#8b5cf6",
  },
  {
    icon: "📡",
    title: "Offline First",
    desc: "Fully functional without any internet connection. No subscription fees, no downtime, no dependency.",
    accent: "#22a46e",
  },
  {
    icon: "☁️",
    title: "Local + Google Backup",
    desc: "Backup your data to a local drive or securely sync to Google Drive when you connect to Wi-Fi.",
    accent: "#3b82f6",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{ padding: "100px 24px", position: "relative" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          className="section-reveal"
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: "100px",
              background: "rgba(141, 148, 145, 0.1)",
              border: "1px solid rgba(239, 250, 245, 0.25)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#ff915d",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Features
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: "#e6edf3",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Everything you need to run your business
          </h2>
          <p
            style={{
              color: "#6e7681",
              fontSize: "1rem",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Powerful tools designed for simplicity, built for small business
            owners — not accountants.
          </p>
        </div>

        {/* Grid */}
        <div
          className="section-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="card-glass"
              style={{
                padding: "28px",
                borderRadius: "16px",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: `${f.accent}18`,
                  border: `1px solid ${f.accent}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  marginBottom: "18px",
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#e6edf3",
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  color: "#6e7681",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
