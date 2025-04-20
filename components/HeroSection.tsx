"use client" ; 
import React from 'react'
import Button from './Button'
import { motion } from "framer-motion";
import Image from 'next/image';

const HeroSection = () => {
  return (
   
    <div className='hero-cnt w-[1440px] flex flex-col lg:flex-row justify-center items-center h-full max-w-[90%]'><motion.div 
    initial={{ opacity: 0, y: 30 }}  // Start position
    animate={{ opacity: 1, y: 0 }}   // End position
    transition={{ duration: 0.5 }}   // Duration of animation
    className=' w-full'
    >
        <div className="hero-child w-[100%] flex flex-col justify-center gap-[20px]">
            <h1 className='text-xl lg:text-3xl'>Huzaifa iqbal is a <span>Web developer</span> and <span>MERN Expert</span></h1>
            <p className='text-sm lg:text-xl'>He Transforming Ideas into Scalable Web Platforms with MERN & WordPress.</p>
            <Button label="Contact me!!" url='/'/>      
        </div>

        </motion.div>  
        <motion.div 
    initial={{ opacity: 0, y: 30 }}  // Start position
    animate={{ opacity: 1, y: 0 }}   // End position
    transition={{ duration: 0.5 }}   // Duration of animation
    className='w-full'
    >
  
        <div className="hero-child second-child h-full  flex flex-col justify-center relative w-[100%] flex flex-col justify-center ">
            <Image className='w-full' src="/heroimg.png" alt="hero Image" width={400} height={400}/>
          {/* <Image className='top-img' src="/backgroundsdots.png" alt="img"  width={80} height={80}/> */}
          <div className="status-ctn flex gap-[10px] items-center">
            <Image src="/rectangleHero.png" alt="img"  width={20} height={20}/>
            <p className='text-sm lg:text-xl'>Currently working on<span> Telegram Mini Apps & bots</span></p>
          </div>
        </div>
        </motion.div>  

    <style jsx>
      {`
        .hero-cnt{
        padding-top: 100px;
        }
        .hero-cnt div h1{
          color: var(--white, #FFF);
        font-family: "Fira Code" , monospace;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        }
        .hero-cnt div h1 span{
        color: var(--primary, #C778DD);
        font-family: "Fira Code" , monospace;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        }
        .hero-cnt div p{
        color: var(--gray, #ABB2BF);
        font-family: "Fira Code" , monospace;
        
        font-style: normal;
        font-weight: 400;
        line-height: 25px; /* 156.25% */  
        }
        
        .hero-cnt .second-child{
          background: url(../backgrounds1.png);
          background-repeat: no-repeat; 
          background-position: 0% 50%; 
        }
        .hero-cnt .second-child .top-img{
        position: absolute; 
        right: 0%;
        top: 60%; 
        }

        .status-ctn{
        border: 1px solid  #ABB2BF;
        padding: 8px ; 
        }
        .status-ctn img{
        height: 100%; 
        }
        .status-ctn p span{
        color: #FFF;
        font-family: "Fira Code" , monospace;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        }
        
      `}      
    </style>
    </div>
  )
}

export default HeroSection
