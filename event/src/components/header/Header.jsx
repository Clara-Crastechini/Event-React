import "./Header.css"
import Logo from "../../assets/img/logo1.svg";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom"
import Sair from "../../assets/img/Vector.png"
import Swal from "sweetalert2";

const Header = (props) => {
    
    
    const navigate  = useNavigate()
    function sair() {
        Swal.fire({
            title: "Você deseja sair?",
            text: "Terá que fazer login novamente!",
            icon: "warning",
            iconColor: "#610315",
            showCancelButton: true,
            confirmButtonColor: "#610315",
            cancelButtonColor: "#610315",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Sim, sair."
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/")
            }
        });
    }

    return (
        <header>
            <div className="layout_grid cabecalho">
                <Link to="/">
                    <img src={Logo} alt="Logo Do Event" />
                </Link>

                <nav className="nav_header">
                    <Link className="link_header" to="/">Home</Link>
                    <Link className="link_header" to="/Eventos">Eventos</Link>
                    <Link className="link_header" to="/TipoUsuarios">Usuarios</Link>
                </nav>

                <nav className="nav_header admin">
                    <Link to="/Administrador" className="link_header" href="">{props.nomeusu}</Link>
                </nav>
                
                <img src={Sair} alt="" to="/" className="sair" onClick={sair} />


            </div>
        </header>
    )
}

export default Header;