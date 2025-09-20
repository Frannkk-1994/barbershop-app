import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "Alejandro Martínez",
      role: "Cliente habitual",
      rating: 5,
      content: "La mejor barbería de la ciudad. Carlos siempre sabe exactamente lo que quiero y hace un trabajo impecable. El ambiente es increíble y el servicio es excepcional.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Roberto Sánchez",
      role: "Primera visita",
      rating: 5,
      content: "Quedé impresionado con la atención al detalle. No solo me hicieron un corte excelente, sino que también me dieron consejos para mantener mi barba. Definitivamente volveré.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Javier López",
      role: "Cliente VIP",
      rating: 5,
      content: "He probado muchas barberías, pero ninguna se compara con EliteBarber. El servicio premium vale cada centavo. Me siento como nuevo después de cada visita.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Lo que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
          </p>
        </motion.div>

        <div className="testimonials-container">
          <button className="nav-btn prev" onClick={prevTestimonial}>
            <ChevronLeft size={24} />
          </button>

          <div className="testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="testimonial"
              >
                <Quote size={32} className="quote-icon" />
                <div className="testimonial-content">
                  <p>{testimonials[currentIndex].content}</p>
                </div>
                <div className="testimonial-author">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                  />
                  <div className="author-info">
                    <h4>{testimonials[currentIndex].name}</h4>
                    <p>{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="nav-btn next" onClick={nextTestimonial}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials