import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Tagline } from './components/Tagline'
import { Contact } from './components/Contact'


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Team /> 
    <Tagline />
    <Contact />
    </>
    )
}

export default App
