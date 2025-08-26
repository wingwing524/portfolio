import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code, Users, Briefcase, Globe, Phone, Calendar, Award, MapPin } from 'lucide-react'
import ProjectDetail from './ProjectDetail'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projectsData = [
    {
      id: 'lis',
      title: 'Laboratory Information System',
      subtitle: 'Healthcare Technology',
      icon: '🏥',
      description: 'Comprehensive LIS with HL7 API integrations for healthcare analyzers. Streamlined workflows and improved data accuracy.',
      fullDescription: 'Developed a comprehensive Laboratory Information System (LIS) from the ground up for healthcare facilities. This full-stack application features seamless HL7 API integrations with various healthcare analyzers, enabling real-time data exchange and automated result processing. The system streamlined laboratory workflows, reduced manual errors, and significantly improved data accuracy and reporting capabilities.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'HL7 FHIR', 'Docker', 'Redis', 'TypeScript', 'Express.js'],
      features: [
        'Real-time HL7 integration with medical devices',
        'Automated sample tracking and result processing',
        'Comprehensive reporting and analytics dashboard',
        'Role-based access control and audit trails',
        'Barcode scanning for sample identification',
        'Integration with hospital management systems'
      ],
      challenges: [
        'Implementing complex HL7 message parsing and validation',
        'Ensuring HIPAA compliance and data security',
        'Managing real-time data synchronization across multiple analyzers',
        'Creating a user-friendly interface for diverse user roles'
      ],
      outcomes: [
        'Reduced manual data entry by 85%',
        'Improved result turnaround time by 60%',
        'Achieved 99.9% data accuracy',
        'Successfully deployed in 3 healthcare facilities'
      ],
      duration: '8 months',
      teamSize: '4 developers',
      role: 'Lead Full Stack Developer'
    },
    {
      id: 'iot-inventory',
      title: 'IoT Inventory Management',
      subtitle: 'RFID Technology',
      icon: '📱',
      description: 'RFID-based system for reagents, waste, and sample management. Collaborated with sensor manufacturers for scalable solutions.',
      fullDescription: 'Designed and implemented an innovative IoT-based inventory management system using RFID technology for comprehensive tracking of laboratory reagents, waste materials, and samples. This project involved close collaboration with RFID sensor manufacturers to create a scalable, real-time monitoring solution that provides automated inventory tracking, expiration alerts, and usage analytics.',
      technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'RFID Sensors', 'MQTT', 'Docker', 'AWS IoT'],
      features: [
        'Real-time RFID-based item tracking',
        'Automated inventory level monitoring',
        'Expiration date alerts and notifications',
        'Usage analytics and reporting',
        'Mobile app for inventory management',
        'Integration with procurement systems'
      ],
      challenges: [
        'Optimizing RFID reader performance in laboratory environments',
        'Developing reliable sensor communication protocols',
        'Creating scalable data processing for high-volume tracking',
        'Ensuring system reliability in critical environments'
      ],
      outcomes: [
        'Reduced inventory discrepancies by 95%',
        'Decreased manual counting time by 80%',
        'Prevented $50k+ in expired reagent waste',
        'Improved compliance with regulatory requirements'
      ],
      duration: '6 months',
      teamSize: '3 developers',
      role: 'IoT Solutions Architect'
    }
  ]

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

          {/* Key Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-100">Notable Projects</h3>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div 
                className="bg-gradient-to-br from-primary-500/5 to-primary-600/10 border border-primary-400/20 p-4 md:p-6 rounded-xl backdrop-blur-sm cursor-pointer hover:border-primary-400/40 hover:from-primary-500/10 hover:to-primary-600/20 transition-all duration-300 group"
                onClick={() => setSelectedProject(projectsData[0])}
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-400/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg md:text-2xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="text-primary-400 font-bold text-base md:text-lg group-hover:text-primary-300 transition-colors">Laboratory Information System</h4>
                    <p className="text-gray-400 text-xs md:text-sm">Healthcare Technology</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3">
                  Comprehensive LIS with HL7 API integrations for healthcare analyzers. Streamlined workflows and improved data accuracy.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                  <span className="px-2 py-1 bg-primary-400/10 text-primary-400 text-xs rounded-full">HL7</span>
                  <span className="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full">Full-Stack</span>
                  <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full">Healthcare</span>
                </div>
                <p className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors">Click to view details →</p>
              </div>

              <div 
                className="bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-400/20 p-4 md:p-6 rounded-xl backdrop-blur-sm cursor-pointer hover:border-blue-400/40 hover:from-blue-500/10 hover:to-blue-600/20 transition-all duration-300 group"
                onClick={() => setSelectedProject(projectsData[1])}
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg md:text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-bold text-base md:text-lg group-hover:text-blue-300 transition-colors">IoT Inventory Management</h4>
                    <p className="text-gray-400 text-xs md:text-sm">RFID Technology</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3">
                  RFID-based system for reagents, waste, and sample management. Collaborated with sensor manufacturers for scalable solutions.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full">RFID</span>
                  <span className="px-2 py-1 bg-purple-400/10 text-purple-400 text-xs rounded-full">IoT</span>
                  <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full">Inventory</span>
                  <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full">Full-Stack</span>
                </div>
                <p className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors">Click to view details →</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-100">Certifications & Credentials</h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-800/50 border border-gray-600/50 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-400" size={32} />
                </div>
                <h4 className="text-blue-400 font-bold text-lg mb-2">AWS Cloud Practitioner</h4>
                <p className="text-gray-300 text-sm">Amazon Web Services</p>
                <p className="text-gray-400 text-xs mt-2">Cloud infrastructure and services</p>
              </div>

              <div className="bg-gray-800/50 border border-gray-600/50 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-400" size={32} />
                </div>
                <h4 className="text-blue-400 font-bold text-lg mb-2">Google Project Management</h4>
                <p className="text-gray-300 text-sm">Google Professional Certificate</p>
                <p className="text-gray-400 text-xs mt-2">Agile methodology and project delivery</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm italic">Additional certifications coming soon...</p>
            </div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-100">Professional Highlights</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              <div className="text-center group cursor-pointer">
                <div className="bg-primary-500/10 border border-primary-400/30 p-3 md:p-6 rounded-xl group-hover:border-primary-400/50 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1 md:mb-2">2+</div>
                  <div className="text-gray-300 text-xs md:text-sm font-medium">Years Experience</div>
                  <div className="text-gray-400 text-xs mt-1 hidden md:block">Healthcare & IoT Systems</div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="bg-blue-500/10 border border-blue-400/30 p-3 md:p-6 rounded-xl group-hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 md:mb-2">50+</div>
                  <div className="text-gray-300 text-xs md:text-sm font-medium">Projects</div>
                  <div className="text-gray-400 text-xs mt-1 hidden md:block">LIS, IoT & Business Solutions</div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="bg-green-500/10 border border-green-400/30 p-3 md:p-6 rounded-xl group-hover:border-green-400/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-1 md:mb-2">
                    <MapPin className="text-green-400 mr-1" size={16} />
                    <div className="text-xl md:text-2xl font-bold text-green-400">3</div>
                  </div>
                  <div className="text-gray-300 text-xs md:text-sm font-medium">Languages</div>
                  <div className="text-gray-400 text-xs mt-1 hidden md:block">English, Mandarin, Cantonese</div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="bg-purple-500/10 border border-purple-400/30 p-3 md:p-6 rounded-xl group-hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1 md:mb-2">1M</div>
                  <div className="text-gray-300 text-xs md:text-sm font-medium">Notice Period</div>
                  <div className="text-gray-400 text-xs mt-1 hidden md:block">Available for Opportunities</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-xl text-gray-300 mb-6">
              Ready to discuss your next project or business opportunity?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:howingyam0350@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar size={20} />
                Schedule a Consultation
              </a>
              <a 
                href="tel:67973767"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-600 hover:border-primary-400 text-gray-300 hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-800/50"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
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
