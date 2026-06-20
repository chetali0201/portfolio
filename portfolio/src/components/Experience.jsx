import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../animations/variants'

const TIMELINE = [
{
period: '2026',
title: 'AI Fraud Detection Dashboard',
org: 'Full Stack + AI Project',
desc:
'Built an intelligent fraud monitoring dashboard with analytics, alerts, visualization and modern UI.',
},

{
period: '2026',
title: 'Cafeflix — Cafe UI',
org: 'Frontend Project',
desc:
'Developed a premium responsive cafe website with interactive sections and modern design.',
},

{
period: '2026',
title: 'Travel Website',
org: 'Web Development',
desc:
'Designed and developed a travel platform focused on responsive experience and destination exploration.',
},

{
period: '2024 — 2028',
title: 'Bachelor Of Technology (Data Science)',
org: 'JD College Of Engineering And Management, Nagpur',
desc:
'Learning full stack development, AI systems and building real-world projects.',
},
]

export default function Experience() {
return ( <section
   id="experience"
   className="relative section-pad"
 >


  <motion.p
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="eyebrow mb-4"
  >
    · Journey
  </motion.p>

  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl mb-16"
  >
    My development journey.
  </motion.h2>

  <div className="relative max-w-3xl">

    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-cyan via-signal-violet to-transparent" />

    <div className="space-y-12">

      {TIMELINE.map((item, i) => (

        <motion.div
          key={item.title}
          variants={fadeUp}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative pl-10"
        >

          <motion.span
            className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-ink-900 border-2 border-signal-cyan"
            whileInView={{
              scale: [0.6, 1.15, 1],
            }}
            viewport={viewportOnce}
            transition={{
              duration: 0.5,
            }}
          />

          <p className="font-mono text-xs tracking-widest text-signal-cyan/80">
            {item.period}
          </p>

          <h3 className="font-display text-lg font-medium mt-1">
            {item.title}
          </h3>

          <p className="text-sm text-paper/50">
            {item.org}
          </p>

          <p className="text-sm text-paper/55 mt-2 leading-relaxed">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

)
}
