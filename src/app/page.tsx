import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IconBackToTop from "@/components/IconBackToTop";
import PageBeginner from "./beginner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-screen max-w-full bg-zinc-900 text-slate-300">
      
      <Header />
     
      <section className="grow flex flex-col items-center">
        <PageBeginner />
      </section>
      

      <IconBackToTop />
      <Footer />
      
    </main>
  )
}
