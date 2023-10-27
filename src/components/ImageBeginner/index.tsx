import Image from "next/image"
import ThiagoImg from "@/images/myPerson/thiago1-circle.png";
import { motion } from 'framer-motion';

function ImageBeginner() {
    return (
        <div>
            <motion.div
                initial={{ y: 0 }} // Define a posição inicial da imagem
                animate={{ y: [10, -10, 10] }} // Define a animação de subida e descida
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }} // Define a duração e repetição da animação
            >
                <Image
                className="" 
                src={ThiagoImg} 
                alt="Imagem 1 - Thiago Cainelli"
            />
            </motion.div>   
        </div>
    )
}

export default ImageBeginner