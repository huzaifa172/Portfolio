"use client";

import AllProjects from '@/components/AllProjects';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Media from '@/components/Media'
import PageHeading from '@/components/pageHeading';
import SmallProjects from '@/components/SmallProjects';


const page = () => {
  return (
    <>
    <div className="main-cnt flex flex-col items-center relative">
      <div className="fixed top-0 left-0"> <Media /></div>
      <Header />
      <PageHeading name="Projects" text="List of my projects"/>
      <AllProjects />
      <SmallProjects />
      <Footer />

    </div>  
    </>
  )
}

export default page
