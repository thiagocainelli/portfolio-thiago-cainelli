import Titles from "@/components/Titles";
import tailwind from "@/images/tailwind.svg"
import javascript from "@/images/javascript.svg"
import typescript from "@/images/typescript.svg"
import git from "@/images/git.svg"
import github from "@/images/github.svg"
import reactjs from "@/images/reactjs.svg"
import nextjs from "@/images/nextjs.svg"
import html from "@/images/html.svg"
import css from "@/images/css.svg"
import TechCard from "@/components/TechCard";

function PageTechSkills() {
    return (
        <section id="tech-skills" className="w-full flex flex-col items-center border-t border-zinc-800 mb-3">
            <Titles text="Tech Skills" />

            <div className="flex gap-5 flex-wrap items-center justify-center my-5">
                <TechCard localImage={html} name="HTML5" />
                <TechCard localImage={css} name="CSS3" />
                <TechCard localImage={javascript} name="JavaScript" />
                <TechCard localImage={typescript} name="TypeScript" />
                <TechCard localImage={reactjs} name="ReactJS" />
                <TechCard localImage={nextjs} name="NextJS" />
                <TechCard localImage={tailwind} name="TailwindCSS" />
                <TechCard localImage={git} name="Git" />
        
            </div>

        </section>
    )
}

export default PageTechSkills