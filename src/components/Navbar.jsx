import { useState, useEffect } from 'react'

const links = [
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Intelligence', id: 'intelligence' },
  { label: 'Ecosystem', id: 'ecosystem' },
  { label: 'Vision', id: 'vision' },
  { label: 'Founder', id: 'founder' },
  { label: 'Join Mission', id: 'join-the-mission' },
  { label: 'Your Story', id: 'tell-your-story' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500&display=swap');

        .navbar-wrapper {
          position: fixed;
          top: 16px;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          padding: 0 24px;
          pointer-events: none;
        }

        .navbar {
          pointer-events: all;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 10px 12px;
          border-radius: 22px;
          max-width: 900px;
          width: 100%;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(40px) saturate(200%) brightness(1.1);
          -webkit-backdrop-filter: blur(40px) saturate(200%) brightness(1.1);
          border: 1px solid rgba(255, 255, 255, 0.13);
          box-shadow:
            0 8px 40px rgba(0, 0, 0, 0.45),
            inset 0 1.5px 0 rgba(255, 255, 255, 0.18),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3),
            0 0 0 0.5px rgba(0, 200, 255, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.00) 100%);
          border-radius: 22px 22px 0 0;
          pointer-events: none;
        }

        .navbar::after {
          content: '';
          position: absolute;
          bottom: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          pointer-events: none;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.055);
          box-shadow:
            0 12px 48px rgba(0, 0, 0, 0.6),
            inset 0 1.5px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.4),
            0 0 0 0.5px rgba(0, 200, 255, 0.1);
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 15px;
          letter-spacing: 4px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          padding: 6px 14px;
          border-radius: 14px;
          transition: background 0.2s;
        }

        .nav-logo:hover { background: rgba(255,255,255,0.06); }

        .nav-logo .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00C8FF;
          box-shadow: 0 0 6px rgba(0,200,255,1), 0 0 12px rgba(0,200,255,0.5);
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
          flex-wrap: nowrap;
        }

        .nav-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          padding: 7px 10px;
          border-radius: 12px;
          transition: all 0.2s ease;
          white-space: nowrap;
          display: block;
        }

        .nav-links a:hover {
          color: rgba(255,255,255,0.95);
          background: rgba(255,255,255,0.08);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .nav-cta a { display: block; text-decoration: none; }

        .nav-cta button {
          position: relative;
          background: rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.9);
          border: 1px solid rgba(255,255,255,0.14);
          padding: 8px 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          border-radius: 14px;
          white-space: nowrap;
          transition: all 0.25s ease;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.15),
            inset 0 -1px 0 rgba(0,0,0,0.2);
          overflow: hidden;
        }

        .nav-cta button::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.07), transparent);
          pointer-events: none;
        }

        .nav-cta button:hover {
          background: rgba(0,200,255,0.12);
          border-color: rgba(0,200,255,0.35);
          color: #fff;
          box-shadow:
            0 0 20px rgba(0,200,255,0.15),
            inset 0 1px 0 rgba(0,200,255,0.2),
            inset 0 -1px 0 rgba(0,0,0,0.2);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 4.5px;
          cursor: pointer;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 8px;
          flex-shrink: 0;
          transition: background 0.2s;
        }

        .hamburger:hover { background: rgba(255,255,255,0.1); }

        .hamburger span {
          display: block;
          width: 18px;
          height: 1.5px;
          background: rgba(255,255,255,0.8);
          border-radius: 2px;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 76px;
          left: 12px;
          right: 12px;
          background: rgba(10, 10, 10, 0.75);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 10px;
          flex-direction: column;
          gap: 2px;
          z-index: 999;
          box-shadow: 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.12);
        }

        .mobile-menu.open { display: flex; }

        .mobile-menu a {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          padding: 13px 18px;
          border-radius: 13px;
          transition: all 0.2s;
          display: block;
        }

        .mobile-menu a:hover {
          background: rgba(255,255,255,0.07);
          color: #fff;
        }

        /* Special highlight for Join Mission link */
        .nav-join {
          color: rgba(0,200,255,0.8) !important;
        }
        .nav-join:hover {
          color: #00C8FF !important;
          background: rgba(0,200,255,0.08) !important;
        }

        @media (max-width: 768px) {
          .navbar-wrapper { top: 10px; padding: 0 10px; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .navbar { padding: 8px 10px; }
        }
      `}</style>

      <div className="navbar-wrapper">
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <a href="#" className="nav-logo">
            <span className="dot" />
            CUSTOS
          </a>

          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={link.id === 'join-the-mission' ? 'nav-join' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a
              href="https://wa.me/917416636417?text=Hi%2C%20I%27d%20like%20to%20request%20access%20to%20Custos!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Request Access</button>
            </a>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setMenuOpen(false)}
            style={link.id === 'join-the-mission' ? { color: 'rgba(0,200,255,0.8)' } : {}}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/917416636417?text=Hi%2C%20I%27d%20like%20to%20request%20access%20to%20Custos!"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: '8px',
            background: 'rgba(0,200,255,0.1)',
            border: '1px solid rgba(0,200,255,0.3)',
            borderRadius: '12px',
            color: '#00C8FF',
            textAlign: 'center',
          }}
        >
          Request Access
        </a>
      </div>
    </>
  )
}