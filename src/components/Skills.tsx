import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Server, Cloud, Palette, Wrench, BookOpen, TrendingUp } from 'lucide-react'

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

  // Currently learning skills
  const learningSkills = [
    { name: "TypeScript", icon: "🔷", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "Vue.js", icon: "💚", category: "Frontend" },
    { name: "Flask", icon: "🌶️", category: "Backend" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
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
    <section id="skills" className="section-padding bg-gray-900 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
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
              Skills & Technologies
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
              <h3 className="text-2xl font-bold text-gray-100">Frequently Used Technologies</h3>
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
                    <h4 className="text-lg font-semibold text-gray-100 group-hover:text-primary-400 transition-colors duration-300">
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
                            <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-primary-400 text-sm font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
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

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <BookOpen className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-100">Currently Learning</h3>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-4 justify-center"
              >
                {learningSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="bg-gray-800/70 border border-gray-600/40 hover:border-green-400/50 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <div>
                          <p className="text-gray-200 font-medium group-hover:text-green-400 transition-colors duration-300">
                            {skill.name}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {skill.category}
                          </p>
                        </div>
                      </div>
                      
                      {/* Learning indicator */}
                      <div className="absolute -top-2 -right-2">
                        <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="text-center mt-6">
                <p className="text-gray-400 text-sm italic">
                  🚀 Continuously expanding my technical expertise
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-500/10 to-blue-600/10 border border-primary-400/20 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-gray-100 mb-4">
                Ready to build something amazing together?
              </h4>
              <p className="text-gray-300 mb-6">
                Let's discuss how these technologies can solve your business challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#projects" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Code className="w-5 h-5" />
                  View My Projects
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-600 hover:border-primary-400 text-gray-300 hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-800/50"
                >
                  <Wrench className="w-5 h-5" />
                  Let's Work Together
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
