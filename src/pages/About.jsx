import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Ship, 
  Shield, 
  Users, 
  Wrench, 
  Award,
  Globe,
  Star,
  CheckCircle,
  Anchor,
  Compass,
  MapPin,
  Clock,
  Heart,
  Waves,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Quote
} from 'lucide-react'
import '../css/about.css'
import Footer from '../components/Footer'

function About() {
  const [activeService, setActiveService] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [currentSlide, setCurrentSlide] = useState(0)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Smooth scroll function to next section
  const scrollToNextSection = () => {
    const storySection = document.querySelector('.about-story-section')
    if (storySection) {
      storySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % storyImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(slideInterval)
  }, [])

  const storyImages = [
    {
      url: "https://images.unsplash.com/photo-1616207133639-cd5e4db9859f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Luxury Yacht Deck",
      description: "Premium deck spaces for relaxation"
    },
    {
      url: "https://images.unsplash.com/photo-1523496922380-91d5afba98a3?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ocean Adventure",
      description: "Exploring pristine Seychelles waters"
    },
    {
      url: "https://images.unsplash.com/photo-1559385301-0187cb6eff46?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modern Fleet",
      description: "State-of-the-art yacht technology"
    },
    {
      url: "https://images.pexels.com/photos/32710080/pexels-photo-32710080.jpeg",
      title: "Sunset Sailing",
      description: "Magical moments at golden hour"
    },
    {
      url: "https://images.pexels.com/photos/12877390/pexels-photo-12877390.jpeg",
      title: "Professional Crew",
      description: "Expert navigation and service"
    }
  ]

  const services = [
    {
      category: "Interior Services",
      icon: <Sparkles className="about-service-icon" />,
      color: "about-service-blue",
      services: [
        "Interior staging for luxury presentation",
        "Professional boat show staging", 
        "Comprehensive headboard cleaning",
        "Complete interior design solutions"
      ]
    },
    {
      category: "Exterior Care",
      icon: <Shield className="about-service-icon" />,
      color: "about-service-green",
      services: [
        "Professional windshield maintenance",
        "Premium polishing and ceramic coating",
        "Expert bathing and polish services",
        "Paint repair and restoration",
        "Gelcoat repair and refinishing"
      ]
    },
    {
      category: "Maintenance",
      icon: <Wrench className="about-service-icon" />,
      color: "about-service-purple",
      services: [
        "Preventive maintenance programs",
        "Engine and mechanical servicing",
        "Hull inspections and repairs",
        "Safety equipment maintenance"
      ]
    },
    {
      category: "Project Management",
      icon: <Users className="about-service-icon" />,
      color: "about-service-orange",
      services: [
        "Complete project oversight",
        "Timeline and budget management",
        "Quality assurance protocols",
        "Vendor coordination"
      ]
    },
    {
      category: "Captain & Crew",
      icon: <Anchor className="about-service-icon" />,
      color: "about-service-indigo",
      services: [
        "Experienced captain services",
        "Professional crew staffing",
        "Maritime safety expertise",
        "Local waters navigation"
      ]
    },
    {
      category: "Concierge Services",
      icon: <Heart className="about-service-icon" />,
      color: "about-service-pink",
      services: [
        "Personalized guest experiences",
        "Activity planning and booking",
        "Fine dining arrangements",
        "Special occasion coordination"
      ]
    }
  ]

  const stats = [
    { number: "500+", label: "Successful Charters", icon: <Ship className="about-stat-icon" /> },
    { number: "15+", label: "Years Experience", icon: <Clock className="about-stat-icon" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="about-stat-icon" /> },
    { number: "50+", label: "Luxury Yachts", icon: <Waves className="about-stat-icon" /> }
  ]

  const team = [
    {
      name: "Captain Marcus Thompson",
      role: "Chief Captain & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "25+ years navigating Seychelles waters with unmatched expertise"
    },
    {
      name: "Isabella Rodriguez",
      role: "Operations Director",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFio0rkX6Oahg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732672222112?e=2147483647&v=beta&t=nIqdt4hak292qWVAY2mcrOTSweD6u4QvyR8opXmbXjQ",
      description: "Expert in luxury hospitality and seamless operations management"
    },
    {
      name: "James Mitchell",
      role: "Fleet Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Marine engineering specialist ensuring pristine vessel conditions"
    },
    {
      name: "Sophie Chen",
      role: "Guest Relations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Dedicated to creating unforgettable personalized experiences"
    }
  ]

  const testimonials = [
    {
      name: "David & Sarah Johnson",
      location: "London, UK",
      text: "Our week-long charter through the Seychelles was absolutely magical. The crew's attention to detail and the yacht's luxury exceeded all our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      text: "From snorkeling in crystal clear waters to dining under the stars, every moment was perfectly orchestrated. Truly a once-in-a-lifetime experience.",
      rating: 5
    },
    {
      name: "Emma & Thomas Wilson",
      location: "Sydney, Australia",
      text: "The professional crew and pristine yacht made our honeymoon unforgettable. We've already booked our next charter for next year!",
      rating: 5
    }
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <video 
            src="https://videos.pexels.com/video-files/2711239/2711239-uhd_2560_1440_24fps.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="about-hero-video"
          />
          <div className="about-hero-overlay"></div>
        </div>
        
        <div className="about-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-text"
          >
            <h1 className="about-hero-title">About Us</h1>
            <p className="about-hero-subtitle">
              Discover the story behind Seychelles' premier luxury yacht charter experience
            </p>
            <div className="about-hero-location">
              <MapPin className="about-location-icon" />
              <span>Seychelles Islands</span>
            </div>
          </motion.div>
        </div>

        <div className="about-hero-scroll">
          <div className="about-scroll-indicator" onClick={scrollToNextSection}>
            <ArrowRight className="about-scroll-arrow" />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story-section" id="story" data-animate>
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.story ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-story-grid"
          >
            <div className="about-story-content">
              <h2 className="about-section-title">
                Our <span className="about-text-gradient">Story</span>
              </h2>
              <div className="about-story-text">
                <p>
                  Welcome to Trident Marine, your premier luxury yacht charter and tour operator in the stunning Seychelles. Our 
                  bespoke services cater to those seeking the ultimate vacation experience that combines 
                  tranquility, adventure, and luxury.
                </p>
                <p>
                  Our exciting fleet of yachts, along with a dedicated team of experienced crew and staff, 
                  we are committed to providing our guests with an unforgettable experience at sea. Our 
                  tailor-made itineraries take you through some of the world's most awe-inspiring waters.
                </p>
                <p>
                  From world-class diving and snorkeling to exploring deserted islands, our team will help 
                  you create a bespoke itinerary that meets your needs, desires and exceeds your expectations. 
                  Whether you're a seasoned sailor or a first-time charter guest, we invite you to experience 
                  our state-of-the-art facilities, exceptional service, and unparalleled luxury.
                </p>
              </div>
              <div className="about-welcome-message">
                <Quote className="about-quote-icon" />
                <p>Welcome to Trident Marine.</p>
              </div>
            </div>
            <div className="about-story-slider-container">
              <div className="about-story-slider">
                <div className="about-slider-track" style={{ transform: `translateX(-${currentSlide * 20}%)` }}>
                  {storyImages.map((image, index) => (
                    <div
                      key={index}
                      className="about-slider-slide"
                    >
                      <img 
                        src={image.url}
                        alt={image.title}
                        className="about-slider-image"
                      />
                      <div className="about-slider-overlay">
                        <div className="about-slider-content">
                          <h4 className="about-slider-title">{image.title}</h4>
                          <p className="about-slider-description">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Slider Navigation */}
                <div className="about-slider-nav">
                  {storyImages.map((_, index) => (
                    <button
                      key={index}
                      className={`about-slider-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
                
                {/* Slider Arrows */}
                <button 
                  className="about-slider-arrow about-slider-prev"
                  onClick={() => setCurrentSlide((prev) => 
                    prev === 0 ? storyImages.length - 1 : prev - 1
                  )}
                >
                  <ArrowRight className="about-arrow-icon about-arrow-left" />
                </button>
                <button 
                  className="about-slider-arrow about-slider-next"
                  onClick={() => setCurrentSlide((prev) => 
                    (prev + 1) % storyImages.length
                  )}
                >
                  <ArrowRight className="about-arrow-icon" />
                </button>
              </div>
              
              {/* Decorative Elements */}
              <div className="about-decoration about-decoration-1"></div>
              <div className="about-decoration about-decoration-2"></div>
              <div className="about-decoration about-decoration-3"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section" id="stats" data-animate>
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.stats ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="about-stats-grid"
          >
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-card">
                <div className="about-stat-icon-container">
                  {stat.icon}
                </div>
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="about-services-section" id="services" data-animate>
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-services-header"
          >
            <h2 className="about-section-title">
              Our <span className="about-text-gradient">Services</span>
            </h2>
            <p className="about-section-subtitle">
              Comprehensive luxury yacht services designed to exceed your expectations
            </p>
          </motion.div>

          <div className="about-services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`about-service-card ${service.color}`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="about-service-icon-container">
                  {service.icon}
                </div>
                
                <h3 className="about-service-title">
                  {service.category}
                </h3>
                
                <ul className="about-service-list">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="about-service-item">
                      <CheckCircle className="about-service-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team-section" id="team" data-animate>
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.team ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-team-header"
          >
            <h2 className="about-section-title">
              Meet Our <span className="about-text-gradient">Team</span>
            </h2>
            <p className="about-section-subtitle">
              Experienced professionals dedicated to creating extraordinary yacht experiences
            </p>
          </motion.div>

          <div className="about-team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.team ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="about-team-member"
              >
                <div className="about-member-image-container">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="about-member-image"
                  />
                  <div className="about-member-overlay"></div>
                </div>
                <h3 className="about-member-name">{member.name}</h3>
                <p className="about-member-role">{member.role}</p>
                <p className="about-member-description">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-section" id="values" data-animate>
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.values ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-values-header"
          >
            <h2 className="about-section-title">
              Our <span className="about-text-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="about-values-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible.values ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="about-value-card"
            >
              <div className="about-value-icon about-value-excellence">
                <Award className="about-value-icon-svg" />
              </div>
              <h3 className="about-value-title">Excellence</h3>
              <p className="about-value-description">
                We strive for perfection in every detail, from our immaculate yachts to our exceptional service standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.values ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="about-value-card"
            >
              <div className="about-value-icon about-value-passion">
                <Heart className="about-value-icon-svg" />
              </div>
              <h3 className="about-value-title">Passion</h3>
              <p className="about-value-description">
                Our love for the ocean and hospitality drives us to create unforgettable experiences for every guest.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible.values ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="about-value-card"
            >
              <div className="about-value-icon about-value-sustainability">
                <Globe className="about-value-icon-svg" />
              </div>
              <h3 className="about-value-title">Sustainability</h3>
              <p className="about-value-description">
                We're committed to preserving the pristine beauty of Seychelles waters for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-testimonials-section" id="testimonials" data-animate>
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.testimonials ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-testimonials-header"
          >
            <h2 className="about-section-title">
              What Our <span className="about-text-gradient">Guests Say</span>
            </h2>
          </motion.div>

          <div className="about-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.testimonials ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="about-testimonial-card"
              >
                <div className="about-testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="about-star filled" />
                  ))}
                </div>
                <p className="about-testimonial-text">"{testimonial.text}"</p>
                <div className="about-testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
   

    
    </div>
  )
}

export default About
