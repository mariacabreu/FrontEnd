import './style.css'

export default function() {
    return (
        <footer className='footer-container'>
            <p>
                &copy; { new Date().getFullYear()} - Todos os direitos reservados.
                <br/> Desenvolvido por Maria Clara Abreu
            </p>
        </footer>
    )
}