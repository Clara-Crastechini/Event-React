import "./Header.css"
import Logo from "../../assets/img/logo1.svg";
import {Link} from "react-router-dom"
import Sair from "../../assets/img/Vector.png"

const Header = () => {
    return(
        <header>
            <div className="layout_grid cabecalho">
                <Link to="/">
                    <img src={Logo} alt="Logo Do Event" />
                </Link>

            <nav className="nav_header">
            <Link className="link_header" to="/">Home</Link>
            <Link className="link_header" to="/Eventos">Eventos</Link>
            <Link className="link_header" to="/TipoUsuarios">Usuarios</Link>
            <Link className="link_header" to="/Contatos">Contatos</Link>
            </nav>

            <nav className="nav_header admin">
                <Link to="/Administrador" className="link_header" href="">Administrador</Link>
            </nav>
                <img src={Sair} alt="" to="/" className="sair"/>


            </div>
        </header>
    )
}

export default Header;