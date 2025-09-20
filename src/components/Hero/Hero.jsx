import { motion } from 'framer-motion'
import { ChevronDown, Calendar, Play } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-grid">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="hero-title">
                Estilo que <span className="text-gradient">Define</span> tu Personalidad
              </h1>
              
              <p className="hero-subtitle">
                Experimenta el arte de la barbería tradicional con un toque moderno. 
                Reserva tu cita y transforma tu look con nuestros expertos.
              </p>
              
              <div className="hero-actions">
                <button 
                  className="btn btn-primary"
                  onClick={() => scrollToSection('services')}
                >
                  <Calendar size={20} />
                  Reservar Cita
                </button>
                
                <button className="btn btn-secondary">
                  <Play size={20} />
                  Ver Video
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Barbero profesional trabajando" 
                />
                <div className="image-badge">
                  <div className="badge-content">
                    <span className="badge-number">10+</span>
                    <span className="badge-text">Años de Experiencia</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={() => scrollToSection('services')}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}

export default Hero