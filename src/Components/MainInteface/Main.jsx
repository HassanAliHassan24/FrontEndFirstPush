import React from 'react'
import Footer from '../Footer/Footer'
import Navapp from '../Navbar/Navapp'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import OurTeam from './OurTeam/OurTeam'
import Service from './Service/Service'

function Main() {
  return (
   <>
   <Navapp/>
   <Home/>
   <OurTeam/>
   <Service/>
   <Contact/>
   <About/>
   <Footer/>
   </>
  )
}

export default Main