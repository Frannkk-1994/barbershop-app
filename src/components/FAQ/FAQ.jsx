import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqItems = [
    {
      question: "¿Necesito reservar con anticipación?",
      answer: "Recomendamos reservar con al menos 24 horas de anticipación, especialmente los fines de semana. Aceptamos walk-ins según disponibilidad."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos efectivo, tarjetas de crédito/débito (Visa, MasterCard, American Express) y transferencias bancarias."
    },
    {
      question: "¿Puedo cancelar o reprogramar mi cita?",
      answer: "Sí, puedes cancelar o reprogramar tu cita sin costo hasta 2 horas antes de tu horario reservado. Las cancelaciones tardías pueden incurrir en un cargo."
    },
    {
      question: "¿Ofrecen servicios para niños?",
      answer: "Sí, ofrecemos cortes para niños a partir de 5 años. Tenemos precios especiales para menores de 12 años."
    },
    {
      question: "¿Qué medidas de higiene tienen implementadas?",
      answer: "Seguimos estrictos protocolos de higiene: esterilizamos todo nuestro equipo después de cada uso, usamos materiales desechables cuando es posible, y mantenemos un ambiente limpio y seguro."
    },
    {
      question: "¿Puedo solicitar un barbero específico?",
      answer: "Sí, puedes solicitar un barbero específico al hacer tu reserva. Haremos todo lo posible para asignarte al profesional que prefieras."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div 
          className="faq-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>¿No encontraste lo que buscabas? <a href="#contact">Contáctanos</a> y te responderemos pronto.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ