"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IconBackToTop from "@/components/IconBackToTop";
import Beginner from "../components/Beginner";
import About from "../components/About";
import TechSkills from "../components/Tech-skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import { useState } from "react";

export default function Home() {
  
  const [isDark, setIsDark] = useState<boolean>(false)

  const changeTheme = () => {
    setIsDark(!isDark) 
  }
  

  return (
    <main className={`flex flex-col items-center min-h-screen w-screen max-w-full ${isDark ? "bg-zinc-800 text-zinc-100" : "bg-zinc-100 text-zinc-800"}`}>
      
      <Header changeTheme={changeTheme} isDark={isDark} />
     
      <section className="grow flex flex-col items-center w-[90%] max-w-[1700px]">
        <Beginner />
        <About isDark={isDark} />
        <TechSkills isDark={isDark} />
        <Projects isDark={isDark} />
        <Contacts isDark={isDark} />
      </section>
    
      <IconBackToTop />

      <Footer isDark={isDark} />
      
    </main>
  )
}
