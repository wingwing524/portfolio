import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react'

const FloatingSocial = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/wingwing524",
      label: "GitHub",
      color: "hover:bg-gray-700"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/howing",
      label: "LinkedIn", 
      color: "hover:bg-blue-600"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:howingyam0350@gmail.com",
      label: "Email",
      color: "hover:bg-red-600"
    },
    {
      icon: <Phone size={20} />,
      href: "tel:67973767",
      label: "Phone",
      color: "hover:bg-green-600"
    },
    {
      icon: <MessageCircle size={20} />,
      href: "https://wa.me/67973767",
      label: "WhatsApp",
      color: "hover:bg-green-500"
    }
  ]

  return (
    <motion.div
      className="fixed right-4 bottom-4 z-40 flex flex-col gap-3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : '_self'}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`group relative p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-full ${link.color} transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 flex items-center justify-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-gray-300 group-hover:text-white transition-colors">
            {link.icon}
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {link.label}
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  )
}

export default FloatingSocial
