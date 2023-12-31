import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import "./Header.css";
import Link from "next/link";
import LogoDark from "@/public/logotipos/logotipo-dark.png"
import LogoLight from "@/public/logotipos/logotipo-light.png"
import Image from "next/image";
import MenuHamburguer from "../MenuHamburguer";
interface HeaderProps {
    changeTheme: () => void,
    isDark: boolean
}

function Header( {changeTheme, isDark}: HeaderProps ) {
    return (
        <header className="flex items-center justify-between flex-wrap gap-4 p-7 sm:flex-row w-full">
            <Link href="/" className="text-3xl sm:text-xl">
                <Image
                    className="w-[200px]" 
                    src={isDark ? LogoDark : LogoLight} 
                    alt="Logotipo"
                />
            </Link>

            <nav className="lg:flex flex-col gap-5 sm:flex-row hidden">
                <Link className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-100" : "hover:border-zinc-800" }`} href="#about">SOBRE MIM</Link>

                <Link href="#tech-skills" className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-100" : "hover:border-zinc-800" }`}>TECH SKILLS</Link>

                <Link href="#projects" className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-100" : "hover:border-zinc-800" }`}>PROJETOS</Link>

                <Link href="#contacts" className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-100" : "hover:border-zinc-800" }`}>CONTATOS</Link>
            </nav>

            <MenuHamburguer isDark={isDark} />

            <div className="flex items-center gap-1">
                <button onClick={changeTheme} className="bg-blue-700 text-zinc-100 w-20 h-10 rounded-md flex items-center justify-center gap-2 hover:scale-105 hover:bg-blue-900">
                    {isDark? "Light" : "Dark"}
                    {isDark? <IconSunFilled/> : <IconMoonFilled/>}
                </button>
            </div>  
        </header>
    )
}

export default Header
