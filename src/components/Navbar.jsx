import { useState } from 'react'
import { Menu, BookOpen, Search } from 'lucide-react'

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/90 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        <button
          className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
            <BookOpen className="text-white" size={18} />
          </div>
          <span className="text-white font-semibold tracking-tight">StorySphere</span>
        </div>

        <nav className={`ml-auto sm:ml-8 ${open ? 'block' : 'hidden'} sm:block`}>
          <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-slate-300">
            <li className="hover:text-white cursor-pointer">Discover</li>
            <li className="hover:text-white cursor-pointer">Genres</li>
            <li className="hover:text-white cursor-pointer">Write</li>
          </ul>
        </nav>

        <form onSubmit={handleSubmit} className="hidden md:flex items-center gap-2 ml-auto bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
          <Search size={16} className="text-slate-300" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, authors..."
            className="bg-transparent placeholder:text-slate-400 text-slate-100 focus:outline-none text-sm w-56"
          />
        </form>
      </div>
    </header>
  )
}
