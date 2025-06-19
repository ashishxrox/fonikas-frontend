import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Bg from '../../../assets/bg2Flip.jpg';
import Coin from '../../../assets/coins.png';
import PartnerBottom from "../../Partners/PartnerBottom"
import PartnerTop from "../../Partners/PartnerTop"

import '../about.css';

const OurHeritage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden"); // reset when out of view
    }
  }, [isInView, mainControls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div
      ref={ref}
      className='h-[700px] md:h-[100vh] w-full bg-cover bg-center flex justify-center gap-[35px] items-center flex-col'
      style={{ backgroundImage: `url("${Bg}")` }}
    >
      <motion.div
        className='basis-[50%] md:basis-[35%] h-full w-[90%] flex justify-between items-center flex-row'
        variants={fadeInDown}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <PartnerBottom />
      </motion.div>

      {/* <motion.div
        className='basis-[30%] h-full w-[90%] hidden md:flex justify-center items-center flex-col gap-[30px] bg-[rgba(255,255,255,0.09)] rounded-[12px] shadow-lg backdrop-blur-[5px]'
        variants={fadeInUp}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h4 className='secondaryTitle text-white text-center'>Our Values</h4>
        <div className='basis-[67%] h-full w-full flex justify-evenly items-center flex-row'>
          <div className='basis-[22%] h-full w-full  rounded-[12px] c1 flex justify-center items-start flex-col gap-[10px] px-[40px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield h-20 w-20 text-white" data-lov-id="src/pages/AboutUs.tsx:8:10" data-lov-name="Shield" data-component-path="src/pages/AboutUs.tsx" data-component-line="8" data-component-file="AboutUs.tsx" data-component-name="Shield" data-component-content="%7B%22className%22%3A%22h-20%20w-20%20text-white%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            <h6 className='tertiaryTitle text-white mb-[30px]'>Clarity over noise</h6>
            <p className='paragraph text-left mb-[20px]'>Focus on long-term strategies, not fleeting trends</p>
          </div>
          <div className='basis-[22%] h-full w-full bg-[red] rounded-[12px] c2 flex justify-center items-start flex-col gap-[10px] px-[40px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code h-20 w-20 text-white" data-lov-id="src/pages/AboutUs.tsx:14:10" data-lov-name="Code" data-component-path="src/pages/AboutUs.tsx" data-component-line="14" data-component-file="AboutUs.tsx" data-component-name="Code" data-component-content="%7B%22className%22%3A%22h-20%20w-20%20text-white%22%7D"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <h6 className='tertiaryTitle text-white'>Efficiency that counts</h6>
            <p className='paragraph text-left'>Reduce costs through smart infrastructure, automation and thoughtful decisions</p>
          </div>
          <div className='basis-[22%] h-full w-full bg-[red]  rounded-[12px] c3 flex justify-center items-start flex-col gap-[10px] px-[40px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-20 w-20 text-white" data-lov-id="src/pages/AboutUs.tsx:20:10" data-lov-name="Users" data-component-path="src/pages/AboutUs.tsx" data-component-line="20" data-component-file="AboutUs.tsx" data-component-name="Users" data-component-content="%7B%22className%22%3A%22h-20%20w-20%20text-white%22%7D"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <h6 className='tertiaryTitle text-white mb-[15px]'>Built for life</h6>
            <p className='paragraph text-left mb-[25px]'>Portfolios that evolve with your changing goals and realities.</p>
          </div>

          <div className='basis-[22%] h-full w-full bg-[red]  rounded-[12px] c4 flex justify-center items-start flex-col gap-[10px] px-[40px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-20 w-20 text-white" data-lov-id="src/pages/AboutUs.tsx:26:10" data-lov-name="Heart" data-component-path="src/pages/AboutUs.tsx" data-component-line="26" data-component-file="AboutUs.tsx" data-component-name="Heart" data-component-content="%7B%22className%22%3A%22h-20%20w-20%20text-white%22%7D"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
            <h6 className='tertiaryTitle text-white mb-[15px]'>Trust is everything</h6>
            <p className='paragraph text-left mb-[25px]'>Transparent pricing, no hidden fees, and no runarounds</p>
          </div>
        </div>
      </motion.div> */}

      <div className='basis-[50%] h-full w-[90%]'>
        <PartnerTop/>
      </div>

      {/* <div className='basis-[50%] h-full w-full flex md:hidden justify-around items-center flex-col'>
        <div className='basis-[15%] h-full w-[85%] bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] flex justify-center items-center flex-col rounded-[12px] '
          style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}
        >
          <h6 className='secondaryTitle text-white text-center'>Our Values</h6>
          
        </div>
        <div className='basis-[75%] h-full w-full flex justify-center items-center flex-col gap-[15px]'>
          <div className='basis-[24%] h-full w-[85%] c1 rounded-[12px] flex justify-center items-center flex-col gap-[10px]  backdrop-blur-[5px]'
            style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}
          >
            <h6 className='tertiaryTitle text-white'>Clarity over noise</h6>
            <p className='paragraph text-center'>Focus on long-term strategies, not fleeting trends</p>
          </div>
          <div className='basis-[24%] h-full w-[85%] c2 rounded-[12px] px-[10px] flex justify-center items-center flex-col gap-[10px]  backdrop-blur-[5px]'
            style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}
          >
            <h6 className='tertiaryTitle text-white'>Efficiency that counts</h6>
            <p className='paragraph text-center'>Reduce costs through smart infrastructure, automation and thoughtful decisions</p>
          </div>
          <div className='basis-[24%] h-full w-[85%] c3 rounded-[12px] px-[10px] flex justify-center items-center flex-col gap-[10px]  backdrop-blur-[5px]'
            style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}
          >
            <h6 className='tertiaryTitle text-white'>Built for life</h6>
            <p className='paragraph text-center'>Portfolios that evolve with your changing goals and realities</p>
          </div>

          <div className='basis-[24%] h-full w-[85%] c4 rounded-[12px] px-[10px] flex justify-center items-center flex-col gap-[10px]  backdrop-blur-[5px]'
            style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}
          >
            <h6 className='tertiaryTitle text-white'>Trust is everything</h6>
            <p className='paragraph text-center'>Transparent pricing, no hidden fees, and no runarounds</p>
          </div>
        </div>

      </div> */}
    </div>
  );
};

export default OurHeritage;
