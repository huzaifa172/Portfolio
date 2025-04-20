"use client" ; 
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Quote = () => {
  return (
 <>
     <motion.div 
    initial={{ opacity: 0, y: -30 }}  // Start position
    animate={{ opacity: 1, y: 0 }}   // End position
    transition={{ duration: 0.5 }}   // Duration of animation
    >
  
 <div className='pt-10 pb-10 lg:pt-25 lg:pb-25 flex flex-col items-center lg:items-end '>
 <div className='qoute-cnt w-9/10 lg:w-3xl display flex flex-col relative py-3 px-3 lg:py-6 lg:px-6'>
      <Image width={20} height={20} src="/qoutation.png" alt="qoutation"  className='hidden lg:block'/>
      <div>
        <h3 className='text-sm md:text-base lg:text-2xl'>Code isn&apos;t just syntax — it&apos;s a tool to solve real-world problems and empower communities.</h3>
      </div>
      <Image width={20} height={20} className='second-quot hidden lg:block' src="/qoutation.png" alt="qoutation"/>


    </div>
      <div className='second-quet-sec  py-3 px-3 lg:py-6 lg:px-6'>
        
     <h3 className='text-sm md:text-base lg:text-2xl'>- Dr. Who</h3>
      </div>
    </div>
    <style jsx>
      {`
        .qoute-cnt{
        border: 1px solid var(--gray, #ABB2BF);  
        }
        .qoute-cnt img{
        padding: 8px;
        border-radius: 0px;  
        position: absolute; 
        top: -15px; 
        background-color: #282C33;
        }
        .qoute-cnt .second-quot{
        padding: 8px;
        border-radius: 0px;  
        position: absolute !important; 
        right: 16px; 
        top: 80%;
        background-color: #282C33;
        } 

        .qoute-cnt h3{
        color: #FFF;
        font-family: "Fira Code" , monospace;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        }

        .second-quet-sec {
        width: 30% !important; 
        border: 1px solid var(--gray, #ABB2BF); 
        border-top: 0px;
 

        }
        .second-quet-sec h3{
        color: #FFF;
        font-family: "Fira Code" , monospace;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        }
      `}

    </style>
    </motion.div>  

      </>
  )
}

export default Quote
