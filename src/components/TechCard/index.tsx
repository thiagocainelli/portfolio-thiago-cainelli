import Image from "next/image"
import "./TechCard.css";

interface TechCardProps {
    name: string
    localImage: any
}

function TechCard({ localImage, name }: TechCardProps) {
    return (
        <div className="w-[120px] p-3 bg-zinc-800 flex flex-col items-center justify-center hover:scale-105">
            <div className="mb-3 border-b border-zinc-500">
                <Image
                    className="cardImages mb-3"
                    src={localImage} 
                    alt={name} 
                />
            </div>
            <p className="w-full text-center ">
                {name}
            </p>
        </div>
    )
}

export default TechCard