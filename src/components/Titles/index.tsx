import "./Titles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
interface TitlesProps {
    text: string
}

function Titles({text}: TitlesProps) {
    
    useEffect(() => {
        AOS.init(); 
    }, [])

    return (
        <> 
            <div data-aos="flip-down" data-aos-duration="1000">
                <h2 className="titlesText text-2xl md:text-3xl my-4">{text}</h2>   
            </div>    
        </>
    )
}

export default Titles