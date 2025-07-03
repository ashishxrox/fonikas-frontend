import React from 'react'
import HomeAbout from './HomeAbout'
import OurHeritage from './AboutPage/OurHeritage'
import HoverTiles from './HoverTiles/HoverTiles'
import SmartTech from './AboutPage/SmartTech'
import AboutLanding from './AboutPage/AboutLanding'
import AboutFonikas from './AboutFonikas'

const AboutMain = ({scroll}) => {
  return (
    <div>
      <AboutLanding scroll={scroll}/>
      <HomeAbout/>
      <OurHeritage/>
      {/* <HoverTiles/> */}
      {/* <SmartTech/> */}
      {/* <AboutFonikas/> */}
    </div>
  )
}

export default AboutMain
