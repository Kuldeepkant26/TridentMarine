import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import '../css/home.css'
import TridentLogo from '../assets/trident_marine_logo.png';

// Video URL
const TMHomeVideo = 'https://res.cloudinary.com/dje2ljyce/video/upload/v1752131109/TM_home_jk1kvy.mp4';

// Image URLs
const BoatImage = 'https://images.unsplash.com/photo-1559385301-0187cb6eff46?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const HomeImg = 'https://images.unsplash.com/photo-1599582350162-83106f579198?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Home1 = 'https://images.unsplash.com/photo-1561751788-85fcb8b78413?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Home2 = 'https://img.freepik.com/premium-photo/concierge-booking-luxury-yacht-tour-hotel-guests-with-marina-background_1327465-8959.jpg';
const Home3 = 'https://images.unsplash.com/photo-1616207133639-cd5e4db9859f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Home4 = 'https://images.unsplash.com/photo-1523496922380-91d5afba98a3?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Home5 = 'https://images.pexels.com/photos/32710080/pexels-photo-32710080.jpeg';
const Interior1 = 'https://i.pinimg.com/736x/28/5b/7f/285b7f198575aa749b4800bde073c93a.jpg';

const Home = ({ showAnimation = false }) => {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

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
            <source src={TMHomeVideo} type="video/mp4" />
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

      {/* Excellence & Innovation Section */}
      <ExcellenceInnovationSection />

      {/* Marine Excellence Section */}
      <MarineExcellenceSection />

      {/* Distinction in Detail Section */}
      <DistinctionSection />

      {/* Fleet Gallery Section */}
      <FleetGallerySection />
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
            <h2 className="distinction-title">Our Services</h2>
            
            <motion.p 
              className="distinction-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From luxury yacht detailing and professional maintenance to complete project management and concierge services, Trident Marine offers a full spectrum of premium yacht services. Our experienced team of technicians and marine specialists ensure your vessel receives the highest level of care and attention, keeping you focused on what matters most - enjoying your time on the water.
            </motion.p>
            
            <motion.div 
              className="distinction-features"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="feature-item">
                <div className="feature-number">Yacht</div>
                <div className="feature-text">Detailing</div>
              </div>
              <div className="feature-item">
                <div className="feature-number">Maintenance</div>
                <div className="feature-text">& Repair</div>
              </div>
              <div className="feature-item">
                <div className="feature-number">Concierge</div>
                <div className="feature-text">Services</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="distinction-link"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="/services" className="discover-link">
                See All Services →
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
                src={Home3} 
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
                src={Home2} 
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
            <h2 className="marine-excellence-title">Custom Yacht Management Programs</h2>
            
            <motion.p 
              className="marine-excellence-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Trident Marine is a fully licensed and insured yacht management company providing custom yacht management programs specific to the owner and the boat. With over 25 years of experience in the yachting industry, we've developed close relationships with the best vendors and service yards to better serve our customers. With Trident Marine as your yacht maintenance solution, you'll be on your way to an unforgettable yacht ownership experience made easy for you and your family.
            </motion.p>
            
            <motion.div 
              className="marine-excellence-features"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="marine-feature-item">
                <div className="marine-feature-number">25+</div>
                <div className="marine-feature-text">Years Experience</div>
              </div>
              <div className="marine-feature-item">
                <div className="marine-feature-number">Custom</div>
                <div className="marine-feature-text">Programs</div>
              </div>
              <div className="marine-feature-item">
                <div className="marine-feature-number">Licensed</div>
                <div className="marine-feature-text">& Insured</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="marine-excellence-link"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="/programs" className="marine-discover-link">
                Learn More →
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
  const { scrollYProgress } = useScroll({ 
    target: galleryRef, 
    offset: ["start end", "end start"] 
  });
  
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["-10%", "10%"]
  );

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
      src: Home4,
      title: "Yacht Management Dashboard",
      subtitle: "Monitor your yacht from anywhere in the world with our proprietary management app",
      badge: "New Technology"
    },
    {
      src: Home5,
      title: "Yacht Protection Concepts",
      subtitle: "Innovative marine products and methods bringing new technologies to yacht owners",
      badge: "Innovation"
    },
    {
      src: BoatImage,
      title: "Professional Detailing",
      subtitle: "Expert yacht detailing services keeping your vessel in pristine condition",
      badge: "Premium Service"
    },
    {
      src: Interior1,
      title: "On-Staff Technicians",
      subtitle: "Reducing downtime with our team of qualified service technicians",
      badge: "Expert Care"
    },
    {
      src: Home2,
      title: "Concierge Services",
      subtitle: "Personal concierge services ensuring every detail is handled with precision and care",
      badge: "Luxury Experience"
    }
  ];

  return (
    <section className="fleet-gallery-section" ref={galleryRef}>
      <div className="container">
        <h2 className="section-title">Why Choose Trident Marine Excellence</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>Discover what sets us apart as the premier yacht management company.</p>
      </div>
      <motion.div 
        className="horizontal-scroll-container" 
        style={isMobile ? {} : { x }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 30 
        }}
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
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Heritage of Excellence</h2>
          <p className="section-description">
            Distinguished by our unwavering commitment to maritime excellence and refined craftsmanship
          </p>
        </motion.div>
        <div className="excellence-layout">
          {/* Image Side - Left */}
          <motion.div 
            className="excellence-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="excellence-image-wrapper">
              <img 
                src={Home1} 
                alt="Comprehensive yacht management services" 
                className="excellence-img"
              />
              <div className="excellence-badge">
                <span className="badge-text">Expert</span>
                <span className="badge-subtext">Service</span>
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
              Distinguished Legacy
            </motion.div>

            <motion.h3 
              className="excellence-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Pinnacle of Luxury Yacht Management
            </motion.h3>
            
            <motion.p 
              className="excellence-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Distinguished by our unwavering commitment to maritime excellence, Trident Marine stands as the pinnacle of luxury yacht management in the Seychelles. Our distinguished heritage encompasses decades of refined craftsmanship, delivering extraordinary experiences for the world's most discerning clientele.
            </motion.p>
            
            <motion.div 
              className="excellence-highlights"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Luxury Charters</h4>
                  <p>Bespoke luxury charter experiences with expert crew</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Bespoke Itineraries</h4>
                  <p>Custom-crafted journeys tailored to your preferences</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Expert Crew</h4>
                  <p>Professional maritime specialists and hospitality experts</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="excellence-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a href="/about" className="excellence-link">
                Explore our heritage →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home
