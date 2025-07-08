import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import '../css/home.css'

const Home = ({ showAnimation = false }) => {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  // Ensure video starts playing immediately when Home component mounts
  useEffect(() => {
    if (videoRef.current) {
      // Set video properties for better compatibility
      videoRef.current.muted = true
      videoRef.current.playsInline = true
      videoRef.current.autoplay = true
      
      // Try to play the video
      const playPromise = videoRef.current.play()
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video autoplay failed:', error)
        })
      }
    }
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <motion.div 
          className="hero-video-container"
          style={{ scale, opacity }}
        >
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            className="hero-video"
            poster="/hero-poster.jpg"
            playsInline
          >
            <source src="https://cdn.pixabay.com/video/2022/06/06/119443-717712224_large.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </motion.div>
        
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={showAnimation ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }}
            animate={showAnimation ? { opacity: 1, y: 0 } : {}}
            transition={showAnimation ? { duration: 1.2, delay: 1.5, ease: "easeOut" } : {}}
          >
            <motion.h1 
              className="hero-title"
              initial={showAnimation ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
              animate={showAnimation ? { opacity: 1, y: 0 } : {}}
              transition={showAnimation ? { duration: 1, delay: 1.8 } : {}}
            >
              Thrill of the
              <span className="hero-title-accent"> Fleet</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={showAnimation ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={showAnimation ? { opacity: 1, y: 0 } : {}}
              transition={showAnimation ? { duration: 1, delay: 2.1 } : {}}
            >
              Premium fleet management solutions for luxury yacht owners. 
              Experience excellence in marine service and maintenance.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={showAnimation ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={showAnimation ? { opacity: 1, y: 0 } : {}}
              transition={showAnimation ? { duration: 1, delay: 2.4 } : {}}
            >
              <button className="hero-btn primary">
                Explore Fleet Management
              </button>
              <button className="hero-btn secondary">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Distinction in Detail Section */}
      <DistinctionSection />

      {/* Marine Excellence Section */}
      <MarineExcellenceSection />

      {/* Fleet Gallery Section */}
      <FleetGallerySection />

      {/* Excellence & Innovation Section */}
      <ExcellenceInnovationSection />
    </div>
  )
}

// Distinction in Detail Component
const DistinctionSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="distinction-section" ref={sectionRef}>
      <div className="container">
        <div className="distinction-layout">
          {/* Content Side */}
          <motion.div 
            className="distinction-content"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="distinction-title">Heritage of Excellence</h2>
            
            <motion.p 
              className="distinction-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Distinguished by our unwavering commitment to maritime excellence, Trident Marine stands as the pinnacle of luxury yacht management in the Seychelles. Our distinguished heritage encompasses decades of refined craftsmanship, delivering extraordinary experiences for the world's most discerning clientele.
            </motion.p>
            
            <motion.div 
              className="distinction-features"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="feature-item">
                <div className="feature-number">Luxury</div>
                <div className="feature-text">Charters</div>
              </div>
              <div className="feature-item">
                <div className="feature-number">Bespoke</div>
                <div className="feature-text">Itineraries</div>
              </div>
              <div className="feature-item">
                <div className="feature-number">Expert</div>
                <div className="feature-text">Crew</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="distinction-link"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="/about" className="discover-link">
                Explore our heritage →
              </a>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            className="distinction-image"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1559385301-0187cb6eff46?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Luxury yacht craftsmanship" 
                className="distinction-img"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <span className="overlay-text">Craftsmanship Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Marine Excellence Component
const MarineExcellenceSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="marine-excellence-section" ref={sectionRef}>
      <div className="container">
        <div className="marine-excellence-layout">
          {/* Image Side - Left */}
          <motion.div 
            className="marine-excellence-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="marine-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1616207133639-cd5e4db9859f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Premium marine services" 
                className="marine-excellence-img"
              />
              <div className="marine-image-overlay">
                <div className="marine-overlay-content">
                  <span className="marine-overlay-text">Premium Service</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div 
            className="marine-excellence-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="marine-excellence-title">An Unforgettable Experience</h2>
            
            <motion.p 
              className="marine-excellence-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With our exciting fleet of yachts and a dedicated team of experienced crew, we are committed to providing our guests with an unforgettable experience at sea. Our tailor-made itineraries take you through some of the world's most awe-inspiring waters, from world-class diving to exploring deserted islands.
            </motion.p>
            
            <motion.div 
              className="marine-excellence-features"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="marine-feature-item">
                <div className="marine-feature-number">24/7</div>
                <div className="marine-feature-text">Support</div>
              </div>
              <div className="marine-feature-item">
                <div className="marine-feature-number">100%</div>
                <div className="marine-feature-text">Satisfaction</div>
              </div>
              <div className="marine-feature-item">
                <div className="marine-feature-number">Elite</div>
                <div className="marine-feature-text">Technicians</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="marine-excellence-link"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#" className="marine-discover-link">
                Explore Our Services →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Fleet Gallery Component
const FleetGallerySection = () => {
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: galleryRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // Check if we're on mobile
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const yachts = [
    {
      src: "https://images.unsplash.com/photo-1523496922380-91d5afba98a3?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ocean Majesty",
      subtitle: "Luxury superyacht with premium amenities and world-class service",
      badge: "Premium Fleet"
    },
    {
      src: "https://images.pexels.com/photos/32710080/pexels-photo-32710080.jpeg",
      title: "Azure Dreams",
      subtitle: "Elegant design meets cutting-edge marine technology",
      badge: "Signature Series"
    },
    {
      src: "https://img.freepik.com/premium-photo/cinematic-shot-luxury-yacht_1409-7564.jpg",
      title: "Neptune's Crown",
      subtitle: "The pinnacle of maritime excellence and sophistication",
      badge: "Flagship"
    },
    {
      src: "https://images.pexels.com/photos/12877390/pexels-photo-12877390.jpeg",
      title: "Serenity Elite",
      subtitle: "Where luxury meets adventure on the open seas",
      badge: "Elite Class"
    }
  ];

  return (
    <section className="fleet-gallery-section" ref={galleryRef}>
      <div className="container">
        <h2 className="section-title">Our Premier Fleet</h2>
      </div>
      <motion.div 
        className="horizontal-scroll-container" 
        style={isMobile ? {} : { x }}
      >
        {yachts.map((yacht, i) => (
          <div key={i} className="gallery-item">
            <img src={yacht.src} alt={yacht.title} />
            <div className="gallery-overlay">
              <div className="gallery-overlay-content">
                <h3 className="gallery-overlay-title">{yacht.title}</h3>
                <p className="gallery-overlay-subtitle">{yacht.subtitle}</p>
                <span className="gallery-overlay-badge">{yacht.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

// Excellence & Innovation Component
const ExcellenceInnovationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="excellence-innovation-section" ref={sectionRef}>
      <div className="container">
        <div className="excellence-layout">
          {/* Image Side - Left */}
          <motion.div 
            className="excellence-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="excellence-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1599582350162-83106f579198?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Marine innovation and technology" 
                className="excellence-img"
              />
              <div className="excellence-badge">
                <span className="badge-text">Innovation</span>
                <span className="badge-subtext">Since 1965</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div 
            className="excellence-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="excellence-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Excellence & Innovation
            </motion.div>

            <h2 className="excellence-title">
              Where Tradition Meets Technology
            </h2>
            
            <motion.p 
              className="excellence-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our commitment to excellence drives us to continuously innovate and push the boundaries of marine craftsmanship. From cutting-edge technology to time-honored techniques, we blend the best of both worlds to deliver unparalleled service quality.
            </motion.p>
            
            <motion.div 
              className="excellence-highlights"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Advanced Technology</h4>
                  <p>State-of-the-art equipment and processes</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Proven Excellence</h4>
                  <p>Award-winning service and craftsmanship</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Marine Expertise</h4>
                  <p>Decades of specialized knowledge</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="excellence-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a href="#" className="excellence-link">
                Learn About Our Process →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home
