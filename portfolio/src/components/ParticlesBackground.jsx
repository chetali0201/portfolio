import { useEffect, useRef } from 'react'

export default function ParticlesBackground({ density = 50 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let animationId
    let width, height

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio
    }

    const init = () => {
      resize()
      const count = Math.min(density, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 18000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.5 + 0.15,
      }))
    }

    const colors = ['94,234,212', '167,139,250', '251,191,36']

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * window.devicePixelRatio, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${colors[i % colors.length]},${p.alpha})`
        ctx.fill()
      })
      animationId = requestAnimationFrame(draw)
    }

    init()
    if (!prefersReducedMotion) {
      draw()
    } else {
      // static single frame
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * window.devicePixelRatio, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(94,234,212,${p.alpha})`
        ctx.fill()
      })
    }

    const onResize = () => {
      cancelAnimationFrame(animationId)
      init()
      if (!prefersReducedMotion) draw()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onResize)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
      aria-hidden="true"
    />
  )
}
