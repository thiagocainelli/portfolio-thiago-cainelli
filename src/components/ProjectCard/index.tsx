import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import "./ProjectCard.css"

interface ProjectCardProps {
    projectName: string,
    projectImage: any,
    repositoryLink: string,
    prevLink: string,
    techImage1: any,
    techName1: string
    techImage2?: any,
    techName2?: any,
    techImage3?: any,
    techName3?: any,
    techImage4?: any,
    techName4?: any
}


function ProjectCard({ projectName, projectImage, repositoryLink, prevLink, techImage1, techName1, techImage2, techName2, techImage3, techName3, techImage4, techName4} : ProjectCardProps) {
    return (
      <div className="w-[300px] h-[450px] p-3 bg-zinc-800 flex flex-col items-center justify-center border-2 border-transparent transition-all hover:scale-105 hover:border-blue-700  cursor-default">
        <div className="text-2xl">
            {projectName}
        </div>

        <div className="mt-3">
            <Image
                className="w-full " 
                src={projectImage} 
                alt={projectName} 
            />
        </div>

        <div className="flex items-center justify-center gap-4 w-full mb-4 border-b border-zinc-600 py-5">
            <Link href={repositoryLink} target="_blank" >
                <button className="btnLinks flex items-center border border-slate-300 px-2 py-1 gap-1 rounded-md">
                    <IconBrandGithub />
                    Repositório
                </button>
            </Link>

            <Link href={prevLink} target="_blank" >
                <button className="btnLinks flex items-center border border-slate-300 px-2 py-1 gap-1 rounded-md">
                    <IconExternalLink />
                    Prévia
                </button>
            </Link>
        </div>

        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Image
                    width={30}
                    src={techImage1} 
                    alt={techName1}
                />
                {techName1}
            </div>
            <div className="flex items-center gap-2">
                <Image
                    width={30}
                    src={techImage2} 
                    alt={techName2}
                />
                {techName2}
            </div>
            <div className="flex items-center gap-2">
                <Image
                    width={30}
                    src={techImage3} 
                    alt={techName3}
                />
                {techName3}
            </div>
            <div className="flex items-center gap-2">
                <Image
                    width={30}
                    src={techImage4} 
                    alt={techName4}
                />
                {techName4}
            </div>
        </div>
      </div>  
    )
}

export default ProjectCard