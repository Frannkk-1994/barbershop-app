import { motion } from 'framer-motion'
import { Scissors, Sparkles, Zap, Shield, Clock, Heart } from 'lucide-react'
import ServiceCard from './ServiceCard'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <Scissors size={40} />,
      title: "Corte de Cabello",
      description: "Corte moderno y elegante con las últimas tendencias en barbería.",
      price: "$25",
      duration: "30 min"
    },
    {
      icon: <Sparkles size={40} />,
      title: "Arreglo de Barba",
      description: "Modelado y arreglo profesional de barba con productos premium.",
      price: "$20",
      duration: "25 min"
    },
    {
      icon: <Zap size={40} />,
      title: "Corte + Barba",
      description: "Combo completo que incluye corte de cabello y arreglo de barba.",
      price: "$40",
      duration: "55 min"
    },
    {
      icon: <Shield size={40} />,
      title: "Tratamiento Capilar",
      description: "Tratamiento revitalizante para cabello maltratado o quebradizo.",
      price: "$30",
      duration: "40 min"
    },
    {
      icon: <Clock size={40} />,
      title: "Servicio Express",
      description: "Servicio rápido para clientes con poco tiempo pero que necesitan verse bien.",
      price: "$15",
      duration: "15 min"
    },
    {
      icon: <Heart size={40} />,
      title: "Servicio Premium",
      description: "Experiencia completa con masaje facial, tratamiento térmico y más.",
      price: "$60",
      duration: "90 min"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos una amplia gama de servicios de barbería para satisfacer todas tus necesidades de estilo.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services