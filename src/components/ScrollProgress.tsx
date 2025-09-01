import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    
    // Initial calculation
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-2 bg-gray-900/70 z-50 backdrop-blur-sm">
      {/* Animated progress bar */}
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 origin-left relative overflow-hidden shadow-lg"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-50"></div>
        
        {/* Moving highlight */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white/70 to-transparent"
          animate={{
            x: [0, 30, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  )
}

export default ScrollProgress