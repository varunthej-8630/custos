import { useState, useEffect } from 'react'

// ── SVG Scenes ────────────────────────────────────────────────

function SceneIntruder() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 760 380" style={{ position: 'absolute', inset: 0 }}>
      <rect x="0" y="0" width="760" height="380" fill="#0a0f0a"/>
      <rect x="0" y="260" width="760" height="120" fill="#0d1a0d"/>
      <rect x="0" y="255" width="760" height="8" fill="#1a2e1a"/>
      <rect x="80" y="60" width="120" height="90" fill="#0d1f2d" stroke="#1a3040" strokeWidth="3" rx="2"/>
      <line x1="140" y1="60" x2="140" y2="150" stroke="#1a3040" strokeWidth="2"/>
      <line x1="80" y1="105" x2="200" y2="105" stroke="#1a3040" strokeWidth="2"/>
      <rect x="580" y="100" width="100" height="160" fill="#0c1a0c" stroke="#1e3a1e" strokeWidth="2" rx="2"/>
      <circle cx="585" cy="182" r="5" fill="#2a4a2a"/>
      <rect x="100" y="220" width="200" height="50" fill="#1a2a1a" rx="8"/>
      <rect x="100" y="210" width="200" height="20" fill="#1e321e" rx="4"/>
      <rect x="100" y="220" width="20" height="50" fill="#1e321e" rx="4"/>
      <rect x="280" y="220" width="20" height="50" fill="#1e321e" rx="4"/>
      <rect x="350" y="230" width="120" height="10" fill="#222e22" rx="3"/>
      <g transform="translate(520, 90)">
        <ellipse cx="40" cy="28" rx="14" ry="16" fill="#1a2a1a" stroke="#FF3B30" strokeWidth="1.5"/>
        <circle cx="40" cy="10" r="12" fill="#2a1a1a" stroke="#FF3B30" strokeWidth="1"/>
        <rect x="32" y="44" width="10" height="40" fill="#1a1a2a" rx="4"/>
        <rect x="42" y="44" width="10" height="40" fill="#1a1a2a" rx="4" transform="rotate(5,47,44)"/>
        <rect x="18" y="30" width="10" height="35" fill="#1a2a1a" rx="4" transform="rotate(-15,23,30)"/>
        <rect x="52" y="30" width="10" height="35" fill="#1a2a1a" rx="4" transform="rotate(10,57,30)"/>
        <ellipse cx="40" cy="42" rx="30" ry="50" fill="rgba(255,59,48,0.06)"/>
      </g>
      <line x1="460" y1="0" x2="460" y2="380" stroke="rgba(255,59,48,0.4)" strokeWidth="1.5" strokeDasharray="8,6"/>
      <text x="465" y="20" fill="rgba(255,59,48,0.6)" fontSize="10" fontFamily="monospace">RESTRICTED ZONE</text>
    </svg>
  )
}

function SceneElderFall() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 760 380" style={{ position: 'absolute', inset: 0 }}>
      <rect x="0" y="0" width="760" height="380" fill="#0a0a0f"/>
      <rect x="0" y="270" width="760" height="110" fill="#0d0d1a"/>
      <rect x="0" y="265" width="760" height="7" fill="#1a1a2e"/>
      <rect x="50" y="80" width="220" height="180" fill="#0d0d1a" stroke="#1a1a2e" strokeWidth="2" rx="4"/>
      <rect x="50" y="80" width="220" height="30" fill="#141428" rx="4"/>
      <rect x="50" y="80" width="30" height="180" fill="#141428" rx="2"/>
      <rect x="290" y="170" width="60" height="80" fill="#0d1020" stroke="#1a1a30" strokeWidth="1" rx="3"/>
      <ellipse cx="320" cy="195" rx="20" ry="8" fill="rgba(255,200,100,0.15)"/>
      <rect x="310" y="170" width="20" height="25" fill="#2a2a10"/>
      <g transform="translate(350, 200)">
        <ellipse cx="60" cy="30" rx="55" ry="16" fill="#1a1a2a" stroke="#FFB800" strokeWidth="1.5"/>
        <circle cx="5" cy="24" r="15" fill="#2a1a10" stroke="#FFB800" strokeWidth="1.5"/>
        <rect x="20" y="14" width="70" height="10" fill="#1a1525" rx="4" transform="rotate(-10,20,14)"/>
        <rect x="20" y="30" width="65" height="10" fill="#1a1525" rx="4" transform="rotate(8,20,30)"/>
        <rect x="100" y="20" width="40" height="12" fill="#1a1a2a" rx="4" transform="rotate(15,100,20)"/>
        <ellipse cx="60" cy="28" rx="70" ry="30" fill="rgba(255,184,0,0.08)"/>
      </g>
      <text x="30" y="340" fill="rgba(255,184,0,0.5)" fontSize="10" fontFamily="monospace">NO MOVEMENT DETECTED: 32s</text>
    </svg>
  )
}

function SceneWeapon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 760 380" style={{ position: 'absolute', inset: 0 }}>
      <rect x="0" y="0" width="760" height="380" fill="#0f0a0a"/>
      <rect x="0" y="260" width="760" height="120" fill="#1a0d0d"/>
      <rect x="200" y="0" width="360" height="260" fill="#120d0d"/>
      <line x1="200" y1="0" x2="200" y2="260" stroke="#1e1010" strokeWidth="3"/>
      <line x1="560" y1="0" x2="560" y2="260" stroke="#1e1010" strokeWidth="3"/>
      <g transform="translate(340, 60)">
        <rect x="26" y="44" width="28" height="60" fill="#1a1010" rx="4" stroke="#FF3B30" strokeWidth="1"/>
        <circle cx="40" cy="32" r="18" fill="#2a1515" stroke="#FF3B30" strokeWidth="1.5"/>
        <rect x="28" y="104" width="12" height="50" fill="#0f0f1a" rx="4"/>
        <rect x="40" y="104" width="12" height="50" fill="#0f0f1a" rx="4" transform="rotate(8,46,104)"/>
        <rect x="54" y="55" width="10" height="40" fill="#1a1010" rx="4" transform="rotate(-20,59,55)"/>
        <rect x="60" y="68" width="35" height="8" fill="#2a2a2a" rx="2" transform="rotate(-15,60,68)"/>
        <rect x="68" y="72" width="8" height="16" fill="#222" rx="1" transform="rotate(-15,72,72)"/>
        <circle cx="93" cy="62" r="8" fill="rgba(255,200,50,0.3)"/>
        <rect x="16" y="50" width="10" height="35" fill="#1a1010" rx="4" transform="rotate(15,21,50)"/>
        <ellipse cx="40" cy="80" rx="50" ry="70" fill="rgba(255,59,48,0.07)"/>
      </g>
    </svg>
  )
}

function SceneFire() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 760 380" style={{ position: 'absolute', inset: 0 }}>
      <rect x="0" y="0" width="760" height="380" fill="#0f0800"/>
      <rect x="0" y="260" width="760" height="120" fill="#1a0d00"/>
      <rect x="500" y="100" width="160" height="160" fill="#120a00" stroke="#2e1a00" strokeWidth="2" rx="2"/>
      <rect x="480" y="220" width="280" height="15" fill="#1a1000" rx="2"/>
      <g transform="translate(540, 120)">
        <ellipse cx="40" cy="90" rx="35" ry="12" fill="rgba(255,100,0,0.3)"/>
        <path d="M20,90 Q10,50 30,20 Q25,50 40,30 Q45,55 60,10 Q65,45 70,20 Q75,55 60,90 Z" fill="rgba(255,140,0,0.7)"/>
        <path d="M25,90 Q20,60 35,35 Q38,58 48,40 Q52,62 55,90 Z" fill="rgba(255,200,0,0.6)"/>
        <path d="M30,90 Q28,70 38,55 Q42,70 45,90 Z" fill="rgba(255,240,100,0.5)"/>
        <ellipse cx="40" cy="60" rx="50" ry="60" fill="rgba(255,100,0,0.1)"/>
      </g>
      <ellipse cx="570" cy="80" rx="60" ry="30" fill="rgba(80,80,80,0.3)"/>
      <ellipse cx="540" cy="50" rx="80" ry="25" fill="rgba(60,60,60,0.25)"/>
      <ellipse cx="590" cy="25" rx="100" ry="20" fill="rgba(50,50,50,0.2)"/>
      <text x="30" y="340" fill="rgba(255,120,0,0.6)" fontSize="10" fontFamily="monospace">THERMAL ANOMALY: 847C</text>
    </svg>
  )
}

function SceneSuspicious() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 760 380" style={{ position: 'absolute', inset: 0 }}>
      <rect x="0" y="0" width="760" height="380" fill="#0a0a0f"/>
      <rect x="0" y="260" width="760" height="120" fill="#0d0d1a"/>
      <line x1="0" y1="310" x2="760" y2="310" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="40,20"/>
      <g transform="translate(340, 80)">
        <circle cx="40" cy="22" r="16" fill="#151525" stroke="#00C8FF" strokeWidth="1.5"/>
        <rect x="28" y="38" width="24" height="55" fill="#151525" rx="4" stroke="#00C8FF" strokeWidth="1"/>
        <rect x="28" y="93" width="11" height="45" fill="#101020" rx="4"/>
        <rect x="39" y="93" width="11" height="45" fill="#101020" rx="4" transform="rotate(5,44,93)"/>
        <rect x="8" y="42" width="10" height="38" fill="#151525" rx="4" transform="rotate(20,13,42)"/>
        <rect x="62" y="42" width="10" height="38" fill="#151525" rx="4" transform="rotate(-15,67,42)"/>
        <circle cx="-20" cy="120" r="3" fill="rgba(0,200,255,0.4)"/>
        <circle cx="10" cy="130" r="3" fill="rgba(0,200,255,0.35)"/>
        <circle cx="40" cy="138" r="3" fill="rgba(0,200,255,0.3)"/>
        <circle cx="70" cy="130" r="3" fill="rgba(0,200,255,0.25)"/>
        <circle cx="95" cy="120" r="3" fill="rgba(0,200,255,0.2)"/>
        <path d="M-20,120 Q10,135 40,138 Q70,135 95,120" stroke="rgba(0,200,255,0.2)" fill="none" strokeWidth="1.5" strokeDasharray="4,4"/>
      </g>
      <text x="30" y="340" fill="rgba(0,200,255,0.5)" fontSize="10" fontFamily="monospace">LOITERING: 14 MIN 32 SEC</text>
    </svg>
  )
}

function SceneVehicle() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 760 380" style={{ position: 'absolute', inset: 0 }}>
      <rect x="0" y="0" width="760" height="380" fill="#0a0f0a"/>
      <rect x="0" y="260" width="760" height="120" fill="#0d1a0d"/>
      <g transform="translate(150, 130)">
        <rect x="0" y="30" width="360" height="110" fill="#131f13" stroke="#1e3a1e" strokeWidth="2" rx="10"/>
        <rect x="60" y="10" width="230" height="80" fill="#0f180f" stroke="#1a3020" strokeWidth="1.5" rx="8"/>
        <rect x="70" y="15" width="95" height="65" fill="#0d1a1a" stroke="#1a2e2e" strokeWidth="1" rx="4" opacity="0.7"/>
        <rect x="175" y="15" width="95" height="65" fill="#0d1a1a" stroke="#1a2e2e" strokeWidth="1" rx="4" opacity="0.7"/>
        <circle cx="60" cy="140" r="25" fill="#0a0a0a" stroke="#1e2e1e" strokeWidth="3"/>
        <circle cx="60" cy="140" r="12" fill="#111" stroke="#222" strokeWidth="2"/>
        <circle cx="300" cy="140" r="25" fill="#0a0a0a" stroke="#1e2e1e" strokeWidth="3"/>
        <circle cx="300" cy="140" r="12" fill="#111" stroke="#222" strokeWidth="2"/>
      </g>
      <g transform="translate(460, 100)">
        <circle cx="25" cy="18" r="13" fill="#101a10" stroke="#FFB800" strokeWidth="1.5"/>
        <rect x="14" y="31" width="22" height="48" fill="#101a10" rx="3" stroke="#FFB800" strokeWidth="1"/>
        <rect x="14" y="79" width="10" height="38" fill="#0d150d" rx="3"/>
        <rect x="24" y="79" width="10" height="38" fill="#0d150d" rx="3"/>
        <rect x="36" y="35" width="30" height="9" fill="#101a10" rx="4" transform="rotate(-10,36,35)"/>
        <rect x="0" y="35" width="14" height="32" fill="#101a10" rx="4"/>
      </g>
      <text x="30" y="340" fill="rgba(255,184,0,0.5)" fontSize="10" fontFamily="monospace">UNAUTHORIZED ACCESS DETECTED</text>
    </svg>
  )
}

const SCENES = [SceneIntruder, SceneElderFall, SceneWeapon, SceneFire, SceneSuspicious, SceneVehicle]

// ── Tabs config (no emoji chars — using colored dots instead) ─

const tabs = [
  { id: 0, dot: '#FF3B30', label: 'Intruder Detection', detections: [{ label: 'PERSON', conf: '94%', color: '#FF3B30', x: '30%', y: '25%', w: '120px', h: '180px' }], status: 'THREAT DETECTED', statusColor: '#FF3B30', behavior: 'BEHAVIOR: RESTRICTED ZONE ENTRY' },
  { id: 1, dot: '#FFB800', label: 'Elder Fall Detection', detections: [{ label: 'FALL DETECTED', conf: 'ALERT', color: '#FFB800', x: '25%', y: '48%', w: '180px', h: '100px' }], status: 'EMERGENCY ALERT', statusColor: '#FFB800', behavior: 'BEHAVIOR: FALL - NO MOVEMENT 30s' },
  { id: 2, dot: '#FF3B30', label: 'Weapon Detection', detections: [{ label: 'PERSON', conf: '91%', color: '#FF3B30', x: '40%', y: '20%', w: '100px', h: '190px' }, { label: 'WEAPON', conf: '88%', color: '#FF3B30', x: '52%', y: '55%', w: '90px', h: '60px' }], status: 'CRITICAL THREAT', statusColor: '#FF3B30', behavior: 'BEHAVIOR: ARMED PERSON - ESCALATING' },
  { id: 3, dot: '#FF6B00', label: 'Fire & Smoke', detections: [{ label: 'SMOKE', conf: '96%', color: '#FF6B00', x: '55%', y: '10%', w: '180px', h: '120px' }], status: 'FIRE ALERT', statusColor: '#FF6B00', behavior: 'BEHAVIOR: THERMAL EVENT - EVACUATE' },
  { id: 4, dot: '#00C8FF', label: 'Suspicious Behaviour', detections: [{ label: 'PERSON', conf: '89%', color: '#00C8FF', x: '42%', y: '20%', w: '100px', h: '190px' }], status: 'MONITORING', statusColor: '#00C8FF', behavior: 'BEHAVIOR: LOITERING - 14 MINUTES' },
  { id: 5, dot: '#00FF88', label: 'Vehicle Tampering', detections: [{ label: 'VEHICLE', conf: '95%', color: '#00FF88', x: '18%', y: '38%', w: '220px', h: '100px' }, { label: 'PERSON', conf: '92%', color: '#FFB800', x: '54%', y: '28%', w: '80px', h: '160px' }], status: 'TAMPERING ALERT', statusColor: '#FFB800', behavior: 'BEHAVIOR: UNAUTHORIZED ACCESS' },
]

// ── Bounding box ──────────────────────────────────────────────

function BoundingBox({ det, idx }) {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => setVisible(v => !v), 1200 + idx * 400)
    return () => clearInterval(interval)
  }, [idx])
  return (
    <div style={{
      position: 'absolute', left: det.x, top: det.y, width: det.w, height: det.h,
      border: '1.5px solid ' + det.color,
      opacity: visible ? 1 : 0.2, transition: 'opacity 0.4s ease',
      boxShadow: '0 0 10px ' + det.color + '40', pointerEvents: 'none',
    }}>
      <div style={{
        position: 'absolute', top: '-22px', left: 0,
        background: det.color, color: '#000', fontFamily: 'monospace',
        fontSize: '9px', fontWeight: 700, padding: '2px 6px',
        borderRadius: '3px 3px 0 0', whiteSpace: 'nowrap'
      }}>
        {det.label} {det.conf}
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────

export default function AIIntelligence() {
  const [activeTab, setActiveTab] = useState(0)
  const tab = tabs[activeTab]
  const Scene = SCENES[activeTab]

  return (
    <section className="section-wrapper" style={{ padding: '120px 0', background: 'transparent' }}>
      <div className="section">

        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="reveal" style={{ marginBottom: '20px' }}>
            <div className="label-pill">WHAT CUSTOS SEES</div>
          </div>
          <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: '16px' }}>
            Security Intelligence.<br />Not Just Surveillance.
          </h2>
          <p className="reveal" style={{ fontFamily: 'DM Sans', fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto' }}>
            Custos does not just record. It reads scenes, understands context, and acts.
          </p>
        </div>

        {/* Camera viewport */}
        <div className="reveal" style={{ maxWidth: '760px', margin: '0 auto 40px' }}>
          <div style={{ background: '#0a0a0a', border: '1px solid rgba(0,200,255,0.15)', borderRadius: '16px', position: 'relative', height: '380px', overflow: 'hidden' }}>

            {/* Scanlines */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,200,255,0.012) 2px, rgba(0,200,255,0.012) 4px)', pointerEvents: 'none', zIndex: 5 }} />

            {/* Corner brackets */}
            {[
              { top: '12px', left: '12px', borderTop: '2px solid rgba(0,200,255,0.6)', borderLeft: '2px solid rgba(0,200,255,0.6)' },
              { top: '12px', right: '12px', borderTop: '2px solid rgba(0,200,255,0.6)', borderRight: '2px solid rgba(0,200,255,0.6)' },
              { bottom: '12px', left: '12px', borderBottom: '2px solid rgba(0,200,255,0.6)', borderLeft: '2px solid rgba(0,200,255,0.6)' },
              { bottom: '12px', right: '12px', borderBottom: '2px solid rgba(0,200,255,0.6)', borderRight: '2px solid rgba(0,200,255,0.6)' },
            ].map((s, i) => (
              <div key={i} style={{ position: 'absolute', width: '20px', height: '20px', zIndex: 6, ...s }} />
            ))}

            {/* Timestamp */}
            <div style={{ position: 'absolute', top: '16px', left: '24px', fontFamily: 'monospace', fontSize: '11px', color: '#00FF00', zIndex: 6 }}>
              CAM_0{activeTab + 1} | LIVE | {new Date().toTimeString().slice(0, 8)}
            </div>

            {/* Status */}
            <div style={{ position: 'absolute', top: '16px', right: '24px', background: tab.statusColor + '22', border: '1px solid ' + tab.statusColor + '66', color: tab.statusColor, fontFamily: 'monospace', fontSize: '10px', padding: '3px 8px', borderRadius: '4px', zIndex: 6, letterSpacing: '1px' }}>
              {tab.status}
            </div>

            {/* Behavior */}
            <div style={{ position: 'absolute', bottom: '16px', left: '24px', fontFamily: 'monospace', fontSize: '10px', color: tab.statusColor, zIndex: 6, background: 'rgba(0,0,0,0.8)', padding: '4px 8px', borderRadius: '4px' }}>
              {tab.behavior}
            </div>

            {/* REC */}
            <div style={{ position: 'absolute', bottom: '16px', right: '24px', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'monospace', fontSize: '10px', color: '#FF3B30', zIndex: 6 }}>
              <div className="pulse-dot" style={{ background: '#FF3B30' }} /> REC
            </div>

            {/* SVG Scene */}
            <div key={activeTab} className="tab-content" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
              <Scene />
            </div>

            {/* Bounding boxes */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 4 }}>
              {tab.detections.map((det, i) => (
                <BoundingBox key={activeTab + '-' + i} det={det} idx={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="reveal" style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              background: activeTab === t.id ? 'rgba(0,200,255,0.1)' : 'transparent',
              border: '1px solid ' + (activeTab === t.id ? 'rgba(0,200,255,0.4)' : 'rgba(255,255,255,0.08)'),
              borderRadius: '100px', padding: '8px 16px', cursor: 'pointer',
              color: activeTab === t.id ? '#fff' : 'rgba(255,255,255,0.5)',
              fontFamily: 'DM Sans', fontSize: '13px', transition: 'all 0.2s ease',
              display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: t.dot, display: 'inline-block', flexShrink: 0 }} />
              {t.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
