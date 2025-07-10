import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Ship, 
  Settings, 
  CheckCircle, 
  Anchor, 
  Calendar, 
  ArrowRight,
  Check
} from 'lucide-react';
import '../css/services.css';

// Image URLs
const interiorImage = 'https://i.pinimg.com/736x/28/5b/7f/285b7f198575aa749b4800bde073c93a.jpg';
const exteriorImage = 'https://images.unsplash.com/photo-1559385301-0187cb6eff46?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const maintenanceImage = 'https://images.unsplash.com/photo-1599582350162-83106f579198?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const projectManagementImage = 'https://images.unsplash.com/photo-1561751788-85fcb8b78413?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const captainCrewImage = 'https://img.freepik.com/premium-photo/concierge-booking-luxury-yacht-tour-hotel-guests-with-marina-background_1327465-8959.jpg';
const conciergeImage = 'https://images.unsplash.com/photo-1616207133639-cd5e4db9859f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const heroImage = 'https://images.unsplash.com/photo-1523496922380-91d5afba98a3?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

function Services() {
  const [isVisible, setIsVisible] = useState({});

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Optimized Intersection Observer for better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px' // Trigger animation earlier
      }
    );

    // Use requestAnimationFrame to avoid blocking
    const observeElements = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(section => observer.observe(section));
    };

    requestAnimationFrame(observeElements);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'interior',
      title: 'Interior Services',
      description: 'Transform your yacht\'s interior with our premium design and maintenance services. From luxury furnishings to state-of-the-art entertainment systems.',
      image: interiorImage,
      icon: <User className="services-icon" />,
      features: [
        'Luxury Interior Design',
        'Custom Furnishing',
        'Entertainment Systems',
        'Climate Control Solutions'
      ]
    },
    {
      id: 'exterior',
      title: 'Exterior Services', 
      description: 'Maintain your yacht\'s pristine appearance with professional exterior cleaning, painting, and restoration services that preserve value.',
      image: exteriorImage,
      icon: <Ship className="services-icon" />,
      features: [
        'Hull Cleaning & Polishing',
        'Deck Restoration', 
        'Paint & Coating Services',
        'Window & Glass Care'
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance Services',
      description: 'Keep your yacht in perfect condition with our comprehensive maintenance programs covering all mechanical and electrical systems.',
      image: maintenanceImage,
      icon: <Settings className="services-icon" />,
      features: [
        'Engine Maintenance',
        'Electrical Systems',
        'Plumbing & HVAC',
        'Safety Equipment Checks'
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Complete oversight of your yacht projects from conception to completion, ensuring timely delivery and budget adherence.',
      image: projectManagementImage,
      icon: <CheckCircle className="services-icon" />,
      features: [
        'Project Planning',
        'Vendor Coordination',
        'Quality Assurance',
        'Timeline Management'
      ]
    },
    {
      id: 'captain-crew',
      title: 'Captain & Crew Services',
      description: 'Professional crew placement and training services to ensure your yacht operates with the highest standards of seamanship.',
      image: captainCrewImage,
      icon: <Anchor className="services-icon" />,
      features: [
        'Captain Placement',
        'Crew Recruitment', 
        'Training Programs',
        'Performance Management'
      ]
    },
    {
      id: 'concierge',
      title: 'Concierge Services',
      description: 'Personalized concierge services to handle all aspects of your yacht experience, from provisioning to entertainment planning.',
      image: conciergeImage,
      icon: <Calendar className="services-icon" />,
      features: [
        'Itinerary Planning',
        'Provisioning Services',
        'Event Coordination',
        'Guest Services'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-background">
          <img 
            src={heroImage}
            alt="Luxury yacht services" 
            className="services-hero-image"
            loading="eager"
          />
          <div className="services-hero-overlay"></div>
        </div>
        
        <div className="services-hero-content">
          <div className="services-hero-text">
            <div className="hero-decorative-line"></div>
            
            <h1 className="services-hero-title">
              Premium Yacht Services
            </h1>
            <p className="services-hero-subtitle">
              Comprehensive solutions for every aspect of yacht ownership and operation, 
              delivered with uncompromising quality and attention to detail.
            </p>
            
            <div className="hero-stats-grid">
              <div className="hero-stat-item">
                <span className="hero-stat-number">15+</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">500+</span>
                <span className="hero-stat-label">Yachts Serviced</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">24/7</span>
                <span className="hero-stat-label">Support</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">100%</span>
                <span className="hero-stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          className={`services-section ${index % 2 === 1 ? 'services-section-reverse' : ''}`}
          data-section={`service-${index}`}
        >
          <div className="services-container">
            <div className={`services-section-content ${isVisible[`service-${index}`] ? 'services-fade-in' : ''}`}>
              <div className="services-section-text">
                {service.icon}
                <h2 className="services-section-title">{service.title}</h2>
                <p className="services-section-description">{service.description}</p>
                
                <ul className="services-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="services-feature-item">
                      <Check className="services-check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/service/${service.id}`}
                  className="services-section-btn"
                >
                  <ArrowRight className="services-btn-icon" />
                  Learn More
                </Link>
              </div>
              
              <div className="services-section-image">
                <img
                  src={service.image}
                  alt={service.title}
                  className="services-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Services;
