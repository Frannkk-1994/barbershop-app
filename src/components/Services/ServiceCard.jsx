import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import './ServiceCard.css'

const ServiceCard = ({ service, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className="service-card"
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <div className="service-icon">
        {service.icon}
      </div>
      
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      
      <div className="service-footer">
        <span className="service-price">{service.price}</span>
        <span className="service-duration">{service.duration}</span>
      </div>
      
      <button className="service-btn">
        <Calendar size={16} />
        Reservar
      </button>
    </motion.div>
  )
}

export default ServiceCard