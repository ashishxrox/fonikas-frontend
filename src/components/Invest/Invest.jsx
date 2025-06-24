import React from 'react'
import InvestLanding from './InvestLanding'
import InvestBelieve from './InvestBelieve'
import DigitalPlatforms from './DigitalPlatforms'
import HorizontalScroll from './Horizontal'
import HoverTiles from '../AboutUs/HoverTiles/HoverTiles'

const Invest = () => {
  return (
    <div>
      <InvestLanding/>
      <HoverTiles/>
      <InvestBelieve/>
      <DigitalPlatforms/>
      <HorizontalScroll/>
      
    </div>
  )
}

export default Invest
