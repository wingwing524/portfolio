import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "howingyam0350@gmail.com",
      href: "mailto:howingyam0350@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+852 6797 3767",
      href: "tel:+85267973767"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hong Kong SAR",
      href: "#"
    }
  ]

  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-gray-900 overflow-y-auto">
      <div className="container mx-auto px-6 max-w-7xl py-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Let's Build Something Great Together
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary-400 to-blue-600 mx-auto rounded-full mb-6"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 96, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-gray-300 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ready to transform your business ideas into powerful digital solutions? Let's discuss your project.
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                    Ready to discuss your project?
                  </h3>
                  <p className="text-gray-400 text-lg mb-6">
                    As a business-minded developer with project management expertise, I help organizations bridge the gap between technical solutions and business objectives. Whether you need:
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span>Custom web applications with business impact</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span>System integrations and API development</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span>Project consultation and technical leadership</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span>Process optimization and workflow automation</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400">
                    Let's turn your vision into reality. I'm here to listen, advise, and deliver.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-gray-800/70 hover:border-primary-400/30 transition-all duration-300 group"
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-3 bg-gradient-to-r from-primary-500/20 to-blue-600/20 rounded-lg group-hover:from-primary-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                        <info.icon className="text-primary-400 group-hover:text-primary-300" size={24} />
                      </div>
                      <div>
                        <h4 className="text-gray-100 font-medium group-hover:text-white transition-colors duration-200">{info.title}</h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Send me a message</h3>
                  <p className="text-gray-400 text-sm">I typically respond within 24 hours</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                    placeholder="Project consultation, development work, collaboration..."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, timeline, budget, and specific requirements. The more details you provide, the better I can help you."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
                
                <p className="text-gray-500 text-xs text-center">
                  By sending this message, you agree to discuss your project requirements. I respect your privacy and will not share your information.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-gray-700/50"
        >
          <div className="mb-4">
            <p className="text-gray-300 mb-2">
              <strong>Yam Ho Wing</strong> - Business-Minded Developer
            </p>
            <p className="text-gray-400 text-sm">
              Bridging technology and business objectives through innovative solutions
            </p>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Yam Ho Wing Portfolio. Built with React, TypeScript & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
