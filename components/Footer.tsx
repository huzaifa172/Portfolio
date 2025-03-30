"use client";
import React from 'react'

const Footer = () => {
  return (
    <>
 <div className=' footer w-[1440px] max-w-[90%] flex flex-col justify-between pt-[38px] gap-[38px]'>
      <div className="childs flex justify-between w-full">
      <div className="first-child w-[50%] flex flex-col gap-[20px] ">
        <div className="logo-cnt flex justify-between  max-w-[250px]">
        <div className="logo flex justify-start gap-[10px]">
          <img src="/logo.png" alt="LOGO" />
          <p className='logo-text'> Elias</p>
        </div>
        <p>elias@elias-dev.ml</p>
          
        </div>
        <p className='footer-text'>Web designer and front-end developer</p>
      </div>
      <div className="second-child flex flex-col justify-center items-center">
        <h3>Media</h3>
        <div className="media flex justify-center gap-[10px]">
          <img src="/github.png" alt="" />
          <img src="/justdiscord.png" alt="" />
          <img src="/figma.png" alt="" />
        </div>
      </div>
      </div>


      <div className="bottom-bar w-full flex justify-center pb-[20px]">
        <p>© Copyright 2022. Made by Elias</p>
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
