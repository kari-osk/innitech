import { useState } from 'react'
import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Team } from './components/Team'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Team /> 
    <Contact />
    <Footer />
    </>
    )
}

export default App
