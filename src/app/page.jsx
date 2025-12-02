import Image from "next/image";
import Hero from "@/components/sections/Hero.jsx";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Project from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <div className="bg-linear-to-br from-white via-blue-50 to-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
