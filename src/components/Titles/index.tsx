import "./Titles.css";

interface TitlesProps {
    text: string
}

function Titles({text}: TitlesProps) {
    return (
        <>
            <h2 className="titlesText text-xl xl:text-2xl my-4">{text}</h2>
        </>
    )
}

export default Titles