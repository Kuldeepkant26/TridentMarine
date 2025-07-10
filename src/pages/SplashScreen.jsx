import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../css/SplashScreen.css'
import logo from '../assets/logoTM.png'

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    // Smooth Animation sequence:
    // 1. Blank screen (800ms) - anticipation
    // 2. Logo fades in smoothly (1000ms)
    // 3. Logo stays visible (2000ms) - extended brand presence
    // 4. Logo fades away smoothly (800ms)
    // 5. Splash screen closes
    
    const logoTimer = setTimeout(() => {
      setShowLogo(true)
    }, 800) // Show logo after blank screen

    const hideTimer = setTimeout(() => {
      setShowLogo(false)
    }, 3800) // Start hiding logo (800ms + 1000ms + 2000ms)

    const closeTimer = setTimeout(() => {
      setIsVisible(false)
      
      // Call onComplete after fade out animation
      setTimeout(() => {
        onComplete()
      }, 400) // Smooth exit animation
    }, 4600) // Close splash screen (800ms + 1000ms + 2000ms + 800ms)

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
                <>
                  <motion.div
                    className="splash-loading-ring"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        duration: 1.0,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.3
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      scale: 0.8,
                      transition: {
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                  />
                  <motion.img
                    src={logo}
                    alt="Trident Marine"
                    className="splash-logo"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: 0,
                      transition: {
                        duration: 1.0,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      scale: 0.9,
                      y: -10,
                      transition: {
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                  />
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
