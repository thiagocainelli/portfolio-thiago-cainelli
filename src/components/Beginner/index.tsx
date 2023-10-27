import Link from "next/link";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import "./Beginner.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ImageBeginner from "../ImageBeginner";

function Beginner() {

    useEffect(() => {
        AOS.init(); 
    }, [])

    return (
        <section className="w-full sm:h-screen flex flex-col items-center justify-evenly sm:flex-row my-5">

            <div className="flex flex-col flex-wrap text-center gap-5 sm:gap-3 sm:text-left">

                <h3 className="text-2xl md:text-3xl 2xl:text-4xl">Olá, me chamo Thiago Cainelli! 👋</h3>

                <h1 className="text-blue-700 text-4xl 2xl:text-6xl font-bold  text-center sm:text-left sm:text-5xl">Sou Desenvolvedor Front-End</h1>

                <div data-aos="flip-up" data-aos-duration="1500" className="flex items-center justify-center sm:justify-normal mt-5 gap-5">
                    <Link href="https://linkedin.com/in/thiagocainelli" target="_blank">
                        <button className="bg-blue-700 flex gap-1 items-center justify-center py-2 px-3 rounded-md text-zinc-100 transition-all hover:scale-105 hover:bg-blue-900">
                            <IconBrandLinkedin />
                            LinkedIn
                        </button>
                    </Link>

                    <Link href="https://github.com/thiagocainelli" target="_blank">
                        <button className="bg-blue-700 flex gap-1 items-center justify-center py-2 px-3 rounded-md text-zinc-100 transition-all hover:scale-105 hover:bg-blue-900">
                            <IconBrandGithub />
                            GitHub
                        </button>
                    </Link>
                </div>
            </div>

           <ImageBeginner />
        
        </section>
    )
}

export default Beginner