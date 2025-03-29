import Header from "@/public/components/Header";
import "./globals.css"
import Media from "@/public/components/Media";
import HeroSection from "@/public/components/HeroSection";
import Quote from "@/public/components/Quote";
import Project from "@/public/components/Project";
import Skills from "@/public/components/Skills";
import Aboutme from "@/public/components/aboutme";
import Contacts from "@/public/components/Contacts";
import Footer from "@/public/components/footer";


export default function Home() {
  return (
    <>
    <div className="main-cnt flex flex-col items-center relative">
      <div className="fixed top-0 left-0"> <Media /></div>
      <Header />
      <HeroSection />
      <Quote />
      <Project /> 
      <Skills />
      <Aboutme />
      <Contacts />
      <Footer />
    </div>
    </>
  );
}
