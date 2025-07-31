import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
