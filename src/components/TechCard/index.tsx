import Image from "next/image"

interface TechCardProps {
    name: string
    image: any
    isDark: boolean
}

function TechCard({ image, name, isDark }: TechCardProps) {
    return (
        <div className={`w-[120px] p-3 flex flex-col items-center justify-center border-2 border-transparent transition-all hover:scale-105 hover:border-blue-700 cursor-default ${isDark ? "bg-zinc-700" : "bg-zinc-300"}`}>

            <div className="mb-3 border-b border-zinc-500">
                <Image
                    className="cardImages mb-3"
                    src={image} 
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