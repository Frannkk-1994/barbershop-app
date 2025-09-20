import { motion } from 'framer-motion'
import { Calendar, Scissors, Sparkles, CheckCircle } from 'lucide-react'
import './Process.css'

const Process = () => {
  const processSteps = [
    {
      icon: <Calendar size={40} />,
      title: "Reserva tu Cita",
      description: "Reserva fácilmente a través de nuestra web, teléfono o visitándonos.",
      step: "01"
    },
    {
      icon: <Scissors size={40} />,
      title: "Disfruta tu Servicio",
      description: "Relájate mientras nuestros expertos barberos trabajan su magia.",
      step: "02"
    },
    {
      icon: <Sparkles size={40} />,
      title: "Transformación Completa",
      description: "Disfruta de un look renovado y una experiencia premium.",
      step: "03"
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Programa tu Próxima Visita",
      description: "Mantén tu look impecable con visitas regulares programadas.",
      step: "04"
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
    <section className="process section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nuestro Proceso</h2>
          <p className="section-subtitle">
            Desde la reserva hasta el resultado final, te guiamos a través de una experiencia excepcional.
          </p>
        </motion.div>

        <motion.div 
          className="process-steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="process-step"
              whileHover={{ y: -5 }}
            >
              <div className="step-icon">
                {step.icon}
                <span className="step-number">{step.step}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="process-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>¿Listo para experimentar nuestro proceso?</h3>
          <button className="btn btn-primary">Reservar Ahora</button>
        </motion.div>
      </div>
    </section>
  )
}

export default Process