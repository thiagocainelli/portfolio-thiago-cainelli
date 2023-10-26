import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IconBackToTop from "@/components/IconBackToTop";
import Beginner from "../components/Beginner";
import About from "../components/About";
import TechSkills from "../components/Tech-skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen w-screen max-w-full bg-zinc-100 text-zinc-800">
      
      <Header />
     
      <section className="grow flex flex-col items-center w-[90%] max-w-[1700px]">
        <Beginner />
        <About />
        <TechSkills />
        <Projects />
        <Contacts />
      </section>
    
      <IconBackToTop />

      <Footer />
      
    </main>
  )
}
