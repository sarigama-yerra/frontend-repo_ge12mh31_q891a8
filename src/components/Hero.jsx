import { motion } from 'framer-motion'

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_40%)]" />
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Discover, read, and write beautiful stories
          </motion.h1>
          <p className="mt-4 text-slate-300 text-lg max-w-prose">
            Explore a curated library of short fiction, poems, and serialized adventures. Save favorites, follow authors, and craft your own tales.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onGetStarted} className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20">
              Start Reading
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10">
              Create a Story
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-[3/4] rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden">
                <div className="h-2/3 bg-[linear-gradient(135deg,#60a5fa20,#6366f120)]" />
                <div className="p-3">
                  <div className="h-3 w-2/3 bg-white/10 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-white/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
