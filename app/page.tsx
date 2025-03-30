import Header from "@/components/Header";
import "./globals.css";
import Media from "@/components/Media";
import HeroSection from "@/components/HeroSection";
import Quote from "@/components/Quote";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Aboutme from "@/components/Aboutme"; // Ensure case matches exactly
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer"; // Ensure case matches exactly

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
