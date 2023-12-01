import ProjectCard from "@/components/ProjectCard";
import Titles from "@/components/Titles";
import tailwind from "@/public/technologies/tailwind.svg"
import javascript from "@/public/technologies/javascript.svg"
import typescript from "@/public/technologies/typescript.svg"
import reactjs from "@/public/technologies/reactjs.svg"
import nextjs from "@/public/technologies/nextjs.svg"
import html from "@/public/technologies/html.svg"
import css from "@/public/technologies/css.svg"
import sass from "@/public/technologies/sass.svg"
import bootstrap from "@/public/technologies/bootstrap.svg"
import personalFinances from "@/public/projects/personal-finances.jpeg";
import tlviagens from "@/public/projects/tl-viagens.jpeg";
import tcimports from "@/public/projects/tc-imports.jpeg";
import projectx from "@/public/projects/space-x.jpeg";
import cainellimovies from "@/public/projects/cainelli-movies.jpeg";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import next from "next";
interface ProjectsProps {
    isDark: boolean
}

function Projects({ isDark }: ProjectsProps) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="projects" className={`w-full flex flex-col items-center border-t mb-3 ${isDark ? "border-zinc-700" : "border-zinc-300"}`}>

            <Titles text="Projetos" />

            <div data-aos="zoom-in-down" data-aos-duration="2000" className="flex gap-5 flex-wrap items-center justify-center mt-10">
                <ProjectCard
                    isDark={isDark}
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
                    isDark={isDark}
                    projectName="Cainelli Movies"
                    projectImage={cainellimovies}
                    repositoryLink="https://github.com/thiagocainelli/movies-tmdb"
                    prevLink="https://movies-tmdb-thiago-cainellis-projects.vercel.app/"
                    techImage1={nextjs}
                    techName1="NextJS"
                    techImage2={typescript}
                    techName2="TypeScript"
                    techImage3={tailwind}
                    techName3="TailwindCSS"
                />

                <ProjectCard
                    isDark={isDark}
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
                    isDark={isDark}
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
                    isDark={isDark}
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

            <div className="w-full flex items-center justify-center mt-10 mb-14">
                <p className="text-center">Para visualizar mais projetos, acesse o meu <Link href="https://github.com/thiagocainelli" target="_blank"><span className="text-blue-700 border-b border-blue-700 hover:text-blue-900">GitHub!</span></Link></p>
            </div>
        </section>
    )
}

export default Projects