import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import './PriceCard.css'

const PriceCard = ({ plan, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className={`price-card ${plan.popular ? 'popular' : ''}`}
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      {plan.popular && (
        <div className="popular-badge">
          <Star size={16} fill="currentColor" />
          <span>Más Popular</span>
        </div>
      )}
      
      <div className="price-header">
        <h3 className="plan-name">{plan.name}</h3>
        <div className="price">
          <span className="amount">{plan.price}</span>
          <span className="period">{plan.period}</span>
        </div>
      </div>
      
      <ul className="features-list">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="feature-item">
            <Check size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} full-width`}>
        Reservar Ahora
      </button>
    </motion.div>
  )
}

export default PriceCard