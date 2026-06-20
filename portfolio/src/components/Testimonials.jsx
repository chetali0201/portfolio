import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

const TESTIMONIALS = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, FinEdge Labs',
    quote:
      'Chetali turned a vague idea about fraud monitoring into a dashboard our analysts actually rely on every day. Communication was clear from day one.',
  },
  {
    name: 'Priya Nair',
    role: 'Product Lead, Carewell',
    quote:
      'The wellness analytics platform she built is fast, clean, and the AI-driven insights genuinely changed how our users engage with the app.',
  },
  {
    name: 'Rohan Deshpande',
    role: 'Clinic Administrator',
    quote:
      'Our hospital management system replaced three separate spreadsheets. Chetali was thorough, patient with our edge cases, and delivered on time.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-pad">
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="eyebrow mb-4">
       · Testimonials
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl"
      >
        What clients say.
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid md:grid-cols-3 gap-5"
      >
        {TESTIMONIALS.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 flex flex-col hover:shadow-glow transition-shadow"
          >
            <div className="flex gap-1 text-signal-amber mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-paper/65 leading-relaxed flex-1">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-signal-cyan/40 to-signal-violet/40 flex items-center justify-center font-mono text-xs">
                {t.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-paper/45">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
