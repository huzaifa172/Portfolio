"use client";

import React from 'react'
import './styelsheets/components.css'
import "../../app/globals.css"



const Header = () => {
  return (
    <div className='z-[99999] bg-[#282C33] w-[1440px] fixed   max-w-[90%] flex justify-between items-center pt-[32px] pb-[8px]'>
    
    
      <div className="logo w-[50%] flex flex-row justify-start items-center gap-[5px]">
      
        <div>

      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="white"/>
        </svg>
        </div>


       <p>Elias</p>
      
      </div>

    <div className="menu-lang-cnt w-[50%] flex justify-end gap-[32px]">

      <div className="menu">
        <ul className=' flex justify-center items-center gap-[32px]'>
        <li className='font-[16px] font-medium text-white'><span className='text-[#C778DD]'>#</span>home</li>
        <li className='font-[16px] font-medium text-white'><span className='text-[#C778DD]'>#</span>works</li>
        <li className='font-[16px] font-medium text-white'><span className='text-[#C778DD]'>#</span>about-me</li>
        </ul>
      </div>
      <div className="lang-change">
        <select name="lang" id="" className='bg-transparent border-none outline-none'>
        <option value="eng" className='bg-transparent'>EN</option>
        <option value="urdu">UR</option>
        <option value="arabic">AR</option>
        </select>
        </div>
    </div>

    <style jsx>
          {`
          .logo p{
          color: var(--white, #FFF);
          font-family: 'Fira Code', monospace;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          }
          .menu ul li{
          font-family: 'Fira Code', monospace;
          }
          
          `
          }

    </style>


    </div>
  )
}

export default Header
