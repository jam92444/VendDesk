"use client";

const screenshots = [
  {
    title: "Dashboard Overview",
    desc: "See your daily sales, stock alerts, and profit at a glance.",
    color: "#22a46e",
    icon: "📊",
    items: [
      "Today's Sales: ₹12,450",
      "Low Stock: 3 items",
      "Net Profit: ₹3,210",
      "COGS: ₹9,240",
    ],
    image: "dashboard.PNG",
  },
  {
    title: "Sales & Billing",
    desc: "Fast billing interface with search, barcode, and receipt printing.",
    color: "#3b82f6",
    icon: "🧾",
    items: [
      "Quick product search",
      "Thermal receipt print",
      "Sale ready invoices",
      "Sales report",
    ],
    image: "sales.PNG",
  },
  {
    title: "Reports & Analytics",
    desc: "Visual charts for monthly trends, top products, and expenses.",
    color: "#f59e0b",
    icon: "📈",
    items: [
      "Monthly P&L chart",
      "Top 10 products",
      "Expense breakdown",
      "Export to PDF",
    ],
    image: "report.PNG",
  },
];

export default function Screenshots() {
  return (
    <section
      id="screenshots"
      style={{
        padding: "100px 24px",
        background: "rgba(22, 27, 34, 0.4)",
        borderTop: "1px solid rgba(48, 54, 61, 0.4)",
        borderBottom: "1px solid rgba(48, 54, 61, 0.4)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="section-reveal"
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: "100px",
              background: "rgba(245, 158, 11, 0.08)",
              border: "1px solid rgba(245, 158, 11, 0.2)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#fcd34d",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Screenshots
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
            See it in action
          </h2>
          <p
            style={{
              color: "#6e7681",
              fontSize: "1rem",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Clean, distraction-free screens designed for fast daily use.
          </p>
        </div>

        <div
          className="section-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {screenshots.map((s, i) => (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Mockup window */}
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(48, 54, 61, 0.8)",
                  background: "rgba(13, 17, 23, 0.9)",
                }}
              >
                {/* Window chrome */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "10px 14px",
                    background: "rgba(22, 27, 34, 0.9)",
                    borderBottom: "1px solid rgba(48, 54, 61, 0.6)",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#ef4444",
                      opacity: 0.7,
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#f59e0b",
                      opacity: 0.7,
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#22c55e",
                      opacity: 0.7,
                    }}
                  />
                  <span
                    style={{
                      marginLeft: "8px",
                      color: "#6e7681",
                      fontSize: "0.75rem",
                    }}
                  >
                    VendDesk — {s.title}
                  </span>
                </div>

                {/* Screen content */}
                <div
                  style={{
                    padding: "24px",
                    minHeight: "200px",
                    position: "relative",
                    background: `linear-gradient(135deg, rgba(13,17,23,0.95), rgba(22,27,34,0.95))`,
                  }}
                >
                  {/* Accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: `linear-gradient(90deg, ${s.color}, transparent)`,
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>{s.icon}</span>
                    <div>
                      <div
                        style={{
                          color: "#e6edf3",
                          fontWeight: 600,
                          fontSize: "0.95rem",
                          fontFamily: "'Syne', sans-serif",
                        }}
                      >
                        {s.title}
                      </div>
                      <div
                        style={{
                          color: "#6e7681",
                          fontSize: "0.78rem",
                          marginTop: "2px",
                        }}
                      >
                        VendDesk v2.0
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {s.items.map((item, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "8px 12px",
                          borderRadius: "8px",
                          background: "rgba(48, 54, 61, 0.3)",
                          border: "1px solid rgba(48, 54, 61, 0.4)",
                        }}
                      >
                        <div
                          style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: s.color,
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ color: "#c9d1d9", fontSize: "0.85rem" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: "16px",
                      padding: "8px",
                      borderRadius: "8px",
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}30`,
                      textAlign: "center",
                      color: s.color,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    <img
                      src={`/${s.image}`}
                      alt="Sales"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: "#c9d1d9",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "#6e7681",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
