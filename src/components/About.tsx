import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code, Users, Briefcase, Globe } from 'lucide-react'
import ProjectDetail from './ProjectDetail'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedProject, setSelectedProject] = useState<any>(null)

  return (
    <section id="about" className="h-screen flex items-center justify-center bg-gray-800 overflow-y-auto">
      <div className="container mx-auto px-6 max-w-7xl py-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-400 mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 96, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500/20 to-blue-600/20 rounded-2xl relative overflow-hidden border border-primary-400/20 backdrop-blur-sm">
                {/* Placeholder for profile image with enhanced styling */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center text-gray-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-blue-600/10"></div>
                  <span className="text-8xl relative z-10">👨‍💼</span>
                </div>
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400/30 rounded-full blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400/20 rounded-full blur-sm"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                  Business-Minded Developer 👋
                </h3>
                
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I'm a <span className="text-blue-400 font-semibold">Full Stack Developer</span> who loves turning 
                    complex business problems into elegant digital solutions. With 2+ years of experience, 
                    I specialize in healthcare technology and IoT systems.
                  </p>
                  
                  <p>
                    What makes me different? I don't just write code—I understand business. 
                    Whether it's building a Laboratory Information System for hospitals or designing 
                    RFID inventory solutions, I bridge the gap between <span className="text-blue-400 font-medium">technology and real-world impact</span>.
                  </p>
                  
                  <p>
                    When I'm not coding, you'll find me mentoring junior developers, traveling to client meetings across 
                    Asia, or exploring the latest tech trends. <span className="text-blue-400 font-medium">Let's build something amazing together!</span>
                  </p>
                </div>
              </div>

              {/* Professional Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6">
                <div className="bg-gradient-to-br from-primary-500/5 to-primary-600/10 border border-primary-400/20 p-3 md:p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="text-primary-400" size={16} />
                    <h4 className="text-primary-400 font-semibold text-sm md:text-base">Healthcare Systems</h4>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm">LIS development, HL7 integration</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-400/20 p-3 md:p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-blue-400" size={16} />
                    <h4 className="text-blue-400 font-semibold text-sm md:text-base">Team Leadership</h4>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm">Mentoring, coordination, delivery</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/5 to-green-600/10 border border-green-400/20 p-3 md:p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-green-400" size={16} />
                    <h4 className="text-green-400 font-semibold text-sm md:text-base">IoT Solutions</h4>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm">RFID systems, inventory management</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/5 to-purple-600/10 border border-purple-400/20 p-3 md:p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="text-purple-400" size={16} />
                    <h4 className="text-purple-400 font-semibold text-sm md:text-base">Business Development</h4>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm">Tender evaluation, vendor relations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetail 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}

export default About
