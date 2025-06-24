import React from 'react'
import Trust1 from '../../assets/trust1.png'
import Trust2 from '../../assets/trust2.png'
import Trust3 from '../../assets/trust3.png'
import Trust4 from '../../assets/trust4.png'
import Trust5 from '../../assets/trust5.png'

const TrustMarkers = () => {
    return (
        <div className='h-[65%] w-full flex justify-between items-center flex-row'>
            <div className='basis-[49%] h-full w-full flex justify-between items-center flex-col'>
                <div className='basis-[37%] h-full w-full  rounded-[12px] bg-cover bg-center overflow-hidden flex justify-center items-center'
                    // style={{ backgroundImage: `url("${Trust1}")` }}
                    style={{background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)"}}
                >
                    <div className='h-[85%] w-[90%] flex justify-end items-start flex-col gap-[10px] px-[20px] py-[20px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[15px] rounded-[12px]'
                        // style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8))" }}
                        style={{boxShadow:"2px 2px 5px #000"}}
                    >
                        <h3 className='tertiaryTitle text-white text-left'>
                        +43k
                        </h3>
                        <p className='paragraph'>Instruments available to diversify portfolios with institutional breadth</p>
                    </div>
                </div>
                <div className='basis-[61%] h-full w-full rounded-[12px] bg-cover bg-center overflow-hidden flex justify-center items-center'
                    // style={{ backgroundImage: `url("${Trust2}")` }}
                    style={{background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)"}}
                >
                    <div className='h-[85%] w-[90%] flex justify-end items-start flex-col gap-[10px] px-[20px] py-[20px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[15px] rounded-[12px]'
                        // style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8))" }}
                        style={{boxShadow:"2px 2px 5px #000"}}
                    >
                        <h3 className='tertiaryTitle text-white text-left'>
                        +43k
                        </h3>
                        <p className='paragraph'>Instruments available to diversify portfolios with institutional breadth</p>
                    </div>
                </div>
            </div>
            <div className='basis-[49%] h-full w-full flex justify-between items-center flex-col'>
                <div className='basis-[50%] h-full w-full  rounded-[12px] bg-cover bg-center overflow-hidden flex justify-center items-center'
                    // style={{ backgroundImage: `url("${Trust5}")` }}
                    style={{background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)"}}
                >
                    <div className='h-[85%] w-[90%] flex justify-end items-start flex-col gap-[10px] px-[20px] py-[20px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[15px] rounded-[12px]'
                        // style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8))" }}
                        style={{boxShadow:"2px 2px 5px #000"}}
                    >
                        <h3 className='tertiaryTitle text-white text-left'>
                        +43k
                        </h3>
                        <p className='paragraph'>Instruments available to diversify portfolios with institutional breadth</p>
                    </div>

                </div>
                <div className='basis-[47%] h-full w-full  flex justify-between items-center flex-row'>
                    <div className='basis-[48%] h-full w-full  rounded-[12px] bg-cover bg-center overflow-hidden flex justify-center items-center'
                        // style={{ backgroundImage: `url("${Trust4}")` }}
                        style={{background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)"}}
                    >
                        <div className='h-[90%] w-[85%] flex justify-end items-start flex-col gap-[10px] px-[10px] py-[10px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[15px] rounded-[12px]'
                        // style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8))" }}
                        style={{boxShadow:"2px 2px 5px #000"}}
                    >
                        <h3 className='tertiaryTitle text-white text-left'>
                        +100
                        </h3>
                        <p className='paragraph'>Asset classes and return sources to unlock performance potential</p>
                    </div>
                    </div>
                    <div className='basis-[48%] h-full w-full  rounded-[12px] bg-cover bg-center overflow-hidden flex justify-center items-center'
                        // style={{ backgroundImage: `url("${Trust3}")` }}
                        style={{background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)"}}
                    >
                        <div className='h-[90%] w-[85%] flex justify-end items-start flex-col gap-[10px] px-[10px] py-[10px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[15px] rounded-[12px]'
                        // style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8))" }}
                        style={{boxShadow:"2px 2px 5px #000"}}
                    >
                        <h3 className='tertiaryTitle text-white text-left'>
                        +160
                        </h3>
                        <p className='paragraph'>Investable markets for globally diversified, resilient portfolios</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TrustMarkers 
