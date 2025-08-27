import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import ProjectDetail from './ProjectDetail'

interface DetailedProject {
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
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null)

  // Detailed project data for the two featured projects
  const detailedProjects: DetailedProject[] = [
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
    },
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
    }
  ]

  const projects = [
    {
      title: "IoT Inventory Management",
      description: "RFID-based system for reagents, waste, and sample management. Collaborated with sensor manufacturers for scalable solutions.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "Python", "FastAPI", "RFID Sensors", "MQTT"],
      github: "#",
      live: "#"
    },
    {
      title: "Laboratory Information System",
      description: "Comprehensive LIS with HL7 API integrations for healthcare analyzers. Streamlined workflows and improved data accuracy.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "Node.js", "PostgreSQL", "HL7 FHIR", "Docker"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80",
      tech: ["Next.js", "Tailwind CSS", "Socket.io", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with React, Node.js, and PostgreSQL. Features include user authentication, product management, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="h-screen flex items-center justify-center bg-gray-800 overflow-y-auto">
      <div className="container mx-auto px-6 max-w-7xl py-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary-400">
            Featured Projects
          </h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group ${
                  (project.title === "Laboratory Information System" || project.title === "IoT Inventory Management") 
                    ? "cursor-pointer hover:shadow-xl hover:shadow-primary-500/20" 
                    : ""
                }`}
                onClick={() => {
                  if (project.title === "IoT Inventory Management") {
                    setSelectedProject(detailedProjects[0])
                  } else if (project.title === "Laboratory Information System") {
                    setSelectedProject(detailedProjects[1])
                  }
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {(project.title === "Laboratory Information System" || project.title === "IoT Inventory Management") && (
                    <p className="text-xs text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                      Click to view detailed case study →
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full border border-primary-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
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

export default Projects
