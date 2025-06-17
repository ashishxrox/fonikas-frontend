import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './flSlide.css'


import Airplane from '../../assets/dotPattern.png'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const FeaturesLeftSlide = () => {
  const containerRef = useRef(null);
  const cardStackRef = useRef(null);

  const cardData = [{
    title: "Liquidity Reserve",
    subText: "Cash Allocation",
    desc: "Maintain quick access to your funds for short-term needs or market opportunities — while still earning competitive returns."
  },
  {
    title: "Capital Stability",
    subText: "Fixed Income Investments",
    desc: "Invest in government-backed securities like U.S. Treasuries to preserve capital and generate consistent income with minimal risk."
  },
  {
    title: "Steady Growth",
    subText: "Managed Index Portfolios",
    desc: "A proven, diversified approach designed for long-term wealth accumulation. We handle the asset allocation and risk management for you."
  },
  {
    title: "Strategic Holdings",
    subText: "Direct Equity Investing",
    desc: "Take advantage of market trends and company-specific opportunities with actively managed stock picks. Higher volatility, higher reward."
  }
]

  useEffect(() => {
    if (!containerRef.current || !cardStackRef.current) return;

    const cards = cardStackRef.current.querySelectorAll('.card');
    const totalCards = cards.length - 1;
    const cardWidth = cards[0].clientWidth;
    const containerWidth = containerRef.current.clientWidth;
    const offset = (containerWidth - cardWidth) / Math.max(1, totalCards - 1);
    const gap = 20;



    // Set the initial position of all cards (e.g., off-screen to the right)
    gsap.set(cards, {
      x: (i) => {
        // Example: all cards start 100vw to the right
        return i === 0 ? 0 : window.innerWidth + (i * 50);
      },
    });

    const animation = gsap.to(cards, {
      x: (i) => {
        const customOffsets = [0, -675, -700, -725, -750]; // Change values here for each card
        return customOffsets[i] || 0;
      },
      duration: (i) => 0.5 * i,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        markers: false, // Remove in production
        scrub: true,
        end: `+=${totalCards * 100}% bottom`,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflowX-hidden"
    >
      {/* Fixed progress indicator (optional) */}
      <div className="fixed top-5 w-full h-2 bg-black z-50"
      ></div>

      {/* Cards section */}
      <section
        ref={containerRef}
        className="stacking-cards h-[100vh] w-[100vw] flex items-center justify-center bg-[#FFF8DC] flex-col relative overflowY-hidden"
        // style={{backgroundImage:`url(${BG})`}}
      >

        <img src={Airplane} alt=""  className='absolute bottom-[0%] w-[100%]'/>
        <div className='h-[45%] w-[50%] flex justify-center items-center'>
          <h1 className='titleText text-center'
          style={{color:"#000", fontSize:"3.7rem", fontWeight:"200"}}
          >Align Risk with Strategy Optimize Every Part of Your Portfolio</h1>
        </div>
        <div className="w-full h-[55%] px-[clamp(20px,5vw,80px)]">
          <div ref={cardStackRef} className="card-stack h-full flex gap-5">
            {/* Intro card */}
            <div className="card card-intro w-[calc(100vw-40px)] flex-shrink-0 md:w-[45%]">
              <div className="h-full p-5">
                {/* <div>0</div> */}
              </div>
            </div>

            {/* Numbered cards */}
            {cardData.map((data, idx) => (
              <div key={idx} className="card card-slide w-[calc(50vw-40px)] flex-shrink-0 md:w-[25%]">
                <div className="h-full px-[30px] py-[40px] flex justify-start items-start gap-[20p] flex-col">
                  <small>{data.subText}</small>
                  <h3 className='secondaryTitle'
                  style={{color:"#680037"}}
                  >{data.title}</h3>
                  <p className='paragraph w-[75%]'
                  style={{color:"#000"}}
                  >{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      {/* <div className="h-[33vh]"></div> */}
    </div>
  );
};

export default FeaturesLeftSlide;