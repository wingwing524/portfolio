import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Database, Server, Cloud, Palette, TrendingUp, Award } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Frequently used skills with proficiency levels
  const frequentSkills = [
    {
      category: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-400/30",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "Vite", level: 85, icon: "⚡" },
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-400/30",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express", level: 85, icon: "🚀" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "Django", level: 75, icon: "🎯" },
      ]
    },
    {
      category: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-400/30",
      skills: [
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MySQL", level: 80, icon: "🐬" },
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-400/30",
      skills: [
        { name: "Git", level: 90, icon: "🔀" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "MQTT", level: 80, icon: "📡" },
        { name: "HL7", level: 85, icon: "🏥" },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="skills" className="h-screen flex items-center justify-center bg-gray-900 overflow-y-auto">
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
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-400 mx-auto rounded-full mb-6"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 96, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-gray-100 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Technologies and tools I use to build exceptional digital experiences
            </motion.p>
          </div>

          {/* Frequently Used Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Frequently Used Technologies</h3>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {frequentSkills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  className={`bg-gray-800/50 backdrop-blur-sm border ${category.borderColor} p-6 rounded-xl hover:border-opacity-60 transition-all duration-300 group`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 bg-gradient-to-r ${category.color} bg-opacity-20 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                      {category.category}
                    </h4>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5
                        }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="text-gray-100 font-medium group-hover/skill:text-white transition-colors duration-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-primary-400 text-sm font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-600/60 rounded-full h-2 overflow-hidden border border-gray-500/20">
                          <motion.div
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full shadow-lg`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.2, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.8,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications & Credentials Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Certifications & Credentials</h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-800/50 border border-gray-600/50 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-400" size={32} />
                </div>
                <h4 className="text-blue-400 font-bold text-lg mb-2">AWS Cloud Practitioner</h4>
                <p className="text-gray-100 text-sm">Amazon Web Services</p>
                <p className="text-gray-300 text-xs mt-2">Cloud infrastructure and services</p>
              </div>

              <div className="bg-gray-800/50 border border-gray-600/50 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-400" size={32} />
                </div>
                <h4 className="text-blue-400 font-bold text-lg mb-2">Google Project Management</h4>
                <p className="text-gray-100 text-sm">Google Professional Certificate</p>
                <p className="text-gray-300 text-xs mt-2">Agile methodology and project delivery</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm italic">Additional certifications coming soon...</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
