const roles = [
  { icon: '🧠', title: 'AI / Computer Vision Engineers', desc: 'Build the intelligence layer that sees and understands.' },
  { icon: '⚙️', title: 'Embedded Systems Developers', desc: 'Design the edge hardware that runs it all offline.' },
  { icon: '🔭', title: 'Security Analysts & Researchers', desc: 'Define threat models and shape our detection logic.' },
  { icon: '📱', title: 'Mobile & Platform Developers', desc: 'Build the command interface families trust.' },
]

export default function Recruitment() {
  return (
    <section className="section-wrapper" style={{ padding: '120px 0' }}>
      <div className="section">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="reveal" style={{ marginBottom: '20px' }}>
            <div className="label-pill">JOIN THE MISSION</div>
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: '16px'
          }}>
            We're Looking for Builders.
          </h2>
          <p className="reveal" style={{
            fontFamily: 'DM Sans', fontSize: '16px',
            color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto'
          }}>
            If you believe security should be intelligent, not passive — we want to hear from you.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px', marginBottom: '48px'
        }}>
          {roles.map((role, i) => (
            <div key={i} className="glass-card reveal" style={{ padding: '28px' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{role.icon}</div>
              <h3 style={{
                fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 700,
                color: '#fff', marginBottom: '8px'
              }}>{role.title}</h3>
              <p style={{
                fontFamily: 'DM Sans', fontSize: '13px',
                color: 'rgba(255,255,255,0.5)', lineHeight: 1.6
              }}>{role.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>
            Send your work to
          </p>
          <a
            href="mailto:p.varunthej@gmail.com"
            style={{
              fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 700,
              color: '#00C8FF', textDecoration: 'none',
              textShadow: '0 0 20px rgba(0,200,255,0.4)',
              borderBottom: '1px solid rgba(0,200,255,0.3)',
              paddingBottom: '2px'
            }}
          >
            p.varunthej@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
