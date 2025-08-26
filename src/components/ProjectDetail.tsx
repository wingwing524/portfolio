import { motion } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, Users, Code, Database, Globe } from 'lucide-react'
import { useEffect } from 'react'

interface ProjectDetailProps {
  project: {
    id: string
    title: string
    subtitle: string
    icon: string
    description: string
    fullDescription: string
    technologies: string[]
    features: string[]
    challenges: string[]
    outcomes: string[]
    duration: string
    teamSize: string
    role: string
    images?: string[]
    liveUrl?: string
    githubUrl?: string
  } | null
  onClose: () => void
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [project])

  if (!project) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{project.icon}</div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h1>
                <p className="text-gray-400">{project.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="text-gray-400 hover:text-white" size={24} />
            </button>
          </div>
          
          {/* Project Meta */}
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>{project.teamSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <Code size={16} />
              <span>{project.role}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Globe size={20} className="text-blue-400" />
              Project Overview
            </h2>
            <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Database size={20} className="text-green-400" />
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-full text-gray-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Challenges & Solutions</h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-yellow-400 mt-1">⚡</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Outcomes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Results & Impact</h2>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetail
