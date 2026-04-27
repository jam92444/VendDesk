"use client";
import { QRCodeCanvas } from "qrcode.react";

const WA_PAID =
  "https://wa.me/918825512668?text=Hi%2C%20I%20have%20paid%20for%20VendDesk.%20Please%20send%20me%20the%20download%20link.";
const UPI_ID = "nmohamedyusufjamal@okhdfcbank";

export default function Payment() {
  return (
    <section
      id="payment"
      style={{
        padding: "100px 24px",
        background: "rgba(22, 27, 34, 0.4)",
        borderTop: "1px solid rgba(48, 54, 61, 0.4)",
        borderBottom: "1px solid rgba(48, 54, 61, 0.4)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            Payment
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
            Pay & get instant access
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
            Pay via UPI / Paytm / GPay. Share screenshot on WhatsApp. Receive
            your download link within minutes.
          </p>
        </div>

        <div className="section-reveal">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {/* QR Code */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {/* QR placeholder */}
              <div
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "20px",
                  background: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  boxShadow: "0 0 40px rgba(34, 164, 110, 0.2)",
                  border: "4px solid rgba(34, 164, 110, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <QRCodeCanvas
                  value={`upi://pay?pa=${UPI_ID}&pn=VendDesk&cu=INR&am=1499`}
                  size={200}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  includeMargin={true}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    fontSize: "0.65rem",
                    color: "#555",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Scan to Pay ₹1499
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    color: "#8b949e",
                    fontSize: "0.8rem",
                    marginBottom: "6px",
                  }}
                >
                  UPI ID
                </div>
                <div
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    background: "rgba(34, 164, 110, 0.08)",
                    border: "1px solid rgba(34, 164, 110, 0.25)",
                    color: "#47c08a",
                    fontFamily: "monospace",
                    fontSize: "1rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {UPI_ID}
                  <button
                    onClick={() => navigator.clipboard?.writeText(UPI_ID)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#6e7681",
                      fontSize: "0.85rem",
                      padding: 0,
                    }}
                    title="Copy UPI ID"
                  >
                    📋
                  </button>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                  <span
                    key={app}
                    style={{
                      padding: "4px 12px",
                      borderRadius: "100px",
                      background: "rgba(48, 54, 61, 0.6)",
                      border: "1px solid rgba(48, 54, 61, 0.8)",
                      color: "#8b949e",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: "#e6edf3",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  marginBottom: "28px",
                }}
              >
                How to buy in 3 steps:
              </h3>

              {[
                {
                  step: "01",
                  title: "Scan & Pay",
                  desc: "Scan the QR code with any UPI app or enter the UPI ID manually. Pay ₹1499.",
                },
                {
                  step: "02",
                  title: "Take Screenshot",
                  desc: "Take a screenshot of the payment confirmation showing the transaction ID.",
                },
                {
                  step: "03",
                  title: "Message on WhatsApp",
                  desc: "Click the button below, share your payment screenshot, and receive your download link.",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "20px",
                    paddingBottom: i < 2 ? "24px" : "0",
                    marginBottom: i < 2 ? "0" : "0",
                    position: "relative",
                  }}
                >
                  {/* Connector line */}
                  {i < 2 && (
                    <div
                      style={{
                        position: "absolute",
                        left: "19px",
                        top: "42px",
                        width: "2px",
                        height: "calc(100% - 18px)",
                        background:
                          "linear-gradient(to bottom, rgba(34,164,110,0.3), rgba(34,164,110,0.05))",
                      }}
                    />
                  )}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(34, 164, 110, 0.12)",
                      border: "1px solid rgba(34, 164, 110, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#22a46e",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      flexShrink: 0,
                      position: "relative",
                    }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#c9d1d9",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        marginBottom: "6px",
                        fontFamily: "'Syne', sans-serif",
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{
                        color: "#6e7681",
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}

              <a
                href={WA_PAID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  marginTop: "32px",
                  padding: "15px 32px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                ✅ I Have Paid — Get My Software
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
