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
    techName4?: any,
    isDark: boolean
}

function ProjectCard({ projectName, projectImage, repositoryLink, prevLink, techImage1, techName1, techImage2, techName2, techImage3, techName3, techImage4, techName4, isDark} : ProjectCardProps) {
    
    return (
      <div className={`w-[320px] h-[470px] p-3 flex flex-col items-center justify-center border-2 border-transparent transition-all hover:scale-105 hover:border-blue-700 cursor-default ${isDark ? "bg-zinc-700" : "bg-zinc-300"}`}>
        
        <div className="text-2xl mb-1">
            {projectName}
        </div>

        <div className="mt-3">
            <Image
                className="w-full border border-zinc-600" 
                src={projectImage} 
                alt={projectName} 
            />
        </div>

        <div className="flex items-center justify-center gap-4 w-full mb-4 border-b border-zinc-500 py-5">
            <Link href={repositoryLink} target="_blank" >
                <button className="bg-blue-700 text-zinc-100 flex items-center px-2 py-1 gap-1 rounded-md hover:bg-blue-900">
                    <IconBrandGithub />
                    Repositório
                </button>
            </Link>

            <Link href={prevLink} target="_blank" >
                <button className="bg-blue-700 text-zinc-100 flex items-center px-2 py-1 gap-1 rounded-md hover:bg-blue-900">
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