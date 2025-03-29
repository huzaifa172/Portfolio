"use client";
import React from 'react'
import { motion } from 'framer-motion';


const Contacts = () => {
  return (
    <>
    <div className='contact flex flex-col w-[1440px] max-w-[90%] pt-[100px] pb-[100px]'>
    
    <motion.img 
      src='/backgroundsdots.png'
      alt='Left Image'
      className='bg-image-left'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      /> 
 
    <div className='top-bar w-full flex flex-row justify-between items-center'>


    <div className='top-child flex flex-row w-[50%]  items-center'><h3><span>#</span>Contacts</h3><span className='line'></span></div>
    </div>


<div className="second flex justify-between items-center"> 

  <div className="details">
     <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p> 
  </div>
  <div className="message-me">
    <div>
      <h4>Messsage me here </h4>
      <div className='child-message
      flex justify-start items-center gap-[5px]'>
      <img src="/justdiscord.png" alt="discord" />
      <p>!Elias384615</p>
      </div>

      <div className='child-message flex justify-start items-center gap-[5px]'>
      <img src="/justemail.png" alt="Email" />
      <p>Elias@contact.com</p>
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
