import { useRef } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Tagline } from './components/Tagline'
import { Contact } from './components/Contact'
import 'aos/dist/aos.css';
import { Projects } from "./components/Projects"
import { FormikExample } from "./components/Formik"


function App() {
const sectionRef = useRef({});

  return (
    <>
      <Navbar />
      <FormikExample />
      <Hero />
      <About />
      <Services />
      {/* <Team />  */}
      <Projects />
      <Tagline />
      <Contact />
    </>
    )
}

export default App
