import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <motion.div
            className="header-logo"
            whileHover={{ scale: 1.05 }}
          >
            Harshal Patil
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-link"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : 'mobile-nav-closed'}`}
          initial={false}
        >
          <div className="mobile-nav-content">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="mobile-nav-link"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn btn-primary mobile-nav-btn"
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
