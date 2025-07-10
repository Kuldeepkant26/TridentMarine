import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../css/navbar.css'
import logo from '../assets/logoTM.png'
import logoname from '../assets/logoname.png'

const Navbar = ({ showAnimation = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

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
    { name: 'Interior', id: 'interior' },
    { name: 'Exterior', id: 'exterior' },
    { name: 'Maintenance', id: 'maintenance' },
    { name: 'Project Management', id: 'project-management' },
    { name: 'Captain & Crew', id: 'captain-crew' },
    { name: 'Concierge', id: 'concierge' },
    { name: 'All Services', id: 'all', link: '/services' }
  ]

  const programsItems = [
    { name: 'Entry Program', id: 'entry-program' },
    { name: 'Moderate Program', id: 'moderate-program' },
    { name: 'Signature Program', id: 'signature-program' },
    { name: 'Sportfish Program', id: 'sportfish-program' },
    { name: 'All Programs', id: 'all', link: '/programs' }
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
        y: 0
      }}
      transition={{
        y: showAnimation ? { ease: [0.42, 0, 0.58, 1], duration: 0.8, delay: 1.5 } : { ease: [0.42, 0, 0.58, 1], duration: 0.6 },
        opacity: showAnimation ? { duration: 0.6, delay: 1.5, ease: [0.4, 0, 0.2, 1] } : { duration: 0 }
      }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Trident Marine" className="logo-image" />
          <img src={logoname} alt="Trident Marine" className="logo-name" />
         
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
                  to={item.link || `/service/${item.id}`}
                  className="dropdown-item"
                >
                  {item.name}
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
                  to={item.link || `/program/${item.id}`}
                  className="dropdown-item"
                >
                  {item.name}
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
          <Link
            to="/dashboard"
            className={`navbar-link ${isActive('/dashboard') ? 'active' : ''}`}
          >
            Dashboard
          </Link>
        </div>

        {/* Login Button */}
        <div className="navbar-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>
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
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div className={`sidebar-dropdown-content ${activeDropdown === 'services' ? 'show' : ''}`}>
              {servicesItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link || `/service/${item.id}`}
                  className="sidebar-dropdown-item"
                >
                  {item.name}
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
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div className={`sidebar-dropdown-content ${activeDropdown === 'programs' ? 'show' : ''}`}>
              {programsItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link || `/program/${item.id}`}
                  className="sidebar-dropdown-item"
                >
                  {item.name}
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
          <Link to="/dashboard" className={`sidebar-link ${isActive('/dashboard') ? 'active' : ''}`}>
            Dashboard
          </Link>

          <Link to="/login" className="sidebar-login-btn">
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
    </motion.nav>
  )
}

export default Navbar
