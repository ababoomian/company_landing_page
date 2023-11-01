import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Section1 from '../components/section1/Section1'
import Info from '../components/info/Info'
import VideoBackground from '../components/Home/TopBarContainer'
import Calendar from '../components/Test/Calendar'
import Update from '../components/Test/Update'
import Contacts from '../components/Test/Contact'
import Service from '../components/Test/Services'
import Pricing from '../components/Test/Pricing'
import ContactForm from '../components/Test/ContactForm'
import Header from '../components/Test/Header'
// import UpdatedComponent from '../components/Test/Contact'

function Home() {
  return (
    <>
    <Header/>
    <Calendar/>
    <Update/>
    <Contacts/>
    <Service/>
    <Pricing/>
    <ContactForm/>
    </>
  )
}

export default Home