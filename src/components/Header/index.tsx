import { IconMoonFilled } from "@tabler/icons-react";
import "./Header.css";
import Link from "next/link";

function Header() {
    return (
        <header className="flex flex-col gap-8 items-center justify-between p-7 sm:flex-row w-full">
            <Link href="/" className="text-3xl sm:text-xl"> CainelliDEV </Link>
            <nav className="flex flex-col gap-5 sm:flex-row">
                <Link className="border-b border-transparent hover:border-zinc-800 transition-all" href="#about">SOBRE MIM</Link>
                <Link href="#tech-skills" className="border-b border-transparent hover:border-zinc-800 transition-all">TECH SKILLS</Link>
                <Link href="#projects" className="border-b border-transparent hover:border-zinc-800 transition-all">PROJETOS</Link>
                <Link href="#contacts" className="border-b border-transparent hover:border-zinc-800 transition-all">CONTATOS</Link>
            </nav>

            <div className="flex items-center gap-1">
                <p>Tema</p>
                <button className="border-2 border-blue-700 w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 hover:brightness-75">
                    <IconMoonFilled/>
                </button>
            </div>
            
        </header>
    )
}

export default Header