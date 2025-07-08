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
import '../css/allservices.css';

function AllServices() {
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
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2940&auto=format&fit=crop',
      icon: <User className="allservices-icon" />,
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
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2940&auto=format&fit=crop',
      icon: <Ship className="allservices-icon" />,
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
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2940&auto=format&fit=crop',
      icon: <Settings className="allservices-icon" />,
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
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop',
      icon: <CheckCircle className="allservices-icon" />,
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
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940&auto=format&fit=crop',
      icon: <Anchor className="allservices-icon" />,
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
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2940&auto=format&fit=crop',
      icon: <Calendar className="allservices-icon" />,
      features: [
        'Itinerary Planning',
        'Provisioning Services',
        'Event Coordination',
        'Guest Services'
      ]
    }
  ];

  return (
    <div className="allservices-page">
      {/* Hero Section */}
      <section className="allservices-hero">
        <div className="allservices-hero-background">
          <img 
            src="https://images.unsplash.com/photo-1540946485063-a40da27bea1e?q=80&w=2940&auto=format&fit=crop"
            alt="Luxury yacht services" 
            className="allservices-hero-image"
            loading="eager"
          />
          <div className="allservices-hero-overlay"></div>
        </div>
        
        <div className="allservices-hero-content">
          <div className="allservices-hero-text">
            <h1 className="allservices-hero-title">
              Premium Yacht Services
            </h1>
            <p className="allservices-hero-subtitle">
              Comprehensive solutions for every aspect of yacht ownership and operation, 
              delivered with uncompromising quality and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          className={`allservices-section ${index % 2 === 1 ? 'allservices-section-reverse' : ''}`}
          data-section={`service-${index}`}
        >
          <div className="allservices-container">
            <div className={`allservices-section-content ${isVisible[`service-${index}`] ? 'allservices-fade-in' : ''}`}>
              <div className="allservices-section-text">
                {service.icon}
                <h2 className="allservices-section-title">{service.title}</h2>
                <p className="allservices-section-description">{service.description}</p>
                
                <ul className="allservices-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="allservices-feature-item">
                      <Check className="allservices-check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/service/${service.id}`}
                  className="allservices-section-btn"
                >
                  <ArrowRight className="allservices-btn-icon" />
                  Learn More
                </Link>
              </div>
              
              <div className="allservices-section-image">
                <img
                  src={service.image}
                  alt={service.title}
                  className="allservices-image"
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

export default AllServices;