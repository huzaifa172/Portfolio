"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const MotionImage = motion(Image);

const Funfacts = () => {
  return (
    <>
    <div className='funfacts-cnt flex flex-col items-center justify-center w-[1440px] max-w-[90%]  pt-[100px] pb-[100px]'>

    
    <div className="top w-full flex justify-between pb-[50px]"> 
    <div>
      <h3><span>#</span>funfacts</h3><span className='line'></span>
      
      </div>
    <div></div>
    </div>
    
    
    <div className='second flex w-full flex justify-between gap-[20px]'>
      {/* <div className="pattrens w-[50%] relative">
      <MotionImage 
      width={100}
      height={100}
      src='/backgroundsdots.png'
      alt='first-dot'
      className='first-dot'
      initial={{opacity: 0 , y: 30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      />
      <MotionImage 
      width={100}
      height={100}
      src='/backgroundsdots.png'
      alt='second-dot'
      className='second-dot'
      initial={{opacity: 0 , x: -30}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      />
      <MotionImage 
      width={100}
      height={100}
      src='/skills1.png'
      alt='first-sq'
      className='first-sq'
      initial={{opacity: 0 , x: 30}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      />
      <MotionImage 
      width={100}
      height={100}
      src='/skills2.png'
      alt='second-sq'
      className='second-sq'
      initial={{opacity: 0 , y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      />
      <MotionImage 
      width={100}
      height={100}
      src='/backgrounds1.png'
      alt='hero-background'
      className='hero-background'
      initial={{opacity: 0 , y: -70}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      />
      </div>
 */}



      <div className="funfacts-boxes flex justify-end gap-[16px]">
        <div className="lang-boxes flex flex-col gap-[16px]">
          
            <h4 className='box-heading'>I’m a goal-setter by nature — whether it's in life or on the football field.</h4>
        </div>
        <div className="db-boxes flex flex-col gap-[16px]">

            <h4 className='box-heading'>Nothing beats a good cup of chai, especially when paired with deep thoughts or good company.</h4>
        </div>
        
      <div className="db-boxes flex flex-col gap-[16px]">    
          <h4 className='box-heading'>I love planning things out — be it projects, trips, or my next big move.</h4>
        </div>
 </div>



        
    </div>
    <div className='funfacts-boxes flex justify-end gap-[16px]  pt-10'>

<div className="db-boxes flex flex-col gap-[16px]">    
<h4 className='box-heading'>Traveling excites me; I enjoy exploring new places and cultures.</h4>
</div>

<div className="db-boxes flex flex-col gap-[16px]">    
<h4 className='box-heading'>I prefer calm over chaos — which is probably why I don’t listen to music most of the time.</h4>
</div>





</div>


<div className='funfacts-boxes flex justify-end gap-[16px] pt-10'>

<div className="db-boxes flex flex-col gap-[16px]">    
<h4 className='box-heading'>I believe every challenge is just a goal waiting to be scored.</h4>
</div>



<div className="db-boxes flex flex-col gap-[16px]">    
<h4 className='box-heading'>My favorite type of productivity is the kind that starts with a clear mind and a hot cup of tea.</h4>
</div>

</div>

    </div>
      <style>
        {`
         .funfacts-cnt .pattrens .first-dot{
              position: absolute;
              top: 40%;
              left: 0%;
          }
         .funfacts-cnt .pattrens .second-dot{
            position: absolute;
            top: 50%;
            right: 50%;
          }
         .funfacts-cnt .pattrens .first-sq{
            width: 100px;
            position: absolute;
            top: 10%;
            right: 20%;
          }
         .funfacts-cnt .pattrens .second-sq{
            width: 52px;
            position: absolute;
            top: 80%;
            right: 15%;
          }
         .funfacts-cnt .pattrens .hero-background{
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
          padding: 15px;
          border: 1px solid var(--gray, #ABB2BF);

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

export default Funfacts
