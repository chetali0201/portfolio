import { motion } from 'framer-motion'

import {
FiCode,
FiServer,
FiDatabase,
FiCpu,
FiTool,
} from 'react-icons/fi'

import {
fadeUp,
staggerContainer,
viewportOnce,
} from '../animations/variants'

const CATEGORIES = [
{
title: 'Frontend Development',
icon: FiCode,
color: 'text-signal-cyan',
bg: 'bg-signal-cyan/10',

skills: [
  'React',
  'Vite',
  'JavaScript',
  'Tailwind CSS',
  'Framer Motion',
  'Responsive UI',
],

},

{
title: 'Backend Development',
icon: FiServer,
color: 'text-signal-violet',
bg: 'bg-signal-violet/10',

skills: [
  'Node.js',
  'Express.js',
  'REST APIs',
  'Authentication',
  'API Integration',
],

},

{
title: 'Database & Cloud',
icon: FiDatabase,
color: 'text-signal-amber',
bg: 'bg-signal-amber/10',

skills: [
  'MongoDB',
  'Firebase',
  'Deployment',
],

},

{
title: 'AI & Analytics',
icon: FiCpu,
color: 'text-signal-cyan',
bg: 'bg-signal-cyan/10',

skills: [
  'Python',
  'Machine Learning',
  'Fraud Detection',
  'Dashboard Analytics',
  'Data Processing',
],

},

{
title: 'Tools & Workflow',
icon: FiTool,
color: 'text-signal-violet',
bg: 'bg-signal-violet/10',

skills: [
  'Git',
  'GitHub',
  'VS Code',
  'Vercel',
  'Render',
],


},
]

export default function Skills() {
return ( <section id="skills" className="relative section-pad">

```
  <motion.p
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="eyebrow mb-4"
  >
    · Skills
  </motion.p>

  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl"
  >
    Technologies I use to design, build and launch products.
  </motion.h2>

  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
  >

    {CATEGORIES.map((cat) => {
      const Icon = cat.icon

      return (

        <motion.div
          key={cat.title}
          variants={fadeUp}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="glass rounded-3xl p-7 hover:shadow-glow transition-all"
        >

          <div
            className={`w-12 h-12 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center mb-6`}
          >
            <Icon size={22} />
          </div>

          <h3 className="font-display text-xl mb-5">
            {cat.title}
          </h3>

          <div className="flex flex-wrap gap-2">

            {cat.skills.map((skill) => (

              <span
                key={skill}
                className="px-3 py-2 rounded-full text-xs font-medium border border-white/10 text-paper/70 hover:border-signal-cyan/40 transition-all"
              >
                {skill}
              </span>

            ))}

          </div>

        </motion.div>

      )
    })}

  </motion.div>

</section>

)
}
