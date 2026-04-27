"use client";

const comparisons = [
  {
    feature: "Internet Required",
    tally: "✗ Always online",
    bizdesk: "✓ 100% Offline",
    tallyBad: true,
  },
  {
    feature: "Pricing Model",
    tally: "✗ Annual subscription",
    bizdesk: "✓ One-time ₹1499",
    tallyBad: true,
  },
  {
    feature: "Ease of Use",
    tally: "✗ Complex & technical",
    bizdesk: "✓ Simple, anyone can use",
    tallyBad: true,
  },
  {
    feature: "Setup Time",
    tally: "✗ Hours + training",
    bizdesk: "✓ Ready in 5 minutes",
    tallyBad: true,
  },
  {
    feature: "Target User",
    tally: "✗ Accountants & CA firms",
    bizdesk: "✓ Shop owners & SMEs",
    tallyBad: true,
  },
  {
    feature: "Data Backup",
    tally: "✗ Cloud only",
    bizdesk: "✓ Local + Google Drive",
    tallyBad: true,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            VendDesk vs Tally
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
            Why choose VendDesk?
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
            Tally is built for chartered accountants. BizDesk is built for you.
          </p>
        </div>

        <div className="section-reveal">
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1.5fr 1.5fr",
              gap: "0",
              marginBottom: "8px",
              padding: "12px 20px",
            }}
          >
            <div
              style={{
                color: "#6e7681",
                fontSize: "0.8rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Feature
            </div>
            <div
              style={{
                color: "#6e7681",
                fontSize: "0.8rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                textAlign: "center",
              }}
            >
              Tally
            </div>
            <div
              style={{
                color: "#ff915d",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                textAlign: "center",
              }}
            >
              VendDesk
            </div>
          </div>

          {/* Rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {comparisons.map((row, i) => (
              <div
                key={i}
                className="card-glass"
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1.5fr 1.5fr",
                  gap: "0",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "#c9d1d9",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  {row.feature}
                </div>
                <div
                  style={{
                    color: "#6e7681",
                    fontSize: "0.85rem",
                    textAlign: "center",
                    textDecoration: row.tallyBad ? "none" : "none",
                  }}
                >
                  <span style={{ color: "#ef4444", marginRight: "4px" }}>
                    ✗
                  </span>
                  {row.tally.slice(2)}
                </div>
                <div
                  style={{
                    color: "#4ade80",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  <span style={{ color: "#22a46e", marginRight: "4px" }}>
                    ✓
                  </span>
                  {row.bizdesk.slice(2)}
                </div>
              </div>
            ))}
          </div>

          {/* CTA note */}
          <div
            style={{
              marginTop: "32px",
              padding: "20px 24px",
              borderRadius: "12px",
                 background: "rgba(141, 148, 145, 0.1)",
              border: "1px solid rgba(239, 250, 245, 0.25)",
              textAlign: "center",
              color: "#ff915d",
              fontSize: "0.9rem",
            }}
          >
            💡 VendDesk is not just cheaper — it&apos;s designed from the ground
            up for shop owners like you.
          </div>
        </div>
      </div>
    </section>
  );
}
