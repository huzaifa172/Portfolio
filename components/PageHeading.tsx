import React from 'react'

const PageHeading = ({ name, text }: PageHeadingProps) => {
  return (
    <div className='heading-cnt pt-[150px] w-[1440px] max-w-[90%] flex justify-start items-center'>
       
       
       <div className="top">
        <div><h3><span>/</span>{name}</h3><span className='text'>{text}</span></div>
      </div>
      




      <style>
        {`
        
        .heading-cnt .top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 50px;
        }

        .heading-cnt .top div h3{
        color: var(--white, #FFF);
        font-family: "Fira Code" , monospace;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        }
        .heading-cnt .top div h3 span{
        color: var(--primary, #C778DD);
        }
        .heading-cnt .top div{
        display: flex;
        flex-direction : column;
        justify-content: center;
        gap: 20px; 
        align-items: center;  
        }
        .heading-cnt .top div .text{
        color: #FFF;
        font-family: "Fira Code" , monospace;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        
        }`}
      </style>
    </div>
    
  )
}

export default PageHeading
