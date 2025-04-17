"use client";
import React from 'react'
import Image from 'next/image';
const Footer = () => {
  return (
    <>
 <div className=' footer w-[1440px] max-w-[90%] flex flex-col justify-between pt-[38px] gap-[38px]'>
      <div className="childs flex justify-between w-full">
      <div className="first-child w-[50%] flex flex-col gap-[20px] ">
        <div className="logo-cnt flex justify-between  max-w-[400px]">
        <div className="logo flex justify-start gap-[10px]">
          <Image width={30} height={30} src="/logo.png" alt="LOGO" />
          <p className='logo-text'>huzaifa iqbal</p>
        </div>
        <p>huzaifaiqbal5554@gmail.com</p>
          
        </div>
        <p className='footer-text'>web dev MERN & Wordpress</p>
      </div>
      <div className="second-child flex flex-col justify-center items-center">
        <h3>Media</h3>
        <div className="media flex justify-center gap-[10px] pt-2">
        <a  target="blank" href="https://github.com/huzaifa172">
       <div className="github  flex flex-row justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z" fill="#ABB2BF"/>
          </svg>
       </div>
          </a>


            <a  target="blank" href="https://www.linkedin.com/in/huzaifa-iqbal-a591a4357"className='pt-2'>
       <div className="figma  flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ABB2BF">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
            2.239 5 5 5h14c2.761 0 5-2.239 
            5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 
            0-1.75-.784-1.75-1.75s.784-1.75 
            1.75-1.75 1.75.784 
            1.75 1.75-.784 1.75-1.75 1.75zm13.5 
            11.268h-3v-5.604c0-1.337-.026-3.061-1.865-3.061-1.865 
            0-2.151 1.455-2.151 2.961v5.704h-3v-10h2.881v1.367h.041c.401-.761 
            1.379-1.561 2.838-1.561 3.033 
            0 3.593 1.996 3.593 4.59v5.604z"/>
          </svg>
       </div>
          </a>
        </div>
      </div>
      </div>


      <div className="bottom-bar w-full flex justify-center pb-[20px]">
        <p>© Copyright 2025. Made by Huzaifa Iqbal Sindhi</p>
      </div>
    </div>
    <style>
      {`
      .footer{
      border-top: solid 1px #ABB2BF;
      }

      .footer .childs .first-child .logo .logo-text{
      color: var(--white, #FFF);
      font-family: "Fira Code", monospace;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      }

      .footer .childs .first-child .logo-cnt p{
      color: var(--gray, #ABB2BF);
      font-family: "Fira Code" , monospace;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      }

      .footer .childs .first-child .footer-text{
      color: var(--white, #FFF);
      font-family: "Fira Code" , monospace;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal; 

      }

      .footer .childs .second-child h3{
      color: var(--white, #FFF);
      font-family: "Fira Code" , monospace;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      }


      .footer .bottom-bar p{
      color: var(--   white, #FFF);
      font-family: "Fira Code" , monospace;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      }

      `}
    </style>
    </>
  )
}

export default Footer
