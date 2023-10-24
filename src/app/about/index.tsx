import Titles from "@/components/Titles"
import Image from "next/image"
import ThiagoImg from "@/images/thiago2-without-bg.png";
import "./About.css";

function PageAbout() {
    return (
        <section id="about" className="w-full flex flex-col items-center border-t border-zinc-800 mb-3">
            <Titles text="Sobre Mim" />
            
            <div className="flex flex-col gap-8 my-10 items-center justify-center sm:flex-row sm:gap-3">
                <div className="w-full sm:w-[50%] flex justify-center items-center">
                    <Image 
                        className="secondImage" 
                        src={ThiagoImg} 
                        alt="Imagem 2 - Thiago Cainelli" 
                    />
                </div>

                <div className="w-full sm:w-[50%] sm:text-lg lg:text-xl xl:text-2xl flex flex-col items-center justify-center gap-3">
                    <p>Sou um profissional com experiência de trabalho no Brasil e também em Portugal, onde morei por 1 ano. Possuo bacharel em Administração de Empresas e experiência na área financeira, na qual foi muito importante para o aprimoramento das minhas <span className="text-blue-700">soft skills</span> e estou no momento cursando <span className="text-blue-700">Análise e Desenvolvimento de Sistemas</span>.</p>

                    <p>Me especializando no <span className="text-blue-700">desenvolvimento Front-end</span> trabalhando como freelancer desde Junho/2023 com criações de <span className="text-blue-700">interfaces dinâmicas, responsivas e com alto desempenho.</span> </p>
                </div>
            </div>
        </section>
    )
}

export default PageAbout