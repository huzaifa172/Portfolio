"use client";
import React from 'react'
import Image from 'next/image';

import { motion } from "framer-motion";
import Button from './Button';

const MotionImage = motion(Image);
const AllProjects = () => {
  return (
    // rarly flex and padding are used with tailwind 
<>
        <div className='project-parent'>
      <div className='project-cnt'>

      <MotionImage 
      width={100}
      height={100}
      src='/backgroundsdots.png'
      alt='Left Image'
      className='bg-image-left'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      /> 
      <MotionImage 
      width={100}
      height={100}
      src='/third-bg.png'
      alt='Left Image'
      className='bg-image-right'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      /> 
      <div className="top">
        <div><h3><span>#</span>complete-apps</h3></div>
           
      </div>



      
      <div className="project-boxes gap-[30px]">
        
        
        
        <div className='box'>
            <Image width={330} height={250} src="/freeai.png" alt="" />
            <p>Next.js TypeScript React.js Tailwind CSS Three.js JavaScriptES6+ HTML/CSS </p>
            <div className='box-child'>
              <h4>FreeAi </h4>
              <p>Free Ai Image and Voice speech Generator </p>
              <div className='pb-[5px]'><Button label="Live"
              url='' />   </div>
              <Button label="Cached" url="https://free-ai-one.vercel.app/"/>
            </div>
        </div>



        <div className='box'>
            <Image width={330} height={250} src="/vuexy.png" alt="" />
            <p>React Webpack Hooks Custom Components CSS js Bootstrap  Next.js </p>
            <div className='box-child'>
              <h4>Vuaxy</h4>
              <p>vuexy landing page designed for a SaaS agency</p>
              <Button label="Live" url="https://vuexy-landing-page-six.vercel.app/"
              />              
            </div>
        </div>


        <div className='box'>
            <Image width={330} height={250} src="/nft.png" alt="" />
            <p>React.js Tailwind  Next.js CSS TypeScript React Icons</p>
            <div className='box-child'>
              <h4>NFT</h4>
              <p>A Landing page for a NFT agnecy</p>
              <Button label="Live"
             url='https://nftlandingpage-nu.vercel.app/'  />     
            </div>
        </div>



        <div className='box'>
            <Image width={330} height={250} src="/pandatap.png" alt="" />
            <p>React.js styled-components Material-UI Node.js Express.js MongoDB Mongoose Cloudinary Multer Telegram Bot API Vercel Railway</p>
            <div className='box-child'>
              <h4>TG Bot And Mini app</h4>
              <p>i built tg bot with a mini app with collegs</p>
              <Button label="Live"
             url='https://demo-bot-frontend.vercel.app/' />     
            </div>
        </div>

        <div className='box'>
            <Image width={330} height={250} src="/myportfolio.png" alt="" />
            <p>React.js TailwindCSS Framer Motion GSAP  Multer Next.js TypeScript CSS JavaScript</p>
            <div className='box-child'>
              <h4>Portfolio</h4>
              <p>Personal Portfolio</p>
              <Button label="Live"
             url='https://www.huzaifa-iqbal.com/' />     
            </div>
        </div>


        <div className='box'>
            <Image width={330} height={250} src="/uber.png" alt="" />
            <p>React.js TailwindCSS Framer Motion Node.js Express.js MongoDB Mongoose Socket.io Google Maps API JWT Redux</p>
            <div className='box-child'>
              <h4>Ubber Clone</h4>
              <p>to enhance my skills (ongoing)</p>
              <Button label="Live"
             url='https://99x.findton.app/' />     
            </div>
        </div>



        <div className='box'>
            <Image width={330} height={250} src="/99x.png" alt="" />
            <p>Wordpress Elementor Addons CMS</p>
            <div className='box-child'>
              <h4>99x Automation</h4>
              <p>Its a agency about Ai Agents</p>
              <Button label="Live"
             url='https://99x.findton.app/' />     
            </div>
        </div>



        <div className='box'>
            <Image width={330} height={250} src="/safoundation.png" alt="" />
            <p>Wordpress Elementor Addons CMS Plugins</p>
            <div className='box-child'>
              <h4>Sa Foundation</h4>
              <p>it is a charity foundation in interior sindh</p>
              <Button label="Live"
             url='https://safoundation.site/' />     
            </div>
        </div>



      </div>

      
    </div>
    </div>
    <style>
      {`
        .project-parent{
        padding-bottom: 50px;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        }
        .project-cnt{
        display: flex ;
        width: 1440px;
        max-width: 90%;
        }
        .project-cnt .bg-image-left{
        position: absolute;
        top: 20%;
        left: 0;
        }

        .project-cnt .bg-image-right{
        position: absolute;
        top: 30%;
        right: 0;
        }

        .project-cnt{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }

        .project-cnt .top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 50px;
        }

        .project-cnt .top div h3{
        color: var(--white, #FFF);
        font-family: "Fira Code" , monospace;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        }
        .project-cnt .top div h3 span{
        color: var(--primary, #C778DD);
        }
        .project-cnt .top div{
        display: flex;
        justify-content: center;
        align-items: center;  
        }
        .project-cnt .project-boxes{
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        }

        .project-cnt .project-boxes .box{
        border: 1px solid var(--gray, #ABB2BF);
        display: flex;
        flex-direction: column;
        width: 330px;
        }

        .project-cnt .project-boxes .box Image{
        width: 330px;
        }

        .project-cnt .project-boxes .box p{
        color: var(--gray, #ABB2BF);
        font-family: "Fira Code" , monospace;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 8px; 
        border-bottom: 1px solid var(--gray, #ABB2BF);
        }

        .project-cnt .project-boxes .box .box-child {
        padding: 20px;
        }
        .project-cnt .project-boxes .box div h4{

        color: var(--white, #FFF);
        font-family: "Fira Code", monospace;
        font-size: 24px;
        font-weight: 500;
        }
        .project-cnt .project-boxes .box div p{
        padding-left: 0px;
        padding-top: 16px;
        padding-bottom: 16px;
        color: var(--gray, #ABB2BF);
        font-family: "Fira Code" ,monospace;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-bottom: 0px;
        }

      `}
    </style>
    </>
  )
}

export default AllProjects;
