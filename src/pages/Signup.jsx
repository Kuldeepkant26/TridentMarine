import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight, Check } from 'lucide-react'
import '../css/auth.css'

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Calculate password strength
  useEffect(() => {
    const password = formData.password
    let strength = 0
    
    if (password.length >= 8) strength += 25
    if (/[a-z]/.test(password)) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[0-9]/.test(password)) strength += 25
    
    setPasswordStrength(strength)
  }, [formData.password])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      console.log('Signup data:', formData)
    }, 2000)
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return '#ff4757'
    if (passwordStrength <= 50) return '#ffa502'
    if (passwordStrength <= 75) return '#f1c40f'
    return '#2ed573'
  }

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 25) return 'Weak'
    if (passwordStrength <= 50) return 'Fair'
    if (passwordStrength <= 75) return 'Good'
    return 'Strong'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <div className="auth-page signup-page">
      {/* Background Elements */}
      <div className="auth-background">
        <div className="auth-bg-gradient"></div>
        <div className="auth-floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
          <div className="floating-element element-4"></div>
        </div>
      </div>

      <motion.div 
        className="auth-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="auth-card signup-card" variants={itemVariants}>
          {/* Header */}
          <motion.div className="auth-header" variants={itemVariants}>
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Join Trident Marine and explore premium marine services</p>
          </motion.div>

          {/* Form */}
          <motion.form 
            className="auth-form signup-form" 
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            {/* Name Fields Row */}
            <motion.div className="auth-row" variants={itemVariants}>
              <div className="auth-field-group">
                <div className="auth-input-container">
                  <input
                    type="text"
                    name="firstName"
                    className="auth-input"
                    placeholder=" "
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <label className="auth-floating-label">First Name</label>
                  <div className="auth-input-underline"></div>
                </div>
              </div>
              <div className="auth-field-group">
                <div className="auth-input-container">
                  <input
                    type="text"
                    name="lastName"
                    className="auth-input"
                    placeholder=" "
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <label className="auth-floating-label">Last Name</label>
                  <div className="auth-input-underline"></div>
                </div>
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div className="auth-field-group" variants={itemVariants}>
              <div className="auth-input-container">
                <input
                  type="email"
                  name="email"
                  className="auth-input"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label className="auth-floating-label">Email Address</label>
                <div className="auth-input-underline"></div>
              </div>
            </motion.div>

            {/* Phone Field */}
            <motion.div className="auth-field-group" variants={itemVariants}>
              <div className="auth-input-container">
                <input
                  type="tel"
                  name="phone"
                  className="auth-input"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label className="auth-floating-label">Phone Number</label>
                <div className="auth-input-underline"></div>
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div className="auth-field-group" variants={itemVariants}>
              <div className="auth-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="auth-input"
                  placeholder=" "
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label className="auth-floating-label">Password</label>
                <div className="auth-input-underline"></div>
                <button
                  type="button"
                  className="auth-toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {formData.password && (
                <div className="password-strength">
                  <div className="password-strength-bar">
                    <div 
                      className="password-strength-fill"
                      style={{ 
                        width: `${passwordStrength}%`,
                        backgroundColor: getPasswordStrengthColor()
                      }}
                    ></div>
                  </div>
                  <span 
                    className="password-strength-text"
                    style={{ color: getPasswordStrengthColor() }}
                  >
                    {getPasswordStrengthText()}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Confirm Password Field */}
            <motion.div className="auth-field-group" variants={itemVariants}>
              <div className="auth-input-container">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  className="auth-input"
                  placeholder=" "
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <label className="auth-floating-label">Confirm Password</label>
                <div className="auth-input-underline"></div>
                <button
                  type="button"
                  className="auth-toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {formData.confirmPassword && (
                  <div className="password-match-indicator">
                    {formData.password === formData.confirmPassword ? (
                      <Check size={16} style={{ color: '#2ed573' }} />
                    ) : (
                      <span style={{ color: '#ff4757', fontSize: '12px' }}>×</span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Terms and Conditions */}
            <motion.div className="auth-terms" variants={itemVariants}>
              <label className="auth-checkbox">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                I agree to the <Link to="#" className="auth-link">Terms of Service</Link> and <Link to="#" className="auth-link">Privacy Policy</Link>
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="auth-submit-btn"
              disabled={isLoading}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <div className="auth-spinner"></div>
              ) : (
                <>
                  Create Account
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Footer */}
          <motion.div className="auth-footer" variants={itemVariants}>
            <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Signup
