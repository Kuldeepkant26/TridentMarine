import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, ArrowLeft, Star, Crown, Trophy, Target, Zap,
  Clock, Shield, Award, Phone, Mail, CheckCircle
} from 'lucide-react'
import '../css/programdetail.css'

// Import images from assets
import entryProgramHero from '../assets/Home1.JPG';
import moderateProgramHero from '../assets/Home2.JPG';
import signatureProgramHero from '../assets/25062023-DSC00208.jpg';
import sportfishProgramHero from '../assets/25062023-DSC00931.jpg';
import featureImage1 from '../assets/DJI_0611-Edit.jpg';
import featureImage2 from '../assets/25062023-LUX01750.jpg';
import featureImage3 from '../assets/DJI_0506.JPG';
import featureImage4 from '../assets/interior1.jpg';
import featureImage5 from '../assets/Home3.jpg';

function ProgramDetail() {
  const { programId } = useParams()
  const [isVisible, setIsVisible] = useState({})

  // Scroll to top when component mounts or programId changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [programId])

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

  // Program data
  const programsData = {
    'entry-program': {
      title: 'Entry Program',
      subtitle: 'Your gateway to premium yacht ownership',
      description: 'Perfect for first-time yacht owners and those new to luxury marine experiences. Our Entry Program provides comprehensive guidance and support to help you navigate the world of yacht ownership with confidence.',
      heroImage: entryProgramHero,
      icon: <Star className="program-detail-icon" />,
      features: [
        {
          title: 'Basic Yacht Management',
          description: 'Learn the fundamentals of yacht operations, maintenance scheduling, and crew coordination.',
          image: featureImage1
        },
        {
          title: 'Safety & Navigation Training',
          description: 'Comprehensive safety protocols and navigation basics for confident cruising.',
          image: featureImage2
        },
        {
          title: 'Maintenance Guidelines',
          description: 'Essential maintenance schedules and best practices to keep your yacht in perfect condition.',
          image: featureImage3
        },
        {
          title: 'Guest Services Introduction',
          description: 'Basic hospitality and guest management for enjoyable yacht experiences.',
          image: featureImage4
        }
      ],
      benefits: [
        'Structured learning approach',
        'Dedicated support team',
        'Flexible scheduling',
        'Progressive skill development',
        'Cost-effective entry point',
        'Foundation for advancement'
      ],
      process: [
        'Initial consultation and assessment',
        'Customized program planning',
        'Hands-on training sessions',
        'Progress monitoring and feedback',
        'Skill certification',
        'Ongoing support and guidance'
      ]
    },
    'moderate-program': {
      title: 'Moderate Program',
      subtitle: 'Enhanced yacht management for growing needs',
      description: 'Designed for yacht owners seeking enhanced services and elevated experiences. This program builds upon foundational knowledge with advanced features and personalized support for more sophisticated yacht operations.',
      heroImage: moderateProgramHero,
      icon: <Target className="program-detail-icon" />,
      features: [
        {
          title: 'Advanced Yacht Operations',
          description: 'Sophisticated operational procedures and management techniques for optimal performance.',
          image: featureImage1
        },
        {
          title: 'Premium Maintenance Plans',
          description: 'Comprehensive maintenance programs with priority scheduling and premium materials.',
          image: featureImage2
        },
        {
          title: 'Concierge Services',
          description: 'Personalized concierge support for provisioning, logistics, and special requests.',
          image: featureImage3
        },
        {
          title: 'Custom Itinerary Planning',
          description: 'Bespoke voyage planning with destination expertise and activity coordination.',
          image: featureImage4
        }
      ],
      benefits: [
        'Enhanced service level',
        'Priority support access',
        'Customized solutions',
        'Advanced training modules',
        'Flexible program options',
        'Performance optimization'
      ],
      process: [
        'Comprehensive needs assessment',
        'Personalized program design',
        'Advanced training implementation',
        'Regular performance reviews',
        'Continuous program refinement',
        'Ongoing relationship management'
      ]
    },
    'signature-program': {
      title: 'Signature Program',
      subtitle: 'The pinnacle of luxury yacht management',
      description: 'Our premium offering for discerning yacht owners who demand excellence. Experience the pinnacle of luxury yacht management with white-glove service, exclusive amenities, and unparalleled attention to detail.',
      heroImage: signatureProgramHero,
      icon: <Crown className="program-detail-icon" />,
      features: [
        {
          title: 'Full-Service Management',
          description: 'Complete yacht management with dedicated teams handling every aspect of operations.',
          image: featureImage1
        },
        {
          title: 'Dedicated Account Manager',
          description: 'Personal account manager providing 24/7 support and concierge services.',
          image: featureImage2
        },
        {
          title: 'Luxury Provisioning',
          description: 'Premium provisioning services with curated selections and exclusive suppliers.',
          image: featureImage3
        },
        {
          title: 'Exclusive Event Planning',
          description: 'Bespoke event coordination for special occasions and corporate entertainment.',
          image: featureImage4
        }
      ],
      benefits: [
        'White-glove service',
        'Exclusive access and privileges',
        'Personalized attention',
        'Premium quality assurance',
        'Comprehensive coverage',
        'Luxury lifestyle support'
      ],
      process: [
        'VIP consultation and onboarding',
        'Bespoke program development',
        'Luxury service implementation',
        'Continuous quality monitoring',
        'Exclusive benefits activation',
        'Lifetime relationship management'
      ]
    },
    'sportfish-program': {
      title: 'Sportfish Program',
      subtitle: 'Specialized for the serious angler',
      description: 'Tailored specifically for sport fishing enthusiasts and competitive anglers. Our specialized program focuses on performance optimization, tournament readiness, and the unique needs of sportfish vessels.',
      heroImage: sportfishProgramHero,
      icon: <Trophy className="program-detail-icon" />,
      features: [
        {
          title: 'Tournament Preparation',
          description: 'Comprehensive pre-tournament services including equipment checks and strategy planning.',
          image: featureImage1
        },
        {
          title: 'Specialized Equipment Care',
          description: 'Expert maintenance and optimization of fishing equipment and specialized systems.',
          image: featureImage2
        },
        {
          title: 'Performance Optimization',
          description: 'Engine tuning and hull optimization for maximum fishing performance.',
          image: featureImage3
        },
        {
          title: 'Fishing Charter Coordination',
          description: 'Professional charter coordination with experienced captains and fishing guides.',
          image: featureImage4
        }
      ],
      benefits: [
        'Tournament-ready performance',
        'Specialized expertise',
        'Performance analytics',
        'Professional network access',
        'Equipment optimization',
        'Competitive advantage'
      ],
      process: [
        'Performance assessment and goals',
        'Specialized program customization',
        'Equipment optimization implementation',
        'Performance monitoring and tuning',
        'Tournament support services',
        'Continuous improvement tracking'
      ]
    }
  }

  const program = programsData[programId]

  if (!program) {
    return (
      <div className="program-not-found">
        <h1>Program Not Found</h1>
        <Link to="/programs">Back to Programs</Link>
      </div>
    )
  }

  return (
    <div className="programdetail-page">
      {/* Hero Section */}
      <section className="programdetail-hero">
        <div className="programdetail-hero-background">
          <img 
            src={program.heroImage} 
            alt={program.title} 
            className="programdetail-hero-image"
          />
          <div className="programdetail-hero-overlay"></div>
        </div>
        
        <motion.div 
          className="programdetail-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="programdetail-container">
            <div className="programdetail-hero-text">
              <Link to="/programs" className="back-link">
                <ArrowLeft className="back-icon" />
                Back to Programs
              </Link>
              
              {/* <motion.div 
                className="program-icon-large"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {program.icon}
              </motion.div> */}
              
              <motion.h1 
                className="programdetail-hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {program.title}
              </motion.h1>
              
              <motion.p 
                className="programdetail-hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {program.subtitle}
              </motion.p>
              
              <motion.p 
                className="programdetail-hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {program.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section 
        className="programdetail-features"
        data-section="features"
      >
        <div className="programdetail-container">
          <div className={`programdetail-content ${isVisible['features'] ? 'programdetail-fade-in' : ''}`}>
            <div className="section-header">
              <h2 className="section-title">Program Features</h2>
              <p className="section-subtitle">
                Comprehensive features designed to maximize your yacht experience
              </p>
            </div>

            <div className="features-grid">
              {program.features.map((feature, index) => (
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
        className="programdetail-info"
        data-section="info"
      >
        <div className="programdetail-container">
          <div className={`info-grid ${isVisible['info'] ? 'programdetail-fade-in' : ''}`}>
            {/* Benefits */}
            <div className="info-card">
              <div className="info-icon">
                <Award className="info-icon-svg" />
              </div>
              <h3 className="info-title">Program Benefits</h3>
              <ul className="info-list">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="info-item">
                    <CheckCircle className="info-check" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="info-card">
              <div className="info-icon">
                <Clock className="info-icon-svg" />
              </div>
              <h3 className="info-title">Program Process</h3>
              <ul className="info-list">
                {program.process.map((step, index) => (
                  <li key={index} className="info-item">
                    <span className="step-number">{index + 1}</span>
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
        className="programdetail-cta"
        data-section="cta"
      >
        <div className="programdetail-container">
          <motion.div 
            className={`programdetail-cta-content ${isVisible['cta'] ? 'programdetail-fade-in' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible['cta'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="cta-content">
              <h2 className="cta-title">Ready to Begin?</h2>
              <p className="cta-subtitle">
                Join the {program.title} and experience the Trident Marine difference. 
                Our team is ready to help you embark on your yacht journey.
              </p>
              
              <div className="cta-buttons">
                <Link to="/contact" className="cta-button primary">
                  <span>Start Your Program</span>
                  <ArrowRight className="button-icon" />
                </Link>
                
                <a href="tel:+15551234567" className="cta-button secondary">
                  <Phone className="button-icon" />
                  <span>Call Now</span>
                </a>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>programs@tridentmarine.com</span>
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

export default ProgramDetail
