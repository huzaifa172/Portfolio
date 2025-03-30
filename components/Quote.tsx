"use client" ; 
import React from 'react'
import { motion } from 'framer-motion';


const Quote = () => {
  return (
 <>
     <motion.div 
    initial={{ opacity: 0, y: -30 }}  // Start position
    animate={{ opacity: 1, y: 0 }}   // End position
    transition={{ duration: 0.5 }}   // Duration of animation
    >
  
 <div className='pt-[100px] pb-[100px] flex flex-col items-end'>
 <div className='qoute-cnt w-[712px] display flex flex-col relative'>
      <img src="/qoutation.png" alt="qoutation" />
      <div>
        <h3>With great power comes great electricity bill</h3>
      </div>
      <img className='second-quot' src="/qoutation.png" alt="qoutation" />


    </div>
      <div className='second-quet-sec'>
        
     <h3>- Dr. Who</h3>
      </div>
    </div>
    <style jsx>
      {`
        .qoute-cnt{
        border: 1px solid var(--gray, #ABB2BF); 
        padding: 32px;      
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
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        }

        .second-quet-sec {
        width: 30% !important; 
        border: 1px solid var(--gray, #ABB2BF); 
        border-top: 0px;

        padding: 32px;      

        }
        .second-quet-sec h3{
        color: #FFF;
        font-family: "Fira Code" , monospace;
        font-size: 24px;
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
