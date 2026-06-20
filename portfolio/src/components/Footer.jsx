import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 px-6 md:px-12 lg:px-24 py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <button onClick={scrollTop} className="font-display text-lg font-semibold tracking-tight">
          CK<span className="text-signal-cyan">.</span>
        </button>

        <p className="text-xs text-paper/40 font-mono text-center">
          © {year} Chetali Kumbhare. Built with React, Tailwind & Framer Motion.
        </p>

        <div className="flex items-center gap-4">
          {[
            { Icon: FiGithub, href: 'https://github.com/chetali0202' },
            { Icon: FiLinkedin, href: 'https://linkedin.com/chetali-kumbhare' },
          
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-paper/50 hover:text-signal-cyan transition-colors"
              aria-label="Social link"
            >
              <Icon size={16} />
            </a>
          ))}
          <button
            onClick={scrollTop}
            className="w-8 h-8 rounded-full glass flex items-center justify-center hover:text-signal-cyan transition-colors"
            aria-label="Back to top"
          >
            Designed & Developed by Chetali ✨
            <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
