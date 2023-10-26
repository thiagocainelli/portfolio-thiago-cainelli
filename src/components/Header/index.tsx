import { IconMoonFilled } from "@tabler/icons-react";
import "./Header.css";
import Link from "next/link";

interface HeaderProps {
    changeTheme: () => void,
    isDark: boolean
}

function Header( {changeTheme, isDark}: HeaderProps ) {
    return (
        <header className="flex flex-col gap-8 items-center justify-between p-7 sm:flex-row w-full">
            <Link href="/" className="text-3xl sm:text-xl"> CainelliDEV </Link>
            <nav className="flex flex-col gap-5 sm:flex-row">
                <Link className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-100" : "hover:border-zinc-800" }`} href="#about">SOBRE MIM</Link>
                <Link href="#tech-skills" className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-100" : "hover:border-zinc-800" }`}>TECH SKILLS</Link>
                <Link href="#projects" className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-100" : "hover:border-zinc-800" }`}>PROJETOS</Link>
                <Link href="#contacts" className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-100" : "hover:border-zinc-800" }`}>CONTATOS</Link>
            </nav>

            <div className="flex items-center gap-1">
                <button onClick={changeTheme} className="bg-blue-700 text-zinc-100 w-10 h-10 rounded-md flex items-center justify-center hover:scale-105">
                    <IconMoonFilled/>
                </button>
            </div>
            
        </header>
    )
}

export default Header