import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='h-[1400px] md:h-[55vh] w-full bg-cover bg-bottom relative' 
    
    // style={{ backgroundImage: `url("${Bg}")` }}
    
    >
      <div className='h-full w-full bg-[#66023C] absolute z-[-2]'></div>
      {/* <div className='absolute h-[35%] w-full bottom-0' >
        <Waves/>
      </div> */}
      <div className='h-full w-full bg-[rgba(0,0,0,0.5)] flex  justify-center items-center flex-col'>
        <div className='basis-[85%] h-full w-full flex justify-center gap-[40px] items-center flex-col md:flex-row'>
          <div className='basis-[5%] md:basis-[30%] h-[60%] w-full flex justify-center md:justify-between items-center md:items-start flex-col'>
            <div className='basis-[50%] h-[80%] w-full hidden md:flex flex-row justify-start items-center gap-[10px]'>
              <svg width="45" height="41" viewBox="0 0 45 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.486 24.8042L16.1611 19.332L33.2597 39.9353L23.9883 39.869L11.486 24.8042Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M26.4187 10.5977L43.1357 10.5977L15.3877 23.5977L12.3788 17.1753L26.4187 10.5977Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0 7.67426L9.82209 0.974449V0H11.2507H23.8365H44.0871V7.67426H17.3789L17.3789 40.5973H10.3789L10.3789 7.67426H9.82209H0Z" fill="white" />
              </svg>
              <h2 className='font-[500] text-[48px] text-white'>FONIKAS</h2>
            </div>
            <div className='basis-[40%] pl-[35px] md:pl-[0px] gap-[15px] md:gap-[0] h-full w-full flex justify-around items-start flex-col'>
              <p className='paragraph'>Get in touch with us for any queries</p>
              <Link className='secondary-btn flex justify-center items-center'>Contact Us</Link>
            </div>
          </div>
          <div className='h-[2px] md:h-[80%] md:w-[2px] w-[100%] bg-[#fff]'></div>
          <div className='basis-[55%] h-[70%] w-full flex justify-center items-start gap-[40px] flex-col md:flex-row'>
            <div className='basis-[25%] pl-[35px] md:pl-[0px] h-full w-full flex justify-start items-start flex-col gap-[10px]'>
              <h4 className='tertiaryTitle text-white mb-[20px]'>Links</h4>
              <Link className='paragraph' to={'/'}>Home</Link>
              <Link className='paragraph' to={'/about-us'}>About</Link>
              <Link className='paragraph' to={'/insights'}>Insights</Link>
              <Link className='paragraph' to={'/dashboard'}>Dashboard</Link>
              <Link className='paragraph' to={'/contact'}>Contact</Link>
              <Link className='paragraph' to={'/login'}>Login</Link>
            </div>
            <div className='basis-[35%] pl-[35px] md:pl-[0px] h-full w-full flex justify-start items-start flex-col gap-[10px]'>
              <h4 className='tertiaryTitle text-white mb-[20px]'>Contact Information</h4>
              <Link className='paragraph'>+91 1234567890</Link>
              <Link className='paragraph'>+91 1234567890</Link>
              <Link className='paragraph'>+91 1234567890</Link>
              <Link className='paragraph'>+91 1234567890</Link>
              <Link className='paragraph'>abc@fonikas.com</Link>
            </div>
            <div className='basis-[30%] h-[50%] w-full flex justify-start items-start flex-col'>
              <h4 className='tertiaryTitle text-white mb-[20px] pl-[35px] md:pl-[0px]'>Connect with Us</h4>
              <div className='w-full h-[60%] flex justify-evenly items-center flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="white">
                  <path d="M22.675 0h-21.35C.596 0 0 .597 0 1.333v21.333C0 23.403.596 24 1.325 24h11.483v-9.294H9.691v-3.622h3.117V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.796.143v3.24l-1.92.001c-1.505 0-1.797.716-1.797 1.767v2.317h3.594l-.468 3.622h-3.126V24h6.127c.729 0 1.323-.597 1.323-1.333V1.333C24 .597 23.404 0 22.675 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" viewBox="0 0 24 24">
                  <path d="M7.75 2C4.298 2 2 4.298 2 7.75v8.5C2 19.702 4.298 22 7.75 22h8.5C19.702 22 22 19.702 22 16.25v-8.5C22 4.298 19.702 2 16.25 2h-8.5zm0 2h8.5c2.073 0 3.75 1.677 3.75 3.75v8.5c0 2.073-1.677 3.75-3.75 3.75h-8.5C5.677 20 4 18.323 4 16.25v-8.5C4 5.677 5.677 4 7.75 4zm8.5 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.038-1.851-3.038-1.854 0-2.137 1.446-2.137 2.939v5.668h-3.554v-11.5h3.414v1.571h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.268 2.37 4.268 5.455v6.323zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.144 0 2.07.926 2.07 2.07 0 1.143-.926 2.07-2.07 2.07zm1.777 13.019h-3.554v-11.5h3.554v11.5zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>


              </div>
            </div>
          </div>
        </div>
        <div className=' h-[2px] w-full bg-[#fff]'></div>
        <div className='basis-[5%] md:basis-[14%] h-full w-[95%] flex justify-between items-center flex-col md:flex-row'>
          <p className='paragraph'>All right reserved by Fonikas @2024</p>
          <div className='basis-[50%] h-full w-full flex justify-between items-center flex-row'>
            <Link className='paragraph'>Site Map</Link>
            <Link className='paragraph'>Term and Condition</Link>
            <Link className='paragraph'>Privacy Policy</Link>
            <Link className='paragraph'>Refund Policy</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
