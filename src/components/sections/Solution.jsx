const steps = [
  { icon: '🎥', label: 'Detection', color: '#00C8FF', glow: 'rgba(0,200,255,0.3)' },
  { icon: '🧠', label: 'Analysis', color: '#0057FF', glow: 'rgba(0,87,255,0.3)' },
  { icon: '🛡', label: 'Decision', color: '#ffffff', glow: 'rgba(255,255,255,0.2)' },
  { icon: '🔔', label: 'Action', color: '#FF3B30', glow: 'rgba(255,59,48,0.4)' },
]

const features = [
  'Real-time AI surveillance', 'Facial recognition',
  'Behaviour analysis', 'Threat prediction',
  'Autonomous escalation', 'Offline-first intelligence',
  'Multi-protocol communication', 'Edge processing — no cloud dependency',
]

export default function Solution() {
  return (
    <section className="section-wrapper" style={{ background: 'transparent', padding: '120px 0' }}>
      <style>{`
        .solution-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 64px;
          flex-wrap: nowrap;
          gap: 0;
        }
        .solution-step {
          min-width: 120px;
          padding: 24px;
        }
        .solution-arrow {
          width: 64px;
          height: 2px;
          flex-shrink: 0;
          position: relative;
        }
        .solution-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 40px;
          max-width: 680px;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .solution-flow {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0 !important;
          }
          .solution-flow > div {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .solution-arrow {
            width: 2px !important;
            height: 40px !important;
            background: linear-gradient(to bottom, var(--from-color), var(--to-color)) !important;
          }
          .solution-step {
            min-width: 140px !important;
            padding: 20px 28px !important;
          }
          .solution-features {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>

      <div className="section">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="reveal" style={{ marginBottom: '20px' }}>
            <div className="label-pill">THE CUSTOS SYSTEM</div>
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(30px, 4.5vw, 52px)', color: '#fff', marginBottom: '16px'
          }}>
            Meet Custos. Your Autonomous AI Guard.
          </h2>
          <p className="reveal" style={{
            fontFamily: 'DM Sans', fontSize: '16px',
            color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto'
          }}>
            Custos doesn't just watch. It detects, thinks, decides, and acts — automatically.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="reveal solution-flow">
          {steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              {/* Step node */}
              <div
                className="glass-card solution-step"
                style={{
                  textAlign: 'center',
                  border: `1px solid ${step.glow}`,
                  boxShadow: `0 0 20px ${step.glow}, inset 0 1px 0 rgba(255,255,255,0.1)`,
                  position: 'relative',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{step.icon}</div>
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: '13px', color: step.color, letterSpacing: '1px'
                }}>
                  {step.label}
                </div>
                {i === 3 && (
                  <div style={{
                    position: 'absolute', inset: -1,
                    borderRadius: '16px',
                    animation: 'glow-pulse 2s infinite',
                    pointerEvents: 'none'
                  }} />
                )}
              </div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div
                  className="solution-arrow"
                  style={{
                    '--from-color': steps[i].glow,
                    '--to-color': steps[i + 1].glow,
                    background: `linear-gradient(90deg, ${steps[i].glow}, ${steps[i + 1].glow})`,
                  }}
                >
                  <div style={{
                    position: 'absolute', top: '50%',
                    width: '6px', height: '6px',
                    background: '#00C8FF', borderRadius: '50%',
                    transform: 'translateY(-50%)',
                    animation: `travel-dot-${i} 2s ${i * 0.5}s infinite linear`,
                    boxShadow: '0 0 6px #00C8FF'
                  }} />
                  <style>{`
                    @keyframes travel-dot-${i} {
                      0% { left: 0; opacity: 0; }
                      10% { opacity: 1; }
                      90% { opacity: 1; }
                      100% { left: calc(100% - 6px); opacity: 0; }
                    }
                  `}</style>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Feature list */}
        <div className="reveal solution-features">
          {features.map((f, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 0',
              borderBottom: '1px solid rgba(255,255,255,0.04)'
            }}>
              <span style={{ color: '#00C8FF', fontSize: '12px' }}>✦</span>
              <span style={{
                fontFamily: 'DM Sans', fontSize: '14px',
                color: 'rgba(255,255,255,0.75)'
              }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}