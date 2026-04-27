"use client";

const WA_BUY =
  "https://wa.me/918825512668?text=Hi%2C%20I%20want%20to%20buy%20VendDesk%20for%20%E2%82%B91499";
const WA_TRIAL =
  "https://wa.me/918825512668?text=Hi%2C%20I%20want%20to%20check%20Demo%20of%20VendDesk";

const includes = [
  "All 7 core features",
  "Lifetime licence, 1 PC",
  "Free updates for 1 year",
  "WhatsApp support",
  "Local + Google backup",
  "GST-ready invoices",
  "Offline — no internet needed",
  "Free trial before purchase",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ padding: "100px 24px", position: "relative" }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(141, 148, 145, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="section-reveal"
          style={{ textAlign: "center", marginBottom: "48px" }}
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
              color: "#ff914d",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Pricing
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
            One price. Forever yours.
          </h2>
          <p style={{ color: "#6e7681", fontSize: "1rem", lineHeight: 1.7 }}>
            No monthly fees. No hidden charges. Pay once and use for life.
          </p>
        </div>

        {/* Pricing card */}
        <div className="section-reveal">
          <div
            style={{
              borderRadius: "24px",
              border: "1px solid rgba(234, 74, 74, 0.3)",
              background: "rgba(22, 27, 34, 0.9)",
              overflow: "hidden",
              boxShadow: "0 0 60px rgba(164, 34, 62, 0.08)",
            }}
          >
            {/* Top band */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(164, 34, 60, 0.12), rgba(59, 130, 246, 0.06))",
                borderBottom: "1px solid rgba(164, 34, 58, 0.2)",
                padding: "32px 36px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#ff914d",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "8px",
                  }}
                >
                  VendDesk — Full Licence
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "3.5rem",
                      fontWeight: 800,
                      color: "#e6edf3",
                      lineHeight: 1,
                    }}
                  >
                    ₹1499
                  </span>
                  <span style={{ color: "#6e7681", fontSize: "0.9rem" }}>
                    one-time
                  </span>
                </div>
                <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "100px",
                      background: "rgba(34, 164, 110, 0.15)",
                      border: "1px solid rgba(34, 164, 110, 0.25)",
                      color: "#4ade80",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    ✓ Free Trial Available
                  </span>
                </div>
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "#6e7681",
                  fontSize: "0.85rem",
                  lineHeight: 1.8,
                }}
              >
                <div>🖥️ Electron Desktop App</div>
                <div>🇮🇳 Made for India</div>
                <div>🔐 Your data, your device</div>
              </div>
            </div>

            {/* Features list */}
            <div style={{ padding: "32px 36px" }}>
              <div
                style={{
                  color: "#8b949e",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "20px",
                }}
              >
                Everything included
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "12px",
                  marginBottom: "32px",
                }}
              >
                {includes.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#c9d1d9",
                      fontSize: "0.88rem",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(34, 164, 110, 0.15)",
                        border: "1px solid rgba(34, 164, 110, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.65rem",
                        color: "#22a46e",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={WA_BUY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    padding: "14px 32px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    flex: 1,
                    justifyContent: "center",
                    minWidth: "180px",
                  }}
                >
                  Buy Now — ₹1499
                </a>
                <a
                  href={WA_TRIAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: "14px 28px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    justifyContent: "center",
                    minWidth: "140px",
                  }}
                >
                  Get Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
