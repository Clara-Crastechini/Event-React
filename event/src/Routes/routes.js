import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroDeEventos from "../pages/cadastroDeEventos/CadastroDeEventos";
import CadastroTipoDeEvento from "../pages/cadastroTipoDeEvento/CadastroTipoDeEvento";
import TipoUsuarios from "../pages/tipoUsuarios/TipoUsuarios";
import ListagemDeEventos from "../pages/listagemDeEventos/ListagemDeEventos";
import { useAuth } from "../contexts/AuthContext";


const Privado = (props) => {
    const {usuario} = useAuth();
    // token, idUsuario, tipoUsuario

    // se nao estiver autenticar, manda login
    if(!usuario){
        return <Navigate to="/" />;
    }

    // se o tipo de usuario nao for permitido, bloqueia
    if (usuario.tipoUsuario !== props.tipoPermitido) {
        // ir para a tela de nao encontrada!
        return <Navigate to="/" />;
    }


    // Senao, renderiza o componente passado
    return <props.item />;
}

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} exact />
                <Route element={<Privado tipoPermitido="admin" item={CadastroDeEventos} />} path="/Eventos"  />
                <Route element={<Privado tipoPermitido="admin" item={CadastroTipoDeEvento}/>} path="/CadastroTipoDeEvento"  />
                <Route element={<Privado tipoPermitido="admin" item={TipoUsuarios}/>} path="/TipoUsuarios"  />
                <Route element={<Privado tipoPermitido="aluno" item={ListagemDeEventos}/>} path="/ListagemDeEventos"  />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;