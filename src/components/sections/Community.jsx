import { useState, useEffect } from 'react'

const pollOptions = [
  { icon: '🏠', label: 'No proper CCTV coverage at home', story: 'My home has no proper CCTV coverage. There are blind spots everywhere and I have no way to know what\'s happening when I\'m away.' },
  { icon: '👴', label: 'Worried about elderly family members', story: 'I have elderly family members at home and I constantly worry about their safety, especially when no one else is around to watch over them.' },
  { icon: '🚗', label: 'Vehicle theft or tampering', story: 'My vehicle has been tampered with before and I have no way to get real-time alerts when something suspicious happens around it.' },
  { icon: '🌙', label: 'No alerts at night', story: 'At night, there are no alerts or notifications if something goes wrong. By the time I find out, it\'s already too late.' },
  { icon: '📶', label: 'Internet cuts out, security fails', story: 'When the internet goes down, my entire security system goes offline too. I\'m left completely vulnerable during outages.' },
  { icon: '🏘️', label: 'Rural area with no security infrastructure', story: 'I live in a rural area where there\'s no security infrastructure at all. Police response times are long and we\'re on our own.' },
]

function generateStory(selectedIndices) {
  if (selectedIndices.length === 0) return ''
  const stories = [...selectedIndices].map(i => pollOptions[i].story)
  if (stories.length === 1) return stories[0]
  const joined = stories.slice(0, -1).join(' ') + ' ' + stories[stories.length - 1]
  return joined
}

export default function Community() {
  const [selected, setSelected] = useState(new Set())
  const [submitted, setSubmitted] = useState(false)
  const [location, setLocation] = useState('')
  const [challenge, setChallenge] = useState('')
  const [autoFilled, setAutoFilled] = useState(false)

  const toggle = (i) => {
    const next = new Set(selected)
    next.has(i) ? next.delete(i) : next.add(i)
    setSelected(next)
  }

  // Auto-fill story when poll options are selected
  useEffect(() => {
    if (selected.size > 0) {
      const story = generateStory([...selected].sort((a, b) => a - b))
      setChallenge(story)
      setAutoFilled(true)
    } else {
      setChallenge('')
      setAutoFilled(false)
    }
  }, [selected])

  const handleSubmit = () => {
    const selectedLabels = [...selected].map(i => pollOptions[i].label).join(', ')
    const message = `🔒 *New Custos Story Submission*\n\n📍 Location: ${location || 'Not provided'}\n\n🏷️ Issues: ${selectedLabels || 'None selected'}\n\n📝 Challenge:\n${challenge || 'Not provided'}`
    const waURL = `https://wa.me/917416636417?text=${encodeURIComponent(message)}`
    window.open(waURL, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="tell-your-story" className="section-wrapper" style={{ padding: '120px 0', background: 'transparent' }}>
      <style>{`
        .poll-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
          margin-bottom: 40px;
        }
        .poll-card {
          transition: all 0.2s ease !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
        }
        .poll-card.selected {
          border: 1px solid rgba(0,200,255,0.5) !important;
          background: rgba(0,200,255,0.08) !important;
          box-shadow: 0 0 20px rgba(0,200,255,0.1) !important;
        }
        .story-textarea {
          transition: border-color 0.3s ease;
        }
        .story-textarea.autofilled {
          border-color: rgba(0,200,255,0.3) !important;
          background: rgba(0,200,255,0.04) !important;
        }
        .autofill-hint {
          font-family: DM Sans, sans-serif;
          font-size: 11px;
          color: rgba(0,200,255,0.6);
          margin-top: -6px;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        @media (max-width: 640px) {
          .poll-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
          .poll-card {
            padding: 14px !important;
          }
        }
      `}</style>

      <div className="section">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="reveal" style={{ marginBottom: '20px' }}>
            <div className="label-pill">TELL US YOUR STORY</div>
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(24px, 4vw, 40px)', color: '#fff', marginBottom: '16px'
          }}>
            What security problem do you face?
          </h2>
          <p className="reveal" style={{
            fontFamily: 'DM Sans', fontSize: '15px',
            color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 auto'
          }}>
            Only those who've faced the risk truly understand the need. Help us build for your reality.
          </p>
        </div>

        {/* Poll cards */}
        <div className="reveal poll-grid">
          {pollOptions.map((opt, i) => (
            <div
              key={i}
              className={`poll-card glass-card ${selected.has(i) ? 'selected' : ''}`}
              onClick={() => toggle(i)}
              style={{ padding: '20px', cursor: 'pointer', userSelect: 'none' }}
            >
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>{opt.icon}</div>
              <div style={{
                fontFamily: 'DM Sans', fontSize: '13px',
                color: selected.has(i) ? '#fff' : 'rgba(255,255,255,0.6)',
                lineHeight: 1.5, transition: 'color 0.2s'
              }}>
                {opt.label}
              </div>
              {/* Checkmark */}
              {selected.has(i) && (
                <div style={{
                  marginTop: '10px',
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                  fontSize: '11px', color: '#00C8FF',
                  fontFamily: 'DM Sans'
                }}>
                  ✓ Selected
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        {!submitted ? (
          <div className="reveal" style={{ maxWidth: '560px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                className="glass-input"
                placeholder="Your location (city, state)"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />

              {/* Auto-fill hint */}
              {autoFilled && (
                <div className="autofill-hint">
                  <span>✦</span>
                  Story auto-filled based on your selection — feel free to edit it
                </div>
              )}

              <textarea
                className={`glass-input story-textarea ${autoFilled ? 'autofilled' : ''}`}
                placeholder="Describe your security challenge... (or select options above to auto-fill)"
                rows={5}
                value={challenge}
                onChange={e => {
                  setChallenge(e.target.value)
                  setAutoFilled(false)
                }}
                style={{ resize: 'vertical' }}
              />

              <button
                onClick={handleSubmit}
                disabled={selected.size === 0 && !challenge}
                style={{
                  background: (selected.size > 0 || challenge) ? '#00C8FF' : 'rgba(255,255,255,0.1)',
                  color: (selected.size > 0 || challenge) ? '#000' : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  borderRadius: '100px',
                  padding: '14px 32px',
                  fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 600,
                  cursor: (selected.size > 0 || challenge) ? 'pointer' : 'not-allowed',
                  alignSelf: 'flex-start',
                  transition: 'all 0.2s',
                }}
              >
                Submit Story via WhatsApp →
              </button>
            </div>
          </div>
        ) : (
          <div className="reveal" style={{
            maxWidth: '400px', margin: '0 auto', textAlign: 'center',
            padding: '32px',
            background: 'rgba(0,200,255,0.05)',
            border: '1px solid rgba(0,200,255,0.2)',
            borderRadius: '16px'
          }}>
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>🙏</div>
            <p style={{
              fontFamily: 'Syne, sans-serif', fontSize: '18px',
              fontWeight: 700, color: '#fff', marginBottom: '8px'
            }}>Thank you for sharing.</p>
            <p style={{
              fontFamily: 'DM Sans', fontSize: '14px',
              color: 'rgba(255,255,255,0.5)', marginBottom: '16px'
            }}>Your story is being sent to Varun via WhatsApp.</p>
            <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
              Didn't open?{' '}
              <a href="mailto:p.varunthej@gmail.com" style={{ color: '#00C8FF' }}>
                Email instead
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}