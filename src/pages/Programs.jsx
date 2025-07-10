import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import '../css/programs.css'

// External image URL
const heroImage = 'https://images.unsplash.com/photo-1559385301-0187cb6eff46?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

function Programs() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="programs-hero-background">
          <img 
            src={heroImage}
            alt="Luxury yacht programs" 
            className="programs-hero-image"
            loading="eager"
          />
          <div className="programs-hero-overlay"></div>
        </div>
        
        <div className="programs-hero-content">
          <div className="programs-hero-text">
            <div className="hero-decorative-line"></div>
            
            <h1 className="programs-hero-title">Yacht Management Programs</h1>
            <p className="programs-hero-subtitle">
              Tailored yacht management solutions designed to meet the unique needs of your vessel.
              Our comprehensive programs ensure your yacht receives the highest level of care and attention.
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
                <span className="hero-stat-label">Customizable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional content can be added here */}
    </div>
  )
}

export default Programs
