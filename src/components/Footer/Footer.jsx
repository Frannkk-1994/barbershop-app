import { Scissors, Instagram, Twitter, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-grid">
          
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-header">
              <Scissors size={32} />
              <span className="brand-name">EliteBarber</span>
            </div>
            <p className="brand-description">
              Especialistas en cortes premium y arreglo de barba. Transformamos tu estilo con técnicas profesionales.
            </p>
            <div className="social-section">
              <span>Síguenos:</span>
              <div className="social-icons">
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <div className="links-list">
              <a href="#home">Inicio</a>
              <a href="#services">Servicios</a>
              <a href="#team">Nuestro Team</a>
              <a href="#pricing">Precios</a>
              <a href="#testimonials">Testimonios</a>
              <a href="#contact">Contacto</a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Servicios</h3>
            <div className="links-list">
              <a href="#">Corte Clásico</a>
              <a href="#">Barba Premium</a>
              <a href="#">Tintes Profesionales</a>
              <a href="#">Tratamientos</a>
              <a href="#">Servicio VIP</a>
            </div>
          </div>

          {/* CONTACTO - SIN CARD */}
          <div className="footer-section">
            <h3>Contacto</h3>
            <div className="contact-list">
              <div className="contact-line">
                <MapPin size={16} />
                <span>Av. Principal 123, Ciudad</span>
              </div>
              <div className="contact-line">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-line">
                <Mail size={16} />
                <span>info@elitebarber.com</span>
              </div>
            </div>

            <div className="hours-section">
              <div className="hours-title">
                <Clock size={16} />
                <span>Horario</span>
              </div>
              <div className="hours-list">
                <div className="hour-line">
                  <span>Lun - Vie</span>
                  <span>9:00 - 20:00</span>
                </div>
                <div className="hour-line">
                  <span>Sábado</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="hour-line">
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} EliteBarber. Todos los derechos reservados.</p>
          <div className="legal-links">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer