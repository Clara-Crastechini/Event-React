import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroDeEventos from "../pages/cadastroDeEventos/CadastroDeEventos";
import CadastroTipoDeEvento from "../pages/cadastroTipoDeEvento/CadastroTipoDeEvento";
import TipoUsuarios from "../pages/tipoUsuarios/TipoUsuarios";
import ListagemDeEventos from "../pages/listagemDeEventos/ListagemDeEventos";


const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/*   / => Login  */}
                <Route path="/" element={<Login/>} exact />
                <Route path="/Eventos" element={<CadastroDeEventos/>} />
                <Route path="/CadastroTipoDeEvento" element={<CadastroTipoDeEvento/>} />
                <Route path="/TipoUsuarios" element={<TipoUsuarios/>} />
                <Route path="/ListagemDeEventos" element={<ListagemDeEventos/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;