import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import './ChatWidget.css'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <>
      <motion.button 
        className="chat-widget-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chat-widget"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chat-header">
              <h3>Soporte EliteBarber</h3>
              <p>Estamos aquí para ayudarte</p>
            </div>

            <div className="chat-messages">
              <div className="message bot">
                <p>¡Hola! 👋 ¿En qué puedo ayudarte hoy?</p>
              </div>
            </div>

            <div className="chat-input">
              <input 
                type="text" 
                placeholder="Escribe tu mensaje..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="send-btn">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget