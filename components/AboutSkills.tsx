"use client";
import React from 'react'

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const MotionImage = motion(Image);

const AboutSkills = () => {
  return (
    <>
    <div className='aboutSkills-cnt flex flex-col items-center justify-center w-[1440px] max-w-[90%]  pt-[100px] pb-[100px]'>

    
    <div className="top w-full flex justify-between pb-[50px]"> 
    <div>
      <h3><span>#</span>Skills</h3><span className='line'></span>
      
      </div>
    <div>    </div>
  </div>
    
    
    <div className='second flex w-full flex justify-between'>
      {/* <div className="pattrens w-[50%] relative">
      <motion.img 
      src='/backgroundsdots.png'
      alt='first-dot'
      className='first-dot'
      initial={{opacity: 0 , y: 30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      />
      <motion.img 
      src='/backgroundsdots.png'
      alt='second-dot'
      className='second-dot'
      initial={{opacity: 0 , x: -30}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      />
      <motion.img 
      src='/skills2.png'
      alt='first-sq'
      className='first-sq'
      initial={{opacity: 0 , x: 30}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      />
      <motion.img 
      src='/skills1.png'
      alt='second-sq'
      className='second-sq'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      />
      <motion.img 
      src='/backgrounds1.png'
      alt='hero-background'
      className='hero-background'
      initial={{opacity: 0 , y: -70}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      />
      </div>
       */}



      <div className="skills-boxes flex justify-end gap-[16px]">
          
        <div className="languages box">
            <h4 className='box-heading'>Languages</h4>
            <p className='box-para'>HTML CSS JavaScript TypeScript</p>
          </div>

      <div className="db box">
            <h4 className='box-heading'> Database </h4>
            <p className='box-para'>MongoDB Mongoose</p>
          </div>
          
          
          <div className="others box ">
          <h4 className='box-heading'>Others</h4>
          <p className='box-para'>Canva Trello Notion Netlify cPanel Firebase Linux Command Line Bash npm pnpm Yarn JSON JWT APIs Responsiveness Testing Cross-Browser Compatibility Chrome DevTools</p>
        </div>
        

        <div className="tools box">
            <h4 className='box-heading'>Tools</h4>
            <p className='box-para'>Git GitHub Figma VS Code Vercel Railway Cloudinary Multer Telegram Bots API REST APIs MiniApps</p>
          </div>
       

        <div className="fw box">
          <h4 className='box-heading'>FrameWorks</h4>
          <p className='box-para'>React.js Next.js Tailwind CSS GSAP Framer Motion Redux Node.js Express.js</p>
        </div>    

        
        <div className="cms box">
          <h4 className='box-heading'>CMS</h4>
          <p className='box-para'>(Good at) WordPress Shopify</p>
        </div>
      
        <div className="cms box">
          <h4 className='box-heading'>SEO Skills</h4>
          <p className='box-para'>Off page Technical SEO Google Search Console Speed Optimization</p>
        </div>


      </div>

    </div>


    </div>
      <style>
        {`
          .pattrens .first-dot{
              position: absolute;
              top: 40%;
              left: 0%;
          }
          .pattrens .second-dot{
            position: absolute;
            top: 50%;
            right: 50%;
          }
          .pattrens .first-sq{
            width: 100px;
            position: absolute;
            top: 10%;
            right: 20%;
          }
          .pattrens .second-sq{
            width: 52px;
            position: absolute;
            top: 80%;
            right: 15%;
          }
          .pattrens .hero-background{
            position: absolute;
            top: 70%;
            left: 10%;
          }

          /* boxes */
          .box{
          width: 180px;
          display: flex;
          flex-direction: column;
          padding: 8px 0px;
          gap: 8px;
          border: 1px solid var(--gray, #ABB2BF);
          }

          .box-heading{
          color: var(--white, #FFF);
          font-family: "Fira Code" , monospace;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          padding: 0px 8px 8px 8px ;
          border-bottom: 1px solid var(--gray, #ABB2BF);

          }
          .box-para{
          color: var(--gray, #ABB2BF);
          font-family: "Fira Code" , monospace;
          font-size: 16px;
          line-height: 16px;
          padding: 0px 8px 0px 8px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          }
          .top div{
          display: flex;
          justify-content: center;
          align-items: center;
          }
          .top div h3{
          color: var(--white, #FFF);
          font-family: "Fira Code" , monospace;
          font-size: 32px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          }
          .top div h3 span{
          color: var(--primary, #C778DD);
          }
          .top div .line{
          width: 600px;
          height: 1px !important;
          color: var(--primary, #C778DD);
          padding: 1px;
          margin-left: 5px;
          background-color: #C778DD;
          }
          .top div a {
          font-family: "Fira Code" , monospace;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          }
        `}
      </style>
    </>
  )
}

export default AboutSkills
