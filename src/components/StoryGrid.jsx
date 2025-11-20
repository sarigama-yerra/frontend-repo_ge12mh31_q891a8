import { Bookmark, Heart } from 'lucide-react'

const demoStories = [
  { id: '1', title: 'The Last Ember', author: 'Aria Solis', tag: 'Fantasy', likes: 324 },
  { id: '2', title: 'City of Quiet Thunder', author: 'J. Kade', tag: 'Sci‑Fi', likes: 189 },
  { id: '3', title: 'Letters to the Sea', author: 'Mina R.', tag: 'Drama', likes: 412 },
  { id: '4', title: 'Clockwork Garden', author: 'Theo Vale', tag: 'Steampunk', likes: 96 },
  { id: '5', title: 'After the First Snow', author: 'Sora Lin', tag: 'Slice of Life', likes: 233 },
  { id: '6', title: 'Echoes in Marble', author: 'L. Voss', tag: 'Mystery', likes: 271 },
]

export default function StoryGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-xl text-white/90 font-semibold">Trending stories</h2>
        <button className="text-sm text-slate-300 hover:text-white">View all</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {demoStories.map((s, idx) => (
          <article key={s.id} className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900">
              <div className={`h-2/3 bg-[linear-gradient(135deg,#60a5fa20,#6366f120)]`} />
              <div className="p-2.5">
                <div className="text-[10px] uppercase tracking-wide text-blue-300/80">{s.tag}</div>
                <h3 className="text-sm text-white mt-0.5 line-clamp-1">{s.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-1">by {s.author}</p>
              </div>
            </div>
            <div className="absolute top-2 right-2 flex gap-1">
              <button className="p-1.5 rounded-md bg-black/40 text-white/90 hover:bg-black/60">
                <Bookmark size={14} />
              </button>
              <div className="px-1.5 py-1 rounded-md bg-black/40 text-pink-300 flex items-center gap-1">
                <Heart size={12} fill="currentColor" />
                <span className="text-[10px]">{s.likes}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
