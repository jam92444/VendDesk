"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#users", label: "Who It's For" },
  { href: "#why", label: "Why Us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(13, 17, 23, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(48, 54, 61, 0.6)"
          : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo — flex-shrink: 0 prevents compression on small screens */}
          <a
            href="#"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,           // ✅ FIX: prevent logo squishing
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/favicon.ico"
                alt="VendDesk Logo"
                style={{ width: "45px", height: "45px", objectFit: "contain" }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#e6edf3",
                letterSpacing: "-0.02em",
              }}
            >
              Vend<span style={{ color: "#ff914d" }}>Desk</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="desktop-nav"
            style={{ display: "flex", gap: "32px", alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#6e7681",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ff914d")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#6e7681")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA — hidden on mobile via CSS class */}
          <a
            href="https://wa.me/918825512668?text=Hi%2C%20I%20want%20to%20know%20more%20about%20VendDesk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary desktop-cta"   // ✅ FIX: hide on mobile
            style={{
              padding: "8px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.875rem",
              flexShrink: 0,                      // ✅ FIX: prevent button squishing
            }}
          >
            Get Demo
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              color: "#c9d1d9",
              cursor: "pointer",
              padding: "4px",
              display: "none",        // hidden by default; CSS shows on mobile
            }}
          >
            <div style={{
              width: "22px", height: "2px", background: "currentColor",
              marginBottom: "5px", borderRadius: "2px", transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }} />
            <div style={{
              width: "22px", height: "2px", background: "currentColor",
              marginBottom: "5px", borderRadius: "2px", transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <div style={{
              width: "22px", height: "2px", background: "currentColor",
              borderRadius: "2px", transition: "all 0.3s",
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              padding: "16px 0 24px",
              borderTop: "1px solid rgba(48, 54, 61, 0.6)",
              background: "rgba(13, 17, 23, 0.98)", // ✅ FIX: solid bg so it's readable
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "10px 8px",
                  color: "#c9d1d9",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  borderRadius: "6px",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#ff914d";
                  e.currentTarget.style.background = "rgba(255, 145, 77, 0.08)"; // ✅ FIX: orange tint
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#c9d1d9";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav  { display: none !important; }
          .desktop-cta  { display: none !important; }   /* ✅ FIX: hide CTA on mobile */
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}