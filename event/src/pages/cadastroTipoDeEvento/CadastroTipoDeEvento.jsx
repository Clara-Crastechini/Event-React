import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista"
import "./CadastroTipoDeEvento.css";

const CadastroTipoDeEvento = () => {
    return(
    <>
    
    <Header/>

    {/* <Cadastro/> */}
    
    <Lista
    tituloLista = "Lista Tipo Evento"
    titulo = "Titulo"
    visibilidade = "none"

    /> 
        
     
    <Footer/>
    
    </>
    )
}

export default CadastroTipoDeEvento;