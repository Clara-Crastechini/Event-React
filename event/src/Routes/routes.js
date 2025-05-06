import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroDeEventos from "../pages/cadastroDeEventos/CadastroDeEventos";
import CadastroTipoDeEvento from "../pages/cadastroTipoDeEvento/CadastroTipoDeEvento";


const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/*   / => Login  */}
                <Route path="/" element={<Login/>} exact />
                {/*   /CadastroFilme  => cadastro filme*/}
                <Route path="/Eventos" element={<CadastroDeEventos/>} />
                <Route path="/CadastroTipoEvento" element={<CadastroTipoDeEvento/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;