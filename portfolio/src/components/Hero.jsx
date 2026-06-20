import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, } from 'react-icons/fi'
import useTypewriter from '../hooks/useTypewriter'
import ParticlesBackground from './ParticlesBackground'

const ROLES = ['Full Stack Developer', 'AI Enthusiast', 'Dashboard Designer']

export default function Hero() {
  const typed = useTypewriter(ROLES, { pause: 1400 })

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* animated backdrop */}
      <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <ParticlesBackground density={45} />
      <motion.div
        className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-signal-cyan/10 blur-[120px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-signal-violet/10 blur-[120px]"
        animate={{ scale: [1.1, 0.95, 1.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 section-pad py-0 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]"
          >
            Chetali
            <br />
            <span className="text-gradient">Kumbhare</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 h-8 font-mono text-base sm:text-lg text-paper/70"
          >
            <span className="text-signal-cyan">&gt;</span> {typed}
            <span className="inline-block w-[2px] h-5 bg-signal-cyan ml-1 align-middle animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-paper/60 leading-relaxed"
          >
            I design and build data-rich products end to end — from interface to
            inference. My work sits at the intersection of clean engineering,
            considered design, and applied AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group relative px-7 py-3.5 rounded-full bg-signal-cyan text-ink-950 font-semibold text-sm overflow-hidden transition-transform hover:scale-[1.03] active:scale-95"
            >
              View Projects
            </button>
            <a
              href="/resume-chetali-kumbhare.pdf"
              download
              className="px-7 py-3.5 rounded-full glass font-semibold text-sm flex items-center gap-2 hover:border-signal-cyan/40 transition-all hover:scale-[1.03] active:scale-95"
            >
              <FiDownload size={15} /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex items-center gap-5 text-paper/50"
          >
            {[
              { Icon: FiGithub, href: 'https://github.com/chetali0201' },
              { Icon: FiLinkedin, href: 'https://linkedin.com/chetali-kumbhare' },
              
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-signal-cyan transition-colors"
                aria-label="Social link"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <motion.div
            className="absolute -inset-6 rounded-[2.5rem] border border-signal-cyan/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          />
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] glass shadow-glow overflow-hidden animate-float">
            <img
              src="1000120530.jpg"
              alt="Chetali Kumbhare"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.display = 'flex'
              }}
            />
            <div
              className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-ink-700 to-ink-900"
              style={{ display: 'none' }}
            >
              <span className="font-display text-7xl text-gradient font-semibold">CK</span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 shadow-glass">
            <p className="font-mono text-[10px] tracking-widest text-signal-cyan/80">STATUS</p>
            <p className="text-sm font-medium mt-0.5">Open to opportunities</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/40 hover:text-signal-cyan transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  )
}
