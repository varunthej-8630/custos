import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Html, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

// ─── Particle Field ──────────────────────────────────────────
function ParticleField() {
  const mesh = useRef()
  const count = 1000

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30
      const t = Math.random()
      colors[i * 3] = t * 0
      colors[i * 3 + 1] = t * 0.78 + (1 - t) * 0.34
      colors[i * 3 + 2] = 1
    }
    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

// ─── Morphing Blob ────────────────────────────────────────────
function MorphingBlob() {
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={[0, 0, -2]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <MeshDistortMaterial
          color="#00C8FF"
          distort={0.45}
          speed={1.5}
          transparent
          opacity={0.08}
          roughness={0}
          metalness={0.1}
        />
      </mesh>
      {/* Inner core glow */}
      <mesh position={[0, 0, -2]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <MeshDistortMaterial
          color="#0057FF"
          distort={0.3}
          speed={2}
          transparent
          opacity={0.06}
        />
      </mesh>
    </Float>
  )
}

// ─── Floating Orbs ────────────────────────────────────────────
function FloatingOrb({ position, color, size = 0.15, speed = 1.5 }) {
  return (
    <Float speed={speed} floatIntensity={1.5} rotationIntensity={0.5} position={position}>
      <mesh>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  )
}

// ─── 3D Floating Glass Cards ──────────────────────────────────
function FloatingCard({ position, value, label, delay = 0 }) {
  return (
    <Float speed={1.8} floatIntensity={0.6} position={position}>
      <Html transform distanceFactor={8} center>
        <div className="three-card">
          <div className="three-card-value">{value}</div>
          <div className="three-card-label">{label}</div>
        </div>
      </Html>
    </Float>
  )
}

// ─── Camera Rig (mouse parallax) ─────────────────────────────
function CameraRig() {
  const { camera, gl } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  useFrame(() => {
    const target = new THREE.Vector3(
      mouse.current.x * 1.5,
      mouse.current.y * 0.8,
      5
    )
    camera.position.lerp(target, 0.02)
    camera.lookAt(0, 0, 0)
  })

  const handleMouseMove = (e) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
    mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
  }

  if (typeof window !== 'undefined') {
    window.onmousemove = handleMouseMove
  }

  return null
}

// ─── Grid Lines (SVG overlay) ─────────────────────────────────
function GridOverlay({ scrollY }) {
  return (
    <svg
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: 0.4, pointerEvents: 'none',
        transform: `translateY(${scrollY * 0.2}px)`,
      }}
    >
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0,200,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}

// ─── Hero Section ─────────────────────────────────────────────
export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#000' }}>

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00C8FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0057FF" />

          <CameraRig />
          <Stars radius={80} depth={50} count={1000} factor={4} saturation={0} fade speed={0.5} />
          <ParticleField />
          <MorphingBlob />

          {/* Floating orbs */}
          <FloatingOrb position={[-4, 2, -1]} color="#00C8FF" size={0.12} speed={1.2} />
          <FloatingOrb position={[4, -1.5, -2]} color="#0057FF" size={0.18} speed={1.8} />
          <FloatingOrb position={[-3, -2.5, 1]} color="#00C8FF" size={0.08} speed={2.2} />
          <FloatingOrb position={[5, 2.5, -3]} color="#FF3B30" size={0.1} speed={1.4} />
          <FloatingOrb position={[2, 3, -1]} color="#00C8FF" size={0.06} speed={2.5} />
          <FloatingOrb position={[-5, 0, -3]} color="#0057FF" size={0.14} speed={1.6} />

          {/* Floating 3D glass cards */}
          <FloatingCard position={[-4.5, 1.5, -1]} value="< 200ms" label="Detection Time" />
          <FloatingCard position={[4.2, 1.8, -2]} value="100%" label="Offline Ready" />
          <FloatingCard position={[-3.8, -2, -1]} value="6+" label="Threat Types" />
          <FloatingCard position={[3.5, -1.5, -2]} value="AI" label="Edge Processing" />
        </Suspense>
      </Canvas>

      {/* Grid overlay */}
      <GridOverlay scrollY={0} />

      {/* Ambient glow blobs */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-100px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'rgba(0,87,255,0.12)',
        filter: 'blur(150px)', zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: '500px', height: '400px', borderRadius: '50%',
        background: 'rgba(0,200,255,0.07)',
        filter: 'blur(120px)', zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', top: '60px', right: '10%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(255,59,48,0.05)',
        filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none'
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '40%',
        background: 'linear-gradient(to bottom, transparent, #000)',
        zIndex: 2, pointerEvents: 'none'
      }} />

      {/* HTML Content */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '100px 24px 60px',
        textAlign: 'center',
        overflowY: 'auto',
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: '28px' }}
        >
          <div className="label-pill" style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2px', color: 'rgba(255,255,255,0.9)' }}>
            <span className="pulse-dot" />
            AI Security Intelligence Platform
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            lineHeight: 1.15,
            maxWidth: '580px',
            marginBottom: '20px',
            letterSpacing: '-0.5px',
          }}
        >
          <span style={{ color: '#FFFFFF' }}>Custos.</span><br />
          <span style={{
            background: 'linear-gradient(90deg, #FFFFFF 0%, #00C8FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            From Homes to Nations.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.82)',
            maxWidth: '520px',
            lineHeight: 1.75,
            marginBottom: '40px',
            textShadow: '0 1px 20px rgba(0,0,0,0.8)',
            letterSpacing: '0.1px',
          }}
        >
          The autonomous security intelligence platform that{' '}
          <span style={{ color: '#00C8FF', fontWeight: 600 }}>detects</span>,{' '}
          <span style={{ color: '#00C8FF', fontWeight: 600 }}>understands</span>, and{' '}
          <span style={{ color: '#00C8FF', fontWeight: 600 }}>responds</span>{' '}
          — even without internet.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a
            href="https://wa.me/917416636417?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Custos!"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ borderRadius: '100px', padding: '14px 32px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}
          >
            Explore the System
          </a>
          <a
            href="#how-it-works"
            className="btn-secondary"
            style={{ borderRadius: '100px', padding: '14px 32px', fontSize: '15px', textDecoration: 'none', display: 'inline-block' }}
          >
            See How It Works
          </a>
          <a
            href="/demo-landing.html"
            target="_blank" rel="noopener noreferrer"
            style={{
              borderRadius: '100px', padding: '14px 32px', fontSize: '15px',
              textDecoration: 'none', display: 'inline-block',
              background: 'rgba(0,200,255,0.1)',
              border: '1px solid rgba(0,200,255,0.4)',
              color: '#00C8FF', fontWeight: 500,
            }}
          >
            ▶ Live Demo
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            position: 'absolute', bottom: '60px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '8px'
          }}
        >
          <span style={{
            fontFamily: 'DM Sans', fontSize: '11px',
            color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase'
          }}>Scroll</span>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, rgba(0,200,255,0.6), transparent)',
            animation: 'pulse-dot 2s infinite'
          }} />
        </motion.div>
      </div>
    </section>
  )
}
