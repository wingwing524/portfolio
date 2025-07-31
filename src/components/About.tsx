import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Users, Briefcase, Globe, Phone, Calendar, Award, MapPin, Languages } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="section-padding bg-gray-800 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary-400 to-blue-600 mx-auto rounded-full"
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
              
              {/* Professional badges */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-xs font-medium">Full Stack Developer</span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">Coordinate Project</span>
                <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-medium">Business Consultant</span>
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-medium">Team Leader</span>
              </div>
              
              {/* Languages */}
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <Languages size={16} />
                  <span>🇬🇧 English • 🇨🇳 Mandarin • 🇭🇰 Cantonese</span>
                </div>
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
                  Beyond Code: <span className="text-primary-400">Business-Minded Developer</span>
                </h3>
                
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I'm <span className="text-primary-400 font-semibold">passionate about bridging technology and business</span>. 
                    While I excel at coding, my true strength lies in <span className="text-blue-400 font-medium">understanding business needs</span> 
                    and <span className="text-green-400 font-medium">translating them into technical solutions</span>.
                  </p>
                  
                  <p>
                    My experience includes developing a comprehensive <span className="text-primary-400 font-semibold">Laboratory Information System (LIS)</span> 
                    for healthcare facilities, featuring full-stack architecture and <span className="text-blue-400 font-medium">HL7 API integrations</span> 
                    with various healthcare analyzers. I also participated in <span className="text-green-400 font-medium">evaluating and submitting tenders</span> 
                    for Hong Kong Metropolitan University.
                  </p>
                  
                  <p>
                    Additionally, I've designed an innovative <span className="text-purple-400 font-medium">IoT-based inventory management system</span> 
                    using RFID technology for reagents, waste, and sample management. This involved <span className="text-yellow-400 font-medium">engaging with RFID sensor manufacturers</span> 
                    and architecting scalable system solutions. I regularly travel to <span className="text-pink-400 font-medium">Mainland China and Macau</span> 
                    for vendor meetings and client support.
                  </p>
                  
                  <p>
                    As a <span className="text-indigo-400 font-medium">team leader and mentor</span>, I've guided fresh graduate programmers, 
                    ensuring seamless communication between technical teams, management, and clients. I don't just build applications—I build 
                    <span className="text-blue-400 font-medium"> comprehensive business solutions</span>.
                  </p>
                </div>
              </div>

              {/* Professional Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-gradient-to-br from-primary-500/5 to-primary-600/10 border border-primary-400/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Code className="text-primary-400" size={20} />
                    <h4 className="text-primary-400 font-semibold">Healthcare Systems</h4>
                  </div>
                  <p className="text-gray-300 text-sm">LIS development, HL7 integration, medical device connectivity</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-400/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="text-blue-400" size={20} />
                    <h4 className="text-blue-400 font-semibold">Team Leadership</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Mentoring fresh graduates, team coordination, project delivery</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/5 to-green-600/10 border border-green-400/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-green-400" size={20} />
                    <h4 className="text-green-400 font-semibold">IoT Solutions</h4>
                  </div>
                  <p className="text-gray-300 text-sm">RFID systems, inventory management, sensor integration</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/5 to-purple-600/10 border border-purple-400/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="text-purple-400" size={20} />
                    <h4 className="text-purple-400 font-semibold">Business Development</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Tender evaluation, vendor relations, international partnerships</p>
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
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-500/5 to-primary-600/10 border border-primary-400/20 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-400/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="text-primary-400 font-bold text-lg">Laboratory Information System</h4>
                    <p className="text-gray-400 text-sm">Healthcare Technology</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Developed a comprehensive LIS with full-stack architecture, featuring HL7 API integrations 
                  with various healthcare analyzers. Streamlined laboratory workflows and improved data accuracy.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-primary-400/10 text-primary-400 text-xs rounded-full">HL7 Integration</span>
                  <span className="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full">Full-Stack</span>
                  <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full">Healthcare</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-400/20 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-bold text-lg">IoT Inventory Management</h4>
                    <p className="text-gray-400 text-sm">RFID Technology</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Designed an innovative RFID-based system for reagents, waste, and sample management. 
                  Collaborated with sensor manufacturers to create scalable IoT solutions.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full">RFID</span>
                  <span className="px-2 py-1 bg-purple-400/10 text-purple-400 text-xs rounded-full">IoT</span>
                  <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full">Inventory</span>
                  <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full">Full-Stack</span>

                </div>
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
              <div className="bg-gradient-to-br from-orange-500/5 to-orange-600/10 border border-orange-400/20 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-orange-400" size={32} />
                </div>
                <h4 className="text-orange-400 font-bold text-lg mb-2">AWS Cloud Practitioner</h4>
                <p className="text-gray-300 text-sm">Amazon Web Services</p>
                <p className="text-gray-400 text-xs mt-2">Cloud infrastructure and services</p>
              </div>

              <div className="bg-gradient-to-br from-green-500/5 to-green-600/10 border border-green-400/20 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-green-400" size={32} />
                </div>
                <h4 className="text-green-400 font-bold text-lg mb-2">Google Project Management</h4>
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
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group cursor-pointer">
                <div className="bg-primary-500/10 border border-primary-400/30 p-6 rounded-xl group-hover:border-primary-400/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary-400 mb-2">2+</div>
                  <div className="text-gray-300 text-sm font-medium">Years Experience</div>
                  <div className="text-gray-400 text-xs mt-1">Healthcare & IoT Systems</div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="bg-blue-500/10 border border-blue-400/30 p-6 rounded-xl group-hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm font-medium">Projects Delivered</div>
                  <div className="text-gray-400 text-xs mt-1">LIS, IoT & Business Solutions</div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="bg-green-500/10 border border-green-400/30 p-6 rounded-xl group-hover:border-green-400/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-2">
                    <MapPin className="text-green-400 mr-1" size={20} />
                    <div className="text-2xl font-bold text-green-400">3</div>
                  </div>
                  <div className="text-gray-300 text-sm font-medium">Languages</div>
                  <div className="text-gray-400 text-xs mt-1">English, Mandarin, Cantonese</div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="bg-purple-500/10 border border-purple-400/30 p-6 rounded-xl group-hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1M</div>
                  <div className="text-gray-300 text-sm font-medium">Notice Period</div>
                  <div className="text-gray-400 text-xs mt-1">Available for Opportunities</div>
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
    </section>
  )
}

export default About
