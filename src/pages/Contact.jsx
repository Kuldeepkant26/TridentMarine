import React, { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle, User, Anchor, Ship, Settings, Calendar } from 'lucide-react'
import '../css/contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    location: '',
    urgency: '',
    projectDetails: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isVisible, setIsVisible] = useState({})

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

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
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const serviceTypes = [
    // Services
    { value: 'interior', label: 'Interior Services', category: 'Services', icon: <User className="contact-option-icon" /> },
    { value: 'exterior', label: 'Exterior Services', category: 'Services', icon: <Ship className="contact-option-icon" /> },
    { value: 'maintenance', label: 'Maintenance Services', category: 'Services', icon: <Settings className="contact-option-icon" /> },
    { value: 'project-management', label: 'Project Management', category: 'Services', icon: <CheckCircle className="contact-option-icon" /> },
    { value: 'captain-crew', label: 'Captain & Crew Services', category: 'Services', icon: <Anchor className="contact-option-icon" /> },
    { value: 'concierge', label: 'Concierge Services', category: 'Services', icon: <Calendar className="contact-option-icon" /> },
    { value: 'all-services', label: 'All Services', category: 'Services', icon: <Ship className="contact-option-icon" /> },
    
    // Programs
    { value: 'entry-program', label: 'Entry Program', category: 'Programs', icon: <CheckCircle className="contact-option-icon" /> },
    { value: 'moderate-program', label: 'Moderate Program', category: 'Programs', icon: <Settings className="contact-option-icon" /> },
    { value: 'signature-program', label: 'Signature Program', category: 'Programs', icon: <Anchor className="contact-option-icon" /> },
    { value: 'sportfish-program', label: 'Sportfish Program', category: 'Programs', icon: <Ship className="contact-option-icon" /> },
    { value: 'all-programs', label: 'All Programs', category: 'Programs', icon: <Calendar className="contact-option-icon" /> }
  ]

  const urgencyLevels = [
    { value: 'low', label: 'No Rush - Planning Phase', color: 'contact-urgency-low' },
    { value: 'medium', label: 'Standard - Within 2-4 Weeks', color: 'contact-urgency-medium' },
    { value: 'high', label: 'Urgent - Within 1 Week', color: 'contact-urgency-high' },
    { value: 'emergency', label: 'Emergency - Immediate', color: 'contact-urgency-emergency' }
  ]

  const contactInfo = [
    {
      icon: <Phone className="contact-info-icon" />,
      title: "Call Us",
      details: ["+1 (555) 123-YACHT", "Available 24/7 for emergencies"],
      action: "tel:+15551234282"
    },
    {
      icon: <Mail className="contact-info-icon" />,
      title: "Email Us",
      details: ["hello@tridentmarine.com", "Response within 2 hours"],
      action: "mailto:hello@tridentmarine.com"
    },
    {
      icon: <MapPin className="contact-info-icon" />,
      title: "Visit Us",
      details: ["Marina Bay, Seychelles", "Open 7 days a week"],
      action: "https://maps.google.com"
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service or program type'
    }
    
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    setErrors({})
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceType: '',
        location: '',
        urgency: '',
        projectDetails: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <img 
            src="https://images.unsplash.com/photo-1540946485063-a40da27bea1e?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Luxury yacht at marina" 
            className="contact-hero-image"
          />
          <div className="contact-hero-overlay"></div>
        </div>
        
        <div className="contact-hero-content">
          <div className="contact-container">
            <div className="contact-hero-text">
              <h1 className="contact-hero-title">
                Start Your Luxury Yacht Journey
              </h1>
              <p className="contact-hero-subtitle">
                Connect with our expert team to discuss your yacht management, charter, or maintenance needs. 
                We're here to deliver exceptional service across the pristine waters of Seychelles.
              </p>
              <div className="contact-hero-buttons">
                <button 
                  onClick={scrollToForm}
                  className="contact-btn contact-btn-primary"
                >
                  <Send className="contact-btn-icon" />
                  Start Your Project
                </button>
                <a 
                  href="tel:+15551234282"
                  className="contact-btn contact-btn-secondary"
                >
                  <Phone className="contact-btn-icon" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        id="contact-form"
        className="contact-form-section"
        data-section="contact-form"
      >
        <div className="contact-container">
          <div className={`contact-form-content ${isVisible['contact-form'] ? 'contact-fade-in' : ''}`}>
            <div className="contact-section-header">
              <h2 className="contact-section-title">Tell Us About Your Project</h2>
              <p className="contact-section-subtitle">
                Share your requirements and we'll create a customized solution for your yacht needs
              </p>
            </div>

            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Form Grid */}
                <div className="contact-form-grid">
                  {/* Full Name */}
                  <div className="contact-form-group contact-form-full">
                    <label htmlFor="fullName" className="contact-form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`contact-form-input ${errors.fullName ? 'contact-form-error' : ''}`}
                    />
                    {errors.fullName && (
                      <span className="contact-error-message">
                        <AlertCircle className="contact-error-icon" />
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="contact-form-group">
                    <label htmlFor="email" className="contact-form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={`contact-form-input ${errors.email ? 'contact-form-error' : ''}`}
                    />
                    {errors.email && (
                      <span className="contact-error-message">
                        <AlertCircle className="contact-error-icon" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="contact-form-group">
                    <label htmlFor="phone" className="contact-form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="contact-form-input"
                    />
                  </div>

                  {/* Service Type */}
                  <div className="contact-form-group contact-form-full">
                    <label htmlFor="serviceType" className="contact-form-label">
                      Service or Program Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className={`contact-form-select ${errors.serviceType ? 'contact-form-error' : ''}`}
                    >
                      <option value="">Select a service or program</option>
                      <optgroup label="Services">
                        {serviceTypes.filter(item => item.category === 'Services').map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Programs">
                        {serviceTypes.filter(item => item.category === 'Programs').map((program) => (
                          <option key={program.value} value={program.value}>
                            {program.label}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                    {errors.serviceType && (
                      <span className="contact-error-message">
                        <AlertCircle className="contact-error-icon" />
                        {errors.serviceType}
                      </span>
                    )}
                  </div>

                  {/* Location */}
                  <div className="contact-form-group">
                    <label htmlFor="location" className="contact-form-label">
                      Location/Marina
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Marina Bay, Miami"
                      className="contact-form-input"
                    />
                  </div>

                  {/* Project Urgency */}
                  <div className="contact-form-group">
                    <label htmlFor="urgency" className="contact-form-label">
                      Project Urgency
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="contact-form-select"
                    >
                      <option value="">Select timeline</option>
                      {urgencyLevels.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="contact-form-group contact-form-full">
                    <label htmlFor="projectDetails" className="contact-form-label">
                      Project Details *
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      placeholder="Tell us about your yacht project, specific requirements, timeline, and any other details that would help us provide the best service..."
                      rows="5"
                      className={`contact-form-textarea ${errors.projectDetails ? 'contact-form-error' : ''}`}
                    />
                    {errors.projectDetails && (
                      <span className="contact-error-message">
                        <AlertCircle className="contact-error-icon" />
                        {errors.projectDetails}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="contact-form-submit">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`contact-form-btn ${isSubmitting ? 'contact-btn-loading' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="contact-spinner"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="contact-btn-icon" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="contact-success-message">
                    <CheckCircle className="contact-success-icon" />
                    <div>
                      <h4>Message Sent Successfully!</h4>
                      <p>Thank you for contacting us. We'll get back to you within 2 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="contact-error-message contact-submit-error">
                    <AlertCircle className="contact-error-icon" />
                    <div>
                      <h4>Error Sending Message</h4>
                      <p>Please try again or contact us directly at hello@tridentmarine.com</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section 
        className="contact-info-section"
        data-section="contact-info"
      >
        <div className="contact-container">
          <div className={`contact-info-content ${isVisible['contact-info'] ? 'contact-fade-in' : ''}`}>
            <div className="contact-section-header">
              <h2 className="contact-section-title">Get in Touch</h2>
              <p className="contact-section-subtitle">
                Multiple ways to reach our expert team
              </p>
            </div>
            
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.action}
                  className="contact-info-card"
                  target={info.action.startsWith('http') ? '_blank' : '_self'}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-info-icon-container">
                    {info.icon}
                  </div>
                  <h3 className="contact-info-title">{info.title}</h3>
                  <div className="contact-info-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={idx === 0 ? 'contact-info-primary' : 'contact-info-secondary'}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
