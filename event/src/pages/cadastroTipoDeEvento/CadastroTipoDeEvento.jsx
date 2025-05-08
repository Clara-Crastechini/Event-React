import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista"
import "./CadastroTipoDeEvento.css";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_cadastrotipoevento from "../../assets/img/cadastrotipoevento.png"


const CadastroTipoDeEvento = () => {
    return(
    <>
    <Header/>

    <Cadastro
    img_banner={banner_cadastrotipoevento}
    tituloCadastro = "Cadastro Tipo de Evento"
    nomes = "Titulo"
    visible = "none"
    selecione="Selecione"/>
    
    <Lista
    tituloLista = "Tipo Evento"
    titulo = "Titulo"
    visibilidade = "none"

    /> 
        
     
    <Footer/>
    
    </>
    )
}

export default CadastroTipoDeEvento;