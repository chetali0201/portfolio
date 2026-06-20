import { motion } from 'framer-motion'
import { FiBookOpen, FiBriefcase } from 'react-icons/fi'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'
import StatCounter from './StatCounter'

const EDUCATION = [
{
title: 'Bachelor of Technology (Data Science)',
place: 'JD College Of Engineering And Management, Nagpur',
period: '2024 — 2028',
},
]

const EXPERIENCE = [
{
title: 'AI Fraud Detection Dashboard',
place: 'Full Stack + AI Project',
period: '2026',
desc:
'Built a real-time fraud monitoring dashboard with analytics, alerts and role-based access control.',
},
{
title: 'Cafeflix — Cafe UI',
place: 'Frontend Development',
period: '2026',
desc:
'Designed and developed a premium responsive cafe website focused on UI, animations and user experience.',
},
{
title: 'Travel Website',
place: 'Web Development',
period: '2026',
desc:
'Created a responsive travel platform with modern UI, destination showcase and booking-oriented design.',
},
]

const STATS = [
{ label: 'Projects Built', value: 12, suffix: '+' },
{ label: 'Technologies', value: 15, suffix: '+' },
{ label: 'GitHub Contributions', value: 600, suffix: '+' },
]

export default function About() {
return ( <section id="about" className="relative section-pad">

```
  <motion.p
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="eyebrow mb-4"
  >
     · About
  </motion.p>

  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl"
  >
    Building intelligent products with modern design and real-world impact.
  </motion.h2>

  <div className="mt-14 grid lg:grid-cols-[1fr_1fr] gap-12">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >

      <p className="text-paper/65 leading-relaxed text-lg">
        I'm Chetali — a Full Stack Developer focused on creating modern,
        responsive and visually polished web experiences. I enjoy building
        scalable applications, premium dashboards and intelligent systems.
      </p>

      <p className="text-paper/50 leading-relaxed mt-4">
        My recent work includes AI-powered analytics dashboards, UI-driven
        interfaces and full-stack applications that combine performance,
        usability and clean design.
      </p>

      <div className="mt-10 grid grid-cols-3 gap-4">

        {STATS.map((s, i) => (

          <motion.div
            key={s.label}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="glass rounded-2xl p-4 text-center"
          >

            <StatCounter
              value={s.value}
              suffix={s.suffix}
            />

            <p className="text-[11px] mt-1 text-paper/50 leading-tight">
              {s.label}
            </p>

          </motion.div>

        ))}

      </div>

    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-4"
    >

      {EDUCATION.map((e) => (

        <motion.div
          key={e.title}
          variants={fadeUp}
          className="glass rounded-2xl p-6 flex gap-4"
        >

          <div className="w-10 h-10 rounded-xl bg-signal-cyan/10 flex items-center justify-center shrink-0 text-signal-cyan">
            <FiBookOpen size={18}/>
          </div>

          <div>
            <p className="font-medium">{e.title}</p>

            <p className="text-sm text-paper/50">
              {e.place}
            </p>

            <p className="text-xs font-mono text-signal-cyan/70 mt-1">
              {e.period}
            </p>
          </div>

        </motion.div>

      ))}

      {EXPERIENCE.map((e) => (

        <motion.div
          key={e.title}
          variants={fadeUp}
          className="glass rounded-2xl p-6 flex gap-4"
        >

          <div className="w-10 h-10 rounded-xl bg-signal-violet/10 flex items-center justify-center shrink-0 text-signal-violet">
            <FiBriefcase size={18}/>
          </div>

          <div>

            <p className="font-medium">
              {e.title}
            </p>

            <p className="text-sm text-paper/50">
              {e.place}
            </p>

            <p className="text-xs font-mono text-signal-cyan/70 mt-1">
              {e.period}
            </p>

            <p className="text-sm text-paper/55 mt-2 leading-relaxed">
              {e.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </motion.div>

  </div>

</section>


)
}
