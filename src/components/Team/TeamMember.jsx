import { motion } from 'framer-motion'
import { Instagram, Twitter, Facebook } from 'lucide-react'
import './TeamMember.css'

const TeamMember = ({ member, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className="team-member-card"
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <div className="member-image">
        <img src={member.image} alt={member.name} onError={(e) => {
          e.target.src = `https://placehold.co/400x500/2563eb/white?text=${encodeURIComponent(member.name)}`;
        }} />
        <div className="member-overlay">
          <div className="social-links">
            <a href={member.social.instagram} aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href={member.social.twitter} aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href={member.social.facebook} aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <div className="member-details">
          <span className="experience">{member.experience} de experiencia</span>
          <span className="specialty">{member.specialty}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default TeamMember