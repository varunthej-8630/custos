const metrics = [
  { value: '< 200ms', label: 'Detection Response Time' },
  { value: '100%', label: 'Offline Capable' },
  { value: '6+', label: 'Threat Detection Categories' },
]

export default function Metrics() {
  return (
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(255,255,255,0.02)',
      backdropFilter: 'blur(12px)',
    }}>
      <style>{`
        .metrics-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .metric-item {
          padding: 56px 40px;
          text-align: center;
        }
        .metric-divider-right {
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        @media (max-width: 640px) {
          .metrics-grid {
            grid-template-columns: 1fr !important;
          }
          .metric-item {
            padding: 36px 24px !important;
          }
          .metric-divider-right {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
        }
      `}</style>
      <div className="metrics-grid">
        {metrics.map((m, i) => (
          <div
            key={i}
            className={`metric-item reveal${i < metrics.length - 1 ? ' metric-divider-right' : ''}`}
          >
            <div className="gradient-text" style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 60px)',
              marginBottom: '8px', display: 'block'
            }}>
              {m.value}
            </div>
            <div style={{
              fontFamily: 'DM Sans', fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
            }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}