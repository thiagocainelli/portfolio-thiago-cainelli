import ContactsCard from "@/components/ContactsCard";
import Titles from "@/components/Titles";

function Contacts () {
    return (
        <section id="contacts" className="w-full flex flex-col items-center border-t border-zinc-800 mb-3">
            <Titles text="Contatos" />

            <div>
                <ContactsCard />
            </div>

        </section>
    )
}

export default Contacts