import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../css/navbar.css'
import logo from '../assets/trident_marine_logo.png'

const Navbar = ({ showAnimation = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

  // Handle scroll effect for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (isMenuOpen) {
        setVisible(true)
        return
      }
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false)
      } else {
        // Scrolling up
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMenuOpen])

  // Close mobile menu when route changes & prevent body scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  const servicesItems = [
    'Interior',
    'Exterior', 
    'Maintenance',
    'Project Management',
    'Captain & Crew',
    'Concierge',
    'All Services'
  ]

  const programsItems = [
    'Entry Program',
    'Moderate Program',
    'Signature Program',
    'Sportfish Program',
    'All Programs'
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <motion.nav 
      className={`navbar`}
      initial={showAnimation ? { opacity: 0, y: -100 } : false}
      animate={{
        opacity: 1, 
        y: visible ? 0 : -100 
      }}
      transition={{ 
        y: { ease: [0.42, 0, 0.58, 1], duration: 0.6 },
        opacity: showAnimation ? { duration: 0.8, delay: 1.5, ease: [0.4, 0, 0.2, 1] } : { duration: 0 }
      }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Trident Marine" className="logo-image" />
          
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div 
            className="navbar-dropdown"
            onMouseEnter={() => handleDropdownHover('services')}
            onMouseLeave={handleDropdownLeave}
          >
            <Link 
              to="/services" 
              className={`navbar-link dropdown-trigger ${isActive('/services') ? 'active' : ''}`}
            >
              Services
            </Link>
            <div className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
              {servicesItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="dropdown-item"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs Dropdown */}
          <div 
            className="navbar-dropdown"
            onMouseEnter={() => handleDropdownHover('programs')}
            onMouseLeave={handleDropdownLeave}
          >
            <Link 
              to="/programs" 
              className={`navbar-link dropdown-trigger ${isActive('/programs') ? 'active' : ''}`}
            >
              Programs
            </Link>
            <div className={`dropdown-menu ${activeDropdown === 'programs' ? 'show' : ''}`}>
              {programsItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={`/programs/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="dropdown-item"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            to="/about" 
            className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>

        {/* Login Button */}
        <div className="navbar-actions">
          <button className="login-btn">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src={logo} alt="Trident Marine" className="sidebar-logo" />
          <button 
            className="sidebar-close"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="sidebar-content">
          <Link to="/" className={`sidebar-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>

          {/* Mobile Services */}
          <div className="sidebar-dropdown">
            <button 
              className={`sidebar-dropdown-btn ${activeDropdown === 'services' ? 'active' : ''}`}
              onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
            >
              Services
              <span className="dropdown-arrow">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <div className={`sidebar-dropdown-content ${activeDropdown === 'services' ? 'show' : ''}`}>
              {servicesItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="sidebar-dropdown-item"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Programs */}
          <div className="sidebar-dropdown">
            <button 
              className={`sidebar-dropdown-btn ${activeDropdown === 'programs' ? 'active' : ''}`}
              onClick={() => setActiveDropdown(activeDropdown === 'programs' ? null : 'programs')}
            >
              Programs
              <span className="dropdown-arrow">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <div className={`sidebar-dropdown-content ${activeDropdown === 'programs' ? 'show' : ''}`}>
              {programsItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={`/programs/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="sidebar-dropdown-item"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className={`sidebar-link ${isActive('/about') ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/contact" className={`sidebar-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact
          </Link>

          <button className="sidebar-login-btn">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
    </motion.nav>
  )
}

export default Navbar
