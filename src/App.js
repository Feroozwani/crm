import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Header from './components/header/Header'
import Testimonials from './components/testimonials/Testimonials'
import Industry from './components/industry/Industry'
import Crm from './components/crm/Crm'
import AdditionalFetures from './components/additionalfeatures/AdditionalFetures'
import TryItYourself from './components/tryityourself/TryItYourself'
import FreeTrialDemo from './components/freetrialdemo/FreeTrialDemo'
import DumbExcell from './components/dumbexcell/DumbExcell'
import MainFaqs from './components/mainfaqs/MainFaqs'
import Footer from './components/footer/Footer'
import HowItWorks from './components/howitworks/HowItWorks'





const App = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Industry/>
        <Crm/>
       <HowItWorks/>
       <MainFaqs/>
       <Testimonials/>
       <DumbExcell/>
       <TryItYourself/>
       <AdditionalFetures/>
       <FreeTrialDemo/>
        <Footer/>
    </div>
  )
}

export default App