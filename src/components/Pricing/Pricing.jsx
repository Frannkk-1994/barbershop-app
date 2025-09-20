import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import PriceCard from './PriceCard'
import './Pricing.css'

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Básico",
      price: "$25",
      period: "por visita",
      popular: false,
      features: [
        "Corte de cabello",
        "Lavado con shampoo",
        "Arreglo de barba básico",
        "Estilo con productos premium"
      ]
    },
    {
      name: "Premium",
      price: "$45",
      period: "por visita",
      popular: true,
      features: [
        "Corte de cabello premium",
        "Lavado con tratamiento",
        "Arreglo de barba completo",
        "Mascarilla facial",
        "Masaje relajante",
        "Productos premium incluidos"
      ]
    },
    {
      name: "VIP",
      price: "$70",
      period: "por visita",
      popular: false,
      features: [
        "Experiencia completa VIP",
        "Servicio prioritario",
        "Tratamiento capilar especial",
        "Diseño de barba personalizado",
        "Masaje facial y de cuello",
        "Productos de regalo",
        "Bebida premium incluida"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nuestros Precios</h2>
          <p className="section-subtitle">
            Ofrecemos diferentes planes para adaptarnos a tus necesidades y presupuesto.
          </p>
        </motion.div>

        <motion.div 
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <PriceCard key={index} plan={plan} index={index} />
          ))}
        </motion.div>

        <motion.div 
          className="pricing-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>¿Necesitas un servicio personalizado? <a href="#contact">Contáctanos</a> para cotizaciones especiales.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing