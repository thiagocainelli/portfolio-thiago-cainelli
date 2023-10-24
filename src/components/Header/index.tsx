import Link from "next/link"
import "./Header.css";

function Header() {
    return (
        <header className="flex flex-col gap-8 items-center justify-between p-7 sm:flex-row bg-zinc-800">
            <Link href="/" className="text-3xl sm:text-xl"> CainelliDEV </Link>
            <nav className="flex flex-col gap-5 sm:flex-row">
                <Link className="border-b border-transparent hover:border-slate-300 transition-all" href="/about">SOBRE MIM</Link>
                <Link href="/projects" className="border-b border-transparent hover:border-slate-300 transition-all">PROJETOS</Link>
                <Link href="/tech-skills" className="border-b border-transparent hover:border-slate-300 transition-all">TECH SKILLS</Link>
                <Link href="/contacts" className="border-b border-transparent hover:border-slate-300 transition-all">CONTATOS</Link>
            </nav>
        </header>
    )
}

export default Header