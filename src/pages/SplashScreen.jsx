import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../css/SplashScreen.css'
import logo from '../assets/trident_marine_logo.png'

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show splash screen for 2.5 seconds on every visit
    const timer = setTimeout(() => {
      setIsVisible(false)
      
      // Call onComplete after fade out animation
      setTimeout(() => {
        onComplete()
      }, 800) // Match the exit animation duration
    }, 2500) // Show for 2.5 seconds

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1] // Premium cubic-bezier easing
          }}
        >
          <motion.div
            className="splash-content"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -20 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <motion.img
              src={logo}
              alt="Trident Marine"
              className="splash-logo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }}
            />
            
            <motion.div
              className="splash-loader"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{
                duration: 2,
                delay: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
