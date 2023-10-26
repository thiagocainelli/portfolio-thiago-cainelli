import ProjectCard from "@/components/ProjectCard";
import Titles from "@/components/Titles";
import tailwind from "@/images/tailwind.svg"
import javascript from "@/images/javascript.svg"
import typescript from "@/images/typescript.svg"
import reactjs from "@/images/reactjs.svg"
import nextjs from "@/images/nextjs.svg"
import html from "@/images/html.svg"
import css from "@/images/css.svg"
import sass from "@/images/sass.svg"
import bootstrap from "@/images/bootstrap.svg"
import personalFinances from "@/images/personal-finances.png";
import tlviagens from "@/images/tl-viagens.png";
import tcimports from "@/images/tc-imports.png";
import projectx from "@/images/space-x.png";


function Projects() {
    return (
        <section id="projects" className="w-full flex flex-col items-center border-t border-zinc-300 mb-3">
            
            <Titles text="Projetos" />

            <div className="flex gap-5 flex-wrap items-center justify-center my-10">
                <ProjectCard 
                    projectName="Finanças Pessoais"
                    projectImage={personalFinances}
                    repositoryLink="https://github.com/thiagocainelli/personal-finances"
                    prevLink="https://personal-finances-cainelli.vercel.app/"
                    techImage1={nextjs}
                    techName1="NextJS"
                    techImage2={typescript}
                    techName2="TypeScript"
                    techImage3={tailwind}
                    techName3="TailwindCSS"
                />

                <ProjectCard 
                    projectName="WebSite - TL Viagens"
                    projectImage={tlviagens}
                    repositoryLink="https://github.com/thiagocainelli/tl-viagens"
                    prevLink="https://tl-viagens.vercel.app/"
                    techImage1={nextjs}
                    techName1="NextJS"
                    techImage2={typescript}
                    techName2="TypeScript"
                    techImage3={tailwind}
                    techName3="TailwindCSS"
                />

                <ProjectCard 
                    projectName="Controle de Estoque"
                    projectImage={tcimports}
                    repositoryLink="https://github.com/thiagocainelli/tcimports-stock"
                    prevLink="https://tcimports-stock.vercel.app/"
                    techImage1={reactjs}
                    techName1="ReactJS"
                    techImage2={javascript}
                    techName2="JavaScript"
                    techImage3={css}
                    techName3="CSS3"
                />

                <ProjectCard 
                    projectName="WebSite - ProjectX"
                    projectImage={projectx}
                    repositoryLink="https://github.com/thiagocainelli/projectX"
                    prevLink="https://thiagocainelli-projectx.netlify.app/"
                    techImage1={html}
                    techName1="HTML5"
                    techImage2={sass}
                    techName2="SASS"
                    techImage3={bootstrap}
                    techName3="Bootstrap"
                />

            </div>

        </section>
    )
}

export default Projects