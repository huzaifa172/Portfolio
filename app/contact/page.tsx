"use cleint";
import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Media from '../../components/Media'
import PageHeading from '../../components/PageHeading';
import Contactmain from '../../components/Contactmain';
const page = () => {
  return (
    <div className="main-cnt flex flex-col items-center relative">
      <div className="fixed top-0 left-0"> <Media /></div>
      <Header />
      <PageHeading name="Contact" text="Let's build Empires"/>
      <Contactmain />
      <Footer />

    </div>  

  )
}

export default page
