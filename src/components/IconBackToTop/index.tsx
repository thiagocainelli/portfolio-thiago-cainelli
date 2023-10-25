import { IconArrowBigUpLines } from "@tabler/icons-react";
import Link from "next/link";
import "./IconBackToTop.css"

function IconBackToTop() {
    return (
        <>
            <Link href="/">
                <button className="btnToTop rounded-full w-12 h-12 mt-28 flex items-center justify-center">
                    <IconArrowBigUpLines width={30} height={30} />
                </button>
            </Link>
        </>
            
                
            
        
    )
}

export default IconBackToTop