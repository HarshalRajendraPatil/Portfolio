import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/harshalrajendrapatil', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/harshal-patil-hrp017/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:harshalpatil.190903@gmail.com', label: 'Email' }
  ]

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="hero-badge">
                Full Stack Web Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-title"
            >
              Hi, I'm 
              <span className="gradient-text"> Harshal Patil</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-subtitle"
            >
              I craft beautiful, functional, and scalable web applications that help businesses grow and succeed in the digital world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hero-buttons"
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
                <ArrowRight size={20} />
              </motion.button>
              <a href='https://drive.google.com/file/d/1Un2vF1WpXZgDYfgMjOzAix8UwHIzEDWm/view?usp=sharing' target='_blank'>
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download CV
                </motion.button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hero-social"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-illustration"
          >
            {/* Background Elements */}
            <motion.div
              className="hero-bg-element hero-bg-element-1"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="hero-bg-element hero-bg-element-2"
              animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Main Illustration */}
            <div className="hero-main-illustration">
              <div>
                <motion.div
                  className="hero-emoji"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  💻
                </motion.div>
                <h3 className="hero-illustration-title">Web Development</h3>
                <p className="hero-illustration-subtitle">React • Node.js • Full Stack</p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="hero-floating-element hero-floating-element-1"
              animate={{ y: [0, -50, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div>🚀</div>
            </motion.div>
            <motion.div
              className="hero-floating-element hero-floating-element-2"
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div>⚡</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
