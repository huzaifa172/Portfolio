"use client";
type ButtonProps = {
  label: string;
  url :string;
  }

import Link from 'next/link';
import React from 'react'
const Button = ({ label , url }: ButtonProps) => {
  return (
    <>
     <Link href={url}>
    <div className='btn-cnt py-1 px-2 lg:py-2 lg:px-2'>
        <button className='text-sm lg:text-base text-center self-center w-full'>{label}</button>      
    </div>
    </Link>

    <style jsx>
    {`
      .btn-cnt{
      width: 148px;
      border: 1px solid  #C778DD;
      }
      .btn-cnt button{
      color: #FFF;
      font-family: "Fira Code" , monospace;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      curser: pointer;
      }
    `}
    </style>
    </>

  )
}

export default Button
