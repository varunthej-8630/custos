import { useState, useEffect } from 'react'

const links = ['How It Works', 'Intelligence', 'Ecosystem', 'Vision', 'Founder']

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
        .navbar {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 18px 80px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: background 0.3s;
        }
        .navbar.scrolled { background: rgba(0,0,0,0.9); }
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 4px;
          color: #fff;
          display: flex; align-items: center; gap: 8px;
          text-decoration: none;
        }
        .nav-logo .dot { color: #00C8FF; font-size: 8px; }
        .nav-links {
          display: flex; gap: 32px; list-style: none;
        }
        .nav-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s, text-shadow 0.2s;
        }
        .nav-links a:hover {
          color: #fff;
          text-shadow: 0 0 8px rgba(0,200,255,0.5);
        }
        .nav-cta {
          position: relative;
          border: 0.6px solid rgba(255,255,255,0.3);
          border-radius: 100px;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .nav-cta:hover { border-color: rgba(0,200,255,0.6); }
        .nav-cta::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 50%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        }
        .nav-cta:hover::before {
          background: linear-gradient(90deg, transparent, rgba(0,200,255,0.6), transparent);
        }
        .nav-cta button {
          background: #000;
          color: #fff;
          border: none;
          padding: 10px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          border-radius: 100px;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: #fff;
          transition: transform 0.3s;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 64px; left: 0; right: 0;
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 24px;
          flex-direction: column;
          gap: 20px;
          z-index: 99;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
        }
        @media (max-width: 768px) {
          .navbar { padding: 18px 24px; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <span className="dot">●</span>CUSTOS
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <a
            href="https://wa.me/917416636417?text=Hi%2C%20I%27d%20like%20to%20request%20access%20to%20Custos!"
            target="_blank" rel="noopener noreferrer"
          >
            <button>Request Access</button>
          </a>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
             onClick={() => setMenuOpen(false)}>
            {link}
          </a>
        ))}
      </div>
    </>
  )
}
