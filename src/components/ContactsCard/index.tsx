
import Link from "next/link"
import "./ContactsCard.css"
import Image from "next/image"
import linkedin from "@/images/linkedin.svg"
import github from "@/images/github.svg"
import email from "@/images/email.svg"
import whatsapp from "@/images/whatsapp.svg"

function ContactsCard() {
    return (
        <div className="cardContacts p-5 flex flex-col gap-5 my-10 lg:flex-row ">
            
            <div className=" border-b pb-7 border-zinc-700 lg:border-b-0 lg:border-e lg:pe-10">
                <h3 className="text-center text-2xl mb-7">Envie-me uma mensagem!</h3>
                <form className="flex flex-col" method="POST" autoComplete="off">
                    <label htmlFor="name" className="mt-3 text-blue-700">Nome</label>
                    <input
                        className="bg-transparent outline-none border-b-2  border-zinc-500 p-1 transition-all focus-within:border-blue-700" 
                        type="text" 
                        name="name" 
                        id="name" 
                        required
                        minLength={1}
                    />
                    <label htmlFor="email" className="mt-3 text-blue-700">Email</label>
                    <input 
                        className="bg-transparent outline-none border-b-2  border-zinc-500 p-1 focus-within:border-blue-700"
                        type="email" 
                        name="email" 
                        id="email" 
                        required
                        minLength={10}
                    />
                    <label htmlFor="contact" className="mt-3 text-blue-700">Contato</label>
                    <input
                        className="bg-transparent outline-none border-b-2  border-zinc-500 p-1 focus-within:border-blue-700"
                        type="tel" 
                        name="contact" 
                        id="contact" 
                        required
                        minLength={8}
                    />

                    <div className="flex items-center justify-center mt-7">
                        <button 
                            type="submit"
                            className="btnSubmit  border border-zinc-600 px-2 py-1  rounded-md hover:brightness-75 active:brightness-50"
                        >
                            Enviar mensagem
                        </button>
                    </div>
                </form>
            </div>

            <div className="lg:px-5">
                <h3 className="text-center text-2xl mb-5 lg:mb-0">Links de contato</h3>
                
                <div className="flex flex-col justify-evenly gap-5 lg:gap-0 h-full"> 
                    <Link href="https://www.linkedin.com/in/thiagocainelli" target="_blank" className="flex items-center gap-2">
                        <button className="w-12 h-12 p-1 rounded-full border border-blue-700 hover:scale-105 hover:brightness-125">
                            <Image 
                                src={linkedin}
                                alt="Linkedin Image"
                            />
                        </button>

                        <p className="border-b border-slate-300 hover:brightness-75">/in/thiagocainelli</p>
                    </Link>

                    <Link href="https://www.linkedin.com/in/thiagocainelli" target="_blank" className="flex items-center gap-2">
                        <button className="w-12 h-12 p-2 rounded-full border border-blue-700 hover:scale-105 hover:brightness-125">
                            <Image 
                                src={github}
                                alt="GitHub Image"
                            />
                        </button>

                        <p className="border-b border-slate-300 hover:brightness-75">/thiagocainelli</p>
                    </Link>

                    <Link href="mailto:thiagocainelli@gmail.com" target="_blank" className="flex items-center gap-2">
                        <button className="w-12 h-12 p-2 rounded-full border border-blue-700 hover:scale-105 hover:brightness-125">
                            <Image 
                                src={email}
                                alt="Email Image"
                            />
                        </button>

                        <p className="border-b border-slate-300 hover:brightness-75">thiagocainelli@gmail.com</p>
                    </Link>

                    <Link href="https://api.whatsapp.com/send?phone=5516982514074" target="_blank" className="flex items-center gap-2">
                        <button className="w-12 h-12 p-2 rounded-full border border-blue-700 hover:scale-105 hover:brightness-125">
                            <Image 
                                src={whatsapp}
                                alt="WhatsApp Image"
                            />
                        </button>

                        <p className="border-b border-slate-300 hover:brightness-75">+55 (16) 98251-4074</p>
                    </Link>
   
                </div>
            </div>
        </div>
    )
}

export default ContactsCard