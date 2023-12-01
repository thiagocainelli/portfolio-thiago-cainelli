import Link from "next/link";
import "./Footer.css";
import Image from "next/image";
import LogoDark from "@/public/logotipos/logotipo-dark.png"
import LogoLight from "@/public/logotipos/logotipo-light.png"
interface FooterProps {
    isDark: boolean
}

function Footer ({ isDark }: FooterProps) {
    return (
        <footer className="flex items-center flex-col justify-center gap-4 p-7 w-full">
            <Link href="/" className="text-3xl sm:text-xl">
                <Image
                    className="w-[200px]" 
                    src={isDark ? LogoDark : LogoLight} 
                    alt="Logotipo"
                />
            </Link>

            <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-1">
                <p>&copy;Thiago Cainelli 2023.</p>
                <p>Todos os direitos reservados.</p>
            </div>    
        </footer>
    )
}

export default Footer