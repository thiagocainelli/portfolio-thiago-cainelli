"use client"

import { IconArrowBigUpLines } from "@tabler/icons-react";
import Link from "next/link";
import "./IconBackToTop.css"
import { useEffect, useState } from "react";

function IconBackToTop() {
    
    
    const [iconIsOpened, setIconIsOpened] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIconIsOpened(true);
            } else {
                setIconIsOpened(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

   

    return (
        <> 
            <Link href="/" >
                <button className={` bg-blue-700 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-md text-zinc-100 transition-all hover:mb-[10px] hover:bg-blue-900 ${iconIsOpened ? 'btnToTop' : 'hidden'}`}>
                    <IconArrowBigUpLines width={30} height={30} />
                </button>    
            </Link>         
        </> 
    )
}

export default IconBackToTop