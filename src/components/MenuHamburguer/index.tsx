import { useState } from "react";
import "./MenuHamburguer.css";
import Link from "next/link";

interface MenuHamburgerProps {
    isDark: boolean
}

function MenuHamburguer ({ isDark }: MenuHamburgerProps) {
    
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="lg:hidden">
            {/* Barras do menu hamburguer */}
            <div className="flex flex-col cursor-pointer" onClick={toggleMenu}> 
                <div className={`${isOpen ? 'bar bar1' : 'bar'} ${isDark ? "bg-zinc-100" : "bg-zinc-800"}`}></div>
                <div className={`${isOpen ? 'bar bar2' : 'bar'} ${isDark ? "bg-zinc-100" : "bg-zinc-800"}`}></div>
                <div className={`${isOpen ? 'bar bar3' : 'bar'} ${isDark ? "bg-zinc-100" : "bg-zinc-800"}`}></div>
            </div>

            {/* Menu aberto e os items */}
            {isOpen && (
                <nav className={`menu ${isDark ? "bg-zinc-100" : "bg-zinc-800" }`}>
                    
                    <div className="ps-2 flex flex-col justify-start items-start gap-3">
                        <button className={`pt-3 text-2xl ${isDark ? "text-zinc-800" : "text-zinc-100"}`} >
                            X
                        </button>
                        <Link className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-800 text-zinc-800" : "hover:border-zinc-100 text-zinc-100" }`} href="#about">SOBRE MIM</Link>
                        <Link href="#tech-skills" className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-800 text-zinc-800" : "hover:border-zinc-100 text-zinc-100" }`}>TECH SKILLS</Link>
                        <Link href="#projects" className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-800 text-zinc-800" : "hover:border-zinc-100 text-zinc-100" }`}>PROJETOS</Link>
                        <Link href="#contacts" className={`border-b border-transparent transition-all ${isDark ? "hover:border-zinc-800 text-zinc-800" : "hover:border-zinc-100 text-zinc-100" }`}>CONTATOS</Link>
                    </div>
                </nav>
            )}
       
        </div>
    )
}

export default MenuHamburguer