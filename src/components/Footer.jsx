import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/harshalrajendrapatil', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/harshal-patil-hrp017/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:harshalpatil.190903@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h3 className="footer-logo">
              Harshal Patil
            </h3>
            <p className="footer-description">
              Full-stack web developer passionate about creating exceptional digital experiences.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="footer-link"
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(link.toLowerCase()).scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h4 className="footer-title">Get In Touch</h4>
            <div className="footer-contact">
              <p>harshalpatil.190903@gmail.com</p>
              <p>+91 9130548562</p>
              <p>Pune, India</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="footer-divider"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="footer-copyright"
        >
          <p>
            © {currentYear} Harshal Patil. Made with{' '}
            <Heart className="heart-icon" />
            {' '}and React.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
