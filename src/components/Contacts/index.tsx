import ContactsCard from "@/components/ContactsCard";
import Titles from "@/components/Titles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
interface ContactsProps{
    isDark: boolean
}

function Contacts ({ isDark }: ContactsProps) {
    
    useEffect(() => {
        AOS.init(); 
    }, [])
    
    return (
        <section id="contacts" className={`w-full flex flex-col items-center border-t mb-3 ${isDark ? "border-zinc-700" : "border-zinc-300"}`}>
            <Titles text="Contatos" />

            <div data-aos="fade-down-right" data-aos-duration="2000">
                <ContactsCard isDark={isDark} />
            </div>

        </section>
    )
}

export default Contacts