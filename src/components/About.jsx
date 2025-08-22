import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Users, Award, Clock } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Code, number: "20+", label: "Projects Completed" },
    { icon: Users, number: "10+", label: "Happy Clients" },
    { icon: Award, number: "2+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Support Available" }
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Passionate full-stack developer with expertise in modern web technologies and a drive to create exceptional digital experiences.
          </motion.p>

          <div className="about-content">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="about-text">
              <div className="card">
                <h3 className="gradient-text">Who I Am</h3>
                <p>
                  I'm a dedicated full-stack web developer with a passion for creating innovative digital solutions. 
                  With over 3 years of experience in web development, I specialize in building scalable, 
                  user-friendly applications that drive business growth.
                </p>
                <p>
                  My journey in tech started with curiosity and has evolved into a career focused on 
                  delivering high-quality, performant web applications. I believe in writing clean, 
                  maintainable code and staying up-to-date with the latest industry trends and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="about-stats">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="stat-card"
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="stat-icon" />
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div variants={itemVariants} className="about-text">
              <div className="card">
                <h3 className="gradient-text">What I Do</h3>
                <div className="about-services">
                  <div className="service-item">
                    <div className="service-icon">
                      <Code />
                    </div>
                    <div className="service-content">
                      <h4>Full-Stack Development</h4>
                      <p>
                        Building complete web applications from frontend to backend, ensuring seamless user experiences and robust functionality.
                      </p>
                    </div>
                  </div>
                  
                  <div className="service-item">
                    <div className="service-icon">
                      <Users />
                    </div>
                    <div className="service-content">
                      <h4>Client Collaboration</h4>
                      <p>
                        Working closely with clients to understand their needs and deliver solutions that exceed expectations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="service-item">
                    <div className="service-icon">
                      <Award />
                    </div>
                    <div className="service-content">
                      <h4>Quality Assurance</h4>
                      <p>
                        Implementing best practices, testing strategies, and performance optimization to ensure top-notch deliverables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="card">
                <h3 className="gradient-text">Personal Info</h3>
                <div className="about-info">
                  <div className="info-item">
                    <span className="info-label">Name:</span>
                    <span className="info-value">Harshal Patil</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email:</span>
                    <span className="info-value">harshalpatil.190903@gmail.com</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Location:</span>
                    <span className="info-value">Pune, India</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Availability:</span>
                    <span className="info-value available">Open to Work</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
