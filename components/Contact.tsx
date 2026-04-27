"use client";

const WA_LINK =
  "https://wa.me/918825512668?text=Hi%2C%20I%20have%20a%20question%20about%20VendDesk";
const LINKEDIN = "https://linkedin.com/in/mohamed-yusuf-jamal-106772293";
const EMAIL = "mdyusufwork@gmail.com";

export default function Contact() {
  return (
    <>
      <section id="contact" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            className="section-reveal"
            style={{ textAlign: "center", marginBottom: "56px" }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "4px 14px",
                borderRadius: "100px",
                background: "rgba(34, 164, 110, 0.08)",
                border: "1px solid rgba(34, 164, 110, 0.2)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#7dd9ae",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Contact
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
              Let&apos;s talk business
            </h2>
            <p
              style={{
                color: "#6e7681",
                fontSize: "1rem",
                maxWidth: "440px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Questions? Demo requests? Technical support? We&apos;re just one
              message away.
            </p>
          </div>

          <div
            className="section-reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                icon: "💬",
                label: "WhatsApp",
                value: "+91 88255 12668",
                href: WA_LINK,
                color: "#22a46e",
                cta: "Chat Now",
              },
              {
                icon: "💼",
                label: "LinkedIn",
                value: "Mohamed Yusuf Jamal",
                href: LINKEDIN,
                color: "#3b82f6",
                cta: "Connect",
              },
              {
                icon: "✉️",
                label: "Email",
                value: EMAIL,
                href: `mailto:${EMAIL}`,
                color: "#f59e0b",
                cta: "Send Mail",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass"
                style={{
                  padding: "28px 24px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: `${c.color}18`,
                    border: `1px solid ${c.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    style={{
                      color: "#8b949e",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "4px",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      color: "#c9d1d9",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    {c.value}
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    color: c.color,
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {c.cta} →
                </div>
              </a>
            ))}
          </div>

          <div className="section-reveal" style={{ marginTop: "40px" }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: "flex",
                width: "100%",
                padding: "16px",
                borderRadius: "14px",
                textDecoration: "none",
                fontSize: "1rem",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              💬 Contact on WhatsApp — Quick Response Guaranteed
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "32px 24px",
          borderTop: "1px solid rgba(48, 54, 61, 0.5)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <img
              src="/favicon.ico"
              alt="VendDesk Logo"
              style={{
                width: "45px",
                height: "45px",
                objectFit: "contain",
              }}
            />
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#c9d1d9",
              }}
            >
              Vend<span style={{ color: "#ff914d" }}>Desk</span>
            </span>
          </div>
          <p
            style={{
              color: "#6e7681",
              fontSize: "0.82rem",
              marginBottom: "8px",
            }}
          >
            Simple offline business management software for Indian SMEs
          </p>
          <p style={{ color: "#484f58", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} VendDesk. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
