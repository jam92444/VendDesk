'use client'

const users = [
  {
    icon: '🏪',
    title: 'Small Shop Owners',
    desc: 'Kirana stores, stationery shops, medical stores — manage stock and billing without a computer degree.',
    examples: ['Grocery stores', 'Stationery shops', 'Medical stores'],
  },
  {
    icon: '🛍️',
    title: 'Retail Businesses',
    desc: 'Clothing, electronics, furniture — track inventory across multiple categories with ease.',
    examples: ['Clothing boutiques', 'Electronics shops', 'Furniture stores'],
  },
  {
    icon: '🚚',
    title: 'Local Distributors',
    desc: 'Manage bulk orders, track outstanding payments, and monitor monthly P&L — all offline.',
    examples: ['Wholesale dealers', 'FMCG distributors', 'Auto spare parts'],
  },
]

export default function TargetUsers() {
  return (
    <section
      id="users"
      style={{
        padding: '100px 24px',
        background: 'rgba(22, 27, 34, 0.4)',
        borderTop: '1px solid rgba(48, 54, 61, 0.4)',
        borderBottom: '1px solid rgba(48, 54, 61, 0.4)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            padding: '4px 14px',
            borderRadius: '100px',
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#93c5fd',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Who It&apos;s For
          </div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: 700,
            color: '#e6edf3',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            Built for real businesses, not corporations
          </h2>
          <p style={{ color: '#6e7681', fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            If you run a small business in India, VendDesk was designed with you in mind.
          </p>
        </div>

        <div className="section-reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {users.map((u, i) => (
            <div
              key={i}
              className="card-glass"
              style={{
                padding: '32px',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                fontSize: '5rem',
                opacity: 0.05,
              }}>
                {u.icon}
              </div>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{u.icon}</div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#e6edf3',
                marginBottom: '12px',
              }}>
                {u.title}
              </h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
                {u.desc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {u.examples.map(ex => (
                  <div key={ex} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.85rem',
                    color: '#6e7681',
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22a46e', flexShrink: 0 }} />
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
