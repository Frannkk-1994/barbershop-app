import { motion } from 'framer-motion'
import TeamMember from './TeamMember'
import './Team.css'

const Team = () => {
  const teamMembers = [
    {
      name: "Carlos Rodríguez",
      role: "Barbero Principal",
      experience: "12+ años",
      specialty: "Cortes clásicos y barbas",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: { instagram: "#", twitter: "#", facebook: "#" }
    },
    {
      name: "Miguel Ángel",
      role: "Especialista en Barbas",
      experience: "9+ años",
      specialty: "Diseño y mantenimiento de barbas",
      image: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: { instagram: "#", twitter: "#", facebook: "#" }
    },
    {
      name: "Javier López",
      role: "Estilista Senior",
      experience: "8+ años",
      specialty: "Tendencias modernas",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: { instagram: "#", twitter: "#", facebook: "#" }
    },
    {
      name: "Antonio García",
      role: "Especialista en Color",
      experience: "7+ años",
      specialty: "Tintes y mechas",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: { instagram: "#", twitter: "#", facebook: "#" }
    },
    {
      name: "Roberto Sánchez",
      role: "Barbero Estilista",
      experience: "6+ años",
      specialty: "Cortes urbanos y fades",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: { instagram: "#", twitter: "#", facebook: "#" }
    },
    {
      name: "David Martínez",
      role: "Aprendiz Senior",
      experience: "4+ años",
      specialty: "Cortes juveniles y styling",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: { instagram: "#", twitter: "#", facebook: "#" }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <section id="team" className="team section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nuestro Equipo de Expertos</h2>
          <p className="section-subtitle">
            Conoce a nuestro talentoso equipo de barberos profesionales con años de experiencia y pasión por el arte de la barbería.
          </p>
        </motion.div>

        <motion.div 
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team