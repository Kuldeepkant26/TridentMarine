import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Programs from './pages/Programs'
import AllServices from './pages/AllServices'
import AllPrograms from './pages/AllPrograms'
import ServiceDetail from './pages/ServiceDetail'
import ProgramDetail from './pages/ProgramDetail'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import SplashScreen from './pages/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(false)
  const [appReady, setAppReady] = useState(true)
  const [homePageReady, setHomePageReady] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      // Check if we came from navigation (has navigation flag)
      const hasNavigated = localStorage.getItem('trident-navigated')
      
      if (hasNavigated) {
        // Coming from navigation - skip splash
        setShowSplash(false)
        setAppReady(true)
        setHomePageReady(true)
      } else {
        // Fresh page load - show splash
        setShowSplash(true)
        setAppReady(false)
        setHomePageReady(false)
      }
    } else {
      // On other pages - set navigation flag and ensure app is ready
      localStorage.setItem('trident-navigated', 'true')
      setShowSplash(false)
      setAppReady(true)
      setHomePageReady(false)
    }
  }, [location.pathname])

  // Clear navigation flag on page refresh/reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('trident-navigated')
    }
    
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    setAppReady(true)
    setHomePageReady(true)
  }

  if (showSplash && location.pathname === '/') {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  if (!appReady && location.pathname === '/') {
    return null // Prevent rendering the app before splash is done
  }

  return (
    <>
      {location.pathname !== '/dashboard' && <Navbar showAnimation={homePageReady && location.pathname === '/'} />}
      <Routes>
        <Route path='/' element={<Home showAnimation={homePageReady} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service/:serviceId' element={<ServiceDetail />} />
        <Route path='/programs' element={<AllPrograms />} />
        <Route path='/program/:programId' element={<ProgramDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      {location.pathname !== '/dashboard' && <Footer />}
    </>
  )
}

export default App
