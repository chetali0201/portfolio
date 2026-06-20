import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.div
            className="font-mono text-sm tracking-[0.3em] text-signal-cyan/70 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            INITIALIZING PORTFOLIO
          </motion.div>
          <div className="relative h-px w-56 bg-white/10 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-signal-cyan to-signal-violet"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />
          </div>
          <motion.div
            className="font-display text-2xl mt-8 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            CK<span className="text-signal-cyan">.</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
