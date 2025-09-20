import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import './BlogPreview.css'

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "Tendencias de Cortes de Cabello para 2024",
      excerpt: "Descubre las últimas tendencias en cortes de cabello que dominarán este año. Desde estilos clásicos renovados hasta looks audaces...",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "15 Ene 2025",
      author: "Carlos Rodríguez",
      readTime: "5 min read"
    },
    {
      title: "Cómo Mantener tu Barba en Perfecto Estado",
      excerpt: "Aprende los secretos para mantener tu barba saludable, suave y bien cuidada. Productos recomendados y técnicas profesionales...",
      image: "https://images.pexels.com/photos/3998419/pexels-photo-3998419.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "10 Ene 2025",
      author: "Miguel Ángel",
      readTime: "7 min read"
    },
    {
      title: "La Importancia de un Buen Corte de Cabello",
      excerpt: "Un buen corte de cabello no solo mejora tu apariencia, sino también tu confianza. Descubre por qué invertir en un corte profesional...",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "5 Ene 2025",
      author: "Javier López",
      readTime: "4 min read"
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
    <section className="blog-preview section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Últimos Artículos</h2>
          <p className="section-subtitle">
            Mantente actualizado con las últimas tendencias y consejos de nuestros expertos.
          </p>
        </motion.div>

        <motion.div 
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <motion.article 
              key={index}
              className="blog-card"
              whileHover={{ y: -5 }}
            >
              <div className="blog-image">
                <img 
                  src={post.image} 
                  alt={post.title}
                  onError={(e) => {
                    // Fallback para imágenes que no cargan
                    e.target.src = `https://placehold.co/400x300/2563eb/white?text=${encodeURIComponent(post.title.substring(0, 30))}`;
                  }}
                />
                <div className="blog-overlay"></div>
              </div>
              
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-meta">
                  <span className="meta-item">
                    <Calendar size={16} />
                    {post.date}
                  </span>
                  <span className="meta-item">
                    <User size={16} />
                    {post.author}
                  </span>
                </div>
                
                <div className="blog-footer">
                  <span className="read-time">{post.readTime}</span>
                  <a href="#" className="read-more">
                    Leer más <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="blog-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="#" className="btn btn-secondary">
            Ver todos los artículos
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPreview