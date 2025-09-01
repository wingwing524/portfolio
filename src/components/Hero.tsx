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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-center z-10 max-w-5xl py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Welcome Badge */}
          <motion.div
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.h1 
            className="text-lg sm:text-xl md:text-2xl text-blue-300 mb-2 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello! I'm
          </motion.h1>
          
          {/* Main Name */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 leading-tight"
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer | Technical Engineer
          </motion.h2>
          
          {/* Decorative Line */}
          <motion.div
            className="w-20 sm:w-24 md:w-32 h-1 mx-auto mb-4 sm:mb-6 rounded-full relative"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              background: 'linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)',
              boxShadow: '0 0 20px rgba(96, 165, 250, 0.4), 0 4px 8px rgba(0, 0, 0, 0.2)'
            }}
          />
          
          {/* Description */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-primary-400 font-semibold">Business-minded developer</span> specializing in healthcare solutions and full-stack web applications.
          </motion.p>

          {/* Skills Highlight Cards - Smaller and more compact */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-2 sm:p-3 text-center hover:border-gray-500/70 hover:bg-gray-800/70 transition-all duration-300">
              <div className="text-base sm:text-lg mb-1">⚡</div>
              <div className="text-gray-200 font-semibold text-xs sm:text-sm mb-1">Fast Delivery</div>
              <div className="text-gray-400 text-xs">Quality solutions</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-2 sm:p-3 text-center hover:border-gray-500/70 hover:bg-gray-800/70 transition-all duration-300">
              <div className="text-base sm:text-lg mb-1">🎯</div>
              <div className="text-gray-200 font-semibold text-xs sm:text-sm mb-1">Business Focused</div>
              <div className="text-gray-400 text-xs">Drive results</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-2 sm:p-3 text-center hover:border-gray-500/70 hover:bg-gray-800/70 transition-all duration-300">
              <div className="text-base sm:text-lg mb-1">🏥</div>
              <div className="text-gray-200 font-semibold text-xs sm:text-sm mb-1">Healthcare Expert</div>
              <div className="text-gray-400 text-xs">Specialized knowledge</div>
            </div>
          </motion.div>
          
          {/* Action Buttons - Smaller */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              onClick={scrollToProjects}
              className="group relative px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm min-w-[140px] sm:min-w-[160px] justify-center overflow-hidden cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a855f7, #f472b6)',
                }}
              />
              <div className="relative z-10 flex items-center gap-2">
                <Eye size={16} />
                <span>View My Work</span>
              </div>
            </button>
            <button 
              onClick={downloadCV}
              className="group relative px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-gray-600 hover:border-primary-400 text-gray-300 hover:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm min-w-[140px] sm:min-w-[160px] justify-center hover:bg-gray-800/50 cursor-pointer"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - Smaller */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-400 transition-colors duration-200 group"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        title="Scroll to About section"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll Down</span>
          <ArrowDown size={20} />
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