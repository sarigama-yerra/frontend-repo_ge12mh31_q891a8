import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StoryGrid from './components/StoryGrid'
import CTA from './components/CTA'

function App() {
  const handleSearch = (q) => {
    // For now this just logs. Later we can connect to backend search.
    console.log('Searching for', q)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar onSearch={handleSearch} />
      <main>
        <Hero onGetStarted={() => window.scrollTo({ top: 600, behavior: 'smooth' })} />
        <StoryGrid />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-slate-400">
        © {new Date().getFullYear()} StorySphere · Crafted for readers and writers
      </footer>
    </div>
  )
}

export default App
