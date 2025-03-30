"use client";
import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer
