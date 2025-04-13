'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Button from './Button';




const Aboutme = () => {
  return (
    <>
    <div className='about-cnt max-w-[1440px]'>
      <motion.img 
      src='/backgroundsdots.png'
      alt='Left Image'
      className='bg-image-left'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      /> 
      <motion.img 
      src='/third-bg.png'
      alt='Right Image'
      className='bg-image-right'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      /> 

        <div className="top-bar w-full flex flex-row justify-between items-center">
        
        <div className='top-child'><h3><span>#</span>about-me</h3><span className='line'></span></div>        
        </div>
        <div className="second w-full flex flex-row justify-between items-center">

          <div className="details w-[70%]">
          <p>Hello, its Huzaifa iqbal!
    <br></br>
    <br></br>
    From the streets of rural Sindh to building digital solutions with the MERN Stack, WordPress, and SEO, my journey isn&apos;t just about code — it&apos;s about creating opportunities where none existed. As co-founder of Hexavibe Digital Solutions, I blend tech and hustle to build products that solve real problems, tell stories, and spark growth. I don&apos;t just develop websites — I design digital revolutions, one project at a time.
          <br></br>
          <br></br>

          Whether it's launching a startup, boosting a local business, or building a custom web app, I focus on delivering results that matter. I believe in clean code, clear purpose, and continuous learning — because the web doesn&apos;t wait, and neither do I.

</p>
            <Button label="Read more "/>
          </div>
          <div className="pic relative">
          <motion.img 
      src='/backgroundsdots.png'
      alt='big-dots'
      className='big-dots'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      /> 
      <motion.img 
      src='/aboutme2.png'
      alt='small-dots'
      className='small-dots'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      /> 

    <motion.img 
    src='/aboutmemain.png'
    alt='main'
    className='main-pic'
    initial={{opacity: 0 , y: 30}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    /> 
          
          </div>
        </div>
    </div>
    <style>
    {`
    .about-cnt .top-bar div h3{
    color: var(--white, #FFF);
    font-family: "Fira Code" , monospace;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal; 
    }
    .about-cnt .bg-image-left{
    position: absolute;
    top: 20%;
    left: 0;
    }

    .about-cnt .bg-image-right{
    position: absolute;
    top: 30%;
    right: 0;
    }

    .about-cnt .top-bar div h3 span{
    color: var(--primary, #C778DD);
    }

    .about-cnt .top-bar div .line{
    width: 600px;
    height: 1px !important;
    color: var(--primary, #C778DD);
    padding: 1px;
    margin-left: 5px;
    background-color: #C778DD;
    }

    .about-cnt .top-bar .top-child{
    display: flex; 
    flex-direction: row;
    width: 70%;
    align-items: center;
    }

    /* details  */
    .about-cnt .second .details p{
    color: var(--gray, #ABB2BF);
    font-family: "Fira Code" , monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    padding-top: 20px;
    padding-bottom: 20px;  
    }

    .about-cnt .second .pic .big-dots{
    position: absolute;
    top: 0%;
    left: 5%;
    z-index: 9999999999999;
    }

    .about-cnt .second .pic .small-dots{
    position: absolute;
    top: 50%;
    right: 5%;
    z-index: 9999999999999;
    }

    .about-cnt .second .main-pic{
    border-bottom: solid 1px #C778DD;
    }

    `}

    </style>
    </>
  )
}

export default Aboutme;
