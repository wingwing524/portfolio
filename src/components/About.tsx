import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="section-padding bg-gray-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary-400">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl relative overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
                  <span className="text-6xl">👤</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">
                Hi, I'm a passionate developer
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
                With expertise in modern web technologies, I enjoy building applications that provide excellent user experiences.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-primary-400 font-semibold mb-2">Experience</h4>
                  <p className="text-gray-300">3+ Years</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-primary-400 font-semibold mb-2">Projects</h4>
                  <p className="text-gray-300">50+ Completed</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-primary-400 font-semibold mb-2">Location</h4>
                  <p className="text-gray-300">Your City</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-primary-400 font-semibold mb-2">Availability</h4>
                  <p className="text-gray-300">Open to Work</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
