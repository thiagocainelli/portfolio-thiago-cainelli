import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IconBackToTop from "@/components/IconBackToTop";
import PageBeginner from "./beginner";
import PageAbout from "./about";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen w-screen max-w-full bg-zinc-900 text-slate-300">
      
      <Header />
     
      <section className="grow flex flex-col items-center w-[90%] max-w-[1700px]">

        <PageBeginner />
        <PageAbout />

      </section>
      

      <IconBackToTop />
      <Footer />
      
    </main>
  )
}
