'use client'

const WA_LINK = 'https://wa.me/918825512668?text=Hi%2C%20I%27d%20like%20to%20download%20the%20VendDesk%20demo'
const WA_CONTACT = 'https://wa.me/918825512668?text=Hi%2C%20I%20want%20to%20know%20more%20about%20VendDesk'

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(34, 164, 110, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '70%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div className="fade-up-1" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '100px',
          background: 'rgba(141, 148, 145, 0.1)',
          border: '1px solid rgba(239, 250, 245, 0.25)',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#ff915d',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '28px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff', display: 'inline-block' }} />
          Works 100% Offline • Made for Indian SMEs
        </div>

        {/* Headline */}
        <h1 className="fade-up-2" style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2.4rem, 6vw, 4rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: '#e6edf3',
          marginBottom: '24px',
        }}>
          Simple Offline{' '}
          <span className="gradient-text">Business Management</span>
          {' '}Software
        </h1>

        {/* Subtitle */}
        <p className="fade-up-3" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#8b949e',
          lineHeight: 1.7,
          maxWidth: '580px',
          margin: '0 auto 40px',
          fontWeight: 400,
        }}>
          Manage sales, expenses, inventory, and profit <strong style={{ color: '#c9d1d9' }}>without internet</strong>.
          Perfect for small businesses, kirana stores, and local shops.
        </p>

        {/* Stats */}
        <div className="fade-up-3" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '44px',
          flexWrap: 'wrap',
        }}>
          {[
            { val: '₹1499', label: 'One-time only' },
            { val: '100%', label: 'Offline' },
            { val: 'Free', label: 'Demo available' },
          ].map(stat => (
            <div key={stat.val} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.6rem', fontWeight: 700, color: '#47c08a', lineHeight: 1.1 }}>{stat.val}</div>
              <div style={{ fontSize: '0.8rem', color: '#6e7681', marginTop: '2px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="fade-up-4" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>

          <a
            href={WA_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '0.95rem' }}
          >
            💬 Contact on WhatsApp
          </a>
        </div>

        {/* Trust line */}
        <div className="fade-up-5" style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#6e7681', fontSize: '0.82rem' }}>
          <span>🔒 Local data. Your device. No cloud needed.</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '36px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        color: '#6e7681',
        fontSize: '0.75rem',
        animation: 'fadeUp 1s ease 1s both',
      }}>
        <span>scroll</span>
        <div style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, #6e7681, transparent)' }} />
      </div>
    </section>
  )
}
