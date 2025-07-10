import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import '../css/auth.css'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      console.log('Login data:', formData)
    }, 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="auth-page login-page">
      {/* Background Elements */}
      <div className="auth-background">
        <div className="auth-bg-gradient"></div>
        <div className="auth-floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>
      </div>

      <motion.div 
        className="auth-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="auth-card" variants={itemVariants}>
          {/* Header */}
          <motion.div className="auth-header" variants={itemVariants}>
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Sign in to your Trident Marine account</p>
          </motion.div>

          {/* Form */}
          <motion.form 
            className="auth-form" 
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
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
            </motion.div>

            {/* Additional Options */}
            <motion.div className="auth-options" variants={itemVariants}>
              <label className="auth-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <Link to="#" className="auth-link">Forgot password?</Link>
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
                  Sign In
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Footer */}
          <motion.div className="auth-footer" variants={itemVariants}>
            <p>Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link></p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Login
