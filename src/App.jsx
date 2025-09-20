import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import Pricing from './components/Pricing/Pricing'
import Process from './components/Process/Process'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'
import BlogPreview from './components/Blog/BlogPreview'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ChatWidget from './components/ChatWidget/ChatWidget'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className="app">
      <ScrollProgress />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Services />
      <Team />
      <Pricing />
      <Process />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App