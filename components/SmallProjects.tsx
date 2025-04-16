import React from 'react'
import { motion } from "framer-motion"
import Button from './Button'
const SmallProjects = () => {
  return (
    <div className='small-project-cnt pt-[50px] pb-[50px]'>       
      <motion.img 
      src='/backgroundsdots.png'
      alt='Left Image'
      className='bg-image-left'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      /> 
      <motion.img 
      src='/aboutme2.png'
      alt='Left Image'
      className='bg-image-right'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      /> 
      <div className="top">
        <div><h3><span>#</span>Small-projects</h3></div>
      </div>

        <div className="boxes">
           
        <div className='box'>
            <p>Discord.js TS JS</p>
            <div className='box-child'>
              <h4>Bot Boilerplate</h4>
              <p>Start creating scalable discord.js bot with typescript in seconds </p>
              <Button url='/' label="Github"/>
            </div>
        </div>


        <div className='box'>
            <p>Discord.js TS JS</p>
            <div className='box-child'>
              <h4>Bot Boilerplate</h4>
              <p>Start creating scalable discord.js bot with typescript in seconds </p>
              <Button url='/' label="Github"/>
            </div>
        </div>

        <div className='box'>
            <p>Discord.js TS JS</p>
            <div className='box-child'>
              <h4>Bot Boilerplate</h4>
              <p>Start creating scalable discord.js bot with typescript in seconds </p>
              <Button url='/' label="Github"/>
            </div>
        </div>

        <div className='box'>
            <p>Discord.js TS JS</p>
            <div className='box-child'>
              <h4>Bot Boilerplate</h4>
              <p>Start creating scalable discord.js bot with typescript in seconds </p>
              <Button url='/' label="Github"/>
            </div>
        </div>
        
        <div className='box'>
            <p>Discord.js TS JS</p>
            <div className='box-child'>
              <h4>Bot Boilerplate</h4>
              <p>Start creating scalable discord.js bot with typescript in seconds </p>
              <Button url='/' label="Github"/>
            </div>
        </div>
        
        <div className='box'>
            <p>Discord.js TS JS</p>
            <div className='box-child'>
              <h4>Bot Boilerplate</h4>
              <p>Start creating scalable discord.js bot with typescript in seconds </p>
              <Button url='/' label="Github"/>
            </div>
        </div>
        
        <div className='box'>
            <p>Discord.js TS JS</p>
            <div className='box-child'>
              <h4>Bot Boilerplate</h4>
              <p>Start creating scalable discord.js bot with typescript in seconds </p>
              <Button url='/' label="Github"/>
            </div>
        </div>


        </div>
        <style>
          {`
        .small-project-cnt{
        display: flex ;
        width: 1440px;
        max-width: 90%;
        }
        .small-project-cnt .bg-image-left{
        position: absolute;
        top: 90%;
        left: 0;
        }

        .small-project-cnt .bg-image-right{
        position: absolute;
        top: 80%;
        right: 0;
        }

        .small-project-cnt{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }

        .small-project-cnt .top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 50px;
        }

        .small-project-cnt .top div h3{
        color: var(--white, #FFF);
        font-family: "Fira Code" , monospace;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        }
        .small-project-cnt .top div h3 span{
        color: var(--primary, #C778DD);
        }
        .small-project-cnt .top div{
        display: flex;
        justify-content: center;
        align-items: center;  
        }


        .small-project-cnt .boxes{
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;

        }

        .small-project-cnt .boxes .box{
        border: 1px solid var(--gray, #ABB2BF);
        display: flex;
        flex-direction: column;
        width: 330px;
        }
        
        .small-project-cnt .boxes .box p{
        color: var(--gray, #ABB2BF);
        font-family: "Fira Code" , monospace;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 8px; 
        border-bottom: 1px solid var(--gray, #ABB2BF);
        }

        .small-project-cnt .boxes .box .box-child {
        padding: 20px;
        }
        .small-project-cnt .boxes .box div h4{
        color: var(--white, #FFF);
        font-family: "Fira Code", monospace;
        font-size: 24px;
        font-weight: 500;
        }

        .small-project-cnt .boxes .box div p{
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

    </div>
  )
}

export default SmallProjects
