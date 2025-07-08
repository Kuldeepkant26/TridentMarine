import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../css/SplashScreen.css'
import logo from '../assets/trident_marine_logo.png'

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    // Premium Animation sequence:
    // 1. Blank screen (600ms) - longer pause for anticipation
    // 2. Logo fades in elegantly (800ms)
    // 3. Logo stays visible (1200ms) - longer brand presence
    // 4. Logo fades away smoothly (600ms)
    // 5. Splash screen closes
    
    const logoTimer = setTimeout(() => {
      setShowLogo(true)
    }, 600) // Show logo after extended blank screen

    const hideTimer = setTimeout(() => {
      setShowLogo(false)
    }, 2600) // Start hiding logo (600ms + 800ms + 1200ms)

    const closeTimer = setTimeout(() => {
      setIsVisible(false)
      
      // Call onComplete after fade out animation
      setTimeout(() => {
        onComplete()
      }, 300) // Faster exit animation for empty screen
    }, 3200) // Close splash screen (600ms + 800ms + 1200ms + 600ms)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(hideTimer)
      clearTimeout(closeTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            exit: {
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }
          }}
        >
          <motion.div
            className="splash-content"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AnimatePresence>
              {showLogo && (
                <motion.img
                  src={logo}
                  alt="Trident Marine"
                  className="splash-logo"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.1
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    scale: 0.95,
                    y: -5,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
