import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import SplashScreen from './pages/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [appReady, setAppReady] = useState(false)
  const [homePageReady, setHomePageReady] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      setShowSplash(true)
      setAppReady(false)
      setHomePageReady(false)
    } else {
      setShowSplash(false)
      setAppReady(true)
      setHomePageReady(false)
    }
  }, [location.pathname])

  const handleSplashComplete = () => {
    setShowSplash(false)
    setAppReady(true)
    if (location.pathname === '/') {
      setHomePageReady(true)
    }
  }

  if (showSplash && location.pathname === '/') {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  if (!appReady && location.pathname === '/') {
    return null // Prevent rendering the app before splash is done
  }

  return (
    <>
      <Navbar showAnimation={homePageReady && location.pathname === '/'} />
      <Routes>
        <Route path='/' element={<Home showAnimation={homePageReady} />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
