import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Star, 
  Crown, 
  Target, 
  Zap, 
  ArrowRight,
  Check
} from 'lucide-react';
import '../css/allprograms.css';

// Image URLs
const heroImage = 'https://images.unsplash.com/photo-1523496922380-91d5afba98a3?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const entryProgramImage = 'https://images.unsplash.com/photo-1561751788-85fcb8b78413?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const moderateProgramImage = 'https://img.freepik.com/premium-photo/concierge-booking-luxury-yacht-tour-hotel-guests-with-marina-background_1327465-8959.jpg';
const signatureProgramImage = 'https://images.unsplash.com/photo-1599582350162-83106f579198?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const sportfishProgramImage = 'https://images.pexels.com/photos/12877390/pexels-photo-12877390.jpeg';

function AllPrograms() {
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

  const programs = [
    {
      id: 'entry-program',
      title: 'Entry Program',
      description: 'Perfect for first-time yacht owners and those new to luxury marine experiences. This comprehensive program introduces you to the fundamentals of yacht ownership and management.',
      image: entryProgramImage,
      icon: <Star className="allprograms-icon" />,
      features: [
        'Basic Yacht Management',
        'Safety & Navigation Training',
        'Maintenance Guidelines',
        'Guest Services Introduction'
      ]
    },
    {
      id: 'moderate-program',
      title: 'Moderate Program',
      description: 'Designed for yacht owners seeking enhanced services and elevated experiences. This program builds upon the basics with advanced features and personalized support.',
      image: moderateProgramImage,
      icon: <Target className="allprograms-icon" />,
      features: [
        'Advanced Yacht Operations',
        'Premium Maintenance Plans',
        'Concierge Services',
        'Custom Itinerary Planning'
      ]
    },
    {
      id: 'signature-program',
      title: 'Signature Program',
      description: 'Our premium offering for discerning yacht owners who demand excellence. Experience the pinnacle of luxury yacht management with our signature level of service.',
      image: signatureProgramImage,
      icon: <Crown className="allprograms-icon" />,
      features: [
        'Full-Service Yacht Management',
        'Dedicated Account Manager',
        'Luxury Provisioning',
        'Exclusive Event Planning'
      ]
    },
    {
      id: 'sportfish-program',
      title: 'Sportfish Program',
      description: 'Specialized program for sport fishing enthusiasts and competitive anglers. Tailored services for sportfish vessels with focus on performance and tournament readiness.',
      image: sportfishProgramImage,
      icon: <Trophy className="allprograms-icon" />,
      features: [
        'Tournament Preparation',
        'Specialized Equipment Care',
        'Performance Optimization',
        'Fishing Charter Coordination'
      ]
    }
  ];

  return (
    <div className="allprograms-page">
      {/* Hero Section */}
      <section className="allprograms-hero">
        <div className="allprograms-hero-background">
          <img 
            src={heroImage}
            alt="Luxury yacht programs" 
            className="allprograms-hero-image"
            loading="eager"
          />
          <div className="allprograms-hero-overlay"></div>
        </div>
        
        <div className="allprograms-hero-content">
          <div className="allprograms-hero-text">
            <div className="hero-decorative-line"></div>
            <h1 className="allprograms-hero-title">Premium Yacht Programs</h1>
            <p className="allprograms-hero-subtitle">
              Tailored yacht management solutions that elevate your maritime experience, from entry-level guidance to luxury services. Find your perfect program with us.
            </p>
            
            <div className="hero-stats-grid">
              <div className="hero-stat-item">
                <span className="hero-stat-number">4</span>
                <span className="hero-stat-label">Program Tiers</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">500+</span>
                <span className="hero-stat-label">Satisfied Clients</span>
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

      {/* Programs Sections */}
      {programs.map((program, index) => (
        <section 
          key={program.id}
          className={`allprograms-section ${index % 2 === 1 ? 'allprograms-section-reverse' : ''}`}
          data-section={`program-${index}`}
        >
          <div className="allprograms-container">
            <div className={`allprograms-section-content ${isVisible[`program-${index}`] ? 'allprograms-fade-in' : ''}`}>
              <div className="allprograms-section-text">
                {program.icon}
                <h2 className="allprograms-section-title">{program.title}</h2>
                <p className="allprograms-section-description">{program.description}</p>
                
                <ul className="allprograms-features-list">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="allprograms-feature-item">
                      <Check className="allprograms-check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/program/${program.id}`}
                  className="allprograms-section-btn"
                >
                  <ArrowRight className="allprograms-btn-icon" />
                  Explore Program
                </Link>
              </div>
              
              <div className="allprograms-section-image">
                <img
                  src={program.image}
                  alt={program.title}
                  className="allprograms-image"
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

export default AllPrograms;
