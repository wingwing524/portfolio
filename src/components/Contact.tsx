import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceID = 'YOUR_SERVICE_ID'
      const templateID = 'YOUR_TEMPLATE_ID'
      const publicKey = 'YOUR_PUBLIC_KEY'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: 'this message is from portfolio: ' + formData.message,
        to_email: 'howingyam0350@gmail.com'
      }

      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
    <section id="contact" className="min-h-screen bg-gray-900 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-[#51a2ff] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Let's Build Something Great Together
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-[#51a2ff] mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 96, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
           
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 flex-1">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-100 mb-2 sm:mb-3">
                    Let's connect and collaborate
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">
                    As a business-minded developer with project management expertise, I'm passionate about creating innovative solutions that drive real business value. I'm interested in:
                  </p>
                  
                  <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-3 md:mb-4">
                    <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>Full-time opportunities in dynamic teams</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>Collaborative development projects</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>Technical discussions and knowledge sharing</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>Networking with like-minded professionals</span>
                    </div>
                  </div>
                  
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-gray-800/70 hover:border-blue-400/30 transition-all duration-300 group"
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-500/20 to-[#51a2ff]/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-[#51a2ff]/30 transition-all duration-300">
                        <info.icon className="text-blue-400 group-hover:text-blue-300" size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-gray-100 font-medium group-hover:text-white transition-colors duration-200 text-sm md:text-base">{info.title}</h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200 text-xs md:text-sm truncate">{info.value}</p>
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
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 md:p-6 lg:p-8">
                <div className="mb-3 md:mb-4 lg:mb-6">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-100 mb-2">Get in touch</h3>
                  <p className="text-gray-400 text-xs md:text-sm">I'd love to hear from you. Let's start a conversation!</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm md:text-base"
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm md:text-base"
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
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm md:text-base"
                    placeholder="Job opportunities, collaboration ideas, tech discussions..."
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
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none text-sm md:text-base"
                    placeholder="Tell me about opportunities, collaborations, or just say hello! I'm always open to interesting conversations."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-[#51a2ff] hover:from-blue-600 hover:to-blue-700 text-white'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white"></div>
                      <span className="text-sm md:text-base">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="md:w-5 md:h-5" />
                      <span className="text-sm md:text-base">Send Message</span>
                    </>
                  )}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm justify-center"
                  >
                    <CheckCircle size={16} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm justify-center"
                  >
                    <AlertCircle size={16} />
                    Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
                
                <p className="text-gray-500 text-xs text-center">
                  I respect your privacy and look forward to connecting with you professionally.
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
              <strong>Yam Ho Wing</strong>
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
