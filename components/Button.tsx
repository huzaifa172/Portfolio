"use client";
import React from 'react'
const Button = ({ label }: { label: string }) => {
  return (
    <><div className='btn-cnt'>
        <button>{label}</button>
      
    </div>
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
      }
    `}
    </style>
    </>

  )
}

export default Button
