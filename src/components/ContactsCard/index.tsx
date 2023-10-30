"use client"

import Link from "next/link"
import "./ContactsCard.css"
import Image from "next/image"
import linkedin from "@/images/socials/linkedin.svg"
import github from "@/images/socials/github.svg"
import email from "@/images/socials/email.svg"
import whatsapp from "@/images/socials/whatsapp.svg"
import { useState } from "react"
import emailjs from "@emailjs/browser";
interface ContactsCardProps{
    isDark: boolean
}

function ContactsCard({ isDark }: ContactsCardProps) {

    const [name, setName] = useState<string>("")
    const [personalEmail, setPersonalEmail] = useState<string>("")
    const [contact, setContact] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [submitOk, setSubmitOk] = useState<boolean>(false)

    
    const handleSubmit = (ev: any) => { 
        ev.preventDefault()

        const cleanInputValues = [
            setName(""),
            setPersonalEmail(""),
            setContact(""),
            setMessage("")
        ]

        const templateParams = {
            from_name: name,
            email: personalEmail,
            contact: contact,
            message: message
        }
      
        const confirmation = confirm(`
        Confirma o envio da mensagem com os dados abaixo?
            
        Nome: ${name}
        Email: ${personalEmail}
        Contato: ${contact}
        Mensagem: ${message}
        `)

        if(confirmation) {
            emailjs.send("service_4hrytss", "template_td0dibr", templateParams, "wkMbZD_9b-Nkr_SYF")
            .then((response) => {
                console.log("Email enviado", response.status, response.text)
                setSubmitOk(true)
                cleanInputValues
            }, (err) => {
                console.log("ERRO: ", err)
            })
        }
        
        return;   
    }

    return (
        <div className="cardContacts p-5 flex flex-col gap-5 mt-10 mb-14 lg:flex-row ">
            
            <div className="border-b pb-7 border-zinc-700 lg:border-b-0 lg:border-e lg:pe-10">
                
                <h3 className="text-center text-xl mb-7">Envie-me uma mensagem!</h3>
                
                <form className="flex flex-col" method="POST" autoComplete="off" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="text-blue-700">Nome *</label>
                    <input
                        className={`outline-none border border-transparent py-1 px-2 transition-all rounded-sm focus-within:border-blue-700 ${isDark ?"bg-zinc-900" : "bg-zinc-300"}`} 
                        type="text" 
                        name="name" 
                        id="name"
                        value={name} 
                        onChange={(ev) => setName(ev.target.value)}
                        required
                        minLength={3}
                    />

                    <label htmlFor="email" className="mt-5 text-blue-700">Email *</label>
                    <input 
                        className={`outline-none border border-transparent py-1 px-2 transition-all rounded-sm focus-within:border-blue-700 ${isDark ?"bg-zinc-900" : "bg-zinc-300"}`}
                        type="email" 
                        name="email" 
                        id="email"
                        value={personalEmail} 
                        onChange={(ev) => setPersonalEmail(ev.target.value)}
                        required
                        minLength={10}
                    />

                    <label htmlFor="contact" className="mt-5 text-blue-700">Contato *</label>
                    <input
                        className={`outline-none border border-transparent py-1 px-2 transition-all rounded-sm focus-within:border-blue-700 ${isDark ?"bg-zinc-900" : "bg-zinc-300"}`}
                        type="tel" 
                        name="contact" 
                        id="contact"
                        value={contact} 
                        onChange={(ev) => setContact(ev.target.value)}
                        required
                        minLength={8}
                    />

                    <label htmlFor="message" className="mt-5 text-blue-700">Mensagem *</label>
                    <textarea
                        className={`w-full h-[100px] outline-none border border-transparent py-1 px-2 transition-all rounded-sm focus-within:border-blue-700 ${isDark ?"bg-zinc-900" : "bg-zinc-300"}`}
                        name="message" 
                        id="message"
                        value={message} 
                        onChange={(ev) => setMessage(ev.target.value)}
                        required
                        minLength={2}
                    />

                    <div className="mt-3 mb-2">
                        <p className="text-xs">* Campos obrigatórios.</p>
                    </div>

                    <div className="flex items-center justify-center mt-7">
                        <button
                            type="submit"
                            className="bg-blue-700 text-zinc-100 px-2 py-1  rounded-md hover:bg-blue-900 active:brightness-50"
                        >
                            Enviar mensagem
                        </button>
                    </div>

                    {submitOk && (
                        <div className={`flex flex-col items-center justify-center mt-7 w-full cursor-default border border-transparent py-2 px-2 rounded-sm ${isDark ?"bg-zinc-900" : "bg-zinc-300"}`}>
                            <p className="text-sm sm:text-base">Mensagem enviada.</p>
                            <p className="text-sm sm:text-base">Muito obrigado! 😀 </p>
                        </div>
                    )}
                </form>
            </div>

            <div className="lg:px-5">
                <h3 className="text-center text-xl mb-5 lg:mb-0">Links de contato</h3>
                
                <div className="flex flex-col justify-evenly gap-5 lg:gap-0 h-full"> 
                    <Link href="https://www.linkedin.com/in/thiagocainelli" target="_blank" className="flex items-center gap-3">
                        <button className="w-12 h-12 hover:scale-105 hover:brightness-125">
                            <Image 
                                src={linkedin}
                                alt="Linkedin Image"
                            />
                        </button>

                        <p className={`border-b hover:brightness-50 ${isDark ? "border-zinc-100" : "border-zinc-800"}`}>/in/thiagocainelli</p>
                    </Link>

                    <Link href="https://www.linkedin.com/in/thiagocainelli" target="_blank" className="flex items-center gap-3">
                        <button className="w-12 h-12 hover:scale-105 hover:brightness-125">
                            <Image 
                                src={github}
                                alt="GitHub Image"
                            />
                        </button>

                        <p className={`border-b hover:brightness-50 ${isDark ? "border-zinc-100" : "border-zinc-800"}`}>/thiagocainelli</p>
                    </Link>

                    <Link href="mailto:thiagocainelli@gmail.com" target="_blank" className="flex items-center gap-3">
                        <button className="w-12 h-12 hover:scale-105 hover:brightness-125">
                            <Image 
                                src={email}
                                alt="Email Image"
                            />
                        </button>

                        <p className={`border-b hover:brightness-50 ${isDark ? "border-zinc-100" : "border-zinc-800"}`}>thiagocainelli@gmail.com</p>
                    </Link>

                    <Link href="https://api.whatsapp.com/send?phone=5516982514074" target="_blank" className="flex items-center gap-3">
                        <button className="w-12 h-12 hover:scale-105 hover:brightness-125">
                            <Image 
                                src={whatsapp}
                                alt="WhatsApp Image"
                            />
                        </button>

                        <p className={`border-b hover:brightness-50 ${isDark ? "border-zinc-100" : "border-zinc-800"}`}>+55 (16) 98251-4074</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactsCard