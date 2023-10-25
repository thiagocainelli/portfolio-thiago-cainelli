import Image from "next/image"
import ThiagoImg from "@/images/thiago1-without-bg.png";
import Link from "next/link";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import "./Beginner.css";


function Beginner() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-evenly sm:flex-row my-5">
            <div className="flex flex-col flex-wrap text-center gap-5 sm:gap-3 sm:text-left">
                <h3 className="text-2xl 2xl:text-3xl">Olá, me chamo Thiago Cainelli! 👋</h3>
                <h1 className="text-4xl 2xl:text-6xl font-bold text-blue-700 text-center sm:text-left sm:text-5xl">Sou Desenvolvedor Front-End</h1>
                <div className="flex items-center justify-center sm:justify-normal mt-5 gap-5">
                    <Link href="https://linkedin.com/in/thiagocainelli" target="_blank">
                        <button className="btnSocials flex gap-1 items-center justify-center py-1 px-2 rounded-md border border-slate-300 transition-all hover:scale-105">
                            <IconBrandLinkedin />
                            LinkedIn
                        </button>
                    </Link>
                    <Link href="https://github.com/thiagocainelli" target="_blank">
                        <button className="btnSocials flex gap-1 items-center justify-center py-1 px-2 rounded-md border border-slate-300 transition-all hover:scale-105">
                            <IconBrandGithub />
                            GitHub
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <Image
                    className="firstImage" 
                    src={ThiagoImg} 
                    alt="Imagem 1 - Thiago Cainelli"
                />
            </div>
        </section>
    )
}

export default Beginner