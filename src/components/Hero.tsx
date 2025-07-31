import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Phone, Download, Eye } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // You can replace this with the actual path to your CV
    const link = document.createElement('a')
    link.href = '/cv/Yam_Ho_Wing_CV.pdf' // Update this path when you add your CV
    link.download = 'Yam_Ho_Wing_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Welcome Badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="inline-block px-6 py-3 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4 backdrop-blur-sm">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.h1 
            className="text-xl md:text-2xl text-blue-300 mb-2 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello! I'm
          </motion.h1>
          
          {/* Main Name */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-primary-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Yam Ho Wing, Isaac
          </motion.h1>
          
          {/* Job Title */}
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>
          
          {/* Decorative Line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-400 to-blue-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-primary-400 font-semibold">Experienced Full Stack Developer</span> with expertise in the complete software development lifecycle. 
            I specialize in building professional web applications, particularly in the healthcare industry, 
            with strong skills in system architecture design, database schema development, and client communication.
          </motion.p>

          {/* Skills Highlight Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center hover:border-primary-400/50 transition-all duration-300">
              <div className="text-primary-400 font-bold text-lg">Full Lifecycle</div>
              <div className="text-gray-400">Requirements to Deployment</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center hover:border-blue-400/50 transition-all duration-300">
              <div className="text-blue-400 font-bold text-lg">Client Focus</div>
              <div className="text-gray-400">Meeting & Project Management</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center hover:border-purple-400/50 transition-all duration-300">
              <div className="text-purple-400 font-bold text-lg">Healthcare</div>
              <div className="text-gray-400">Professional Applications</div>
            </div>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center"
            >
              <Eye size={20} />
              <span>View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={downloadCV}
              className="group relative px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-primary-400 text-gray-300 hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center hover:bg-gray-800/50"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center items-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm hidden sm:block">Connect with me:</span>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/wingwing524" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-primary-400/50 rounded-lg text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                  title="GitHub Profile"
                >
                  <Github size={24} />
                  <div className="absolute inset-0 bg-primary-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ho-wing-yam-isaac-191961234/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-blue-400/50 rounded-lg text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                  <div className="absolute inset-0 bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="mailto:howingyam0350@gmail.com" 
                  className="group relative p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-green-400/50 rounded-lg text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110"
                  title="Send Email - Recommended to use Outlook"
                >
                  <Mail size={24} />
                  <div className="absolute inset-0 bg-green-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="tel:67973767" 
                  className="group relative p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-purple-400/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                  title="Call: 67973767"
                >
                  <Phone size={24} />
                  <div className="absolute inset-0 bg-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-400 transition-colors duration-200 group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        title="Scroll to About section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll Down</span>
          <ArrowDown size={24} />
        </div>
      </motion.button>

      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient orb */}
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        
        {/* Secondary gradient orb */}
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Accent orb */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/20 rounded-full animate-bounce"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero