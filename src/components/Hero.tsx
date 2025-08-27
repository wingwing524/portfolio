import { motion } from 'framer-motion'
import { ArrowDown, Download, Eye } from 'lucide-react'

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
    // Check if CV file exists and download it
    const cvPath = '/cv/Yam_Ho_Wing_CV.pdf'
    
    // Create a temporary link to test if file exists
    fetch(cvPath, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // File exists, proceed with download
          const link = document.createElement('a')
          link.href = cvPath
          link.download = 'Yam_Ho_Wing_CV.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          // File doesn't exist, show message
          alert('CV is currently being updated. Please contact me directly at howingyam0350@gmail.com for my latest resume.')
        }
      })
      .catch(() => {
        // Fallback: redirect to contact section
        alert('CV download temporarily unavailable. Please contact me directly at howingyam0350@gmail.com')
        const element = document.querySelector('#contact')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      })
  }

  return (
    <section id="home" className="h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, #ffffff, #60a5fa, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(96, 165, 250, 0.3)'
            }}
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
            className="w-32 h-1 mx-auto mb-8 rounded-full relative"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              background: 'linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)',
              boxShadow: '0 0 20px rgba(96, 165, 250, 0.4), 0 4px 8px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Animated glow effect */}
            <div 
              className="absolute inset-0 rounded-full opacity-50 animate-pulse"
              style={{
                background: 'linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)',
                filter: 'blur(8px)'
              }}
            />
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-primary-400 font-semibold">Business-minded developer</span> specializing in healthcare solutions and full-stack web applications.
          </motion.p>

          {/* Skills Highlight Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-3 md:p-4 text-center hover:border-gray-500/70 hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="text-xl md:text-2xl mb-2">⚡</div>
              <div className="text-gray-200 font-semibold text-sm md:text-base mb-1">Fast Delivery</div>
              <div className="text-gray-400 text-xs md:text-sm">Quality solutions on time</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-3 md:p-4 text-center hover:border-gray-500/70 hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="text-xl md:text-2xl mb-2">🎯</div>
              <div className="text-gray-200 font-semibold text-sm md:text-base mb-1">Business Focused</div>
              <div className="text-gray-400 text-xs md:text-sm">Solutions that drive results</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-3 md:p-4 text-center hover:border-gray-500/70 hover:bg-gray-800/70 transition-all duration-300 group sm:col-span-2 md:col-span-1">
              <div className="text-xl md:text-2xl mb-2">🏥</div>
              <div className="text-gray-200 font-semibold text-sm md:text-base mb-1">Healthcare Expert</div>
              <div className="text-gray-400 text-xs md:text-sm">Specialized knowledge</div>
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
              className="group relative px-8 py-4 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center overflow-hidden cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Animated background overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a855f7, #f472b6)',
                }}
              />
              
              {/* Button content */}
              <div className="relative z-10 flex items-center gap-2">
                <Eye size={20} />
                <span>View My Work</span>
              </div>
              
              {/* Glow effect */}
              <div 
                className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-xl"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                }}
              />
            </button>
            <button 
              onClick={downloadCV}
              className="group relative px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-primary-400 text-gray-300 hover:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center hover:bg-gray-800/50 cursor-pointer"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
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