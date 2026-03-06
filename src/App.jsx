import { useEffect, useRef } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import Solution from './components/sections/Solution'
import Architecture from './components/sections/Architecture'
import AIIntelligence from './components/sections/AIIntelligence'
import Escalation from './components/sections/Escalation'
import Offline from './components/sections/Offline'
import ElderCare from './components/sections/ElderCare'
import Metrics from './components/sections/Metrics'
import OpenEye from './components/sections/OpenEye'
import Privacy from './components/sections/Privacy'
import Founder from './components/sections/Founder'
import Roadmap from './components/sections/Roadmap'
import Recruitment from './components/sections/Recruitment'
import Community from './components/sections/Community'
import FinalCTA from './components/sections/FinalCTA'

// ── Star canvas – fills the entire fixed background ──────────────────────────
function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let stars = []
    let shootingStars = []
    let nebulae = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
      initNebulae()
    }

    function initStars() {
      stars = []
      const count = Math.floor((canvas.width * canvas.height) / 3000)
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.2,
          alpha: Math.random() * 0.7 + 0.1,
          speed: Math.random() * 0.004 + 0.001,
          phase: Math.random() * Math.PI * 2,
          color: Math.random() > 0.92
            ? `rgba(0,200,255,`
            : Math.random() > 0.85
              ? `rgba(100,150,255,`
              : `rgba(255,255,255,`,
        })
      }
    }

    function initNebulae() {
      nebulae = [
        { x: canvas.width * 0.15, y: canvas.height * 0.2,  w: 500, h: 400, color: 'rgba(0,87,255,0.045)',   blur: 120 },
        { x: canvas.width * 0.75, y: canvas.height * 0.15, w: 450, h: 350, color: 'rgba(0,200,255,0.03)',   blur: 100 },
        { x: canvas.width * 0.5,  y: canvas.height * 0.5,  w: 600, h: 500, color: 'rgba(0,57,180,0.04)',    blur: 140 },
        { x: canvas.width * 0.2,  y: canvas.height * 0.7,  w: 400, h: 400, color: 'rgba(0,200,255,0.025)',  blur: 110 },
        { x: canvas.width * 0.8,  y: canvas.height * 0.75, w: 500, h: 400, color: 'rgba(0,100,255,0.035)',  blur: 130 },
        { x: canvas.width * 0.45, y: canvas.height * 0.88, w: 700, h: 500, color: 'rgba(0,87,255,0.03)',    blur: 150 },
      ]
    }

    function spawnShootingStar() {
      shootingStars.push({
        x: Math.random() * canvas.width * 1.2,
        y: Math.random() * canvas.height * 0.5,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 6,
        alpha: 1,
        angle: Math.PI / 5 + (Math.random() - 0.5) * 0.3,
        width: Math.random() * 1.2 + 0.4,
      })
    }

    // Spawn shooting stars occasionally
    const shootInterval = setInterval(() => {
      if (Math.random() > 0.4) spawnShootingStar()
    }, 3200)

    function drawNebulae() {
      nebulae.forEach(n => {
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, Math.max(n.w, n.h) / 2)
        grd.addColorStop(0, n.color)
        grd.addColorStop(1, 'transparent')
        ctx.save()
        ctx.filter = `blur(${n.blur}px)`
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.ellipse(n.x, n.y, n.w / 2, n.h / 2, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
    }

    function drawStars(t) {
      stars.forEach(s => {
        const twinkle = s.alpha * (0.6 + 0.4 * Math.sin(t * s.speed * 60 + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `${s.color}${twinkle.toFixed(2)})`
        ctx.fill()

        // Glow for brighter stars
        if (s.r > 1.1) {
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `${s.color}${(twinkle * 0.15).toFixed(3)})`
          ctx.fill()
        }
      })
    }

    function drawShootingStars() {
      shootingStars = shootingStars.filter(s => s.alpha > 0.02)
      shootingStars.forEach(s => {
        const dx = Math.cos(s.angle) * s.len
        const dy = Math.sin(s.angle) * s.len
        const grd = ctx.createLinearGradient(s.x, s.y, s.x - dx, s.y - dy)
        grd.addColorStop(0, `rgba(255,255,255,${s.alpha})`)
        grd.addColorStop(0.3, `rgba(0,200,255,${s.alpha * 0.6})`)
        grd.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - dx, s.y - dy)
        ctx.strokeStyle = grd
        ctx.lineWidth = s.width
        ctx.stroke()

        s.x += Math.cos(s.angle) * s.speed
        s.y += Math.sin(s.angle) * s.speed
        s.alpha -= 0.012
      })
    }

    // Subtle SVG grid overlay via canvas
    function drawGrid() {
      const size = 50
      ctx.strokeStyle = 'rgba(0,200,255,0.025)'
      ctx.lineWidth = 0.5
      for (let x = 0; x < canvas.width; x += size) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += size) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }
    }

    let last = 0
    function loop(ts) {
      const t = ts / 1000
      const dt = t - last
      last = t

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Deep space base
      ctx.fillStyle = '#000005'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawGrid()
      drawNebulae()
      drawStars(t)
      drawShootingStars()

      animId = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)
    animId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(shootInterval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  )
}

// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, delay)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )

    const addRevealToChildren = (selector) => {
      document.querySelectorAll(selector).forEach((section) => {
        section.querySelectorAll('.reveal').forEach((child, idx) => {
          child.dataset.delay = idx * 100
          observer.observe(child)
        })
      })
    }

    addRevealToChildren('section, .section-wrapper')
    document.querySelectorAll('.reveal').forEach((el) => {
      if (!el.dataset.delay) el.dataset.delay = 0
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes drift1 { from { transform: translate(0,0) scale(1); } to { transform: translate(60px,80px) scale(1.05); } }
        @keyframes drift2 { from { transform: translate(0,0) scale(1); } to { transform: translate(-80px,60px) scale(0.95); } }
        @keyframes drift3 { from { transform: translate(0,0) scale(1); } to { transform: translate(40px,-60px) scale(1.08); } }

        html, body {
          margin: 0;
          padding: 0;
          background: #000005;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
          display: block;
          min-height: 100vh;
        }

        /* All sections transparent so starfield shows through */
        main > section,
        main > div {
          position: relative;
          z-index: 1;
          background: transparent !important;
        }

        footer { position: relative; z-index: 1; }
        nav { z-index: 1000 !important; }

        /* Section dividers — subtle horizontal glow line */
        main > section + section::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,200,255,0.08), transparent);
          pointer-events: none;
        }
      `}</style>

      {/* Universe starfield — sits behind everything */}
      <StarField />

      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Architecture />
        <AIIntelligence />
        <Escalation />
        <Offline />
        <ElderCare />
        <Metrics />
        <OpenEye />
        <Privacy />
        <Founder />
        <Roadmap />
        <Recruitment />
        <Community />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}