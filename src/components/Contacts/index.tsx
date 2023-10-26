import ContactsCard from "@/components/ContactsCard";
import Titles from "@/components/Titles";

interface ContactsProps{
    isDark: boolean
}

function Contacts ({ isDark }: ContactsProps) {
    return (
        <section id="contacts" className={`w-full flex flex-col items-center border-t mb-3 ${isDark ? "border-zinc-700" : "border-zinc-300"}`}>
            <Titles text="Contatos" />

            <div>
                <ContactsCard isDark={isDark} />
            </div>

        </section>
    )
}

export default Contacts