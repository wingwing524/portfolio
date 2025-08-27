import { motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  
  const scaleX = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container') as HTMLElement
      if (scrollContainer) {
        const scrollTop = scrollContainer.scrollTop
        const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight
        const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0
        setScrollProgress(progress)
      }
    }

    const scrollContainer = document.querySelector('.scroll-container')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      
      // Initial calculation
      handleScroll()
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-2 bg-gray-800 z-50 border-b border-gray-600">
      {/* Animated progress bar */}
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 origin-left relative overflow-hidden"
        style={{ scaleX }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.1 }}
      >
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-70"></div>
        
        {/* Moving highlight */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white/60 to-transparent"
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  )
}

export default ScrollProgress