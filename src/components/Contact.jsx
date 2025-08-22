import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "harshalpatil.190903@gmail.com",
      link: "mailto:harshalpatil.190903@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9130548562",
      link: "tel:+919130548562"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune, India",
      link: "https://maps.app.goo.gl/KT7wuw7Yxv4g1bFn9"
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Send email to my email
    const email = "harshalpatil.190903@gmail.com"
    const subject = "New Message from " + formData.name
    const message = "Name: " + formData.name + "\nEmail: " + formData.email + "\nSubject: " + formData.subject + "\nMessage: " + formData.message
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </motion.p>

          <div className="contact-content">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="contact-info">
              <div className="card">
                <h3 className="gradient-text">
                  Let's Work Together
                </h3>
                <p className="contact-description">
                  I'm always excited to hear about new projects and opportunities. Whether you have a specific project in mind or just want to chat about possibilities, I'd love to hear from you.
                </p>
                
                <div className="contact-items">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      className="contact-item"
                      whileHover={{ x: 10 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="contact-icon">
                        <info.icon />
                      </div>
                      <div className="contact-details">
                        <h4>{info.title}</h4>
                        <p>{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="contact-availability">
                <h4>Current Availability</h4>
                <p>
                  I'm currently available for new projects and freelance opportunities.
                </p>
                <div className="availability-status">
                  <div className="availability-dot"></div>
                  <span className="availability-text">Available for Work</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="card">
              <h2 className="gradient-text">
                Send Me a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="success-message"
                >
                  <CheckCircle className="success-icon" />
                  <h4 className="success-title">Message Sent!</h4>
                  <p className="success-text">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-submit"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <div>
                        <div className="loading-spinner"></div>
                        Sending...
                      </div>
                    ) : (
                      <div>
                        <Send size={20} />
                        Send Message
                      </div>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
