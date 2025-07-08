import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, ArrowLeft, Users, Ship, Settings, CheckCircle, Anchor, Calendar, 
  Clock, Shield, Star, Award, Phone, Mail 
} from 'lucide-react'
import '../css/servicedetail.css'

function ServiceDetail() {
  const { serviceId } = useParams()
  const [isVisible, setIsVisible] = useState({})

  // Scroll to top when component mounts or serviceId changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [serviceId])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }))
          }
        })
      },
      { threshold: 0.15 }
    )

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Service data (this would typically come from an API or context)
  const servicesData = {
    'interior': {
      title: 'Interior Services',
      subtitle: 'Luxurious yacht interiors crafted to perfection',
      description: 'Transform your yacht\'s interior with our comprehensive design and maintenance services. From custom furnishings to premium upholstery, we create spaces that reflect elegance and comfort while maintaining the highest standards of maritime luxury.',
      heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Users className="service-detail-icon" />,
      features: [
        {
          title: 'Custom Interior Design',
          description: 'Bespoke design solutions tailored to your aesthetic preferences and functional requirements.',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Premium Upholstery',
          description: 'High-quality materials and craftsmanship for lasting beauty and comfort.',
          image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Lighting Solutions',
          description: 'Sophisticated lighting systems that enhance ambiance and functionality.',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Space Optimization',
          description: 'Maximizing functionality while maintaining luxury and comfort.',
          image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ],
      benefits: [
        'Enhanced comfort and luxury',
        'Increased yacht value',
        'Personalized living spaces',
        'Professional installation',
        'Quality materials guarantee',
        'Ongoing maintenance support'
      ],
      process: [
        'Initial consultation and vision discussion',
        'Detailed design and planning phase',
        'Material selection and approval',
        'Professional installation',
        'Quality assurance and final inspection',
        'Ongoing support and maintenance'
      ]
    },
    'exterior': {
      title: 'Exterior Services',
      subtitle: 'Pristine yacht exteriors that command attention',
      description: 'Maintain and enhance your yacht\'s exterior with our professional services. From hull cleaning to paintwork, we ensure your vessel looks immaculate in any harbor while protecting your investment for years to come.',
      heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Ship className="service-detail-icon" />,
      features: [
        {
          title: 'Hull Maintenance',
          description: 'Professional hull cleaning, polishing, and protection services.',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Paint & Polish',
          description: 'Expert painting, gelcoat repair, and polishing for a showroom finish.',
          image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Deck Restoration',
          description: 'Complete deck refinishing and maintenance for safety and beauty.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Hardware Upgrades',
          description: 'Premium hardware installation and maintenance services.',
          image: 'https://images.unsplash.com/photo-1566854474776-8a9a73a5b6d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ],
      benefits: [
        'Enhanced aesthetic appeal',
        'Protection from marine elements',
        'Increased resale value',
        'Professional-grade materials',
        'Expert craftsmanship',
        'Comprehensive warranty'
      ],
      process: [
        'Exterior inspection and assessment',
        'Detailed service plan creation',
        'Surface preparation and cleaning',
        'Professional service execution',
        'Quality control and inspection',
        'Final presentation and handover'
      ]
    },
    'maintenance': {
      title: 'Maintenance Services',
      subtitle: 'Comprehensive care for optimal performance',
      description: 'Keep your yacht operating at peak performance with our preventive and corrective maintenance services. Our certified technicians ensure reliability, safety, and longevity for your valuable investment.',
      heroImage: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Settings className="service-detail-icon" />,
      features: [
        {
          title: 'Engine Maintenance',
          description: 'Complete engine service, repair, and optimization for peak performance.',
          image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Electrical Systems',
          description: 'Advanced electrical system maintenance and troubleshooting.',
          image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Plumbing Services',
          description: 'Comprehensive plumbing maintenance and repair services.',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Safety Inspections',
          description: 'Thorough safety inspections and compliance verification.',
          image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ],
      benefits: [
        'Optimal performance',
        'Extended equipment life',
        'Safety compliance',
        'Reduced repair costs',
        'Professional expertise',
        '24/7 emergency support'
      ],
      process: [
        'Comprehensive system assessment',
        'Maintenance schedule planning',
        'Preventive service execution',
        'Performance testing and verification',
        'Detailed reporting and documentation',
        'Ongoing monitoring and support'
      ]
    },
    'project-management': {
      title: 'Project Management',
      subtitle: 'Seamless coordination for complex projects',
      description: 'From refits to new builds, our project management team ensures every detail is executed flawlessly. Experience stress-free yacht projects with our expert oversight and coordination.',
      heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <CheckCircle className="service-detail-icon" />,
      features: [
        {
          title: 'Refit Coordination',
          description: 'Complete refit project management from planning to completion.',
          image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Timeline Management',
          description: 'Precise scheduling and milestone tracking for on-time delivery.',
          image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Quality Control',
          description: 'Rigorous quality assurance throughout the project lifecycle.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Vendor Relations',
          description: 'Expert coordination with specialized vendors and craftsmen.',
          image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ],
      benefits: [
        'Stress-free project execution',
        'On-time completion',
        'Budget control',
        'Quality assurance',
        'Expert coordination',
        'Transparent communication'
      ],
      process: [
        'Project scope definition and planning',
        'Resource allocation and scheduling',
        'Vendor selection and coordination',
        'Progress monitoring and reporting',
        'Quality control and testing',
        'Project completion and handover'
      ]
    },
    'captain-crew': {
      title: 'Captain & Crew Services',
      subtitle: 'Elite maritime professionals at your service',
      description: 'Connect with experienced captains and professional crew members who understand luxury yacht operations. Our network ensures you find the perfect team for your vessel and voyage requirements.',
      heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Anchor className="service-detail-icon" />,
      features: [
        {
          title: 'Captain Placement',
          description: 'Experienced captains with excellent safety records and local expertise.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Crew Recruitment',
          description: 'Professional crew members trained in luxury yacht service standards.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Training Programs',
          description: 'Ongoing training and certification programs for crew development.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Performance Management',
          description: 'Regular performance reviews and professional development support.',
          image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ],
      benefits: [
        'Experienced professionals',
        'Local water expertise',
        'Safety-focused approach',
        'Luxury service standards',
        'Flexible arrangements',
        'Ongoing support'
      ],
      process: [
        'Needs assessment and requirements',
        'Candidate screening and interviews',
        'Reference and certification verification',
        'Trial period arrangement',
        'Contract finalization',
        'Ongoing performance monitoring'
      ]
    },
    'concierge': {
      title: 'Concierge Services',
      subtitle: 'Personalized luxury experiences on demand',
      description: 'Enhance your yachting experience with our premium concierge services. From provisioning to itinerary planning, we handle every detail for your perfect voyage in the pristine waters of Seychelles.',
      heroImage: 'https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Calendar className="service-detail-icon" />,
      features: [
        {
          title: 'Itinerary Planning',
          description: 'Customized voyage planning with exclusive destinations and experiences.',
          image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Luxury Provisioning',
          description: 'Premium food, beverage, and amenity sourcing for your voyage.',
          image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Event Coordination',
          description: 'Special event planning and execution aboard your yacht.',
          image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Guest Services',
          description: 'Personalized guest experiences and luxury amenity coordination.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ],
      benefits: [
        'Personalized experiences',
        'Local expertise',
        'Luxury provisioning',
        'Event coordination',
        '24/7 availability',
        'Exclusive access'
      ],
      process: [
        'Preference consultation and planning',
        'Custom itinerary development',
        'Provisioning and preparation',
        'Service execution and coordination',
        'Real-time support and adjustments',
        'Post-voyage feedback and planning'
      ]
    }
  }

  const service = servicesData[serviceId]

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service Not Found</h1>
        <Link to="/services">Back to Services</Link>
      </div>
    )
  }

  return (
    <div className="servicedetail-page">
      {/* Hero Section */}
      <section className="servicedetail-hero">
        <div className="servicedetail-hero-background">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="servicedetail-hero-image"
          />
          <div className="servicedetail-hero-overlay"></div>
        </div>
        
        <motion.div 
          className="servicedetail-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="servicedetail-container">
            <div className="servicedetail-hero-text">
              <Link to="/services" className="back-link">
                <ArrowLeft className="back-icon" />
                Back to Services
              </Link>
              
              <motion.div 
                className="service-icon-large"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {service.icon}
              </motion.div>
              
              <motion.h1 
                className="servicedetail-hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {service.title}
              </motion.h1>
              
              <motion.p 
                className="servicedetail-hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {service.subtitle}
              </motion.p>
              
              <motion.p 
                className="servicedetail-hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section 
        className="servicedetail-features"
        data-section="features"
      >
        <div className="servicedetail-container">
          <div className={`servicedetail-content ${isVisible['features'] ? 'servicedetail-fade-in' : ''}`}>
            <div className="section-header">
              <h2 className="section-title">What We Offer</h2>
              <p className="section-subtitle">
                Comprehensive solutions tailored to your specific needs
              </p>
            </div>

            <div className="features-grid">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible['features'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: isVisible['features'] ? index * 0.1 : 0,
                    ease: [0.25, 0.4, 0.25, 1] 
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="feature-image">
                    <img src={feature.image} alt={feature.title} />
                    <div className="feature-image-overlay"></div>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Process Section */}
      <section 
        className="servicedetail-info"
        data-section="info"
      >
        <div className="servicedetail-container">
          <div className={`info-grid ${isVisible['info'] ? 'servicedetail-fade-in' : ''}`}>
            {/* Benefits */}
            <div className="info-card">
              <div className="info-header">
                <Award className="info-icon" />
                <h3 className="info-title">Benefits</h3>
              </div>
              <ul className="info-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="info-item">
                    <CheckCircle className="check-icon" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="info-card">
              <div className="info-header">
                <Clock className="info-icon" />
                <h3 className="info-title">Our Process</h3>
              </div>
              <ul className="process-list">
                {service.process.map((step, index) => (
                  <li key={index} className="process-item">
                    <span className="process-number">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="servicedetail-cta"
        data-section="cta"
      >
        <div className="servicedetail-container">
          <motion.div 
            className={`servicedetail-cta-content ${isVisible['cta'] ? 'servicedetail-fade-in' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible['cta'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="cta-content">
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-subtitle">
                Contact our expert team to discuss your {service.title.toLowerCase()} needs 
                and discover how we can exceed your expectations.
              </p>
              
              <div className="cta-buttons">
                <Link to="/contact" className="cta-button primary">
                  <span>Start Your Project</span>
                  <ArrowRight className="button-icon" />
                </Link>
                
                <a href="tel:+15551234282" className="cta-button secondary">
                  <Phone className="button-icon" />
                  <span>Call Now</span>
                </a>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>hello@tridentmarine.com</span>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <span>+1 (555) 123-YACHT</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
