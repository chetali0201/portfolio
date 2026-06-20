import { motion } from 'framer-motion'

import {
FiCode,
FiLayout,
FiCpu,
FiGlobe,
} from 'react-icons/fi'

import {
fadeUp,
staggerContainer,
viewportOnce,
} from '../animations/variants'

const SERVICES = [

{
title: 'Full Stack Development',

icon: FiCode,

desc:
  'Building responsive websites and scalable web applications using modern frontend and backend technologies.',


},

{
title: 'Dashboard UI Design',

icon: FiLayout,

desc:
  'Creating clean dashboards with charts, analytics and modern user experiences.',


},

{
title: 'AI & Smart Solutions',

icon: FiCpu,

desc:
  'Integrating AI workflows, automation and intelligent features into web applications.',


},

{
title: 'Website Development',

icon: FiGlobe,

desc:
  'Designing visually polished websites focused on speed, usability and responsiveness.',

},

]

export default function Services() {

return (

<section
  id="services"
  className="relative section-pad"
>

  <motion.p
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="eyebrow mb-4"
  >
    · Services
  </motion.p>

  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl"
  >
    Services I provide.
  </motion.h2>

  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
  >

    {
      SERVICES.map((service) => {

        const Icon =
          service.icon

        return (

          <motion.div
            key={service.title}
            variants={fadeUp}
            whileHover={{
              y: -8,
            }}
            className="glass rounded-2xl p-6 hover:shadow-glow transition-shadow"
          >

            <div className="w-12 h-12 rounded-xl bg-signal-cyan/10 text-signal-cyan flex items-center justify-center mb-6">

              <Icon size={22} />

            </div>

            <h3 className="font-display text-lg font-semibold mb-3">

              {service.title}

            </h3>

            <p className="text-sm text-paper/55 leading-relaxed">

              {service.desc}

            </p>

          </motion.div>

        )

      })
    }

  </motion.div>

</section>

)
}
