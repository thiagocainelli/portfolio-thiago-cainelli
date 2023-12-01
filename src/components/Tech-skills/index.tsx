import Titles from "@/components/Titles";
import tailwind from "@/public/technologies/tailwind.svg";
import javascript from "@/public/technologies/javascript.svg";
import typescript from "@/public/technologies/typescript.svg";
import git from "@/public/technologies/git.svg";
import reactjs from "@/public/technologies/reactjs.svg";
import nextjs from "@/public/technologies/nextjs.svg";
import html from "@/public/technologies/html.svg";
import css from "@/public/technologies/css.svg";
import sass from "@/public/technologies/sass.svg";
import node from "@/public/technologies/nodejs.svg";
import styledComponents from "@/public/technologies/styled-components.svg";
import mongodb from "@/public/technologies/mongodb.svg";
import TechCard from "@/components/TechCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
interface TechSkillsProps {
    isDark: boolean
}

function TechSkills({isDark}: TechSkillsProps) {
    
    useEffect(() => {
        AOS.init(); 
    }, [])
    
    return (
        <section id="tech-skills" className={`w-full flex flex-col items-center border-t mb-3 ${isDark ? "border-zinc-700" : "border-zinc-300"}`}>
            <Titles text="Tech Skills" />

            <div data-aos="fade-down" data-aos-duration="2000" className="flex gap-5 flex-wrap items-center justify-center mt-10 mb-14">

                <TechCard isDark={isDark} image={reactjs} name="ReactJS" />
                <TechCard isDark={isDark} image={nextjs} name="NextJS" />
                <TechCard isDark={isDark} image={typescript} name="TypeScript" />
                <TechCard isDark={isDark} image={javascript} name="JavaScript" />
                <TechCard isDark={isDark} image={node} name="NodeJS" />
                <TechCard isDark={isDark} image={html} name="HTML5" />
                <TechCard isDark={isDark} image={css} name="CSS3" />
                <TechCard isDark={isDark} image={mongodb} name="MongoDB" />
                <TechCard isDark={isDark} image={tailwind} name="TailwindCSS" />
                <TechCard isDark={isDark} image={styledComponents} name="Styled-components"/>
                <TechCard isDark={isDark} image={sass} name="SASS" />
                <TechCard isDark={isDark} image={git} name="Git" />
            </div>
        </section>
    )
}

export default TechSkills