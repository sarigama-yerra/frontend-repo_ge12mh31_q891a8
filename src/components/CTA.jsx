export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600 to-blue-600 p-8 sm:p-10 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.15),transparent_40%)]" />
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold tracking-tight">Start your story today</h3>
          <p className="mt-1 text-white/90 max-w-prose">Join a community of readers and writers sharing original short fiction and serials.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">Create account</button>
            <button className="px-4 py-2 rounded-lg border border-white/40">Browse as guest</button>
          </div>
        </div>
      </div>
    </section>
  )
}
