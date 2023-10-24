import { IconArrowBigUpLines } from "@tabler/icons-react";
import Link from "next/link";
import "./IconBackToTop.css"

function IconBackToTop() {
    return (
        <>
            <Link href="/">
                <button className="rounded-full w-16 h-16 mt-28 flex items-center justify-center">
                    <IconArrowBigUpLines width={30} height={30} />
                </button>
            </Link>
        </>
            
                
            
        
    )
}

export default IconBackToTop