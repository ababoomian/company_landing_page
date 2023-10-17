import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Section1 from '../components/section1/Section1'
import Info from '../components/info/Info'
import VideoBackground from '../components/Home/TopBarContainer'

function Home() {
  return (
    <div className="anasun">
      
      <Topbar/>
      <Section1/>
      <Info/>
    </div>
  )
}

export default Home