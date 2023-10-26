import "./Titles.css";

interface TitlesProps {
    text: string
}

function Titles({text}: TitlesProps) {
    return (
        <>
            <h2 className="titlesText text-xl md:text-2xl xl:text-3xl my-4">{text}</h2>
        </>
    )
}

export default Titles