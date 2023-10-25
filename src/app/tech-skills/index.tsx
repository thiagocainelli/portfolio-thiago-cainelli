import Titles from "@/components/Titles";
import tailwind from "@/images/tailwind.svg"
import javascript from "@/images/javascript.svg"
import typescript from "@/images/typescript.svg"
import git from "@/images/git.svg"
import reactjs from "@/images/reactjs.svg"
import nextjs from "@/images/nextjs.svg"
import html from "@/images/html.svg"
import css from "@/images/css.svg"
import bootstrap from "@/images/bootstrap.svg"
import sass from "@/images/sass.svg"
import TechCard from "@/components/TechCard";

function PageTechSkills() {
    return (
        <section id="tech-skills" className="w-full flex flex-col items-center border-t border-zinc-800 mb-3">
            <Titles text="Tech Skills" />

            <div className="flex gap-5 flex-wrap items-center justify-center my-10">
                <TechCard image={html} name="HTML5" />
                <TechCard image={css} name="CSS3" />
                <TechCard image={javascript} name="JavaScript" />
                <TechCard image={typescript} name="TypeScript" />
                <TechCard image={reactjs} name="ReactJS" />
                <TechCard image={nextjs} name="NextJS" />
                <TechCard image={tailwind} name="TailwindCSS" />
                <TechCard image={git} name="Git" />
                <TechCard image={bootstrap} name="Bootstrap" />
                <TechCard image={sass} name="SASS" />
        
            </div>

        </section>
    )
}

export default PageTechSkills