import Titles from "@/components/Titles"
import Image from "next/image"
import ThiagoImg from "@/public/myPerson/thiago2-without-bg.png";
import "./About.css";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
interface AboutProps {
    isDark: boolean
}

function About({ isDark }: AboutProps) {

    useEffect(() => {
        AOS.init(); 
    }, [])

    return (
        <section id="about" className={`w-full flex flex-col items-center border-t mb-3 ${isDark ? "border-zinc-700" : "border-zinc-300"}`}>
            
            <Titles text="Sobre Mim" />
            
            <div className="flex flex-col gap-8 mt-10 mb-14 items-center justify-center sm:flex-row sm:gap-3">
                <div data-aos="zoom-in-right" data-aos-duration="2000" className="w-full sm:w-[50%] flex justify-center items-center">
                    <Image 
                        className="secondImage" 
                        src={ThiagoImg} 
                        alt="Imagem 2 - Thiago Cainelli" 
                    />
                </div>

                <div data-aos="zoom-in-left" data-aos-duration="2000" className="w-full sm:w-[50%] sm:text-lg lg:text-xl xl:text-2xl flex flex-col items-center justify-center gap-3">
                    <p>Sou um profissional com experiência de trabalho no Brasil e também em Portugal, onde morei por 1 ano. Possuo bacharel em Administração de Empresas e experiência na área financeira, na qual foi muito importante para o aprimoramento das minhas <span className="text-blue-700">soft skills.</span> No momento estou cursando <span className="text-blue-700">Análise e Desenvolvimento de Sistemas</span>.</p>

                    <p>Atualmente estou me especializando no <span className="text-blue-700">desenvolvimento Front-end</span> trabalhando como freelancer desde Junho/2023 com criações de <span className="text-blue-700">interfaces dinâmicas, responsivas e com alto desempenho.</span> </p>

                    <Link href="https://drive.google.com/file/d/1N82QWqFoAlAfAe4g9As_ufJKLbTa8yN4/view?usp=sharing" target="_blank">
                        <button className="bg-blue-700 flex gap-1 items-center text-lg justify-center mt-5 py-2 px-3 rounded-md text-zinc-100 transition-all hover:scale-105 hover:bg-blue-900">
                            Download CV
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default About