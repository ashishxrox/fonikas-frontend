import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

import Bg1 from '../../assets/bg1.jpg';
import Euro from '../../assets/euro.png';
import Accordian from './Accordian';
import Management from './Management';
import FeaturesLeftSlide from './FeaturesLeftSlide';


const Faq = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { threshold: 0.4 });

    // Animation variants for staggered entrance
    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        },
        hidden: {}
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className='h-[1350px] md:h-[120vh] w-full bg-black bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col'
            style={{ backgroundImage: `url("${Bg1}")` }}
        >
            <div className='basis-[35%] h-full w-[90%] pt-[50px]'>
                <Management/>
            </div>
            {/* <div className='basis-[28%] h-full w-[90%] bg-[red] mt-[50px]'>
                <FeaturesLeftSlide/>
            </div> */}

            <div className='basis-[65%] w-full h-full flex justify-center items-center flex-col'>
                <h3 className='secondaryTitle text-white text-center md:text-left'>Frequently Asked Questions</h3>
                <div className='w-[90%] h-[70%] md:h-[80%] flex justify-between items-center md:items-start md:pt-[60px] flex-col-reverse md:flex-row'>
                    <motion.div
                        variants={itemVariants}
                        className='support-box basis-[25%] h-full  md:h-[65%] w-full rounded-[20px] py-[20px] md:pb-[20px] px-[15px] flex justify-end items-center flex-col gap-[10px]'
                        style={{
                            background: "linear-gradient(180deg, #311B92 38.9%, #84FFFF 157.94%)",
                            boxShadow: "0px 0px 49px -2px #00000030"
                        }}
                    >
                        
                        <img src={Euro} alt="" className=' hidden md:block h-[60%]' />
                        <h5 className='text-[20px] font-[700] text-center text-white'>Still no luck? We can help!</h5>
                        <p className='paragraph text-center'>Contact us and we’ll get back to you as soon as possible.</p>
                        <Link to="/" className='flex justify-center items-center primary-btn'>Contact Us</Link>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className='basis-[71%] h-[75%] md:h-full w-full  flex justify-between items-start flex-col'
                    >

                        <div className='h-[90%] w-full overflow-scroll hide-scrollbar flex justify-center items-center'>
                            <Accordian />
                            {/* <div className='h-[90%] w-[90%] bg-[red]'></div> */}

                        </div>
                    </motion.div>
                </div>
            </div>

        </motion.div>
    );
};

export default Faq;
