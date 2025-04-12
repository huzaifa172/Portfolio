import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Media from '@/components/Media'
import PageHeading from '@/components/pageHeading'
import Aboutme from '@/components/Aboutme'
import AboutSkills from '@/components/AboutSkills'
import Funfacts from '@/components/Funfacts'
const page = () => {
  return (
<>
    <div className="main-cnt flex flex-col items-center relative">
      <div className="fixed top-0 left-0"> <Media /></div>
      <Header />      
      <PageHeading name="aboute-me" text="Who am i?"/>
      <Aboutme />
      <AboutSkills />
      <Funfacts />
      <Footer />
    </div>
    </>
  )
}

export default page
