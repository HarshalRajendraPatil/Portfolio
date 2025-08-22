import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  const certificates = [
    {
      id: 1,
      title: "The Git & Github Bootcamp",
      issuer: "Udemy",
      date: "Sept. 29, 2022",
      image: "git.jpg",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-b27e76bb-6810-4fdb-859b-54a8d3afabae.jpg",
      featured: false
    },
    {
      id: 2,
      title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
      issuer: "Udemy",
      date: "May 17, 2024",
      image: "react.jpg",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-3dc6fefa-3145-4d6c-a92c-91adbe5ec191.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
      issuer: "Udemy",
      date: "June 5, 2023",
      image: "node.jpg",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-efb547f7-e9dc-4c9f-8659-13c95dede1e4.jpg",
      featured: false
    },
    {
      id: 3,
      title: "The Complete Web Development Bootcamp",
      issuer: "Udemy",
      date: "June 5, 2023",
      image: "web.jpg",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-32cb41b0-d29d-4e13-96ca-e95f2c5697fe.jpg",
      featured: false
    },
    {
      id: 4,
      title: "The Complete JavaScript Course: From Zero to Expert!",
      issuer: "Udemy",
      date: "Jan. 14, 2023",
      image: "js.jpg",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-ea1cb831-ad47-4b13-a416-388dab5510b0.jpg",
      featured: true
    },
    {
      id: 5,
      title: "MongoDB Database Design",
      issuer: "MongoDB University",
      date: "2023",
      image: "mongodb.jpg",
      url: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/334887ae-2bb4-49df-a612-ce71ab76287f-harshal-rajendra-patil-22bce10741-ef57b193-beb8-4398-9580-8e610c86a19a-certificate.pdf",
      featured: true
    },
    {
      id: 6,
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      issuer: "Udemy",
      date: "Jan. 26, 2023",
      image: "css.jpg",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-705cd73f-cea4-4458-bad1-5f1a65ddc1a3.jpg",
      featured: false
    },
    {
      id: 7,
      title: "Learn C++ Programming - Beginner to Advance- Deep Dive in C++",
      issuer: "Udemy",
      date: "Sept. 18, 2022",
      image: "cpp.jpg",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-c2733d0c-f54a-4b85-8c9d-73839f7c2e0a.jpg",
      featured: false
    }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [certificates.length])

  // Scroll to center certificate
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 320 // Width of each certificate card
      const scrollPosition = currentIndex * cardWidth - (window.innerWidth / 2) + (cardWidth / 2)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    )
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
    <section id="certificates" className="section certificates">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Certificates & Achievements
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Professional certifications that validate my expertise and continuous learning journey.
          </motion.p>

          <motion.div variants={itemVariants} className="certificates-container">
            {/* Navigation Buttons */}
            <button 
              className="certificate-nav-btn certificate-nav-prev"
              onClick={handlePrev}
              aria-label="Previous certificate"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              className="certificate-nav-btn certificate-nav-next"
              onClick={handleNext}
              aria-label="Next certificate"
            >
              <ChevronRight size={24} />
            </button>

            {/* Certificates Carousel */}
            <div className="certificates-carousel" ref={carouselRef}>
              {certificates.map((certificate, index) => {
                const isActive = index === currentIndex
                const distance = Math.abs(index - currentIndex)
                const scale = isActive ? 1 : Math.max(0.7, 1 - distance * 0.15)
                const opacity = isActive ? 1 : Math.max(0.3, 1 - distance * 0.3)

                return (
                  <motion.div
                    key={certificate.id}
                    className={`certificate-card ${isActive ? 'active' : ''}`}
                    style={{
                      transform: `scale(${scale})`,
                      opacity: opacity
                    }}
                    whileHover={{ 
                      scale: isActive ? 1.05 : scale * 1.1,
                      y: -10 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="certificate-image">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                      />
                      {certificate.featured && (
                        <div className="certificate-badge">
                          Featured
                        </div>
                      )}
                      <div className="certificate-overlay">
                        <motion.a
                          href={certificate.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="certificate-view-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          View Certificate
                        </motion.a>
                      </div>
                    </div>

                    <div className="certificate-content">
                      <h3 className="certificate-title">
                        {certificate.title}
                      </h3>
                      <p className="certificate-issuer">
                        {certificate.issuer}
                      </p>
                      <p className="certificate-date">
                        {certificate.date}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Dots Indicator */}
            <div className="certificate-dots">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  className={`certificate-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
