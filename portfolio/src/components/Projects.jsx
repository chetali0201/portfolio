import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { fadeUp, viewportOnce } from '../animations/variants'

const PROJECTS = [
{
title: 'AI Fraud Detection Dashboard',
category: 'AI / ML',
desc:
'AI-powered fraud monitoring dashboard with analytics, alerts and intelligent transaction tracking.',

tech: [
  'React',
  'Node.js',
  'Python',
  'MongoDB',
  'Tailwind',
],

github: 'https://github.com/chetali0201',

demo: '#',

image: 'fraud',

},

{
title: 'Cafeflix — Cafe UI',

category: 'Frontend',

desc:
  'Modern premium cafe website with responsive design and interactive user experience.',

tech: [
  'React',
  'Vite',
  'Tailwind',
  'Framer Motion',
],

github: 'https://github.com/chetali0201',

demo: '#',

image: 'cafe',

},

{
title: 'Travel Website',

category: 'Full Stack',

desc:
  'Responsive travel platform for destination discovery and booking experience.',

tech: [
  'React',
  'Node.js',
  'MongoDB',
  'Tailwind',
],

github: 'https://github.com/chetali0201',

demo: '#',

image: 'travel',

},

{
title: 'Portfolio Website',

category: 'Frontend',

desc:
  'Premium animated developer portfolio built with React and Framer Motion.',

tech: [
  'React',
  'Vite',
  'Tailwind',
],

github: 'https://github.com/chetali0201',

demo: '#',

image: 'portfolio',

},
]

const FILTERS = [
'All',
'AI / ML',
'Full Stack',
'Frontend',
]

function ProjectArt({ variant }) {

const gradients = {

fraud:
  'from-rose-500/30 via-ink-800 to-signal-cyan/20',

cafe:
  'from-orange-400/30 via-ink-800 to-yellow-300/20',

travel:
  'from-sky-400/30 via-ink-800 to-cyan-300/20',

portfolio:
  'from-signal-violet/30 via-ink-800 to-signal-cyan/20',

}

return (

<div
  className={`relative h-44 rounded-xl overflow-hidden bg-gradient-to-br ${gradients[variant]}`}
>

  <div className="absolute inset-0 flex items-center justify-center">

    <span className="font-mono text-paper/40 text-xs tracking-[0.3em]">
      PROJECT
    </span>

  </div>

</div>

)
}

export default function Projects() {

const [filter, setFilter] = useState('All')

const filtered = useMemo(
() =>
filter === 'All'
? PROJECTS
: PROJECTS.filter(
(p) =>
p.category === filter
),

[filter]


)

return (

<section
  id="projects"
  className="relative section-pad"
>

  <motion.p
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="eyebrow mb-4"
  >
     · Featured Projects
  </motion.p>

  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10"
  >
    Selected work and creative builds.
  </motion.h2>

  <div className="flex flex-wrap gap-2 mb-10">

    {
      FILTERS.map((f) => (

        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-full ${
            filter === f
              ? 'bg-signal-cyan text-black'
              : 'glass'
          }`}
        >

          {f}

        </button>

      ))
    }

  </div>

  <motion.div
    layout
    className="grid sm:grid-cols-2 gap-6"
  >

    <AnimatePresence>

      {
        filtered.map((p) => (

          <motion.div
            key={p.title}
            layout
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
            }}

            className="glass rounded-2xl p-5"
          >

            <ProjectArt
              variant={p.image}
            />

            <h3 className="mt-5 text-xl font-semibold">
              {p.title}
            </h3>

            <p className="mt-3 text-paper/60">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">

              {
                p.tech.map((t) => (

                  <span
                    key={t}
                    className="px-2 py-1 rounded-full bg-white/5 text-xs"
                  >

                    {t}

                  </span>

                ))
              }

            </div>

            <div className="flex gap-4 mt-5">

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >

                <FiGithub />

              </a>

              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
              >

                <FiExternalLink />

              </a>

            </div>

          </motion.div>

        ))
      }

    </AnimatePresence>

  </motion.div>

</section>

)
}
