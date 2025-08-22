import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description: "A portfolio website built with React, Vite, and Tailwind CSS. Features include a beautiful design, smooth animations, and a contact form.",
      image: "portfolio.jpg",
      category: "frontend",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide React"],
      liveUrl: "https://harshalrajendrapatil.netlify.app",
      githubUrl: "https://github.com/HarshalRajendraPatil/Portfolio",
      featured: false
    },
    {
      id: 2,
      title: "Outdoors",
      description: "A frontend project built with html, css, javascript for a travel agency website which is fully responsive and has a beautiful design",
      image: "outdoors.jpg",
      category: "frontend",
      technologies: ["Html", "Css", "Javascript", "Sass"],
      liveUrl: "https://sweet-lokum-5509b9.netlify.app",
      githubUrl: "https://github.com/HarshalRajendraPatil/Natours-Webiste-full-responsive-",
      featured: false
    },
    {
      id: 3,
      title: "ToonDig",
      description: "A website to stream cartoons and movies. It is a advanced website with a lot of features like login, signup, watch history, etc.",
      image: "toondig.jpg",
      category: "fullstack",
      technologies: ["React", "TailwindCSS", "Javascript", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Cloudinary", "Stripe"],
      liveUrl: "https://toondig.netlify.app",
      githubUrl: "https://github.com/HarshalRajendraPatil/Toon-Dig-Project",
      featured: true
    },
    {
      id: 4,
      title: "REST API Bank Management System",
      description: "A robust REST API bank management system built with Node.js and Express, featuring authentication, data validation, and comprehensive documentation.",
      image: "bank.jpeg",
      category: "backend",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
      liveUrl: "#",
      githubUrl: "https://github.com/HarshalRajendraPatil/Banking-API",
      featured: false
    },
    {
      id: 5,
      title: "Admin Dashboard",
      description: "A modern, responsive admin dashboard showcasing professional work and skills with smooth animations and elegant design.",
      image: "dashboard.jpg",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Bcrypt", "React-Query", "React-Router", "React-Icons", "Mongodb"],
      liveUrl: "https://admins-frontend.onrender.com/dashboard",
      githubUrl: "https://github.com/HarshalRajendraPatil/admins-dashboard",
      featured: true
    },
    {
      id: 6,
      title: "Bookieneststore",
      description: "A comprehensive online bookstore with a lot of features like login, signup, add to cart, checkout, etc.",
      image: "bookieneststore.jpg",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express.js", "JWT", "Bcrypt", "Cloudinary", "Stripe"],
      liveUrl: "https://bookieneststore.netlify.app",
      githubUrl: "https://github.com/HarshalRajendraPatil/Book-Store-Project",
      featured: false
    },
    {
      id: 7,
      title: "Movio",
      description: "A comprehensive online bookstore with a lot of features like login, signup, add to cart, checkout, etc.",
      image: "movio.jpg",
      category: "frontend",
      technologies: ["React", "TailwindCSS", "Javascript", "React-Router", "React-Icons"],
      liveUrl: "https://omovio.netlify.app",
      githubUrl: "https://github.com/HarshalRajendraPatil/movio",
      featured: false
    },
    {
      id: 8,
      title: "NicheNested",
      description: "A job portal website with a lot of features like login, signup, create job, apply for job, etc.",
      image: "niche.jpg",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Bcrypt", "Cloudinary", "Stripe"],
      liveUrl: "https://nichenested.netlify.app",
      githubUrl: "https://github.com/HarshalRajendraPatil/NicheNested",
      featured: true
    },
    {
      id: 9,
      title: "Let's Chat",
      description: "A real time chat application with a lot of features like login, signup, create room, join room, etc.",
      image: "letschat.jpg",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Bcrypt", "Socket.io"],
      liveUrl: "https://lets-chat-89y1.onrender.com/login",
      githubUrl: "https://github.com/HarshalRajendraPatil/Let-s-chat",
      featured: true
    },
    {
      id: 10,
      title: "Fast React Pizza",
      description: "A pizza ordering website with a lot of features like login, signup, create order, etc.",
      image: "fastreactpizza.jpg",
      category: "frontend",
      technologies: ["React", "TailwindCSS", "Javascript", "React-Router", "React-Icons"],
      liveUrl: "https://instant-pizzas.netlify.app",
      githubUrl: "https://github.com/HarshalRajendraPatil/fast-react-pizza",
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="projects-filters"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                  {project.featured && (
                    <div className="project-badge">
                      Featured
                    </div>
                  )}
                  <div className="project-overlay">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-overlay-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-overlay-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="project-tech"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="project-links">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ x: 5 }}
                    >
                      <Eye size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="projects-cta"
          >
            <h3 className="gradient-text">
              Have a Project in Mind?
            </h3>
            <p>
              I'm always looking for exciting new projects to work on. Whether you have a specific idea in mind or need help conceptualizing your next big thing, I'd love to hear from you.
            </p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Discuss Your Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
