import './Navbar.css';
import CartWidget from './CartWidget/CartW';



export const Navbar = () => {

    return (
        <header className="header">
            <div className='header__conteiner'>
                <h1 className="header__logo">LOGO</h1>

                <nav className="header__nav">
                    <a className="header__link" href="#">Inicio</a>
                    <a className="header__link" href="#">Nosotros</a>
                    <a className="header__link" href="#">Bodegas</a>
                    <a className="header__link" href="#">Nuestros Vinos</a>
                    <a className="header__link" href="#">Nuestros Espumantes</a>
                    <a className="header__link" href="#">Contacto</a>
                    <a className="header__link" href="#">Turismo</a>
                    <a className="header__link" href="#">
                     <CartWidget />
                    </a>
                </nav>
            </div>
        </header>
    )
}