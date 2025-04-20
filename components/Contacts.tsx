"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Contacts = () => {
  return (
    <>
    <div className='contact flex flex-col w-[1440px] max-w-9/10 pt-[100px] pb-[100px]'>
    
    <motion.img 
      src='/backgroundsdots.png'
      alt='Left Image'
      className='bg-image-left z-0'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      /> 
 
    <div className='top-bar w-full flex flex-row justify-between items-center'>


    <div className='top-child flex flex-row w-[50%]  items-center'><h3><span>#</span>Contacts</h3><span className='line'></span></div>
    </div>


<div className="second flex flex-col lg:flex-row justify-between items-center gap-5"> 

  <div className="details z-[9999999999] bg-[#282C33]">
     <p>
     Let us turn your next big idea into a digital reality — the kind people do not forget.</p> 
  </div>
  <div className="message-me">
    <div>
      <h4>Contact  me here </h4>
      <div className='child-message
      flex justify-start items-center gap-[5px]'>
      <Image src="/github.png" alt="discord" width={32} height={32} />
      <p>huzaifa172</p>
      </div>

      <div className='child-message flex justify-start items-center gap-[5px]'>
      <Image src="/justemail.png" alt="Email" width={32} height={32} />
      <p>huzaifaiqbal5554@gmail.com</p>
      </div>


    </div>
  </div>
</div>


    </div>

    <style>
      {`
        .contact .bg-image-left{
        position: absolute;
        top: 90%;
        left: 0;
        }

        .contact .top-bar div h3{
        color: var(--white, #FFF);
        font-family: "Fira Code" , monospace;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        }
        .contact .top-bar div h3 span{
        color: var(--primary, #C778DD);

        }
        .contact .top-bar div .line{
        width: 600px;
        height: 1px !important;
        color: var(--primary, #C778DD);
        padding: 1px;
        margin-left: 5px;
        background-color: #C778DD;
        }

        /* second  */
        .contact .second .details p{
        color: var(--gray, #ABB2BF);
        font-family: "Fira Code" , monospace;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        }

        .contact .second .message-me{
        padding: 33px;
        display : flex ;
        flex-direction: column;
        gap: 20px;
        border: 1px solid var(--gray, #ABB2BF);
        }

        .contact .second div h4{
        color: var(--white, #FFF);
        font-family: "Fira Code" , monospace;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        }
        .contact .second div p{
        color: var(--gray, #ABB2BF);
        font-family: "Fira Code" , monospace;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        }

      `}
    </style>
    </>
  )
}

export default Contacts
