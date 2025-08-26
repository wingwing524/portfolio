import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import FloatingSocial from './components/FloatingSocial'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ScrollProgress />
      <Navbar />
      <main className="scroll-container snap-container overflow-y-scroll h-screen">
        <section className="snap-section w-full h-screen">
          <Hero />
        </section>
        <section className="snap-section w-full h-screen">
          <About />
        </section>
        <section className="snap-section w-full h-screen">
          <Skills />
        </section>
        <section className="snap-section w-full h-screen">
          <Projects />
        </section>
        <section className="snap-section w-full h-screen">
          <Contact />
        </section>
      </main>
      <FloatingSocial />
    </div>
  )
}

export default App
