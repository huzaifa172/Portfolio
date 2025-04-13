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



      
      <div className="project-boxes gap-[20px] ">
        
        
        
        <div className='box'>
            <Image src="/project1.jpg" alt="" width={330} height={250}/>
            <p>HTML SCSS Python Flask</p>
            <div className='box-child'>
              <h4>ChertNode</h4>
              <p>Minecraft servers hosting</p>
              <div className='pb-[5px]'><Button label="Live"
              />   </div>
              <Button label="Cached"/>
            </div>
        </div>



        <div className='box'>
            <Image src="/project2.jpg" alt="" width={330} height={250}/>
            <p>React Express Discord.js Node.js HTML SCSS Python Flask</p>
            <div className='box-child'>
              <h4>ProtectX</h4>
              <p>Discord anti-crash bot</p>
              <Button label="Live"
              />              
            </div>
        </div>


        <div className='box'>
            <Image src="/project3.jpg" alt="" width={330} height={250}/>
            <p>CSS Express Node.js</p>
            <div className='box-child'>
              <h4>Kahoot Answers Viewer</h4>
              <p>Get answers to you kahoot quiz</p>
              <Button label="Live"
              />     
            </div>
        </div>



        <div className='box'>
            <Image src="/portfolio-project.png" alt="" width={330} height={250}/>
            <p>Vue Ts Less </p>
            <div className='box-child'>
              <h4>Portfolio</h4>
              <p>Your are using it un</p>
              <Button label="Live"
              />     
            </div>
        </div>


        <div className='box'>
            <Image src="/fourth-project.png" alt=""  width={330} height={250}/>
            <p>HTML CSS JS </p>
            <div className='box-child'>
              <h4>Kotick Bot</h4>
              <p>Multi-function discord bot</p>
              <Button label="Live"
              />     
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
