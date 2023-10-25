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
                <button className={`rounded-full w-12 h-12 mt-28 flex items-center justify-center ${iconIsOpened ? 'btnToTop' : 'hidden'}`}>
                    <IconArrowBigUpLines width={30} height={30} />
                </button>    
            </Link>         
        </> 
    )
}

export default IconBackToTop