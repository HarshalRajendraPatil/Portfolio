import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 45 },
        { name: "HTML/CSS", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Mongoose", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 65 },
        { name: "Postman", level: 80 }
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
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Skills & Expertise
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            A comprehensive set of technical skills and tools I use to bring ideas to life.
          </motion.p>

          <div className="skills-content">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card"
              >
                <div className="skill-category">
                  <h3 className="skill-category-title">
                    {category.title}
                  </h3>
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="skill-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      >
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              duration: 1,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="skills-extra"
          >
            <div className="skill-extra-card">
              <div className="skill-extra-emoji">🎨</div>
              <h4 className="skill-extra-title">UI/UX Design</h4>
              <p className="skill-extra-description">
                Creating intuitive and beautiful user interfaces with modern design principles.
              </p>
            </div>
            
            <div className="skill-extra-card">
              <div className="skill-extra-emoji">📱</div>
              <h4 className="skill-extra-title">Responsive Design</h4>
              <p className="skill-extra-description">
                Building applications that work seamlessly across all devices and screen sizes.
              </p>
            </div>
            
            <div className="skill-extra-card">
              <div className="skill-extra-emoji">⚡</div>
              <h4 className="skill-extra-title">Performance</h4>
              <p className="skill-extra-description">
                Optimizing applications for speed, efficiency, and excellent user experience.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="skills-cta"
          >
            <h3 className="gradient-text">
              Ready to Work Together?
            </h3>
            <p>
              I'm always excited to take on new challenges and work with amazing clients. 
              Let's discuss your project and see how I can help bring your vision to life.
            </p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
