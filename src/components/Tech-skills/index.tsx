import Titles from "@/components/Titles";
import tailwind from "@/images/technologies/tailwind.svg"
import javascript from "@/images/technologies/javascript.svg"
import typescript from "@/images/technologies/typescript.svg"
import git from "@/images/technologies/git.svg"
import reactjs from "@/images/technologies/reactjs.svg"
import nextjs from "@/images/technologies/nextjs.svg"
import html from "@/images/technologies/html.svg"
import css from "@/images/technologies/css.svg"
import bootstrap from "@/images/technologies/bootstrap.svg"
import sass from "@/images/technologies/sass.svg"
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
                <TechCard isDark={isDark} image={html} name="HTML5" />
                <TechCard isDark={isDark} image={css} name="CSS3" />
                <TechCard isDark={isDark} image={javascript} name="JavaScript" />
                <TechCard isDark={isDark} image={typescript} name="TypeScript" />
                <TechCard isDark={isDark} image={reactjs} name="ReactJS" />
                <TechCard isDark={isDark} image={nextjs} name="NextJS" />
                <TechCard isDark={isDark} image={tailwind} name="TailwindCSS" />
                <TechCard isDark={isDark} image={git} name="Git" />
                <TechCard isDark={isDark} image={bootstrap} name="Bootstrap" />
                <TechCard isDark={isDark} image={sass} name="SASS" />
            </div>
        </section>
    )
}

export default TechSkills