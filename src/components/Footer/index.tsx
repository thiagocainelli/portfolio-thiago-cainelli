import "./Footer.css";

function Footer () {
    return (
        <footer className="flex items-center justify-center p-7 ">
            <div className="flex flex-col justify-center items-center gap-1 sm:flex-row">
                <p>&copy; Thiago Cainelli 2023.</p>
                <p>Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer