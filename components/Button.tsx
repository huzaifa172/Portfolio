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
    <div className='btn-cnt'>
        <button>{label}</button>      
    </div>
    </Link>

    <style jsx>
    {`
      .btn-cnt{
      width: 148px;
      
      padding: 8px 16px;
      border: 1px solid  #C778DD;
      }
      .btn-cnt button{
      color: #FFF;
      font-family: "Fira Code" , monospace;
      font-size: 16px;
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
